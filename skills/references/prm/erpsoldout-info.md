<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-info

提交侵权(下架授权)信息：商品侵权页“提交侵权信息”弹框点击确认后，提交侵权SKU、侵权关键词、侵权图片、侵权平台/站点、移除范围(类别/标题关键字)及自动移除图片/自动下架/自动移除关键词等处理选项，由后端登记侵权信息并按选项执行下架/移除处理。

## 用法

```bash
mbs prm erpsoldout-info [--platformIds <string>] [--skus <string>] [--infringingWords <string>] --description <string> [--infringingImages <string>] [--removePicture <string>] [--soldOut <string>] [--replaceInfringingWord <string>] [--categoryOfInfiringingWord <string>] [--keyWordOfInfringingWord <string>] [--sites <array<unknown>>] [--includingFor <string>]
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/upload/info`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformIds` | platformIds | body | string | 否 | - | 侵权平台ID集合(多个逗号拼接)。来源 #QUplatform(el-select platform)；选“七大平台”时展开为 1,2,16,10,85,97,108 |
| `skus` | skus | body | string | 否 | - | 侵权的SKU(多个逗号分割)。来源输入框 #QUSKU |
| `infringingWords` | infringingWords | body | string | 否 | - | 侵权关键词(英文，多个逗号分割，用于移除标题中包含的词)。来源 #QUGjc |
| `description` | description | body | string | 是 | - | 侵权描述(详细侵权原因及信息来源；前端校验字符长度须≥20，中文按2计)。来源文本域 #QUMS |
| `infringingImages` | infringingImages | body | string | 否 | - | 侵权图片文件名集合(逗号拼接)。取自 .img-cont img 各图片 src 的文件名部分 |
| `removePicture` | removePicture | body | string | 否 | - | 自动移除图片标记。来源复选框 #removePicture，0=勾选(自动移除图片)，1=未勾选 |
| `soldOut` | soldOut | body | string | 否 | - | 自动下架标记。来源复选框 #soldOut，0=勾选(自动下架)，1=未勾选 |
| `replaceInfringingWord` | replaceInfringingWord | body | string | 否 | - | 自动移除关键词标记。来源复选框 #replaceInfringingWord，0=勾选(自动移除关键词)，1=未勾选 |
| `categoryOfInfiringingWord` | categoryOfInfiringingWord | body | string | 否 | - | 侵权词listing类别(可多选，逗号拼接 CATEGORYNAME)。来源多选框 #categoryWord |
| `keyWordOfInfringingWord` | keyWordOfInfringingWord | body | string | 否 | - | 侵权词listing标题关键字(英文，多个逗号分割)。来源 #keyWord |
| `sites` | sites | body | array<unknown> | 否 | - | 站点列表(对象数组)。来源站点选择器 #site-selector(el-select site)，元素为 getAllSite 返回项 |
| `includingFor` | includingFor | body | string | 否 | - | 是否包含“for”标记。来源复选框 #includingFor，取其 value(默认 "0")(待人工确认其业务取值含义) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息(失败时直接展示给用户) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
