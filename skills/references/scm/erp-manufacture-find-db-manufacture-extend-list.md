# mbs scm erp-manufacture-find-db-manufacture-extend-list

供应商拓展信息列表查询：供应商管理列表多维度分页查询：支持供应商名称、风险评估、黑名单、供应商类型、退换货情况、地址、评级、状态、是否定制、是否拜访、采购员、供货金额区间、采购时间区间等筛选，并按多种供货金额/数量/笔数/创建时间排序，返回供应商列表及联系人、商品、供货金额、采购笔数、评级等汇总字段。

## 用法

```bash
mbs scm erp-manufacture-find-db-manufacture-extend-list [--purchaseStr <string>] --currentPage <number> [--sequenceid <string>] [--evaluationstatus <string>] [--name <string>] [--sorttype <string>] [--takeoper1 <string>] [--returns <string>] [--manufacturecreateby <string>] [--mantype <array>] [--manufacLevel <string>] [--statusIs <string>] [--iscustomprocessing <string>] [--isVisit <string>] [--startTime <string>] [--endTime <string>] --pageSize <number> [--amountMin <number>] [--amountMax <number>]
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/manufactureExtendController/findDbManufactureExtendList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `purchaseStr` | purchaseStr | body | string | 否 | - | 采购员，来源多选控件 #buyer，多选时以逗号拼接，未选则传空字符串 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码，search()中固定为1；翻页时取api.getCurrent() |
| `sequenceid` | sequenceid | body | string | 否 | - | 供货商编号，来源#sequenceid(输入框已注释，实际传空字符串) |
| `evaluationstatus` | evaluationstatus | body | string | 否 | - | 是否通过风险评估。空=全部;1=是;0=否;2=在评估中 |
| `name` | name | body | string | 否 | - | 供应商名称，来源输入框#name |
| `sorttype` | sorttype | body | string | 否 | - | 排序方式(传中文枚举值)。按近六个月供货金额倒序/正序、按商品数量倒序/正序、按近六个月采购累计笔数倒序/正序、按创建时间倒序/正序、按近1个月供货金额正序/倒序、按供货金额倒序/正序 |
| `takeoper1` | takeoper1 | body | string | 否 | - | 是否黑名单供应商。空=全部;1=是;0=否 |
| `returns` | returns | body | string | 否 | - | 退换货情况，来源#returnChangeGoods(选项由findReturnList接口动态填充，value=code) |
| `manufacturecreateby` | manufacturecreateby | body | string | 否 | - | 地址搜索，来源输入框#manufacturecreateby(翻页callback不传) |
| `mantype` | mantype | body | array | 否 | - | 供应商类型(多选)，默认['1']。2=普通供应商;3=线下账期;6=1688账期;4=表格供应商;7=淘宝;8=拼多多;9=抖音;10=闲鱼;11=17网;12=绒趣网;13=微信;14=京东(默认值1含义待人工确认) |
| `manufacLevel` | manufacLevel | body | string | 否 | - | 供应商评级。A=A级;B=B级;C=C级;D=D级;E=E级 |
| `statusIs` | statusIs | body | string | 否 | - | 状态。0=待审核;1=已审核;2=已弃用 |
| `iscustomprocessing` | iscustomprocessing | body | string | 否 | - | 是否定制。0=否;1=是;2=测试中 |
| `isVisit` | isVisit | body | string | 否 | - | 是否拜访。0=未拜访;1=已拜访 |
| `startTime` | startTime | body | string | 否 | - | 采购时间-起始(日期)，默认当前日期前30天 |
| `endTime` | endTime | body | string | 否 | - | 采购时间-结束(日期)，默认当天 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数。50/100/200/1000 |
| `amountMin` | amountMin | body | number | 否 | - | 供货金额-小值，来源#amountMin |
| `amountMax` | amountMax | body | number | 否 | - | 供货金额-大值，来源#amountMax |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `takeoper1` | string | 黑名单标记回显，模板takeoper1==1时展示黑名单(待人工确认：疑为请求条件回显) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的供应商总条数 | - |
| `obj.totalPages` | number | 总页数(传入分页组件pageCount) | - |
| `obj.rows[]` | array | 供应商列表 | - |
| `obj.rows[][0]` | string | 供应商编号(主键标识)，用于详情跳转与行勾选value | - |
| `obj.rows[][1]` | string | 供应商名称 | - |
| `obj.rows[][2]` | string | 供应商类型标记，!=1时展示推送供应商按钮(具体含义待人工确认) | - |
| `obj.rows[][3]` | string | 主打商品图片URL(加载失败回退默认图) | - |
| `obj.rows[][4]` | string | 主打商品SKU编号(链接至SKU详情) | - |
| `obj.rows[][5]` | string | 主打商品名称(模板中写作 value. productname) | - |
| `obj.rows[][6]` | string | 联系人 | - |
| `obj.rows[][7]` | string | 联系电话 | - |
| `obj.rows[][8]` | string | 供应商类型(标签展示) | - |
| `obj.rows[][9]` | number | 商品数量 | - |
| `obj.rows[][10]` | string | 旺旺账号(用于生成阿里旺旺联系链接) | - |
| `obj.rows[][11]` | string | QQ号(用于生成QQ联系链接) | - |
| `obj.rows[][12]` | string | 开发能力 | - |
| `obj.rows[][13]` | string | 配合度 | - |
| `obj.rows[][14]` | string | 风格&品类 | - |
| `obj.rows[][15]` | number | 近1个月供货金额 | - |
| `obj.rows[][16]` | number | 近3个月供货金额 | - |
| `obj.rows[][17]` | number | 近6个月供货金额 | - |
| `obj.rows[][18]` | number | 供货金额 | - |
| `obj.rows[][19]` | number | 近六个月采购累计笔数 | - |
| `obj.rows[][20]` | number | 近六个月采购平均单价 | - |
| `obj.rows[][21]` | string | 是否风险评估。1=是;0=否;2=评估中;其他/空=未评估(不展示) | - |
| `obj.rows[][22]` | string | 供应商评级(有值时展示{值}级)，如A/B/C/D/E | - |
| `obj.rows[][23]` | string | 是否定做 | - |
| `obj.rows[][24]` | string | 开发员(创建人) | - |
| `obj.rows[][25]` | string | 采购员 | - |
| `obj.rows[][26]` | string | 创建时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
