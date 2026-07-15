# mbs pim erp-product-batch-list-fba

FBA批次上架库存明细查询(查看全部)：FBA库存报表页点击某SKU“查看全部”时，按 SKU+店铺 分页查询该SKU各批次的上架库存明细（批次描述、FBA对应批次上架库存数、接收日期），并在弹窗表格中展示，支持分页。

## 用法

```bash
mbs pim erp-product-batch-list-fba --sku <string> --shopName <string> --page <number> --pageSize <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/fbaProduct/batchListFba`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | body | string | 是 | - | 商品SKU编码（由列表行“查看全部”按钮回传，定位要查询批次明细的SKU） |
| `shopName` | shopName | body | string | 是 | - | 店铺名称（由列表行回传，限定该SKU所属店铺） |
| `page` | page | body | number | 是 | - | 当前页码（首次取全局 pageFlag(主列表当前页,默认1)，分页回调取 api.getCurrent()） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（前端固定为 20） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功；非200时前端 alert(desc) | - |
| `desc` | string | 响应提示信息（失败时弹窗提示） | - |
| `obj` | object | 业务数据对象（分页结果） | - |
| `obj.count` | number | 满足条件的批次明细总条数（写入 #batchTotal，展示“共N条”） | - |
| `obj.countPage` | number | 总页数（传入 batchPage() 初始化分页控件） | - |
| `obj.result[]` | array | 批次上架库存明细列表 | - |
| `obj.result[][0]` | string | 批次（批次描述，表头“批次”） | - |
| `obj.result[][1]` | number | FBA对应批次上架库存数（表头“FBA对应批次上架库存数”） | - |
| `obj.result[][2]` | string | 接收日期（表头“接收日期”） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
