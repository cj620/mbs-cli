<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# oms - 订单系统

## 业务域

- 适用场景：订单
- 关键词：订单
- Service：`-`

## 接口发现

```bash
mbs find "<用户原始需求>" --domain oms
```

从候选中确认目标接口后，只读取返回的 `detailPath`：

```bash
mbs skills show --file references/oms/<action>.md
```

- 不在本文件中平铺或扫描全部 action。
- 命中 workflow 时按 steps 的 `intentQuery` 继续检索 API。
- 低置信、无结果或歧义时先补充条件。
- 读取单接口详情并确认必填参数后，才执行返回的只读命令。
