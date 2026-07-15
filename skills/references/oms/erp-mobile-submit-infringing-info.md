<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-submit-infringing-info

提交侵权信息：移动端「提交侵权」页提交侵权处理：勾选自动移除图片/自动移除关键词/自动下架，填写侵权SKU、侵权关键词、勾选侵权平台、填写描述（不少于6字），提交后端执行侵权处理。提交前二次确认；侵权平台、描述为必填校验。

## 用法

```bash
mbs oms erp-mobile-submit-infringing-info [--replacePicture <string>] [--replaceInfringingWord <string>] [--soldOut <string>] [--skus <string>] [--infringingWord <string>] --platformIds <string> --description <string>
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/infringing/submitInfringingInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `replacePicture` | replacePicture | body | string | 否 | - | 自动移除图片。来源复选框 #replacePicture：勾选(checked)=0，未勾选=1 |
| `replaceInfringingWord` | replaceInfringingWord | body | string | 否 | - | 自动移除关键词。来源复选框 #InfringingWord：勾选(checked)=0，未勾选=1 |
| `soldOut` | soldOut | body | string | 否 | - | 自动下架。来源复选框 #soldOut：勾选(checked)=0，未勾选=1 |
| `skus` | skus | body | string | 否 | - | 侵权SKU，多个以英文逗号分隔。来源文本域 #skus（与侵权关键词至少填一个） |
| `infringingWord` | infringingWord | body | string | 否 | - | 侵权关键词，英文、多个以逗号分隔（用于移除标题包含词，不写中文）。来源文本域 #infringingWord（与侵权SKU至少填一个） |
| `platformIds` | platformIds | body | string | 是 | - | 侵权平台ID集合，多个以英文逗号拼接。来源 .platform 元素 value（勾选 name=checkbox2 复选框的 platformId join 而成）。为空中断提交 |
| `description` | description | body | string | 是 | - | 侵权描述/原因来源。来源文本域 #description，长度需 ≥ 6 字符，否则中断提交 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（提交成功后 toast 提示并跳转侵权信息页） | - |
| `desc` | string | 响应提示信息（成功/失败均 toast 展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
