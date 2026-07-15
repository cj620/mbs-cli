<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-all-listing

在线商品列表查询（本周新刊登 / 所有在线商品）：在线商品监控列表分页查询。同一接口被两处复用：本周新刊登标签页固定带 thisWeek=1 查询本周新刊登商品；所有在线商品标签页不带 thisWeek 查询全部在线商品。返回商品列表及分页信息（total/pages/scrollId）。

## 用法

```bash
mbs ars erpmonitor-all-listing --currpage <number> [--scrollId <string>] [--thisWeek <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/managerHotProduct/allListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currpage` | currpage | query | number | 是 | - | 当前页码，从1开始。首次查询固定传1；翻页时由分页组件 api.getCurrent() 取值 |
| `scrollId` | scrollId | query | string | 否 | - | ES滚动分页ID。首页不传；翻页时回传上一次响应返回的 data.obj.scrollId |
| `thisWeek` | thisWeek | query | string | 否 | - | 是否查询本周新刊登。固定取值 1=本周新刊登(本周新刊登标签页传入)；不传=所有在线商品 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包裹字段,本接口回调未直接读取,(待人工确认)) | - |
| `desc` | string | 响应提示信息(统一响应包裹字段,本接口回调未直接读取,(待人工确认)) | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.list[]` | array | 商品列表 | - |
| `obj.list[][0]` | string | 商品记录ID(本周新刊登复选框 dataId 属性,用于导出 ids) | - |
| `obj.list[][1]` | string | 商品SPU编号(本周新刊登复选框 value) | - |
| `obj.list[][2]` | string | 商品主图URL(加载失败回退默认图 timg.jpg) | - |
| `obj.list[][3]` | string | 商品平台链接(标题/商品ID 跳转,新窗口打开) | - |
| `obj.list[][4]` | string | 商品标题(鼠标悬浮 title 提示) | - |
| `obj.list[][5]` | string | 店铺名称(本周新刊登复选框 shopnames 属性,用于导出 shopNames) | - |
| `obj.list[][6]` | string | 负责人(销售负责人) | - |
| `obj.list[][7]` | string | 平台商品ID(listing ID) | - |
| `obj.list[][8]` | string | 刊登(上架)时间(有值才展示) | - |
| `obj.list[][9]` | number | 近30天累计销量额(同时复用于销售数量(7/30/90)中的30天数量) | - |
| `obj.list[][10]` | number | 最低售价 | - |
| `obj.list[][11]` | number | 最高售价(与最低售价同存时以 - 连接展示区间) | - |
| `obj.list[][12]` | string | 售价币种(最低/最高售价存在其一时展示) | - |
| `obj.list[][13]` | number | 近7天销售数量 | - |
| `obj.list[][14]` | number | 近90天销售数量 | - |
| `obj.list[][15]` | number | 浏览量 | - |
| `obj.list[][16]` | number | 收藏量 | - |
| `obj.total` | number | 满足条件的商品总条数(前端 >100 时显示上限 100;用于共N条与角标) | - |
| `obj.pages` | number | 总页数(传给分页组件 pageCount) | - |
| `obj.scrollId` | string | ES滚动分页ID(写入隐藏域,下一页查询回传) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
