<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-shop-param-by-shopname-smt-product-controller

根据店铺名查询店铺自动刊登参数(回显)：SMT自动刊登设置弹窗回显：根据店铺名(shopname)查询该店铺已保存的自动刊登配置(类目、批量折扣、毛利率/促销折扣率上下限、刊登间隔/时段、库存、JIT、水印、自动开关、安全承诺等)，用于弹窗各表单控件回显。

## 用法

```bash
mbs pim erp-product-find-shop-param-by-shopname-smt-product-controller --shopname <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtProductController/findShopParamByShopname`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopname` | shopname | query | string | 是 | - | 店铺名称。来源：触发元素 data-shop($(obj).data('shop'))，以 URL Query 参数拼接 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 店铺自动刊登配置对象；为空表示该店铺未保存配置 | - |
| `obj.categorynameJson` | string | 类目级联选中值的JSON字符串,前端JSON.parse后赋给Vue treeValue(类目级联选择器回显) | - |
| `obj.isBulk` | number | 是否启用批量(整单)折扣(0=否,1=是) | - |
| `obj.bulkOrder` | number | 批量起订量/整单数 | - |
| `obj.bulkDiscount` | number | 批量折扣值 | - |
| `obj.profitRateMin` | number | 标准最低毛利率(小数,前端×100取整显示%) | - |
| `obj.profitRateMin2` | number | 组内最低毛利率(小数,×100%) | - |
| `obj.profitRate` | number | 标准目标毛利率(小数,×100%) | - |
| `obj.profitRate2` | number | 组内目标毛利率(小数,×100%) | - |
| `obj.offRate` | number | 标准促销折扣率(小数,×100%) | - |
| `obj.offRate2` | number | 组内促销折扣率(小数,×100%) | - |
| `obj.publishInterval` | number | 刊登间隔 | - |
| `obj.publishHour` | string | 刊登时段,格式HH:MM,前端按:拆分为时/分 | - |
| `obj.inventory` | number | 库存数(同时回显inventory与inventory2) | - |
| `obj.isAuto` | number | 是否自动刊登开关(0/1) | - |
| `obj.status` | number | 自动刊登状态(→#autoStatus) | - |
| `obj.shopname` | string | 店铺名称(用于#textinfo拼接显示) | - |
| `obj.createBy` | string | 创建人(用于#textinfo拼接显示) | - |
| `obj.createTime` | string | 创建时间(用于#textinfo拼接显示) | - |
| `obj.isCountry` | string | 是否分国家(站点),并作为getPublishTemplateList入参 | - |
| `obj.groupName` | string | 刊登模板分组名(→#templateType) | - |
| `obj.sellerSelfDeclarationUrl` | string | 卖家自我声明文件URL | - |
| `obj.isJitb` | number | 是否JITB(0/1),isJitb===1勾选并显示JIT毛利率行 | - |
| `obj.jitProfit` | number | JIT毛利率(小数,前端×100显示%) | - |
| `obj.productSafetyCommitment` | string | 产品安全承诺(内容/URL) | - |
| `obj.onedayCount` | number | 单日刊登数量 | - |
| `obj.logoUrl` | string | 水印Logo图片URL(→#WaterMarkUrl,用于水印样例图) | - |
| `obj.logoPosition` | string | 水印位置(→#WaterMarkPosition,用于水印样例图) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
