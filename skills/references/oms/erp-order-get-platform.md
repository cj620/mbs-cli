<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-platform

获取平台(回填默认排除平台)：借用运单号(Vova)页面加载时，根据浏览器 localStorage 中缓存的 platformId 调用本接口，取回当前用户对应的平台标识，用于回填页面顶部“排除平台”下拉框的默认选中值。

## 用法

```bash
mbs oms erp-order-get-platform --platformId <string>
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/ERPOrder/getPlatform`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | query | string | 是 | - | 平台ID。来源：浏览器 localStorage.platformId（取出后两次 replace('"','') 去除双引号）；以 Query String 形式拼接在 URL。无控件，由页面初始化逻辑自动取值 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `platformId` | string | 平台ID（回填到“排除平台”下拉框 #platform 的选中值，option 取值形如 1&1/2&2/95&34 等“平台ID&子平台ID”格式） | - |
| `code` | number | 响应状态码,200=成功（本调用未使用，待人工确认） | - |
| `desc` | string | 响应提示信息（本调用未使用，待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
