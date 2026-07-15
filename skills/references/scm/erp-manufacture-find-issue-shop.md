<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-find-issue-shop

纠纷店铺/负责人下拉数据查询：纠纷处理（拒绝退款）页面初始化时调用，返回当前用户可见的店铺列表(shopTypeList)与店铺负责人列表(operList)，用于渲染顶部“店铺”和“店铺负责人”两个筛选下拉框的选项。无请求参数。

## 用法

```bash
mbs scm erp-manufacture-find-issue-shop
```

## API

- Service: `erpManufacture`
- Method: `GET`
- Path: `/erpManufacture/erpManufacture/issueInfo/findIssueShop`
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
| `code` | number | 响应状态码,200=成功（外层通用字段,本回调未直接读取,(业务约定)） | - |
| `desc` | string | 响应提示信息（外层通用字段,本回调未直接读取,(业务约定)） | - |
| `obj` | object | 业务数据对象（前端以 data.obj 是否存在作为渲染判断） | - |
| `obj.shopTypeList[]` | array | 店铺列表(字符串数组),每个元素为店铺名称,渲染“店铺”下拉框选项(value 与文本同为该字符串) | - |
| `obj.operList[]` | array | 店铺负责人列表(字符串数组),每个元素为负责人名称,渲染“店铺负责人”下拉框选项(value 与文本同为该字符串) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
