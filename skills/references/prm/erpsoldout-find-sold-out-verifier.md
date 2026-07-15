<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-find-sold-out-verifier

获取下架审核人列表：平台商品下架页面初始化时调用，用于获取“下架审核人”下拉框的数据源。无入参，返回审核人(员工)列表，前端用 art-template 模板 contentTemplate5 渲染为 #frameReviewer 下拉选项(value=员工ID，文本=员工姓名)。

## 用法

```bash
mbs prm erpsoldout-find-sold-out-verifier
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/soldOut/findSoldOutVerifier`
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
| `code` | number | 响应状态码，200=成功(同页其它接口以 data.code==200 判定，601=未登录) | - |
| `desc` | string | 响应提示信息(失败时前端弹窗展示) | - |
| `obj[]` | array | 审核人(员工)列表，模板 {{each obj value i}} 遍历 | - |
| `obj[][0]` | string | 审核人(员工)ID，渲染为 <option value> | - |
| `obj[][1]` | string | 审核人(员工)姓名，渲染为下拉选项显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
