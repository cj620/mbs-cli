<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-on-line-product-infringing

侵权在线商品列表查询：侵权商品详情页的在线商品分页查询：按 SKU、平台、店铺、开发员、关键词移除状态、图片移除/更换状态、商品(下架)状态、时间等条件分页查询平台在线侵权商品列表，返回商品信息、店铺、侵权关键词/商品/图片三类侵权信息列表及 SKU 列表。

## 用法

```bash
mbs prm erpsoldout-on-line-product-infringing [--skuList <array>] [--employeeId <string>] [--productStatus <string>] [--dateTime <string>] [--infringingSubmitId <string>] [--platformId <string>] [--shopId <string>] [--skuDeveloper <string>] [--imageIsRemove <string>] [--imageIsReplace <string>] [--dashboard <string>] [--wordStatus <string>] [--imageReplaceStatus <string>] --currPage <number>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/onLineProduct`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `skuList` | skuList | body | array | 否 | - | SKU列表(#duoSKU 按空格拆分) |
| `employeeId` | employeeId | body | string | 否 | - | 员工ID(来源URL employeeId) |
| `productStatus` | productStatus | body | string | 否 | - | 商品(下架)状态。1=已在售;0=已下架;2=已删除;3=等待下架;4=下架中;5=下架失败(#infringingProductStatus, 为空取URL productStatus) |
| `dateTime` | dateTime | body | string | 否 | - | 时间筛选(来源URL dateTime) |
| `infringingSubmitId` | infringingSubmitId | body | string | 否 | - | 侵权提交ID(来源URL id) |
| `platformId` | platformId | body | string | 否 | - | 平台ID(#platformName) |
| `shopId` | shopId | body | string | 否 | - | 店铺ID(#shopId) |
| `skuDeveloper` | skuDeveloper | body | string | 否 | - | SKU开发员(#skuDeveloper) |
| `imageIsRemove` | imageIsRemove | body | string | 否 | - | 图片是否移除。0=已移除;1=未移除;2=等待移除(#imageRemoveStatus) |
| `imageIsReplace` | imageIsReplace | body | string | 否 | - | 图片是否更换。1=美工待处理;2=图片已处理未更换;3=平台已更换;4=更换失败;5=正在更换(#imageReplaceStatus) |
| `dashboard` | dashboard | body | string | 否 | - | 仪表盘来源标记(来源URL dashboard; 点击搜索时传空) |
| `wordStatus` | wordStatus | body | string | 否 | - | 关键词移除状态。0=已移除;1=未移除;2=等待移除;3=正在移除;4=失败(#wordRemoveStatus) |
| `imageReplaceStatus` | imageReplaceStatus | body | string | 否 | - | 图片更换状态(同 #imageReplaceStatus 控件, 枚举同 imageIsReplace) |
| `currPage` | currPage | body | number | 是 | - | 当前页码(首查固定1; 分页取 api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功;601=未登录;其他=提示 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.list[]` | array | 在线商品列表 | - |
| `obj.list[][0]` | string | 商品记录ID(复选框值, 批量操作用) | - |
| `obj.list[][1]` | number | 关键词移除状态码。0=已移除;1=未移除;2=等待移除;3=正在移除;4=失败 | - |
| `obj.list[][2]` | number | 图片是否移除。0=已移除;1=未移除;2=等待移除 | - |
| `obj.list[][3]` | number | 图片是否更换。1=美工待处理;2=图片已处理未更换;3=平台已更换;4=更换失败;5=正在更换 | - |
| `obj.list[][4]` | number | 商品状态。0=已下架;1=已在售;2=已删除;3=等待下架;4=下架中;5=下架失败 | - |
| `obj.list[][5]` | string | 商品主图URL | - |
| `obj.list[][6]` | string | 商品链接 | - |
| `obj.list[][7]` | string | 平台商品编号 | - |
| `obj.list[][8]` | string | 商品属性 | - |
| `obj.list[][9]` | string | 商品标题 | - |
| `obj.list[][10]` | string | 店铺名称 | - |
| `obj.list[][11]` | string | 店铺销售负责人 | - |
| `obj.list[][12]` | string | 侵权关键词 | - |
| `obj.list[][13]` | string | 侵权提交人 | - |
| `obj.list[][14]` | string | 侵权提交日期 | - |
| `obj.list[][15]` | string | 描述/备注 | - |
| `obj.list[][16]` | number | 近30天销量 | - |
| `obj.list[][17]` | string | 商品上架时间 | - |
| `obj.list[][18][]` | array | 侵权关键词信息列表 | - |
| `obj.list[][18][][0]` | number | 颜色标记。0=绿;1=红;2=灰;3=蓝 | - |
| `obj.list[][18][][1]` | string | 侵权信息结果 | - |
| `obj.list[][18][][2]` | string | 信息日期(flag为0/1时展示) | - |
| `obj.list[][19][]` | array | 侵权商品(下架)信息列表 | - |
| `obj.list[][19][][0]` | number | 颜色标记。0=绿;1=红;2=灰;3=蓝 | - |
| `obj.list[][19][][1]` | string | 侵权信息结果 | - |
| `obj.list[][19][][2]` | string | 信息日期(flag为0/1时展示) | - |
| `obj.list[][20][]` | array | 侵权图片信息列表 | - |
| `obj.list[][20][][0]` | number | 颜色标记。0=绿;1=红;2=灰;3=蓝 | - |
| `obj.list[][20][][1]` | string | 侵权信息结果 | - |
| `obj.list[][20][][2]` | string | 信息日期(flag为0/1时展示) | - |
| `obj.list[][21][]` | array | SKU信息列表 | - |
| `obj.list[][21][][0]` | string | SKU编号(链接SKU详情页) | - |
| `obj.list[][21][][1]` | string | SKU开发员 | - |
| `obj.total` | number | 满足条件的商品总条数 | - |
| `obj.pages` | number | 总页数(分页 pageCount) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
