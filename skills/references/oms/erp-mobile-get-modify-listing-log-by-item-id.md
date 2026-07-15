# mbs oms erp-mobile-get-modify-listing-log-by-item-id

刊登/上架修改操作日志查询：根据商品(父SPU)ID查询该商品的刊登/上架修改操作日志列表，返回操作人、操作时间、修改结果与描述，用于在线商品详情页"操作日志"模块展示（前端拆分为前10条与其余两段渲染）。

## 用法

```bash
mbs oms erp-mobile-get-modify-listing-log-by-item-id --parentSPUId <string>
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/hotProductListing/getModifyListingLogByItemId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `parentSPUId` | parentSPUId | body | string | 是 | - | 商品父SPU的ID。来源URL查询参数 itemId(GetQueryString("itemId"))，无值时固定传空串。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功,500=失败(统一响应包装，本回调未直接使用，待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应包装，待人工确认) | - |
| `obj[]` | array | 操作日志列表(前端 data.obj，按前10条/其余拆分两段渲染) | - |
| `obj[][0]` | string | 操作人/申请人名称(模板 v.requestName) | - |
| `obj[][1]` | string | 操作/申请时间(模板 v.requestDate) | - |
| `obj[][2]` | string | 修改结果文案。枚举观察值：执行失败!(标红展示)、提交修改(不展示该文案，仅展示descr)、其它结果原样展示(模板 v.modifyResult) | - |
| `obj[][3]` | string | 修改/操作描述详情(模板 v.descr) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
