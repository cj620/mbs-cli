<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-task-find-spu-publish-detail

SPU刊登报表明细查询：按 SPU编号/开发员/提交售卖时间/品牌或推荐人/出单量区间 分页查询 SPU 刊登报表明细，返回每个 SPU 在 eBay、wish、amazon、aliexpress、joom、mail.ru、zoodmall、shopee、其他 共9个平台的实际刊登量、放弃刊登量、出单量，以及平台标记完成量、放弃刊登量、出单量等汇总字段。

## 用法

```bash
mbs pms erp-task-find-spu-publish-detail --currentPage <number> [--spu <string>] [--oper <string>] [--submitTime <string>] [--ordernummin <string>] [--ordernummax <string>] [--brand <string>]
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/spuController/findSpuPublishDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首次查询固定为1；分页回调取分页控件 api.getCurrent() |
| `spu` | spu | body | string | 否 | - | SPU编号。来源控件 #spucode 输入框(可由URL参数 SPU 预填) |
| `oper` | oper | body | string | 否 | - | 开发员。来源控件 #deperpeople 下拉(值为开发员姓名) |
| `submitTime` | submitTime | body | string | 否 | - | 提交售卖时间。来源控件 #starttime 日期选择框(yyyy-MM-dd) |
| `ordernummin` | ordernummin | body | string | 否 | - | 出单量-最小值。来源控件 #ordernummin 数字输入框 |
| `ordernummax` | ordernummax | body | string | 否 | - | 出单量-最大值。来源控件 #ordernummax 数字输入框 |
| `brand` | brand | body | string | 否 | - | 品牌或推荐人。来源控件 #brand 输入框。仅首次查询 search() 传递,分页回调不传 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(框架统一,200=成功)(待人工确认) | - |
| `desc` | string | 响应提示信息(框架统一)(待人工确认) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的总条数(前端展示于 #total) | - |
| `obj.totalPages` | number | 总页数(传入分页组件 pageCount) | - |
| `obj.rows[]` | array | SPU刊登明细行列表 | - |
| `obj.rows[][0]` | string | 商品主图URL(加载失败回退默认图) | - |
| `obj.rows[][1]` | string | SPU编号(链接跳转 /projectAudit?spu=) | - |
| `obj.rows[][2]` | string | 侵权状态。正常=不显示标记;其他值以红色标签展示 | - |
| `obj.rows[][3]` | string | 禁售平台(字符串,原样展示) | - |
| `obj.rows[][4]` | string | 开发员 | - |
| `obj.rows[][5]` | string | 推荐人。非空且非 Admin 时以标签展示 | - |
| `obj.rows[][6]` | string | 推荐人(模板条件 v.referre != 'Admin' 中引用,疑为 referrer 笔误字段)(待人工确认) | - |
| `obj.rows[][7]` | string | 提交售卖时间 | - |
| `obj.rows[][8]` | string | 系统推送时间 | - |
| `obj.rows[][9]` | string | 大酋长/小酋长 | - |
| `obj.rows[][10]` | number | 平台标记完成量 | - |
| `obj.rows[][11]` | number | 平台放弃刊登量 | - |
| `obj.rows[][12]` | number | 平台出单量(>50 时前端红色高亮) | - |
| `obj.rows[][13]` | number | eBay-实际刊登量 | - |
| `obj.rows[][14]` | number | eBay-放弃刊登量 | - |
| `obj.rows[][15]` | number | eBay-出单量 | - |
| `obj.rows[][16]` | number | wish-实际刊登量 | - |
| `obj.rows[][17]` | number | wish-放弃刊登量 | - |
| `obj.rows[][18]` | number | wish-出单量 | - |
| `obj.rows[][19]` | number | amazon-实际刊登量 | - |
| `obj.rows[][20]` | number | amazon-放弃刊登量 | - |
| `obj.rows[][21]` | number | amazon-出单量 | - |
| `obj.rows[][22]` | number | aliexpress-实际刊登量 | - |
| `obj.rows[][23]` | number | aliexpress-放弃刊登量 | - |
| `obj.rows[][24]` | number | aliexpress-出单量 | - |
| `obj.rows[][25]` | number | joom-实际刊登量 | - |
| `obj.rows[][26]` | number | joom-放弃刊登量 | - |
| `obj.rows[][27]` | number | joom-出单量 | - |
| `obj.rows[][28]` | number | mail.ru-实际刊登量 | - |
| `obj.rows[][29]` | number | mail.ru-放弃刊登量 | - |
| `obj.rows[][30]` | number | mail.ru-出单量 | - |
| `obj.rows[][31]` | number | zoodmall-实际刊登量 | - |
| `obj.rows[][32]` | number | zoodmall-放弃刊登量 | - |
| `obj.rows[][33]` | number | zoodmall-出单量 | - |
| `obj.rows[][34]` | number | shopee-实际刊登量 | - |
| `obj.rows[][35]` | number | shopee-放弃刊登量 | - |
| `obj.rows[][36]` | number | shopee-出单量 | - |
| `obj.rows[][37]` | number | 其他平台-实际刊登量 | - |
| `obj.rows[][38]` | number | 其他平台-放弃刊登量 | - |
| `obj.rows[][39]` | number | 其他平台-出单量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
