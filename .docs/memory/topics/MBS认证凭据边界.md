# MBS 认证凭据边界

- 记忆键：`AUTH-CREDENTIAL-BOUNDARY`
- 状态：当前工作区已完成 Access 持久化和认证失败保留修复；npm `1.1.3` 仍是已发布基线，真实认证联调未执行
- 当前来源：`20260908-[BUG]修复长期Token会话续期`、`20260904-[BUG]修复登录完成与请求认证`、DEC-003 至 DEC-008
- 最后核验：2026-09-08 / 当前工作区 / 全仓 305 项测试、14 包构建及 login/refresh/find/serve 帮助通过

## 当前结论

`MBS_KEY` 是长期有效、可解析账号密码材料的高敏感凭据。项目不得捕获、持久化、转发或记录该值，包括操作系统凭据库、文件、环境变量、数据库、容器 Secret、浏览器存储、日志和遥测。

浏览器和账号密码登录可以在不捕获 `MBS_KEY` 的前提下获得认证中心签发的 `SESSION` 与登录型 `AUTH_REFRESH` Cookie。后台申请的管理型 `LongToken` 则由用户通过隐藏终端手工导入。CLI 缓存中两类长期凭据严格互斥：`AUTH_REFRESH` 有绝对有效期且每次成功交换轮换，管理型 `LongToken` 不轮换且由后台撤销；二者都不能直接访问业务接口。交换返回的短期 Access Token 经过格式和绝对到期校验后，允许保存在受保护的当前用户认证缓存中并跨 CLI 进程复用。

当前扫码入口已迁移到认证中心。HTTPS 仍要求完整 `SESSION + AUTH_REFRESH`；项目既有远程 HTTP 兼容下，认证中心不创建或发送长期 Refresh，CLI 只在登录 URL 上恰有唯一安全 `SESSION`、完全没有 Refresh 且 current-user 验证成功时保存最长两小时的 Session-only 上下文，并明确提示不能自动刷新。

## 当前实现

- 每次有效执行 `mbs login` 都先删除完整认证缓存，再选择登录方式或收集新凭据；清理覆盖 `SESSION`、两类互斥长期凭据、Access Token、到期时间和用户摘要，新登录取消或失败不恢复旧状态。
- 裸 `mbs login` 只在 stdin/stdout 均为 TTY 时使用终端选择列表询问扫码、账号密码或后台长期 Refresh Token；非交互调用返回安全提示。Agent 先在对话中选择，再执行 `--qr`、`--password` 或 `--managed-token`。
- 扫码登录先校验 API root 不含 userinfo/query/fragment，再打开认证中心 `/gateway/auth-center-service/auth/user/login/qr`，只读取该 URL 可见的 Cookie，不监听登录请求。导航 4xx/5xx 立即失败；导航、轮询和 current-user 使用统一总时限，底层身份查询同时设置剩余 Axios timeout 与 `AbortSignal`；成功保存后输出一次成功，所有结束路径关闭浏览器。
- HTTP 扫码页若因共享认证拦截器提前产生匿名 `SESSION`，current-user 拒绝该候选后 CLI 不关闭浏览器，而是在同一绝对时限内忽略旧值并等待 OAuth 回调旋转的新 Session；配套认证中心本地修复会在页面入口主动失效预登录 Session，但该服务端修复仍待独立发布。
- `mbs login --password` 接受配置中的合法 HTTP(S) 地址，通过终端隐藏输入直接调用认证中心；非交互 Windows Agent 会自动打开独立可见终端，不启动浏览器，也不提供参数或环境变量凭据入口。远程 HTTP 不要求额外确认，但会明文传输密码。
- 后台长期 Refresh Token 模式使用同一 HTTP(S) URL 校验，再通过终端隐藏输入；非交互 Windows Agent 会自动打开独立可见终端，按 `Authorization: LongToken <token>` 调用兼容交换，保存不轮换 Token 与兼容 `SESSION`，不提供参数或环境变量入口。HTTP 会明文传输 Token 和 Cookie。
- 自 npm `1.1.2` 起，密码登录不发送 `client-type`；compat-session 无论用于首次管理型 LongToken 登录还是登录后的 Cookie/LongToken Refresh 都不发送 `client-type: cli`；current-user 查询也只发送标准化 `SESSION` Cookie。
- key 存储模块只保留删除能力：删除操作系统凭据条目和已知旧文件时不读取内容。
- 认证缓存只保存标准化后的 `SESSION`、唯一长期凭据、登录型 Refresh 到期时间、成对且未过期的 Access Token/绝对到期时间和最小用户摘要；同时出现 `AUTH_REFRESH` 与管理型 `LongToken` 时失败关闭。无效、过期或不完整的 Access 字段被忽略，但不使其余登录上下文失效。
- 管理型 LongToken 首次登录与 `mbs refresh` 都保存完整 Access 状态。新 CLI 进程复用仍有效的磁盘 Access；缺失或到期且有长期凭据时，请求初始化先调用 `/gateway/auth-center-service/auth/token/exchange/compat-session` 换取并保存。
- HTTP 401 与业务码 401/601 最多触发一次额外交换和一次业务重试；403 保持权限拒绝语义。普通业务请求不携带长期凭据，最终有后端 response body 时原样传播。
- 认证拒绝、交换/网络/响应失败和缓存写入失败均不主动清除认证缓存；缓存采用同目录临时文件替换，避免写入失败截断既有状态。只有显式 `mbs logout` 或开始新的 `mbs login` 可以清理。
- 缺少 Refresh 的旧 SESSION-only 缓存在原两小时内兼容读取但不能刷新；其请求失败也不触发隐式清理。

