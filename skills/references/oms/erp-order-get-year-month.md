# mbs oms erp-order-get-year-month

店铺业绩-年月下拉列表查询：获取店铺业绩可选的「年月」列表，用于仪表盘必发/必修改 SPU 页顶部时间筛选下拉框(#yearMonth、#n_month)的初始化。无入参，返回字符串数组(每项为一个年月值)，前端逐项渲染为 <option>，value 与文本同为该年月值，并在首部追加「选择时间」空项。

## 用法

```bash
mbs oms erp-order-get-year-month
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/shopAchievements/getYearMonth`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应外层，本接口前端未显式判断) | - |
| `desc` | string | 响应提示信息(统一响应外层) | - |
| `obj[]` | array | 年月值列表，前端遍历渲染为时间下拉选项 | - |
| `obj[]` | string | 单个年月值(数组元素，直接作为下拉 value 与文本，如年月字符串；具体格式(待人工确认)) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
