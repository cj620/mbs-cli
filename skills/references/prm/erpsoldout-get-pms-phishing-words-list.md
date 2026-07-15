<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-get-pms-phishing-words-list

钓鱼词库列表查询：钓鱼词库（侵权钓鱼词）分页列表查询：支持按钓鱼词、平台、提交人、审核人、大类、审核状态等条件分页过滤，返回钓鱼词记录列表（含平台/站点/替换词/筛选规则/创建更新删除轨迹/审核状态/操作日志）及总条数。

## 用法

```bash
mbs prm erpsoldout-get-pms-phishing-words-list [--phishingWord <string>] [--platformId <string>] --currentPage <number> --pageSize <number> [--submitBy <string>] [--categoryName <string>] [--checkBy <string>] [--phishingStatus <number>]
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/getPmsPhishingWordsList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `phishingWord` | phishingWord | body | string | 否 | - | 钓鱼词（来源：顶部「请输入钓鱼词」输入框 Searchoption.phishingWord） |
| `platformId` | platformId | body | string | 否 | - | 平台ID（来源：「请选择平台」下拉单选，值取 item.PLATFORMID） |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（由 getData(index)/分页器传入，默认 1；unproxy 内赋值为 index） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（来源：分页器 page-size，可选 50/100/150/200，默认 50） |
| `submitBy` | submitBy | body | string | 否 | - | 提交人（来源：「请选择提交人」下拉单选，选项来自 findPhishingWordsCreater） |
| `categoryName` | categoryName | body | string | 否 | - | 大类名称（来源：「请选择大类」下拉单选，值取一级分类 item.name） |
| `checkBy` | checkBy | body | string | 否 | - | 审核人（来源：「请输入审核人」输入框） |
| `phishingStatus` | phishingStatus | body | number | 否 | - | 审核状态（来源：「请选择状态」下拉，默认 null）。枚举：-1=已停用;0=待审核;1=审核通过;2=审核不通过 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `rows[]` | array | 钓鱼词记录列表 | - |
| `rows[][0]` | string | 记录编号（列「编号」，用于编辑/激活/停用/审核/日志等操作主键） | - |
| `rows[][1]` | string | 钓鱼词（车标词 isCarLogo==1 时红色展示） | - |
| `rows[][2]` | number | 是否车标词。1=是;0=否 | - |
| `rows[][3]` | number | 是否判断for。1=是;0=否 | - |
| `rows[][4]` | string | 替换词 | - |
| `rows[][5]` | string | 平台名称 | - |
| `rows[][6]` | string | 站点（多个逗号拼接字符串） | - |
| `rows[][7]` | string | 描述（前端将其中 http(s) 链接渲染为可点击 <a>） | - |
| `rows[][8]` | string | 筛选规则-大类（有值时展示「大类:xxx」） | - |
| `rows[][9]` | string | 筛选规则-包含词（有值时展示「包含词:xxx」） | - |
| `rows[][10]` | string | 创建时间（列「创建/更新/删除」，无值显示「无」） | - |
| `rows[][11]` | string | 创建人（有值时以括号附于创建时间后） | - |
| `rows[][12]` | string | 更新时间 | - |
| `rows[][13]` | string | 更新人 | - |
| `rows[][14]` | string | 删除时间 | - |
| `rows[][15]` | string | 删除人 | - |
| `rows[][16]` | number | 审核/生成状态。-1=停用;0=待审核;1=审核通过;2=审核失败;3=生成完毕 | - |
| `rows[][17]` | string | 审核人 | - |
| `rows[][18]` | string | 最新一条操作日志（「获取更多」可拉取历史日志列表） | - |
| `total` | number | 满足条件的记录总数（用于分页器 total） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
