<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-get-infringing-sku-info

侵权SKU(画廊)信息查询：侵权监控画廊页(gallery.html)加载/换一批/切换大类时调用：按大类(parentCategoryId)查询已提交侵权信息的SKU列表，返回该大类下SKU数量徽标(content)与SKU卡片列表(obj，含图片、SPU、侵权描述、提交人与提交时间)，用于art-template渲染商品画廊。

## 用法

```bash
mbs prm erpsoldout-get-infringing-sku-info [--parentCategoryId <string>] [--isFirst <string>]
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/getInfringingSkuInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `parentCategoryId` | parentCategoryId | body | string | 否 | - | 大类(父级分类)ID。来源顶部大类导航 li[data-value](value.sequenceid)；点「所有」或初始化时传空串表示全部大类 |
| `isFirst` | isFirst | body | string | 否 | - | 是否首次/普通加载标记。'1'=首次加载或切换大类；''(空串)=点击「换一批」刷新一批 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `content` | string | 该大类下侵权SKU数量徽标内容，写入 #span{parentCategoryId} 或 #spanAll 的HTML | - |
| `obj[]` | array | 侵权SKU卡片列表，经 #skuInfoTemplate {{each obj v i}} 渲染 | - |
| `obj[][0]` | string | SKU编号，用于详情跳转链接 /product/SKUdetails.html?SKU={{v.sku}} | - |
| `obj[][1]` | string | SKU主图URL(img src，无图显示「暂无图片」) | - |
| `obj[][2]` | string | SPU编号(卡片标题 h2) | - |
| `obj[][3]` | string | 侵权信息描述；为空时前端展示「未提交侵权信息」 | - |
| `obj[][4]` | string | 侵权信息提交人 | - |
| `obj[][5]` | string | 侵权信息提交时间(日期) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
