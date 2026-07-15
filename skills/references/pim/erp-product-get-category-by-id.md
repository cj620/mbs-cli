<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-category-by-id

根据ID查询商品类目详情：商品类目管理页点击「修改」时，按类目主键(sequenceid)查询单个类目的详情，用于回显到「修改类目」弹窗（类目名称、英文名称、描述、报关编码、SPU开头规则、负责经理/负责人、级别等）。

## 用法

```bash
mbs pim erp-product-get-category-by-id --categoryId <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/categoryController/getCategoryById`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryId` | categoryId | body | string | 是 | - | 类目主键ID，取自所点击表格行的 sequenceid（query string 参数，拼接在 URL ?categoryId= 之后） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 类目详情数据对象 | - |
| `obj.sequenceid` | string | 类目主键ID（序号ID） | - |
| `obj.name` | string | 类目名称（弹窗只读展示） | - |
| `obj.englishname` | string | 英文名称（弹窗可编辑文本域） | - |
| `obj.descr` | string | 类目描述（弹窗可编辑文本域） | - |
| `obj.levelnum` | number | 类目级别。1=一级;2=二级;3=三级;4=四级（前端 getlevel() 转中文；=2 时负责经理/负责人为可编辑下拉，否则只读） | - |
| `obj.customscode` | string | 报关编码（弹窗可编辑输入框） | - |
| `obj.spurule` | string | SPU开头规则（仅一级类目展示/可编辑） | - |
| `obj.catLeaderList[]` | array | 负责经理列表（字符串数组；level=2 为多选下拉，否则以逗号 join 只读展示） | - |
| `obj.catManagerList[]` | array | 负责人列表（字符串数组；level=2 为多选下拉，否则以逗号 join 只读展示） | - |
| `obj.parentcategoryname` | string | 父类目名称 | - |
| `obj.filed4` | string | 预留字段4（前端回显进 updateData.filed4，页面未直接展示，具体业务含义待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
