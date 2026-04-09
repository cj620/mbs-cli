# org employees

**命令：** `mbs org employees [flags]`  
**说明：** 获取员工/团队编号列表，支持完整层级过滤

## 参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `--company` | string | 否 | 公司 ID（`1`=胤元，`33`=启元） |
| `--platform` | string | 否 | 平台 ID |
| `--leaders` | string | 否 | 总监 ID，逗号分隔 |
| `--managers` | string | 否 | 经理 ID，逗号分隔 |
| `--littleLeaders` | string | 否 | 主管 ID，逗号分隔 |
| `--shopManagers` | string | 否 | 店长 ID，逗号分隔 |
| `--type` | string | 否 | 员工类型：`1`=运营，`2`=开发 |
| `--keyword` | string | 否 | 搜索关键词 |

## 用法

```bash
mbs org employees --company 1 --platform 101 --leaders L001 --managers M001 --littleLeaders LL001 --shopManagers SM001
```

## 输出示例

```json
{
  "ok": true,
  "data": [
    { "id": "E001", "name": "小张", "teamNo": "T001" },
    { "id": "E002", "name": "小李", "teamNo": "T002" }
  ]
}
```

## 典型用法

```bash
# 获取指定店长下的员工
mbs org employees --company 1 --shopManagers SM001

# 获取运营类员工
mbs org employees --company 1 --platform 101 --type 1

# 提取员工 ID 列表
mbs org employees --company 1 --shopManagers SM001 | jq '[.data[].id]'

# 提取团队编号列表
mbs org employees --company 1 --shopManagers SM001 | jq '[.data[].teamNo]'
```

## 前置步骤

通常需要通过完整层级链路逐步获取各级 ID：
```
platforms → leaders → managers → little-leaders → shop-managers → employees
```

## 上下文传递

`data[].id` → `employeeId`，供其他 skill 按员工/团队过滤使用
