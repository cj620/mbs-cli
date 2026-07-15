# mbs oms erp-order-get-big-chief3

大酋长(销售主管/Leader)列表查询：根据员工类型获取“大酋长”(销售主管/Leader)列表，用于页面顶部“请选择大酋长”下拉选择框(ySelect)的选项渲染；返回 id/name 列表供后续按 Leader 查询组员等使用。

## 用法

```bash
mbs oms erp-order-get-big-chief3 --employeeType <string> [--platformIds <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getBigChief3`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 是 | - | 员工类型，固定传 '2'(标识查询大酋长/销售主管 Leader 类型)。枚举：2=大酋长(销售主管)。来源：代码硬编码 |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID集合，前端固定传空数组 [](按平台过滤，当前未传值)。元素类型 string/number(待人工确认)。来源：代码硬编码 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(待人工确认,源码未直接读取) | - |
| `desc` | string | 响应提示信息(待人工确认,源码未直接读取) | - |
| `obj[]` | array | 大酋长(销售主管/Leader)列表，前端取 data.obj 渲染下拉选项 | - |
| `obj[][0]` | string | 大酋长ID，作为下拉选项 <option> 的 value(后续按 Leader 查询组员使用) | - |
| `obj[][1]` | string | 大酋长姓名，作为下拉选项显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
