<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-product-extend-sku

SKU降本(成本扩展)记录查询：SKU详情页加载“降本(成本扩展)”模块时调用：按 URL 中的 SKU 查询该 SKU 的降本谈价记录列表（降本前价/目标价/谈妥价、供应商、捆绑数量、起批量、降本人、修改/清除信息、议价图片等），并据 isShow 控制“编辑成本”按钮显隐，回填目标价/供应商/现价/起订量到编辑表单，列表通过 art-template contentTemplate3 渲染。

## 用法

```bash
mbs pim erp-product-get-product-extend-sku --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getProductExtendSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | SKU 编码。来源：页面 URL query 参数 SKU，前端经 GetQueryString('SKU') 取得后拼接到 ?sku= |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(清除回调据此判断) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该 SKU 的降本(成本扩展)记录列表 | - |
| `obj[][0]` | string | 降本前采购单 SKU(模板列“降本前采购单”;前端在成功回调中被覆盖为当前 SKU) | - |
| `obj[][1]` | number | 该价格已持续天数(模板“此价格已持续{{duration}}天”) | - |
| `obj[][2]` | number | 降本前价格(历史最低价,模板列“降本前价格”) | - |
| `obj[][3]` | number | 降本目标采购价(回填 #targetPrice) | - |
| `obj[][4]` | number | 谈妥的采购价/现价(回填 #presentPrice 并赋全局 presentPrice) | - |
| `obj[][5]` | string | 供应商名称(回填编辑表单 #supplierName) | - |
| `obj[][6]` | string | 供应商(模板列“供应商”展示) | - |
| `obj[][7]` | number | 起批量/最小起订量(回填 #minimumOrder,模板列“起批量”) | - |
| `obj[][8]` | number | 捆绑数量(模板列“捆绑数量”) | - |
| `obj[][9]` | string | 降本人(模板列“降本人”) | - |
| `obj[][10]` | string | 修改人(模板列“修改人”) | - |
| `obj[][11]` | string | 修改时间(模板“修改人”列换行展示) | - |
| `obj[][12]` | string | 是否已清除。1=已清除(展示“已清除(清除人)+清除时间”);否则展示清除按钮 | - |
| `obj[][13]` | string | 清除人(isCancel==1 时展示) | - |
| `obj[][14]` | string | 清除时间(isCancel==1 时展示) | - |
| `obj[][15]` | number | 是否显示“清除降本”按钮。1=显示(需同时 isShow==1) | - |
| `obj[][16]` | number | 是否显示成本相关操作。0=隐藏“编辑成本”按钮(#editCost),其它=显示;并与 cleanButton 共同控制清除按钮 | - |
| `obj[][17]` | number | 降本记录ID。清除降本时作为 #clearCostExtend 的 value,提交给 cancelProductExtend?sequenceid= | - |
| `obj[][18]` | string | 与供应商议价图片地址(存在时展示图片图标,跳转 lookmoreImage2.html?images=) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
