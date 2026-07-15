<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-city

货源城市下拉选项查询：进入SPU管理筛选器时初始化加载「货源城市」下拉框选项，返回全部货源城市(含类型+城市名)列表，供前端 city 多选筛选控件渲染。无任何请求参数。

## 用法

```bash
mbs pim erp-product-get-city
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getCity`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 货源城市选项列表 | - |
| `obj[][0]` | string | 货源城市类型(与 CITYNAME 拼成选项 value：${TYPE}|${CITYNAME}，并作为 :key) | - |
| `obj[][1]` | string | 货源城市名称(下拉选项显示文本 label) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
