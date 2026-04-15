# 全局参考

## 认证与配置

### 首次配置

```bash
mbs login         # Playwright 优先尝试系统 Chrome，其次 Edge，最后回退到 Playwright Chromium；监听登录请求提取 key
mbs whoami        # 验证认证状态
```

说明：
- `mbs login` 打开的仍然是登录页 `LOGIN_URL`，并监听 `ERPLOGIN_PATH` 请求来提取登录 key
- 即使使用系统 Chrome / Edge，只要仍由 Playwright 启动和控制，请求监听逻辑仍然有效
- 默认不需要预装 Playwright Chromium；只有系统 Chrome / Edge 都无法完成登录，且提示缺少 Playwright 浏览器运行时时，才执行 `npx -y playwright install chromium`

### CI / 无交互环境

```bash
MBS_API_URL=https://api.example.com MBS_TOKEN=xxx mbs org platforms
```

### 直通命令（探索未封装接口）

```bash
mbs raw GET /v1/orders
mbs raw POST /v1/export --body '{"from":"2026-01-01","to":"2026-04-08"}'
```

### Skill 文档

Skill 文档随 CLI 一起打包发布，更新 CLI 即同步更新 skill 文档。

```bash
# 查看 skill 文档目录的绝对路径
mbs skills path

# 输出 SKILL.md 内容（主入口）
mbs skills show

# 输出指定文档内容
mbs skills show --file references/global.md
mbs skills show --file references/org/SKILL.md
```

### 版本与更新

详细文档（含意图匹配、输出格式、验收规则、Agent Skill 刷新协议）见 [references/update/SKILL.md](update/SKILL.md)。

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
