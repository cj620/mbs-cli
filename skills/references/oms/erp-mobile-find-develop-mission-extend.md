# mbs oms erp-mobile-find-develop-mission-extend

开发任务(货源)分页列表查询：移动端马帮ERP「未找到货源/已找到货源」页面的开发任务分页列表查询：按是否已找到货源标志 isGoodSupply 分页拉取开发任务，返回任务列表(商品标题、售价、放弃状态/原因等)、总页数及当前用户头像，前端用 art-template(#nosupplyTemplate) 渲染并支持加载更多分页。

## 用法

```bash
mbs oms erp-mobile-find-develop-mission-extend --isGoodSupply <string> --currentPage <number>
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/shoeController/findDevelopMissionExtend`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `isGoodSupply` | isGoodSupply | body | string | 是 | - | 是否已找到货源标志。本页(未找到货源)固定传'2'=未找到货源；同接口被已找到货源页supplyGoods.html以其它取值复用(其它取值含义待人工确认)。来源：代码固定值 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码，从1开始；首次查询为1，点击加载更多时currentPage++递增。来源：前端分页变量currentPage |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一信封字段,同控制器addMission回调核实;本接口未直接判断) | - |
| `desc` | string | 响应提示信息(统一信封字段) | - |
| `content` | string | 当前用户头像URL，前端写入#photos的src；为空时回退默认头像 | - |
| `obj` | object | 业务数据对象(分页结果),前端据其判断是否有数据 | - |
| `obj.rows[]` | array | 开发任务列表(累加到本地list后渲染) | - |
| `obj.rows[][0]` | string | 任务/商品记录ID(录入货源链接priceEntry.html?id=参数) | - |
| `obj.rows[][1]` | string | 开发任务ID(录入货源链接missionid=参数) | - |
| `obj.rows[][2]` | string | 商品主图URL,加载失败回退默认图 | - |
| `obj.rows[][3]` | string | 商品外部链接(标题超链接href,新窗口打开) | - |
| `obj.rows[][4]` | string | 商品标题(原文/英文标题,作为超链接文本) | - |
| `obj.rows[][5]` | string | 商品中文标题/名称 | - |
| `obj.rows[][6]` | number | 售价金额(有值时展示售价行) | - |
| `obj.rows[][7]` | string | 售价币种(与salePriceUsd一起展示) | - |
| `obj.rows[][8]` | number | 任务状态。2=已放弃/开发放弃(此时不显示录入货源按钮);其它值=进行中(其它取值含义待人工确认) | - |
| `obj.rows[][9]` | string | 开发放弃原因。status==2且本字段有值时角标显示开发放弃并展示原因块;为null时角标显示已放弃 | - |
| `obj.rows[][10]` | string | 开发放弃原因备注(与operReason同行展示) | - |
| `obj.rows[][11]` | string | 未找到货源原因(无operReason时展示该原因块) | - |
| `obj.totalPages` | number | 总页数,前端与currentPage比较以控制加载更多/到底显示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
