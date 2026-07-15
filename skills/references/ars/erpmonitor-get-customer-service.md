# mbs ars erpmonitor-get-customer-service

客服组员(组员下拉)查询：客服绩效(组员维度)页面中，根据已选「店长」(leaderList 多选)联动查询其名下的客服组员列表，返回结果渲染到「组员」下拉框(customberTemplate)。请求体为裸JSON数组(店长ID数组)。

## 用法

```bash
mbs ars erpmonitor-get-customer-service --root <array<string>>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/smtShopKpi/getCustomerService`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `root` | (root) | body | array<string> | 是 | - | 请求体根节点：店长(leader)ID 数组。来源控件 #leaderList 多选($("#leaderList").val())；未选中时提交空数组 [] |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准封装字段，本回调未显式判断，(待人工确认)) | - |
| `desc` | string | 响应提示信息(标准封装字段，(待人工确认)) | - |
| `obj[]` | array | 客服组员列表(成功回调 if (data.obj) 使用) | - |
| `obj[]` | string | 组员(客服)姓名。渲染到「组员」下拉：<option value="{{value.name}}">{{value.name}}</option>(option 的 value 与显示文本均取 name) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
