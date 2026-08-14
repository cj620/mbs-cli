# CLI 网关路由

## 记忆元信息

- **记忆键**：`CLI-GATEWAY-ROUTING`
- **负责模块**：`packages/shared`、`packages/cli`、生成业务包、audit manifest
- **当前状态**：本地已验证、1.0.3 发布执行中
- **最后核验时间**：2026-08-14
- **最后核验基线**：`ae56c93` 加当前工作区
- **权威来源**：[`../../req_doc/20260814-[BUG]修正CLI网关路由顺序/`](../../req_doc/20260814-[BUG]修正CLI网关路由顺序/)

## 当前事实

- `apiUrl` 表示服务器根地址。
- 正式业务命令和公共 `mbs request` 以 `<apiUrl>/gateway/cli` 作为上游基础地址，action path 只包含后续 `/<service>/...`。
- 当前工作区的 find 与 describe 分别形成 `<apiUrl>/gateway/cli/cli-service/cli/api/recall` 和 `<apiUrl>/gateway/cli/cli-service/cli/api/recall/detail`。
- 源 audit manifest 中 13 条曾以 `/gateway/<service>/...` 开头的 action 已移除重复 `/gateway`，生成命令形成 `<apiUrl>/gateway/cli/<service>/...`。
- npm `maintenance-1` 当前仍为 `1.0.2`，其 find/describe 使用历史错误顺序 `/cli/gateway/cli-service`；`1.0.3` 已获发布授权，但只有 Release 与 npm 官方源核验成功后才能替代该已发布事实。
- `mbs serve` 当前例外：其上游 `APIClient` 直接以 `apiUrl` 为基础地址；`--project-apis` 与正式业务命令因此不共享同一基础前缀。本任务没有修改该行为。

## 演进关系

| 来源 | 关系 | 目标 | 影响范围 | 当前有效性 |
| :--- | :--- | :--- | :--- | :--- |
| `20260812-[BUG]修正认证与召回地址契约` | 部分修正 | `20260814-[BUG]修正CLI网关路由顺序` | find/describe 路由顺序 | 本地有效、待发布 |
| `20260812-[FEATURE]新增公共只读请求命令` | 对齐既有决策 | `20260814-[BUG]修正CLI网关路由顺序` | 生成业务命令和 manifest 相对路径 | 本地有效、待发布 |

## 当前强制约束

- 自动生成 action path 必须相对于 `/gateway/cli`，不得再次携带开头 `/gateway`。
- 召回必须保留 `cli-service` 服务层，不得退回 `/cli/api/recall` 或绕过网关。
- 只允许 GET 和查询类 POST；路径修正不改变网关最终权限控制。
- `serve` 是否对齐必须单独确认，不能用本次路由修正授权推导。

## 深入读取条件

- 修改 `apiUrl`、`MBSCommand`、find/describe、manifest 路径、生成器或 serve 上游基础地址。
- 发布、回滚或核验 npm maintenance-1 路由。

## 原始来源

- [`../../req_doc/20260814-[RELEASE]发布1.0.3维护版本/需求描述.md`](../../req_doc/20260814-[RELEASE]发布1.0.3维护版本/需求描述.md)
- [`../../req_doc/20260814-[RELEASE]发布1.0.3维护版本/执行计划.md`](../../req_doc/20260814-[RELEASE]发布1.0.3维护版本/执行计划.md)
- [`../../req_doc/20260814-[BUG]修正CLI网关路由顺序/需求描述.md`](../../req_doc/20260814-[BUG]修正CLI网关路由顺序/需求描述.md)
- [`../../req_doc/20260814-[BUG]修正CLI网关路由顺序/执行计划.md`](../../req_doc/20260814-[BUG]修正CLI网关路由顺序/执行计划.md)
- [`../../req_doc/20260812-[BUG]修正认证与召回地址契约/需求描述.md`](../../req_doc/20260812-[BUG]修正认证与召回地址契约/需求描述.md)
- [`../../req_doc/20260812-[FEATURE]新增公共只读请求命令/需求描述.md`](../../req_doc/20260812-[FEATURE]新增公共只读请求命令/需求描述.md)
