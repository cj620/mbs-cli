# mbs fars erpaccount-find-logistics-provider-name-all

物流商(物流渠道)名称分页查询：按物流商名称(模糊)查询物流渠道(物流商)列表：用于货运详情/物流时效监控页头部物流渠道下拉数据加载(不分页)，以及运营商及马帮渠道配置弹窗的分页列表(含分页与总数)。返回物流渠道行(渠道ID、物流商名称、物流商编码、是否国外、51Express渠道ID等)。

## 用法

```bash
mbs fars erpaccount-find-logistics-provider-name-all --logisticsProviderName <string> [--page <number>] [--pageSize <number>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/logisticsController/findLogisticsProviderNameAll`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `logisticsProviderName` | logisticsProviderName | body | string | 是 | - | 物流商(物流渠道)名称，模糊查询关键词(下拉全量加载时为空串) |
| `page` | page | body | number | 否 | - | 当前页码(从1开始)，仅配置弹窗分页查询传 |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数(配置弹窗固定50)，仅配置弹窗分页查询传 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的总记录数 | - |
| `obj.result[]` | array | 物流渠道(物流商)列表 | - |
| `obj.result[][0]` | string | 物流渠道ID(下拉选项key/value，选中后作为查询条件) | - |
| `obj.result[][1]` | string | 物流商(物流渠道)名称(下拉选项label) | - |
| `obj.result[][2]` | string | 渠道记录ID(changestate 作 listIds) | - |
| `obj.result[][3]` | number | 是否国外渠道(0/1，changestate 取反更新) | - |
| `obj.result[][4]` | string | 物流商编码 | - |
| `obj.result[][5]` | string | 物流商名称(编码对应名称) | - |
| `obj.result[][6]` | string | 51Express 渠道关联ID | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
