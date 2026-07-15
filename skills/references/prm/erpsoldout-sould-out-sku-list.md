# mbs prm erpsoldout-sould-out-sku-list

侵权/下架SKU列表查询：侵权下架（SKU下架）管理列表的多条件分页查询：支持一级分类、平台、提交人、下架原因、侵权关键词、SKU（多值空格分割）、商品标题关键词、创建时间区间等筛选，返回下架商品列表及总数、总页数。

## 用法

```bash
mbs prm erpsoldout-sould-out-sku-list [--primaryCategory <string>] [--infringWord <string>] [--skuStr <string>] [--submitBy <string>] [--platformId <string>] [--soldOutReason <string>] [--endSubmitDate <string>] [--startSubmitDate <string>] --currPage <number> [--searchKeyWord <string>]
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/souldOutSkuList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `primaryCategory` | primaryCategory | body | string | 否 | - | 一级分类（来源下拉 #category，选项来自 category 接口；空=全部分类） |
| `infringWord` | infringWord | body | string | 否 | - | 侵权关键词，多值逗号分隔（来源输入框 #infringWord） |
| `skuStr` | skuStr | body | string | 否 | - | SKU，多值空格分割（来源输入框 #duoSKU） |
| `submitBy` | submitBy | body | string | 否 | - | 提交人（来源下拉 #submitRen，value=employeeId，选项来自 submit 接口） |
| `platformId` | platformId | body | string | 否 | - | 禁售平台ID（来源下拉 #platformName，value=platformId，选项来自 findPlatform 接口；空=全平台） |
| `soldOutReason` | soldOutReason | body | string | 否 | - | 下架原因。枚举：清仓下架/停产下架/侵权下架（页面默认侵权下架）；空=全部（来源下拉 #soldOutReason） |
| `endSubmitDate` | endSubmitDate | body | string | 否 | - | 创建（提交）时间-结束，格式 yyyy-M-d（来源创建时间下拉 #getTime 计算或自定义 #endTime） |
| `startSubmitDate` | startSubmitDate | body | string | 否 | - | 创建（提交）时间-起始，格式 yyyy-M-d（来源创建时间下拉 #getTime：今天/近7/10/15/30/60/90/120天/自定义 #startTime） |
| `currPage` | currPage | body | number | 是 | - | 当前页码（search() 固定传 1；分页回调取 api.getCurrent()） |
| `searchKeyWord` | searchKeyWord | body | string | 否 | - | SKU/商品标题 关键词（来源输入框 #keyWords） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 业务状态码。200=成功；601=登录失效；其它=失败 | - |
| `desc` | string | 响应提示信息（失败/登录失效时弹窗展示） | - |
| `obj` | object | 业务数据对象（无数据时前端置 {list:[]}） | - |
| `obj.total` | number | 满足条件的记录总数（写入 #total） | - |
| `obj.pages` | number | 总页数（作为分页控件 pageCount） | - |
| `obj.list[]` | array | 下架/侵权商品列表 | - |
| `obj.list[][0]` | string | 商品图片URL | - |
| `obj.list[][1]` | string | 商品链接（标题超链接 href） | - |
| `obj.list[][2]` | string | 商品标题 | - |
| `obj.list[][3]` | string | 下架原因。枚举：侵权下架/清仓下架/停产下架/侵权词移除（前端据此分支展示） | - |
| `obj.list[][4]` | string | 侵权词（soldOutReason=='侵权词移除' 时展示并拼入详情链接） | - |
| `obj.list[][5]` | string | SKU 编号（拼入查看详情链接 ?sku=） | - |
| `obj.list[][6]` | string | 开发员（SKU列展示为 sku（skuDeveloper）） | - |
| `obj.list[][7]` | string | 一级分类 | - |
| `obj.list[][8]` | string | 禁售平台名称（为空时展示“全平台”） | - |
| `obj.list[][9]` | string | 禁售站点（有值表示SKU不侵权，仅作生成紧急下架任务；有值时下架原因标红） | - |
| `obj.list[][10]` | string | 备注 | - |
| `obj.list[][11]` | string | 提交人 | - |
| `obj.list[][12]` | string | 提交时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
