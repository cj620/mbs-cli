# 全局参考

## 认证与配置

### 首次配置

```bash
mbs login              # 默认扫码登录（优先使用系统 Chrome / Edge）
mbs login --password   # 账号密码登录，打开 loginit2.jsp（等同 -p）
mbs whoami             # 验证认证状态
```

说明：
- `mbs login` 默认打开扫码登录页（`/eshop/manager/login.jsp`），并监听 `ERPLOGIN_PATH` 请求来提取登录 key
- `--password` / `-p`：改为打开账号密码登录页（`/eshop/manager/loginit2.jsp`），其余认证流程不变
- 默认不需要预装浏览器运行时；不要在阅读文档或环境检查阶段主动安装
- 只有系统 Chrome / Edge 都不可用，且 `mbs login` 明确提示缺少浏览器运行时时，才说明阻塞点并按提示处理

### CI / 无交互环境

```bash
MBS_API_URL=https://api.example.com MBS_TOKEN=xxx mbs org platforms
```

### 直通命令（探索未封装接口）

```bash
mbs raw GET /v1/orders
mbs raw POST /v1/export --body '{"from":"2026-01-01","to":"2026-04-08"}'
```

### 本地 HTTP 网关（业务页面二次开发）

`mbs serve` 会读取 audit manifest，并在本机启动一个 HTTP 网关，让浏览器页面复用 CLI 认证查询 MBS API。它适合基于已审计的业务接口做内部看板、运营辅助页、临时分析页等页面化二次开发，页面侧无需重新实现登录、Cookie 刷新和 API 转发。

```bash
mbs serve --manifest fixtures/sample-audit-manifest.json
mbs serve --manifest fixtures/sample-audit-manifest.json --port 7878
```

说明：
- 默认监听 `127.0.0.1:7878`，不要暴露到公网或局域网
- 本地路由格式为 `/api/<domain>/<action>`；带 `{param}` 的 API path 会追加路径参数
- `GET /__routes` 可查看当前 manifest 生成的路由
- CORS 仅允许 `localhost`、`127.0.0.1` 和本地文件页面的 `null` origin
- `serve` 无额外鉴权，会复用当前机器的 CLI 登录态；仅用于本地调试

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
