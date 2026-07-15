# mbs ars erpmonitor-spu

获取商品视频地址(getVedio)：在“在线列表(热销商品监控)”页面的绑定视频弹窗中，按商品SPU查询该SPU当前已绑定的视频地址，用于回填视频地址输入框。

## 用法

```bash
mbs ars erpmonitor-spu
```

## API

- Service: `erpmonitor`
- Method: `GET`
- Path: `/erpmonitor/erpmonitor/ebayVideoController/getVedio/{spu}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | path | string | 是 | - | 商品SPU编号(路径变量)。来源:当前列表行数据 spuid(_getCurrentRowData 返回),用于查询该SPU已绑定的视频地址 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口成功回调未显式判断code,仅取obj) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | string | 该SPU已绑定的视频地址URL。前端 data.obj || "" 取值填入视频地址输入框 #video-input;为空表示尚未绑定视频 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
