# mbs prm erpsoldout-get-pms-infringed-words

侵权词库分页查询：侵权词库列表分页查询：按侵权词、平台、提交人筛选，分页返回侵权词记录列表（含替换词、平台、描述、提交记录、站点、筛选规则等）及总条数，供侵权词库页面表格展示。

## 用法

```bash
mbs prm erpsoldout-get-pms-infringed-words [--infringedWord <string>] [--platformId <string>] [--currentPage <number>] [--pageSize <number>] [--submitBy <string>]
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/getPmsInfringedWords`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `infringedWord` | infringedWord | body | string | 否 | - | 侵权词（搜索关键词），来源 el-input「请输入侵权词」，默认空串 |
| `platformId` | platformId | body | string | 否 | - | 平台ID，来源 el-select「请选择平台」，取值为 PLATFORMID（标签显示 PLATFORMNAME），默认空串 |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码，由 getData(index=1) 入参覆盖（默认1），翻页时由 el-pagination current-change 传入 |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数，来源 el-pagination，可选 50/100/150/200，默认 50 |
| `submitBy` | submitBy | body | string | 否 | - | 提交人（员工姓名），来源 el-select「请选择提交人」，取值与标签均为 employeeName，默认空串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `rows[]` | array | 侵权词记录列表（表格数据源 tableBody.rows） | - |
| `rows[][0]` | string | 编号（记录ID，列「编号」展示 row.id） | - |
| `rows[][1]` | string | 侵权词（列「侵权词」展示 row.infringedWord） | - |
| `rows[][2]` | string | 替换词（列「替换词」展示 row.replaceWord） | - |
| `rows[][3]` | string | 平台名称（列「平台」展示 row.platformName） | - |
| `rows[][4]` | string | 描述（列「描述」展示 row.description） | - |
| `rows[][5][]` | array | 提交记录列表（列「提交记录」v-for 逐条展示，元素为字符串） | - |
| `rows[][6]` | string | 站点（列「站点」展示 row.sites） | - |
| `rows[][7]` | string | 侵权词大类（列「筛选规则」中 v-if 存在时展示「大类:…」） | - |
| `rows[][8]` | string | 侵权词包含词（列「筛选规则」中 v-if 存在时展示「包含词:…」） | - |
| `total` | number | 满足条件的记录总数（分页 :total，用于计算总页数） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
