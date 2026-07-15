# mbs ars erpmonitor-find-editor-shop

查询可编辑ebay店铺列表：ebay商品描述替换(热销推荐)模块的店铺列表查询：按店铺下拉选择(shopId，可为空查全部)返回该用户可编辑的ebay店铺及其热销推荐开启状态、执行状态、PC/移动端行列配置、指定listing、描述模板、预览标识等，用于渲染店铺列表并回填店铺下拉框。

## 用法

```bash
mbs ars erpmonitor-find-editor-shop [--shopId <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/replaceEbaydesc/findEditorShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | query | string | 否 | - | 店铺ID（query 参数）。来源控件：店铺下拉框 #shopId；默认项值为空字符串，空值表示不限店铺/查询全部可编辑店铺。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功；601=未登录(跳转登录页)；其他=失败(弹 desc)。 | - |
| `desc` | string | 响应提示信息(失败/未登录时弹窗展示)。 | - |
| `obj[]` | array | 可编辑ebay店铺列表(遍历渲染表格与店铺下拉)。 | - |
| `obj[][0]` | string | 店铺ID(下拉选项 value；editShop 回填 #shopId2)。 | - |
| `obj[][1]` | string | 店铺名(表格店铺名列、下拉选项文本、editShop 回填 #shopName)。 | - |
| `obj[][2]` | number | 是否开启热销推荐。0=已开启；1=未开启(编辑弹窗中 0=开启/1=关闭)。 | - |
| `obj[][3]` | number | 执行(生成预览)状态。-1=未执行；0=开始生成预览；1=已生成预览；2=等待全店铺生成；3=全店铺生成完毕；4=开始全店铺生成。 | - |
| `obj[][4]` | number | PC端行数(表格 PC端行x列 pcRow x pcCol；editShop 回填 #pcRow)。 | - |
| `obj[][5]` | number | PC端列数(与 pcRow 组成 PC端行x列；editShop 回填 #pcCol)。 | - |
| `obj[][6]` | number | 移动端行数(表格 移动端行x列 phRow x phCol；editShop 回填 #phRow)。 | - |
| `obj[][7]` | number | 移动端列数(与 phRow 组成移动端行x列；editShop 回填 #phCol)。 | - |
| `obj[][8]` | string | 指定的listing(表格指定的listing列；多值逗号分隔；editShop 回填 #listingIds)。 | - |
| `obj[][9]` | string | 店铺描述模板内容(HTML)。存在时表格显示修改模板链接；editTemplate 回填模板编辑器。 | - |
| `obj[][10]` | string | 预览用 ebay item 标识(excuteStatus>=1 时拼接预览链接 https://www.ebay.com/itm/{previewDesc})。 | - |
| `obj[][11]` | string | 店铺配置记录ID(editShop 回填 #ebayId、editTemplate 回填 #ebayId2、Special 取用、applyAllToShop 传参)。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
