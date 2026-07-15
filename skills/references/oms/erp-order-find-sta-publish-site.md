# mbs oms erp-order-find-sta-publish-site

站点周期上新统计查询：刊登统计-按站点统计：传入某一日期(date)，返回各站点在四个统计周期(周期标题由 title 给出)下的销售额、周期上新量、在线量、周期上新占比，前端按站点行渲染统计表格。

## 用法

```bash
mbs oms erp-order-find-sta-publish-site --date <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/statisticsPublish/findStaPublishSite`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `date` | date | query | string | 是 | - | 统计日期，格式 yyyy-MM-dd；来源页面日期控件 #time(type=date，加载默认当天)。为空前端拦截提示，不发起请求 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `title[]` | array | 四个统计周期的列组标题数组，对应表头 title[0]~title[3] | - |
| `data[]` | array | 站点统计行列表 | - |
| `data[][0]` | string | 站点名称 | - |
| `data[][1]` | number | 周期1(title[0]) 销售额 | - |
| `data[][2]` | number | 周期1(title[0]) 周期上新量 | - |
| `data[][3]` | number | 周期1(title[0]) 在线量 | - |
| `data[][4]` | number | 周期1(title[0]) 周期上新占比(前端追加%展示) | - |
| `data[][5]` | number | 周期2(title[1]) 销售额 | - |
| `data[][6]` | number | 周期2(title[1]) 周期上新量 | - |
| `data[][7]` | number | 周期2(title[1]) 在线量 | - |
| `data[][8]` | number | 周期2(title[1]) 周期上新占比(前端追加%展示) | - |
| `data[][9]` | number | 周期3(title[2]) 销售额 | - |
| `data[][10]` | number | 周期3(title[2]) 周期上新量 | - |
| `data[][11]` | number | 周期3(title[2]) 在线量 | - |
| `data[][12]` | number | 周期3(title[2]) 周期上新占比(前端追加%展示) | - |
| `data[][13]` | number | 周期4(title[3]) 销售额 | - |
| `data[][14]` | number | 周期4(title[3]) 周期上新量 | - |
| `data[][15]` | number | 周期4(title[3]) 在线量 | - |
| `data[][16]` | number | 周期4(title[3]) 周期上新占比(前端追加%展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
