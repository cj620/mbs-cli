# mbs scm erp-manufacture-get-manufacture-risk-assess

供应商风险评估列表查询：供应商风险评估页面分页列表查询：通过 assessStatus 区分“待评估供应商”与“历史评估供应商”两个 Tab，keyword 在两个 Tab 下含义不同（待评估=是否仅看需进一步检查；历史=通过/未通过），返回供应商基础信息、评估内容与评估结果汇总，前端用 art-template 模板渲染列表卡片。

## 用法

```bash
mbs scm erp-manufacture-get-manufacture-risk-assess --pageSize <number> --page <number> --assessStatus <string> [--keyword <string>]
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/manufactureExtendController/getManufactureRiskAssess`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `pageSize` | pageSize | query | number | 是 | - | 每页条数。来源控件：#mangPage（经 Number 转换）。枚举：50/100/200。单位：条/页 |
| `page` | page | query | number | 是 | - | 当前页码，固定从1开始；翻页取自分页控件 api.getCurrent() |
| `assessStatus` | assessStatus | query | string | 是 | - | 评估状态(区分Tab)。0=待评估供应商(search固定'0');1=历史评估供应商(search1固定'1') |
| `keyword` | keyword | query | string | 否 | - | 关键词/筛选标记,含义随Tab不同：待评估Tab(复选框.getstep)1=仅看需进一步检查/空=全部;历史评估Tab(单选goot)1=通过/0=未通过。默认空串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准响应外层字段,本接口回调未直接使用)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应外层字段,本接口回调未直接使用)(待人工确认) | - |
| `obj` | object | 业务数据对象(data.obj) | - |
| `obj.count` | number | 满足条件的供应商总条数(前端写入 #total/#total2) | - |
| `obj.countPage` | number | 总页数(前端传入分页组件 pageCount) | - |
| `obj.result[]` | array | 供应商风险评估列表(data.obj.result) | - |
| `obj.result[][0]` | string | 供应商图片URL(模板img src,失败回退默认图) | - |
| `obj.result[][1]` | string | 供应商ID(跳转 supplierInfo.html?sequenceid=,审批回传) | - |
| `obj.result[][2]` | string | 供应商名称(模板标题,审批回传 name) | - |
| `obj.result[][3]` | string | 是否账期供应商。1=账期供应商(模板 if v.filed9==1 显示账期供应商) | - |
| `obj.result[][4]` | string | 经营/业务模式(模板标签展示) | - |
| `obj.result[][5]` | string | 联系人 | - |
| `obj.result[][6]` | string | 联系电话 | - |
| `obj.result[][7]` | string | 评估内容(HTML文本,模板 {{@ v.content}} 原文输出不转义) | - |
| `obj.result[][8]` | string | 评估记录序号ID(审批/进一步检查/转发评估回传) | - |
| `obj.result[][9]` | string | 是否需要进一步检查。1=需要进一步检查(模板 if==1 显示标记) | - |
| `obj.result[][10]` | string | 转发评估提示字符串(存在时展示) | - |
| `obj.result[][11]` | string | 创建时间(模板 创建时间{{v.operTime}}) | - |
| `obj.result[][12]` | string | 评估说明/描述(历史评估模板) | - |
| `obj.result[][13]` | string | 评估状态(历史评估)。1=通过;0=未通过 | - |
| `obj.result[][14]` | string | 评估日期(历史评估模板) | - |
| `obj.result[][15]` | string | 评估人(历史评估模板) | - |
| `obj.result[][16]` | string | 转发评估人(历史评估模板 需要进一步审查) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
