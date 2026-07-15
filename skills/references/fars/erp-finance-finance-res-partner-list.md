<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-finance-res-partner-list

辅助核算(合作伙伴)列表查询：日记账凭证创建/编辑时，点击「辅助核算」打开 #partnerModal 弹窗，按名称关键词分页查询合作伙伴(辅助核算)列表，供选择后回填到凭证的辅助核算字段。支持 name 关键词模糊搜索与 page/pageSize 分页。

## 用法

```bash
mbs fars erp-finance-finance-res-partner-list [--name <string>] --page <number> --pageSize <number>
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/financeResPartner/financeResPartnerList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | body | string | 否 | - | 辅助核算名称搜索关键词。来源控件=辅助核算弹窗输入框 #partnerName；有值取输入值，否则固定传空字符串(不过滤) |
| `page` | page | body | number | 是 | - | 当前页码。首次打开固定1；翻页时取分页组件 api.getCurrent() |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定100 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准响应封装；本接口成功回调未显式校验code，仅校验obj) | - |
| `desc` | string | 响应提示信息(标准响应封装) | - |
| `obj` | object | 业务数据对象(成功回调以 if(data.obj) 判断) | - |
| `obj.count` | number | 满足条件的总条数(写入 #partnerModal #total) | - |
| `obj.countPage` | number | 总页数(传入 partnerPage() 初始化分页 pageCount) | - |
| `obj.result[]` | array | 辅助核算(合作伙伴)列表(赋值 list = data.obj.result) | - |
| `obj.result[][0]` | string | 辅助核算ID(模板 {{v.resPartnerId}}，行点击作为value回填到 #PartnerList/#editPartner 的value属性) | - |
| `obj.result[][1]` | string | 辅助核算名称(模板 {{v.name}}，行点击作为显示文本回填到 #PartnerList/#editPartner) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
