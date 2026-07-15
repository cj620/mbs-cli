<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-throw-info

泡货(抛货)信息查询：SPU/SKU 列表中某行的泡货图标(炸弹图标)鼠标悬停时触发，按 SKU 向后端查询该 SKU 的泡货/抛货(超体积/抛重)提示信息，后端直接返回一段 HTML 片段，前端用 .html() 写入提示气泡 .findeinfos 展示。

## 用法

```bash
mbs pim erp-product-find-throw-info --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/findThrowInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | body | string | 是 | - | SKU 编码(查询主键)。取自被悬停列表行对象 objs.sid，拼接到 URL ?sku= 之后；SKU详情页则取浏览器地址栏 GetQueryString("SKU")。来源控件：列表行炸弹图标 onmouseover="findThrowInfo({{value}})" |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功；非 200 时前端不渲染(else 空处理) | - |
| `content` | string | 泡货/抛货提示信息的 HTML 片段(后端直出)，前端直接 .html() 写入 .findeinfos 气泡展示。具体内部字段由后端模板拼装，前端不再解析(待人工确认后端拼装的明细字段) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
