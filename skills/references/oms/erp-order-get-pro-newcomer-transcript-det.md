<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-pro-newcomer-transcript-det

新人成绩单-产品开发明细查询：新人成绩单详情页第二块数据查询：按员工姓名查询其各接手时间段(平均/0-15天…61-75天)的产品开发量、营销率、销量及增长、以及各时间节点(第0/30/60/75天)的SPU爆款/旺款/平款/滞款占比、供应商占比、侵权误导处罚、降本数量等明细，前端用 contentTemplate3~6 渲染 4 张明细表。

## 用法

```bash
mbs oms erp-order-get-pro-newcomer-transcript-det --employeeName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getProNewcomerTranscriptDet`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | body | string | 是 | - | 员工姓名(新人姓名)。来源：浏览器 URL 查询参数 employeeName，经 decodeURI 解码后提交 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 新人产品开发明细列表(直接为数组，前端 var list = data.obj) | - |
| `obj[][0]` | number | 接手时间段类型(模板3行)。1=平均(接手前15天);2=0-15天;3=16-30天;4=31-45天;5=46-60天;6=61-75天 | - |
| `obj[][1]` | string | 主管类目 | - |
| `obj[][2]` | number | SPU开发数量 | - |
| `obj[][3]` | number | 营销率(%，前端有值时拼接%展示) | - |
| `obj[][4]` | number | 百分营销率/百款营销率(%，前端有值时拼接%展示) | - |
| `obj[][5]` | number | 自建产品销量 | - |
| `obj[][6]` | number | 新品销量增长(量) | - |
| `obj[][7]` | number | 新品销量增长率 | - |
| `obj[][8]` | number | 销量(销售件数) | - |
| `obj[][9]` | number | 日均销量 | - |
| `obj[][10]` | number | 自建销量占比(%，前端拼接%展示) | - |
| `obj[][11]` | number | 发货毛利率(%，前端拼接%展示) | - |
| `obj[][12]` | number | 时间节点类型(模板4/5/6行，非0时渲染)。1=第0天;2=第30天;3=第60天;4=第75天 | - |
| `obj[][13]` | number | 当前(该时间节点)开发SPU数 | - |
| `obj[][14]` | number | 超爆占比(%，非0时拼接%展示) | - |
| `obj[][15]` | number | 爆A占比(%，非0时拼接%展示) | - |
| `obj[][16]` | number | 爆B占比(%，非0时拼接%展示) | - |
| `obj[][17]` | number | 旺A占比(%，非0时拼接%展示) | - |
| `obj[][18]` | number | 旺B占比(%，非0时拼接%展示) | - |
| `obj[][19]` | number | 平A占比(%，非0时拼接%展示) | - |
| `obj[][20]` | number | 平B占比(%，非0时拼接%展示) | - |
| `obj[][21]` | number | 滞A占比(%，非0时拼接%展示) | - |
| `obj[][22]` | number | 滞B占比(%，非0时拼接%展示) | - |
| `obj[][23]` | number | 清仓停产占比(非0时展示，前端未拼%) | - |
| `obj[][24]` | number | 侵权处罚数量 | - |
| `obj[][25]` | number | 误导处罚数量 | - |
| `obj[][26]` | number | 供应商数量(模板5) | - |
| `obj[][27]` | number | 爆款供应商占比(%，非0时拼接%展示) | - |
| `obj[][28]` | number | 旺款供应商占比(%，非0时拼接%展示) | - |
| `obj[][29]` | number | 平款供应商占比(%，非0时拼接%展示；模板5中占两列重复展示) | - |
| `obj[][30]` | number | 全公司降本数量(模板6) | - |
| `obj[][31]` | number | 个人降本数量(模板6) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
