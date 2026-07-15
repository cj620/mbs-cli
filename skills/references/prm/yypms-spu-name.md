<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm yypms-spu-name

获取SPU预设场景咒语(提示词)：根据SPU编号查询该商品在AI文字生成图片/场景定制功能下预设的场景列表，每个场景包含一组方案变体(提示词/咒语)。前端在图片库AI生成弹窗中据此渲染预设场景卡片、场景下拉、方案变体标签与指令描述输入框。

## 用法

```bash
mbs prm yypms-spu-name
```

## API

- Service: `yypms`
- Method: `POST`
- Path: `/yypms/pms/AllMessage/getSpuSceneSpell/{spuName}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spuName` | spuName | path | string | 是 | - | SPU商品编号(URL路径参数)。来源：父组件 inject(spuName) 注入的当前选中商品SPU；用于查询该SPU的预设场景咒语 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(拦截器据此判断) | - |
| `desc` | string | 响应提示信息(失败时前端用作错误提示备选) | - |
| `obj[]` | array | 预设场景列表(前端 SceneSpell.value = res.data.obj)，空则回退为 [] | - |
| `obj[][0]` | string | 场景名称(卡片标题、场景下拉选项 label/value) | - |
| `obj[][1][]` | array | 该场景下的方案变体(咒语/提示词)列表，list.length 渲染为方案:N | - |
| `obj[][1][][0]` | number | 方案变体主键ID | - |
| `obj[][1][][1]` | string|number | 编号值(方案变体编号，具体业务含义待人工确认) | - |
| `obj[][1][][2]` | string | 所属场景名称(与父级场景名一致) | - |
| `obj[][1][][3]` | string | 咒语/提示词内容，渲染为方案首条文本 list[0].spellValue 及指令描述输入框 v-model，提交生成时作为 prompt | - |
| `obj[][1][][4]` | string | 该方案变体关联的SPU商品编号 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
