<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-all-manager-platform

速卖通广告-按平台查询全部店长(店长下拉)：速卖通(SMT)广告花费看板顶部「请选择店长」下拉框的数据源。前端在页面 onMounted 时调用，按平台ID(固定 platformId=10)查询该平台下的全部店长名称列表，返回字符串数组直接填充店长下拉选项。

## 用法

```bash
mbs oms erp-order-find-all-manager-platform --platformId <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/eabyAdCampaignFee/findAllManagerPlatform`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | body | number | 是 | - | 平台ID。前端固定传 10（对应速卖通 SMT 平台，本页为 smt-spending 速卖通广告看板）；来源：代码硬编码常量，非用户控件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200/成功标识（标准响应包装字段，本页未显式读取）(待人工确认具体成功码) | - |
| `desc` | string | 响应提示信息（标准响应包装字段，本页未显式读取） | - |
| `obj[]` | array | 业务数据：当前平台下全部店长名称列表，元素为字符串 | - |
| `obj[]` | string | 店长名称（数组元素，前端直接作为店长下拉的 label 与 value） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
