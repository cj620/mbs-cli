# mbs scm erp-manufacture-find-issue-info

纠纷详情查询：根据纠纷ID与买家登录ID查询单条纠纷(issue)的完整详情：纠纷原因/状态/倒计时、买家方案与卖家(我的)方案、卖方上传证据、关联订单信息与产品信息，供纠纷详情页渲染并支持后续“拒绝并新增方案”“上传证据”等操作。

## 用法

```bash
mbs scm erp-manufacture-find-issue-info --issueid <string> --buyerloginid <string>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/issueInfo/findIssueInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `issueid` | issueid | body | string | 是 | - | 纠纷ID(待查询纠纷的唯一标识,来源URL查询参数issueid) |
| `buyerloginid` | buyerloginid | body | string | 是 | - | 买家登录ID(发起纠纷的买家账号标识,来源URL查询参数buyerloginid) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(成功回调以data.obj判断是否有数据) | - |
| `obj.result[]` | array | 纠纷详情列表(前端取result[0]渲染) | - |
| `obj.result[][0]` | string | 订单编号(详情/订单信息区均展示,跳转/eshop/order.do?method=edit&orderid=) | - |
| `obj.result[][1]` | string | 买家纠纷提起原因 | - |
| `obj.result[][2]` | string | 纠纷状态枚举。processing=纠纷处理中;canceled_issue=纠纷取消;finish=纠纷完结,退款处理完成 | - |
| `obj.result[][3]` | number | 拒绝纠纷标记/分支控制。1=显示refusedTime倒计时提醒;2=不显示提醒;其他=显示surplusTime倒计时提醒 | - |
| `obj.result[][4]` | string | 拒绝后剩余处理时间(refuseddispute==1且有值时展示倒计时) | - |
| `obj.result[][5]` | string | 剩余处理时间(refuseddispute非1非2且有值时展示倒计时) | - |
| `obj.result[][6]` | string | 买家方案备注 | - |
| `obj.result[][7]` | string | 买家方案ID(写入“拒绝并新增方案”按钮data-ids,作为findRefusedIssue的buyerSolutionIdList) | - |
| `obj.result[][8]` | string | 我的(卖家)方案类型枚举。refund=仅退款/拒绝退款;其他值(如return_and_refund)=退货退款;为空=尚未提供方案 | - |
| `obj.result[][9]` | string | 我的(卖家)方案备注 | - |
| `obj.result[][10]` | string | 卖方证据图片路径(多张以英文逗号分隔,前端split(',')逐张展示) | - |
| `obj.result[][11]` | string | 货币(订单金额与产品金额前缀,如USD/US$等) | - |
| `obj.result[][12]` | string | 订单金额(订单信息区展示,含邮费/退款邮费口径) | - |
| `obj.result[][13]` | string | 订单创建时间 | - |
| `obj.result[][14]` | string | 收货地址 | - |
| `obj.result[][15]` | string | 产品图片URL(产品信息区主图,加载失败回退默认图) | - |
| `obj.result[][16]` | string | 产品ID/SKU(链接至/product/SKUdetails.html) | - |
| `obj.result[][17]` | string | 原始SKU(拼接AliExpress商品链接https://www.aliexpress.com/item/{originsku}.html) | - |
| `obj.result[][18]` | string | 产品英文名称(AliExpress链接显示文本) | - |
| `obj.result[][19]` | string | 金额货币符号(产品单价前缀) | - |
| `obj.result[][20]` | string | 产品退款/单价金额 | - |
| `obj.result[][21]` | number | 订单数量(产品购买数量,展示为 单价 X 数量) | - |
| `obj.result[][22]` | string | 产品属性 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
