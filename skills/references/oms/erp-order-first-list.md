<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-first-list

SeeBee平台开发报表-店铺首层列表查询：SeeBee平台开发报表首层数据查询：按开始/结束时间筛选，返回店长(店铺管理者)维度的店铺汇总报表行，含订单量、订单销售额、发货毛利额、新品/老品出单量与销售额、总产品数、爆B以上产品数及爆款率(均含搜索时间范围内与不受时间限制两套口径)。

## 用法

```bash
mbs oms erp-order-first-list --beginTime <string> --endTime <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/seebeeDevelopmentShop/firstList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `beginTime` | beginTime | body | string | 是 | - | 开始时间(日期,格式 yyyy-MM-dd)。来源控件 #startTime(type=date)。前端会校验开始时间不能大于结束时间 |
| `endTime` | endTime | body | string | 是 | - | 结束时间(日期,格式 yyyy-MM-dd)。来源控件 #endTime(type=date) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 业务数据数组(店铺/店长维度首层汇总行列表),前端取 res.obj 作为 list 渲染 | - |
| `obj[][0]` | string | 店铺ID(渲染至行 data-id) | - |
| `obj[][1]` | string | 店长(店铺管理者,姓名)。渲染至行 data-name,并作为展开子表 secondList 的 shopManager 参数 | - |
| `obj[][2]` | string | 店铺名称 | - |
| `obj[][3]` | number | 店铺类型(渲染至行 data-status)。0=自建;其他(非0)=继承。作为 secondList 的 status 参数 | - |
| `obj[][4]` | number | 订单量 | - |
| `obj[][5]` | number | 订单销售额 | - |
| `obj[][6]` | number | 发货毛利额 | - |
| `obj[][7]` | number | 新品出单量 | - |
| `obj[][8]` | number | 新品销售额 | - |
| `obj[][9]` | number | 老品出单量 | - |
| `obj[][10]` | number | 老品销售额 | - |
| `obj[][11]` | number | 总产品数(搜索时间范围内) | - |
| `obj[][12]` | number | 总产品数(不受时间限制) | - |
| `obj[][13]` | number | 爆B以上产品数(搜索时间范围内) | - |
| `obj[][14]` | number | 爆B以上产品数(不受时间限制) | - |
| `obj[][15]` | number | 爆款率(爆B以上,搜索时间范围内,单位%;为 null 时前端展示"--") | - |
| `obj[][16]` | number | 爆款率(爆B以上,不受时间限制,单位%;为 null 时前端展示"--") | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
