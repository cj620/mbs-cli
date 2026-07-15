<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-collect-folder-list

收藏夹列表查询：查询当前用户的全部商品收藏夹（我的收藏夹），用于管理收藏夹/加入收藏夹弹窗的单选列表渲染：返回每个收藏夹的ID、名称及夹内收藏商品数量。请求体为空对象{}，后端按当前登录用户返回其收藏夹。

## 用法

```bash
mbs ars erpmonitor-collect-folder-list
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/collectFolderList`
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
| `obj[]` | array | 收藏夹列表(赋值给 this.list) | - |
| `obj[][0]` | number | 收藏夹ID(el-radio 的 key 与选中值 checkList,用于修改/删除/加入收藏夹时回传) | - |
| `obj[][1]` | string | 收藏夹名称(展示为 名称(数量)) | - |
| `obj[][2]` | number | 该收藏夹内已收藏商品数量(展示为 folderName(collectProductCnt)) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
