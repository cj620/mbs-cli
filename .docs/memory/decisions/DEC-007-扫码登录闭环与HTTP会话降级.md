# DEC-007：扫码登录闭环与 HTTP 会话降级

- 状态：有效，CLI 已随 npm `1.1.3` 发布；认证中心配套实现待发布和真实环境验收
- 日期：2026-09-04
- 决策范围：MBS CLI 扫码登录入口、浏览器 Cookie 判定、登录完成时限与远程 HTTP 兼容
- 来源任务：`20260904-[BUG]修复登录完成与请求认证`、`20260907-[RELEASE]发布1.1.3维护版本`

## 背景

CLI 曾打开旧商城 JSP，但当前认证缓存要求认证中心签发的 `SESSION` 与登录型
`AUTH_REFRESH`，两者契约不一致，导致扫码完成后 CLI 一直等待，浏览器也无法进入关闭与成功输出。
同时，默认目标暂时只提供远程 HTTP；长期 Refresh 不应经过明文扫码回调，带 `Secure` 的 Cookie
也不会被浏览器保存。仅切换页面或仅放宽 Cookie 判定都不能形成可用且可解释的登录闭环。

## 决策

1. 扫码固定打开认证中心网关入口 `/gateway/auth-center-service/auth/user/login/qr`，不再依赖旧商城页面或解析登录请求。
2. HTTPS 扫码只有在目标登录 URL 可见唯一安全 `SESSION` 和唯一、未过期的 `AUTH_REFRESH` 时才完成，继续保存可刷新认证上下文。
3. 仅当实际登录 URL 使用 `http:`、恰有一个安全 `SESSION` 且完全没有 `AUTH_REFRESH` 时，才允许临时降级。存在重复、异常或过期 Refresh 时不得退回 SESSION-only。
4. HTTP 降级的 `SESSION` 必须先通过 current-user 接口验证，成功后才保存为现有最长两小时的 legacy 上下文；该上下文不能 Refresh，并必须输出不含凭据的明确警告。扫码页加载阶段产生且被身份查询拒绝的匿名 Session 只作为已拒绝候选，CLI 必须继续等待回调旋转出的新 Session，不能立即关闭浏览器。
5. Cookie 读取限定为实际登录 URL，不能从整个浏览器上下文按名称拼接。页面导航、Cookie 轮询和 current-user 验证共享一个绝对截止时间；current-user 同时接收剩余 Axios timeout 与 `AbortSignal`，确保慢滴流连接也会被终止。
6. 扫码 API URL 必须在打印或启动浏览器前通过无 userinfo/query/fragment 的 HTTP(S) 校验；页面导航返回 4xx/5xx 时立即安全失败并关闭浏览器，不等待五分钟轮询超时。
7. CLI 只在身份验证和认证缓存写入都成功后输出一次成功；浏览器由 `finally` 在成功、拒绝和超时路径关闭。
8. DEC-003 与 DEC-004 的长期凭据边界不变：认证中心 HTTP 扫码完全不创建或发送 Refresh，CLI 不会把登录型 Refresh、管理型 `LongToken` 或 Access Token 放入普通业务请求，也不会恢复 `MBS_KEY`。
9. 认证中心扫码页代表显式登录切换，控制器必须失效认证拦截器在免认证判断前提前创建的预登录 Session；OAuth 回调成功后再创建并轮换已认证 Session。

## 权衡与后果

- HTTPS 仍是完整能力路径，可持续使用登录型 Refresh；HTTP 扫码只有最长两小时 Session，失效后必须重新登录。
- HTTP 无法提供机密性、完整性或可靠服务端身份认证；受限降级只解决现有部署可用性，不把明文传输描述为安全。
- current-user 请求同时获得实际底层超时和取消信号，避免表面超时后仍由持续返回数据的 socket 拖住 CLI 进程；浏览器启动自身的故障仍由既有错误边界处理。
- 页面必须由认证中心使用限时 HMAC state 和当前协议 Cookie 绑定同一浏览器；HTTPS 使用 `__Host-` Cookie。CLI 不轮询或接收可跨浏览器转移的 Session ID。

## 替代关系

- 补充 DEC-004 中对 bounded legacy SESSION-only 缓存的兼容说明。
- 将 DEC-005 的远程 HTTP 临时兼容扩展到扫码入口，但不改变其风险接受、合法 URL 校验和“具备 HTTPS 后立即迁移”的结论。
- 替代旧扫码入口 `/eshop/manager/login.jsp` 及“扫码必然获得双 Cookie”的实现假设。

## 验证与发布门禁

- CLI 行为测试覆盖 HTTPS 双 Cookie、HTTP SESSION-only、异常 Refresh 不降级、登录 URL Cookie 隔离、非法 URL、页面 503、current-user 拒绝/绝对取消、浏览器关闭与成功/警告输出。
- Node loopback HTTP 测试覆盖业务首发 `SESSION`，以及 401 后新 `SESSION`、内存 Bearer 和唯一一次重试；持续 401 只发两次请求；slow-drip 实际连接会被 `AbortSignal` 关闭；普通请求不携带长期凭据。
- CLI 已随 `@mb-it-org/cli@1.1.3` 发布，两次分支 CI、Release、npm dist-tag 和官方包版本/帮助/Skill 核验通过。
- 本地自动化不能证明目标环境的 HTTPS、Cookie、共享 Redis/Session namespace、Nacos 白名单或真实钉钉回调已经生效。发布后必须使用专用测试身份执行扫码、密码、管理型 Token、失效刷新和真实 RBAC 允许/拒绝验收。
