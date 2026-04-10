# 全局参考

## 认证与配置

### 首次配置

```bash
mbs login         # Playwright 启动 Chromium 登录页，监听登录请求提取 key
npx -y playwright install chromium   # 若空白电脑缺少 Playwright 浏览器运行时，先补装
mbs whoami        # 验证认证状态
```

### CI / 无交互环境

```bash
MBS_API_URL=https://api.example.com MBS_TOKEN=xxx mbs org platforms
```

### 直通命令（探索未封装接口）

```bash
mbs raw GET /v1/orders
mbs raw POST /v1/export --body '{"from":"2026-01-01","to":"2026-04-08"}'
```

### 版本与更新

```bash
# 查看当前版本，并检查 GitHub Release 最新版本
mbs version

# 自动选择更新来源
mbs update

# 强制 npm 全局更新
mbs update --source npm

# 强制 GitHub Release 制品更新
mbs update --source release
```

详细说明见 `packages/cli/docs/version-and-update.md`。

---

## 输出格式（所有命令统一）

**成功：**
```json
{ "ok": true, "data": <any>, "meta": { "total": <number> } }
```

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
