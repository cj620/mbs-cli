<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-allleave-message

商品咨询留言列表查询：商品咨询页按提问人/回复人/开发员、提问时间区间分页查询商品(SPU/SKU)留言：返回主留言(提问)及其子留言(回复)两级结构，前端渲染为表格并分页。

## 用法

```bash
mbs pim erp-product-get-allleave-message --page <number> --pageSize <number> [--oper <string>] [--productPerson <string>] [--startTime <string>] [--endTime <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getALLLeaveMessage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码(首次查询固定为1,分页回调取api.getCurrent()) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定50) |
| `oper` | oper | body | string | 否 | - | 操作人/回复人或提问人(来源:#productName下拉'提问人'或本人姓名localStorage username,随部门切换语义) |
| `productPerson` | productPerson | body | string | 否 | - | 商品负责人/提问人或回复人(来源:#askName下拉'开发员'或本人姓名localStorage username,随部门切换语义) |
| `startTime` | startTime | body | string | 否 | - | 提问时间-起始(来源:#starttime日期控件,格式yyyy-MM-dd) |
| `endTime` | endTime | body | string | 否 | - | 提问时间-结束(来源:#endtime日期控件,格式yyyy-MM-dd) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(服务统一外壳,200=成功,前端未显式判断) | - |
| `desc` | string | 响应提示信息(服务统一外壳) | - |
| `obj` | object | 业务数据对象(前端以data.obj判空) | - |
| `obj.count` | number | 满足条件的留言总条数(前端写入#total) | - |
| `obj.countPage` | number | 总页数(前端传入分页控件pageCount) | - |
| `obj.dbLeaveMessageResult[]` | array | 留言(提问)列表 | - |
| `obj.dbLeaveMessageResult[][0]` | number | 留言目标类型:0=SPU(跳转SPUdetails);非0=SKU(跳转SKUdetails) | - |
| `obj.dbLeaveMessageResult[][1]` | string | 留言目标编号(SPU或SKU编号,用于详情页跳转参数) | - |
| `obj.dbLeaveMessageResult[][2]` | string | 提问人头像图片URL(加载失败回退默认图timg.jpg) | - |
| `obj.dbLeaveMessageResult[][3]` | string | 提问人(用户名,头像旁展示) | - |
| `obj.dbLeaveMessageResult[][4]` | string | 问题内容(提问正文) | - |
| `obj.dbLeaveMessageResult[][5]` | string | 提问时间 | - |
| `obj.dbLeaveMessageResult[][6][]` | array | 子留言(回复)列表;为空时回复人/回复内容列留空、回复时间显示'--' | - |
| `obj.dbLeaveMessageResult[][6][][0]` | string | 回复人头像图片URL(加载失败回退默认图timg.jpg) | - |
| `obj.dbLeaveMessageResult[][6][][1]` | string | 回复人(用户名,头像旁展示) | - |
| `obj.dbLeaveMessageResult[][6][][2]` | string | 回复内容(回复正文) | - |
| `obj.dbLeaveMessageResult[][6][][3]` | string | 回复时间(为null时前端展示'--') | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
