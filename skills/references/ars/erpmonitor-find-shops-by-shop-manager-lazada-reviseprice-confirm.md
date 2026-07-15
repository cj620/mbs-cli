<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-find-shops-by-shop-manager-lazada-reviseprice-confirm

按店铺负责人查询店铺(findShopsByShopManager)：Lazada商品提价确认页“生成提价商品信息”弹窗中，选择店铺负责人后联动触发：根据所选店铺负责人(可多选,逗号拼接)查询其名下的店铺列表，用于渲染“店铺”下拉框(ySelect)供选择。

## 用法

```bash
mbs ars erpmonitor-find-shops-by-shop-manager-lazada-reviseprice-confirm [--shopManager <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/lazadaRevisepriceConfirm/findShopsByShopManager`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopManager` | shopManager | body | string | 否 | - | 店铺负责人(多选逗号拼接)。取自 #shopManagerSelect 选中值 .val().join()，值为各负责人 employee_name 用逗号拼接；选项来源 getTeamMemberByLeader。来源控件：#shopManagerSelect。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端据 code==200 判定) | - |
| `obj[]` | array | 店铺列表(按店铺负责人查询到的店铺集合，用于渲染店铺下拉) | - |
| `obj[]` | string | 店铺名称(模板 #shopSelectList 中作为 option 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
