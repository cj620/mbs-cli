# mbs pms erpsoldout-find-infring-product-num

待处理侵权商品数量查询：工作台(customerservice)首页顶部统计卡片，按员工查询其名下「待处理侵权」商品数量。页面初始化及切换组员时各调用一次，返回数量填入 #findInfringProductNum，并用返回的员工ID拼接侵权明细页链接。

## 用法

```bash
mbs pms erpsoldout-find-infring-product-num --userId <string>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/dev/erpsoldout/erpsoldout/infringing/findInfringProductNum`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `userId` | userId | query | string | 是 | - | 员工ID(YY员工ID)。URL query 参数；首页初始化取自 data.obj.user_info.yyemployeeId，切换组员时取自 #userInfo 选中项 data-value(组员 employeeId)。用于查询该员工名下待处理侵权商品数量 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj` | number | 待处理侵权商品数量。前端 $("#findInfringProductNum").html(data.obj)；无值(falsy)时展示 -- | - |
| `content` | string | 员工ID，用于拼接侵权明细页链接 employeeId(跳转 /soldout/CommodityInfringementdetail.html?employeeId={content}&status=1&dashboard=dashboard)。(具体取值来源待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
