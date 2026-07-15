<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-shop-id

根据店铺ID获取店长：在“事业部人员毛利方差图”页面，店铺下拉框选中某店铺后触发，按店铺ID（拼接到URL路径末尾）查询该店铺对应的店长，前端取返回 obj.SHOPMANAGER 回填店长筛选项并重新加载方差数据。

## 用法

```bash
mbs oms erp-order-shop-id
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/teamDropDown/getShopManagerByShopId/{shopId}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | path | string | 是 | - | 店铺ID，路径参数（拼接到 URL .../getShopManagerByShopId/ 之后）。来源：店铺下拉框 el-select-v2（form.shop），其选项 value 取自 getShop() 返回的 item.SHOPID。为空/null/'' 时不发起请求 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（项目标准信封；本回调未直接判断 code，仅判断 obj） | - |
| `desc` | string | 响应提示信息（项目标准信封） | - |
| `obj` | object | 业务数据对象（店长信息）。前端以 if (res.data.obj) 真值判断后取用 | - |
| `obj.SHOPMANAGER` | string | 店长（姓名）。前端 form.shopManager = [res.data.obj.SHOPMANAGER] 回填店长筛选项并触发 getData() 重新加载数据 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
