# mbs oms erp-mobile-get-platform-info-infringing

侵权平台信息查询：移动端马帮ERP“提交侵权”页面加载时调用，获取可选的侵权平台列表，用于渲染“侵权平台”复选框（前4个直接展示，第5个及以后归入“更多平台”折叠区）。本接口不需要任何请求参数。

## 用法

```bash
mbs oms erp-mobile-get-platform-info-infringing
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/infringing/getPlatformInfo`
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
| `code` | number | 响应状态码,200=成功（本接口 success 回调未显式判断，参照同页其他接口约定）(待人工确认) | - |
| `desc` | string | 响应提示信息（本接口 success 回调未使用，参照同页其他接口约定）(待人工确认) | - |
| `obj[]` | array | 侵权平台列表（前端 data.obj，按 slice(0,4) / slice(4) 分组渲染） | - |
| `obj[][0]` | string | 平台ID（复选框 value，提交侵权时拼成 platformIds 逗号串） | - |
| `obj[][1]` | string | 平台名称（复选框 label 展示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
