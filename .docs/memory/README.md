# 项目记忆索引

| 记忆键 | 主题 | 当前结论 | 适用范围 | 当前来源 | 状态 | 主题文档 | 最后核验 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CLI-PUBLIC-COMPATIBILITY` | CLI 公开命令兼容性 | npm `0.1.58` 的五个业务命令已由独立兼容插件在本地恢复，命令 ID、flags、帮助和只读请求契约验证通过；旧 serve 路由不在本轮范围 | `packages/cli`、`packages/legacy` | `20260810-[BUG]恢复已发布CLI旧命令` | 本地已验证/待发布 | [`./topics/CLI公开命令兼容性.md`](./topics/CLI公开命令兼容性.md) | 2026-08-10 / `5b5c255` + 当前工作区 |
| `AUTH-DEV-PROXY` | 本地开发认证代理 | 本地联调方案已完整回滚；`apiUrl` 为服务器根地址，登录直达 `/eshop/manager/...`，共享业务默认 `/gateway/cli`，语义召回使用 `/cli/gateway/cli-service` | `packages/shared`、`packages/cli`、`packages/doris` | `20260812-[BUG]修正认证与召回地址契约` | 路由修正本地已验证/待发布 | [`./topics/本地开发认证代理.md`](./topics/本地开发认证代理.md) | 2026-08-12 / `a14f7b0` + 当前工作区 |
| `UNIFIED-SEMANTIC-DISCOVERY` | 统一语义发现 | 正式 find/describe 经 `/cli/gateway/cli-service/cli/api/recall...` 请求；首次 find 不预判 domain；API 详情确认 QUERY 后由公共 `mbs request` 动态查询 | `packages/cli`、`packages/doris`、Skill | `20260812-[FEATURE]新增公共只读请求命令` | npm maintenance-1 1.0.1 仍为旧链路；当前路由、策略和 request 待发布 | [`./topics/统一语义发现.md`](./topics/统一语义发现.md) | 2026-08-12 / `a14f7b0` + 当前工作区 |
| `INTERFACE-SEMANTIC-DISCOVERY` | 接口语义发现 | name/domain 只作展示；详情按 ID 获取；动态 QUERY 接口通过受限 `mbs request GET|POST <path>` 执行，不依赖预生成命令 | `packages/cli`、Skill 生成与安装 | `20260812-[FEATURE]新增公共只读请求命令` | 本地已验证/待发布 | [`./topics/接口语义发现.md`](./topics/接口语义发现.md) | 2026-08-12 / `a14f7b0` + 当前工作区 |
| `RELEASE-LINE-1X` | 1.0.0 长期维护分支 | `origin/1.0.0` 独立于 master；npm `maintenance-1=1.0.1` 已发布且 `latest` 保持 `0.1.58`；认证与召回地址勘误仅在本地完成，尚未发布 | 全仓库、`packages/cli`、CI | `20260812-[BUG]修正认证与召回地址契约` | 已发布版本存在已知路径缺陷/本地修复待发布 | [`./topics/1.0.0长期维护分支.md`](./topics/1.0.0长期维护分支.md) | 2026-08-12 / `a14f7b0` + 当前工作区 |

## 当前技术债

- 目标环境 embedding/Milvus、workflow 重建与 30 条 eval 尚未验收；本次未使用真实登录态执行生产 find 业务查询。

## 重大决策

- [`DEC-001 动态查询接口使用公共只读请求命令`](./decisions/DEC-001-动态查询接口使用公共只读请求命令.md)：普通动态接口固定复用 `/gateway/cli` 和网关权限，不新增 cli-service 执行接口。
