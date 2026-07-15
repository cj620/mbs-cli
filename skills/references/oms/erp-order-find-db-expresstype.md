# mbs oms erp-order-find-db-expresstype

查询物流类型(渠道)下拉列表：查询数据库中全部物流类型(物流渠道)，用于「物流延迟」筛选区 #expressType 下拉框的数据源；前端在页面加载时调用 getExpressTypeList()，把返回的 obj 数组渲染为 <option>，option 的 value 取 expressTypeId、显示文本取 expressType，并初始化 select2。

## 用法

```bash
mbs oms erp-order-find-db-expresstype
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findDbExpresstype`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（前端以 data.code == 200 判断成功后渲染下拉框） | - |
| `obj[]` | array | 物流类型(渠道)列表，作为 #expressType 下拉框数据源 | - |
| `obj[][0]` | string | 物流类型ID，渲染为 <option> 的 value，提交给后端作为物流类型筛选值（如物流延迟查询的 expressTypeId） | - |
| `obj[][1]` | string | 物流类型(渠道)名称，渲染为 <option> 显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
