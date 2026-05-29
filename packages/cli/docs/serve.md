# `mbs serve` 本地 HTTP 网关

`mbs serve` 启动一个本地 HTTP 服务，让浏览器页面可以复用 CLI 已有认证去查询 MBS API。它的核心用途是支持业务接口的页面化二次开发：前端可以把 manifest 中已审计的只读接口组合成内部看板、运营辅助页、临时分析页或业务原型，而不用在页面里重新实现马帮登录、Cookie 刷新和 API 转发。

业务查询逻辑仍以 audit manifest 为来源，不手写业务路由。这样页面二次开发只负责展示、筛选、交互和组合业务数据，接口边界仍跟 CLI 的只读约束保持一致。

## 适用场景

- 基于已封装业务接口快速做一个内部业务页面
- 为运营、财务、组织等业务数据制作本地只读看板
- 在正式封装前，用页面原型验证字段、筛选条件和交互流程
- 让 AI 或前端工具通过浏览器 fetch 调用本地网关，而不是直接处理 MBS 认证

## 启动

```bash
mbs login
mbs serve --manifest fixtures/sample-audit-manifest.json
```

常用参数：

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `--manifest <file>` | 必填 | audit manifest JSON 路径 |
| `--port <number>` | `7878` | 本地监听端口 |
| `--host <host>` | `127.0.0.1` | 监听地址；默认只绑定本机 |

示例：

```bash
mbs serve --manifest fixtures/sample-audit-manifest.json --port 7878
```

启动成功后会输出 JSON，包含 `address`、`host`、`port`、`routes` 和安全提示。

## 路由规则

`serve` 会从 manifest 的 `modules[].actions[]` 生成本地路由：

```text
/api/<domain>/<action>
```

如果上游 API path 中包含 `{param}`，会追加为本地路径参数：

```text
上游: /v1/org/sites/{siteId}
本地: /api/org/site-detail/:siteId
```

请求转发规则：

| manifest method | 本地请求 | 转发到 APIClient |
|-----------------|----------|------------------|
| `GET` | query string | `client.get(path, { params: query })` |
| `POST` | JSON body | `client.post(path, body)` |

可用路由发现接口：

```text
GET /__routes
```

返回每个路由的 `method`、`url`、`domain`、`action` 和 `description`。

## 业务页面调用示例

```javascript
const res = await fetch('http://127.0.0.1:7878/api/account/page', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ currentPage: 1, pageSize: 10 }),
})
const data = await res.json()
```

## 测试页面

仓库内提供了一个零依赖静态页面，用来验证本地网关、路由发现和 `account/page` 接口是否正常接通：

```bash
node packages/cli/bin/run.js serve --manifest fixtures/sample-audit-manifest.json --port 7878
```

然后直接打开 [`examples/serve-dashboard/index.html`](../../../examples/serve-dashboard/index.html)，或用任意本地静态服务打开 `examples/serve-dashboard/` 目录。页面会默认请求 `http://127.0.0.1:7878/__routes` 和 `http://127.0.0.1:7878/api/account/page`，并基于当前页账号数据展示总量、分页、平台、状态、启用状态和密码过期统计。

如果页面显示认证失败，先运行 `mbs login`，再重新启动或刷新 `mbs serve`。

## 安全边界

- `serve` 没有额外鉴权，会复用当前机器上的 CLI 登录态。
- 默认只监听 `127.0.0.1`，不要改成公网或局域网地址。
- CORS 只允许 `localhost`、`127.0.0.1` 和本地文件页面的 `null` origin。
- 本 CLI 仍是只读工具，只允许 manifest 中的 `GET` 与查询类 `POST`。

## 验证

```bash
pnpm --filter @mb-it-org/cli test
node packages/cli/bin/run.js serve --manifest fixtures/sample-audit-manifest.json --help
```

## 全量只读代理

如需不依赖 audit manifest，直接代理任意上游只读接口，可显式开启全量代理模式：

```bash
mbs serve --proxy-all
```

调用规则：

```text
GET  /proxy/<upstream-api-path>?key=value
POST /proxy/<upstream-api-path>
```

示例：

```javascript
const res = await fetch('http://127.0.0.1:7878/proxy/gateway/account-center-service/account/page/noauth', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ currentPage: 1, pageSize: 10 }),
})
const data = await res.json()
```

`--proxy-all` 仍只开放 `GET` 和查询类 `POST`，不会代理 `PUT`、`PATCH`、`DELETE`。

## 项目内接口

如需把项目里已经封装的业务接口全部开放为本地 HTTP 路由：

```bash
mbs serve --project-apis
```

`--proxy-all` 也会自动开启这些项目内接口。当前项目接口包括：

```text
POST /api/account/page
GET  /api/shops/health
GET  /api/doris/schemas
GET  /api/doris/show-create-table?tableName=<database.table>
POST /api/doris/query
GET  /api/org/platforms
GET  /api/org/sites?platform=<ids>
POST /api/org/leaders
POST /api/org/managers
POST /api/org/little-leaders
POST /api/org/shop-managers
POST /api/org/employees
POST /api/org/shops
```

## Manifest-driven project APIs

`--project-apis` reads the generated project manifest built from `manifests/mbs-api-manifest.json`.
Do not add project APIs by hand in `serve`; add or update actions in the manifest, then run:

```bash
pnpm gen:manifest
pnpm build
```

The generated runtime manifest is bundled at `packages/cli/src/serve/generated-manifest.ts`.
`fixtures/*` is only for samples or incremental validation.
