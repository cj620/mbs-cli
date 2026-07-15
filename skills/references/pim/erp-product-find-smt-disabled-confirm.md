<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-smt-disabled-confirm

SMT批量下架-下架确认列表查询：SMT(速卖通)批量下架页的列表分页查询：按店铺、创建时间区间、在线编号、SPU、下架状态、销量类型筛选，返回待下架/下架中/已下架的商品列表(含图片、店铺、负责人、商品ID、在线编号、销量、创建信息、下架状态/时间等)及分页汇总。

## 用法

```bash
mbs pim erp-product-find-smt-disabled-confirm [--currentPage <number>] [--shopName <string>] [--beginTime <string>] [--endTime <string>] [--onlineNo <string>] [--spu <string>] [--status <string>] [--type <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtExportController/findSmtDisabledConfirm`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 否 | - | 当前页码(来源分页控件 api.getCurrent()；仅分页回调传，首次搜索不传) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(店铺多选 #shopvalues2 逗号拼接；未选则传空串=全部店铺) |
| `beginTime` | beginTime | body | string | 否 | - | 创建(任务生成)时间-起始(日期 #beginTime，YYYY-MM-DD) |
| `endTime` | endTime | body | string | 否 | - | 创建(任务生成)时间-结束(日期 #endTimes，YYYY-MM-DD) |
| `onlineNo` | onlineNo | body | string | 否 | - | 在线编号(模糊查询，文本 #onlineNo，前端去首尾空格) |
| `spu` | spu | body | string | 否 | - | SPU编号(文本 #onSpu，前端去首尾空格) |
| `status` | status | body | string | 否 | - | 下架状态(下拉 #soldStatus)。空=全部;0=等待下架;1=下架中;2=下架成功;3=下架失败 |
| `type` | type | body | string | 否 | - | 销量筛选类型(下拉 #type；仅 search() 传，分页回调不传)。空=全部;0=近30天销量为0;2=近90天订单量为0 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口前端仅在写操作回调判断,列表回调据 obj 判空) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.total` | number | 满足条件的记录总数(前端写入 #total) | - |
| `obj.totalPages` | number | 总页数(前端传入分页控件 pageCount) | - |
| `obj.rows[]` | array | 商品(下架任务)列表 | - |
| `obj.rows[][0]` | string | 记录ID(行勾选框 value，批量下架/删除 listing 时提交) | - |
| `obj.rows[][1]` | string | 商品主图URL(加载失败回退默认图) | - |
| `obj.rows[][2]` | string | 商品详情链接(标题与商品ID均跳转此地址) | - |
| `obj.rows[][3]` | string | 商品标题 | - |
| `obj.rows[][4]` | string | 店铺名称 | - |
| `obj.rows[][5]` | string | 店铺负责人 | - |
| `obj.rows[][6]` | string | 商品ID(前端按相邻行 proId 相同判定合并展示) | - |
| `obj.rows[][7]` | string | 在线编号(列表截断前30字符+悬浮显示全文) | - |
| `obj.rows[][8]` | string | SPU编号(有值则跳转 SPUdetails，无值显示 ----) | - |
| `obj.rows[][9]` | number | 近30天销量 | - |
| `obj.rows[][10]` | number | 近90天订单量 | - |
| `obj.rows[][11]` | string | 创建人 | - |
| `obj.rows[][12]` | string | 创建时间 | - |
| `obj.rows[][13]` | string | 下架状态枚举。0=等待下架;1=下架中;2=下架成功;3=下架失败;4=删除(前端转中文展示；仅 0 时显示行勾选框) | - |
| `obj.rows[][14]` | string | 下架失败原因(status==3 时拼接展示“下架失败(...)”) | - |
| `obj.rows[][15]` | string | 刊登时间(为 null 时展示 — — — —) | - |
| `obj.rows[][16]` | string | 下架时间(为 null 时展示 — — — —) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
