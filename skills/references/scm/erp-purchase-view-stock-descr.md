<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-purchase-view-stock-descr

查看签收入库注意事项：采购审批页“入库注意事项”弹窗点开时，按采购批次序号ID(sequenceid)查询该批次已保存的签收入库注意事项(stockdescr)，回填到弹窗文本域中供查看/编辑。

## 用法

```bash
mbs scm erp-purchase-view-stock-descr --sequenceid <number>
```

## API

- Service: `erpPurchase`
- Method: `POST`
- Path: `/erpPurchase/erpPurchase/purchaseApproval/viewStockDescr`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sequenceid` | sequenceid | body | number | 是 | - | 采购批次序号ID(主键)。来源：列表行数据 id.sequenceid，经 attentionModal(id) 传入 viewStockDescr(id) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(非200时弹窗提示 desc) | - |
| `desc` | string | 响应提示信息(失败时展示于 #tishi) | - |
| `obj` | object | 业务数据对象(签收入库注意事项详情) | - |
| `obj.sequenceid` | number | 采购批次序号ID,回填隐藏域 #sequenceids(供后续保存 addStockDescr 使用) | - |
| `obj.stockdescr` | string | 签收入库注意事项内容,回填文本域 #attention(字数不超过100) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
