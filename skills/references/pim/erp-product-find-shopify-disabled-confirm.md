<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-shopify-disabled-confirm

Shopify下架确认任务列表查询：Shopify批量下架页面：按创建时间区间、店铺、下架状态、SKU/SPU编号分页查询已生成的下架确认任务列表；返回任务总数、总页数及任务行(含商品信息、店铺、负责人、销量、下架状态、刊登/下架时间等)，供页面 art-template 渲染表格并支持批量下架/删除。

## 用法

```bash
mbs pim erp-product-find-shopify-disabled-confirm [--shopName <string>] [--beginTime <string>] [--endTime <string>] [--onlineNo <string>] [--spu <string>] [--status <string>] [--currentPage <number>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopifyProductController/findShopifyDisabledConfirm`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | body | string | 否 | - | 店铺名称(多店铺时逗号拼接;未选则传空串)。来源:店铺多选下拉 #shopName(ySelect) |
| `beginTime` | beginTime | body | string | 否 | - | 创建时间-起始(任务生成时间起)。来源:日期框 #beginTime |
| `endTime` | endTime | body | string | 否 | - | 创建时间-结束(任务生成时间止)。来源:日期框 #endTimes |
| `onlineNo` | onlineNo | body | string | 否 | - | SKU编号(在线编号模糊搜索)。来源:输入框 #onlineNo,提交前去首尾空格 |
| `spu` | spu | body | string | 否 | - | SPU编号(SPU搜索)。来源:输入框 #onSpu,提交前去首尾空格 |
| `status` | status | body | string | 否 | - | 下架状态。来源:下拉 #soldStatus。枚举:空=全部;0=等待下架;1=下架中;2=下架成功;3=下架失败 |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码(仅分页回调 findTaskReport 提交,取 api.getCurrent();首次 search() 不传)。每页固定200条 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本页查询回调未校验,关联操作回调据此判断) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.total` | number | 满足条件的任务总数(前端填入 #total 显示"共N条") | - |
| `obj.totalPages` | number | 总页数(传入分页组件 findTaskReport(totalPages)) | - |
| `obj.rows[]` | array | 下架确认任务列表 | - |
| `obj.rows[][0]` | string | 任务记录ID(checkbox value,作为批量下架 confirmId / 删除 confirmId) | - |
| `obj.rows[][1]` | string | 商品(产品)ID(checkbox data-proid;相邻行同 proId 时前端置灰分组,作为下架 proId) | - |
| `obj.rows[][2]` | string | 商品主图URL(加载失败回退默认图) | - |
| `obj.rows[][3]` | string | SKU编号(有值时渲染 SKUdetails 详情链接) | - |
| `obj.rows[][4]` | string | 商品外部链接URL(标题/商品ID跳转地址) | - |
| `obj.rows[][5]` | string | 商品标题 | - |
| `obj.rows[][6]` | string | 店铺名称 | - |
| `obj.rows[][7]` | string | 店铺负责人 | - |
| `obj.rows[][8]` | string | SPU编号(有值时渲染 SPUdetails 详情链接,否则显示"----") | - |
| `obj.rows[][9]` | number | 近30天销量 | - |
| `obj.rows[][10]` | string | 创建人 | - |
| `obj.rows[][11]` | string | 创建时间 | - |
| `obj.rows[][12]` | string | 下架状态枚举。0=等待下架;1=下架中;2=下架成功;3=下架失败;4=删除(仅 status=="0" 时显示勾选框) | - |
| `obj.rows[][13]` | string | 下架失败原因(status==3 时悬浮展示"下架失败(apiResult)") | - |
| `obj.rows[][14]` | string | 刊登时间(为 null 时显示"— — — —") | - |
| `obj.rows[][15]` | string | 下架时间(为 null 时显示"— — — —") | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
