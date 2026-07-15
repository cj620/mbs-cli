<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-export-default-paramtes

导出默认参数查询（按平台取默认平台费率/毛利率/退款率）：商品导出创建页在选择/初始化导出平台时调用，按 platformId 查询该平台对应的默认导出参数（平台费率、毛利率、退款率），并回填到「数据格式」区的平台费率、毛利率、退款率输入框。

## 用法

```bash
mbs ars erpmonitor-export-default-paramtes --platformId <string>
```

## API

- Service: `erpmonitor`
- Method: `GET`
- Path: `/erpmonitor/erpmonitor/managerHotProduct/exportDefaultParamtes`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | query | string | 是 | - | 平台ID（query 参数）。来源：localStorage.getItem('platformId') 或平台下拉框 #platformId 当前值。枚举：胤元;133=fruugo;85=joom;2=amazon;95=vova;26=shopee;26NEW=shopeeNEW;10=SMT;90=mail.ru;91=Fyndiq;86=ZoodMall;1=ebay;93=FactoryMarket;18=lazada;100=Queensta;103=Yandex;104=EZBuy;97=Walmart;98=Oberlo;102=Alabom;109=B2WDigital;114=real.de;108=mercadolibre;京东;121=Akulaku;122=fanno;123=Microsoft;119=ozon.ru;128=Temu;145=noon |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（标准包裹字段，前端未直接读取，(待人工确认)） | - |
| `desc` | string | 响应提示信息（标准包裹字段，前端未直接读取，(待人工确认)） | - |
| `obj` | object | 业务数据对象（该平台的默认导出参数；success 回调取 data.obj 判空后回填） | - |
| `obj.platformRate` | number | 平台费率（回填到 #platformRate「平台费率」输入框） | - |
| `obj.grossProfitRate` | number | 毛利率（回填到 #profitRate「毛利率」输入框） | - |
| `obj.refundRate` | number | 退款率（回填到 #refundRate「退款率」输入框） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
