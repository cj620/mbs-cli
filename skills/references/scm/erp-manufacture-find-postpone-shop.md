# mbs scm erp-manufacture-find-postpone-shop

延长收货-店铺/负责人/物流方式下拉数据查询：进入“延长收货订单”报表页时初始化加载，返回店铺(店铺类型)列表、店铺负责人(操作员)列表、物流方式列表三组下拉数据，分别填充页面顶部的“店铺/店铺负责人/物流方式”三个下拉筛选框。该接口为 GET 且无任何请求参数。

## 用法

```bash
mbs scm erp-manufacture-find-postpone-shop
```

## API

- Service: `erpManufacture`
- Method: `GET`
- Path: `/erpManufacture/erpManufacture/postponeInfo/findPostponeShop`
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
| `code` | number | 响应状态码,200=成功(本回调未校验,仅判断 obj;同页其它接口以 code==200 为成功) | - |
| `desc` | string | 响应提示信息(本回调未使用,同页统一响应字段) | - |
| `obj` | object | 业务数据对象(回调以 if(data.obj) 判空) | - |
| `obj.shopTypeList[]` | array | 店铺(店铺类型)列表,填充“店铺”下拉框 #shopNames;元素为店铺名称字符串 | - |
| `obj.operList[]` | array | 店铺负责人(操作员)列表,填充“店铺负责人”下拉框 #shopManger;元素为负责人名称字符串 | - |
| `obj.expressList[]` | array | 物流方式列表,填充“物流方式”下拉框 #expressType;元素为物流方式名称字符串 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
