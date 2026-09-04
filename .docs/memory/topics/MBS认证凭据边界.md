# MBS 认证凭据边界

- 记忆键：`AUTH-CREDENTIAL-BOUNDARY`
- 状态：npm `1.1.0` 已发布；当前分支的 current-user 请求头修正已完成本地 V3、待发布，真实认证仍待联调
- 当前来源：`20260904-[BUG]当前用户查询移除客户端类型头`（待发布）、`20260904-[RELEASE]发布1.1.0维护版本`、DEC-003、DEC-004、DEC-005、DEC-006
- 最后核验：2026-09-04 / `dc29e59` + 当前工作区 / npm `1.1.0`

## 当前结论

`MBS_KEY` 是长期有效、可解析账号密码材料的高敏感凭据。项目不得捕获、持久化、转发或记录该值，包括操作系统凭据库、文件、环境变量、数据库、容器 Secret、浏览器存储、日志和遥测。

浏览器和账号密码登录可以在不捕获 `MBS_KEY` 的前提下获得认证中心签发的 `SESSION` 与登录型 `AUTH_REFRESH` Cookie。后台申请的管理型 `LongToken` 则由用户通过隐藏终端手工导入。CLI 缓存中两类长期凭据严格互斥：`AUTH_REFRESH` 有绝对有效期且每次成功交换轮换，管理型 `LongToken` 不轮换且由后台撤销；二者都不能直接访问业务接口。交换返回的短期 Access Token 只允许保存在当前进程内存。

## 当前实现

- 每次有效执行 `mbs login` 都先删除完整认证缓存，再选择登录方式或收集新凭据；清理覆盖 `SESSION`、两类互斥长期凭据、Refresh 到期时间和用户摘要，新登录取消或失败不恢复旧状态。
- 裸 `mbs login` 只在 stdin/stdout 均为 TTY 时使用终端选择列表询问扫码、账号密码或后台长期 Refresh Token；非交互调用返回安全提示。Agent 先在对话中选择，再执行 `--qr`、`--password` 或 `--managed-token`。
- 扫码登录只轮询隔离浏览器上下文中的 `SESSION` 与 `AUTH_REFRESH`，不监听登录请求。
- `mbs login --password` 接受配置中的合法 HTTP(S) 地址，通过终端隐藏输入直接调用认证中心；非交互 Windows Agent 会自动打开独立可见终端，不启动浏览器，也不提供参数或环境变量凭据入口。远程 HTTP 不要求额外确认，但会明文传输密码。
- 后台长期 Refresh Token 模式使用同一 HTTP(S) URL 校验，再通过终端隐藏输入；非交互 Windows Agent 会自动打开独立可见终端，按 `Authorization: LongToken <token>` 调用兼容交换，保存不轮换 Token 与兼容 `SESSION`，不提供参数或环境变量入口。HTTP 会明文传输 Token 和 Cookie。
- 密码登录请求不发送 `client-type`；首次管理型 LongToken 交换只发送必要的 `Authorization`。当前分支的 current-user 查询只发送标准化 `SESSION` Cookie；登录后的 Cookie/LongToken Refresh 仍发送 `client-type: cli`。npm `1.1.0` 尚未包含 current-user 的这项修正。
- key 存储模块只保留删除能力：删除操作系统凭据条目和已知旧文件时不读取内容。
- 认证缓存只保存标准化后的 `SESSION`、唯一长期凭据、登录型 Refresh 到期时间和最小用户摘要；同时出现 `AUTH_REFRESH` 与管理型 `LongToken` 时失败关闭。
- `mbs refresh` 与业务请求首次 401 使用 `/gateway/auth-center-service/auth/token/exchange/compat-session`；登录型 Cookie 保存旋转值，管理型 Token 保持不变。短期 Access Token 只进入当前 APIClient 内存，业务请求不携带任何长期凭据。
- 缺少 Refresh 的旧 SESSION-only 缓存在原两小时内兼容读取但不能刷新；交换失败后重新登录。

登录型 Refresh 与管理型 Token 两个分支自 `@mb-it-org/cli@1.0.6` 提供；远程 HTTP 默认允许已随 `1.0.7` 发布；Agent 非交互登录交接和首次登录请求头修复已随 `1.1.0` 发布。官方源安装包的版本、登录帮助和 Skill 内容已核验，真实 HTTP 凭据链路仍未联调。

Agent 非交互登录交接与 npm `1.1.0` 的首次登录请求头修复已通过完整 V3、维护分支 CI、Release、npm dist-tag 和官方精确版本临时安装/执行核验。current-user 请求头修正已在当前分支通过定向 17 项、shared 114 项、全仓 259 项与 14 包构建，尚未提交、发布或执行真实认证联调。

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
- `MBS_KEY` 禁令和旧 key 删除式清理完全保留；新机制只使用认证中心正式签发的登录型 Refresh Cookie或后台管理型 `LongToken`。

## 深入读取条件

- 修改 Refresh Cookie 持久化、Access Token 存储、普通业务请求携带凭据或 MBS_KEY 清理时，必须读取两个关联任务和 DEC-003/DEC-004。
- Docker 无人值守、多用户授权、跨进程并发刷新或生产 Cookie 域策略需要独立 L3 设计与目标环境验证。

## 关联决策

- [`DEC-003：MBS_KEY 禁止持久化`](../decisions/DEC-003-MBS_KEY禁止持久化.md)
- [`DEC-004：登录型 Refresh 与短期 Access 边界`](../decisions/DEC-004-登录型Refresh与短期Access边界.md)
- [`DEC-005：远程 HTTP 认证默认允许`](../decisions/DEC-005-远程HTTP认证默认允许.md)
- [`DEC-006：Agent 非交互登录交接`](../decisions/DEC-006-Agent非交互登录交接.md)
