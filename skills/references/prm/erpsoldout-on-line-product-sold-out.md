# mbs prm erpsoldout-on-line-product-sold-out

平台在线商品(下架任务)列表查询：平台商品下架管理页列表查询：按平台、店铺、SKU(多值)、操作状态、下架原因等条件分页查询在线商品/下架任务记录，返回分页列表(含店铺、标题、SKU、库存、销量、操作状态、执行信息等)。

## 用法

```bash
mbs prm erpsoldout-on-line-product-sold-out [--platformId <string>] [--id <string>] [--skuList <array>] [--employeeId <string>] [--shopId <string>] [--soldOutReason <string>] [--soldOutStatus <string>] --currPage <number>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/soldOut/onLineProduct`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | body | string | 否 | - | 平台ID(来源平台下拉框 #platformName，由 findPlatform 接口填充 value=platformId) |
| `id` | id | body | string | 否 | - | 记录ID(来源URL查询参数 id，GetQueryString('id')) |
| `skuList` | skuList | body | array | 否 | - | SKU列表(来源输入框 #duoSKU，代码以 , 分割为数组；占位提示为空格分割,待人工确认实际分隔符) |
| `employeeId` | employeeId | body | string | 否 | - | 员工ID(来源URL查询参数 employeeId，GetQueryString('employeeId')) |
| `shopId` | shopId | body | string | 否 | - | 店铺ID(来源店铺下拉框 #shopId，由 findShop 接口填充 value=shopId) |
| `soldOutReason` | soldOutReason | body | string | 否 | - | 下架原因(来源下拉框 #Reason，由 findSoldOutReason 接口填充) |
| `soldOutStatus` | soldOutStatus | body | string | 否 | - | 操作状态(来源下拉框 #soldOutStatus)。0=等待下架;1=正在下架;2=下架失败;3=下架成功;4=正在下架 |
| `currPage` | currPage | body | number | 是 | - | 当前页码(首次固定为1，翻页取分页控件 api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.total` | number | 满足条件的记录总数(渲染到 #total) | - |
| `obj.pages` | number | 总页数(作为分页控件 pageCount) | - |
| `obj.list[]` | array | 商品/下架任务记录列表 | - |
| `obj.list[][0]` | string | 记录ID(行复选框 value，用于下架款式/商品) | - |
| `obj.list[][1]` | number | 操作状态。0=等待下架;1=正在下架;2=下架失败;3=下架成功;4=正在下架(前端转中文展示) | - |
| `obj.list[][2]` | number | 商品状态。0=已下架;1=已在售;2=已删除(前端转中文，当前模板列已注释，仍在回调中转换) | - |
| `obj.list[][3]` | string | 店铺名称 | - |
| `obj.list[][4]` | string | 商品图片URL | - |
| `obj.list[][5]` | string | 商品链接(标题/编号超链接 href) | - |
| `obj.list[][6]` | string | 商品属性(标题前以括号展示) | - |
| `obj.list[][7]` | string | 商品标题 | - |
| `obj.list[][8]` | string | 商品编号(平台商品ID) | - |
| `obj.list[][9]` | string | SKU | - |
| `obj.list[][10]` | string | 下架原因 | - |
| `obj.list[][11]` | string | 创建人(申请人) | - |
| `obj.list[][12]` | string | 备注 | - |
| `obj.list[][13]` | string | 执行人 | - |
| `obj.list[][14]` | number | 库存 | - |
| `obj.list[][15]` | number | 30天销量 | - |
| `obj.list[][16]` | string | SKU状态 | - |
| `obj.list[][17]` | string | SKU属性 | - |
| `obj.list[][18]` | string | 上架时间 | - |
| `obj.list[][19]` | string | 执行时间(下架时间) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
