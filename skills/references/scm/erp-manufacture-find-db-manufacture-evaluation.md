# mbs scm erp-manufacture-find-db-manufacture-evaluation

供应商采购评价列表查询：供应商详情页「采购评价」Tab 的分页列表查询：按供应商ID查询该供应商的采购评价记录（评价星级、评价内容、评价人、评价时间、关联采购单号），支持分页；返回评价行列表及总数/总页数，前端用 art-template (contentTemplate8) 渲染并用 pagination 翻页。

## 用法

```bash
mbs scm erp-manufacture-find-db-manufacture-evaluation --manufactureId <string> [--currentPage <number>] [--pageSize <number>]
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/manufactureExtendController/findDbManufactureEvaluation`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `manufactureId` | manufactureId | body | string | 是 | - | 供应商ID，取自 URL 查询参数 sequenceid（GetQueryString('sequenceid')），来源：页面地址栏 |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码，仅分页翻页时提交，取自分页控件 api.getCurrent()；首屏不传（用后端默认） |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数，分页回调中固定传 20；首屏不传（用后端默认） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（同服务其他接口统一约定） | - |
| `desc` | string | 响应提示信息（同服务其他接口统一约定） | - |
| `obj` | object | 业务数据对象（分页结果） | - |
| `obj.rows[]` | array | 采购评价记录列表 | - |
| `obj.rows[][0]` | number | 评价星级。枚举 0~5：0=无星(全空心);1=1星;2=2星;3=3星;4=4星;5=5星（前端按值点亮对应数量星标） | - |
| `obj.rows[][1]` | string | 评价内容（作为采购单查看链接文本展示） | - |
| `obj.rows[][2]` | string | 关联采购单号（拼接到采购单查看链接 groupid 参数） | - |
| `obj.rows[][3]` | string | 评价人（创建人） | - |
| `obj.rows[][4]` | string | 评价时间 | - |
| `obj.total` | number | 满足条件的评价总记录数（写入 #total8） | - |
| `obj.totalPages` | number | 总页数（传入 findTaskReport2 初始化分页） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
