# mbs pim erp-product-find-smt-price-confirm-onekey

速卖通一键提价-调价结果分页查询：速卖通(SMT)一键提价模块「调价完毕」页签的分页列表查询：按页签(columnHead)、提交人、状态、店铺、提交时间区间、商品ID(itemid)/运费模板ID(freightid)等条件分页查询调价任务结果，返回SPU行及其下挂的SKU调价明细。

## 用法

```bash
mbs pim erp-product-find-smt-price-confirm-onekey --pageSize <number> --columnHead <string> [--submitBy <string>] [--status <string>] [--shopname <string>] [--starttime <string>] [--endtime <string>] [--itemid <string>] [--freightid <string>] [--currentPage <number>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtProductController/findSmtPriceConfirmOnekey`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（固定 100，来源 baseData.pageSize） |
| `columnHead` | columnHead | body | string | 是 | - | 列头/页签标识（取自 sessionStorage('tab')，本页固定「调价完毕」） |
| `submitBy` | submitBy | body | string | 否 | - | 提交人（来源输入框 #submitBy） |
| `status` | status | body | string | 否 | - | 调价状态（来源下拉 #status；行内 1=重置价格成功、2=重置价格失败） |
| `shopname` | shopname | body | string | 否 | - | 店铺名称（来源店铺下拉 #selshops） |
| `starttime` | starttime | body | string | 否 | - | 提交起始时间（来源 #starttime，自动拼接 ' 00:00:00'；有值才传） |
| `endtime` | endtime | body | string | 否 | - | 提交结束时间（来源 #endtime，自动拼接 ' 23:59:59'；有值才传） |
| `itemid` | itemid | body | string | 否 | - | 商品ID（速卖通 itemid，来源 #ids；当类型选择 #seleID=1 时传） |
| `freightid` | freightid | body | string | 否 | - | 运费模板ID（来源 #ids；当类型选择 #seleID=2 时传） |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码（仅分页回调 findTaskReport2 中传入，来源 api.getCurrent()；首查不传，后端默认第1页） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（本查询主要依赖 obj 是否存在） | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（分页结果容器；为空时列表计数置0） | - |
| `obj.total` | number | 满足条件的总记录数（写入 #total2） | - |
| `obj.totalPages` | number | 总页数（首页时用于初始化分页控件 pageCount） | - |
| `obj.rows[]` | array | 调价任务SPU行列表 | - |
| `obj.rows[][0]` | string | 调价任务记录ID（行选择 checkbox 的 value，子表 goLook 传 data-id） | - |
| `obj.rows[][1]` | string | 是否可勾选标记（=='0' 时渲染勾选框，否则不显示复选框） | - |
| `obj.rows[][2]` | string | SPU主图URL（加载失败回退默认图） | - |
| `obj.rows[][3]` | string | ERP SPU编号（链接 /product/SPUdetails.html?SPU= 详情） | - |
| `obj.rows[][4]` | string | SPU标题（链接速卖通商品页） | - |
| `obj.rows[][5]` | string | 速卖通商品ID（链接 aliexpress item 页） | - |
| `obj.rows[][6]` | string | 运费模板ID | - |
| `obj.rows[][7]` | string | 店铺名称 | - |
| `obj.rows[][8]` | string | 员工/负责人姓名 | - |
| `obj.rows[][9]` | number | 目标毛利率（原值为小数，前端 ×100 取整展示 %） | - |
| `obj.rows[][10]` | number | 促销折扣率(OFF)（原值为小数，前端 ×100 取整展示 %；有值才显示） | - |
| `obj.rows[][11]` | string | 调价状态枚举。1=重置价格成功；2=重置价格失败（前端转中文展示） | - |
| `obj.rows[][12]` | string | 成功说明/备注（status=1 时悬浮展示） | - |
| `obj.rows[][13]` | string | 失败响应详情（status=2 时截取前50字符展示，悬浮显示全文） | - |
| `obj.rows[][14]` | string | 提交人 | - |
| `obj.rows[][15]` | string | 提交时间 | - |
| `obj.rows[][16]` | string | 刊登时间（空则展示 ---） | - |
| `obj.rows[][17]` | string | 改价时间（空则展示 ---） | - |
| `obj.rows[][18][]` | array | SKU调价明细列表（子表；其长度作为角标显示SKU数量） | - |
| `obj.rows[][18][][0]` | string | SKU图片URL（加载失败回退默认图） | - |
| `obj.rows[][18][][1]` | string | ERP SKU编号 | - |
| `obj.rows[][18][][2]` | string | SKU颜色 | - |
| `obj.rows[][18][][3]` | string | SKU尺码 | - |
| `obj.rows[][18][][4]` | number | 在线库存 | - |
| `obj.rows[][18][][5]` | number | 原价格 | - |
| `obj.rows[][18][][6]` | number | 新价格 | - |
| `obj.rows[][18][][7]` | string | 币种代码 | - |
| `obj.rows[][18][][8]` | string | SKU ID（子表「查看」goLook 传 data-sku，调用 ship-to 查询） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
