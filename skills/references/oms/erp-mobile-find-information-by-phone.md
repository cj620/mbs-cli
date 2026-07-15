# mbs oms erp-mobile-find-information-by-phone

根据手机号查询供应商报价资料：移动端「货源报价录入」页，手机号输入框失焦(onblur)时按手机号查询该供应商已有的报价资料(联系人/旺旺号/质量/供货类型/供应商地址/报价规格/店铺链接/备注/商品图片等)，并通过 art-template 模板 infosTemplate 渲染回填表单。

## 用法

```bash
mbs oms erp-mobile-find-information-by-phone --phone <string>
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/shoeController/findInformationByPhone`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `phone` | phone | body | string | 是 | - | 供应商手机号；取自「手机号」输入框 #phone 的值，作为唯一查询条件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(标准信封字段) | - |
| `desc` | string | 响应提示信息(标准信封字段) | - |
| `content` | string | 供应商/联系人头像图片URL；有值则设为 #photos 图片src，无值则用默认头像 /2018ui/assets/images/user2.png | - |
| `obj` | object | 报价资料业务对象；if(data.obj) 为渲染前置条件 | - |
| `obj.contact` | string | 联系人；回填 #contact(模板 {{obj.contact}}) | - |
| `obj.phone` | string | 手机号；回填 #phone(模板 {{obj.phone}}) | - |
| `obj.wangwang` | string | 旺旺号；回填 #wangwang(模板 {{obj.wangwang}}) | - |
| `obj.quality` | string | 质量；回填 #quality 下拉。枚举：高 / 中 / 低 | - |
| `obj.supplyType` | string | 供货类型；回填 #supplyType 下拉。枚举：清仓尾货 / 稳定现货 / 样品定制 | - |
| `obj.supplierAddress` | string | 供应商地址；回填 #supplierAddress(模板 {{obj.supplierAddress}}) | - |
| `obj.priceSpecificationList[]` | array | 报价规格列表；模板 {{each obj.priceSpecificationList}} 逐行渲染数量区间与单价 | - |
| `obj.priceSpecificationList[][0]` | number | 报价规格-起始数量(件)；渲染至 .minnum 输入框(模板 {{item.minnum}}) | - |
| `obj.priceSpecificationList[][1]` | number | 报价规格-截止数量(件)；渲染至 .maxnum 输入框(模板 {{item.maxnum}}) | - |
| `obj.priceSpecificationList[][2]` | number | 报价规格-单价(元/件)；渲染至 .unitprice 输入框(模板 {{item.unitprice}}) | - |
| `obj.shopLink` | string | 店铺链接(1688链接)；回填 #shopLink(模板 {{obj.shopLink}}) | - |
| `obj.remarks` | string | 备注；有值则回填 #remarks 文本域(if(data.obj.remarks)) | - |
| `obj.productUrlList[]` | array | 商品图片URL列表(string[])；遍历渲染图片预览区并赋值给全局 bigimgBox | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
