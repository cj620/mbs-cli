# DEC-005：远程 HTTP 认证默认允许

- 状态：有效于当前工作区，本地 V3 已通过，待发布与真实环境联调
- 日期：2026-09-04
- 决策范围：MBS CLI 配置、账号密码登录、管理型长期 Token 登录、兼容 Session 刷新
- 来源任务：`20260904-[SECURITY]临时支持远程HTTP认证`

## 背景

目标服务暂时只能提供远程 HTTP，严格 HTTPS/loopback 门禁会阻止账号密码、管理型长期 Refresh Token 和 compat-session 刷新。任务最初采用默认拒绝和精确 Origin 显式授权；用户随后明确要求“默认允许 http”，因此旧候选方案被替代。

## 决策

1. 合法 HTTP(S) API URL 默认可用于密码登录、管理型 Token 登录和 compat-session 刷新。
2. `mbs config init` 不对远程 HTTP 二次确认，不保存布尔开关或 Origin 授权；持久配置仍只有 API URL。
3. URL 必须使用 `http:` 或 `https:`，且不得包含内嵌账号密码、query 或 fragment。
4. 显式 `mbs refresh` 与业务请求的一次性自动刷新复用相同规则。
5. 不自行设计应用层加密。服务端提供 HTTPS 后重新配置为 HTTPS。
6. DEC-003 的 `MBS_KEY` 禁令与 DEC-004 的长期凭据互斥、Access Token 仅内存、登录前清理规则保持完整有效。

## 权衡与后果

- 远程 HTTP 不提供机密性、完整性或可靠的服务端身份认证。账号密码、Refresh Token、Cookie、SESSION、Access Token 和响应可能被监听、劫持或篡改。
- 配置错误或被篡改的 HTTP 地址会直接收到认证凭据；CLI 不再通过确认或 Origin 授权减轻该风险。
- 默认允许是用户针对当前无法提供 HTTPS 的生产环境作出的临时兼容决定，不代表 HTTP 安全。
- npm `1.0.6` 仍执行严格 HTTPS/loopback 门禁；只有包含本决策实现的后续交付才具备默认 HTTP 能力。

## 被替代方案

- 默认拒绝并由 `config init` 对精确 Origin 显式授权：曾在当前工作区实现并通过本地验证，后被用户“默认允许 http”的最新决定替代。
- 客户端自行加密密码或 Token：需要服务端协议和密钥管理，当前不存在经评审契约，因此不采用。

## 验证与移除条件

- 自动化覆盖远程 HTTP 默认放行、HTTPS/loopback 兼容、非法协议拒绝及三类认证入口。
- 发布前仍需在生产等价网络使用专用测试凭据联调；任务证据不得保存请求正文或凭据。
- 服务端 HTTPS 可用后，以重新配置和三个认证分支 HTTPS 联调作为移除临时 HTTP 兼容的条件。

## 替代关系

- 部分修正 DEC-004 中“远程明文 HTTP 一律拒绝”的传输实现，不改变其凭据生命周期与持久化边界。
- 不替代 DEC-003；`MBS_KEY` 禁止接触和持久化的规则不受影响。
