<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-sku-package-info

SKU包装信息列表查询：查询SKU包装测量任务列表：按状态(全部/未完成/已完成)、SKU、提交人、开发组长、开发员、完成时间区间分页筛选，返回SKU原始/现/包装尺寸重量、开发员、仓库、提交/完成信息、图片及任务状态。

## 用法

```bash
mbs pim erp-product-get-sku-package-info [--status <number>] [--skus <string>] [--developers <array>] [--currentPage <number>] [--pageSize <number>] [--createOpers <array>] [--completeStartTime <string>] [--completeEndTime <string>] [--managers <array>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/skuPackage/getSkuPackageInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | number | 否 | - | 任务状态。0=全部;1=未完成;2=已完成(默认2) |
| `skus` | skus | body | string | 否 | - | SKU(支持多个,英文逗号分割) |
| `developers` | developers | body | array | 否 | - | 开发员(姓名数组,多选);选了开发组长但未选开发员时自动填入该组长下全部开发员姓名 |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码(默认1) |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数(可选50/100/150/200,默认50) |
| `createOpers` | createOpers | body | array | 否 | - | 提交人(姓名数组,多选) |
| `completeStartTime` | completeStartTime | body | string | 否 | - | 完成时间-起始(YYYY-MM-DD),取自完成时间区间第一项 |
| `completeEndTime` | completeEndTime | body | string | 否 | - | 完成时间-结束(YYYY-MM-DD),取自完成时间区间第二项 |
| `managers` | managers | body | array | 否 | - | 开发组长(组长ID数组,多选) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `content` | number | 满足条件的总记录数(前端转数字作分页 total) | - |
| `desc` | string | 响应提示信息 | - |
| `success` | boolean | 业务成功标识(平台标准响应字段) | - |
| `obj[]` | array | SKU包装任务列表 | - |
| `obj[][0]` | string | SKU编号(渲染为详情链接 /product/SKUdetails.html?SKU=) | - |
| `obj[][1]` | string | SKU图片URL(列表缩略图) | - |
| `obj[][2]` | string | SKU名称/标题 | - |
| `obj[][3]` | number | 原尺寸-长(cm,前端拼为 长*宽*高cm) | - |
| `obj[][4]` | number | 原尺寸-宽(cm) | - |
| `obj[][5]` | number | 原尺寸-高(cm) | - |
| `obj[][6]` | number | 原重量(g,前端拼接 'g' 展示) | - |
| `obj[][7]` | number | 现尺寸-长(cm) | - |
| `obj[][8]` | number | 现尺寸-宽(cm) | - |
| `obj[][9]` | number | 现尺寸-高(cm) | - |
| `obj[][10]` | number | 现重量(g) | - |
| `obj[][11]` | number | 单个包装尺寸-长(cm) | - |
| `obj[][12]` | number | 单个包装尺寸-宽(cm) | - |
| `obj[][13]` | number | 单个包装尺寸-高(cm) | - |
| `obj[][14]` | number | 单个包装重量(g) | - |
| `obj[][15]` | string | 开发员(姓名) | - |
| `obj[][16]` | string | 开发组长(姓名) | - |
| `obj[][17]` | string | 仓库名称 | - |
| `obj[][18]` | string | 提交时间 | - |
| `obj[][19]` | string | 提交人 | - |
| `obj[][20]` | string | 完成时间 | - |
| `obj[][21]` | string | 完成人 | - |
| `obj[][22][]` | array | 图片URL列表(el-badge 显示张数,el-image 预览;pictureList[0] 为首图) | - |
| `obj[][23]` | string | 状态文本(el-tag 展示)。已完成=success;未完成=danger;其它=info | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
