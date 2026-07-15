<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-second-list

SeeBee平台开发-店铺下钻(二级)列表查询：SeeBee平台开发报表中，点击某店铺管理员(开发员)行展开后触发，按 店铺管理员+店铺状态+起止时间 查询该管理员名下各店铺的开发明细（订单量/销售额/毛利/新老品出单量与销售额/总产品数/爆B以上产品数/爆款率），返回明细列表渲染为子表格。

## 用法

```bash
mbs oms erp-order-second-list --shopManager <string> --status <string> --beginTime <string> --endTime <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/seebeeDevelopmentShop/secondList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopManager` | shopManager | body | string | 是 | - | 店铺管理员(开发员)姓名。来源：被点击展开行的 data-name(一级 v.shopManager) |
| `status` | status | body | string | 是 | - | 店铺状态。枚举：0=自建；1=继承。来源：被点击行 data-status |
| `beginTime` | beginTime | body | string | 是 | - | 开始时间(日期，格式 yyyy-MM-dd)。来源：日期控件 #startTime |
| `endTime` | endTime | body | string | 是 | - | 结束时间(日期，格式 yyyy-MM-dd)。来源：日期控件 #endTime |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 店铺明细列表（渲染为子表 nextList） | - |
| `obj[][0]` | string | 店铺ID(tr data-id) | - |
| `obj[][1]` | string | 店铺名称 | - |
| `obj[][2]` | string | 店铺管理员(开发员)，用于跳转 opennewwin2 传参 | - |
| `obj[][3]` | string | 店铺状态(0=自建/1=继承)，用于跳转 opennewwin2 传参 | - |
| `obj[][4]` | number | 订单量 | - |
| `obj[][5]` | number | 订单销售额 | - |
| `obj[][6]` | number | 发货毛利额 | - |
| `obj[][7]` | number | 新品出单量（点击跳转 opennewwin2 type=0） | - |
| `obj[][8]` | number | 新品销售额 | - |
| `obj[][9]` | number | 老品出单量 | - |
| `obj[][10]` | number | 老品销售额 | - |
| `obj[][11]` | number | 总产品数（搜索时间范围内） | - |
| `obj[][12]` | number | 总产品数（不受时间限制） | - |
| `obj[][13]` | number | 爆B以上产品数（搜索时间范围内，点击跳转 type=2） | - |
| `obj[][14]` | number | 爆B以上产品数（不受时间限制，点击跳转 type=1） | - |
| `obj[][15]` | number | 爆款率-爆B以上（搜索时间范围内，单位%；为 null 时展示“--”） | - |
| `obj[][16]` | number | 爆款率-爆B以上（不受时间限制，单位%；为 null 时展示“--”） | - |
| `content` | string | 下钻是否还有下级内容的标记，真值时显示 .hovers（具体业务含义待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
