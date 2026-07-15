<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-over-twenty-pro-week

7天内超过20单的产品个数(独立优化师周报)：按优化师(erpName)和时间区间，分页查询该优化师近7天内出单量超过20单的产品(SPU)列表，返回 SPU 图片/编号/产品名/属性/出单量/开发员/创建时间，并附总条数与总页数用于分页。

## 用法

```bash
mbs oms erp-order-find-over-twenty-pro-week --beginTime <string> --endTime <string> --erpName <string> --currentPage <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/independentOptimizerReport/findOverTwentyProWeek`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `beginTime` | beginTime | body | string | 是 | - | 开始时间(查询区间起始,格式 yyyy-MM-dd)。来源:日期控件 #beginTime,为空时取 URL 参数 beginTime |
| `endTime` | endTime | body | string | 是 | - | 结束时间(查询区间结束,格式 yyyy-MM-dd)。来源:日期控件 #endTime,为空时取 URL 参数 endTime |
| `erpName` | erpName | body | string | 是 | - | 优化师名称(独立优化师)。来源:URL 参数 erpName(decodeURI 解码) |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首次请求固定为 1,分页回调取分页组件 api.getCurrent() |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定 100) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应包,前端未显式判断) | - |
| `desc` | string | 响应提示信息(标准响应包,前端未显式使用) | - |
| `obj` | object | 业务数据对象(前端据 data.obj 判断是否有数据) | - |
| `obj.total` | number | 满足条件的产品总条数(渲染到 #total) | - |
| `obj.totalPages` | number | 总页数(初始化分页组件 pageCount) | - |
| `obj.rows[]` | array | 产品(SPU)列表 | - |
| `obj.rows[][0]` | string | 产品主图URL(模板 img.src,加载失败回退占位图) | - |
| `obj.rows[][1]` | string | 产品SPU编号(主键;模板链接 /product/SPUdetails.html?spu=) | - |
| `obj.rows[][2]` | string | 产品名称 | - |
| `obj.rows[][3]` | string | 商品属性 | - |
| `obj.rows[][4]` | number | 出单量(7天内出单数) | - |
| `obj.rows[][5]` | string | 开发员 | - |
| `obj.rows[][6]` | string | 创建时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
