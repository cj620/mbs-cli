# mbs prm erp-publish-get-small-shop-by-big-shop

根据大店铺查询子(Joom)店铺：Joom 批量刊登页“请选择店铺”模态框中，用户在大店铺多选框选定店铺后触发，按大店铺名称(shopName)查询其下属的 Joom 子店铺名称列表，用于渲染子店铺多选清单。

## 用法

```bash
mbs prm erp-publish-get-small-shop-by-big-shop [--shopName <string>]
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/joomProductPublish/getSmallShopByBigShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 否 | - | 大店铺名称(查询条件)。来源于大店铺多选输入框 #shopvalues 的值(多选时以英文逗号拼接的店铺名)；以 URL 查询参数 ?shopName= 形式传递，可为空(空则查询全部)。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应体字段,本回调未直接判断,待人工确认是否返回) | - |
| `desc` | string | 响应提示信息(统一响应体字段,本回调未直接使用,待人工确认是否返回) | - |
| `obj[]` | array | 子(Joom)店铺列表 | - |
| `obj[]` | string | Joom 子店铺名称(模板用作子店铺复选框 value 及展示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
