# mbs pms erp-task-get-leave-message

任务留言列表查询：任务/投诉详情页底部「物流任务 留言」模块的留言列表查询：按任务标识(spu)拉取该任务下全部留言及其子留言(回复)，用于渲染留言时间线（头像、留言人、时间、内容、关联SKU、嵌套回复）。

## 用法

```bash
mbs pms erp-task-get-leave-message --spu <string> --isAll <string> --isSystem <string>
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/taskController/getLeaveMessage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | 任务/留言目标标识。取自页面URL的id参数(GetQueryString('id'))。来源：页面URL query |
| `isAll` | isAll | query | string | 是 | - | 是否查询全部，代码中固定传'2'。枚举含义(待人工确认) |
| `isSystem` | isSystem | query | string | 是 | - | 是否系统留言标识，代码中固定传'3'。枚举含义(待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `content` | string | 当前用户头像URL，用于留言输入框左侧头像img src(加载失败回退默认图timg.jpg) | - |
| `obj[]` | array | 留言列表(每个元素为一条主留言) | - |
| `obj[][0]` | string | 留言人头像URL(img src，失败回退timg.jpg) | - |
| `obj[][1]` | string | 留言人(创建人) | - |
| `obj[][2]` | string | 留言时间(创建时间) | - |
| `obj[][3]` | number | 留言类型。==1时渲染指向SKUdetails.html?SKU={messageTarget}的商品链接，否则仅显示内容。其余取值含义(待人工确认) | - |
| `obj[][4]` | string | 留言目标对象(typeId==1时为SKU编号，作为SKU详情链接文案与参数) | - |
| `obj[][5]` | string | 留言内容正文 | - |
| `obj[][6]` | number | 留言ID(序号ID)。回复操作replyMessage(sequenceid,i)使用 | - |
| `obj[][7][]` | array | 子留言(回复)列表 | - |
| `obj[][7][][0]` | string | 回复人(创建人) | - |
| `obj[][7][][1]` | string | 回复时间(创建时间) | - |
| `obj[][7][][2]` | string | 回复内容正文 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
