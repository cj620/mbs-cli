Ready for review
Select text to add comments on the plan
MBS CLI — 架构方案
Context
为公司内部电商管理系统打造一个 CLI 工具 mbs，借鉴 lark-cli 的三层空间架构与 Skill 插件体系。主要用途：AI Agent 调用，查询/导出订单、商品、财务、客户数据，输出 JSON 结构化结果。

技术栈
角色 技术选型 理由
CLI 框架 oclif 原生插件系统，天然对应 Skill 模型；TypeScript-first；Heroku/Salesforce 同款
Monorepo pnpm workspaces 轻量、快速、与 oclif 多包兼容
语言 TypeScript 与现有项目一致
HTTP ky 或 axios 轻量 HTTP 客户端，支持拦截器
配置存储 conf 库 跨平台用户配置目录（~/.mbs/config.json）
凭证存储 keytar OS 原生钥匙串（macOS Keychain / Windows Credential）
三层命令架构
L1 快捷层（语义化业务命令） ← Skill 提供
mbs orders list --status pending
mbs report today
mbs inventory low-stock

L2 动态层（从 API spec 自动生成） ← 运行时从 JSON spec 挂载
mbs api:orders:list
mbs api:products:get --sku XX

L3 直通层（原始 HTTP 透传） ← core CLI 内置
mbs raw GET /v1/orders
mbs raw POST /v1/export --body '{}'
L1 每个 Skill 包手工定义，语义清晰，供 Agent 优先使用
L2 CLI 启动时读取 api-spec/\*.json，动态注册命令树，零硬编码接口
L3 raw 命令透传任意端点，调试或覆盖未文档化接口
Monorepo 目录结构
mbs-cli/
├── packages/
│ ├── cli/ # 核心入口（oclif root plugin）
│ │ ├── src/
│ │ │ ├── core/
│ │ │ │ ├── factory.ts # 依赖注入（懒加载 auth/http）
│ │ │ │ ├── config.ts # 配置读写
│ │ │ │ ├── http.ts # 基础 HTTP 客户端
│ │ │ │ └── output.ts # 统一 JSON 输出格式化
│ │ │ ├── commands/
│ │ │ │ ├── raw.ts # L3 直通命令
│ │ │ │ └── config/
│ │ │ │ ├── init.ts # mbs config init（交互式配置）
│ │ │ │ └── get.ts
│ │ │ └── hooks/
│ │ │ └── init.ts # 启动钩子：加载 L2 动态命令
│ │ ├── api-spec/ # 各系统 API 元数据 JSON
│ │ │ ├── orders.json
│ │ │ └── products.json
│ │ └── package.json
│ │
│ ├── skill-shared/ # 基础 Skill（自动随其他 skill 加载）
│ │ └── src/
│ │ ├── auth.ts # 认证流程（待补充具体方式）
│ │ ├── errors.ts # 结构化错误 {type, message, hint}
│ │ └── types.ts # 公共类型
│ │
│ ├── skill-orders/ # 订单 Skill
│ ├── skill-products/ # 商品/库存 Skill
│ ├── skill-finance/ # 财务/报表 Skill
│ └── skill-customers/ # 客户 Skill
│
├── pnpm-workspace.yaml
├── package.json
└── tsconfig.base.json
每个 Skill 包内部结构
以 skill-orders 为例：

skill-orders/
├── src/
│ ├── commands/
│ │ └── orders/
│ │ ├── list.ts # mbs orders list [--status] [--limit] [--format]
│ │ ├── get.ts # mbs orders get <id>
│ │ └── export.ts # mbs orders export --from --to --output
│ ├── api.ts # 封装订单相关 API 请求
│ └── formatters.ts # JSON / table 双模式输出
├── docs/
│ └── overview.md # AI Agent 阅读文档：权限、用法、示例
├── package.json # oclif plugin 声明
└── tsconfig.json
核心设计模式
Factory 依赖注入（懒加载）
// packages/cli/src/core/factory.ts
export const createAPIClient = () => {
let client: APIClient | null = null
return async () => {
if (!client) {
const config = await loadConfig()
client = new APIClient(config.apiUrl, config.token)
}
return client
}
}
统一输出格式（JSON 优先）
// 成功
{ "ok": true, "data": [...], "meta": { "total": 100 } }

// 错误（AI 可自恢复）
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "运行 mbs config init 重新配置" } }
L2 动态命令生成
// packages/cli/src/hooks/init.ts
// 启动时读取 api-spec/\*.json，动态注册命令，零硬编码
for (const spec of loadSpecs()) {
registerDynamicCommand(spec) // → mbs api:orders:list
}
配置管理

# 初始化配置（交互式）

mbs config init

# → 输入 API Base URL

# → 输入 Token / 选择认证方式（待补充）

# → 写入 ~/.mbs/config.json，凭证存入 OS keychain

# 查看当前配置

mbs config get

# 环境变量覆盖（适合 CI/Agent 场景）

MBS_API_URL=https://... MBS_TOKEN=xxx mbs orders list
AI Agent 友好设计
JSON stdout：所有命令默认输出 JSON，--format table 可切换人类可读
结构化错误：每个错误带 hint 字段，Agent 可直接读取恢复步骤
docs/ 文档：每个 Skill 含 overview.md，描述命令用途、所需权限、用法示例
退出码：成功 0，错误 1，认证失败 2（供 Agent 判断）
实施阶段
阶段 1：Monorepo 骨架 + core
初始化 pnpm workspace + oclif
packages/cli：factory、config、output、raw 命令、config init/get 命令
packages/skill-shared：errors、types
阶段 2：首个 Skill（skill-orders）
实现 orders list、orders get、orders export
api.ts 对接系统 REST API（补充认证后完善）
docs/overview.md
阶段 3：其余 Skill
skill-products、skill-finance、skill-customers
结构与 skill-orders 一致，复用 skill-shared
阶段 4：L2 动态命令层
定义 api-spec/\*.json 格式
实现启动钩子自动注册动态命令
阶段 5：认证完善 + 发布
根据确定的认证方式（API Key/Session JWT）完善 skill-shared/auth.ts
打包为可执行文件 / npm 全局安装
待确认事项
系统 API 的认证方式（API Key？JWT？Session？）—— 影响 skill-shared/auth.ts 实现
API Base URL 及可用端点清单（影响 L2 动态命令生成）
CLI 发布方式：npm 全局包？还是单二进制（pkg/ncc 打包）？
验证方式

# 安装

pnpm install

# 构建

pnpm build

# 测试核心命令

./bin/mbs config init
./bin/mbs orders list --status pending
./bin/mbs orders get 12345
./bin/mbs raw GET /v1/orders
./bin/mbs orders list --format table

# 验证 JSON 输出适合 Agent 解析

./bin/mbs orders list | jq '.data[0].id'
Add Comment
