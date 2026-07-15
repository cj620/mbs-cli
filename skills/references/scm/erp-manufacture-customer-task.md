<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-customer-task

客户跟进线索(任务)详情查询：客户详情页跟进线索(跟进任务)数据获取接口。不传 id 时仅返回当前跟进人(createBy)与跟进时间(createDate)用于新增弹窗回填；传 id 时按跟进任务主键回查该条跟进线索完整内容用于编辑弹窗回填。

## 用法

```bash
mbs scm erp-manufacture-customer-task [--id <string>]
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/customer/customerTask`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | query | string | 否 | - | 跟进线索(跟进任务)主键ID(列表行 sequenceid)，经 URL query 传入；新增前置取数时不传 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应壳,本接口回调未显式判,待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应壳,待人工确认) | - |
| `obj` | object | 业务数据对象(单条跟进线索/前置取数对象) | - |
| `obj.sequenceid` | number | 跟进线索(任务)主键ID,编辑回填 #Editsequenceid(仅传 id 时返回) | - |
| `obj.createBy` | string | 跟进人(创建人),回填 #AddcreateBy/#EditcreateBy(两种调用均返回) | - |
| `obj.createDate` | string | 跟进时间(创建时间),回填 #AddcreateDate/#EditcreateDate(两种调用均返回) | - |
| `obj.content` | string | 跟进内容,编辑回填 #Editcontent(仅传 id 时返回) | - |
| `obj.nextPlan` | string | 下一步计划,编辑回填 #EditnextPlan(仅传 id 时返回) | - |
| `obj.status` | string | 跟进状态。枚举:持续跟进/客户取消结束/成功下单结束。编辑回填 #Editstatus(仅传 id 时返回) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
