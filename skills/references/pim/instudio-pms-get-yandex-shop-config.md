<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-yandex-shop-config

yandex店铺配置列表：yandex店铺配置列表

## 用法

```bash
mbs pim instudio-pms-get-yandex-shop-config [--pageSize <integer>] [--currentPage <integer>] [--startIndex <integer>] [--exportFlag <integer>] [--teamManger <array<string>>] [--directorList <array<integer>>] [--managerList <array<integer>>] [--shopManagerList <array<integer>>] [--siteList <array<string>>] [--shopNameList <array<string>>] [--autoPublishFlag <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/yandexPublish/getYandexShopConfig`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `exportFlag` | exportFlag | body | integer | 否 | - | 导出标志（字段名推断,语义待核实） |
| `teamManger` | teamManger | body | array<string> | 否 | - | 团队Manger（字段名推断,语义待核实） |
| `directorList` | directorList | body | array<integer> | 否 | - | 总监 |
| `managerList` | managerList | body | array<integer> | 否 | - | 经理 |
| `shopManagerList` | shopManagerList | body | array<integer> | 否 | - | 店长 |
| `siteList` | siteList | body | array<string> | 否 | - | 站点 |
| `shopNameList` | shopNameList | body | array<string> | 否 | - | 店铺 |
| `autoPublishFlag` | autoPublishFlag | body | integer | 否 | - | 自动刊登标志（字段名推断,语义待核实） |

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
