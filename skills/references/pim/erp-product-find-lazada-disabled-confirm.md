<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-lazada-disabled-confirm

Lazada下架确认列表查询：Lazada批量下架管理页的下架任务列表查询：按店铺、创建时间区间、在线编号、SPU、下架状态分页筛选，返回下架任务列表(商品图/SKU/SPU/店铺/负责人/在线编号/近30天销量/创建人/创建时间/下架状态/刊登时间/下架时间/失败原因)及总数、总页数。

## 用法

```bash
mbs pim erp-product-find-lazada-disabled-confirm [--shopName <string>] [--beginTime <string>] [--endTime <string>] [--onlineNo <string>] [--spu <string>] [--status <string>] [--currentPage <number>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaExportController/findLazadaDisabledConfirm`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | body | string | 否 | - | 店铺名称(多选店铺逗号拼接，来源 #shopvalues2；未选则传空串) |
| `beginTime` | beginTime | body | string | 否 | - | 创建(任务生成)时间-起始，来源日期控件 #beginTime |
| `endTime` | endTime | body | string | 否 | - | 创建(任务生成)时间-结束，来源日期控件 #endTimes |
| `onlineNo` | onlineNo | body | string | 否 | - | 在线编号(模糊查询)，来源 #onlineNo，前端去除首尾空格 |
| `spu` | spu | body | string | 否 | - | SPU编号，来源 #onSpu，前端去除首尾空格 |
| `status` | status | body | string | 否 | - | 下架状态(来源 #soldStatus)。空=全部;0=等待下架;1=下架中;2=下架成功;3=下架失败 |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码(仅分页回调 findTaskReport 传，取自分页组件 api.getCurrent()；搜索首次不传，后端默认第1页) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口回调未取用，同站点统一约定) | - |
| `desc` | string | 响应提示信息(本接口回调未取用) | - |
| `obj` | object | 业务数据对象(为空时前端将总数置0) | - |
| `obj.total` | number | 满足条件的下架任务总条数(填入 #total) | - |
| `obj.totalPages` | number | 总页数(传给分页组件 findTaskReport(data.obj.totalPages)) | - |
| `obj.rows[]` | array | 下架任务列表 | - |
| `obj.rows[][0]` | string | 任务记录ID(列表勾选框 value，用于批量下架/删除时拼 confirmId) | - |
| `obj.rows[][1]` | string | 下架状态枚举。0=等待下架;1=下架中;2=下架成功;3=下架失败;4=删除(status=0 才显示勾选框，1/2/3 禁用批量下架/删除按钮) | - |
| `obj.rows[][2]` | string | 商品主图URL(加载失败回退默认图 timg.jpg) | - |
| `obj.rows[][3]` | string | 商品SKU(有值时渲染为 SKUdetails.html 链接) | - |
| `obj.rows[][4]` | string | 商品外部链接URL(标题与商品ID均跳转该地址) | - |
| `obj.rows[][5]` | string | 商品标题 | - |
| `obj.rows[][6]` | string | 店铺名称 | - |
| `obj.rows[][7]` | string | 店铺负责人 | - |
| `obj.rows[][8]` | string | 商品ID(同时用于相邻行同商品的合并背景判断) | - |
| `obj.rows[][9]` | string | 在线编号 | - |
| `obj.rows[][10]` | string | 商品SPU编号(有值时渲染为 SPUdetails.html 链接，否则显示 ----) | - |
| `obj.rows[][11]` | number | 近30天销量 | - |
| `obj.rows[][12]` | string | 创建人 | - |
| `obj.rows[][13]` | string | 创建时间 | - |
| `obj.rows[][14]` | string | 下架失败原因(status=3 时悬浮展示「下架失败(apiResult)」) | - |
| `obj.rows[][15]` | string | 刊登时间(为 null 时显示「— — — —」) | - |
| `obj.rows[][16]` | string | 下架时间(为 null 时显示「— — — —」) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
