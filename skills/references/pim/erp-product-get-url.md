<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-url

获取SPU立刻刊登/编辑跳转地址：库存看板（必刊登/推荐刊登列表）点击「立刻刊登」时调用，依据 SPU、必修改记录序号ID、平台ID 获取后端生成的刊登/编辑页面跳转URL；成功后前端 window.open 新窗口打开 obj 返回的地址。

## 用法

```bash
mbs pim erp-product-get-url --spu <string> --sequenceid <string> --ptid <string> --flag <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/stockProduct/getUrl`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | 商品SPU编号。来源：触发按钮 $(obj).data('spu')（data-spu） |
| `sequenceid` | sequenceid | query | string | 是 | - | 必修改/刊登记录序号ID。来源：触发按钮 $(obj).data('sqid')（data-sqid） |
| `ptid` | ptid | query | string | 是 | - | 平台ID（reserve 预留平台标识）。来源：触发按钮 $(obj).data('res')（data-res） |
| `flag` | flag | query | number | 是 | - | 业务标志位，该调用处固定传 2（立刻刊登场景） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（前端据此判断成功/失败分支） | - |
| `obj` | string | 后端返回的刊登/编辑页面跳转URL；code==200 且非空时前端 newWin.location.href = data.obj 新窗口打开 | - |
| `desc` | string | 提示/失败原因，失败时弹窗 #shuoming 展示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
