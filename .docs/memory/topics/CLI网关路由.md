# CLI 网关路由

## 记忆元信息

- **记忆键**：`CLI-GATEWAY-ROUTING`
- **负责模块**：`packages/shared`、`packages/cli`、生成业务包、audit manifest
- **当前状态**：已随 npm maintenance-1 1.0.3 发布并核验
- **最后核验时间**：2026-08-14
- **最后核验基线**：`ee9c017` / `maintenance-1-v1.0.3` / npm 官方源核验
- **权威来源**：[`../../req_doc/20260814-[RELEASE]发布1.0.3维护版本/`](../../req_doc/20260814-[RELEASE]发布1.0.3维护版本/)

## 当前事实

- `apiUrl` 表示服务器根地址。
- 正式业务命令和公共 `mbs request` 以 `<apiUrl>/gateway/cli` 作为上游基础地址，action path 只包含后续 `/<service>/...`。
- npm `maintenance-1=1.0.3` 的 find 与 describe 分别形成 `<apiUrl>/gateway/cli/cli-service/cli/api/recall` 和 `<apiUrl>/gateway/cli/cli-service/cli/api/recall/detail`。
- 源 audit manifest 中 13 条曾以 `/gateway/<service>/...` 开头的 action 已移除重复 `/gateway`，生成命令形成 `<apiUrl>/gateway/cli/<service>/...`。
- npm `1.0.2` 的历史错误顺序 `/cli/gateway/cli-service` 已由 `1.0.3` 部分修正；版本不可覆盖，仍使用 1.0.2 的用户需显式升级维护通道。
- `mbs serve` 当前例外：其上游 `APIClient` 直接以 `apiUrl` 为基础地址；`--project-apis` 与正式业务命令因此不共享同一基础前缀。本任务没有修改该行为。

## 演进关系

| 来源 | 关系 | 目标 | 影响范围 | 当前有效性 |
| :--- | :--- | :--- | :--- | :--- |
| `20260812-[BUG]修正认证与召回地址契约` | 部分修正 | `20260814-[BUG]修正CLI网关路由顺序` | find/describe 路由顺序 | 已随 1.0.3 生效 |
| `20260812-[FEATURE]新增公共只读请求命令` | 对齐既有决策 | `20260814-[BUG]修正CLI网关路由顺序` | 生成业务命令和 manifest 相对路径 | 已随 1.0.3 生效 |

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
