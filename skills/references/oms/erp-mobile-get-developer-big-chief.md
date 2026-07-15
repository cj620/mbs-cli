# mbs oms erp-mobile-get-developer-big-chief

获取开发大酋长(含小酋长)名单：移动端开发数据搜索页加载时调用，返回当前可筛选的“大酋长”与“小酋长”开发负责人姓名列表，用于渲染“大酋长”分组的复选框筛选项。无任何请求参数。

## 用法

```bash
mbs oms erp-mobile-get-developer-big-chief
```

## API

- Service: `erpMobile`
- Method: `GET`
- Path: `/erpMobile/erpMobile/saleTrendChart/getDeveloperBigChief`
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
| `code` | number | 响应状态码,200=成功(标准响应码,前端未直接判断) | - |
| `desc` | string | 响应提示信息(标准字段) | - |
| `obj` | object | 业务数据对象,前端以 if(data.obj) 判断是否有数据 | - |
| `obj.bigChief[]` | array | 大酋长名单,元素为开发负责人姓名(string);模板 {{each obj.bigChief}} 渲染为复选框 | - |
| `obj.littleChief[]` | array | 小酋长名单,元素为开发负责人姓名(string);模板 {{each obj.littleChief}} 渲染为复选框 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
