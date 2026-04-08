---
name: shared
description: "MBS CLI 认证与配置说明 — 所有 skill 必读"
metadata:
  requires:
    bins: ["mbs"]
---

# MBS CLI — 认证与配置（必读）

> **所有 skill 在使用前必须先完成认证。本文档说明认证流程、输出格式约定和错误处理规则。**

---

## 安装

```bash
npm install -g @mbs/cli
```

需要 Node.js 18+。

---

## 首次配置

```bash
# 配置 API 地址（仅需一次）
mbs config init

# 登录（浏览器完成 SSO，token 存入系统钥匙串）
mbs login

# 验证认证状态
mbs whoami
```

`mbs whoami` 输出示例：
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

---

## 输出格式（所有命令统一）

**成功：**
```json
{ "ok": true, "data": <any>, "meta": { "total": <number> } }
```
`meta` 可选，不适用时省略。

**失败：**
```json
{ "ok": false, "error": { "type": "auth|validation|api", "message": "...", "hint": "..." } }
```

---

## 退出码

| 退出码 | 含义 | 处理方式 |
|--------|------|---------|
| `0` | 成功 | — |
| `1` | API / 参数错误 | 检查 `error.hint` 字段 |
| `2` | 认证失败 | 运行 `mbs login` 重新登录 |

---

## CI / 无交互环境

```bash
MBS_API_URL=https://api.example.com MBS_TOKEN=xxx mbs org platforms
```

---

## 直通命令（探索未封装接口）

```bash
mbs raw GET /v1/orders
mbs raw POST /v1/export --body '{"from":"2026-01-01","to":"2026-04-08"}'
mbs raw GET /v1/products --params '{"status":"active"}'
```
