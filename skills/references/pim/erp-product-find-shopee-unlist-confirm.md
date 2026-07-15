# mbs pim erp-product-find-shopee-unlist-confirm

Shopee批量下架任务列表查询：Shopee批量下架页面：按店铺、创建时间区间、在线编号、SPU、下架状态分页查询下架任务列表，返回任务行及总数、总页数。

## 用法

```bash
mbs pim erp-product-find-shopee-unlist-confirm [--shopName <string>] [--beginTime <string>] [--endTime <string>] [--onlineNo <string>] [--spu <string>] [--status <string>] [--currentPage <number>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeUnlistController/findShopeeUnlistConfirm`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | body | string | 否 | - | 店铺名称（多选店铺，多值逗号拼接；未选择传空字符串） |
| `beginTime` | beginTime | body | string | 否 | - | 创建时间-起始（任务生成时间） |
| `endTime` | endTime | body | string | 否 | - | 创建时间-结束 |
| `onlineNo` | onlineNo | body | string | 否 | - | 在线编号（模糊查询，去除首尾空格） |
| `spu` | spu | body | string | 否 | - | SPU编号（模糊查询，去除首尾空格） |
| `status` | status | body | string | 否 | - | 下架状态。空=全部;0=等待下架;1=下架中;2=下架成功;3=下架失败 |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码（仅分页回调翻页时传，首次查询不传） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（为空则前端将总数置0） | - |
| `obj.total` | number | 满足条件的任务总条数（前端展示“共 N 条”） | - |
| `obj.totalPages` | number | 总页数（传入分页组件 pageCount） | - |
| `obj.rows[]` | array | 下架任务列表 | - |
| `obj.rows[][0]` | string | 任务记录ID（复选框 value，批量下架/删除时拼接为 confirmId） | - |
| `obj.rows[][1]` | string | 商品图片URL（加载失败回退默认图） | - |
| `obj.rows[][2]` | string | 商品SKU（有值时渲染 SKUdetails 链接） | - |
| `obj.rows[][3]` | string | 商品链接URL（标题/商品ID跳转地址） | - |
| `obj.rows[][4]` | string | 商品标题 | - |
| `obj.rows[][5]` | string | 店铺名称 | - |
| `obj.rows[][6]` | string | 店铺负责人 | - |
| `obj.rows[][7]` | string | 商品ID（平台商品ID；前后行 proId 相同则合并底色） | - |
| `obj.rows[][8]` | string | 在线编号 | - |
| `obj.rows[][9]` | string | 商品SPU编号（有值渲染 SPUdetails 链接，否则显示 ----） | - |
| `obj.rows[][10]` | number | 近30天销量 | - |
| `obj.rows[][11]` | string | 创建人 | - |
| `obj.rows[][12]` | string | 创建时间 | - |
| `obj.rows[][13]` | string | 下架状态。0=等待下架;1=下架中;2=下架成功;3=下架失败;4=删除（仅 status=0 显示可选复选框） | - |
| `obj.rows[][14]` | string | 下架失败原因（status=3 时悬浮展示） | - |
| `obj.rows[][15]` | string | 刊登时间（为 null 时展示 — — — —） | - |
| `obj.rows[][16]` | string | 下架时间（为 null 时展示 — — — —） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
