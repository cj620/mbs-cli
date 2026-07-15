# mbs pms erp-task-check-today-result

开发今日必做-查看今日清零结果：开发工作台「今日必做」清零弹窗：点击清零/保存按钮时调用，查询当前开发员各类必做任务（重量异常、产品投诉、复审被拒、售后问题、采购异常、拍照、推荐品等）的应完成数量，渲染到 mustDoTemplate 弹窗表格；实际完成数由前端从页面各 span 补写后随 saveTodayResult 保存。

## 用法

```bash
mbs pms erp-task-check-today-result
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/developMustDo/checkTodayResult`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(saveTodayResult 同族接口以 code==200 判定) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 今日必做数据对象(为空/假值时前端不弹窗) | - |
| `obj.develop` | string | 开发员标识(写入隐藏输入框 #developers,随保存回传) | - |
| `obj.weightShouldFinish` | number | 重量异常-应完成数量 | - |
| `obj.complaintShouldFinish` | number | 产品投诉-应完成数量 | - |
| `obj.recheckspuShouldFinish` | number | 复审被拒-应完成数量 | - |
| `obj.illegalShouldFinish` | number | 售后问题-应完成数量(模板标题为"售后问题") | - |
| `obj.purchaseShouldFinish` | number | 采购异常-应完成数量 | - |
| `obj.tortShouldFinish` | number | 侵权退货任务-应完成数量(模板行已注释,仍随 obj 返回;取值粒度待人工确认) | - |
| `obj.delayShouldFinish` | number | 延迟-应完成数量(模板行已注释;取值粒度待人工确认) | - |
| `obj.twoPictureShouldFinish` | number | 质检/二套图-应完成数量(模板行已注释;取值粒度待人工确认) | - |
| `obj.photoShouldFinish` | number | 拍照-应完成数量 | - |
| `obj.recommendShouldFinish` | number | 推荐品-应完成数量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
