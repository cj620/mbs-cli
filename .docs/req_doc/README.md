# 需求与故障修复审计索引表 (Requirement & Bug Audit Index)

> **AI 助手阅读指南**：本文件是 mbs-cli 功能演进与故障修复的全局索引。接收新任务时，先查阅本表并进入关联文档目录，确认既有实现、技术约束与验证记录后再编码。

---

## 当前进行中 (In Progress)

| 任务文件夹 | 类型 | 核心业务边界 / 故障现象 | 当前状态 | 负责人 | 关联文档路径 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `20260908-[RELEASE]发布1.1.4维护版本` | RELEASE / SECURITY / BREAKING CONTRACT | 发布远端响应统一透传与长期 Token 会话续期修复；仅更新 npm `maintenance-1`，保持 `latest` 不变 | 🚧 执行中：发布前 305 项测试、14 包构建、发布守卫和安全检查通过，进入功能提交与分支 CI | Codex | [`./20260908-[RELEASE]发布1.1.4维护版本/`](./20260908-[RELEASE]发布1.1.4维护版本/) |
| `20260908-[BUG]修复长期Token会话续期` | BUG / SECURITY | 认证失败不清登录材料；Access Token 可安全落盘并跨进程使用；缺失/到期及 401/601 时通过长期凭据申请，最终后端响应原样展示 | ✅ 本地完成 / 待发布：方案 A 已实现；全仓 305 项测试、14 包构建和关键帮助通过，未使用真实凭据联调 | Codex | [`./20260908-[BUG]修复长期Token会话续期/`](./20260908-[BUG]修复长期Token会话续期/) |
| `20260908-[FEATURE]统一透传远端响应内容` | FEATURE / BREAKING CONTRACT | CLI 及 serve 对直接暴露的远端 HTTP response body 不增加 envelope、不裁剪或改写；本地失败仍使用 CLI 自有结构 | 🧪 待验收：本地实现、295 项测试、14 包构建、命令帮助与差异检查通过；真实后端联调、下游迁移和发布未执行 | Codex | [`./20260908-[FEATURE]统一透传远端响应内容/`](./20260908-[FEATURE]统一透传远端响应内容/) |
| `20260904-[BUG]修复登录完成与请求认证` | BUG / SECURITY | 扫码迁移至认证中心并使用限时 HMAC/HTTPS `__Host-` state；HTTP 忽略扫码前匿名 Session 并仅保存验证后的两小时 SESSION；网关保留认证中心 401，使密码/LongToken 可进入唯一刷新重试 | 🧪 待验收：CLI 已随 npm `1.1.3` 发布并完成 CI/Release/官方包核验；认证中心 113 项、网关 21 项与打包已本地通过，配套服务端发布和真实环境联调未执行 | Codex | [`./20260904-[BUG]修复登录完成与请求认证/`](./20260904-[BUG]修复登录完成与请求认证/) |
| `20260810-[BUG]恢复已发布CLI旧命令` | BUG | 恢复 npm `0.1.58` 已发布的五个业务命令标识、flags 与只读请求契约；本轮不恢复旧 serve 路由 | 🧪 待验收 / 待发布：独立兼容插件、10 条契约测试、全量构建测试及五条帮助验证通过；真实目标网关和发布未执行 | Codex | [`./20260810-[BUG]恢复已发布CLI旧命令/`](./20260810-[BUG]恢复已发布CLI旧命令/) |
| `20260806-[FEATURE]统一语义发现与数据库表召回` | FEATURE | 用户只提交自然语言；CLI 消费 workflow/api/table 混合候选，table 安全衔接 `show-create-table → query`，不建立本地向量或目录降级 | 🧪 待验收：本地 CLI、Skill、测试与构建完成；真实后端联调、全局安装和发布未执行 | Codex | [`./20260806-[FEATURE]统一语义发现与数据库表召回/`](./20260806-[FEATURE]统一语义发现与数据库表召回/) |
| `20260722-[FEATURE]接口检索降噪与智能召回` | FEATURE | 智能体只保留业务域导航；API/workflow 仅从后端 Milvus 语义召回，完整接口定义通过 `mbs describe` 按需读取，不保留本地接口卡片或词法降级 | 🚧 待验收：loopback 一次性隐藏 Cookie Prompt、自动化验证、构建和本地 Codex 安装已完成；不写凭据缓存、日志或遥测，不回退刷新普通认证；等待用户交互输入完成真实 `find → describe` | Codex | [`./20260722-[FEATURE]接口检索降噪与智能召回/`](./20260722-[FEATURE]接口检索降噪与智能召回/) |

