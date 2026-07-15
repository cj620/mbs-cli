<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpflowmonitor-get-item-data-monitor

商品流量监控列表查询（getItemDataMonitor）：平台流量看板页「商品流量看板」Tab 的商品维度流量监控分页查询：按平台、大酋长、组员、店铺、SPU、统计天数（1/7/30天）筛选，并按订单量/销售数量/访问/转化率/销售风向/退款风向等排序，返回商品流量列表及总数、总页数。

## 用法

```bash
mbs ars erpflowmonitor-get-item-data-monitor [--bigChief <array>] [--employeeNames <array>] [--orderBy <string>] [--platformId <string>] [--shopIds <array>] [--spu <string>] --dayNum <string> --page <number> --pageSize <number>
```

## API

- Service: `erpflowmonitor`
- Method: `POST`
- Path: `/erpflowmonitor/erpflowmonitor/ebayDataMonitor/getItemDataMonitor`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `bigChief` | bigChief | body | array | 否 | - | 大酋长（来源 #shopManager2 多选下拉，店铺负责人ID数组） |
| `employeeNames` | employeeNames | body | array | 否 | - | 组员（来源 #employeeList2 多选；选了大酋长但未选组员时取 sessionStorage SHOPID 拆分值） |
| `orderBy` | orderBy | body | string | 否 | - | 排序方式。1=按订单量降序;2=按销售数量降序;3=按访问次数降序;4=按访客数降序;5=按转化率降序;6=按人均访问次数降序;7=按人均访问时长降序;8=按销售风向降幅排序;9=按销售风向涨幅排序;10=按退款风向降幅排序;11=按退款风向涨幅排序 |
| `platformId` | platformId | body | string | 否 | - | 所属平台（来源 #platformId2）。1=ebay;89=SeeBee |
| `shopIds` | shopIds | body | array | 否 | - | 店铺（来源 #shoptypeid2 多选下拉，店铺ID数组） |
| `spu` | spu | body | string | 否 | - | 商品SPU（来源输入框 #inputs） |
| `dayNum` | dayNum | body | string | 是 | - | 统计天数（来源 1天/7天/30天 按钮或 sessionStorage days）。取值 1/7/30，单位：天 |
| `page` | page | body | number | 是 | - | 当前页码（首次查询固定为1，分页回调取 api.getCurrent()） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（固定为50） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（本页未读取，待人工确认） | - |
| `desc` | string | 响应提示信息（本页未读取，待人工确认） | - |
| `content` | number | 统计天数（模板 {{content}} 展示“近N天/较前N日”，对应请求 dayNum） | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的商品总数（前端写入 #total） | - |
| `obj.countPage` | number | 总页数（传入分页组件 findItemDataMonitor(res.obj.countPage)） | - |
| `obj.result[]` | array | 商品流量列表 | - |
| `obj.result[][0]` | string | 商品图片URL（加载失败回退默认图） | - |
| `obj.result[][1]` | string | 商品SPU（有值时渲染 SPU 详情链接 /product/SPUdetails.html?SPU=） | - |
| `obj.result[][2]` | string | 商品外部链接URL（标题与 itemId 跳转用） | - |
| `obj.result[][3]` | string | 商品标题 | - |
| `obj.result[][4]` | string | 商品 itemid（平台商品ID） | - |
| `obj.result[][5]` | number | 订单量（近N天） | - |
| `obj.result[][6]` | number | 销售数量（近N天） | - |
| `obj.result[][7]` | number | 销售风向（最近7天对比上一个7天销售额涨跌百分比，>0 上涨/否则下降，前端展示%） | - |
| `obj.result[][8]` | number | 退款风向（最近7天对比上一个7天退款金额涨跌百分比，>0 上涨/否则下降，前端展示%） | - |
| `obj.result[][9]` | number | 访客数(UV) | - |
| `obj.result[][10]` | number | 访问次数(PV) | - |
| `obj.result[][11]` | number | 转化率（前端展示%） | - |
| `obj.result[][12]` | number | 人均访问次数 | - |
| `obj.result[][13]` | number | 人均访问时长（单位：秒s） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
