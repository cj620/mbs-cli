<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-shop-by-condition

按条件查询店铺：按条件查询店铺(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-get-shop-by-condition [--times <string>] [--platformName <string>] [--platformNameList <array<string>>] [--bigChief <string>] [--teamNumber <string>] [--shopName <string>] [--grade <integer>] [--warningIndexs <array<string>>] [--shopManagers <array<string>>] [--page <integer>] [--pageSize <integer>] [--startIndex <integer>] [--customerServiceList <array<string>>] [--shopNameList <array<string>>] [--smallScore <integer>] [--bigScore <integer>] [--shopManager <string>] [--chartType <string>] [--position <integer>] [--operateStatus <integer>] [--managerEmployeeList <array<string>>] [--sqlList <array<string>>] [--grades <array<integer>>] [--keyWord <string>] [--keyWordList <array<string>>] [--platformIds <array<string>>] [--bigChiefList <array<string>>] [--employeeList <array<string>>] [--customerServiceMgr <string>] [--shopNames <array<string>>] [--lastTimes <string>] [--directors <array<string>>] [--managers <array<string>>] [--shopManagerIds <array<string>>] [--sites <array<string>>] [--shopManagerStar <array<string>>] [--tableName <string>] [--skuOperList <array<string>>] [--openShopStartTime <string>] [--openShopEndTime <string>] [--qualifyTotalAmountFlag <integer>] [--qualifyfhmaoliFlag <integer>] [--firstMonthFlag <integer>] [--submitStrategy <boolean>] [--shopModel <string>] [--categoryId <string>] [--companyId <string>] [--companyIdSpecial <string>] [--companyIdEmp <array<string>>] [--companyIdSpecialEmp <array<string>>] [--categoryShopList <array<string>>] [--specialSumRanking <boolean>] [--exportTitleList <array<string>>] [--exportTimeList <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/middlePanel/getShopByCondition`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `times` | times | body | string | 否 | - | 年月 |
| `platformName` | platformName | body | string | 否 | - | 平台名称 |
| `platformNameList` | platformNameList | body | array<string> | 否 | - | 平台名称列表（字段名推断,语义待核实） |
| `bigChief` | bigChief | body | string | 否 | - | 大酋长 |
| `teamNumber` | teamNumber | body | string | 否 | - | 组员 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称 |
| `grade` | grade | body | integer | 否 | - | -1 差, 0一般, 1优秀 |
| `warningIndexs` | warningIndexs | body | array<string> | 否 | - | 警戒指标 选中, 显示对应指标触发警戒的, 如果选择多个 or的关系 |
| `shopManagers` | shopManagers | body | array<string> | 否 | - | 店铺Managers（字段名推断,语义待核实） |
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `customerServiceList` | customerServiceList | body | array<string> | 否 | - | 客户服务列表（字段名推断,语义待核实） |
| `shopNameList` | shopNameList | body | array<string> | 否 | - | 店铺名称列表（字段名推断,语义待核实） |
| `smallScore` | smallScore | body | integer | 否 | - | Small评分（字段名推断,语义待核实） |
| `bigScore` | bigScore | body | integer | 否 | - | BIG评分（字段名推断,语义待核实） |
| `shopManager` | shopManager | body | string | 否 | - | 店铺管理（字段名推断,语义待核实） |
| `chartType` | chartType | body | string | 否 | - | sales 销售额, profitAmount 毛利额, profitRate 毛利率, refundRate 退款率, stockoutRate 缺货率, cancellationRate 作废率 |
| `position` | position | body | integer | 否 | - | 0 组员 1 经理 2 总监 3 平台(换表) |
| `operateStatus` | operateStatus | body | integer | 否 | - | 1 运营中 、2暂停运营、3永久关闭中 |
| `managerEmployeeList` | managerEmployeeList | body | array<string> | 否 | - | 管理员工列表（字段名推断,语义待核实） |
| `sqlList` | sqlList | body | array<string> | 否 | - | SQL列表（字段名推断,语义待核实） |
| `grades` | grades | body | array<integer> | 否 | - | Grades（字段名推断,语义待核实） |
| `keyWord` | keyWord | body | string | 否 | - | 键词（字段名推断,语义待核实） |
| `keyWordList` | keyWordList | body | array<string> | 否 | - | 键词列表（字段名推断,语义待核实） |
| `platformIds` | platformIds | body | array<string> | 否 | - | 平台ID列表（字段名推断,语义待核实） |
| `bigChiefList` | bigChiefList | body | array<string> | 否 | - | BIG主管列表（字段名推断,语义待核实） |
| `employeeList` | employeeList | body | array<string> | 否 | - | 员工列表（字段名推断,语义待核实） |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客户服务管理（字段名推断,语义待核实） |
| `shopNames` | shopNames | body | array<string> | 否 | - | 店铺名称列表（字段名推断,语义待核实） |
| `lastTimes` | lastTimes | body | string | 否 | - | 最近次数（字段名推断,语义待核实） |
| `directors` | directors | body | array<string> | 否 | - | 总监 |
| `managers` | managers | body | array<string> | 否 | - | 经理 |
| `shopManagerIds` | shopManagerIds | body | array<string> | 否 | - | 店长id |
| `sites` | sites | body | array<string> | 否 | - | Sites（字段名推断,语义待核实） |
| `shopManagerStar` | shopManagerStar | body | array<string> | 否 | - | 人员维度星级 |
| `tableName` | tableName | body | string | 否 | - | 表名称（字段名推断,语义待核实） |
| `skuOperList` | skuOperList | body | array<string> | 否 | - | SKU操作列表（字段名推断,语义待核实） |
| `openShopStartTime` | openShopStartTime | body | string | 否 | - | 开启店铺开始时间（字段名推断,语义待核实） |
| `openShopEndTime` | openShopEndTime | body | string | 否 | - | 开启店铺结束时间（字段名推断,语义待核实） |
| `qualifyTotalAmountFlag` | qualifyTotalAmountFlag | body | integer | 否 | - | Qualify总金额标志（字段名推断,语义待核实） |
| `qualifyfhmaoliFlag` | qualifyfhmaoliFlag | body | integer | 否 | - | Qualifyfhmaoli标志（字段名推断,语义待核实） |
| `firstMonthFlag` | firstMonthFlag | body | integer | 否 | - | 首个月份标志（字段名推断,语义待核实） |
| `submitStrategy` | submitStrategy | body | boolean | 否 | - | true --> 已提交 |
| `shopModel` | shopModel | body | string | 否 | - | 店铺模式 |
| `categoryId` | categoryId | body | string | 否 | - | 店铺分类 |
| `companyId` | companyId | body | string | 否 | - | 公司id |
| `companyIdSpecial` | companyIdSpecial | body | string | 否 | - | 公司ID特殊（字段名推断,语义待核实） |
| `companyIdEmp` | companyIdEmp | body | array<string> | 否 | - | 公司下的人员 |
| `companyIdSpecialEmp` | companyIdSpecialEmp | body | array<string> | 否 | - | 公司下的人员 |
| `categoryShopList` | categoryShopList | body | array<string> | 否 | - | 目前是在导出的时候会用到这个字段。 |
| `specialSumRanking` | specialSumRanking | body | boolean | 否 | - | 是否为 需要汇总的排行。。 |
| `exportTitleList` | exportTitleList | body | array<string> | 否 | - | 需要导出的标题头 |
| `exportTimeList` | exportTimeList | body | array<string> | 否 | - | 导出使用的时间字段 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.fileName` | string | 文件名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.filePath` | string | 文件路径（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createdTimeStr` | string | 创建时间字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createdBy` | string | 创建人（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyId` | string | 公司ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyName` | string | 公司名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PLATFORMID` | string | Platformid（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PLATFORMNAME` | string | Platformname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyid` | string | Companyid（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyname` | string | Companyname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.split` | string | 拆分（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryId` | string | 类目ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryName` | string | 类目名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
