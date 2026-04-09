# MBS CLI — Agent 使用指南

MBS CLI 是公司内部电商管理系统的命令行工具，专为 AI Agent 设计。
所有命令输出结构化 JSON，支持 `jq` 管道解析。

---

## 安装与认证

```bash
# 全局安装（需 Node.js 18+）
npm install -g @mbs/cli

# 登录（浏览器完成 SSO，token 存入系统钥匙串）
mbs login

# 验证认证状态
mbs whoami
```

`whoami` 返回示例：
```json
{
  "ok": true,
  "data": {
    "keyPreview": "abcd1234...",
    "sessionActive": true,
    "user": { "name": "张三", "id": "U001" },
    "updatedAt": "2026/4/8 10:00:00"
  }
}
```

**认证失败处理：**
- 退出码 `2` = 认证过期，运行 `mbs login` 重新登录
- 退出码 `1` = 参数/API 错误，检查 `error.hint` 字段

---

## 输出格式（统一约定）

```json
// 成功
{ "ok": true, "data": <any>, "meta": { "total": <number> } }

// 失败
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

**退出码：** `0`=成功 `1`=错误 `2`=认证失败

---

## 可用 Skill 一览

| Skill | 命令前缀 | 用途 | 详细文档 |
|-------|---------|------|---------|
| skill-org | `mbs org` | 组织架构（平台/站点/总监/经理/主管/店长/店铺/员工） | [packages/skill-org/docs/overview.md](packages/skill-org/docs/overview.md) |

> 更多 skill（orders、products、finance、customers）开发中。

---

## skill-org 快速参考

组织架构为**级联结构**，下级命令依赖上级返回的 ID。

```
org platforms → org leaders → org managers → org little-leaders → org shop-managers
                                                                 └→ org shops
                                                                 └→ org employees
org sites（独立，依赖 platform ID）
```

### 常用查询

```bash
# 获取所有平台
mbs org platforms

# 获取平台下的站点
mbs org sites --platform <platformId>

# 获取总监列表（公司 1=胤元, 33=启元）
mbs org leaders --company 1 --platform <platformId>

# 获取运营中的店铺
mbs org shops --company 1 --status 1

# 提取 ID 列表（配合 jq）
mbs org platforms | jq '[.data[].id]'
mbs org shops --company 1 | jq '[.data[].id]'
```

完整参数说明见 [packages/skill-org/docs/overview.md](packages/skill-org/docs/overview.md)。

---

## L3 直通命令（raw）

访问任意 API 端点，无需等待 skill 实现：

```bash
mbs raw GET /v1/orders
mbs raw POST /v1/export --body '{"from":"2026-01-01","to":"2026-04-08"}'
mbs raw GET /v1/products --params '{"status":"active"}'
```

---

## Agent 决策树

```
需要组织架构数据？
  └→ 用 mbs org <command>（参考 skill-org/docs/overview.md）

需要其他业务数据（订单/商品/财务）？
  └→ 用 mbs raw GET/POST <path>

不确定 API 路径？
  └→ 先用 mbs raw，再提议封装为 skill

认证失败（退出码 2）？
  └→ 通知用户运行 mbs login
```

---

## 环境变量（CI / 无交互场景）

```bash
MBS_API_URL=https://api.example.com MBS_TOKEN=xxx mbs org platforms
```
