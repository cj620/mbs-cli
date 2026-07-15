<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-shopmanager

店铺负责人(店长)下拉查询：爆款 listing 页面初始化时拉取店铺负责人(店长)下拉选项数据，用于店铺负责人筛选控件(#saleLeader)的选项渲染。该调用为无参的空 POST，后端返回全部可选店铺负责人列表。

## 用法

```bash
mbs pim erp-product-find-shopmanager
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/listingController/findShopmanager`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(系统统一包装) | - |
| `desc` | string | 响应提示信息(系统统一包装) | - |
| `obj[]` | array | 店铺负责人(店长)下拉列表 | - |
| `obj[][0]` | string | 店铺负责人(店长)姓名,作为下拉option显示文本/取值(#saleLeader选中值回填findListing的shopPrincipal参数) | - |
| `obj[][1]` | string | 店铺负责人记录ID(待人工确认:列表项主键,模板contentTemplate3缺失无法核实) | - |
| `obj[][2]` | number | 序号ID(待人工确认:与同页findPlatform下拉项一致的序号字段,模板缺失无法核实) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
