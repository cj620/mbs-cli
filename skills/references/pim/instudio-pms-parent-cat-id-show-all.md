# mbs pim instudio-pms-parent-cat-id-show-all

查询类目列表：查询类目列表(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-parent-cat-id-show-all
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/category/getCategoryList/{showAll}/{parentCatId}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `parentCatId` | parentCatId | path | string | 否 | - | 父级CATID（字段名推断,语义待核实） |
| `showAll` | showAll | path | integer | 否 | - | 展示全部（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj[].sequenceid` | string | 分类id。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].name` | string | 分类名称。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].descr` | string | 分类描述。前端使用：否 | - |
| `obj.obj[].levelnum` | integer | 分类级别。前端使用：否 | - |
| `obj.obj[].oper` | string | 操作（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].opertime` | string | 操作时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].filed1` | string | 字段1（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].filed2` | string | 父目录(废弃)。前端使用：否 | - |
| `obj.obj[].filed3` | string | 字段3（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].filed4` | string | 分类负责人。前端使用：否 | - |
| `obj.obj[].filed5` | string | 字段5（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].filed6` | string | 分类英文名称(废弃)。前端使用：否 | - |
| `obj.obj[].filed7` | string | 字段7（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].filed8` | string | 字段8（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].filed9` | string | 字段9（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].filed10` | string | 字段10（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].corpid` | string | 企业ID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].openflag` | string | 是否开启 1开启 0关闭。前端使用：否 | - |
| `obj.obj[].hkinsurancetype` | string | Hkinsurancetype（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].hkcategory` | string | Hkcategory（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].shortsku` | string | Shortsku（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].templet` | string | Templet（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].customscode` | string | Customscode（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].newid` | string | Newid（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].newname` | string | Newname（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].levelid1` | string | 一级类目id。前端使用：否 | - |
| `obj.obj[].levelname1` | string | 一级类目名称。前端使用：否 | - |
| `obj.obj[].levelid2` | string | 二级类目id。前端使用：否 | - |
| `obj.obj[].levelname2` | string | 二级类目名称。前端使用：否 | - |
| `obj.obj[].levelid3` | string | 三级类目id。前端使用：否 | - |
| `obj.obj[].levelname3` | string | 三级类目名称。前端使用：否 | - |
| `obj.obj[].parentcategoryid` | string | 父目录。前端使用：否 | - |
| `obj.obj[].parentcategoryname` | string | 父目录名称。前端使用：否 | - |
| `obj.obj[].createby` | string | 创建人。前端使用：否 | - |
| `obj.obj[].createon` | string | 创建时间。前端使用：否 | - |
| `obj.obj[].englishname` | string | 英文名称。前端使用：否 | - |
| `obj.obj[].spurule` | string | spu开头规则。前端使用：否 | - |
| `obj.obj[].isLeaf` | integer | 是否LEAF（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productNameSummary` | string | 商品名称汇总（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PLATFORMID` | string | Platformid（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PLATFORMNAME` | string | Platformname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.picture` | string | 图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developer` | string | 开发者（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.category` | string | 类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleSubmitTime` | string | 销售提交时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createTime` | string | 创建时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saveNum` | string | 保存数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleNumSeven` | string | 销售数量7天（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleNumThirty` | string | 销售数量30天（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleNumNinety` | string | 销售数量90天（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.forbidSalePlatform` | string | Forbid销售平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.applicablePlatform` | string | Applicable平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tortSite` | string | 侵权站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.applicableSite` | string | Applicable站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tort` | string | 侵权（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productKeywords` | string | 商品Keywords（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.totalPublishNum` | string | 总数刊登数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishNum` | string | 刊登数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.totalOrderNum` | string | 总数订单数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.orderNum` | string | 订单数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.totalPushNum` | string | 总数推送数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pushNum` | string | 推送数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyId` | string | 公司ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.row` | string | 行（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.header` | string | 请求头（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rows` | string | 行数据（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.total` | string | 总数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
