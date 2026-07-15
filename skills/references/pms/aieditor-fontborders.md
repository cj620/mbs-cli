<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms aieditor-fontborders

字体特效(边框)样式列表查询：拉取字体特效/边框样式集合(Strapi collection)。前端右侧属性面板展示样式缩略图，点击后把样式配置(json:填充/描边/阴影等)应用到画布文本对象。请求为Strapi标准查询参数(populate展开缩略图、pagination分页)，响应为Strapi列表结构，经前端拦截器拍平后使用。

## 用法

```bash
mbs pms aieditor-fontborders [--populateImg <string>] [--paginationPage <number>] [--paginationPageSize <number>] [--pageNum <number>] [--pageSize <number>]
```

## API

- Service: `aieditor`
- Method: `GET`
- Path: `/api/fontborders`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `populateImg` | img | body | string | 否 | - | populate 子项，取值 '*'，展开缩略图媒体字段 img 的全部属性(url/formats) |
| `paginationPage` | page | body | number | 否 | - | 页码，字体特效面板固定1；find()携带pageSize入参时框架回退为1 |
| `paginationPageSize` | pageSize | body | number | 否 | - | 每页条数，字体特效面板取100；find(data,pageSize)携带第二参时框架回退为50 |
| `pageNum` | pageNum | body | number | 否 | - | 顶层页码(仅新客户端冗余传参，固定1) |
| `pageSize` | pageSize | body | number | 否 | - | 顶层每页条数(仅新客户端冗余顶层传参，固定50/组件100，与pagination.pageSize并存) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `data[]` | array | 样式记录列表；前端 res.data，v-for 渲染 | - |
| `data[][0]` | number | 记录ID(:key=item.id，拍平后 item.id) | - |
| `data[][1]` | object | 记录属性对象(前端拦截器 getValue 会拍平到记录本身) | - |
| `data[][1].json` | object | 字体特效样式配置，setStyle 从 toRaw(item.json) 读取并应用到画布文本对象 | - |
| `data[][1].json.fill` | string | 填充色；为对象时前端转 new fabric.Gradient(values.fill)(渐变) | - |
| `data[][1].json.stroke` | string | 描边颜色 | - |
| `data[][1].json.strokeWidth` | number | 描边宽度 | - |
| `data[][1].json.shadow` | object | 阴影配置(应用到文本 shadow) | - |
| `data[][1].json.strokeLineCap` | string | 描边端点样式(如 butt/round/square) | - |
| `data[][1].img` | object | 缩略图媒体关联(populate 展开后为 Strapi media 结构) | - |
| `data[][1].img.data` | object | 媒体数据对象 | - |
| `data[][1].img.data.id` | number | 媒体ID(拦截器拍平为 item.imgId) | - |
| `data[][1].img.data.attributes` | object | 媒体属性对象 | - |
| `data[][1].img.data.attributes.url` | string | 图片URL(拍平为 item.imgUrl，模板 <img :src=item.imgUrl> 使用) | - |
| `data[][1].img.data.attributes.formats` | object | 多尺寸格式集合(拍平为 item.imgUrl<Format>，如 imgUrlThumbnail) | - |
| `data[][1].createdAt` | string | 创建时间(Strapi标准字段，前端未直接使用，待人工确认) | - |
| `data[][1].updatedAt` | string | 更新时间(Strapi标准字段，前端未直接使用，待人工确认) | - |
| `data[][1].publishedAt` | string | 发布时间(Strapi标准字段，前端未直接使用，待人工确认) | - |
| `data[][1].locale` | string | 语言标识(Strapi i18n 标准字段，前端未直接使用，待人工确认) | - |
| `meta` | object | 元数据；拦截器把其 pagination 搬到 response.pagination 后删除 meta | - |
| `meta.pagination` | object | 分页信息(前端 res.pagination) | - |
| `meta.pagination.page` | number | 当前页码 | - |
| `meta.pagination.pageSize` | number | 每页条数 | - |
| `meta.pagination.pageCount` | number | 总页数 | - |
| `meta.pagination.total` | number | 满足条件的总记录数 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
