<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-all-must-publish-spu

获取全部必刊登SPU(导出用)：按处理状态、店铺、平台、年月、类目、刊登人等筛选条件，查询满足条件的全部「必刊登SPU」编号集合。前端在商品导出页加载时调用，把返回的SPU编号列表逗号拼接后写入导出条件(spuStr)，实现按当前筛选条件批量选取SPU导出。

## 用法

```bash
mbs pim erp-product-get-all-must-publish-spu [--status <string>] [--shopId <string>] [--platform <string>] [--yearMonth <string>] [--categoryName <string>] [--oper <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/stockProduct/getAllMustPublishSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | string | 否 | - | 必刊登处理状态。1=待刊登(必刊登);2=不刊登;3=已完成(来源 URL status / 看板 #handle 下拉) |
| `shopId` | shopId | body | string | 否 | - | 店铺ID(来源 URL shopId / 看板 #shopnams) |
| `platform` | platform | body | string | 否 | - | 平台ID(来源 URL platform / 看板 #platformes 平台下拉) |
| `yearMonth` | yearMonth | body | string | 否 | - | 年月(格式如 yyyy-MM,来源 URL yearMonth / 看板 #yearMonth 时间下拉) |
| `categoryName` | categoryName | body | string | 否 | - | 类目名称(已 decodeURI 解码,来源 URL categoryName / 看板 #categorySelect) |
| `oper` | oper | body | string | 否 | - | 刊登人/开发员(已 decodeURI 解码,来源 URL oper / 看板 #thePost) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一信封字段) | - |
| `desc` | string | 响应提示信息(统一信封字段) | - |
| `obj[]` | array | 满足筛选条件的全部必刊登SPU编号列表(前端遍历后逗号拼接为导出 spuStr) | - |
| `obj[]` | string | 数组元素:单个SPU编号字符串(前端直接 push 入数组并 join 拼接) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
