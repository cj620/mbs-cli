# DEC-004：长期凭据与短期 Access 边界

- 状态：有效规则，管理型 LongToken 扩展已随 npm `1.0.6` 发布并完成官方源命令核验，待真实网关联调
- 日期：2026-09-03
- 决策范围：MBS CLI 登录、认证缓存、显式刷新、业务请求一次性认证重试
- 来源任务：`20260903-[FEATURE]接入长短Token刷新登录`

## 背景

认证中心已正式提供登录型 `AUTH_REFRESH` Cookie、后台管理型 `LongToken`、短期 Access Token 与 `/auth/token/exchange/compat-session`。登录型 Refresh 由扫码或账号密码强认证后自动签发且每次成功交换都会旋转；管理型 Token 由后台签发、用户手工导入且交换时不轮换。两者都不能直接访问业务接口，兼容交换同时建立或续接历史 `SESSION`。

这与 `MBS_KEY` 的性质不同：`MBS_KEY` 可解析账号密码材料且不允许本项目接触；登录型 Refresh 是服务端专门签发、具有绝对有效期、可轮换和可撤销的设备级凭据。

## 决策

1. `MBS_KEY` 禁令保持完整有效；不得用 `AUTH_REFRESH` 名义恢复任何 MBS_KEY 捕获、迁移或存储。
2. CLI 可在权限仅限当前用户的认证缓存中保存标准化后的 `SESSION`，以及二选一的登录型 `AUTH_REFRESH` + 绝对到期时间或管理型 `LongToken`；不保存 Cookie 属性、其他 Cookie 或未知用户字段。
3. 两类长期凭据只发送给认证中心兼容交换入口且不得同时提交；登录型使用 Cookie，管理型使用唯一 `Authorization: LongToken <token>`。普通业务请求只使用兼容 `SESSION` 和当前进程内存中的短期 Bearer。
4. Access Token 只存在于当前进程内存，不持久化、不输出、不记录，也不进入错误对象或任务证据。
5. 登录型交换成功必须取得并校验旋转后的 `AUTH_REFRESH`；管理型交换必须保留原 Token 且取得或续接唯一 `SESSION`。响应或落盘不确定时清除本地认证。
6. SESSION-only 旧缓存只在原两小时窗口内兼容使用，不能执行 Refresh；失效后重新登录取得正式 Refresh Cookie。
7. 每次有效执行 `mbs login` 都必须在任何登录选择、凭据输入或浏览器启动前清空完整本地认证缓存。取消或失败不得恢复旧凭据，避免重新登录或切换用户时混用不同身份的 `SESSION`、Refresh 凭据与用户摘要。

## 权衡与后果

- 好处：无需保存 `MBS_KEY` 即可恢复短期身份；旧服务通过真实 SESSION 继续工作，新网关/服务可使用 Bearer。
- 代价：Refresh Cookie 和管理型 `LongToken` 都是需要保护的长期认证材料；本地缓存必须严格限权且不得复制到参数、环境变量、日志或容器镜像，管理型 Token 的有效期与撤销状态只能由服务端在交换时确认。
- 多 CLI 进程同时轮换同一 Refresh Cookie 仍可能发生跨进程竞态并触发重放保护。本轮不引入跨进程锁；调用方应避免并发执行刷新，后续若出现真实故障再建立独立任务。
- 显式 `mbs refresh` 结束后，其 Access Token 随进程退出而丢弃，这是“不持久化短 Token”的预期；旋转后的登录 Cookie或保持不变的管理型 Token，以及续接 SESSION，可供后续命令使用。

## 替代关系

- 补充 `DEC-003 MBS_KEY 禁止持久化`，不替代其核心安全禁令。
- 部分修正 `DEC-003` 中“CLI 自动刷新能力不再提供”的本地实现影响：刷新不再依赖 MBS_KEY，而改用认证中心正式签发的登录型 Refresh Cookie。

## 验证

- Cookie 解析、到期、旋转、缺失和重复输入单测。
- 兼容交换路径、请求头、响应结构与安全错误单测。
- API 401 后 Bearer + SESSION 唯一重试测试。
- 登录选择、密码无浏览器、扫码双 Cookie 与 refresh 不泄漏输出测试。
- 全仓构建、测试、敏感关键词与差异检查；真实 HTTPS 网关仍需单独验收。

## 后续演进

- 2026-09-04：DEC-005 在当前工作区部分修正远程传输门禁。密码、管理型 LongToken 和 compat-session 默认接受合法 HTTP(S) 地址，不要求额外确认或 Origin 授权；本决策中的凭据互斥、持久化、轮换、Access Token 仅内存和登录前清理边界不变。npm `1.0.6` 尚不包含该修正。
