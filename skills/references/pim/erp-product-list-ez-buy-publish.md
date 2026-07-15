<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-list-ez-buy-publish

Ezbuy刊登列表查询：Ezbuy刊登页列表分页查询。按店铺、刊登人、刊登状态、刊登时间区间筛选，返回刊登记录列表（含 SPU、标题、分类、店铺、刊登人、状态、生成/刊登时间及子 SKU 明细）。同一接口被「刊登中」(search) 与「刊登完毕」(search2) 两个 Tab 复用。

## 用法

```bash
mbs pim erp-product-list-ez-buy-publish [--shopName <string>] [--employeeId <string>] [--status <string>] [--publishTimeStart <string>] [--publishTimeEnd <string>] --currentPage <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/ezBuyProductPublish/listEzBuyPublish`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | body | string | 否 | - | 店铺名（来源控件 #shopName 下拉，值为店铺名称字符串；空字符串表示全部店铺） |
| `employeeId` | employeeId | body | string | 否 | - | 刊登人ID（来源控件 #employeeList 下拉，值为 employee_id；空字符串表示全部刊登人） |
| `status` | status | body | string | 否 | - | 刊登状态。刊登中Tab 固定传 '刊登中'；刊登完毕Tab 取自 #status 下拉，枚举：刊登完毕(默认/全部)、刊登成功、刊登失败 |
| `publishTimeStart` | publishTimeStart | body | string | 否 | - | 刊登开始时间（来源控件 #time1，date 格式 yyyy-MM-dd；仅刊登完毕 search2 传递） |
| `publishTimeEnd` | publishTimeEnd | body | string | 否 | - | 刊登结束时间（来源控件 #time2，date 格式 yyyy-MM-dd；仅刊登完毕 search2 传递） |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首次查询固定为 1，分页回调取 api.getCurrent()（每页 200 条） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息（失败时展示） | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的记录总条数（前端写入 #total/#total2） | - |
| `obj.pages` | number | 总页数（前端传入分页组件 pageCount） | - |
| `obj.list[]` | array | 刊登记录列表 | - |
| `obj.list[][0]` | string | 商品主图URL（加载失败回退默认图） | - |
| `obj.list[][1]` | string | 商品SPU编号（链接到 SPUdetails.html） | - |
| `obj.list[][2]` | string | 商品标题（英文标题，列“标题”） | - |
| `obj.list[][3]` | string | 商品分类名称 | - |
| `obj.list[][4]` | string | 刊登店铺名称 | - |
| `obj.list[][5]` | string | 刊登人姓名 | - |
| `obj.list[][6]` | number | 刊登状态枚举。1=刊登中；2=刊登成功；3=刊登失败（前端转中文展示） | - |
| `obj.list[][7]` | string | 刊登结果/失败原因（仅刊登完毕 #contentTemplate2 列“刊登结果”使用） | - |
| `obj.list[][8]` | string | 生成时间 | - |
| `obj.list[][9]` | string | 刊登时间（刊登中 #contentTemplate 使用；为空展示 ------------） | - |
| `obj.list[][10]` | string | 刊登时间（刊登完毕 #contentTemplate2 使用；为空展示 ------------） | - |
| `obj.list[][11][]` | array | 子 SKU 明细列表（展开行展示；前端用 skus.length 作 SKU 数量角标） | - |
| `obj.list[][11][][0]` | string | SKU 图片URL（加载失败回退默认图） | - |
| `obj.list[][11][][1]` | string | SKU编号（链接到 SKUdetails.html） | - |
| `obj.list[][11][][2]` | string | SKU颜色 | - |
| `obj.list[][11][][3]` | string | SKU大小 | - |
| `obj.list[][11][][4]` | number | SKU原价 | - |
| `obj.list[][11][][5]` | number | SKU售卖价 | - |
| `obj.list[][11][][6]` | number | SKU库存 | - |
| `obj.list[][11][][7]` | number | SKU重量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
