<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-publish-params-limit

刊登参数限制查询(getPublishParamsLimit)：根据平台ID(platformId)查询该平台下各站点的刊登参数下限限制（最小毛利率、最小平台费率、最小折扣率、亚马逊自建最小毛利率等）。前端在“设置店铺刊登参数”弹窗初始化时按平台加载，选择站点后取对应站点下限并在提交时校验。

## 用法

```bash
mbs ars erpmonitor-get-publish-params-limit --platformId <number>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/getPublishParamsLimit`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | body | number | 是 | - | 平台ID。前端实例化 PublishParamsLimit 时以构造参数传入并透传（shopeeAutPublished.js 中固定为 89=Shopee平台） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `(root)[]` | array | 站点刊登参数限制列表（响应根为数组） | - |
| `(root)[][0]` | number | 平台ID（与请求 platformId 对应） | - |
| `(root)[][1]` | string | 站点编码（前端以其大写作为 publishParamsLimitMap 的键，与所选站点匹配） | - |
| `(root)[][2]` | string | 站点中文名称（TS 接口定义） | - |
| `(root)[][3]` | string | 站点币种（TS 接口定义） | - |
| `(root)[][4]` | number | 最小毛利率（小数，前端×100取整展示为“最小毛利率x%”，并校验毛利率不得小于该值） | - |
| `(root)[][5]` | number | 最小平台费率（小数，前端×100展示“最小平台费率x%”，并校验平台费率不得小于该值） | - |
| `(root)[][6]` | number | 最小折扣率（小数，前端×100展示“最小折扣率x%”，并校验折扣不得小于该值） | - |
| `(root)[][7]` | number | 亚马逊自建店最小毛利率（小数，前端×100展示“最小自建毛利率x%”；本平台是否返回该字段待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
