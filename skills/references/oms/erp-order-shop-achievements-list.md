<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-shop-achievements-list

店铺业绩列表查询：店铺业绩(店铺成绩)分页列表查询：按平台、月份、店铺、组员、大酋长、店铺站点、店铺类型、店铺等级、运营状态、店铺属性、店铺标签、店龄区间、客户经理、资质状态、跟卖状态等条件筛选，支持排序字段与升降序，返回店铺业绩列表及总数、总页数。

## 用法

```bash
mbs oms erp-order-shop-achievements-list [--platform <array>] [--dateMonth <array>] [--shop <array>] [--groupMember <array>] [--leader <array>] [--password <string>] [--shippingtype <string>] [--ranking <string>] [--operateStatus <string>] [--shopage <string>] [--shopgrade <string>] [--shopagestart <string>] [--shopageend <string>] [--shops <string>] [--customerServiceMgr <string>] [--qualificationStatus <string>] [--followupStatus <string>] [--orderDesc <string>] [--orderField <string>] --page <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/shopAchievements/shopAchievementsList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platform` | platform | body | array | 否 | - | 平台(来源 #platform 下拉，按逗号拆分为数组；无值传 []) |
| `dateMonth` | dateMonth | body | array | 否 | - | 月份(来源 #dateMonth 年月下拉，按逗号拆分为数组；无值传 []) |
| `shop` | shop | body | array | 否 | - | 店铺(来源 #shop 多选店铺；无选中传 []) |
| `groupMember` | groupMember | body | array | 否 | - | 组员(来源 #groupMember 多选；无选中传 []) |
| `leader` | leader | body | array | 否 | - | 大酋长(来源 #leader 多选；无选中传 []) |
| `password` | password | body | string | 否 | - | 店铺站点(来源 #password 下拉，字段名虽为password实为店铺站点；有值才传) |
| `shippingtype` | shippingtype | body | string | 否 | - | 店铺类型(来源 #shippingtype：直销/虚拟海外仓/马来虚拟海外仓；有值才传) |
| `ranking` | ranking | body | string | 否 | - | 店铺等级(来源 #ranking：A/B/C/D/E；有值才传) |
| `operateStatus` | operateStatus | body | string | 否 | - | 运营状态(来源 #operateStatus：1=运营中,2=暂停运营,3=永久关闭中；有值才传) |
| `shopage` | shopage | body | string | 否 | - | 店铺属性(来源 #shopage：1=全新店铺,2=成长期店铺,3=成熟店铺,4=老店铺；有值才传) |
| `shopgrade` | shopgrade | body | string | 否 | - | 店铺标签(来源 #shopgrade：1=黑马店铺,2=健康发展店铺,3=疲软店铺；有值才传) |
| `shopagestart` | shopagestart | body | string | 否 | - | 店龄-起始(来源 #shopagestart 输入框，单位:天；恒传) |
| `shopageend` | shopageend | body | string | 否 | - | 店龄-结束(来源 #shopageend 输入框，单位:天；恒传) |
| `shops` | shops | body | string | 否 | - | 多店铺(来源 #shops 输入框，多店铺空格隔开；有值才传) |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客户经理(来源 #custService 下拉；恒传) |
| `qualificationStatus` | qualificationStatus | body | string | 否 | - | 资质状态(来源 #qualificationStatus：1=正常,0=异常,2=注销；恒传) |
| `followupStatus` | followupStatus | body | string | 否 | - | 跟卖状态(来源 #followupStatus：1=全部自建,2=全部跟卖,3=部分跟卖；恒传) |
| `orderDesc` | orderDesc | body | string | 否 | - | 升序/降序(来源 #orderDesc：desc=降序,空=升序；恒传) |
| `orderField` | orderField | body | string | 否 | - | 排序字段(来源 #orderField：1店铺目标/2当月销售额/3订单量/4毛利额/5毛利率/21运营毛利率/6新品出单量/7新品销售额/8在线listing量/9 30天刊登量/10 30天退款率/11店铺站点/12店铺类型/13开店时间/14店龄/15跟卖销售额/16跟卖占比/17店铺等级/18客单价/19店铺属性/20店铺标签/22售出量/23售出占比；恒传) |
| `page` | page | body | number | 是 | - | 当前页码(初次固定为1，分页回调取 api.getCurrent()) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(固定50) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功,500=失败(标准返回封装) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的店铺总数(前端写入 #total) | - |
| `obj.countPage` | number | 总页数(前端传入分页组件 pageCount) | - |
| `obj.result[]` | array | 店铺业绩列表 | - |
| `obj.result[][0]` | string | 店铺名(行主键标识，趋势图/勾选/悬浮均用) | - |
| `obj.result[][1]` | string | 平台(ebay/Shopee/Lazada 等，悬浮考核弹层据此区分) | - |
| `obj.result[][2]` | string | 客户经理(有值时显示在店铺名下) | - |
| `obj.result[][3]` | string | 运营状态(文案:暂停运营/永久关闭中 等，红色按钮提示) | - |
| `obj.result[][4]` | string | 店铺站点(字段名password实为站点) | - |
| `obj.result[][5]` | string | 客服 | - |
| `obj.result[][6]` | string | 组长 | - |
| `obj.result[][7]` | string | 店铺类型(直销/虚拟海外仓等) | - |
| `obj.result[][8]` | number | 店铺属性枚举。1=全新店铺;2=成长期店铺;3=成熟店铺;4=老店铺 | - |
| `obj.result[][9]` | number | 店铺标签枚举。1=黑马店铺;2=健康发展店铺;3=疲软店铺 | - |
| `obj.result[][10]` | string | 店铺等级(A/B/C/D/E) | - |
| `obj.result[][11]` | string | 开店时间 | - |
| `obj.result[][12]` | number | 已开店天数(展示为 (X天)) | - |
| `obj.result[][13]` | string | 资质状态(中文文案,有值才显示) | - |
| `obj.result[][14]` | string | 店长 | - |
| `obj.result[][15]` | string | 跟卖状态(中文文案) | - |
| `obj.result[][16]` | string | 大酋/小酋(组长/大酋长) | - |
| `obj.result[][17]` | string | 店铺标签 | - |
| `obj.result[][18]` | string | 月份 | - |
| `obj.result[][19]` | number | 店铺目标(单位:万) | - |
| `obj.result[][20]` | number | 店铺目标二(单位:万) | - |
| `obj.result[][21]` | number | 店铺目标三(单位:万) | - |
| `obj.result[][22]` | number | 当月销售额 | - |
| `obj.result[][23]` | number | 跟卖销售额 | - |
| `obj.result[][24]` | number | 跟卖占比(展示加%) | - |
| `obj.result[][25]` | number | 订单量(当月) | - |
| `obj.result[][26]` | number | 当月客单价(展示加$) | - |
| `obj.result[][27]` | number | 当月毛利额 | - |
| `obj.result[][28]` | number | 当月毛利率(展示加%) | - |
| `obj.result[][29]` | number | 运营毛利率(小数,前端×100 toFixed(2) 展示%) | - |
| `obj.result[][30]` | number | 新品出单量 | - |
| `obj.result[][31]` | number | 新品销售额 | - |
| `obj.result[][32]` | number | 在线listing量 | - |
| `obj.result[][33]` | number | 跟卖量 | - |
| `obj.result[][34]` | number | 跟卖占比(小数,前端×100 toFixed(2) 展示%) | - |
| `obj.result[][35]` | number | 售出量(有售出的listing条数) | - |
| `obj.result[][36]` | number | 售出占比(小数,前端×100 toFixed(2) 展示%) | - |
| `obj.result[][37]` | number | 30天刊登量 | - |
| `obj.result[][38]` | number | 30天退款率(展示加%) | - |
| `obj.result[][39]` | number | 当前押款 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
