<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-findshop-by-manger

按店铺负责人查询店铺(findshopByManger)：PB广告费报表页：根据已选「店铺负责人」联动查询其名下店铺列表，结果渲染到「请选择店铺」下拉(#shopName)。由 #shopManger 选择框 onchange 触发的 findshopByManger() 发起；GET 请求，shopmanager 作为查询字符串传入。

## 用法

```bash
mbs oms erp-order-findshop-by-manger [--shopmanager <string>]
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/wishProductBoost/findshopByManger`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopmanager` | shopmanager | query | string | 否 | - | 店铺负责人(姓名)。取值 $('#shopManger').val()；候选项由 findAllManager 接口填充(option value=value.shopmanager)；默认/未选时为空字符串(不限)。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准响应包裹字段，本页 success 回调未直接判断) | - |
| `desc` | string | 响应提示信息(标准响应包裹字段，本页未直接使用) | - |
| `obj[]` | array | 店铺列表(指定店铺负责人名下店铺集合)；前端以 if (data.obj) 判空后遍历渲染 #shopName 下拉 | - |
| `obj[]` | string | 店铺名称；渲染为 <option value="{{value.shopname}}">{{value.shopname}}</option>(模板 #contentTemplate2)，既作下拉显示文本又作选项值 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
