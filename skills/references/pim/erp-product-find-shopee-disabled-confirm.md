# mbs pim erp-product-find-shopee-disabled-confirm

Shopee待删除商品确认列表查询：Shopee批量删除页面列表查询：按店铺、创建时间区间、在线编号、SPU、删除状态分页查询待删除/删除中/已删除的Shopee商品（listing）任务，返回总数与行记录列表（商品图、SKU/SPU、店铺/负责人、商品ID、在线编号、近30天销量、创建人/时间、删除状态、刊登/删除时间）。

## 用法

```bash
mbs pim erp-product-find-shopee-disabled-confirm [--shopName <string>] [--beginTime <string>] [--endTime <string>] [--onlineNo <string>] [--spu <string>] [--status <string>] --currentPage <number> --pageSize <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductController/findShopeeDisabledConfirm`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | body | string | 否 | - | 店铺（#shopName 多选下拉，多选逗号拼接，未选传空字符串） |
| `beginTime` | beginTime | body | string | 否 | - | 创建时间-起始（#beginTime，yyyy-MM-dd） |
| `endTime` | endTime | body | string | 否 | - | 创建时间-结束（#endTimes，yyyy-MM-dd） |
| `onlineNo` | onlineNo | body | string | 否 | - | 在线编号（模糊查询，#onlineNo，去首尾空格） |
| `spu` | spu | body | string | 否 | - | SPU编号（#onSpu，去首尾空格） |
| `status` | status | body | string | 否 | - | 删除状态（#soldStatus）。空=全部;0=等待删除;1=删除中;2=删除成功;3=删除失败（自动删除场景固定0） |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（pageInfo.currentPage，初始1） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（pageInfo.pageSize，初始200，可选10/100/200/500） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（统一响应包字段） | - |
| `desc` | string | 响应提示信息（统一响应包字段） | - |
| `obj` | object | 业务数据对象（为空时前端将total置0） | - |
| `obj.total` | number | 满足条件的总记录数（赋值给pageInfo.total） | - |
| `obj.rows[]` | array | 删除任务行列表 | - |
| `obj.rows[][0]` | string | 任务记录ID（行复选框value，批量/删除任务/自动删除选取依据） | - |
| `obj.rows[][1]` | string | 商品主图URL（加载失败回退默认图） | - |
| `obj.rows[][2]` | string | 商品SKU（有值时渲染SKUdetails链接） | - |
| `obj.rows[][3]` | string | 商品详情/外部链接URL | - |
| `obj.rows[][4]` | string | 商品标题 | - |
| `obj.rows[][5]` | string | 店铺名称 | - |
| `obj.rows[][6]` | string | 店铺负责人 | - |
| `obj.rows[][7]` | string | 商品ID（相邻行相同则标记同款合并底色） | - |
| `obj.rows[][8]` | string | 在线编号 | - |
| `obj.rows[][9]` | string | 商品SPU（有值时渲染SPUdetails链接，无值显示----） | - |
| `obj.rows[][10]` | number | 近30天销量 | - |
| `obj.rows[][11]` | string | 创建人（提交人） | - |
| `obj.rows[][12]` | string | 创建时间（任务提交时间） | - |
| `obj.rows[][13]` | number | 删除状态枚举。0=等待删除(仅此状态可勾选);1=删除中;2=删除成功;3=删除失败(悬浮显示apiResult);4=删除 | - |
| `obj.rows[][14]` | string | 删除失败原因/接口返回结果（status=3时展示） | - |
| `obj.rows[][15]` | string | 刊登时间（null时展示— — — —） | - |
| `obj.rows[][16]` | string | 删除时间（null时展示— — — —） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
