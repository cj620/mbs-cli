<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-page-spu

图片转文本侵权检测SPU分页查询：按SPU/图片链接/文本/类目/侵权词/钓鱼词/开发员/美工/审核员/查询时间区间等条件，分页查询图片转文本侵权/钓鱼词检测结果列表，返回每条SPU的图片、文本、类目、侵权词、钓鱼词、相关人员及检测时间。

## 用法

```bash
mbs pim erp-product-page-spu [--spu <array>] [--imageUrl <array>] [--text <string>] [--category1 <string>] [--category2 <string>] [--category3 <string>] [--category4 <string>] [--tortWord <string>] [--fishingWord <string>] [--isWord <string>] [--toTextStartDate <string>] [--toTextEndDate <string>] [--isTortWord <number>] [--isFishingWord <number>] [--total <number>] [--currentPage <number>] [--pageSize <number>] [--developer <string>] [--artists <string>] [--auditor <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/image-to-text/spu/page`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | array | 否 | - | SPU编号列表(输入框按空格 split；空则传 []) |
| `imageUrl` | imageUrl | body | array | 否 | - | 图片链接列表(输入框按空格 split；空则传 []) |
| `text` | text | body | string | 否 | - | 文本(按文本内容检索) |
| `category1` | category1 | body | string | 否 | - | 一级类目名(类目级联 levelname1) |
| `category2` | category2 | body | string | 否 | - | 二级类目名(类目级联 levelname2) |
| `category3` | category3 | body | string | 否 | - | 三级类目名(类目级联 levelname3) |
| `category4` | category4 | body | string | 否 | - | 四级类目名(类目级联 levelname4；levelnum==4 时取类目 name) |
| `tortWord` | tortWord | body | string | 否 | - | 侵权词 |
| `fishingWord` | fishingWord | body | string | 否 | - | 钓鱼词 |
| `isWord` | isWord | body | string | 否 | - | 是否含词标记(初始 ''，无直接控件)(待人工确认) |
| `toTextStartDate` | toTextStartDate | body | string | 否 | - | 查询(转文本)时间-起始(timmer[0]，YYYY-MM-DD) |
| `toTextEndDate` | toTextEndDate | body | string | 否 | - | 查询(转文本)时间-结束(timmer[1]，YYYY-MM-DD) |
| `isTortWord` | isTortWord | body | number | 否 | - | 是否含有侵权词(0=否,1=是；初始 null) |
| `isFishingWord` | isFishingWord | body | number | 否 | - | 是否含有钓鱼词(0=否,1=是；默认 1) |
| `total` | total | body | number | 否 | - | 分页总数(来自 page 对象，初始 0) |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码(默认 1) |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数(固定 100) |
| `developer` | developer | body | string | 否 | - | 开发员(下拉选择) |
| `artists` | artists | body | string | 否 | - | 美工(下拉选择) |
| `auditor` | auditor | body | string | 否 | - | 审核员(下拉选择) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | string | 响应状态码 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的总条数(赋给 page.total) | - |
| `obj.page` | number | 当前页/页码 | - |
| `obj.result[]` | array | 检测结果列表(赋给 tabledata) | - |
| `obj.result[][0]` | string | 商品SPU编号(链接至 /Setupspu?spu=) | - |
| `obj.result[][1]` | string | 图片链接(预览图与文本链接) | - |
| `obj.result[][2]` | string | 文本内容(表格"文本"列 prop=content) | - |
| `obj.result[][3]` | string | 文本(接口 rows 定义字段) | - |
| `obj.result[][4]` | string | 一级类目 | - |
| `obj.result[][5]` | string | 二级类目 | - |
| `obj.result[][6]` | string | 三级类目 | - |
| `obj.result[][7]` | string | 四级类目(表格"类目"列) | - |
| `obj.result[][8]` | string | 侵权词(表格"侵权词"列) | - |
| `obj.result[][9]` | string | 钓鱼词(表格"钓鱼词"列) | - |
| `obj.result[][10]` | string | 是否含词标记(接口 rows 定义字段)(含义待人工确认) | - |
| `obj.result[][11]` | number | 状态(接口 rows 定义字段)(枚举含义待人工确认) | - |
| `obj.result[][12]` | string | 开发员(表格"开发员"列) | - |
| `obj.result[][13]` | string | 美工(表格"美工"列) | - |
| `obj.result[][14]` | string | 审核员(表格"审核员"列) | - |
| `obj.result[][15]` | number | 转文本(查询)时间(时间戳，前端格式化为 YYYY-MM-DD HH:mm:ss) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
