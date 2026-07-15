<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erp-publish-get-price-channel-by-site

按站点获取算价渠道：TikTok 批量提价/生成提价商品信息弹窗中，用户在站点多选框选择站点后(onchange 触发 getPriceChannels)，按站点(逗号拼接)查询该站点集合下可用的算价渠道列表，返回结果用于填充算价渠道下拉框 #priceChannels。

## 用法

```bash
mbs prm erp-publish-get-price-channel-by-site --site <string>
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/tiktokBatchPublishController/getPriceChannelBySite`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `site` | site | body | string | 是 | - | 站点(多选，逗号拼接)。来源：提价弹窗站点多选控件 .site-select，代码 $('.site-select').val().join(',')。站点编码如 TH/MY/MX/PH/SG/ID/BR/VN/TW 等。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 算价渠道列表(字符串数组)，前端经 myAxios 解包后即为 res | - |
| `obj[]` | string | 单个算价渠道名称/编码(数组元素，前端用作 select2 选项的 id 与 text) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
