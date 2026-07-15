# mbs prm yypms-shop-name

亚马逊获取默认/可用物流模板：亚马逊调价页面切换店铺时，按店铺名称(shopName，作为 URL 路径参数)查询该店铺的可用物流(运费)模板，返回模板列表用于渲染「物流模板」下拉框(#shippingTemplate)。

## 用法

```bash
mbs prm yypms-shop-name
```

## API

- Service: `yypms`
- Method: `GET`
- Path: `/yypms/pms/amazon/new/getDefaultTemplate/{shopName}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | path | string | 是 | - | 店铺名称(URL 路径参数)。来源：物流模板联动，取当前选中店铺在 shopOptionList 中匹配出的 item.shopName，用于查询该店铺可用物流模板。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200/304=成功；109无权限/404无效路径/500服务异常/601未登录 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(拦截器默认 cb 返回此对象) | - |
| `obj.allTemplate[]` | array | 该店铺可用物流(运费)模板列表，用于渲染 #shippingTemplate 下拉 | - |
| `obj.allTemplate[]` | string | 物流模板名称(下拉 option 的 value 与显示文本，模板中 {{item.name}}) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
