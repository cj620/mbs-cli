<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-borrow-express

可借用运单号查询：按排除平台、发货时间区间、交运时间区间、货运渠道、邮寄类型、目的国家等条件，分页查询可借用的运单号列表，返回运单号、国内运单号、发货时间、收件地址及渠道类型。

## 用法

```bash
mbs oms erp-order-get-borrow-express [--starttime <string>] [--endtime <string>] --platform <string> --contury <string> --channel <string> [--expType <string>] [--startcreatetime <string>] [--endcreatetime <string>] --pageNum <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/borrowingNo/getBorrowExpress`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `starttime` | starttime | body | string | 否 | - | 发货时间-起始(YYYY-MM-DD)，来源 #starttime；开始时间不能大于结束时间 |
| `endtime` | endtime | body | string | 否 | - | 发货时间-结束(YYYY-MM-DD)，来源 #endtime |
| `platform` | platform | body | string | 是 | - | 排除平台，值为「平台ID&子平台ID」格式，来源 #platform。枚举:1&1=Ebay;2&2=Amazon;10&3=Aliexpress;15&24=ZoodMall;16&4=Wish;85&19=Joom;88&16=Shoppo;89&17=Shopee;91&25=Fyndiq;95&34=vova;97&32=Walmart;5&=Taobao;12&=Dhgate;13&=SeeBee;14&=Mail.ru;15&=ZoodMall;18&=Lazada;19&=Cdiscount;23&=Tophatter;26&=1688;28&=Tmall;92&=Jumia;93&=factorymarket;96&=jollychic;98&=oberlo |
| `contury` | contury | body | string | 是 | - | 目的国家(中文)，来源 #contury，必填 |
| `channel` | channel | body | string | 是 | - | 货运渠道，来源 #channel，必填。枚举:Yanwen;Yun Express;China Post;Sunyou;Equick;USPS;Canada post;WanbExpress;CNE;4PX;UBI;SF Express;TOPYOU |
| `expType` | expType | body | string | 否 | - | 邮寄类型，来源 #expType。枚举:挂号;平邮 |
| `startcreatetime` | startcreatetime | body | string | 否 | - | 交运时间-起始(YYYY-MM-DD)，来源 #expressIdCreateTime |
| `endcreatetime` | endcreatetime | body | string | 否 | - | 交运时间-结束(YYYY-MM-DD)，来源 #expressIdCreateTimeEnd |
| `pageNum` | pageNum | body | number | 是 | - | 当前页码，初始1，上一页-1/下一页+1，搜索重置为1 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 可借用运单号列表(模板遍历对象，存在时才渲染表格) | - |
| `obj[][0]` | string | 运单号(国际运单号)，用作17track链接、复选框value及标记使用主键 | - |
| `obj[][1]` | string | 国内运单号 | - |
| `obj[][2]` | string | 发货时间 | - |
| `obj[][3]` | string | 国家(国家代码) | - |
| `obj[][4]` | object | 收件地址对象 | - |
| `obj[][4].province` | string | 州/省 | - |
| `obj[][4].city` | string | 城市 | - |
| `obj[][4].district` | string | 区 | - |
| `obj[][4].street1` | string | 街道地址1 | - |
| `obj[][4].street2` | string | 街道地址2(与street1拼接展示) | - |
| `obj[][4].receiver` | string | 收货人 | - |
| `obj[][4].telephone` | string | 电话 | - |
| `obj[][4].email` | string | 邮箱 | - |
| `obj[][5]` | string | 渠道类型1(展示渠道，优先取此值) | - |
| `obj[][6]` | string | 渠道类型2(expressType1为空时取此值) | - |
| `desc` | string | 提示信息；为「你名下平台当前可能未排除，请认真核实」时显示到 #desc2 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
