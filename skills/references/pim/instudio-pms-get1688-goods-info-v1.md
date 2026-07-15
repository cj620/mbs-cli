<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get1688-goods-info-v1

在公共类中放入一个字符串属性用来存储每一调用需要的accesstoken：在公共类中放入一个字符串属性用来存储每一调用需要的accesstoken

## 用法

```bash
mbs pim instudio-pms-get1688-goods-info-v1 [--missionId <string>] [--goodsUrl <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/get1688GoodsInfoV1`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `missionId` | missionId | body | string | 否 | - | MissionID（字段名推断,语义待核实） |
| `goodsUrl` | goodsUrl | body | string | 否 | - | 货品URL（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | integer | 主键id。前端使用：待核实 | - |
| `obj.obj[].pictureUrl` | string | 图片地址。前端使用：待核实 | - |
| `obj.obj[].missionId` | string | missionId。前端使用：待核实 | - |
| `obj.obj[].skuImageUrl` | string | 阿里原始图片链接地址。前端使用：待核实 | - |
| `obj.obj[].attributeValue` | string | 属性值。前端使用：待核实 | - |
| `obj.obj[].attributeDisplayName` | string | 属性名称。前端使用：待核实 | - |
| `obj.obj[].sourceLink` | string | 1688资源链接地址。前端使用：待核实 | - |
| `obj.obj[].createTime` | string | 创建时间。前端使用：待核实 | - |
| `obj.obj[].updateTime` | string | 更新时间。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
