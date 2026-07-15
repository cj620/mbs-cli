<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-find-develop-mission-extend-by-id

货源报价详情查询(按ID)：移动端「货源报价录入」页进入时，根据货源记录ID与开发任务ID查询该货源的报价资料详情（联系人/手机/旺旺/质量/供货类型/供应商地址/报价规格/店铺链接/备注/商品图片），用于回显表单及图片列表。

## 用法

```bash
mbs oms erp-mobile-find-develop-mission-extend-by-id --id <string> --missionid <string>
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/shoeController/findDevelopMissionExtendById`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | string | 是 | - | 货源/报价记录ID（来源：URL参数 id，GetQueryString('id')） |
| `missionid` | missionid | body | string | 是 | - | 开发任务ID（来源：URL参数 missionid，GetQueryString('missionid')；请求字段名为 missionid） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `content` | string | 联系人/供应商头像图片URL（赋给 #photos，为空时用默认头像 /2018ui/assets/images/user2.png） | - |
| `obj` | object | 货源报价详情业务数据对象 | - |
| `obj.contact` | string | 联系人（回显 #contact） | - |
| `obj.phone` | string | 联系手机号（回显 #phone） | - |
| `obj.wangwang` | string | 旺旺号（回显 #wangwang） | - |
| `obj.quality` | string | 质量。枚举：高 / 中 / 低（回显并选中 #quality） | - |
| `obj.supplyType` | string | 供货类型。枚举：清仓尾货 / 稳定现货 / 样品定制（回显并选中 #supplyType） | - |
| `obj.supplierAddress` | string | 供应商地址（回显 #supplierAddress） | - |
| `obj.shopLink` | string | 店铺链接（1688链接，回显 #shopLink） | - |
| `obj.remarks` | string | 备注（回显 #remarks） | - |
| `obj.priceSpecificationList[]` | array | 报价规格列表（每行：数量区间与单价） | - |
| `obj.priceSpecificationList[][0]` | number | 起始数量（件，区间下限，模板 item.minnum） | - |
| `obj.priceSpecificationList[][1]` | number | 截止数量（件，区间上限，模板 item.maxnum） | - |
| `obj.priceSpecificationList[][2]` | number | 单价（元/件，模板 item.unitprice） | - |
| `obj.productUrlList[]` | array | 商品图片URL列表（string[]，逐个渲染到图片区 .z_photo，并缓存至 bigimgBox） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
