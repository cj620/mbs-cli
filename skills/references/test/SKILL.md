# test - Local CLI test utilities

通过 `mbs test` 命令验证 CLI 本地能力。

## 数据来源

- Local CLI auth cache

## 适用场景

验证当前 CLI 认证状态，以及验证本地 serve project APIs 是否正常加载。

## 意图匹配

关键词：test / whoami / auth status / authentication

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 查看当前认证状态 | `mbs test whoami` | - |

## serve 路由

启动 project APIs 后可访问：

```bash
mbs serve --project-apis
```

```text
GET /api/test/whoami
```

该路由复用 `mbs test whoami` 的 shared 状态逻辑，不请求上游 MBS HTTP 接口。
