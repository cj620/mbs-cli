# 项目记忆索引

| 记忆键 | 主题 | 当前结论 | 适用范围 | 当前来源 | 状态 | 主题文档 | 最后核验 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `AUTH-CREDENTIAL-BOUNDARY` | MBS 认证凭据边界 | `MBS_KEY` 永不接触；npm `maintenance-1=1.1.5` 只允许 HTTP 401 或业务 401/601 触发一次刷新，普通业务 500 保持 API 错误且不改写登录材料 | CLI 登录、刷新、认证缓存、Agent Skill、业务一次性重试、Docker 报表服务 | `20260908-[RELEASE]发布1.1.5维护版本` / DEC-003 至 DEC-008 | CLI 已发布并完成官方源核验；服务端发布与目标运行态待验收 | [`./topics/MBS认证凭据边界.md`](./topics/MBS认证凭据边界.md) | 2026-09-08 / `913e6b2` / npm 1.1.5 |
| `CLI-RESPONSE-PASSTHROUGH` | CLI 后端响应透传 | npm `maintenance-1=1.1.5` 保留实际后端 body；普通业务 500 为 `MBSError`、退出码 1，不再进入认证刷新或重试 | `packages/shared`、`packages/cli`、业务查询命令、serve 与公共输出文档 | `20260908-[RELEASE]发布1.1.5维护版本` | 已发布并完成官方源核验；远程 ERP 运行态与下游未完成验收 | [`./topics/CLI后端响应透传.md`](./topics/CLI后端响应透传.md) | 2026-09-08 / `913e6b2` / npm 1.1.5 |
| `DATABASE-BULK-EXPORT` | 批量查询与可恢复导出 | 当前工作区为 database/API 导出增加显式键集游标、日志先行、原子断点、resume/restart、有界指数退避和 staging→流式 XLSX；已发布 1.1.5 尚不包含 | `packages/export`、database/export/dashboard Skill | `20260918-[FEATURE]增强批量查询与可恢复导出` / DEC-011 | 本地 V2 已验证，待发布与真实大批量链路验收 | [`./topics/批量查询与可恢复导出.md`](./topics/批量查询与可恢复导出.md) | 2026-09-18 / `23dea9c` + 当前工作区 |
| `API-REQUEST-BODY-ENCODING` | 接口请求体编码 | npm `maintenance-1=1.0.4` 已由 `mbs request --api-id` 读取后端详情并统一编码七种 body 模式，manifest 生成与 serve 复用；官方源安装包核验通过 | `packages/shared`、`packages/cli`、生成器、Skill | `20260825-[RELEASE]发布1.0.4维护版本` | 已发布并完成官方源核验 | [`./topics/接口请求体编码.md`](./topics/接口请求体编码.md) | 2026-08-25 / `689e82e` / npm 1.0.4 |
| `CLI-PUBLIC-COMPATIBILITY` | CLI 公开命令兼容性 | npm `0.1.58` 的五个业务命令已由独立兼容插件在本地恢复，命令 ID、flags、帮助和只读请求契约验证通过；旧 serve 路由不在本轮范围 | `packages/cli`、`packages/legacy` | `20260810-[BUG]恢复已发布CLI旧命令` | 本地已验证/待发布 | [`./topics/CLI公开命令兼容性.md`](./topics/CLI公开命令兼容性.md) | 2026-08-10 / `5b5c255` + 当前工作区 |
| `AUTH-DEV-PROXY` | 本地开发认证代理 | 本地代理方案已完整回滚，`apiUrl` 仍为服务器根地址；业务与语义召回经 `/gateway/cli`。npm `1.1.3` 已将 CLI 旧商城扫码入口替换为认证中心入口 | `packages/shared`、`packages/cli`、`packages/doris` | `20260907-[RELEASE]发布1.1.3维护版本`、DEC-007 | 已发布 CLI 基线；配套认证中心待发布 | [`./topics/本地开发认证代理.md`](./topics/本地开发认证代理.md) | 2026-09-07 / `bed3567` / npm `1.1.3` |
| `CLI-GATEWAY-ROUTING` | CLI 网关路由 | 正式业务命令、公共 request 及 find/describe 统一以 `<apiUrl>/gateway/cli` 为上游基础前缀；13 条 manifest 路径已移除重复 `/gateway` | `packages/shared`、`packages/cli`、生成业务包、manifest | `20260814-[RELEASE]发布1.0.3维护版本` | 已随 maintenance-1 1.0.3 发布并核验 | [`./topics/CLI网关路由.md`](./topics/CLI网关路由.md) | 2026-08-14 / `ee9c017` / `maintenance-1-v1.0.3` |
| `UNIFIED-SEMANTIC-DISCOVERY` | 统一语义发现 | 明确只读 SQL 或物理表由 `my-tables` 确认后直达数据库，目标未知才 find；首次 find 不预判 domain，参数依赖在 10 次共享预算内递归解析并在歧义或超预算前暂停 | `packages/cli`、`packages/doris`、Skill | `20260918-[FEATURE]明确数据库目标直达查询` / DEC-010；`20260909-[FEATURE]自动解析接口参数依赖` / DEC-009 | 基础链路已发布；两项 Agent Skill 变更已完成本地验证，待发布与真实链路验收 | [`./topics/统一语义发现.md`](./topics/统一语义发现.md) | 2026-09-18 / `23dea9c` + 当前工作区 / 本地 V2-V3 |
| `INTERFACE-SEMANTIC-DISCOVERY` | 接口语义发现 | name/domain 只作展示；详情按 ID 获取；动态 QUERY 接口通过受限 `mbs request GET|POST <path>` 执行，不依赖预生成命令 | `packages/cli`、Skill 生成与安装 | `20260812-[FEATURE]新增公共只读请求命令` | 已随 maintenance-1 1.0.2 发布 | [`./topics/接口语义发现.md`](./topics/接口语义发现.md) | 2026-08-12 / `8d2c3bb` / npm 1.0.2 |
| `RELEASE-LINE-1X` | 1.0.0 长期维护分支 | `origin/1.0.0` 独立于 master；npm `maintenance-1=1.1.5` 已发布且 `latest` 保持 `0.1.59` | 全仓库、`packages/cli`、CI | `20260908-[RELEASE]发布1.1.5维护版本` | 已发布并完成官方源核验 | [`./topics/1.0.0长期维护分支.md`](./topics/1.0.0长期维护分支.md) | 2026-09-08 / `913e6b2` / `maintenance-1-v1.1.5` |

