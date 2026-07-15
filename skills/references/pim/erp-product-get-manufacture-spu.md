<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-manufacture-spu

商品(SPU)供应商信息查询：根据 SPU 查询该商品在 1688 上匹配的全部供应商信息，返回供应商旺旺、供货商品(SKU/图片/1688商品名)、商品属性、是否自动采购、捆绑数量、起批量、商品价格、含运费报价、供应商状态、匹配人/匹配时间等，用于 SPU 详情页「供应商信息」表格渲染。

## 用法

```bash
mbs pim erp-product-get-manufacture-spu --spu <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getManufactureSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 是 | - | 商品SPU编号(取自详情页URL参数 SPU，即 GetQueryString('SPU')，来源控件=页面URL) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包装,本接口模板未直接判断,标注待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应包装) | - |
| `obj[]` | array | 供应商信息列表(模板 {{each obj value i}} 遍历) | - |
| `obj[][0]` | string | 供应商旺旺UID(拼接阿里旺旺 getcid.aw 联系链接的 uid 参数) | - |
| `obj[][1]` | string | 是否无查看权限。'1'=无权限(旺旺名脱敏显示前2位+***、不展示平台链接);否则展示完整信息 | - |
| `obj[][2]` | string | 供应商旺旺名称(无权限时仅取前2位脱敏) | - |
| `obj[][3]` | string | 供应商1688店铺/商品平台链接 | - |
| `obj[][4]` | string | 1688/平台标识(展示于 .info1688 标签) | - |
| `obj[][5]` | string | 供货SKU编号(链接到 SKUdetails.html?SKU=) | - |
| `obj[][6]` | string | 供货商品图片路径(拼接 https://cbu01.alicdn.com/ 前缀,加载失败回退默认图) | - |
| `obj[][7]` | string | 1688供货商品名称 | - |
| `obj[][8]` | string | 供应商商品状态文字(展示于商品名后括号内) | - |
| `obj[][9]` | string | 商品属性(有值才显示) | - |
| `obj[][10]` | string | 是否自动采购标记。null=是(可匹配1688属性并自动下单);非null=否 | - |
| `obj[][11]` | number | 捆绑数量 | - |
| `obj[][12]` | number | 起批量 | - |
| `obj[][13]` | number | 商品价格(元) | - |
| `obj[][14]` | number | 报价(含运费,元) | - |
| `obj[][15]` | string | 供应商状态。null=禁用;非null=启用 | - |
| `obj[][16]` | string | 匹配人 | - |
| `obj[][17]` | string | 匹配时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
