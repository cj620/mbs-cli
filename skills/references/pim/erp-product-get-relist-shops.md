<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-relist-shops

获取可重新刊登(Relist)店铺列表：Shopee 刊登页“编辑/搜索店铺”弹窗中，按店铺名称关键词分页查询可用于重新刊登的店铺列表，返回店铺名称及其开启/关闭状态，并支持分页与状态切换。

## 用法

```bash
mbs pim erp-product-get-relist-shops [--shopName <string>] --currentPage <number> --pageSize <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductPublish/getRelistShops`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | body | string | 否 | - | 店铺名称搜索关键词，多店铺逗号分隔；取自弹窗输入框 .searchShops 的值并 $.trim 去空格 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码；初始/搜索固定为 1，分页回调取 api.getCurrent() |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数；前端固定传 10 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（本接口主要依赖 obj 渲染，code 由统一返回体携带） | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（分页结果） | - |
| `obj.total` | number | 满足条件的店铺总记录数（前端写入 #totale 展示） | - |
| `obj.totalPages` | number | 总页数（前端传入分页组件 findShopPage） | - |
| `obj.rows[]` | array | 店铺列表 | - |
| `obj.rows[][0]` | number | 序号（模板 {{v.number}} 展示） | - |
| `obj.rows[][1]` | string | 店铺名称（模板展示，并作为复选框 value、状态切换入参） | - |
| `obj.rows[][2]` | number | 店铺状态枚举。0=关闭；1=开启（模板据此渲染文案与开关状态） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
