# mbs pms erp-task-spu

获取商品英文描述(getEnglishDescRipiton)：质检详情弹窗打开时（老维度质检任务），按 SPU 拉取该商品的英文产品描述文本；前端取返回体的 desc 字段，若非空再调用 AI 翻译接口翻成中文，填入‘产品描述’文本域。SPU 作为 URL 路径变量传递，无请求体。

## 用法

```bash
mbs pms erp-task-spu
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/developMustDo/getEnglishDescRipiton/{spu}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | path | string | 是 | - | 商品 SPU 编号，作为 URL 路径变量拼接到接口末尾；来源父组件 props.spu，无请求体 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `desc` | string | 英文产品描述文本（本接口实际返回并被前端使用：data?.desc，非空则送 AI 翻译后填入产品描述文本域） | - |
| `code` | number | 标准响应封装-状态码(200=成功)，本次调用未使用(待人工确认是否返回) | - |
| `content` | string | 标准响应封装-内容字段，本次调用未使用(待人工确认) | - |
| `obj` | object | 标准响应封装-业务数据对象，本次调用未使用(待人工确认) | - |
| `success` | boolean | 标准响应封装-是否成功标记，本次调用未使用(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
