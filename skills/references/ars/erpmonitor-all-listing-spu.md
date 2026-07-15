# mbs ars erpmonitor-all-listing-spu

本周新刊登·全部SPU列表查询：“在线商品监控-本周新刊登”标签页触发。以 thisWeek=1 一次性拉取本周新刊登的全部SPU列表（不分页），成功回调将返回的 obj 数组整体写入隐藏域 #weekPub，用于“全部listing”导出与全选场景。列表分页展示由同源接口 allListing?thisWeek=1 负责（渲染 pubContentTemplate）。

## 用法

```bash
mbs ars erpmonitor-all-listing-spu --thisWeek <number>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/managerHotProduct/allListingSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `thisWeek` | thisWeek | query | number | 是 | - | 是否只取本周新刊登。源码硬编码为 1（1=本周新刊登）；来源：代码常量(非页面控件) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（统一信封，本回调未校验） | - |
| `desc` | string | 响应提示信息（统一信封） | - |
| `obj[]` | array | 本周新刊登全部SPU列表（直接为数组，供全选/导出） | - |
| `obj[][0]` | string | 商品SPU编号（复选框 value，导出全选主键） | - |
| `obj[][1]` | string | 商品记录ID（复选框 dataId，导出用 ids） | - |
| `obj[][2]` | string | 店铺名称（复选框 shopnames，导出 shopNames） | - |
| `obj[][3]` | string | 店铺负责人 | - |
| `obj[][4]` | string | 商品主图URL（加载失败回退默认图 timg.jpg） | - |
| `obj[][5]` | string | 商品外链地址（新窗口打开） | - |
| `obj[][6]` | string | 商品标题（超链接文本与 title） | - |
| `obj[][7]` | string | 平台商品ID | - |
| `obj[][8]` | string | 刊登(上架)时间 | - |
| `obj[][9]` | number | 30天累计销量额/销量 | - |
| `obj[][10]` | number | 售价-最低价 | - |
| `obj[][11]` | number | 售价-最高价 | - |
| `obj[][12]` | string | 币种（有售价时展示） | - |
| `obj[][13]` | number | 近7天销售数量 | - |
| `obj[][14]` | number | 近90天销售数量 | - |
| `obj[][15]` | number | 浏览量 | - |
| `obj[][16]` | number | 收藏量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
