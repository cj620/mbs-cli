# mbs scm erp-manufacture-get-manufacture-purchase

历史采购单查询：在供应商详情页「历史采购单」Tab中，按供应商ID分页查询该供应商的历史采购单记录，返回采购批次、采购时间、SKU、采购件数、采购金额、发货/到货时间、采购员、是否结算等列表数据及总条数、总页数。

## 用法

```bash
mbs scm erp-manufacture-get-manufacture-purchase --manufactureId <string> --pageSize <number> --page <number>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/manufactureExtendController/getManufacturePurchase`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `manufactureId` | manufactureId | query | string | 是 | - | 供应商ID(取自页面URL参数sequenceid,即被查询供应商的sequenceid) |
| `pageSize` | pageSize | query | number | 是 | - | 每页条数(前端固定50,单位:条) |
| `page` | page | query | number | 是 | - | 当前页码(首次固定1,翻页取分页组件api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(分页结果容器) | - |
| `obj.count` | number | 满足条件的采购单总条数(前端写入#total1展示) | - |
| `obj.countPage` | number | 总页数(传入findTaskReport初始化分页组件pageCount) | - |
| `obj.result[]` | array | 历史采购单列表(用于#contentTemplate渲染表格行) | - |
| `obj.result[][0]` | string | 采购批次(采购单组ID) | - |
| `obj.result[][1]` | string | 采购时间(入库/导入时间) | - |
| `obj.result[][2]` | string | SKU(产品ID) | - |
| `obj.result[][3]` | number | 采购件数(订单数量,单位:件) | - |
| `obj.result[][4]` | number | 采购金额(单位:元) | - |
| `obj.result[][5]` | string | 发货时间 | - |
| `obj.result[][6]` | string | 到货时间(备货/到货时间) | - |
| `obj.result[][7]` | string | 采购员(创建人) | - |
| `obj.result[][8]` | string | 是否结算 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
