# mbs pim erp-product-get-emp-by-dep2

按部门获取员工列表(分配对象下拉)：采购下单/分配采购任务页面初始化时调用，按当前登录人所属部门返回可分配的员工(开发员)姓名列表，前端用 art-template 模板 contentTemplate3 遍历渲染成“分配对象”下拉框(#assignment)的 <option>，所选姓名后续作为 allocationPurchaseTask 的 oper 参数提交。

## 用法

```bash
mbs pim erp-product-get-emp-by-dep2
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/getEmpByDep2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 员工(开发员)姓名列表；模板 contentTemplate3 遍历渲染为“分配对象”下拉选项 | - |
| `obj[]` | string | 数组元素=员工姓名；作为 <option> 的 value 与显示文本，被选中后用于 allocationPurchaseTask 的 oper 参数 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
