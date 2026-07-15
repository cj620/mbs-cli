<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim product-imageditor-service-id

根据AI图任务ID查询任务状态：图片分配工作台对存在AI图任务(aiImgTaskId)的图片按3秒间隔轮询本接口查询蜂鸟(fengniao)AI处理任务状态；当返回的fengniaoStatus不再为padding时清除定时器并刷新图片列表。

## 用法

```bash
mbs pim product-imageditor-service-id
```

## API

- Service: `product-imageditor-service`
- Method: `GET`
- Path: `/gateway/product-imageditor-service/artImage/getAiImgTaskById/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | number | 是 | - | AI图任务ID(路径参数)。来源：图片对象aiImgTaskId以逗号分隔后取第一个 aiImgTaskId.split(",")[0]，用于查询对应蜂鸟AI处理任务状态 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `fengniaoStatus` | string | 蜂鸟AI处理任务状态。等于padding表示处理中/排队中(继续轮询)，不等于padding表示任务已结束(清除定时器并刷新列表)。其余取值枚举(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
