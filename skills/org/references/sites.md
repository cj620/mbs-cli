# org sites

**命令：** `mbs org sites [flags]`  
**说明：** 获取指定平台下的站点列表

## 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `--platform` | string | 否 | 平台 ID，多个逗号分隔 |

## 用法

```bash
mbs org sites --platform <platformId>
mbs org sites --platform 101,102
```

## 输出示例

```json
{
  "ok": true,
  "data": [
    { "id": "S001", "name": "站点A" },
    { "id": "S002", "name": "站点B" }
  ]
}
```

## 典型用法

```bash
# 查询单个平台的站点
mbs org sites --platform 101

# 查询多个平台的站点
mbs org sites --platform 101,102

# 提取站点 ID 列表
mbs org sites --platform 101 | jq '[.data[].id]'
```

## 前置步骤

`platformId` 来自 `mbs org platforms | jq '.data[].id'`
