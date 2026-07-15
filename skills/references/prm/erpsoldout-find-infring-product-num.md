<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-find-infring-product-num

侵权商品数量查询：仪表盘(common.html)按员工/店铺统计该用户名下已标注侵权但线上仍在售的商品数量，结果填入侵权商品角标(#findInfringProductNum)，并据返回 content 拼接跳转到侵权商品明细页。订单看板加载(orderstats)、切换组员(salesmanstats)及每5分钟定时刷新(settime)均会调用。

## 用法

```bash
mbs prm erpsoldout-find-infring-product-num --userId <string>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/findInfringProductNum`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `userId` | userId | query | string | 是 | - | 用户/员工ID(URL Query)。orderstats 取 data.obj.user_info.yyemployeeId；salesmanstats 取店铺下拉选中项 data-value(store_num) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(马帮统一壳,本回调未引用,待人工确认;通常200=成功) | - |
| `desc` | string | 响应提示信息(马帮统一壳,本回调未引用,待人工确认) | - |
| `obj` | number | 侵权商品数量。前端 if(data.obj) 为真则展示数量,否则展示 '--' | - |
| `content` | string | 员工ID。前端用于拼接跳转链接 employeeId={content}(侵权商品明细页 status=1) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
