# update — CLI 版本检查与更新

通过 `mbs version` 和 `mbs update` 管理 CLI 自身及内置 skill 文档的版本。

## 适用场景

- 检查当前 CLI 版本及是否有新版本可用
- 升级 CLI 到最新版本
- 更新内置 skill 文档（skill 文档随 CLI 一起打包，更新 CLI = 更新 skills）

## 不适用场景

- 业务数据查询（订单、组织、店铺等）→ 查主路由表
- 认证登录问题 → 见 [../global.md](../global.md)
- 探索未封装接口 → `mbs raw`

---

## 意图匹配

| 用户说 | 应调用 |
|--------|--------|
| "更新 CLI" / "有新版本吗" / "upgrade" / "check update" | 先 `mbs version` 检查，再 `mbs update` |
| "当前版本是多少" / "version" / "我的版本" | `mbs version` |
| "强制 npm 更新" / "用 npm 装" | `mbs update --source npm` |
| "用 release 包更新" / "用 GitHub release 更新" | `mbs update --source release` |
| "更新 skill 文档" / "刷新 skill" | `mbs update`（CLI 更新后 skill 文档自动同步） |

---

## 命令一览

| 命令 | 说明 | 参数 |
|------|------|------|
| `mbs version` | 查当前版本，检查 GitHub Release 最新版 | 无 |
| `mbs update` | 自动选择来源升级 CLI（含 skill 文档） | `--source auto\|npm\|release` |

### `--source` 决策逻辑

| 值 | 行为 |
|----|------|
| `auto`（默认） | 检测安装方式：npm 全局安装 → 走 npm；release bundle → 走 GitHub |
| `npm` | 强制 `npm install -g @mb-it-org/cli@latest` |
| `release` | 从 GitHub Release 下载对应平台 tarball，原子替换安装目录 |

---

## 输出格式

### `mbs version`

**已是最新：**
```json
{ "ok": true, "data": { "current": "0.1.42", "latest": "0.1.42", "updateAvailable": false } }
```

**有新版本：**
```json
{
  "ok": true,
  "data": {
    "current": "0.1.40",
    "latest": "0.1.42",
    "updateAvailable": true,
    "releaseUrl": "https://github.com/...",
    "hint": "新版本可用: v0.1.42，访问 releaseUrl 下载更新"
  }
}
```

**无法连接 GitHub（离线）：**
```json
{ "ok": true, "data": { "current": "0.1.42", "latest": null, "updateAvailable": null } }
```

### `mbs update`

**已是最新，无需更新：**
```json
{ "ok": true, "data": { "previousVersion": "0.1.42", "currentVersion": "0.1.42", "updated": false, "source": "npm" } }
```

**更新成功：**
```json
{ "ok": true, "data": { "previousVersion": "0.1.40", "currentVersion": "0.1.42", "updated": true, "source": "release" } }
```

**更新失败：**
```json
{ "ok": false, "error": { "type": "api", "message": "Failed to update CLI via npm", "hint": "Run the command with permission to modify the global npm installation" } }
```

---

## 验收规则（更新后必须执行）

更新完成后，按顺序执行以下命令确认成功：

```bash
# 1. 确认版本已变更，无新版本待更新
mbs version
# 预期：data.updateAvailable === false，data.current === data.latest

# 2. 确认主路由 skill 文档可读
mbs skills show
# 预期：输出包含路由表内容，不为空

# 3. 确认 update skill 文档可读（验证 skill 文档已同步）
mbs skills show --file references/update/SKILL.md
# 预期：输出本文档内容
```

---

## Agent Skill 刷新协议

更新 CLI 后，agent **必须**重新加载 skill 文档，不得使用会话内缓存版本。

**执行顺序：**

1. `mbs update` — 升级 CLI
2. 执行上方验收规则（3 条）
3. `mbs skills show` — 重读主路由，刷新模块列表
4. 重读当前任务所需的模块 SKILL.md（**优先级最高**）
   - 若当前任务涉及 `org`：`mbs skills show --file references/org/SKILL.md`
   - 若当前任务涉及 `shops`：`mbs skills show --file references/shops/SKILL.md`
   - 以此类推

> skill 文档随 CLI 一起打包发布，无需单独更新。

---

## 注意事项

- release 更新需要 `tar` 命令可用（Linux/macOS 默认有；Windows 需 Git Bash 或 WSL）
- npm 更新需要写入全局 npm 目录的权限；权限不足时提示以管理员身份运行
- 更新过程中若失败，CLI 会自动回滚到原版本（release 来源）
- 退出码：`0` 成功，`1` 更新失败（见 `error.hint`）
