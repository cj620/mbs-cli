<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-find-sold-out-product-num

查询售罄(清仓滞销)商品数量：根据用户(员工)ID统计其名下售罄/清仓(soldOut)商品的数量，返回单个数量值，前端用于 Dashboard 首页 #findSoldOutProductNum 徽标展示，并据返回的员工ID拼接「平台商品详情(status=0)」跳转链接。

## 用法

```bash
mbs prm erpsoldout-find-sold-out-product-num --userId <string>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/soldOut/findSoldOutProductNum`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `userId` | userId | query | string | 是 | - | 用户(员工)ID，URL 查询参数。来源 data.obj.user_info.yyemployeeId 或下拉框选中项 data-value(store_num) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(统一封装,200=成功)。本回调未引用 (待人工确认) | - |
| `desc` | string | 响应提示信息(统一封装)。本回调未引用 (待人工确认) | - |
| `obj` | number | 售罄/清仓(soldOut)商品数量。前端直接 $("#findSoldOutProductNum").html(data.obj) 展示；为空/假值时展示 '--' | - |
| `content` | string | 员工ID，前端用于拼接平台商品详情跳转链接 employeeId={content}(status=0) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
