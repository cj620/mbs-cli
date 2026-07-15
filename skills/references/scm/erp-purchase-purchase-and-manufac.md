# mbs scm erp-purchase-purchase-and-manufac

采购下单-供应商SKU采购明细查询(purchaseAndManufac)：采购下单页(采购任务列表)展开某一供应商行时，按当前搜索/筛选条件查询该供应商(某仓库)下的待采购SKU明细，返回每个SKU的商品信息、供应商、成本/备货价、推荐采购量、库存/在途、销量预留、异常提示等，前端拼接HTML表格渲染。

## 用法

```bash
mbs scm erp-purchase-purchase-and-manufac [--searchType <string>] [--isFinish <string>] [--salesStatus <string>] [--filtertype <string>] [--keyword <string>] [--productStatus <string>] [--delayDay <string>] --manufactureid <string> --storageId <string>
```

## API

- Service: `erpPurchase`
- Method: `POST`
- Path: `/erpPurchase/erpPurchase/purchaseDownOrder/purchaseAndManufac`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `searchType` | searchType | body | string | 否 | - | 搜索类型(来源控件 #searchType) |
| `isFinish` | isFinish | body | string | 否 | - | 是否完成筛选(来源控件 #isFinish) |
| `salesStatus` | salesStatus | body | string | 否 | - | 销量状态(来源控件 #salesStatus；代码中赋值两次，取同一控件) |
| `filtertype` | filtertype | body | string | 否 | - | 筛选类型(来源控件 #filtertype) |
| `keyword` | keyword | body | string | 否 | - | 关键词(来源控件 #keyword) |
| `productStatus` | productStatus | body | string | 否 | - | 产品状态(来源控件 #productStatus) |
| `delayDay` | delayDay | body | string | 否 | - | 延迟天数筛选(来源控件 #delayDay) |
| `manufactureid` | manufactureid | body | string | 是 | - | 供应商ID(取自被展开供应商行 obj.manufactureId) |
| `storageId` | storageId | body | string | 是 | - | 仓库ID(取自被展开供应商行 obj.storageId) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准包装，200=成功；本回调按数据直接渲染) | - |
| `desc` | string | 响应提示信息(拼接到异常上报链接 &oper= 参数) | - |
| `obj[]` | array | 待采购SKU明细列表 | - |
| `obj[][0]` | string | 异常/提示描述文案(红色展示) | - |
| `obj[][1]` | string | 未付款采购提示文案(橙色警告) | - |
| `obj[][2]` | string | 上一单是否取消关闭标记(='2' 表示供应商上一单刚取消关闭) | - |
| `obj[][3]` | string | 上一单关闭原因(存在时拼“(关闭原因:xxx)”) | - |
| `obj[][4]` | string | 仓库名称(义乌仓库/深圳仓库等，决定行底色样式) | - |
| `obj[][5]` | string | 1688商品图片相对路径(存在则拼前缀 https://cbu01.alicdn.com/，否则用默认图) | - |
| `obj[][6]` | string | 商品主图URL(同时用于“找供应商”1688铺货链接 mbImageUrl) | - |
| `obj[][7]` | string | 截单日期(图片下方红字展示) | - |
| `obj[][8]` | number | 系统推荐采购数量(填入“买/实/系统采购量”输入框) | - |
| `obj[][9]` | string | 采购链接(1688商品链接) | - |
| `obj[][10]` | string | SKU编码(主键标识，用于SKU详情/复选框value) | - |
| `obj[][11]` | string | 平台标识(匹配供应商 matchingModal 入参) | - |
| `obj[][12]` | string | 产品名称 | - |
| `obj[][13]` | string | 是否侵权(=1 显示“侵权”红标) | - |
| `obj[][14]` | string | 产品状态(清仓/停产/暂停销售 显示黄标，其余显示绿标) | - |
| `obj[][15]` | string | SPU ID(有值显示“已匹配供应商”，无值显示“未匹配供应商”) | - |
| `obj[][16]` | string | 特殊标记(=3 显示“预售产品”标签) | - |
| `obj[][17]` | string | 采购备注(对“大促/申请/JIT仓sku备货”做橙色高亮) | - |
| `obj[][18]` | string | 异常信息字符串(高亮后展示于备注下方) | - |
| `obj[][19]` | string | 商品标签(含“smt精选”时实采数量输入框只读) | - |
| `obj[][20]` | string | 供应商1名称 | - |
| `obj[][21]` | string | 供应商2名称(标注“(历史)”) | - |
| `obj[][22]` | string | 供应商1采购/详情链接 | - |
| `obj[][23]` | string | 供应商2详情标识(拼 /purchase/supplierInfo.html?sequenceid=) | - |
| `obj[][24]` | number | 成本价 | - |
| `obj[][25]` | number | 备货价/采购单价(填入采购价输入框，只读) | - |
| `obj[][26]` | number | 库存数 | - |
| `obj[][27]` | number | 采购在途/采购天数(展示于库存数下方) | - |
| `obj[][28]` | number | 捆绑数量 | - |
| `obj[][29]` | number | 批次数量(红字展示) | - |
| `obj[][30]` | string | 备货提示文案(采购量单元格内 .nosale 展示) | - |
| `obj[][31]` | number | 合计预留4(销量趋势区展示 x/x/x 第1项) | - |
| `obj[][32]` | number | 合计预留5(展示 x/x/x 第2项) | - |
| `obj[][33]` | number | 合计预留6(展示 x/x/x 第3项) | - |
| `obj[][34]` | number | 预留9(危险徽标 badge 数值) | - |
| `obj[][35]` | number | 采购/在线买量(在线单元格展示 buynum/price4) | - |
| `obj[][36]` | number | 价格4(与 buynum 组合展示) | - |
| `obj[][37]` | number | 订单量(红字展示，与 stockQuantity 组合) | - |
| `obj[][38]` | number | 库存量(无值显示“-”) | - |
| `obj[][39]` | string | 类型名称 | - |
| `obj[][40]` | number | 创建天数(展示于类型名称下方) | - |
| `obj[][41]` | string | 操作员1(开发/采购员) | - |
| `obj[][42]` | string | 操作员3(异常上报链接展示文本) | - |
| `obj[][43]` | string | 仓库ID(完成 markupModal 入参) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
