# 全局参考

## 认证与配置

### 首次配置

```bash
mbs login              # 显示列表，选择扫码、账号密码或后台长期 Refresh Token 登录
mbs login --password   # 终端隐藏输入账号密码并直接登录（等同 -p）
mbs whoami             # 验证认证状态
mbs refresh            # 使用当前长期凭据刷新短期 Access Token 与兼容 SESSION
```

说明：
- 每次有效执行 `mbs login` 都会先删除当前认证缓存（`SESSION`、`AUTH_REFRESH`、管理型 `LongToken`、Refresh 到期时间和用户摘要），再显示选择列表或读取新凭据；取消或登录失败不会恢复旧登录态
- `mbs login` 先显示可键盘选择的登录方式列表；扫码选项打开 `/eshop/manager/login.jsp`，只轮询隔离浏览器上下文中的 `SESSION` 与 `AUTH_REFRESH` Cookie，不监听登录请求或解析 `MBS_KEY`
- `--password` / `-p`：先校验认证地址，再在终端分别读取账号和隐藏密码，直接调用认证中心；该模式不会启动浏览器
- 后台长期 Refresh Token：在选择列表中选中后通过隐藏终端手工粘贴；CLI 按管理型 `LongToken` 协议交换，不启动浏览器，也不提供参数或环境变量入口
- 密码登录仅允许 HTTPS；只有 `localhost`、`127.0.0.1`、`::1` 回环开发代理可使用 HTTP
- CLI 缓存严格二选一：登录型 `AUTH_REFRESH` + 到期时间，或不轮换的管理型 `LongToken`；两者都与兼容 `SESSION` 和最小用户摘要保存在当前用户认证缓存
- `mbs refresh` 使用缓存中的唯一长期凭据调用 `/gateway/auth-center-service/auth/token/exchange/compat-session`；登录型 Cookie 会轮换，管理型 Token 保持不变，短期 Access Token 仅留在当前进程内存且绝不输出或持久化
- 业务请求首次认证失败时最多自动交换并重试一次；重试使用内存 Bearer 与兼容 SESSION，最终失败时重新执行 `mbs login`
- `MBS_KEY` 仍禁止捕获、读取、保存、转发或记录；登录型 Refresh Cookie 不是 `MBS_KEY`，也不能直接访问业务接口
- 默认不需要预装浏览器运行时；不要在阅读文档或环境检查阶段主动安装
- 只有系统 Chrome / Edge 都不可用，且 `mbs login` 明确提示缺少浏览器运行时时，才说明阻塞点并按提示处理

### CI / 无交互环境

当前 CLI 不提供账号密码或长期用户凭据的无交互输入入口。无人值守任务可以预先通过交互式 `mbs login` 导入后台签发的受限管理型长期 Token，并把 CLI 配置目录挂载为仅运行用户可读写的持久卷；不得把 Token 写入命令行、环境变量、镜像、前端资源或日志。多用户系统仍应使用独立授权机制，不能共享这份单用户缓存。

### 动态只读接口请求

`find → describe` 确认一个 `operationType=QUERY` 的接口后，即使没有预生成业务命令，也可使用公开 `request` 命令。命令会自动添加 `/gateway/cli`，path 只填写详情返回的接口路径：

```bash
mbs request GET /v1/orders --params '{"status":"open"}'
mbs request POST /yypms/pms/middlePanel/getMiddlePanelList --body '{"page":1,"pageSize":20}'
mbs request --api-id 123 --body '{"groupCompanyId":1,"pagesize":100}'
mbs request --api-id 456 --body-file ./payload.xml
```

- 仅允许 GET 和查询类 POST。
- 非 JSON 请求必须使用 `--api-id` 重新读取后端编码元数据；不带 `--api-id` 的旧形式继续按 JSON 兼容。
- path 参数必须先替换；query 字段使用 `--params`，POST body 字段使用 `--body`。
- JSON、urlencoded、multipart 的 `--body` 是 JSON；TEXT/XML 的 `--body` 是原始文本；BINARY 的 `--body` 是严格 Base64。
- `--body-file` 只用于 TEXT、XML、BINARY；multipart FILE 字段在 `--body` JSON 中填写本次运行的本地路径。
- 嵌套表单默认使用 `BRACKET` 并展开；`explode=false` 的对象或对象数组作为单个 JSON 字符串值发送，标量数组以逗号合并；不要猜测或覆盖详情中的序列化配置。
- 禁止传入完整 URL、`//host`、查询串或未替换的 `{param}`。
- 不猜测 `describe` 未提供的参数值。

### 开发专用直通命令（兼容入口）

`raw` 仅保留给已有开发脚本探索接口。普通动态业务查询使用经过路径校验的 `mbs request`。

```bash
mbs raw GET /v1/orders
mbs raw POST /v1/export --body '{"from":"2026-01-01","to":"2026-04-08"}'
```

### 本地 HTTP 网关（业务页面二次开发）

`mbs serve` 会读取 audit manifest，并在本机启动一个 HTTP 网关，让浏览器页面复用 CLI 认证查询 MBS API。它适合基于已审计的业务接口做内部看板、运营辅助页、临时分析页等页面化二次开发，页面侧无需接触 MBS Cookie 或自行转发 API；首次认证失败会由 CLI 交换一次并重试，最终失败时重新登录。

```bash
mbs serve --manifest fixtures/sample-audit-manifest.json
mbs serve --manifest fixtures/sample-audit-manifest.json --port 7878
```

说明：
- 默认监听 `127.0.0.1:7878`，不要暴露到公网或局域网
- 本地路由格式为 `/api/<domain>/<action>`；带 `{param}` 的 API path 会追加路径参数
- `GET /__routes` 可查看当前 manifest 生成的路由
- CORS 仅允许 `localhost`、`127.0.0.1` 和本地文件页面的 `null` origin
- `serve` 无额外鉴权，会复用当前机器的 CLI 登录态；仅用于本地调试

### Skill 文档

Skill 文档随 CLI 一起打包发布，更新 CLI 即同步更新 skill 文档。

```bash
# 查看 skill 文档目录的绝对路径
mbs skills path

# 输出 SKILL.md 内容（主入口）
mbs skills show

# 输出指定文档内容
mbs skills show --file references/global.md
mbs skills show --file references/org/SKILL.md
```

### 版本与更新

详细文档（含意图匹配、输出格式、验收规则、Agent Skill 刷新协议）见 [references/update/SKILL.md](update/SKILL.md)。

---

## 输出格式

**业务查询成功或后端错误：直接输出后端 HTTP response body**
```json
{ "code": 200, "data": <any>, "msg": "..." }
```

CLI 不再增加 `{ok,data}` 或 `{ok:false,error}` 外层。后端业务错误及 HTTP 错误也保留实际 response body，并以非零退出码表示失败。

**没有后端 response body 的本地错误：**
```json
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

`version/config/whoami/skills/find/describe/serve` 等本地或专用命令保留各自契约；`database query` 继续透传 NDJSON。

---

## 退出码

| 退出码 | 含义 | 处理方式 |
|--------|------|---------|
| `0` | 成功 | — |
| `1` | API / 参数错误 | 业务查询检查后端实际错误字段；本地错误检查 `error.hint` |
| `2` | 认证失败 | 运行 `mbs login` 选择方式重新登录 |
