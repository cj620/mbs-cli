# mbs pim erp-product-get-high-refund

高退款率产品列表查询：违规产品登记页(registrationForm)第三个标签页「高退款率产品」的分页列表查询：按开发员、采购员、SKU、开发时间区间筛选，返回高退款率(异常编号固定 WG51)的 SKU 列表及毛利率/退款率/销量等汇总字段。由页面 search3()/getProductIllegal3() 调用。

## 用法

```bash
mbs pim erp-product-get-high-refund [--endDate2 <string>] [--buyer <string>] [--oper <string>] [--sku <string>] [--startDate2 <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getHighRefund`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `endDate2` | endDate2 | body | string | 否 | - | 开发结束时间。来源控件 #endDate(input type=date)，格式 yyyy-MM-dd |
| `buyer` | buyer | body | string | 否 | - | 采购员。来源控件 #oper1(采购员下拉，选项来自 getEmpByDep depId=65) |
| `oper` | oper | body | string | 否 | - | 开发员。来源控件 #oper3(开发员下拉，选项来自 getEmpByDep depId=62) |
| `sku` | sku | body | string | 否 | - | SKU 编码(按 SKU 查询)。来源控件 #productid(input placeholder=请输入SKU) |
| `startDate2` | startDate2 | body | string | 否 | - | 开发开始时间。来源控件 #startDate(input type=date)，格式 yyyy-MM-dd |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定传 50 |
| `page` | page | body | number | 是 | - | 当前页码，search3() 固定传 1；翻页时取分页控件 api.getCurrent() |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功；601=未登录(跳转登录页)；其他=失败(弹框提示 desc) | - |
| `desc` | string | 响应提示信息(失败/未登录时弹框展示) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的总条数(前端据此与 pageSize 算总页数并写入 #total) | - |
| `obj.pageSize` | number | 每页条数(前端用于计算总页数) | - |
| `obj.result[]` | array | 高退款率 SKU 列表 | - |
| `obj.result[][0]` | string | 商品图片 URL(加载失败回退默认图) | - |
| `obj.result[][1]` | string | SKU 编码(同时作为 SKUdetails 链接及 updateHighRefund 的入参) | - |
| `obj.result[][2]` | string | SKU 名称 | - |
| `obj.result[][3]` | string | 开发人员 | - |
| `obj.result[][4]` | string | 采购人员 | - |
| `obj.result[][5]` | string | 开发时间 | - |
| `obj.result[][6]` | string | 商品属性(类目名称) | - |
| `obj.result[][7]` | string | 销量等级枚举：超级爆款(前端统一转为'超爆')/超爆/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品(前端按等级渲染不同标签样式) | - |
| `obj.result[][8]` | number | 毛利率(原值为小数，前端 ×100 保留2位加 % 展示) | - |
| `obj.result[][9]` | number | 退款率(前端保留2位加 % 展示，红色) | - |
| `obj.result[][10]` | number | 近7天销量 | - |
| `obj.result[][11]` | number | 近30天销量 | - |
| `obj.result[][12]` | number | 近90天销量 | - |
| `obj.result[][13]` | string | 处理意见/备注(存在时展示，可编辑后调 updateHighRefund 保存) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
