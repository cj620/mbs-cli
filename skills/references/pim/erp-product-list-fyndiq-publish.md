# mbs pim erp-product-list-fyndiq-publish

Fyndiq刊登列表查询：Fyndiq刊登管理页列表分页查询：按店铺、刊登人、刊登状态、刊登时间区间筛选，分页返回 SPU 行及其下挂 skuList 子表与退款信息。页面三个 Tab（等待刊登/刊登中/刊登完毕）及分页回调共用同一接口，仅入参不同。

## 用法

```bash
mbs pim erp-product-list-fyndiq-publish [--shopName <string>] [--employeeId <string>] [--status <string>] [--publishTimeStart <string>] [--publishTimeEnd <string>] --currentPage <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/fyndiqProductPublish/listFyndiqPublish`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | body | string | 否 | - | 刊登店铺名（来源 #shopName 下拉，选项由 listFyndiqShop 填充；空串表示全部店铺） |
| `employeeId` | employeeId | body | string | 否 | - | 刊登人（来源 #employeeList 下拉的 value；当前页面该下拉已注释，多为空） |
| `status` | status | body | string | 否 | - | 刊登状态（文本值）。等待刊登Tab固定传'请刊登'；刊登中Tab固定传'刊登中'；刊登完毕Tab取#status选择值：刊登完毕/刊登成功/部分成功/刊登失败 |
| `publishTimeStart` | publishTimeStart | body | string | 否 | - | 刊登开始时间（yyyy-MM-dd）。来源：刊登完毕Tab #time1 / 等待刊登Tab #time1-1；刊登中Tab不传 |
| `publishTimeEnd` | publishTimeEnd | body | string | 否 | - | 刊登结束时间（yyyy-MM-dd）。来源：刊登完毕Tab #time2 / 等待刊登Tab #time2-2；刊登中Tab不传 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（从1开始，分页点击取 api.getCurrent()；每页固定200条） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息（删除/推送等操作回显用） | - |
| `obj` | object | 业务数据对象（分页结果） | - |
| `obj.total` | number | 满足条件的总条数（页面'共N条'展示） | - |
| `obj.totalPages` | number | 总页数（jQuery分页 pageSearch/pageSearch2 据此渲染） | - |
| `obj.rows[]` | array | SPU 刊登记录列表 | - |
| `obj.rows[][0]` | string | 刊登记录ID（删除 delFyndiq、确认刊登 pushFyndiq 时作为 fyndiqPublishSpuId 传入） | - |
| `obj.rows[][1]` | string | 商品SPU编号（链接到 /product/SPUdetails.html?SPU=） | - |
| `obj.rows[][2]` | string | SPU 主图URL（加载失败回退占位图） | - |
| `obj.rows[][3]` | string | 商品标题 | - |
| `obj.rows[][4]` | string | 商品分类 | - |
| `obj.rows[][5]` | number | 库存数量 | - |
| `obj.rows[][6]` | number | 原价（与 currency 拼接展示） | - |
| `obj.rows[][7]` | number | 售价（与 currency 拼接展示） | - |
| `obj.rows[][8]` | string | 货币单位（拼在原价/价格之后展示） | - |
| `obj.rows[][9]` | string | 属性名（无则展示 -------） | - |
| `obj.rows[][10]` | string | 属性值（与 propertyName 以 : 拼接） | - |
| `obj.rows[][11]` | string | 刊登店铺名 | - |
| `obj.rows[][12]` | string | 刊登人（创建人） | - |
| `obj.rows[][13]` | number | 刊登状态枚举。1=刊登中;2=刊登成功;3=部分成功;4=刊登失败(前端转中文展示) | - |
| `obj.rows[][14]` | string | 刊登结果（平台API返回信息，刊登完毕Tab悬浮展示完整内容） | - |
| `obj.rows[][15]` | string | 生成（创建）时间 | - |
| `obj.rows[][16]` | string | 刊登时间（刊登中Tab #contentTemplate 使用；无则展示 ------------） | - |
| `obj.rows[][17]` | string | 刊登时间（刊登完毕Tab #contentTemplate2 使用；无则展示 ------------） | - |
| `obj.rows[][18][]` | array | 退款信息列表（等待刊登Vue表取首元素 [0] 展示） | - |
| `obj.rows[][18][][0]` | number | 退款数量 | - |
| `obj.rows[][18][][1]` | number | 退款率（前端拼 % 展示） | - |
| `obj.rows[][19][]` | array | 该SPU下挂的SKU子列表（展开行展示，skuList.length 作主图角标计数） | - |
| `obj.rows[][19][][0]` | string | SKU主图URL | - |
| `obj.rows[][19][][1]` | string | SKU编号（链接到 /product/SKUdetails.html?SKU=） | - |
| `obj.rows[][19][][2]` | string | SKU标题 | - |
| `obj.rows[][19][][3]` | string | SKU分类 | - |
| `obj.rows[][19][][4]` | number | SKU库存 | - |
| `obj.rows[][19][][5]` | number | SKU原价（与 currency 拼接） | - |
| `obj.rows[][19][][6]` | number | SKU价格（与 currency 拼接） | - |
| `obj.rows[][19][][7]` | string | SKU货币单位 | - |
| `obj.rows[][19][][8]` | string | SKU属性名（无则展示 -------） | - |
| `obj.rows[][19][][9]` | string | SKU属性值（与 propertyName 以 : 拼接） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
