<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-registration-list

侵权登记列表查询：侵权/违规登记记录的多维度分页查询：支持按问题类型、平台、提交时间区间、SPU提交售卖时间区间、SPU、开发员/开发大酋长、店长/销售大酋长、店铺、禁售政策、扣分区间、触发产品等条件筛选并排序，返回侵权登记列表及总条数。

## 用法

```bash
mbs pim erp-product-get-registration-list [--koufenshuMin <number>] [--koufenshuMax <number>] [--startTime <string>] [--endTime <string>] [--shopNameList <array>] [--spu <string>] [--developersList <array>] [--developerChiefList <array>] [--shopmanagerList <array>] [--shopmanagerChiefList <array>] --platForm <string> --pageSize <number> --page <number> [--status <string>] [--prohibitionPolicy <string>] [--triggerProduct <string>] [--beginSubmitTime <string>] [--endSubmitTime <string>] [--ordername <string>] [--orderField <string>] [--sortOrder <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/infringement/getRegistrationList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `koufenshuMin` | koufenshuMin | body | number | 否 | - | 最小扣分数(空串转null;平台=10/120显示) |
| `koufenshuMax` | koufenshuMax | body | number | 否 | - | 最大扣分数(空串转null;平台=10/120显示) |
| `startTime` | startTime | body | string | 否 | - | 提交开始时间(YYYY-MM-DD) |
| `endTime` | endTime | body | string | 否 | - | 提交结束时间(YYYY-MM-DD) |
| `shopNameList` | shopNameList | body | array | 否 | - | 店铺名称列表(元素=SHOPNAME) |
| `spu` | spu | body | string | 否 | - | SPU(多个用逗号分开) |
| `developersList` | developersList | body | array | 否 | - | 开发员列表(元素=员工姓名) |
| `developerChiefList` | developerChiefList | body | array | 否 | - | 开发大酋长列表(元素=员工ID) |
| `shopmanagerList` | shopmanagerList | body | array | 否 | - | 店长列表(元素=员工姓名) |
| `shopmanagerChiefList` | shopmanagerChiefList | body | array | 否 | - | 销售大酋长列表(元素=员工ID) |
| `platForm` | platForm | body | string | 是 | - | 平台名称(传platFormname;由PLATFORMID映射PLATFORMNAME) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定100) |
| `page` | page | body | number | 是 | - | 当前页码 |
| `status` | status | body | string | 否 | - | 问题类型:疑似侵权待确认/确定侵权/平台限售/属性错误&类目错放 |
| `prohibitionPolicy` | prohibitionPolicy | body | string | 否 | - | 禁售政策 |
| `triggerProduct` | triggerProduct | body | string | 否 | - | 触发产品(平台=10显示) |
| `beginSubmitTime` | beginSubmitTime | body | string | 否 | - | SPU提交售卖开始时间(YYYY-MM-DD) |
| `endSubmitTime` | endSubmitTime | body | string | 否 | - | SPU提交售卖结束时间(YYYY-MM-DD) |
| `ordername` | ordername | body | string | 否 | - | 排序名称:时间降序/时间升序/SPU降序/SPU升序(展开自sort) |
| `orderField` | orderField | body | string | 否 | - | 排序字段:t.CREATTIME/t.spu(展开自sort) |
| `sortOrder` | sortOrder | body | string | 否 | - | 排序方向:DESC/ASC(展开自sort) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `content` | string | 满足条件的总条数(前端Number(content)作total) | - |
| `desc` | string | 响应提示信息 | - |
| `success` | boolean | 是否成功 | - |
| `obj[]` | array | 侵权登记列表 | - |
| `obj[][0]` | string | 提交时间(前端取前10位显示日期) | - |
| `obj[][1]` | string | 记录人/提交人 | - |
| `obj[][2]` | string | 商品图片URL | - |
| `obj[][3]` | string | SPU编号(展示文本) | - |
| `obj[][4]` | string | SPU详情跳转参数(拼/product/SPUdetails.html?SPU=) | - |
| `obj[][5]` | string | 问题类型(标签展示) | - |
| `obj[][6]` | string | SMT白名单标记(真值时显示SMT白名单标签) | - |
| `obj[][7]` | string | 提交售卖时间 | - |
| `obj[][8]` | string | 店铺(店铺名/类型) | - |
| `obj[][9]` | string | 店长 | - |
| `obj[][10]` | string | 销售大酋长 | - |
| `obj[][11]` | string | 产品审核员 | - |
| `obj[][12]` | string | 审核时间 | - |
| `obj[][13]` | string | 开发员 | - |
| `obj[][14]` | string | 创建人(与开发员同列括号内展示) | - |
| `obj[][15]` | string | 开发大酋长 | - |
| `obj[][16]` | string | 开发处理结果 | - |
| `obj[][17]` | string | 违规内容详细记录/侵权原因/具体原因/移除原因(随平台而异) | - |
| `obj[][18]` | string | 是否限价(平台=10) | - |
| `obj[][19]` | string | 知识产权编号(平台=10) | - |
| `obj[][20]` | string | 侵权品牌(平台=10) | - |
| `obj[][21]` | string | 侵权公司名(平台=10) | - |
| `obj[][22]` | string | 违规后果/后果/处罚情况(随平台而异) | - |
| `obj[][23]` | string | 扣分分数(平台=10/120) | - |
| `obj[][24]` | string | 禁售政策 | - |
| `obj[][25]` | string | 是否违规 | - |
| `obj[][26]` | string | 不违规原因 | - |
| `obj[][27]` | string | 触发产品 | - |
| `obj[][28]` | string | itemid(平台=120)/被移除产品英文标题(平台=1) | - |
| `obj[][29]` | string | 站点(平台=1/2) | - |
| `obj[][30]` | string | 违规内容-邮件主题(英文,平台=1) | - |
| `obj[][31]` | string | 违规内容-具体信息(英文,平台=1;悬浮再异步取全文) | - |
| `obj[][32]` | string | 拦截方式(平台=1/2) | - |
| `obj[][33]` | string | 接收方式(平台=2) | - |
| `obj[][34]` | string | 跟卖/自建(平台=2) | - |
| `obj[][35]` | string | ASIN(平台=2) | - |
| `obj[][36]` | string | 应对措施(平台=2) | - |
| `obj[][37]` | string | 产品本身是否侵权(平台=2) | - |
| `obj[][38]` | string | 品牌/设计权人联系方式(平台=2) | - |
| `obj[][39]` | string | 罚款金额(平台=16) | - |
| `obj[][40]` | string | 日期&申诉进度(平台=16) | - |
| `obj[][41]` | string | 侵权类型(平台=16) | - |
| `obj[][42]` | string | 记录SID(悬浮调用getTortSellEnglish({sid})取英文具体信息全文) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
