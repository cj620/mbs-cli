# Python 本地分析协作

## 使用条件

出现以下任一情况时优先使用 Python，而不是把原始数据放入 Agent 上下文：

- 超过 200 行；
- 需要分组、透视、同比环比、异常检测或多轮试算；
- 需要读取 CSV、JSON、NDJSON、Parquet 等本地中间文件；
- 需要保证精确数值和可重复计算。

## 安全边界

- MBS 数据只能由 `mbs` 命令或本机 `mbs serve` 获取。
- Python 不读取 CLI 凭证，不直接请求上游 MBS API，不执行写操作。
- 原始数据保留在本地文件或本地进程内；Agent 只读取压缩结果。
- 临时服务只绑定 `127.0.0.1`，不暴露到局域网或公网。

## 任务输入

向 Python 提供文件路径和分析计划，不把全部数据粘贴进提示词：

```json
{
  "source": "./data/query.ndjson",
  "grain": ["statDate", "platform", "shop"],
  "metrics": [
    { "name": "gmv", "field": "salesAmount", "aggregation": "sum" },
    { "name": "orders", "field": "orderCount", "aggregation": "sum" }
  ],
  "dimensions": ["platform", "shop"],
  "time": { "field": "statDate", "bucket": "day" },
  "filters": {}
}
```

## 压缩输出契约

Python 只返回页面和结论需要的数据：

```json
{
  "summary": {},
  "metrics": [],
  "dimensions": [],
  "series": [],
  "rankings": [],
  "anomalies": [],
  "dataQuality": {
    "rows": 0,
    "missing": {},
    "duplicates": 0,
    "warnings": []
  },
  "provenance": {
    "source": "mbs database query",
    "generatedAt": "ISO-8601",
    "filters": {},
    "metricDefinitions": {}
  }
}
```

不要返回全量明细。需要定位问题时，只返回有限的异常样本和对应主键。