登录型 Refresh 与管理型 Token 两个分支自 `@mb-it-org/cli@1.0.6` 提供；远程 HTTP 默认允许已随 `1.0.7` 发布；Agent 非交互登录交接和首次登录请求头修复已随 `1.1.0` 发布；current-user 请求头修正已随 `1.1.1` 发布；compat-session 两类 Refresh 移除 `client-type` 已随 `1.1.2` 发布；CLI 扫码入口、HTTP 匿名 Session 继续等待、两小时 Session-only 降级和可取消绝对时限已随 `1.1.3` 发布。Access Token 跨进程复用和失败保留只在当前工作区完成，尚未发布。配套服务端和真实 HTTP 凭据链路仍未交付联调。

本次本地修复通过全仓 305 项测试、14 包构建、四条关键帮助命令、loopback 首发/刷新请求线、清理入口和敏感信息检查；没有读取真实缓存或发起真实认证请求。

current-user 请求头修正已通过定向 17 项、shared 114 项、全仓 259 项与 14 包构建；功能提交、版本提交及两次维护分支 CI、Release、npm dist-tag、官方精确版本临时执行与 Codex Skill 刷新均通过。真实认证联调仍未执行。

Refresh 请求头修正已通过定向 17 项、shared 114 项、全仓 259 项与 14 包构建；compat-session 源码不再发送客户端分类头，普通业务 APIClient 契约保持。功能与版本提交、两次分支 CI、Release、npm dist-tag 和官方包核验均通过；真实认证联调仍未执行。

本机 PATH 当前命中的系统级 `mbs` shim 使用指向工作区 `packages/cli` 的 Junction，CLI 内的 shared 依赖也指向工作区 `packages/shared`；工作区版本显示为 `1.1.3`。官方 `@mb-it-org/cli@1.1.3` 已通过隔离执行验证，未发起真实认证请求。

## 服务端应用约束

- Docker 内没有浏览器并不意味着必须在容器内执行浏览器登录；用户浏览器可以承担交互式认证。
- 用户浏览器中的 MBS Cookie 受域和 `HttpOnly` 等属性约束，不能假定会自动发送给报表服务，也不能由前端脚本读取后上传。
- 多用户场景应由 MBS 后端提供一次性授权结果/授权码，让报表后端建立并保管对应的短期 MBS 会话。
- 共享或定时报表应使用 MBS 正式提供的受控管理型长期 Token 或受限服务身份；可在容器初始化时通过交互式 `mbs login` 导入仅后端持有的专用持久卷，不得用 `MBS_KEY` 代替服务凭据，长期材料不得进入镜像、环境变量或浏览器前端。
- 现有 `mbs serve` 是无额外鉴权的本地调试网关，不能直接作为公网或局域网报表后端。