## 当前技术债

- npm `1.0.4` 的七种请求体编码已通过本地 V3 与官方源安装核验，但尚未使用真实登录态、真实上传文件或目标网关业务接口联调。
- npm `1.0.5` 的后端响应透传已通过官方源隔离安装的人工最小 mock，但尚未使用真实登录态、目标网关错误响应或既有下游脚本验收。
- npm `1.0.6` 的登录型 Refresh 与手工管理型 `LongToken` 两个分支已完成全量 V3 和官方源安装验证；两类真实长期凭据、`SESSION` 与 Bearer 网关兼容性仍待目标 HTTPS 环境联调。
- npm `1.0.7` 已默认允许远程 HTTP 认证并完成本地 V3、CI、Release 与官方源安装核验；尚未使用真实目标 HTTP 凭据链路联调，明文传输风险由部署方承担，服务端 HTTPS 可用后应立即重新配置。
- npm `1.1.2` 已发布 compat-session 两类 Refresh 请求头修正并完成 V3、CI、Release、dist-tag、官方包与 Skill 验证；登录与刷新均不再发送 `client-type: cli`。真实认证联调仍未执行。
- npm `1.1.3` 已发布 CLI 扫码登录闭环修复并完成 V3、两次分支 CI、Release、dist-tag 和官方包/Skill 验证；认证中心与网关配套修复尚未发布，真实认证与目标配置仍未联调。
- npm `1.1.4` 已发布远端响应统一透传与 Access Token 持久化、请求前换取和失败保留修复；305 项测试、14 包构建、两次分支 CI、Release、dist-tag 和官方包/Skill 验证通过，仍未使用真实长期凭据、目标网关或下游应用联调。
- npm `1.1.5` 已发布“业务 `code=500` 不再误判为认证失败”的 CLI 修复：只有 HTTP 401 或业务 401/601 可触发一次刷新；306 项测试、14 包构建、两次分支 CI、Release、dist-tag 和官方包/Skill 验证通过。真实脱敏联调已确认 auth-center 能识别并复用当前 SESSION，但同一 SESSION 在远程 ERP 热销列表链路中缺少用户；ERP 与网关本地修复尚未发布，仍需目标实例/路由验收。
- 目标环境 embedding/Milvus、workflow 重建与 30 条 eval 尚未验收；本次未使用真实登录态执行生产 find 业务查询。
- 参数依赖自动解析已通过本地契约测试、全仓测试、构建和 Skill 冒烟，但仍是 Agent Skill 协议而非 CLI 持久编排器；尚未发布，也未使用真实店铺列表与销售接口验证深链、暂停恢复和召回质量。
- 明确 SQL/物理表直达数据库已通过本地契约测试、生成 dry-run、308 项测试和 14 包构建；尚未安装或发布，也未使用真实登录态验证 `my-tables → show-create-table/query`。
- 可恢复批量导出已在当前工作区完成键集分页、任务日志、断点、有限重试和流式 Excel 实现；尚未安装、发布或使用真实大批量数据验证断点恢复、外部数据库方言和长时间稳定性。

