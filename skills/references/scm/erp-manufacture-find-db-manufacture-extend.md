<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-find-db-manufacture-extend

供应商扩展信息(详情)查询：供应商信息详情页加载入口：依据 URL 上的 sequenceid(供应商序号ID) 查询单个供应商的扩展信息，返回数组 obj(取首元素 obj[0])，包含基本信息、采购信息、定做信息、经营信息、详情描述、交易信用记录、采购评价(发货时长/涨跌价采购单)等数十项字段，供详情页渲染与编辑回填。

## 用法

```bash
mbs scm erp-manufacture-find-db-manufacture-extend --sequenceid <string>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/manufactureExtendController/findDbManufactureExtend`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sequenceid` | sequenceid | body | string | 是 | - | 供应商序号ID(主键)。取自浏览器 URL 查询串 GetQueryString('sequenceid')，仅当存在该参数时才发起查询 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `content` | string | 当前登录用户名(前端赋给全局 username，用于二维码链接拼接) | - |
| `obj[]` | array | 供应商扩展信息列表(前端取首元素 obj[0] 渲染详情) | - |
| `obj[][0]` | string | 供应商名称 | - |
| `obj[][1]` | string | 操作(更新)时间 | - |
| `obj[][2]` | number | 供应商等级(前端拼接为「X级」展示) | - |
| `obj[][3]` | string | 供应商头像图片URL(为空时用默认图) | - |
| `obj[][4]` | number | 风险评估状态。0=风险评估未通过;1=风险评估通过;2=风险评估中;其它=无 | - |
| `obj[][5]` | number | 总交易笔数(原值，与行业均值比较显示升降箭头) | - |
| `obj[][6]` | number | 总交易笔数-行业均值(原值) | - |
| `obj[][7]` | number | 总采购金额(原值) | - |
| `obj[][8]` | number | 总采购金额-行业均值(原值) | - |
| `obj[][9]` | number | SKU周转率(原值) | - |
| `obj[][10]` | number | SKU周转率-行业均值(原值) | - |
| `obj[][11]` | number | 90天退款率(原值) | - |
| `obj[][12]` | number | 90天退款率-行业均值(原值) | - |
| `obj[][13]` | number | 90天采退率(原值) | - |
| `obj[][14]` | number | 90天采退率-行业均值(原值) | - |
| `obj[][15]` | number | 90天发货时长(原值) | - |
| `obj[][16]` | number | 90天发货时长-行业均值(原值) | - |
| `obj[][17]` | string | 公司名称 | - |
| `obj[][18]` | string | 联系地址 | - |
| `obj[][19]` | string | 开发员 | - |
| `obj[][20]` | string | 联系人(与职位拼接展示) | - |
| `obj[][21]` | string | 联系人职位 | - |
| `obj[][22]` | string | 供应商状态-中文展示文本 | - |
| `obj[][23]` | string | 联系电话 | - |
| `obj[][24]` | string | 开发能力-中文展示文本 | - |
| `obj[][25]` | string | 阿里旺旺 | - |
| `obj[][26]` | string | 风格&品类 | - |
| `obj[][27]` | string | 微信 | - |
| `obj[][28]` | string | 1688链接1(同时作为超链接 href) | - |
| `obj[][29]` | string | 1688链接2(同时作为超链接 href) | - |
| `obj[][30]` | string | 经营模式 | - |
| `obj[][31]` | string | 春季交货结束时间 | - |
| `obj[][32]` | string | 商品价格 | - |
| `obj[][33]` | string | 春季交货开始时间 | - |
| `obj[][34]` | string | 是否接单。0=否;1=是;其它=空 | - |
| `obj[][35]` | string | 特点汇总 | - |
| `obj[][36]` | string | 备注 | - |
| `obj[][37]` | string | 仓储省份 | - |
| `obj[][38]` | string | 联系地址(编辑表单回填用) | - |
| `obj[][39]` | string | 供应商状态(值，编辑表单回填用) | - |
| `obj[][40]` | string | 开发能力(值，编辑表单回填用) | - |
| `obj[][41]` | string | 固定供应商(展示) | - |
| `obj[][42]` | string | 供应商类型(展示/编辑回填，对应字段 filed) | - |
| `obj[][43]` | string | 供货商备货时间 | - |
| `obj[][44]` | string | 退换货(展示文本，编辑时按 returnList 反查 code) | - |
| `obj[][45]` | string | 运费 | - |
| `obj[][46]` | string | 发货速度 | - |
| `obj[][47]` | string | 发货准确率-中文展示文本 | - |
| `obj[][48]` | string | 配合度-中文展示文本 | - |
| `obj[][49]` | string | 优惠政策 | - |
| `obj[][50]` | string | 结束备货时间 | - |
| `obj[][51]` | string | 固定供应商采购员(下拉回填) | - |
| `obj[][52]` | string | 发货准确率(值，编辑回填) | - |
| `obj[][53]` | string | 配合度(值，编辑回填) | - |
| `obj[][54]` | number | 是否定做。0=否;1=是;2=测试中 | - |
| `obj[][55]` | string | 大货质量-中文展示文本 | - |
| `obj[][56]` | string | 质检反馈 | - |
| `obj[][57]` | string | 工厂信息 | - |
| `obj[][58]` | string | 产能 | - |
| `obj[][59]` | string | 起定量要求 | - |
| `obj[][60]` | string | 主做款式 | - |
| `obj[][61]` | string | 打样时间 | - |
| `obj[][62]` | string | 出货时间 | - |
| `obj[][63]` | string | 定做备注 | - |
| `obj[][64]` | string | 大货质量(值，编辑回填) | - |
| `obj[][65]` | string | 质量认证(逗号分隔，前端 split 多选回填) | - |
| `obj[][66]` | string | 工艺流程 | - |
| `obj[][67]` | string | 品牌名称 | - |
| `obj[][68]` | string | 厂房面积-展示文本 | - |
| `obj[][69]` | string | 年营业额-展示文本 | - |
| `obj[][70]` | string | 员工人数-展示文本 | - |
| `obj[][71]` | string | 加工方式 | - |
| `obj[][72]` | string | 体系认证(逗号分隔，前端 split 多选回填) | - |
| `obj[][73]` | string | 主要市场(逗号分隔，前端 split 多选回填) | - |
| `obj[][74]` | string | 主要客户(逗号分隔，前端 split 多选回填) | - |
| `obj[][75]` | string | 年出口额-展示文本 | - |
| `obj[][76]` | string | 月产量-展示文本 | - |
| `obj[][77]` | string | 厂房面积(值，编辑回填) | - |
| `obj[][78]` | string | 年营业额(值，编辑回填) | - |
| `obj[][79]` | string | 员工人数(值，编辑回填) | - |
| `obj[][80]` | string | 年出口额(值，编辑回填) | - |
| `obj[][81]` | string | 月产量(值，编辑回填) | - |
| `obj[][82]` | string | 供应商详情描述(富文本，写入 CKEDITOR) | - |
| `obj[][83]` | string | 总交易笔数-展示文本 | - |
| `obj[][84]` | string | 总交易笔数行业均值-展示文本 | - |
| `obj[][85]` | string | 总采购金额-展示文本 | - |
| `obj[][86]` | string | 总采购金额行业均值-展示文本 | - |
| `obj[][87]` | string | SKU周转率-展示文本 | - |
| `obj[][88]` | string | SKU周转率行业均值-展示文本 | - |
| `obj[][89]` | string | 90天退款率-展示文本 | - |
| `obj[][90]` | string | 90天退款率行业均值-展示文本 | - |
| `obj[][91]` | string | 90天采退率-展示文本 | - |
| `obj[][92]` | string | 90天采退率行业均值-展示文本 | - |
| `obj[][93]` | string | 90天发货时长-展示文本 | - |
| `obj[][94]` | string | 90天发货时长行业均值-展示文本 | - |
| `obj[][95]` | string | 涨价采购单数-展示文本 | - |
| `obj[][96]` | string | 降价采购单数-展示文本 | - |
| `obj[][97]` | string | 采购价基本不变采购单数-展示文本 | - |
| `obj[][98]` | number | 发货时长占比-段1(发货时长<=2天，饼图数据) | - |
| `obj[][99]` | number | 发货时长占比-段2(2天<发货时长<5天，饼图数据) | - |
| `obj[][100]` | number | 发货时长占比-段3(发货时长>=5天，饼图数据) | - |
| `obj[][101]` | string | 是否已拜访(单选回填，匹配 radio value) | - |
| `obj[][102]` | number | 涨价采购单数(原值，饼图数据) | - |
| `obj[][103]` | number | 降价采购单数(原值，饼图数据) | - |
| `obj[][104]` | number | 采购价基本不变采购单数(原值，饼图数据) | - |
| `obj[][105]` | string | 营业执照图片URL(存在则展示并作为下载 href) | - |
| `obj[][106]` | string | 主营产品(逗号分隔，前端 split 多选回填) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