## 演进关系

- `20260903-[FEATURE]接入长短Token刷新登录` 补充 `20260902-[SECURITY]禁止持久化MBS_KEY`，并按用户最新决定增加管理型长期 Refresh Token 的手工导入。
- `20260904-[SECURITY]临时支持远程HTTP认证` 部分修正严格 HTTPS 传输实现：合法远程 HTTP 默认允许，不再确认或保存 Origin 授权；不改变任何凭据持久化边界。
- `20260904-[FEATURE]支持Agent对话选择登录方式` 补充非交互入口：Agent 对话只选择模式，秘密只在 Windows 可见终端隐藏输入；不改变认证协议或缓存结构。
- `20260904-[BUG]登录请求移除客户端类型头` 修正认证登录契约：密码登录和首次 LongToken 登录不发送客户端分类头，登录后 Refresh 行为保持。
- `20260904-[BUG]当前用户查询移除客户端类型头` 部分修正前一任务遗漏：首次 Token 登录随后执行的 current-user 查询也不发送客户端分类头；登录后 Refresh 行为继续保持。
- `20260904-[BUG]刷新交换移除客户端类型头` 修正前两项任务中对 Refresh 的历史假设：compat-session 不按 login/refresh 区分客户端分类头，两类用途均不发送 `client-type: cli`；普通业务请求头保持不变。
- `20260904-[BUG]修复登录完成与请求认证` 把扫码入口迁移到认证中心，补充服务端 state 绑定和 CLI 的受限 HTTP Session 降级，并修复网关把认证中心 401 错误改写为 403 的刷新阻断；CLI 部分已随 `1.1.3` 发布，服务端部分待发布。
- `20260908-[BUG]修复长期Token会话续期` 通过 DEC-008 部分替代 DEC-004：Access Token 可安全落盘并跨进程复用，缺失/到期时请求前换取，任何失败都不隐式清空登录材料；已本地验证，尚未发布或真实联调。
- `20260904-[CHORE]本地替换刷新请求头修复版CLI` 将本机活动的系统级 npm 安装链接到当前工作区；该本机事实不等同于 npm 发布。
- `MBS_KEY` 禁令和旧 key 删除式清理完全保留；新机制只使用认证中心正式签发的登录型 Refresh Cookie或后台管理型 `LongToken`。

## 深入读取条件

- 修改 Refresh Cookie 持久化、Access Token 存储、普通业务请求携带凭据或 MBS_KEY 清理时，必须读取两个关联任务和 DEC-003/DEC-004。
- Docker 无人值守、多用户授权、跨进程并发刷新或生产 Cookie 域策略需要独立 L3 设计与目标环境验证。

## 关联决策

- [`DEC-003：MBS_KEY 禁止持久化`](../decisions/DEC-003-MBS_KEY禁止持久化.md)
- [`DEC-004：登录型 Refresh 与短期 Access 边界`](../decisions/DEC-004-登录型Refresh与短期Access边界.md)
- [`DEC-005：远程 HTTP 认证默认允许`](../decisions/DEC-005-远程HTTP认证默认允许.md)
- [`DEC-006：Agent 非交互登录交接`](../decisions/DEC-006-Agent非交互登录交接.md)
- [`DEC-007：扫码登录闭环与 HTTP 会话降级`](../decisions/DEC-007-扫码登录闭环与HTTP会话降级.md)
- [`DEC-008：认证失败保留与 Access 持久化`](../decisions/DEC-008-认证失败保留与Access持久化.md)

## 当前原始来源

- [`20260904-[BUG]修复登录完成与请求认证`](../../req_doc/20260904-[BUG]修复登录完成与请求认证/)
- [`20260907-[RELEASE]发布1.1.3维护版本`](../../req_doc/20260907-[RELEASE]发布1.1.3维护版本/)
- [`20260908-[BUG]修复长期Token会话续期`](../../req_doc/20260908-[BUG]修复长期Token会话续期/)
