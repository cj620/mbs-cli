<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-find-sold-out-num

下架SKU待审核数量查询：开发员工作台(仪表盘)统计当前登录员工「下架SKU待审核」的商品数量，返回数量值并随返回的员工ID拼接跳转链接(跳转下架商品上架页 status=4)。定时器每 5 分钟刷新一次。

## 用法

```bash
mbs prm erpsoldout-find-sold-out-num
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/soldOut/findSoldOutNum`
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
| `obj` | number | 下架SKU待审核数量。前端写入 <a id="findSoldOutNum">；当 obj 为假值(0/空/null)时显示 -- | - |
| `content` | string | 当前登录员工ID(employeeId)。前端拼接跳转链接 /soldout/PlatformCommodityShelf.html?employeeId={content}&status=4 | - |
| `code` | number | 响应状态码(后端统一返回体字段，前端本回调未显式判断) (待人工确认) | - |
| `desc` | string | 响应提示信息(后端统一返回体字段，前端本回调未使用) (待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
