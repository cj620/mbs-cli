<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erp-publish-list-relisting-details

SMT Relisting失败信息详情列表查询：查询速卖通(SMT/aliexpress)商品重新刊登(relisting)的明细列表，按是否成功、刊登时间、店铺名进行分页过滤，返回失败/成功的源SPU、源itemID、状态、销量、失败原因等明细，用于relisting失败信息详情页面表格渲染。

## 用法

```bash
mbs prm erp-publish-list-relisting-details --isSuccess <string> [--relistingTimeStart <string>] [--shopName <string>] --pageSize <number> --currentPage <number>
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/smtProductPublish/listRelistingDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `isSuccess` | isSuccess | body | string | 是 | - | 是否成功筛选，前端固定传 fail。枚举：fail=失败 / success=成功(本页固定fail) |
| `relistingTimeStart` | relistingTimeStart | body | string | 否 | - | 重新刊登时间(起始)，取自 sessionStorage.SmtListingTime |
| `shopName` | shopName | body | string | 否 | - | 店铺名称，取自 sessionStorage.smtShopName |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定传 100 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码，首次加载固定 1，翻页时取分页控件 api.getCurrent() |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功；非200时前端将总数置0 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的总条数(前端展示共N条) | - |
| `obj.pages` | number | 总页数(传入分页控件 pageCount) | - |
| `obj.list[]` | array | 失败明细列表 | - |
| `obj.list[][0]` | number | 平台ID枚举。10=aliexpress(速卖通)(前端 ==10 时展示 aliexpress) | - |
| `obj.list[][1]` | string | 店铺名称 | - |
| `obj.list[][2]` | string | 店铺负责人(员工名) | - |
| `obj.list[][3]` | string | 胤元SPU源商品主图URL | - |
| `obj.list[][4]` | string | 胤元ERP SPU编号(链接跳转 SPUdetails.html?SPU=) | - |
| `obj.list[][5]` | string | 胤元SPU源标题 | - |
| `obj.list[][6]` | string | 源itemID对应的平台链接URL | - |
| `obj.list[][7]` | string | 源itemID(平台商品ID) | - |
| `obj.list[][8]` | number | 刊登状态枚举。-3/-5/5/6=上架失败；3=下架失败；4=成功；7=上架异常 | - |
| `obj.list[][9]` | number | 销量 | - |
| `obj.list[][10]` | string | 失败原因 | - |
| `obj.list[][11]` | string | 失败错误详情(与 reason 同格展示，换行追加) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
