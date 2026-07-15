<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-storage-list

发货仓库列表查询：获取全部发货仓库列表，用于订单列表页"发货仓库"筛选下拉框的渲染；前端拿到数组后将"上海仓库""东莞仓库"置顶排序，并在部分场景按仓库类型(storagetype)过滤。

## 用法

```bash
mbs oms erp-order-get-storage-list
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/orderNew/getStorageList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `(root)[]` | array | 仓库列表（响应根节点即数组，元素为仓库对象） | - |
| `(root)[][0]` | string | 仓库名称。前端用作下拉 option 的 value 与显示文本，并按名称置顶排序：'上海仓库'、'东莞仓库'（东莞次置顶、上海最置顶），其余按原顺序。枚举示例：上海仓库 / 东莞仓库 / …（其余仓库名以接口返回为准） | - |
| `(root)[][1]` | number | 仓库类型。前端在 updatewarehouse() 中当 localStorage.departmentId != '66' 时按 storagetype == 1 过滤（仅保留类型为 1 的仓库）。枚举：1=参与过滤保留的仓库类型；其余取值含义(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
