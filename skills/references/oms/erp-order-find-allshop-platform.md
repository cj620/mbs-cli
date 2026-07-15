# mbs oms erp-order-find-allshop-platform

查询平台全部店铺（findAllshopPlatform）：SMT（速卖通）广告报表页初始化时调用，按平台ID查询该平台下的全部店铺列表，用于「请选择店铺」下拉框选项渲染。当前页面固定传 platformId=10。

## 用法

```bash
mbs oms erp-order-find-allshop-platform --platformId <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/eabyAdCampaignFee/findAllshopPlatform`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | body | number | 是 | - | 平台ID。SMT广告报表页固定传 10（速卖通/SMT 平台），用于过滤该平台下的店铺。来源：源码硬编码常量（非页面控件输入）。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码（项目统一包裹；本页未直接读取，待人工确认实际取值规则） | - |
| `desc` | string | 响应提示信息（本页未直接读取） | - |
| `obj[]` | array | 业务数据：该平台下的店铺列表（前端赋值给 option.shoplist，作为店铺下拉选项） | - |
| `obj[][0]` | number | 店铺ID（el-option 的 :key，唯一标识） | - |
| `obj[][1]` | string | 店铺名称（el-option 的 :label 与 :value，即下拉显示文本与选中值） | - |
| `obj[][2]` | string | 店长（店铺管理员，TS 类型声明中存在；本下拉未直接展示，待人工确认是否始终返回） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
