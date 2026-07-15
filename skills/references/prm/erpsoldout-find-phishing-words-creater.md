<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-find-phishing-words-creater

查询钓鱼词提交人(创建人)列表：钓鱼词库(report/phishingwords.vue)页面初始化时调用，返回所有钓鱼词的提交人(创建人)姓名列表，用于顶部搜索区"请选择提交人"下拉框(Searchoption.submitBy)的可选项。无任何请求参数。

## 用法

```bash
mbs prm erpsoldout-find-phishing-words-creater
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/soldOut/findPhishingWordsCreater`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `success` | boolean | 是否成功标识(框架统一返回) | - |
| `content` | object | 框架统一返回字段，本接口未使用 (待人工确认) | - |
| `obj[]` | array | 提交人(钓鱼词创建人)姓名列表，前端赋值给 selectOption.submitByList | - |
| `obj[]` | string | 单个提交人(创建人)姓名，作为下拉项的 value 与 label(:key/:value/:label 均为该字符串本身) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
