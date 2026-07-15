# mbs oms erp-order-find-shop-by-pt

按平台查询店铺列表：根据平台ID查询该平台下的店铺名称列表，用于「亚马逊费项导入」弹窗中店铺下拉框(#shopNames)的数据填充。页面加载时(findShoplist())固定按平台ID=2(亚马逊)查询。

## 用法

```bash
mbs oms erp-order-find-shop-by-pt --platformid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/fbaReport/findShopByPt`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformid` | platformid | body | string | 是 | - | 平台ID。代码固定传 '2'（=亚马逊平台），用于筛选该平台下的店铺。来源：代码内常量(无页面控件)。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（本页统一以 data.code == 200 判定成功） | - |
| `desc` | string | 响应提示信息（失败时前端 alert(data.desc) 提示） | - |
| `obj[]` | array | 店铺名称列表（成功回调中 if (data.obj) 后作为 list 渲染下拉） | - |
| `obj[]` | string | 数组元素：店铺名称(店铺名)。模板中同时作为下拉项 value 与显示文本。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
