<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-standard-product-unit

获取标准商品单元(SPU详情)：SPU详情页打开时按 SPU 编号加载该 SPU 的标准商品单元信息：中文/英文标题、英文关键词、英文描述、开发性质、分类、禁售平台、侵权与禁售站点、专利国家、中英文申报名、品牌、采购链接、可公开店铺、视频/动图链接、竞品链接、公司归属等，用于详情页头部渲染及编辑SPU模态框回填。

## 用法

```bash
mbs pim erp-product-get-standard-product-unit --spu <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getStandardProductUnit`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 是 | - | SPU编号(URL查询参数,来源:当前详情页地址栏 SPU 参数,经 GetQueryString('SPU') 取得) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口主要依据 obj 是否存在判断) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | SPU标准商品单元业务对象 | - |
| `obj.spu` | string | SPU编号(回填 #SPU2,模板顶部展示) | - |
| `obj.priceflag` | number | 价格标记;≠0 时展示listing出单情况较好且非跟卖图标 | - |
| `obj.salesStatus` | string | 售卖状态(模板右上角展示) | - |
| `obj.chineseTitle` | string | 中文标题(回填 #chineseTitle,模板 pro-desc 展示) | - |
| `obj.englishTitle` | string | 英文标题(回填 #englishTitle) | - |
| `obj.englishKeyword` | string | 英文关键词(逗号分隔字符串,前端 split(',') 成数组逐个标签展示) | - |
| `obj.englishDescription` | string | 英文描述(回填 #englishDescription,模板 pre 展示) | - |
| `obj.developmentNature` | string | 开发性质(回填 #developmentNature,模板标签展示) | - |
| `obj.categoryId` | string | 商品分类(模板直接展示分类文本/路径) | - |
| `obj.disableplatform` | string | 禁售平台(逗号分隔字符串,前端 split(',') 后 setPlatformsValue 回填并在模板展示严禁上架) | - |
| `obj.descr` | string | 描述/红字提示(模板红色文字展示) | - |
| `obj.tort` | string | 是否侵权;'1'=侵权(显示下架区 .xiajia2、勾选 #tort) | - |
| `obj.tortSite` | string | 侵权/禁售站点(逗号分隔字符串,前端 split(',') 后 setSitesValue 回填) | - |
| `obj.patentCourtry` | string | 专利国家(逗号分隔字符串,前端 split(',') 转数字数组回填 app4Form.patentCountry) | - |
| `obj.declarenamecn` | string | 中文申报名(回填 #declarenamecn,模板展示) | - |
| `obj.declarenameen` | string | 英文申报名(回填 #declarenameen,模板展示) | - |
| `obj.brand` | string | 品牌(回填 #brand 自动补全输入框) | - |
| `obj.purchasinglinks` | string | 采购链接(回填 #purchasinglinks) | - |
| `obj.publiclyAvailableShops` | string | 可公开店铺(延时回填 #publiclyAvailableShops) | - |
| `obj.videopath` | string | 视频链接;存在则设为 #spuVideo 视频源,模板展示视频链接 | - |
| `obj.gifpath` | string | 动图(GIF)链接;模板存在时展示动态链接 | - |
| `obj.competitorLink` | string | 竞品链接(模板存在时展示) | - |
| `obj.submitsaletime` | string | 提交销售时间;存在则隐藏侵权填写区 #tortarea | - |
| `obj.companyId` | number | 所属公司ID。1=胤元(顶部色条绿 #67C23A);33=启元(顶部色条蓝 #409eff);存在则展示公司名 | - |
| `obj.isvideo` | number | 是否有视频;==1 时展示视频替换按钮 #appchange | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
