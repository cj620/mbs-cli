<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-sku-mapping-by-sku-and-warehouse

按SKU与海外仓查询海外仓映射关系：SKU详情页「配置海外仓映射关系」弹窗中，用户选择某个海外仓类型后调用本接口，根据当前 SKU + 海外仓类型查询该映射记录（直邮SKU/海外仓SKU/分销平台SKU/中转仓），用于回填编辑表单。返回的整条记录同时作为后续 updateSkuMapping 的原始值(orginInfo)。

## 用法

```bash
mbs pim erp-product-get-sku-mapping-by-sku-and-warehouse --sku <string> --warehouse <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getSkuMappingBySkuAndWarehouse`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | body | string | 是 | - | SKU编号。来源 URL 查询参数 SKU(GetQueryString("SKU"))，即当前 SKU 详情页的 SKU |
| `warehouse` | warehouse | body | string | 是 | - | 海外仓类型。来源「海外仓类型」下拉框 el-select(v-model=warehouseSelect) 的 @change 选中值；选项来自 getSkuWarehouse 返回的 warehouseList |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 海外仓映射记录对象 | - |
| `obj.sku` | string | 海外仓SKU。回填表单「海外仓SKU」(waresettingData.sku)；当 obj.sku == 当前SKU 时 flagValue='sku'，且该输入框禁用 | - |
| `obj.mainSku` | string | 直邮SKU(主SKU)。回填表单「直邮SKU」(waresettingData.mainSku)；当 obj.mainSku == 当前SKU 时 flagValue='mainSku'，且该输入框禁用 | - |
| `obj.distributeSku` | string | 分销平台SKU。回填表单「分销平台SKU」(waresettingData.distributeSku) | - |
| `obj.transitWarehouse` | string | 中转仓。回填表单「中转仓」(waresettingData.transitWarehouse)，选项来自 getTransitWarehouse 的 overhouseList | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