## 重大决策

- [`DEC-011 可恢复批量任务与有界重试`](./decisions/DEC-011-可恢复批量任务与有界重试.md)：成功批次先持久化再推进断点，恢复/重启必须显式选择；批次重试仅覆盖暂时性错误且严格有界，最终 XLSX 从 staging 流式重建。
- [`DEC-010 明确数据库目标直达查询`](./decisions/DEC-010-明确数据库目标直达查询.md)：完整只读 SQL 或精确物理表跳过 find，但必须先经 `my-tables` 确认权限与数据源；零匹配或多匹配不回退语义召回。
- [`DEC-009 Agent 参数依赖自动解析与召回预算`](./decisions/DEC-009-Agent参数依赖自动解析与召回预算.md)：缺失必填参数时由 Agent 递归查询只读来源 API；全任务最多 10 次实际 find，任一候选或参数值歧义以及第 11 次调用前必须暂停。
- [`DEC-006 Agent 非交互登录交接`](./decisions/DEC-006-Agent非交互登录交接.md)：Agent 在对话中选择明确模式；扫码打开浏览器，Windows 密码/Token 模式在独立可见终端隐藏输入，秘密不进入 Agent 通道。
- [`DEC-007 扫码登录闭环与 HTTP 会话降级`](./decisions/DEC-007-扫码登录闭环与HTTP会话降级.md)：扫码迁移到认证中心；HTTPS 强制双 Cookie，HTTP 服务端不创建 Refresh 且只在 current-user 验证后保存最长两小时 SESSION；URL 校验、页面快速失败、origin Cookie 与可取消 deadline 共同收口浏览器。
- [`DEC-005 远程 HTTP 认证默认允许`](./decisions/DEC-005-远程HTTP认证默认允许.md)：合法远程 HTTP 不再要求确认或 Origin 授权；这是明文临时兼容，不得描述为加密。
- [`DEC-008 认证失败保留与 Access 持久化`](./decisions/DEC-008-认证失败保留与Access持久化.md)：部分替代 DEC-004；Access Token 可在受保护缓存中跨进程复用，失败不清登录材料，仅显式 logout 或新 login 可清理。
- [`DEC-004 长期凭据与短期 Access 边界`](./decisions/DEC-004-登录型Refresh与短期Access边界.md)：长期凭据互斥、只发认证中心、普通业务请求不携带长期凭据；Access 仅内存和失败清理规则已被 DEC-008 部分替代。
- [`DEC-003 MBS_KEY 禁止持久化`](./decisions/DEC-003-MBS_KEY禁止持久化.md)：不得捕获、存储、转发或记录长期 `MBS_KEY`；登录只取得短期 Cookie，刷新改为重新授权或正式服务身份机制。
- [`DEC-001 动态查询接口使用公共只读请求命令`](./decisions/DEC-001-动态查询接口使用公共只读请求命令.md)：普通动态接口固定复用 `/gateway/cli` 和网关权限，不新增 cli-service 执行接口。
- [`DEC-002 后端响应原样透传`](./decisions/DEC-002-后端响应原样透传.md)：业务查询、find、describe 与 serve 远端路由直接表达后端 HTTP response body；本地管理输出、无响应错误与 NDJSON 保持各自契约。
