<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-getmanufacture-level

供应商等级分配概况查询：按月份(date)查询供应商等级分配概况：返回横向表头(xData，各列名称)与按等级分组的行数据(levelData)，每个等级下含各列单元格数值(chiefData)，前端用 art-template 渲染为「等级 × 列」的二维统计表格。

## 用法

```bash
mbs scm erp-manufacture-getmanufacture-level --date <string>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/manufactureExtendController/getmanufactureLevel`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `date` | date | query | string | 是 | - | 查询月份，格式 YYYY-MM。来源控件 <select id="dateTime">，页面加载时由 getTody(new Date()) 取当前年月默认选中；下拉硬编码枚举 2019-12/2019-11/2019-10/2019-09，onchange 触发 search()。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `xData[]` | array | 横向表头数据(字符串数组)，每个元素渲染为一列表头 <th>{{value}}</th>(各列名称，如主管/负责人)。 | - |
| `levelData[]` | array | 等级行数据列表，每个元素为一个等级行。 | - |
| `levelData[][0]` | string | 等级名称，渲染为行首单元格 <td>{{item.name}}</td>(等级)。 | - |
| `levelData[][1][]` | array | 该等级对应各列的单元格数据列表，逐列渲染 <td>。 | - |
| `levelData[][1][]` | string | 单元格数据值，渲染为 <td>{{v.chiefData}}</td>(该等级在该列的数量/统计值)。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
