# fars - 财务系统

通过 `mbs fars` 命令查询财务系统数据。

## 数据来源

- Service: `-`

## 适用场景

财务

## 意图匹配

关键词：财务

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 钉钉考勤(奋斗榜)查询：获取钉钉考勤奋斗榜数据，返回员工加班时长排行列表(含头像、姓名、部门、加班小时数)及考勤统计时间，用于 struggleLlist 看板页面渲染。 | `mbs fars erpaccount-get-ding-ding-attendance` | - |
| 仪表盘-国家下拉列表查询：财务仪表盘(经理case分析页)初始化时拉取国家列表，用于填充“按国家搜索”的国家下拉框 #country。页面加载即自动调用 country()，无入参，返回国家值数组，前端用 art-template 渲染为 <option>。 | `mbs fars erpaccount-country` | - |
| 上次登录信息查询：仪表盘(common.html)加载后由 getmessageconfig() 成功回调触发 lastLogininfo()，GET 查询当前登录用户的上次登录信息（登录人、提示文案、IP、时间及提示级别），渲染到顶部告警条 #lastLogininfo，5秒后自动收起。无请求参数。 | `mbs fars erpaccount-last-logininfo` | - |
| 物流店铺下拉列表查询：加载「Case分析（管理明细）」页面店铺筛选下拉框(#shoptype)的可选项数据。页面初始化时无参 GET 调用，返回店铺集合，前端用 art-template(contentTemplate2) 渲染为 option，仅取 shopName 作为选项值与文本。 | `mbs fars erpaccount-shop` | - |
| 财务推送任务-获取期数列表(getCycles)：财务导入进度页面初始化(onMounted)时调用，获取可选的财务期数列表，用于顶部"请选择期数"下拉框；返回后默认选中第一项并据其 years/cycle 触发任务列表查询。无请求参数。 | `mbs fars erp-finance-get-cycles` | - |
| 财务推送任务进度查询：财务数据导入页按所选期数(年份 years + 期次 cycle)查询财务推送任务列表，返回各任务的应导入数/成功数/失败数/进度/状态等汇总字段，用于 el-table 渲染任务进度。 | `mbs fars erp-finance-get-finance-push-task` | - |
| 出库单SKU明细查询：在「商品退回(供应商回款)」列表中点击某条出库单行展开时，按出库单号(orderId)懒加载该单下的 SKU 明细行，返回每个 SKU 的名称、数量、成本价/成本合计、零售价/零售合计及异常处理信息，用于在树形子行中展示。 | `mbs fars erp-finance-sku` | `orderId` |
| Payoneer 账号授权链接获取：根据 Payoneer 账号ID获取该账号的 OAuth 授权链接。前端点击「获取授权链接」按钮触发；返回链接非空时 window.open 打开授权，返回空字符串时提示「暂无授权链接」。 | `mbs fars erp-finance-auth-url` | `accountId` |
| 待办通知-爆单SPU通知查询：经理工作台待办通知区点击「爆单SPU」按钮触发，按当前登录员工 userid 拉取待处理爆单SPU通知列表(JSON字符串)及未读条数，前端 JSON.parse 后 shift() 移除首元素再用 contentComment 模板渲染；JSONP 跨域调用。 | `mbs fars yyaccount-instudio-account-getstaymessage1` | `userid` |
| 待办通知（全部通知）查询：经理看板右侧通知卡片点击【全部】按钮触发，按当前员工 userid 拉取全部待办/通知消息列表，返回 JSON 字符串形式通知数组与新通知条数；前端 JSON.parse(data.obj) 后 shift() 去首行，用 art-template contentComment 渲染到 #comment-section。 | `mbs fars yyaccount-getstaymessage` | `userid`, `callback` |
| 开发员账单详情查询：按账单ID查询某开发员账期账单详情，返回结算汇总(settlement)、账单总额(bill)、账期起止、收入明细列表(incomeList)、支出明细列表(disburseList)；前端按岗位渲染不同的过程管理与最终绩效模块。 | `mbs fars yyfms-id-get-developer-bill-detail` | `id` |
| 销售账单(绩效结算账单)查询：按账单ID查询销售人员账期内的绩效结算账单详情：含账单周期、收入/支出汇总、收入明细列表、支出明细列表，以及绩效结算(目标销售额、完成率、各档提点、折扣、最终绩效、各项奖金/罚款/补贴等)数据，供绩效结算账单页面渲染。 | `mbs fars yyfms-id-get-sale-bill` | `id` |
| 查询当前用户岗位名称：根据员工ID查询其在财务结算体系中的岗位名称，前端据返回值是否等于"财务组员"来控制仪表盘上提现登记/账户流水登记两组区块的显隐。JSONP 跨域调用。 | `mbs fars yyfms-fms-position-name` | `userId` |
| 经理月度考核查询：经理月度考核数据查询：按所选平台与月份返回各月经理（人员）的毛利额增长得分、新品销售额得分、爆款得分、总分及发货毛利率等考核字段，用于经理月度考核播报表格展示。 | `mbs fars erpaccount-get-manager-month` | `platformName` |
| 超2天未发货采购单详情查询：仪表盘下钻：按销量级别(typename)、产品状态(status)、开发员(oper3)筛选，查询超过2天仍未发货的采购单(采购批次)详情列表，返回采购批次、供应商、SKU、采购员、待发货/库存/在途量等字段。 | `mbs fars erpaccount-get-over-two-days-unshipped-delivery` | - |
| 平台正常在售产品刊登报表查询：财务管理看板加载“正常在售产品刊登报表”：无入参，按商品类目返回 EBAY/ALIEXPRESS/WISH/AMAZON/LAZADA/SHOPEE 六大平台的在线老品SKU数、在线新品SKU数(新品=30天内创建的sku)、平均刊登量，前端用 art-template 渲染为表格。 | `mbs fars erpaccount-get-platform-publish-info` | - |
| 八个平台缺货率查询：平台店长看板（platformleader）加载时调用，按平台维度统计各电商平台的库存缺货率与按时发货率，返回平台缺货率列表，前端据缺货率高低用不同颜色卡片渲染（≥15%红/10~15%黄/5~10%灰/<5%绿），并可点击查看单平台缺货 SKU 明细。 | `mbs fars erpaccount-get-platform-shortage-rate` | - |
| 正常在售产品刊登覆盖率查询：商品刊登覆盖率看板查询：按商品类目维度统计马帮老品/新品 SKU 数量，以及老品、新品在 EBAY/ALIEXPRESS/WISH/AMAZON/LAZADA/SHOPEE 六大平台的铺货覆盖率（新品=30天内创建的 sku）。页面加载即自动调用，无请求参数。 | `mbs fars erpaccount-get-pro-publish-cover-rate` | - |
| 超7天采购单详情查询：看板「超7天采购单」明细下钻：按销量级别(typename)、产品状态(status)、开发员(oper3)筛选，返回超7天未到货采购单明细列表(采购批次/供应商/SKU/采购员/销量级别/产品状态/开发员/待发货量/库存量/在途量)。 | `mbs fars erpaccount-get-purchaseanalysis-over-seven-day` | - |
| 销售层级报表(客服版 kf)查询：仪表盘商品图表页(productChart)在 flag==2(客服版)分支调用：按 SKU类型、所选统计指标、基准日期与前后30天方向，返回 ECharts 折线图所需的 X 轴类目数据与多系列数据，用于渲染近30天趋势图。 | `mbs fars erpaccount-get-sales-level-reportkf` | - |
| 缺货SKU列表查询：仪表盘“缺货SKU”明细查询：按平台分类(sortnum)查询当前缺货的SKU列表，返回每个SKU的图片、商品信息、状态、侵权/淘汰标记、开发员/采购员、缺货单量与件数、销售级别、近7/30/90天销量、产品创建时间、最新采购信息及最后一次跟进日志。 | `mbs fars erpaccount-get-shorage-sku-info` | - |
| 根据平台查询站点：首页仪表盘「销量趋势图」筛选区，根据已勾选的平台(可多选,逗号拼接)查询对应的站点列表，返回站点名称数组，用于渲染「站点」多选下拉框(#ulSite)。 | `mbs fars erpaccount-get-site-by-platform` | `platform` |
| 平台下拉列表查询：仪表盘销售员页加载时调用，返回当前用户可见的平台名称列表，用于填充销量趋势图/销售占比图的平台下拉选择框。请求无任何业务参数，后端依据登录态返回平台名称字符串数组。 | `mbs fars erpaccount-platform-pull-down` | - |
| 开发SKU平均订单缺货时长(开发酋长缺货率)查询：看板首页加载时调用，查询各开发酋长(productManager)近60-15天开发SKU在出单后各缺货时长区间(0-4/4-7/7-15/15-20/20天以上)的订单量、SKU数、缺货占比，以及总缺货订单量与总平均缺货天数；前端按 skunum04Ratio 计算最大/最小项加红绿高亮，渲染至 #content11 表格。 | `mbs fars erpaccount-product-managerqhlv` | - |
| 已采购的SKU明细查询：采购分析看板「已采购的SKU」下钻明细：根据销量级别(typename)、状态(status)、开发员(oper3)三个查询条件，查询对应分组下的已采购SKU列表，返回 SKU、销量级别、状态、缺货量、在途量、开发员、采购员等字段，前端用 art-template 渲染为表格。 | `mbs fars erpaccount-purchaseanalysis-purchased-sku-detail` | `typename` |
| 超4天采购单详情查询：Dashboard“超4天采购单详情”明细查询：按销量级别(类型名称)、产品状态、开发员三项过滤条件，返回符合条件的采购单明细行（采购批次、供应商、SKU、采购员、销量级别、产品状态、开发员、待发货量、库存量、在途量）。前端以 art-template 渲染为明细表。 | `mbs fars erpaccount-purchaseanalysis-purchase-order-detail` | - |
| 未采购SKU明细查询：财务域 Dashboard「未采购的SKU」明细查询：按销量级别(typename)、状态(status)、开发员(oper3)三项条件查询未采购SKU列表，返回SKU、销量级别、状态、缺货量、在途量、开发员、采购员等字段，前端用 art-template 渲染为表格。 | `mbs fars erpaccount-purchaseanalysis-sku-detail` | - |
| Case按月统计(按所属订单月份归类)：仪表盘经理明细页：按搜索类型(物流方式/国家/订单月份/店铺/马帮SKU)与时间区间统计 case 数。页面 search() 用同一组参数发起两次 POST：第一次绘制 ECharts 柱状图(月份-case数)，第二次渲染明细表(月份/case数/case数按订单月份归类占比)。本页固定为按所属订单月份搜索(filterType=5)。 | `mbs fars erpaccount-show-case-by-month` | `detailCase` |
| 缺货SKU明细查询：采购分析-缺货SKU明细查询：根据销量级别(typename)、状态(status)、开发员(oper3)查询对应缺货SKU列表，返回每个缺货SKU的图片、名称、SKU、状态、成本价、供应商、缺货量、在途量、开发员/采购员等信息，用于「缺货SKU」看板明细渲染。 | `mbs fars erpaccount-urchaseanalysis-shortage-sku-detail` | `typename`, `status` |
| Lazada优惠券(促销)执行记录列表查询：查询各店铺Lazada促销(优惠券)定时执行结果：按店铺/店长(组员)/大酋长/站点/状态/日期类型与时间区间分页筛选，返回店铺、店长、站点、促销设置、上一次成功/失败时间及失败原因，并支持分页与排序。 | `mbs fars erpaccount-lazada-coupon-list` | `page`, `pageSize` |
| Lazada店铺未读消息列表查询：Lazada未读消息看板分页查询：按排序方式分页返回各Lazada店铺的未读消息统计（ID/TH/MY/PH/SG/VN六站点未读数）、店铺状态、是否超过30分钟未同步消息、店铺登录账号密码等信息，前端以卡片形式渲染并支持分页。 | `mbs fars erpaccount-lazada-un-read-message-list` | `page` |
| 物流(货运渠道)统计明细查询：物流明细看板按统计时间区间查询各货运渠道(默认按货运渠道维度)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款/回归退款、各平台(wish/ebay/amz/smt/joom/其他)单量及覆盖国家等统计指标；支持类型筛选与多种排序方式。 | `mbs fars erpaccount-find-all-logistics` | - |
| 物流商(51渠道)列表查询：查询51渠道物流商(express code51)列表：支持按物流商名称、物流商编码过滤并分页。前端两处复用——物流商下拉数据源(getcustmer，仅传 courierCode 取全量)与时效配置弹窗列表(searchtraffic，传 page/pageSize/logisticsProviderName 分页查询)，返回物流商及其时效限制配置(limitJsonList)。 | `mbs fars erpaccount-find-express-code51-all` | - |
| 物流统计-按国家查看：物流统计仪表盘「按国家查看」维度查询：按统计时间区间、物流类型(平邮/挂号)、排序方式，返回各国家的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款/回归退款、各平台(wish/ebay/amz/smt/joom/其他)分布等统计数据。 | `mbs fars erpaccount-find-for-country` | `sortorder`, `startTime`, `endTime` |
| 物流公司维度物流统计查询：物流统计看板「按物流公司查看」维度的统计查询：按统计时间区间与排序方式，返回各物流公司的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款情况及各平台(wish/ebay/amazon/aliexpress/joom/其他)发货单量。 | `mbs fars erpaccount-find-for-logisticscompany` | - |
| 物流方式统计查询(findLine)：物流仪表盘统计接口：按统计时间区间与排序方式，统计各物流方式(/货运渠道/国家/物流公司，随页面 viewMode 切换)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款及各平台(wish/ebay/amz/smt/joom/其他)单量。 | `mbs fars erpaccount-find-line` | - |
| 物流订单信息查询：电商订单物流信息分页查询：按订单名称/客户、客户预留(自选物流)、货运方式、时间区间筛选，分页返回订单列表(订单编号、状态、店铺、金额、国家、物流单号、交易号、平台订单号等)及总条数/总页数。 | `mbs fars erpaccount-find-logistics-info2` | `pageSize` |
| 物流商(物流渠道)名称分页查询：按物流商名称(模糊)查询物流渠道(物流商)列表：用于货运详情/物流时效监控页头部物流渠道下拉数据加载(不分页)，以及运营商及马帮渠道配置弹窗的分页列表(含分页与总数)。返回物流渠道行(渠道ID、物流商名称、物流商编码、是否国外、51Express渠道ID等)。 | `mbs fars erpaccount-find-logistics-provider-name-all` | `logisticsProviderName` |
| 昨天货运渠道监控报表查询：物流员/销售首页仪表盘加载时调用，按时间区间统计昨天各货运渠道的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比及渠道启用状态，返回渠道监控列表用于「昨天货运渠道监控报表」表格渲染。 | `mbs fars erpaccount-find-logistics` | `sortStyle`, `endnum`, `startTime`, `endTime` |
| Shopee店铺未读消息列表查询：分页查询当前用户名下 Shopee 店铺的未读站内信统计：返回每个店铺下各站点账号的未读消息条数、登录状态(是否需验证码、是否超1小时未同步)等，前端按卡片渲染并提供逐站点登录跳转。 | `mbs fars erpaccount-shopee-un-read-message-list` | `page` |
| 账单导入Excel历史记录列表查询：查询账单导入(Excel上传)的历史记录列表，返回每次上传的文件名、上传时间、上传人、总记录/成功数/失败数、成功金额、状态及失败订单文件等信息，供 report/excelList.html 页面渲染历史记录表格。无请求参数。 | `mbs fars erp-finance-excel-list` | - |
| 平台账单查询：按平台、店铺、费用起止日期查询各平台店铺的账单汇总：订单收入、到帐/平台费/物流费/服务费/广告费/罚款/退款/放款金额、应收款余额及占比，返回账单列表用于财务报表页渲染。 | `mbs fars erp-finance-find-platform-bill` | - |
| 获取平台列表：财务报表(平台账单)页加载时调用，无入参，返回当前用户可见的平台列表，用于渲染页面顶部「平台」下拉选择框(art-template PlatformTemplate)。 | `mbs fars erp-finance-get-platform` | - |
| 平台店铺列表查询：财务-平台账单页中，平台下拉框 change 时触发，按所选平台名称查询其下全部店铺，返回店铺列表用于渲染「店铺」下拉框选项。 | `mbs fars erp-finance-get-shop-bill` | - |
| 科目(会计科目)列表查询：查询全部会计科目(account.account)列表，用于日记账凭证页面顶部筛选栏“科目”下拉框，以及创建/修改凭证弹窗中的“科目/银行科目”下拉框数据填充。页面加载时一次性拉取全部科目，前端用 art-template 渲染为 <option>。前端为不带请求体的空 POST。 | `mbs fars erp-finance-finance-account-account-list` | - |
| 日记账凭证(分录)列表查询：日记账凭证页(journalVoucher)列表分页查询：按科目、账户、币种、凭证来源、费用日期区间、摘要等条件筛选，返回会计分录(account_move_line)列表及借贷方、状态、创建人等字段。 | `mbs fars erp-finance-finance-account-move-line-list` | `page`, `pageSize` |
| PayPal账户(账户)列表查询：查询当前用户可用的 PayPal/收款账户列表，用于「日记账凭证」页面顶部账户筛选下拉框(#BalanceList)、创建凭证弹窗账户下拉(#addBalance)、编辑凭证弹窗账户下拉(#editBalance)的数据渲染。前端 financePaypalBalanceList() 在页面加载时调用，不传任何请求参数，返回账户数组(每项含账户ID与账户邮箱)。 | `mbs fars erp-finance-finance-paypal-balance-list` | - |
| 财务推送任务-销售导入日志查询：财务数据导入页面：展开某个推送任务行或导入过程中(每5秒轮询)调用，按期数(年份/周期)+任务ID查询该任务下的销售导入子任务列表，返回各子任务的数据周期、应导入数/成功数/失败数、进度、操作人、状态、操作时间，用于表格展开行渲染与进度刷新。 | `mbs fars erp-finance-get-finance-push-task-sell` | `taskId` |
| 币种(资源币种)列表查询：日记账凭证页面初始化时获取全部资源币种列表，用于渲染「币种」筛选下拉、创建凭证弹窗(addCurrency)与编辑凭证弹窗(editCurrency)的币种选择框。接口无请求参数，直接返回币种数组。 | `mbs fars erp-finance-finance-res-currency-list` | - |
| 分析账户列表查询：日记账凭证(创建/编辑凭证)页面点击「分析账户」时，按名称关键词分页查询分析账户列表，供用户选择并回填到凭证的「分析账户」输入框。 | `mbs fars erp-finance-finance-analytic-account` | `page`, `pageSize` |
| 辅助核算(合作伙伴)列表查询：日记账凭证创建/编辑时，点击「辅助核算」打开 #partnerModal 弹窗，按名称关键词分页查询合作伙伴(辅助核算)列表，供选择后回填到凭证的辅助核算字段。支持 name 关键词模糊搜索与 page/pageSize 分页。 | `mbs fars erp-finance-finance-res-partner-list` | `page`, `pageSize` |
| 供应商回款·出库单分页查询：供应商回款（退货/回款）管理页的出库单分页列表查询：按回款状态、出库单号、运单号、订单状态、创建人、供应商旺旺号、建单/发货/回款时间区间、回款方式、公司、采购员、供应商类型、填写人、仓库等条件分页查询，返回分页对象(total/totalPages/rows)及金额汇总对象(total)。 | `mbs fars erp-finance-page` | `currentPage`, `pageSize` |
| Payoneer账号列表查询：查询 Payoneer 合作伙伴账号列表：支持按邮箱、账号状态筛选并分页，返回账号基础信息(ID/合作伙伴ID/邮箱/姓名/电话/地址/状态/授权状态)及总数。 | `mbs fars erp-finance-list` | - |
| 获取PayPal纠纷退货地址列表：PayPal纠纷(Case)处理详情页加载时调用，拉取当前账号可用的退货地址列表，用于退货并部分退款(PART_REFUND_RETURN)、退货并全额退款(FULL_REFUND_RETURN)的退货地址下拉选择(.refundAddress)。无请求参数，返回地址列表(每项含地址主键 sid 与地址展示内容 content)。 | `mbs fars erp-finance-get-paypal-case-address` | - |
| PayPal纠纷案件处理意见列表查询：在 PayPal 纠纷案件详情页加载处理意见(建议)列表：以路径方式传入案件编号 caseId 与查询类型 2，返回该案件下全部处理意见记录(含处理意见内容、提交人/时间、状态、完成人、驳回原因等)，前端用 suggestTemplate 渲染到 #suggestContent 表格。 | `mbs fars erp-finance-type` | `caseId`, `type` |
| 获取PayPal账号列表(下拉数据)：PayPal纠纷Case列表页初始化时调用，获取全部可筛选的PayPal账号及其对应Case数量，用于渲染页面顶部"请选择paypal账号"多选下拉框(#paypal)的选项。每个选项展示为 账号名称(数量)。该接口无请求参数。 | `mbs fars erp-finance-get-paypal` | - |
| 获取客服信息（店铺客服列表）：进入 PayPal 纠纷(Case)列表页时调用，拉取全部「店铺客服(客服服务员)」名称列表，用于渲染页面顶部「客服」多选下拉框(#shopCustomer)的可选项；用户选中的客服作为 shopCustomerServiceerList 参与 Case 列表查询及店铺联动查询。 | `mbs fars erp-finance-get-shop-customer-serviceer` | - |
| 获取店长信息：PayPal纠纷(Case)列表页初始化时调用，无入参，返回当前可选的店长名称列表，用于填充顶部"店长"多选下拉框(#shopManager)，作为列表查询的筛选条件来源。 | `mbs fars erp-finance-get-shop-manager` | - |
| 获取店铺信息(按店长/客服筛选)：PayPal纠纷案件列表页(paypalcaseList)的店铺下拉框联动数据源。根据已选择的店长(shopManager)与客服(shopCustomer)多选条件，查询对应店铺名称列表，用于渲染店铺多选下拉(#shopName)。页面加载时、以及店长/客服选择变化(onchange=getShop())时触发。 | `mbs fars erp-finance-get-shop-paypalcase` | - |
| PayPal纠纷事件详情查询：根据纠纷事件编号(caseId)查询单条 PayPal 纠纷(case)事件详情：返回事件基本信息(店铺、客服/店长、账单、状态、到期日)、争议/交易/退款金额、物品信息列表、买卖双方对话消息列表以及当前可选的处理方式(taskList)，用于详情页(paypalcaseDetail.html)渲染。 | `mbs fars erp-finance-case-id` | `caseId` |
| PayPal纠纷(Case)列表查询：PayPal纠纷(Case)列表查询：按编号类型(事件编号/交易号/账单编号)、原因、到期日区间、处理状态、PayPal账号、店铺/店长/客服、平台、异常case等条件分页查询，并返回未解决/已结束事件统计及待处理/审查中/等待对方处理各子状态数量与当前生命周期阶段的Case列表。 | `mbs fars erp-finance-paypalcase-list` | `page`, `pageSize` |
| PayPal Case 原因列表查询：查询 PayPal 纠纷案件（Case）的全部「原因」枚举项，用于 PayPal Case 列表页顶部「请选择原因」多选下拉框的渲染。无请求参数，页面加载时调用一次，返回原因值/名称数组供用户多选筛选。 | `mbs fars erp-finance-paypal-case-reason` | - |
| 获取PayPal纠纷承运商常量(TRACK_NAME)：PayPal纠纷详情页加载时调用，获取"提供跟踪信息"时可选择的承运商(物流商)常量列表。URL中 TRACK_NAME 为固定常量类型标识。返回承运商列表渲染为 #paypalConstant 下拉框选项，供提交跟踪信息时填入 carrierName。无请求体参数。 | `mbs fars erp-finance-get-paypal-case-constant` | - |
| 财务数据批量更新/核销（通用 updateRows）：前端通用助手 updateRows(url, search?, index) 向 /erpFinManageData/erpFinManageData 拼接子路径后 POST，对勾选行执行批量更新/核销；无 JSON 请求体，参数经 URL 子路径+查询串传递；成功(code==200)弹提示并回调 search 重查。 | `mbs fars erp-fin-manage-data-erp-fin-manage-data` | `url`, `subPath`, `type` |
| eBay上月预收余额信息查询：eBay 平台「上月已收」页面的余额信息分页查询：按 ids、平台订单号、店铺名称、余额月份区间、公司等条件分页查询，返回订单金额/平台费/发货金额/账单退款/上月余额/余额等对账字段列表及总条数。 | `mbs fars erp-fin-manage-data-parallel-last-month-advance-infos` | `pageSize`, `page` |
| 非当月账单明细查询：TikTok 对账中心「非当月账单明细」分页查询：按汇总单号/财务单号/订单编号/付款单号/结算单号/店铺名称/账单时间/问题反馈/账单分类/所属公司等条件筛选，返回账单明细列表及总条数。 | `mbs fars erp-fin-manage-data-parallel-his-bill-infos-fetcher` | `pageSize`, `page` |
| 账单反查表查询：TikTok 核对域「账单反查表」列表分页查询：按付款单号/结算单号/店铺名称/所属公司等条件，返回账单反查明细列表（结算/付款单号、店铺、币种、总应收、平台费、物流费、广告费、税费、退款、打款金额、公司等）及总数。 | `mbs fars erp-fin-manage-data-parallel-info-process-fetcher` | `type`, `pageSize`, `page` |
| 账-付-流并行对比数据查询：TikTok「账-付-流核对」表分页查询：按付款单号、结算单号、店铺名称、付款时间、流水时间、问题反馈(一级/二级)、所属公司等条件过滤，返回账单(结)、付款(付)、流水(流)三表并行对比的明细行与差值/反馈字段及总记录数。 | `mbs fars erp-fin-manage-data-parallel-pay-contrast-fetcher` | `pageSize`, `page` |
| TikTok账单核对表查询：TikTok核销·账单核对明细列表分页查询：按汇总单号/订单编号/付款单号/结算单号/店铺名称/账单时间/问题反馈/异常分类/是否核销/付款反查/所属公司等条件筛选，返回账单核对行明细及总条数。type=1 标识账单核对表。 | `mbs fars erp-fin-manage-data-parallel-tk-bill-infos-fetcher` | `type`, `pageSize`, `page` |
| 连连反查表(明细)查询：TikTok 平台「连连反查表」明细分页查询：以流水号、店铺名称(拆分后/原)、流水时间区间、所属公司为筛选条件，返回连连流水反查明细列表(流水id/币种/金额/店铺/创建时间/匹配状态/公司)及总记录数。 | `mbs fars erp-fin-manage-data-parallel-tk-query-lianlian-fetcher` | `pageSize`, `page` |
| TikTok 凭证计提参考(账单反查表)查询：TikTok 凭证计提参考页面的列表查询：按流水号 / 店铺名称 / 所属公司及分页条件，反查并返回各店铺平台费、物流费的计提/冲销金额、差值，以及借贷方科目（分析账户、辅助核算、科目编号、币种、金额）和凭证字/凭证编号等明细，供凭证计提参考。type=1 为固定查询类型。 | `mbs fars erp-fin-manage-data-parallel-tk-reference-provision` | `type`, `pageSize`, `page` |
| TikTok计提冲销凭证拉取(列表查询)：TikTok平台「计提冲销」凭证并行拉取的列表分页查询：按订单编号、结算单号、店铺名称、创建(付款)时间区间、所属公司等条件筛选，分页返回交易号、发货时间、店铺、平台费、物流费、币种、汇率、上传人、公司等字段。?type=1 为固定查询参数。 | `mbs fars erp-fin-manage-data-parallel-tk-voucher-provision-fetcher` | `pageSize`, `page` |
| 异常账单表-平行核对数据查询：TikTok「异常账单明细」表的平行核对数据分页查询：按汇总单号/订单编号/结算单号/店铺名称/账单时间区间/问题反馈/所属公司等条件分页查询异常账单核对明细，返回明细列表及总记录数。 | `mbs fars erp-fin-manage-data-parallel-verification-fetcher` | `pageSize`, `page` |
| 公司ID信息查询：查询当前用户可见的全部公司列表（公司ID + 公司名称），前端模块首次加载时无参 POST 拉取并缓存为响应式 companyList，供各对账/明细页面将 companyId 翻译为公司名称（getComName）及作为公司下拉选项数据源。接口直接返回公司对象数组，无 code/obj 包装。 | `mbs fars erp-fin-manage-data-query-company-id-info` | - |
| 下载任务记录查询：「下载任务记录」页面分页查询下载任务列表：按所属公司、文件名、创建时间区间、任务状态、平台等条件筛选，返回任务列表（含文件名、创建人、状态、表格大小/总数、进度、sheet 信息、起止/刷新时间、错误摘要、所属公司等）及总记录数。 | `mbs fars erp-fin-manage-data-query-download-infos-fetcher` | `type`, `pageSize`, `page` |
| 上传任务记录列表查询：财务「上传任务记录」分页查询：按所属公司/文件名/创建时间区间/任务状态/平台等条件筛选导入任务，返回任务记录列表（文件名、创建人、成功/失败总数、状态、文件大小、表格总数等）及总记录数，供前端表格分页展示。 | `mbs fars erp-fin-manage-data-query-upload-infos-fetcher` | `type`, `pageSize`, `page` |
| 凭证退款参考(账单反查表)查询：TikTok 平台「凭证退款参考」页面账单反查表分页查询：按流水号、店铺名称、所属公司过滤，返回退款金额/冲回金额/差值、凭证字、辅助核算、应收账款等账单反查行数据及总数。 | `mbs fars erp-fin-manage-data-parallel-tk-reference-refund` | `type`, `pageSize`, `page` |
| 订单退款条件查询（发起退款明细）：订单详情页点击“发起退款(send refund)”时调用，按订单ID查询该订单的可退款条件：退款币种、退款总额、可退款SKU明细及原始金额、可选退款理由列表，以及ERP/平台两侧的历史退款记录，用于回填发起退款弹窗。 | `mbs fars crm-web-service-refund-condition` | `orderId` |
| 领星下载历史分页查询：下载历史页分页查询领星导出任务记录：按文件名、任务状态、创建时间区间筛选并分页，返回任务文件名、下载地址、状态、创建时间、表格总数、文件大小等列表数据。 | `mbs fars finance-lingxing-data-service-parallel-lingxing-download-infos` | `page`, `pageSize` |
| Payoneer账户费用明细导出：根据币种、起止日期、邮箱、描述等筛选条件及表格勾选的记录ID集合，导出账户费用明细文件(Excel)。前端以XMLHttpRequest POST JSON、responseType=blob接收二进制流，并从响应头content-disposition解析文件名后触发浏览器下载。 | `mbs fars yyfms-export-account-date` | - |
| 账户费用(对账)列表查询：Payoneer 账户费用对账列表分页查询：按币种、起止日期、邮箱、描述等条件查询账户收支流水（账户类型、金额、收入/支出、人民币折算、余额、来源/目标、日期等），返回流水列表及总记录数，供页面表格展示与分页。 | `mbs fars yyfms-get-account-cost-list` | `page`, `size` |
| 凭证来源(费用名称)列表查询：日记账凭证页面初始化时调用，拉取全部凭证来源/费用名称列表，用于渲染顶部筛选区 #expenseName(凭证来源)下拉选项。前端用原生 fetch 发起，无请求参数；返回结果生成 <option>，仅取每项 name(或字符串元素本身)作为下拉值与显示文本。 | `mbs fars erp-finance-get-expense-list` | - |
| 关注SKU到货异常消息查询：经理仪表盘消息中心，点击"关注sku到货异常"按钮触发，按消息类型(messageTypeId=20)与接收人(toId)分页查询SKU到货异常通知列表，返回消息记录(创建时间/类型/正文/标题/来源SKU)及消息条数，经 contentComment 模板渲染。 | `mbs fars yyaccount-getmessage` | `status`, `messageTypeId`, `toId`, `index`, `flag` |

## 命令详情

- [erpaccount-get-ding-ding-attendance.md](erpaccount-get-ding-ding-attendance.md)
- [erpaccount-country.md](erpaccount-country.md)
- [erpaccount-last-logininfo.md](erpaccount-last-logininfo.md)
- [erpaccount-shop.md](erpaccount-shop.md)
- [erp-finance-get-cycles.md](erp-finance-get-cycles.md)
- [erp-finance-get-finance-push-task.md](erp-finance-get-finance-push-task.md)
- [erp-finance-sku.md](erp-finance-sku.md)
- [erp-finance-auth-url.md](erp-finance-auth-url.md)
- [yyaccount-instudio-account-getstaymessage1.md](yyaccount-instudio-account-getstaymessage1.md)
- [yyaccount-getstaymessage.md](yyaccount-getstaymessage.md)
- [yyfms-id-get-developer-bill-detail.md](yyfms-id-get-developer-bill-detail.md)
- [yyfms-id-get-sale-bill.md](yyfms-id-get-sale-bill.md)
- [yyfms-fms-position-name.md](yyfms-fms-position-name.md)
- [erpaccount-get-manager-month.md](erpaccount-get-manager-month.md)
- [erpaccount-get-over-two-days-unshipped-delivery.md](erpaccount-get-over-two-days-unshipped-delivery.md)
- [erpaccount-get-platform-publish-info.md](erpaccount-get-platform-publish-info.md)
- [erpaccount-get-platform-shortage-rate.md](erpaccount-get-platform-shortage-rate.md)
- [erpaccount-get-pro-publish-cover-rate.md](erpaccount-get-pro-publish-cover-rate.md)
- [erpaccount-get-purchaseanalysis-over-seven-day.md](erpaccount-get-purchaseanalysis-over-seven-day.md)
- [erpaccount-get-sales-level-reportkf.md](erpaccount-get-sales-level-reportkf.md)
- [erpaccount-get-shorage-sku-info.md](erpaccount-get-shorage-sku-info.md)
- [erpaccount-get-site-by-platform.md](erpaccount-get-site-by-platform.md)
- [erpaccount-platform-pull-down.md](erpaccount-platform-pull-down.md)
- [erpaccount-product-managerqhlv.md](erpaccount-product-managerqhlv.md)
- [erpaccount-purchaseanalysis-purchased-sku-detail.md](erpaccount-purchaseanalysis-purchased-sku-detail.md)
- [erpaccount-purchaseanalysis-purchase-order-detail.md](erpaccount-purchaseanalysis-purchase-order-detail.md)
- [erpaccount-purchaseanalysis-sku-detail.md](erpaccount-purchaseanalysis-sku-detail.md)
- [erpaccount-show-case-by-month.md](erpaccount-show-case-by-month.md)
- [erpaccount-urchaseanalysis-shortage-sku-detail.md](erpaccount-urchaseanalysis-shortage-sku-detail.md)
- [erpaccount-lazada-coupon-list.md](erpaccount-lazada-coupon-list.md)
- [erpaccount-lazada-un-read-message-list.md](erpaccount-lazada-un-read-message-list.md)
- [erpaccount-find-all-logistics.md](erpaccount-find-all-logistics.md)
- [erpaccount-find-express-code51-all.md](erpaccount-find-express-code51-all.md)
- [erpaccount-find-for-country.md](erpaccount-find-for-country.md)
- [erpaccount-find-for-logisticscompany.md](erpaccount-find-for-logisticscompany.md)
- [erpaccount-find-line.md](erpaccount-find-line.md)
- [erpaccount-find-logistics-info2.md](erpaccount-find-logistics-info2.md)
- [erpaccount-find-logistics-provider-name-all.md](erpaccount-find-logistics-provider-name-all.md)
- [erpaccount-find-logistics.md](erpaccount-find-logistics.md)
- [erpaccount-shopee-un-read-message-list.md](erpaccount-shopee-un-read-message-list.md)
- [erp-finance-excel-list.md](erp-finance-excel-list.md)
- [erp-finance-find-platform-bill.md](erp-finance-find-platform-bill.md)
- [erp-finance-get-platform.md](erp-finance-get-platform.md)
- [erp-finance-get-shop-bill.md](erp-finance-get-shop-bill.md)
- [erp-finance-finance-account-account-list.md](erp-finance-finance-account-account-list.md)
- [erp-finance-finance-account-move-line-list.md](erp-finance-finance-account-move-line-list.md)
- [erp-finance-finance-paypal-balance-list.md](erp-finance-finance-paypal-balance-list.md)
- [erp-finance-get-finance-push-task-sell.md](erp-finance-get-finance-push-task-sell.md)
- [erp-finance-finance-res-currency-list.md](erp-finance-finance-res-currency-list.md)
- [erp-finance-finance-analytic-account.md](erp-finance-finance-analytic-account.md)
- [erp-finance-finance-res-partner-list.md](erp-finance-finance-res-partner-list.md)
- [erp-finance-page.md](erp-finance-page.md)
- [erp-finance-list.md](erp-finance-list.md)
- [erp-finance-get-paypal-case-address.md](erp-finance-get-paypal-case-address.md)
- [erp-finance-type.md](erp-finance-type.md)
- [erp-finance-get-paypal.md](erp-finance-get-paypal.md)
- [erp-finance-get-shop-customer-serviceer.md](erp-finance-get-shop-customer-serviceer.md)
- [erp-finance-get-shop-manager.md](erp-finance-get-shop-manager.md)
- [erp-finance-get-shop-paypalcase.md](erp-finance-get-shop-paypalcase.md)
- [erp-finance-case-id.md](erp-finance-case-id.md)
- [erp-finance-paypalcase-list.md](erp-finance-paypalcase-list.md)
- [erp-finance-paypal-case-reason.md](erp-finance-paypal-case-reason.md)
- [erp-finance-get-paypal-case-constant.md](erp-finance-get-paypal-case-constant.md)
- [erp-fin-manage-data-erp-fin-manage-data.md](erp-fin-manage-data-erp-fin-manage-data.md)
- [erp-fin-manage-data-parallel-last-month-advance-infos.md](erp-fin-manage-data-parallel-last-month-advance-infos.md)
- [erp-fin-manage-data-parallel-his-bill-infos-fetcher.md](erp-fin-manage-data-parallel-his-bill-infos-fetcher.md)
- [erp-fin-manage-data-parallel-info-process-fetcher.md](erp-fin-manage-data-parallel-info-process-fetcher.md)
- [erp-fin-manage-data-parallel-pay-contrast-fetcher.md](erp-fin-manage-data-parallel-pay-contrast-fetcher.md)
- [erp-fin-manage-data-parallel-tk-bill-infos-fetcher.md](erp-fin-manage-data-parallel-tk-bill-infos-fetcher.md)
- [erp-fin-manage-data-parallel-tk-query-lianlian-fetcher.md](erp-fin-manage-data-parallel-tk-query-lianlian-fetcher.md)
- [erp-fin-manage-data-parallel-tk-reference-provision.md](erp-fin-manage-data-parallel-tk-reference-provision.md)
- [erp-fin-manage-data-parallel-tk-voucher-provision-fetcher.md](erp-fin-manage-data-parallel-tk-voucher-provision-fetcher.md)
- [erp-fin-manage-data-parallel-verification-fetcher.md](erp-fin-manage-data-parallel-verification-fetcher.md)
- [erp-fin-manage-data-query-company-id-info.md](erp-fin-manage-data-query-company-id-info.md)
- [erp-fin-manage-data-query-download-infos-fetcher.md](erp-fin-manage-data-query-download-infos-fetcher.md)
- [erp-fin-manage-data-query-upload-infos-fetcher.md](erp-fin-manage-data-query-upload-infos-fetcher.md)
- [erp-fin-manage-data-parallel-tk-reference-refund.md](erp-fin-manage-data-parallel-tk-reference-refund.md)
- [crm-web-service-refund-condition.md](crm-web-service-refund-condition.md)
- [finance-lingxing-data-service-parallel-lingxing-download-infos.md](finance-lingxing-data-service-parallel-lingxing-download-infos.md)
- [yyfms-export-account-date.md](yyfms-export-account-date.md)
- [yyfms-get-account-cost-list.md](yyfms-get-account-cost-list.md)
- [erp-finance-get-expense-list.md](erp-finance-get-expense-list.md)
- [yyaccount-getmessage.md](yyaccount-getmessage.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
