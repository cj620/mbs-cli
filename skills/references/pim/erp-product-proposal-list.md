# mbs pim erp-product-proposal-list

运营优化建议(SPU)列表查询：库存/今日必做看板「优化」(optimiz/重新检测)Tab 的列表分页查询：按店铺名称、平台、店长、处理状态、itemId 等条件分页查询命中运营策略的 SPU，返回每条 SPU 的图片/标题/订单量/PV-UV/加购收藏/转化率/毛利率/评价评分/推送处理时间/处理状态、问题诊断规则(rule)与优化策略动作列表(actionList)。

## 用法

```bash
mbs pim erp-product-proposal-list --page <number> [--shopNameList <array>] [--platformIdList <array>] [--shopManagerList <array>] --pageSize <string> [--status <string>] [--itemid <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/operateStrate/proposalList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码。首屏 optimizSearch() 固定传 1；翻页回调取 api.getCurrent() |
| `shopNameList` | shopNameList | body | array | 否 | - | 店铺名称列表。来源控件 #shopName，非空时按 , 与空格拆分为字符串数组，否则传 [] |
| `platformIdList` | platformIdList | body | array | 否 | - | 平台ID列表。来源控件 #plantform；首屏为 [值]，翻页时按 , 拆分为数组，空则 [] |
| `shopManagerList` | shopManagerList | body | array | 否 | - | 店长列表。来源控件 #shopleader，非空时为 [值]，否则 [] |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数。来源控件 #optimizPageSize |
| `status` | status | body | string | 否 | - | 策略处理状态(优化建议状态筛选)。来源控件 #optimizStict |
| `itemid` | itemid | body | string | 否 | - | 平台商品 itemId 过滤。来源控件 #itemid，仅翻页回调 optimizPaging() 携带，首屏不传 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(为空时列表清零) | - |
| `obj.count` | number | 满足条件的总条数 | - |
| `obj.countPage` | number | 总页数(用于初始化分页) | - |
| `obj.result[]` | array | 优化建议(SPU)列表 | - |
| `obj.result[][0]` | string | 商品SPU编号 | - |
| `obj.result[][1]` | string | 商品主图URL | - |
| `obj.result[][2]` | string | 媒体ID(存在时显示媒体角标) | - |
| `obj.result[][3]` | number | 图片数量(展示为「N图」) | - |
| `obj.result[][4]` | string | 开发员 | - |
| `obj.result[][5]` | string | 开发时间(前端取前10位展示) | - |
| `obj.result[][6]` | string | 平台商品详情页URL | - |
| `obj.result[][7]` | string | 商品标题 | - |
| `obj.result[][8]` | string | 店长 | - |
| `obj.result[][9]` | string | 平台商品itemId(编辑跳转用) | - |
| `obj.result[][10]` | string | 店铺名称 | - |
| `obj.result[][11]` | number | 近7日订单量 | - |
| `obj.result[][12]` | number | 近30日订单量 | - |
| `obj.result[][13]` | number | 近7日浏览量PV | - |
| `obj.result[][14]` | number | 近7日访客数UV | - |
| `obj.result[][15]` | number | 支付买家数 | - |
| `obj.result[][16]` | number | 近7日加购人数(为0或空展示「----」) | - |
| `obj.result[][17]` | number | 近7日收藏人数(为0或空展示「----」) | - |
| `obj.result[][18]` | number | 搜索点击率(原值小数,前端×100保留2位展示%) | - |
| `obj.result[][19]` | number | 支付转化率(原值小数,前端×100保留2位展示%) | - |
| `obj.result[][20]` | number | 七天毛利率(原值小数,前端×100保留2位展示%) | - |
| `obj.result[][21]` | number | 刊登毛利率-最小值(×100保留2位展示%) | - |
| `obj.result[][22]` | number | 刊登毛利率-最大值(×100保留2位展示%) | - |
| `obj.result[][23]` | number | 评价总数(无值展示「---」) | - |
| `obj.result[][24]` | number | 评分(前端×1保留1位展示,无值展示「---」) | - |
| `obj.result[][25]` | string | 推送时间(前端取前10位展示) | - |
| `obj.result[][26]` | string | 处理完成时间(空时展示「-----」,前端取前10位) | - |
| `obj.result[][27]` | string | 处理状态文案。='处理完成' 时显示完成态并隐藏操作,否则显示处理/编辑下拉 | - |
| `obj.result[][28]` | string | 平台标识。'smt'/'shopee' 决定编辑入口;并作为 handleProposal 入参 | - |
| `obj.result[][29]` | string | 平台ID集合(前端会用 localStorage.platformIds 覆盖并按逗号判断含'10'/'26'决定编辑按钮显隐) | - |
| `obj.result[][30]` | string | 优化建议记录ID(optimizShow 取 obj.id 作 handleProposal 入参) | - |
| `obj.result[][31]` | object | 问题诊断规则对象 | - |
| `obj.result[][31].rulePlan` | string | 问题诊断内容(命中规则方案描述) | - |
| `obj.result[][31].ruleExplain` | string | 场景说明(规则解释) | - |
| `obj.result[][32][]` | array | 优化策略动作列表(拼接为优化策略文案;弹窗逐项渲染勾选) | - |
| `obj.result[][32][][0]` | string | 策略动作ID(弹窗勾选 value,optimizSure 拼入 finishActionIds) | - |
| `obj.result[][32][][1]` | string | 策略标题 | - |
| `obj.result[][32][][2]` | string | 策略描述 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
