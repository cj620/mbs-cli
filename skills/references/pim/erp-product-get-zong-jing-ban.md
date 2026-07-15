# mbs pim erp-product-get-zong-jing-ban

查询当前用户是否为总经办(总经理权限)：进入「事业部人员毛利方差图」页面时调用，判断当前登录人是否为总经办/总经理。返回布尔值赋给前端 state.isGeneralManager，与无总监、无经理筛选条件共同决定是否展示「看经理人均毛利/看经理总毛利」切换按钮。请求无任何业务参数(空 POST body)。

## 用法

```bash
mbs pim erp-product-get-zong-jing-ban
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getZongJingBan`
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
| `obj` | boolean | 当前登录人是否为总经办/总经理。true=是(赋给 state.isGeneralManager，配合无总监/经理筛选时显示经理毛利切换按钮)；false=否(隐藏按钮)。前端唯一实际取用字段 | - |
| `code` | number | 响应状态码,200=成功(项目统一包络字段；本调用未显式校验) | - |
| `desc` | string | 响应提示信息(项目统一包络字段) | - |
| `success` | boolean | 业务是否成功标识(项目统一包络字段) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
