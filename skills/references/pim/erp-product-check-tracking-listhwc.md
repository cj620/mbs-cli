<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-check-tracking-listhwc

海外仓跟踪单校验(新增前出库明细校验)：新增真实海外仓跟踪单弹窗点击校验时调用，按货件编号(groupId)与海外仓核验本次出库明细，返回每条FNSKU/马帮商品的出库量、重量、头程运费及异常信息；校验通过的obj被前端缓存供保存接口saveTrackingListHwc使用。

## 用法

```bash
mbs pim erp-product-check-tracking-listhwc --groupId <string> [--headFreight <string>] [--weight <number>] --shopId <string> [--shopName <string>] [--expressTime <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/hwcProduct/checkTrackingListhwc`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `groupId` | groupId | body | string | 是 | - | 货件编号(如:15JDVJ1VX)，校验主键。来源输入框 #groupId |
| `headFreight` | headFreight | body | string | 否 | - | 头程运费(RMB)。来源输入框 #headFreight，原样字符串提交 |
| `weight` | weight | body | number | 否 | - | 包裹称重。来源输入框 #weight(单位kg)，前端 Number(值)*1000 换算为克(g)后提交；为空时提交空字符串 |
| `shopId` | shopId | body | string | 是 | - | 海外仓ID。来源下拉 #shopList(选项value="shopId,shopName")取逗号第1段；未选传空字符串 |
| `shopName` | shopName | body | string | 否 | - | 海外仓名称。来源下拉 #shopList 选项value逗号第2段；未选传空字符串 |
| `expressTime` | expressTime | body | string | 否 | - | 实际发货时间(yyyy-MM-dd)。来源日期控件 #expressTime |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(渲染明细)，非200弹出desc | - |
| `desc` | string | 响应提示信息(失败时 alert(data.desc)) | - |
| `obj[]` | array | 货件出库明细列表(每条FNSKU/马帮商品一行) | - |
| `obj[][0]` | string | FNSKU(亚马逊履约SKU编码) | - |
| `obj[][1]` | string | 马帮商品编号 | - |
| `obj[][2][]` | array | 捆绑明细列表；前端仅用其length，length>1时展示'捆绑商品,N种产品做捆绑'标签 | - |
| `obj[][3]` | number | 本次出库量(件) | - |
| `obj[][4]` | number | 马帮商品重量(g) | - |
| `obj[][5]` | number | 头程运费(RMB)；前端 headFreight && !=0 时 toFixed(2) 展示 | - |
| `obj[][6]` | string | 异常信息(HTML片段，前端以{{@ }}原样输出，置于红色text-danger列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
