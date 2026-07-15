# mbs pim erp-product-product-claim-list

独立站产品认领列表查询：独立站产品认领页列表查询：按 SPU、认领人、提交销售时间区间、测款状态分页查询已认领去广告测款的 SPU 列表，返回 SPU 基本信息及各认领人操作（认领/去广告）记录。

## 用法

```bash
mbs pim erp-product-product-claim-list [--spu <string>] [--operDtos <array>] [--startTime <string>] [--endTime <string>] [--status <string>] --page <number> --pageSize <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productClaim/productClaimList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 否 | - | SPU 编号（来源 #spu 输入框，按 SPU 模糊查询） |
| `operDtos` | operDtos | body | array | 否 | - | 认领人列表（来源 #queryOperList 多选下拉，值为认领人姓名 employee_name；可多选） |
| `startTime` | startTime | body | string | 否 | - | 提交销售时间-起始（格式 yyyy-MM-dd，默认当天前8天） |
| `endTime` | endTime | body | string | 否 | - | 提交销售时间-结束（格式 yyyy-MM-dd，默认当天前1天） |
| `status` | status | body | string | 否 | - | 测款状态。0=全部;1=未测款;2=已测款 |
| `page` | page | body | number | 是 | - | 当前页码（从1开始） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（固定传 100） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息（无数据时前端 alert 展示） | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的记录总数（前端写入 #total 显示） | - |
| `obj.countPage` | number | 总页数（page=1 时传入分页组件 pageCount） | - |
| `obj.result[]` | array | SPU 列表（前端取为模板变量 list 渲染） | - |
| `obj.result[][0]` | string | 商品 SPU 编号（渲染为 SPU 详情链接并展示） | - |
| `obj.result[][1]` | string | SPU 主图 URL（加载失败回退默认图 timg.jpg） | - |
| `obj.result[][2]` | string | SPU 名称 | - |
| `obj.result[][3]` | string | 提交销售时间（灰色展示于 SPU 信息列） | - |
| `obj.result[][4][]` | array | 认领/去广告操作记录列表（按人渲染认领与测款检查两列） | - |
| `obj.result[][4][][0]` | string | 认领操作时间 | - |
| `obj.result[][4][][1]` | string | 操作人头像 URL（加载失败回退默认头像 user.png） | - |
| `obj.result[][4][][2]` | string | 操作人（认领人姓名） | - |
| `obj.result[][4][][3]` | string | 去广告（测款）时间 | - |
| `obj.result[][4][][4]` | number | 是否去广告测款。0=未测款(展示错误图标cuowu.png);非0=已测款(展示通过图标u60.png) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