---

## 历史演进与修复归档 (Archived / Done)

| 任务文件夹 | 类型 | 核心技术点 / 修复根因 | 状态 | 生产上线/修复时间 | 关联文档路径 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `20260907-[RELEASE]发布1.1.3维护版本` | RELEASE / SECURITY | 发布 CLI 扫码登录闭环、HTTP 匿名 Session 继续等待、两小时 Session-only 降级与可取消绝对时限；仅更新 npm `maintenance-1` | ✅ 已完成 / 已发布：297 项测试、14 包构建、两次分支 CI、Release、dist-tag 与官方包/Skill 核验通过；`latest` 未变 | 2026-09-07 | [`./20260907-[RELEASE]发布1.1.3维护版本/`](./20260907-[RELEASE]发布1.1.3维护版本/) |
| `20260904-[RELEASE]发布1.1.2维护版本` | RELEASE / SECURITY | 发布 compat-session 两类 Refresh 移除 `client-type: cli` 的修复；仅更新 npm `maintenance-1`，保持 `latest` 不变 | ✅ 已完成 / 已发布：259 项测试、14 包构建、两次分支 CI、Release、dist-tag、官方包与 Skill 核验通过 | 2026-09-04 | [`./20260904-[RELEASE]发布1.1.2维护版本/`](./20260904-[RELEASE]发布1.1.2维护版本/) |
| `20260904-[CHORE]本地替换刷新请求头修复版CLI` | CHORE / SECURITY | 将本机 PATH 当前命中的系统级 npm 安装替换为工作区 `packages/cli` Junction；仅做离线命令与 Skill 核验 | ✅ 已完成 / 本机已替换：链接、npm 清单、版本、refresh 帮助、依赖与 Skill 验证通过；真实认证和发布未执行 | 不适用 | [`./20260904-[CHORE]本地替换刷新请求头修复版CLI/`](./20260904-[CHORE]本地替换刷新请求头修复版CLI/) |
| `20260904-[BUG]刷新交换移除客户端类型头` | BUG / SECURITY | compat-session 不按 login/refresh 区分客户端分类头；移除 Cookie 与 LongToken 两类 Refresh 中的 `client-type: cli`，普通业务请求头不变 | ✅ 已随 `1.1.2` 发布：本地 V3、两次分支 CI、Release、dist-tag、官方包与 Skill 核验通过；真实认证联调未执行 | 2026-09-04 | [`./20260904-[BUG]刷新交换移除客户端类型头/`](./20260904-[BUG]刷新交换移除客户端类型头/) |
| `20260904-[RELEASE]发布1.1.1维护版本` | RELEASE / SECURITY | 发布 current-user 请求头修复；仅更新 npm `maintenance-1`，保持 `latest` 不变 | ✅ 已完成 / 已发布：259 项测试、14 包构建、三次分支 CI、Release、dist-tag、官方包与 Skill 核验通过 | 2026-09-04 | [`./20260904-[RELEASE]发布1.1.1维护版本/`](./20260904-[RELEASE]发布1.1.1维护版本/) |
| `20260904-[BUG]当前用户查询移除客户端类型头` | BUG / SECURITY | `/auth/user/current` 只携带标准化 SESSION Cookie，不发送 `client-type: cli`；两类登录后 Refresh 契约保持 | ✅ 已随 `1.1.1` 发布：本地 V3、分支 CI、Release、dist-tag、官方包与 Skill 核验通过；真实认证联调未执行 | 2026-09-04 | [`./20260904-[BUG]当前用户查询移除客户端类型头/`](./20260904-[BUG]当前用户查询移除客户端类型头/) |
| `20260904-[RELEASE]发布1.1.0维护版本` | RELEASE / SECURITY | 发布 Agent 非交互登录交接及登录请求头修复；仅更新 npm `maintenance-1`，保持 `latest` 不变 | ✅ 已完成 / 已发布：259 项测试、14 包构建、分支 CI、Release、dist-tag 与官方包核验通过 | 2026-09-04 | [`./20260904-[RELEASE]发布1.1.0维护版本/`](./20260904-[RELEASE]发布1.1.0维护版本/) |
| `20260904-[BUG]登录请求移除客户端类型头` | BUG / SECURITY | 密码登录和首次 LongToken 登录不发送 `client-type: cli`；登录后 Refresh 契约保持 | ✅ 已随 `1.1.0` 发布：共享/全仓回归、CI、Release 与官方包核验通过；真实认证联调未执行 | 2026-09-04 | [`./20260904-[BUG]登录请求移除客户端类型头/`](./20260904-[BUG]登录请求移除客户端类型头/) |
| `20260904-[FEATURE]支持Agent对话选择登录方式` | FEATURE / SECURITY | Agent 非交互裸登录安全拒绝；明确模式后扫码打开浏览器，密码或 LongToken 在 Windows 可见终端隐藏输入 | ✅ 已随 `1.1.0` 发布：V3、Windows 无凭据冒烟、分支 CI、Release、login help 与 Skill 核验通过；真实认证联调未执行 | 2026-09-04 | [`./20260904-[FEATURE]支持Agent对话选择登录方式/`](./20260904-[FEATURE]支持Agent对话选择登录方式/) |
| `20260904-[RELEASE]发布1.0.7维护版本` | RELEASE / SECURITY | 发布远程 HTTP 默认允许能力；补齐并发提交遗漏测试与审计，只更新 `maintenance-1` | ✅ 已完成 / 已发布：248 项测试、14 包构建、分支 CI、Release、dist-tag 与官方源隔离安装通过 | 2026-09-04 | [`./20260904-[RELEASE]发布1.0.7维护版本/`](./20260904-[RELEASE]发布1.0.7维护版本/) |
| `20260904-[SECURITY]临时支持远程HTTP认证` | SECURITY / FEATURE | 合法 HTTP(S) 默认用于密码、长期 Token 与 compat-session 认证，不确认或保存 Origin 授权；保留 URL 与凭据边界 | ✅ 已随 `1.0.7` 发布：V3、CI、Release 与官方包帮助/Skill 核验通过；真实 HTTP 凭据联调未执行 | 2026-09-04 | [`./20260904-[SECURITY]临时支持远程HTTP认证/`](./20260904-[SECURITY]临时支持远程HTTP认证/) |
| `20260903-[RELEASE]发布1.0.6维护版本` | RELEASE / SECURITY | 发布三种安全登录入口、两类长期 Refresh 凭据、compat-session 刷新及重新登录前清理；排除 `.idea` 且不移动 `latest` | ✅ 已完成 / 已发布：分支 CI、Release 第 4 次作业、dist-tag 与官方源隔离安装核验通过 | 2026-09-04 | [`./20260903-[RELEASE]发布1.0.6维护版本/`](./20260903-[RELEASE]发布1.0.6维护版本/) |
| `20260903-[FEATURE]接入长短Token刷新登录` | FEATURE / SECURITY | 登录选择扫码、账号密码或手工管理型长期 Refresh Token；重新登录先清除旧认证缓存；`refresh` 统一经 compat-session 取得内存 Access Token 与兼容 SESSION | ✅ 已随 `1.0.6` 发布：238 项测试、构建、CI、Release 与官方源 login/refresh 验证通过；真实网关联调未执行 | 2026-09-04 | [`./20260903-[FEATURE]接入长短Token刷新登录/`](./20260903-[FEATURE]接入长短Token刷新登录/) |
| `20260902-[SECURITY]禁止持久化MBS_KEY` | SECURITY / FEATURE | 禁止捕获或持久化长期 `MBS_KEY`；账号密码终端直登；后续任务以正式 Refresh 凭据补充刷新能力 | ✅ 已随 `1.0.6` 发布：安全禁令、旧 key 删除式清理与官方源命令验证生效；真实 HTTPS 网关联调未执行 | 2026-09-04 | [`./20260902-[SECURITY]禁止持久化MBS_KEY/`](./20260902-[SECURITY]禁止持久化MBS_KEY/) |
| `20260827-[RELEASE]发布1.0.5维护版本` | RELEASE | 发布后端响应原样透传；仅更新 npm `maintenance-1`，保持普通 `latest` 不变 | ✅ 已完成 / 已发布：本地 V3、分支 CI、Release、dist-tag 与官方源隔离安装核验通过 | 2026-08-27 | [`./20260827-[RELEASE]发布1.0.5维护版本/`](./20260827-[RELEASE]发布1.0.5维护版本/) |
| `20260827-[FEATURE]透传后端响应内容` | FEATURE / BREAKING CONTRACT | 业务查询成功与后端错误直接输出实际 HTTP body；保留认证刷新和非零退出码 | ✅ 已随 `1.0.5` 发布：201 条测试、构建、CI、Release 与官方源透传 smoke 通过；真实网关与下游迁移未执行 | 2026-08-27 | [`./20260827-[FEATURE]透传后端响应内容/`](./20260827-[FEATURE]透传后端响应内容/) |
| `20260825-[RELEASE]发布1.0.4维护版本` | RELEASE | 发布接口请求体编码端到端支持；仅更新 npm `maintenance-1`，保持普通 `latest` 不变 | ✅ 已完成 / 已发布：本地 V3、分支 CI、Release、dist-tag 与官方源隔离安装核验通过 | 2026-08-25 | [`./20260825-[RELEASE]发布1.0.4维护版本/`](./20260825-[RELEASE]发布1.0.4维护版本/) |
| `20260825-[FEATURE]接口请求体编码端到端支持` | FEATURE | 七种请求体模式、详情权威校验、manifest 生成与 serve 复用统一编码器 | ✅ 已随 `1.0.4` 发布：191 条测试、构建、CI、Release 与官方源请求体能力核验通过；真实业务请求未执行 | 2026-08-25 | [`./20260825-[FEATURE]接口请求体编码端到端支持/`](./20260825-[FEATURE]接口请求体编码端到端支持/) |
| `20260814-[RELEASE]发布1.0.3维护版本` | RELEASE | 发布 CLI 网关路由顺序修复；仅更新 npm `maintenance-1`，保持普通 `latest` 不变 | ✅ 已完成 / 已发布：本地 V3、分支 CI、Release、dist-tag 与官方源安装包核验通过 | 2026-08-14 | [`./20260814-[RELEASE]发布1.0.3维护版本/`](./20260814-[RELEASE]发布1.0.3维护版本/) |
| `20260814-[BUG]修正CLI网关路由顺序` | BUG | find/describe 将 `/cli/gateway` 顺序写反，13 条 manifest action 又重复携带 `/gateway`；统一为 `apiUrl/gateway/cli/<service>/...` | ✅ 已随 `1.0.3` 发布：178 条全量测试、构建、CI、Release 与官方源 15 条路由核验通过；serve 未修改 | 2026-08-14 | [`./20260814-[BUG]修正CLI网关路由顺序/`](./20260814-[BUG]修正CLI网关路由顺序/) |
| `20260812-[RELEASE]发布1.0.2维护版本` | RELEASE | 发布首次召回不预判 domain、认证/召回地址修正和公共只读请求命令；仅更新 npm `maintenance-1` | ✅ 已完成 / 已发布：本地 V3、分支 CI、Release、dist-tag 与官方源安装包核验通过；`latest` 未变化 | 2026-08-12 | [`./20260812-[RELEASE]发布1.0.2维护版本/`](./20260812-[RELEASE]发布1.0.2维护版本/) |
| `20260812-[FEATURE]新增公共只读请求命令` | FEATURE | 新增公开 `mbs request GET|POST <path>`，固定复用 `/gateway/cli` 与认证；动态接口通过 `find → describe → request` 执行 | ✅ 已随 `1.0.2` 发布：16 条定向测试、177 条全量测试、构建、命令发现及官方源安装核验通过；未发送真实业务请求 | 2026-08-12 | [`./20260812-[FEATURE]新增公共只读请求命令/`](./20260812-[FEATURE]新增公共只读请求命令/) |
| `20260812-[BUG]修正认证与召回地址契约` | BUG | 登录直达 `/eshop/manager/...`；find/describe 使用 `/cli/gateway/cli-service`；历史尾部 `/gateway` 配置在内存中归一为根地址 | ✅ 已随 `1.0.2` 发布：本地回归、分支 CI、Release 与官方源路由核验通过；未访问真实业务服务 | 2026-08-12 | [`./20260812-[BUG]修正认证与召回地址契约/`](./20260812-[BUG]修正认证与召回地址契约/) |
| `20260812-[BUG]禁止首次召回预判业务域` | BUG | 移除 Skill 对首次 find 的 domain 预判；后端统一判断 domain/类型/排序/权限，仅用户明确限定或 hint 后收窄 | ✅ 已随 `1.0.2` 发布：生成源、7 个域级 Skill、CLI 帮助、本地 V3 与官方源包核验通过 | 2026-08-12 | [`./20260812-[BUG]禁止首次召回预判业务域/`](./20260812-[BUG]禁止首次召回预判业务域/) |
| `20260812-[BUG]修复语义召回服务路由` | BUG / RELEASE | 将错误的 `/gateway/cli` 召回基础路径修复为 `/cli/cli-service`，完整 URL 回归覆盖 find/detail；以 `1.0.1` 发布到 npm `maintenance-1` | ✅ 已完成 / 已发布：本地 V3、分支 CI、Release、dist-tag 与官方源包核验通过；`latest` 未变化 | 2026-08-12 | [`./20260812-[BUG]修复语义召回服务路由/`](./20260812-[BUG]修复语义召回服务路由/) |
| `20260811-[RELEASE]建立1.0.0长期维护分支` | RELEASE | 建立独立 `1.0.0` 长期维护线；标签校验来源分支与版本，npm 只更新 `maintenance-1`，普通 `latest` 保持 `0.1.58` | ✅ 已完成 / 已发布：CI、Release、dist-tag 和官方源发布包验证通过 | 2026-08-11 | [`./20260811-[RELEASE]建立1.0.0长期维护分支/`](./20260811-[RELEASE]建立1.0.0长期维护分支/) |
| `20260810-[CHORE]移除本地认证测试兼容` | CHORE | 删除 4174 代理、开发登录配置、召回地址覆盖、Cookie Prompt 与 9090 默认值；恢复保存登录态、标准网关和线上默认地址 | ✅ 本地清理、全量测试、构建、link 与 Skill 安装通过；未发布 | 未发布 | [`./20260810-[CHORE]移除本地认证测试兼容/`](./20260810-[CHORE]移除本地认证测试兼容/) |
| `20260810-[FEATURE]本地开发认证代理联调` | FEATURE | 历史本地联调方案：Vite 服务端 Cookie 代理曾完成只读 E2E，现已由清理任务完整回滚 | ↩️ 已回滚，仅保留历史审计 | 不适用 | [`./20260810-[FEATURE]本地开发认证代理联调/`](./20260810-[FEATURE]本地开发认证代理联调/) |
| `20260810-[BUG]修复语义发现展示名契约` | BUG | 分离 API 展示元数据与可执行命令身份；中文/camelCase 候选保留 find/describe 能力但不伪造命令 | ✅ 本地修复、全量测试、构建及真实链路复验通过；未发布 | 未发布 | [`./20260810-[BUG]修复语义发现展示名契约/`](./20260810-[BUG]修复语义发现展示名契约/) |

---

## 全局技术债与避坑指南 (Cross-Feature Notes)

- **【架构规范】**：业务模块必须遵守 `<domain> → shared ← cli` 依赖方向，domain 不可反向依赖 cli。
- **【安全边界】**：CLI 仅允许只读 GET 与查询类 POST；禁止写操作。
- **【认证凭据】**：`MBS_KEY` 是长期账号凭据，任何 CLI、浏览器前端、服务端或容器环境均不得捕获、持久化、转发或记录；只允许按规范保管短期 Cookie/会话。
- **【上下文规范】**：接口发现必须先走 `mbs find`；不得扫描 `skills/references/` 获取接口全集；完整端点文档仅在目标确认后按需读取。
