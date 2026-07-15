<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-spu-import

查看导入商品记录：查看导入商品记录

## 用法

```bash
mbs pim instudio-pms-find-spu-import [--id <integer>] [--fileNameSrc <string>] [--fileNameNew <string>] [--status <integer>] [--url1 <string>] [--url2 <string>] [--descr <string>] [--createBy <string>] [--createById <string>] [--createTime <string>] [--finishTime <string>] [--manageEmp <array<string>>] [--startIndex <integer>] [--pageSize <integer>] [--currentPage <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/spu/findSpuImport`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `fileNameSrc` | fileNameSrc | body | string | 否 | - | 上传源文件名 |
| `fileNameNew` | fileNameNew | body | string | 否 | - | 上传后文件名 |
| `status` | status | body | integer | 否 | - | 0:未导入1:导入中未解析2:导入中已解析3:部分成功4:导入成功5:导入失败 |
| `url1` | url1 | body | string | 否 | - | linux路径 |
| `url2` | url2 | body | string | 否 | - | 页面路径 |
| `descr` | descr | body | string | 否 | - | 描述（字段名推断,语义待核实） |
| `createBy` | createBy | body | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `createById` | createById | body | string | 否 | - | 创建人ID（字段名推断,语义待核实） |
| `createTime` | createTime | body | string | 否 | - | 创建时间（字段名推断,语义待核实） |
| `finishTime` | finishTime | body | string | 否 | - | 完成时间（字段名推断,语义待核实） |
| `manageEmp` | manageEmp | body | array<string> | 否 | - | 管理EMP（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
