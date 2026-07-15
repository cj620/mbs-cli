# mbs pim erp-product-export-registration-list

侵权登记列表导出：侵权(showslog/tort)登记列表按平台、问题类型、店铺/店长/销售大酋长、开发员/开发大酋长、SPU、提交时间区间、SPU提交售卖时间区间、扣分数区间、禁售政策、触发产品等多维条件，导出侵权登记记录 Excel 文件。以 XMLHttpRequest(responseType=blob) 发起，返回二进制文件流，文件名由 content-disposition 响应头携带。

## 用法

```bash
mbs pim erp-product-export-registration-list [--koufenshuMin <number>] [--koufenshuMax <number>] [--startTime <string>] [--endTime <string>] [--shopNameList <array>] [--spu <string>] [--developersList <array>] [--developerChiefList <array>] [--shopmanagerList <array>] [--shopmanagerChiefList <array>] [--platForm <string>] --pageSize <number> --page <number> [--status <string>] [--prohibitionPolicy <string>] [--triggerProduct <string>] [--beginSubmitTime <string>] [--endSubmitTime <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/infringement/exportRegistrationList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `koufenshuMin` | koufenshuMin | body | number | 否 | - | 最小扣分数(空串转null)。来源输入框koufenshuMin，仅平台=10/120显示 |
| `koufenshuMax` | koufenshuMax | body | number | 否 | - | 最大扣分数(空串转null)。来源输入框koufenshuMax，仅平台=10/120显示 |
| `startTime` | startTime | body | string | 否 | - | 提交开始时间(YYYY-MM-DD)。来源日期选择器startTime |
| `endTime` | endTime | body | string | 否 | - | 提交结束时间(YYYY-MM-DD)。来源日期选择器endTime |
| `shopNameList` | shopNameList | body | array | 否 | - | 店铺名称列表。来源多选下拉shopName(allow-create/remote，值为店铺名SHOPNAME) |
| `spu` | spu | body | string | 否 | - | SPU编号(多个用逗号分开)。来源输入框spu |
| `developersList` | developersList | body | array | 否 | - | 开发员列表(spu开发员)。来源多选下拉developer，值为开发员姓名employee_name |
| `developerChiefList` | developerChiefList | body | array | 否 | - | 开发大酋长列表。来源多选下拉developerChief，值为大酋长id |
| `shopmanagerList` | shopmanagerList | body | array | 否 | - | 店长(店铺管理员)列表。来源多选下拉shopmanager，值为店长姓名employee_name |
| `shopmanagerChiefList` | shopmanagerChiefList | body | array | 否 | - | 销售大酋长(店铺管理员大酋长)列表。来源多选下拉shopmanagerChief，值为大酋长id |
| `platForm` | platForm | body | string | 否 | - | 平台名称(传平台名称platFormname，非ID)。来源下拉platForm经platFormlist映射出PLATFORMNAME |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数。前端固定传100 |
| `page` | page | body | number | 是 | - | 当前页码。来源basedata.page(初始1) |
| `status` | status | body | string | 否 | - | 问题类型。枚举：空=全部/疑似侵权待确认/确定侵权/平台限售/属性错误&类目错放。来源下拉status |
| `prohibitionPolicy` | prohibitionPolicy | body | string | 否 | - | 禁售政策。来源下拉prohibitionPolicy(选项nosalelist由noSalePlatform按平台名加载) |
| `triggerProduct` | triggerProduct | body | string | 否 | - | 触发产品。来源输入框triggerProduct，仅平台=10显示 |
| `beginSubmitTime` | beginSubmitTime | body | string | 否 | - | SPU提交售卖开始时间(YYYY-MM-DD)。来源日期选择器beginSubmitTime |
| `endSubmitTime` | endSubmitTime | body | string | 否 | - | SPU提交售卖结束时间(YYYY-MM-DD)。来源日期选择器endSubmitTime |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `responseBody` | unknown | 侵权登记列表Excel文件二进制流(blob)，前端以responseType=blob接收并触发下载 | - |
| `content-disposition` | string | 响应头，携带下载文件名；前端split('=')[1]后decodeURI得到fileName | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
