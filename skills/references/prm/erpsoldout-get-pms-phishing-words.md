# mbs prm erpsoldout-get-pms-phishing-words

钓鱼词详情查询：根据钓鱼词记录ID查询单条钓鱼词配置详情，用于「编辑」弹窗回填表单（钓鱼词、替换词、平台、描述、站点、一级分类、包含词、是否包含for、是否车标词等）。

## 用法

```bash
mbs prm erpsoldout-get-pms-phishing-words --id <string>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/getPmsPhishingWords`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | string | 是 | - | 钓鱼词记录ID（主键），来源表格行 row.id（编辑操作） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(待人工确认本接口是否返回) | - |
| `obj` | object | 业务数据对象(单条钓鱼词配置详情) | - |
| `obj.id` | string | 钓鱼词记录ID(主键) | - |
| `obj.phishingWord` | string | 钓鱼词(多个用英文逗号分隔,回填钓鱼词文本域) | - |
| `obj.replaceWord` | string | 替换词(回填替换词输入框) | - |
| `obj.platformId` | string | 平台ID集合(逗号分隔字符串,前端split成多选数组并传入getsites拉站点) | - |
| `obj.description` | string | 描述(回填描述文本域;含链接会转超链接渲染) | - |
| `obj.sites` | string | 站点集合(逗号分隔字符串,前端split成多选数组;空/null时为[]) | - |
| `obj.categoryOfinfringingWord` | string | 一级分类/大类(逗号分隔字符串,前端split成数组;空/null时为[]) | - |
| `obj.keyWordOfinfringingWord` | string | 包含词(多个用逗号分隔,回填包含词输入框) | - |
| `obj.includingFor` | number | 是否包含for。1=是;0=否(车标词时强制为1) | - |
| `obj.isCarLogo` | number | 是否车标词。1=是;0=否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
