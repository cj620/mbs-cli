# 项目记忆索引

| 记忆键 | 主题 | 当前结论 | 适用范围 | 当前来源 | 状态 | 主题文档 | 最后核验 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `API-REQUEST-BODY-ENCODING` | 接口请求体编码 | npm `maintenance-1=1.0.4` 已由 `mbs request --api-id` 读取后端详情并统一编码七种 body 模式，manifest 生成与 serve 复用；官方源安装包核验通过 | `packages/shared`、`packages/cli`、生成器、Skill | `20260825-[RELEASE]发布1.0.4维护版本` | 已发布并完成官方源核验 | [`./topics/接口请求体编码.md`](./topics/接口请求体编码.md) | 2026-08-25 / `689e82e` / npm 1.0.4 |
| `CLI-PUBLIC-COMPATIBILITY` | CLI 公开命令兼容性 | npm `0.1.58` 的五个业务命令已由独立兼容插件在本地恢复，命令 ID、flags、帮助和只读请求契约验证通过；旧 serve 路由不在本轮范围 | `packages/cli`、`packages/legacy` | `20260810-[BUG]恢复已发布CLI旧命令` | 本地已验证/待发布 | [`./topics/CLI公开命令兼容性.md`](./topics/CLI公开命令兼容性.md) | 2026-08-10 / `5b5c255` + 当前工作区 |
| `AUTH-DEV-PROXY` | 本地开发认证代理 | 本地联调方案已完整回滚；`apiUrl` 为服务器根地址，登录直达 `/eshop/manager/...`，业务与语义召回统一经 `/gateway/cli` | `packages/shared`、`packages/cli`、`packages/doris` | `20260814-[RELEASE]发布1.0.3维护版本` | 已随 maintenance-1 1.0.3 发布 | [`./topics/本地开发认证代理.md`](./topics/本地开发认证代理.md) | 2026-08-14 / `ee9c017` / npm 1.0.3 |
| `CLI-GATEWAY-ROUTING` | CLI 网关路由 | 正式业务命令、公共 request 及 find/describe 统一以 `<apiUrl>/gateway/cli` 为上游基础前缀；13 条 manifest 路径已移除重复 `/gateway` | `packages/shared`、`packages/cli`、生成业务包、manifest | `20260814-[RELEASE]发布1.0.3维护版本` | 已随 maintenance-1 1.0.3 发布并核验 | [`./topics/CLI网关路由.md`](./topics/CLI网关路由.md) | 2026-08-14 / `ee9c017` / `maintenance-1-v1.0.3` |
| `UNIFIED-SEMANTIC-DISCOVERY` | 统一语义发现 | find/describe 经 `/gateway/cli/cli-service/cli/api/recall...` 请求；首次 find 不预判 domain；API 详情确认 QUERY 后由公共 `mbs request` 动态查询 | `packages/cli`、`packages/doris`、Skill | `20260814-[RELEASE]发布1.0.3维护版本` | 已随 maintenance-1 1.0.3 发布 | [`./topics/统一语义发现.md`](./topics/统一语义发现.md) | 2026-08-14 / `ee9c017` / npm 1.0.3 |
| `INTERFACE-SEMANTIC-DISCOVERY` | 接口语义发现 | name/domain 只作展示；详情按 ID 获取；动态 QUERY 接口通过受限 `mbs request GET|POST <path>` 执行，不依赖预生成命令 | `packages/cli`、Skill 生成与安装 | `20260812-[FEATURE]新增公共只读请求命令` | 已随 maintenance-1 1.0.2 发布 | [`./topics/接口语义发现.md`](./topics/接口语义发现.md) | 2026-08-12 / `8d2c3bb` / npm 1.0.2 |
| `RELEASE-LINE-1X` | 1.0.0 长期维护分支 | `origin/1.0.0` 独立于 master；npm `maintenance-1=1.0.4` 已发布且 `latest` 保持 `0.1.59` | 全仓库、`packages/cli`、CI | `20260825-[RELEASE]发布1.0.4维护版本` | 已发布并完成官方源核验 | [`./topics/1.0.0长期维护分支.md`](./topics/1.0.0长期维护分支.md) | 2026-08-25 / `689e82e` / `maintenance-1-v1.0.4` |

## 当前技术债

- npm `1.0.4` 的七种请求体编码已通过本地 V3 与官方源安装核验，但尚未使用真实登录态、真实上传文件或目标网关业务接口联调。
- 目标环境 embedding/Milvus、workflow 重建与 30 条 eval 尚未验收；本次未使用真实登录态执行生产 find 业务查询。

## 重大决策

- [`DEC-001 动态查询接口使用公共只读请求命令`](./decisions/DEC-001-动态查询接口使用公共只读请求命令.md)：普通动态接口固定复用 `/gateway/cli` 和网关权限，不新增 cli-service 执行接口。
