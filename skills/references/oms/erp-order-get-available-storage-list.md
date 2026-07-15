<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-available-storage-list

获取可用仓库列表：获取当前用户可用的仓库分组列表，用于商品(SPU)管理页“关联仓库”弹窗的仓库选项渲染。返回按仓库分组类型(直发仓/中转仓/海外仓)划分的分组，每个分组内含具体仓库列表(仓库ID、仓库名称、仓库类型)。

## 用法

```bash
mbs oms erp-order-get-available-storage-list
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/orderNew/getAvailableStorageList`
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
| `success` | boolean | 请求是否成功，true=成功(前端据此处理 obj) | - |
| `obj[]` | array | 仓库分组列表(按仓库分组类型划分) | - |
| `obj[][0]` | number | 仓库分组类型。1=直发仓(直邮仓)；2=中转仓；其它值=海外仓 | - |
| `obj[][1][]` | array | 该分组下的具体仓库列表 | - |
| `obj[][1][][0]` | number | 仓库ID(前端用作复选框 :key) | - |
| `obj[][1][][1]` | string | 仓库名称(前端复选框 label 与显示文本) | - |
| `obj[][1][][2]` | number | 仓库类型。6=虚拟库存仓(海外仓分组内单独成组“请选择虚拟库存仓库”)；其它=普通仓库(海外仓分组内“请选择海外仓库”) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
