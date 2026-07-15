# mbs prm erpsoldout-find-sold-out-task

下架任务列表查询：平台商品下架任务分页查询：按 SKU、创建人、平台、创建时间区间、下架原因、任务状态等条件分页查询下架任务列表，返回任务编号、状态、平台、下架原因、下架总量/成功/失败数、关联 SKU、创建人/审核人/创建时间/完成时间等字段。

## 用法

```bash
mbs prm erpsoldout-find-sold-out-task [--skuList <array>] [--creater <string>] [--platformId <string>] [--createTimeStart <string>] [--createTimeEnd <string>] [--employeeId <string>] [--soldOutReason <string>] [--soldOutStatus <string>] --currPage <number>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/soldOut/findSoldOutTask`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `skuList` | skuList | body | array | 否 | - | SKU 列表（来源输入框 #duoSKU，按空白符分割为数组，剔除空值） |
| `creater` | creater | body | string | 否 | - | 创建人（来源下拉 #Founder，取值为 employeeId） |
| `platformId` | platformId | body | string | 否 | - | 平台ID（来源下拉 #platformName，取值为 platformId） |
| `createTimeStart` | createTimeStart | body | string | 否 | - | 创建时间-起始（来源时间下拉 #getTime/自定义 #startTime，格式 yyyy-M-d） |
| `createTimeEnd` | createTimeEnd | body | string | 否 | - | 创建时间-结束（来源时间下拉 #getTime/自定义 #endTime，格式 yyyy-M-d） |
| `employeeId` | employeeId | body | string | 否 | - | 员工ID（来源页面URL参数 employeeId，GetQueryString('employeeId')） |
| `soldOutReason` | soldOutReason | body | string | 否 | - | 下架原因（来源下拉 #Reason） |
| `soldOutStatus` | soldOutStatus | body | string | 否 | - | 任务状态（来源下拉 #states）。枚举：4=待审核(默认选中);0=待生成;1=已生成;2=执行中;3=已完成 |
| `currPage` | currPage | body | number | 是 | - | 当前页码（首次查询固定为 1，翻页时取分页组件 api.getCurrent()） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功;601=未登录(弹提示并跳转 /eshop/manager/login.jsp);其他=失败(弹 desc) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.list[]` | array | 下架任务列表 | - |
| `obj.list[][0]` | string | 任务编号（记录ID，行 tr id、查看详情/删除/审核传参） | - |
| `obj.list[][1]` | number | 任务状态枚举。0=待生成;1=已生成;2=执行中;3=已完成;4=待审核;5=审核通过(前端转中文展示) | - |
| `obj.list[][2]` | string | 平台名称（为空时前端展示"全平台"） | - |
| `obj.list[][3]` | string | 下架原因 | - |
| `obj.list[][4]` | number | 下架总量 | - |
| `obj.list[][5]` | number | 成功数量 | - |
| `obj.list[][6]` | number | 失败数量（"下架中"=总量-成功-失败，前端计算） | - |
| `obj.list[][7]` | string | 下架 SKU（多值，鼠标悬停 title 展示全量） | - |
| `obj.list[][8]` | string | SKU 数量（点击 soldOutSkuNum() 弹窗展示） | - |
| `obj.list[][9]` | string | 关联 SKU（多值，悬停 title 展示全量） | - |
| `obj.list[][10]` | string | 创建人 | - |
| `obj.list[][11]` | string | 审核人姓名 | - |
| `obj.list[][12]` | string | 审核人ID（与当前登录人 content 比对，决定是否显示审核/删除操作） | - |
| `obj.list[][13]` | string | 创建时间 | - |
| `obj.list[][14]` | string | 完成时间 | - |
| `obj.list[][15]` | string | 备注（模板中该列已注释，未实际渲染，待人工确认） | - |
| `obj.pages` | number | 总页数（前端作为分页组件 pageCount） | - |
| `obj.total` | number | 满足条件的任务总条数（写入 #total） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
