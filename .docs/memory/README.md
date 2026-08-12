# 项目记忆索引

| 记忆键 | 主题 | 当前结论 | 适用范围 | 当前来源 | 状态 | 主题文档 | 最后核验 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `CLI-PUBLIC-COMPATIBILITY` | CLI 公开命令兼容性 | npm `0.1.58` 的五个业务命令已由独立兼容插件在本地恢复，命令 ID、flags、帮助和只读请求契约验证通过；旧 serve 路由不在本轮范围 | `packages/cli`、`packages/legacy` | `20260810-[BUG]恢复已发布CLI旧命令` | 本地已验证/待发布 | [`./topics/CLI公开命令兼容性.md`](./topics/CLI公开命令兼容性.md) | 2026-08-10 / `5b5c255` + 当前工作区 |
| `AUTH-DEV-PROXY` | 本地开发认证代理 | 本地联调方案已完整回滚；正式命令使用保存登录态和各自服务路由，共享默认 `/gateway/cli`，语义召回使用 `/cli/cli-service` | `packages/shared`、`packages/cli`、`packages/doris` | `20260812-[BUG]修复语义召回服务路由` | 已回滚/路由事实已校正 | [`./topics/本地开发认证代理.md`](./topics/本地开发认证代理.md) | 2026-08-12 / `661043b` + 发布后核验 |
| `UNIFIED-SEMANTIC-DISCOVERY` | 统一语义发现 | 正式 find/describe 经 `/cli/cli-service/cli/api/recall...` 请求；当前分支本地已验证首次 find 不预判 domain，仅在用户明确限定或后端 hint 后收窄 | `packages/cli`、`packages/doris`、Skill | `20260812-[BUG]禁止首次召回预判业务域` | npm maintenance-1 1.0.1 已发布；本地策略修复待发布 | [`./topics/统一语义发现.md`](./topics/统一语义发现.md) | 2026-08-12 / `661043b` + 当前工作区 |
| `INTERFACE-SEMANTIC-DISCOVERY` | 接口语义发现 | API name/domain 是展示元数据；仅在二者均为安全命令标识时派生可选 command，详情始终按正整数 ID 获取 | `packages/cli`、Skill 生成与安装 | `20260810-[BUG]修复语义发现展示名契约` | 本地已验证/待发布 | [`./topics/接口语义发现.md`](./topics/接口语义发现.md) | 2026-08-10 / 当前工作区 |
| `RELEASE-LINE-1X` | 1.0.0 长期维护分支 | `origin/1.0.0` 独立于 master；npm `maintenance-1=1.0.1` 已发布且 `latest` 保持 `0.1.58`，维护用户显式安装 `@maintenance-1` | 全仓库、`packages/cli`、CI | `20260812-[BUG]修复语义召回服务路由` | Git/CI/npm maintenance-1 1.0.1 已发布 | [`./topics/1.0.0长期维护分支.md`](./topics/1.0.0长期维护分支.md) | 2026-08-12 / `661043b` + 发布后核验 |

## 当前技术债

- 目标环境 embedding/Milvus、workflow 重建与 30 条 eval 尚未验收；本次未使用真实登录态执行生产 find 业务查询。
