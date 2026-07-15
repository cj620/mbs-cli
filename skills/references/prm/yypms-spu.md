# mbs prm yypms-spu

获取SPU的AI商品属性：文生图向导(场景图/ozon主图/自定义咒语)打开时，按 SPU 拉取该商品由AI生成的结构化属性(产品名、关键词、卖点、受众、使用场景/方式、材质、ozon类目与排版模板、ozon中俄标题与主/次卖点)，用于自动拼装“商品信息”向导文本与排版模板默认值。

## 用法

```bash
mbs prm yypms-spu
```

## API

- Service: `yypms`
- Method: `GET`
- Path: `/yypms/pms/developerMission/ai/ai/attributes/{spu}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | path | string | 是 | - | 商品SPU编号(路径变量)，前端经 encodeURIComponent 编码拼接到URL末尾，必填 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | AI商品属性对象;为空(null)时前端使用默认模板 | - |
| `obj.product_name` | string | 产品名称(拼入“产品名称：”;缺省回退为spu) | - |
| `obj.color_variants[]` | array | 颜色变体列表(场景图取前3个生成变体①②③颜色) | - |
| `obj.core_keywords[]` | array | 核心关键词(与长尾关键词合并作为外观特征填充变体) | - |
| `obj.long_tail_keywords[]` | array | 长尾关键词(与核心关键词合并作为外观特征) | - |
| `obj.scene_keywords[]` | array | 场景关键词(usage_scenarios为空时作为使用场景回退来源) | - |
| `obj.target_audience[]` | array | 目标受众(取前2个以“ / ”拼成受众:,缺省受众待补充) | - |
| `obj.usage_scenarios[]` | array | 使用场景(取前2个拼成使用场景:,缺省回退scene_keywords/使用场景待补充) | - |
| `obj.core_selling_points[]` | array | 核心卖点(取前3个以“ / ”拼成卖点:,缺省卖点待补充) | - |
| `obj.material_description` | string | 材质/表面工艺描述(拼入表面工艺:,缺省待补充) | - |
| `obj.usage_method` | string | 使用方式(前端规整为①②③序号步骤,最多6步,缺省①待补充) | - |
| `obj.firstLevelCategoryName` | string | 一级类目名称(ozon排版面板类目左侧展示,缺省-) | - |
| `obj.ozonCategoryKey` | string | ozon类目Key(ozon排版面板类目右侧展示,缺省-) | - |
| `obj.ozonCategoryType` | string | ozon默认排版模板代码。枚举:A1/A2/A3/B1/B2/C1/D1/D2/E1/F1;命中枚举时作为默认选中模板 | - |
| `obj.ozonCategoryTypeGroup[]` | array | ozon推荐排版模板代码组。元素枚举同上(A1~F1),命中的模板在选择弹窗标“推荐” | - |
| `obj.ozonTitleZh` | string | ozon标题(中文)(ozon向导文本标题(中):) | - |
| `obj.ozonTitle` | string | ozon标题(俄文)(ozon向导文本标题(俄):) | - |
| `obj.ozonPrimaryPoints[]` | array | ozon主要卖点列表(元素为OzonSellingPoint;按序号.图标 中文(中) 俄文(俄)拼接) | - |
| `obj.ozonPrimaryPoints[][0]` | string | 卖点图标(前端trim后展示) | - |
| `obj.ozonPrimaryPoints[][1]` | string | 卖点中文文案 | - |
| `obj.ozonPrimaryPoints[][2]` | string | 卖点俄文文案 | - |
| `obj.ozonSecondaryPoints[]` | array | ozon次要卖点列表(元素为OzonSellingPoint;拼接规则同主要卖点) | - |
| `obj.ozonSecondaryPoints[][0]` | string | 卖点图标(前端trim后展示) | - |
| `obj.ozonSecondaryPoints[][1]` | string | 卖点中文文案 | - |
| `obj.ozonSecondaryPoints[][2]` | string | 卖点俄文文案 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
