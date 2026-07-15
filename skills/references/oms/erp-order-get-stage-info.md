<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-stage-info

新人转正阶段考核信息查询：新人转正成绩单详情页中，按员工+阶段(第一阶段/第二阶段)+店铺查询该阶段考核指标：手动刊登量、订单量、店铺发货运营毛利率、月目标完成档位，结果回填到对应阶段表格行。

## 用法

```bash
mbs oms erp-order-get-stage-info --employeeName <string> --status <string> [--shopName <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getStageInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | body | string | 是 | - | 员工姓名(取自URL查询参数 employeeName，decodeURI 解码后传入) |
| `status` | status | body | string | 是 | - | 阶段标识。1=第一阶段(入职次个自然月);2=第二阶段(入职次次个自然月)；由 getStageInfo(status) 入参与下拉 onchange 决定 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(多选)。status=1 取 #shopSelect7_1、status=2 取 #shopSelect7_2 的选中值，多选逗号拼接；未选则传空字符串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(老项目通用字段) | - |
| `desc` | string | 响应提示信息(老项目通用字段) | - |
| `obj` | object | 业务数据对象(阶段考核指标)；前端以 if(data.obj) 判空 | - |
| `obj.publishNum` | number | 手动刊登量(写入表格"手动刊登量"列) | - |
| `obj.orderNum` | number | 订单量(写入表格"订单量"列) | - |
| `obj.profitRate` | string | 店铺发货运营毛利率(写入表格"店铺发货运营毛利率"列，含百分比字符串) | - |
| `obj.targetRank` | string | 月目标完成档位(写入表格"月目标完成档位"列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
