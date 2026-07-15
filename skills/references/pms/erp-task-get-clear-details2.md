<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-task-get-clear-details2

开发必做清零明细查询(人事部/组员维度)：按时间区间与组员维度分页查询开发必做各类任务的应完成/未完成明细：涵盖重量异常、产品投诉、售后问题、采购异常、拍照、质检二套图、复审被拒、推荐品共8类任务的应完成与未完成量，以及手动清零时间。

## 用法

```bash
mbs pms erp-task-get-clear-details2 --startTime <string> --endTime <string> --page <number> --pageSize <string> [--employeename <array>]
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/developMustDo/getClearDetails2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startTime` | startTime | body | string | 是 | - | 开始时间(格式 YYYY-MM-DD)。来源日期控件 #startTime，默认当前日期前30天 |
| `endTime` | endTime | body | string | 是 | - | 结束时间(格式 YYYY-MM-DD)。来源日期控件 #endTime，默认当天 |
| `page` | page | body | number | 是 | - | 当前页码。来源脚本内部变量 page(默认1，分页回调更新) |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数。来源下拉 #everyPage，枚举:50/100/200 |
| `employeename` | employeename | body | array | 否 | - | 组员姓名列表(员工名数组)。来源多选控件 #employeename；未选时取组长下全部组员 groupArr 或空数组 [] |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准封装，待人工确认取值) | - |
| `desc` | string | 响应提示信息(标准封装) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的总条数(前端填入 #total) | - |
| `obj.countPage` | number | 总页数(前端 page==1 时用于初始化分页控件) | - |
| `obj.result[]` | array | 清零明细行列表 | - |
| `obj.result[][0]` | string | 时间(日期) | - |
| `obj.result[][1]` | string | 组员/开发员姓名(仅人事部,即 content==1 时展示) | - |
| `obj.result[][2]` | number | 重量异常-应完成 | - |
| `obj.result[][3]` | number | 重量异常-未完成(当日剩余量,绩效考核项;>0 标红) | - |
| `obj.result[][4]` | number | 产品投诉-应完成 | - |
| `obj.result[][5]` | number | 产品投诉-未完成(>0 标红) | - |
| `obj.result[][6]` | number | 售后问题-应完成 | - |
| `obj.result[][7]` | number | 售后问题-未完成(>0 标红) | - |
| `obj.result[][8]` | number | 采购异常-应完成 | - |
| `obj.result[][9]` | number | 采购异常-未完成(>0 标红) | - |
| `obj.result[][10]` | number | 拍照-应完成 | - |
| `obj.result[][11]` | number | 拍照-未完成(>0 标红) | - |
| `obj.result[][12]` | number | 质检/二套图-应完成 | - |
| `obj.result[][13]` | number | 质检/二套图-未完成(>0 标红) | - |
| `obj.result[][14]` | number | 复审被拒-应完成 | - |
| `obj.result[][15]` | number | 复审被拒-未完成(>0 标红) | - |
| `obj.result[][16]` | number | 推荐品-应完成 | - |
| `obj.result[][17]` | number | 推荐品-未完成(>0 标红) | - |
| `obj.result[][18]` | string | 手动清零时间。枚举:值为 忘记提交清零 时前端标红显示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
