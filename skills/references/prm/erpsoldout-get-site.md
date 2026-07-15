<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-get-site

根据平台查询站点列表(getSite)：在「提交钓鱼信息」弹窗中，用户选择「平台」(多选)后触发，根据所选平台ID集合查询其对应的站点(site)列表，用于「站点」下拉框的可选项渲染。

## 用法

```bash
mbs prm erpsoldout-get-site --platformIds <string>
```

## API

- Service: `erpsoldout`
- Method: `GET`
- Path: `/erpsoldout/erpsoldout/infringing/getSite`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformIds` | platformIds | body | string | 是 | - | 平台ID集合(多个以英文逗号拼接)。来源：弹窗「平台」多选下拉(addData.platformId，选项 selectOption.platformList，value=PLATFORMID，label=PLATFORMNAME)；为空则不发起请求。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一包裹字段，本接口前端未直接读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(统一包裹字段，本接口前端未直接读取)(待人工确认) | - |
| `obj[]` | array | 站点列表数组，前端赋值给 siteList | - |
| `obj[]` | string | 站点标识/站点名称，前端站点下拉选项的 key/value/label(item.site) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
