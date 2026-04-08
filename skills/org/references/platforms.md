# org platforms

**命令：** `mbs org platforms`  
**说明：** 获取所有平台列表，无需任何参数

## 参数

无

## 用法

```bash
mbs org platforms
```

## 输出示例

```json
{
  "ok": true,
  "data": [
    { "id": "101", "name": "平台A" },
    { "id": "102", "name": "平台B" }
  ]
}
```

## 典型用法

```bash
# 获取所有平台
mbs org platforms

# 提取 ID 列表
mbs org platforms | jq '[.data[].id]'

# 提取 ID + 名称映射
mbs org platforms | jq '[.data[] | {id, name}]'
```

## 上下文传递

`data[].id` → `platformId`，用于：
- `mbs org sites --platform <platformId>`
- `mbs org leaders --platform <platformId>`
- `mbs org shops --platform <platformId>`
