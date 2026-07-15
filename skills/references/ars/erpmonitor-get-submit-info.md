# mbs ars erpmonitor-get-submit-info

TikTok提价-提交任务信息列表查询：TikTok提价确认页“查看任务信息”弹窗的分页查询：按当前页/每页条数分页拉取提价找源提交任务列表，返回任务的店铺/站点/ItemID/SKU/销量区间/毛利与费率/算价渠道/任务状态/创建人时间及执行详情内容。

## 用法

```bash
mbs ars erpmonitor-get-submit-info --currPage <number> --pageSize <number>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/getSubmitInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | body | number | 是 | - | 当前页码(从1开始,来源 pData.taskPage) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(固定为10) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 请求是否成功(true=成功进入渲染,false=alert(desc)) | - |
| `desc` | string | 提示信息(失败时弹出) | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.toatalCount` | number | 满足条件的任务总数(原文拼写 toatalCount,写入 #tasktotal) | - |
| `obj.totalPage` | number | 总页数(首页时用于初始化分页 taskInfoPage) | - |
| `obj.content[]` | array | 提交任务信息列表 | - |
| `obj.content[][0]` | string | 任务ID(主键,删除任务 deleteSubmit(id) 用) | - |
| `obj.content[][1]` | string | 店铺名称(超50字符截断展示) | - |
| `obj.content[][2]` | string | 站点(存在时展示,超50字符截断) | - |
| `obj.content[][3]` | string | 商品Item ID集合(超50字符截断) | - |
| `obj.content[][4]` | string | SKU | - |
| `obj.content[][5]` | number | 30天销量筛选-最小值 | - |
| `obj.content[][6]` | number | 30天销量筛选-最大值 | - |
| `obj.content[][7]` | string | 毛利筛选(30天毛利筛选值) | - |
| `obj.content[][8]` | string | 目标毛利率 | - |
| `obj.content[][9]` | string | 平台费率 | - |
| `obj.content[][10]` | string | 算价渠道 | - |
| `obj.content[][11]` | string | 任务状态。枚举:等待找源(可删除)/找源中/已经执行 | - |
| `obj.content[][12]` | string | 创建人 | - |
| `obj.content[][13]` | string | 创建时间 | - |
| `obj.content[][14]` | string | 任务执行详情内容(含</br>分隔的多行,前端拆分为数组取前6行 content[0]~content[5] 展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
