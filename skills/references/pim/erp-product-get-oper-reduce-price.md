# mbs pim erp-product-get-oper-reduce-price

降本英雄榜(开发员降本汇总查询)：降本排行榜页「降本英雄榜」标签的数据查询：按时间区间统计各开发员(或采购组)在该期间内的降本明细，返回动态列头(title)与对应数据行(list)，前端以表头字段名 name 动态从每行取值渲染等级榜单。

## 用法

```bash
mbs pim erp-product-get-oper-reduce-price --page <number> [--startTime <string>] [--endTime <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productExtend/getOperReducePrice`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码，固定传 1（该页签无分页控件） |
| `startTime` | startTime | body | string | 否 | - | 统计开始时间，来源日期控件 #startTime (input type=date，格式 yyyy-MM-dd) |
| `endTime` | endTime | body | string | 否 | - | 统计结束时间，来源日期控件 #endTime (input type=date，格式 yyyy-MM-dd) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（标准外层包装，前端未直接读取） | - |
| `desc` | string | 响应提示信息（标准外层包装，前端未直接读取） | - |
| `obj` | object | 业务数据对象（模板 {{if obj}} 判空） | - |
| `obj.title[]` | array | 动态列头定义数组，决定表格每一列（含「等级」之外的各列） | - |
| `obj.title[][0]` | string | 列字段名（键名，用于从 list 行对象 listItem[name] 取值），模板 data-prop="{{value.name}}" | - |
| `obj.title[][1]` | string | 列显示名称（表头展示文案 {{value.value}}） | - |
| `obj.list[]` | array | 降本英雄榜数据行列表，渲染时序号=index+1 | - |
| `obj.list[]` | unknown | 每行按 title[].name 动态取值的列值（listItem[key.name]），具体键名集合由 title 决定，非固定字段名 (待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
