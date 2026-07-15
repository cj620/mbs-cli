# ars - 数据分析与报表

通过 `mbs ars` 命令查询数据分析与报表数据。

## 数据来源

- Service: `-`

## 适用场景

数据、分析、报表

## 意图匹配

关键词：数据、分析、报表

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 昨日wish放款额度查询：财务看板初始化时调用，查询 payoneer 接口提供的 wish 店铺昨日可放款总额，前端直接渲染到看板「昨日wish放款额度」卡片(#WishAccount)。无请求参数。 | `mbs ars erpmonitor-get-yesterday-wish-account` | - |
| 昨日账户收支监控查询：首页仪表盘财务看板加载时自动调用，查询昨日账户收支汇总，返回昨日支出金额(expend)与昨日收入金额(income)，分别渲染到看板支出/收入两个数字卡片。无请求参数。 | `mbs ars erpmonitor-yesterday-account-statement` | - |
| 获取商品视频地址(getVedio)：在“在线列表(热销商品监控)”页面的绑定视频弹窗中，按商品SPU查询该SPU当前已绑定的视频地址，用于回填视频地址输入框。 | `mbs ars erpmonitor-spu` | `spu` |
| 热销商品监控-商品品牌下拉查询：进入热销商品监控页(shopHotProducts2)时调用，加载"商品品牌"筛选下拉框的全部可选品牌列表。无请求参数，返回品牌集合(品牌ID + 品牌名称)，前端以 brandName 作为选项的 label 与 value。 | `mbs ars erpmonitor-product-brand` | - |
| 导出默认参数查询（按平台取默认平台费率/毛利率/退款率）：商品导出创建页在选择/初始化导出平台时调用，按 platformId 查询该平台对应的默认导出参数（平台费率、毛利率、退款率），并回填到「数据格式」区的平台费率、毛利率、退款率输入框。 | `mbs ars erpmonitor-export-default-paramtes` | `platformId` |
| 店铺违禁词刊登列表查询：按店铺ID分页查询该店铺下命中违禁词(禁词)的刊登商品列表，返回商品店铺、主图、SPU、命中禁词标识、上架时间、标题、商品链接、商品ID等，以及分页汇总(总页数/总条数)。前端每页固定100条，使用art-template(#contentTemplate)渲染表格并配合分页控件翻页。 | `mbs ars erpmonitor-forbidden-listings-of-shop` | `shopId`, `currPage` |
| 店铺非上海刊登商品查询：按店铺ID分页查询该店铺“违规地（非上海地址）”刊登的商品列表，返回店铺名称、SPU、图片、上架时间、标题、商品链接、商品ID等，前端 art-template 渲染表格并分页展示。 | `mbs ars erpmonitor-not-in-shanghai-listing-of-shop` | `shopId`, `currPage` |
| 店铺重复SPU标题查询：按店铺分页查询该店铺下存在重复标题/重复铺货的 SPU 列表：返回店铺名、主图、ERP SPU、重复数、上架时间、标题、商品链接等，并携带总条数与总页数用于分页。 | `mbs ars erpmonitor-query-repeat-spu-title-of-shop` | `shopId`, `currPage` |
| 按站点查询账单表头解析规则(getSiteByType)：amazonBill 文件上传解析页「设置解析规则」弹窗中，选择站点后按站点查询该站点已配置的账单表头解析规则。返回以费项类型名称为键、对应账单表头列名候选列表为值的 Map，前端 for...in 遍历生成解析规则表格。 | `mbs ars erp-report-get-site-by-type` | `site` |
| 获取亚马逊账单站点列表：amazonBill「文件上传解析」页面初始化(created)时调用，获取已配置解析规则的亚马逊站点(site)名称列表，用于「设置解析规则」弹窗中的站点下拉选择。选中站点后再调用 getSiteByType 拉取该站点的表头规则。 | `mbs ars erp-report-get-site` | - |
| 公司信息下拉列表查询：消息客服监控报表页加载时调用，获取当前用户可见的公司列表，用于渲染顶部「请选择公司」下拉框。GET 无入参，返回公司数组，前端用 art-template 模板 companyTemplate 遍历 obj 渲染 option(value=companyId, text=companyName)。 | `mbs ars erp-report-get-company-info` | - |
| 获取必发布(适用)平台列表：进入「今日推送团队监控」页面时调用，拉取必发布/适用平台清单，用于顶部「请选择平台」下拉框(el-select)的选项渲染。无请求参数，返回平台数组。 | `mbs ars erp-report-get-must-publish-ablity` | - |
| 商品流量监控列表查询（getItemDataMonitor）：平台流量看板页「商品流量看板」Tab 的商品维度流量监控分页查询：按平台、大酋长、组员、店铺、SPU、统计天数（1/7/30天）筛选，并按订单量/销售数量/访问/转化率/销售风向/退款风向等排序，返回商品流量列表及总数、总页数。 | `mbs ars erpflowmonitor-get-item-data-monitor` | `dayNum`, `page`, `pageSize` |
| 店铺流量监控-平台流量看板数据查询：店铺流量监控页「平台流量看板」按平台/大酋长/组员/店铺维度，统计近 1/7/30 天店铺整体流量指标(访客数UV、访问次数PV、人均访问次数、访问时长、被访问产品数、订单量及各指标环比上期变化率)，用于渲染顶部 7 个指标卡。 | `mbs ars erpflowmonitor-get-shop-data-monitor` | `platformId`, `dayNum` |
| 账户对账单监控-收支明细查询：账户对账单监控页面，根据交易时间区间、账户邮箱、收支类型、币种查询某账户的资金收支(进账/出账)流水明细，分页返回流水列表(币种、外币/人民币金额、来源去向、账户余额、平台、店铺、备注、交易日期)及总条数/总页数。 | `mbs ars erpmonitor-details` | `startTime`, `endTime`, `currpage` |
| 查询收支监控账号列表：收支监控（收入/支出）页面初始化时调用，获取当前可选的账号列表，用于渲染顶部“请选择账号”下拉框（select#findAccount）。请求不携带任何请求体，响应返回账号字符串数组 obj，前端通过 art-template 模板 findAccountTemplate 逐项渲染为 option，其 value 与显示文本均为账号本身。 | `mbs ars erpmonitor-find-account` | - |
| 账户收支明细汇总查询：账户对账监控：按交易时间区间与账号(邮箱)查询各账号的收入/支出/余额汇总，返回账号、开户平台、币种、收入金额、支出金额、当前余额列表，供页面表格展示并提供「查看明细」跳转。 | `mbs ars erpmonitor-income-and-expend-details` | `startTime`, `endTime` |
| 押款（可放款）监控查询：对账单监控：按“可放款时间”查询各账号（店铺）押款金额、币种及可放款时间，分页返回（每页50条）。页面加载即自动调用一次。 | `mbs ars erpmonitor-loan` | `currpage` |
| Allegro已导入商品(Listing)列表查询：查询 Allegro 商品导入(刊登 listing)结果列表：按 SPU、导入结果状态、导入人分页筛选，返回导入商品(SPU)行及其下 SKU 明细、店铺、毛利率、备货时长、物流模板、价格、导入人、导入结果与时间等字段；列表行可展开查看 SKU 价格/库存/币种。 | `mbs ars erpmonitor-list-product-by-listing-allegro-product-publish` | `currentPage`, `pagesize` |
| 查询Allegro可刊登店铺列表：Allegro商品刊登导入页初始化时调用，获取当前用户可选的Allegro店铺列表，用于填充「导入」弹窗中的「选择店铺」下拉框(#shopName)。POST无请求体，返回店铺ID与店铺名称集合。 | `mbs ars erpmonitor-list-publish-shop` | - |
| 亚马逊调价确认列表查询：AMZ调价页列表分页查询：按创建时间、刊登时间、调价结果、店铺、原/新价格区间、物流方式、涨降价、SKU/SPU/子ASIN、是否跟卖、运费模板等条件分页查询亚马逊调价确认记录，返回列表及分页汇总。tab=1 等待调价，tab=2 调价完毕。 | `mbs ars erpmonitor-amazon-reviseprice-confirm-list` | `tab`, `currPage`, `pageSize` |
| 亚马逊非FBA店铺列表查询：亚马逊调价页面初始化拉取当前用户可见的亚马逊非FBA店铺列表，用于渲染店铺筛选下拉与多选店铺框。请求体固定为空对象，无入参；返回店铺数组，元素含 shopId/shopName 等字段。 | `mbs ars erpmonitor-get-amazon-not-fba-shop` | - |
| 调价/不调价分类(父类目名称)查询：亚马逊价格调整页面初始化时调用：拉取父级类目名称列表，分别渲染到「不调价分类(adjustNoTemplate)」与「调价分类(adjustDoTemplate)」两个复选框下拉中，供生成提价商品信息时选择。无请求参数，响应为类目名称字符串数组。 | `mbs ars erpmonitor-get-parent-category-name` | - |
| ebay提价确认列表查询：ebay提价页列表分页查询：按创建时间、店铺、提价结果、涨/降价、当前售价区间、新售价区间、当前/新物流方式、创建人、itemId等条件筛选，返回提价确认记录列表。等待提价与提价完毕两个Tab共用同一接口。 | `mbs ars erpmonitor-ebay-reviseprice-confirm-list` | `currPage`, `pageSize` |
| eBay提价确认-店铺下拉列表查询：eBay提价确认页面初始化时加载当前用户可见的店铺列表，用于店铺单选下拉框(#selectShop)与多选店铺勾选框(#ulallchk)的数据源。请求体为空JSON对象，无入参；返回店铺集合，逐项含店铺ID与店铺名称。 | `mbs ars erpmonitor-find-shops-ebay-reviseprice-confirm` | - |
| eBay提价任务统计详情查询：进入eBay提价页时调用，查询当天提价任务的各项统计数字（计算中任务数、等待提价listing数、提价中数、今/昨提价失败数、今/昨提价成功数），渲染到页面头部状态栏。该接口无请求参数，POST 空请求体。 | `mbs ars erpmonitor-get-ebay-reviseprice-detail` | - |
| EZBuy 商品/订单汇总统计查询：EZBuy 商品 & 订单报表页面加载时调用，查询平台维度的汇总统计数据：平台总商品数、平台总订单数、当日订单数，回填到页面头部的三个统计标签。前端不传任何请求参数。 | `mbs ars erpmonitor-ez-data` | - |
| EZBuy 商品 & 订单报表查询：EZBuy 各店铺按品类的商品数/订单数监控报表分页查询：按统计时间区间、店铺过滤，返回每条统计日期-店铺-品类下的平台总商品数、平台总订单数、当日订单数及排名，并返回总条数与总页数用于前端分页。 | `mbs ars erpmonitor-find-product-and-order` | `startDate`, `endDate`, `currPage` |
| fanno提价列表查询：fanno提价页面「等待提价 / 提价完毕」两个标签页的列表分页查询：按创建时间、店铺、提价结果、涨价/降价、当前售价区间、新售价区间、创建人、itemid、sku 等条件筛选，返回提价 listing 列表及店铺、负责人、当前售价、新售价、新折前价格、站点、提价结果、刊登/提价时间等字段。 | `mbs ars erpmonitor-fanno-reviseprice-confirm-list` | `currPage`, `pageSize` |
| 根据店铺负责人查询店铺列表：fanno提价页"生成提价商品信息"弹窗中，选择"店铺负责人"后联动触发；以负责人(员工名)列表为入参，查询其名下的店铺，返回店铺名称集合用于填充"店铺"多选下拉框。 | `mbs ars erpmonitor-find-shops-by-shop-manager-fanno-reviseprice-confirm` | `shopManager` |
| 店铺列表查询(fanno提价店铺下拉)：fanno提价页面初始化时调用，获取当前用户可选的店铺列表，用于顶部店铺多选下拉(#checkShops)的渲染。请求体为空对象{}，无入参；返回店铺集合，每项含店铺名称与店铺ID，供勾选后回填 checkShop(店铺名)与 checkShopId(店铺ID)。 | `mbs ars erpmonitor-find-shops-fanno-reviseprice-confirm` | - |
| 批量加入改价(缺货不改0)白名单：在线列表页面勾选一条或多条 listing 后，点击"我不要缺货改0"，将所选 listing（按 平台ID+店铺名+平台商品ID 定位）批量加入改价白名单，加入后系统不再对其执行缺货自动改0处理。请求体为 JSON 数组，成功后弹出提示并刷新列表。 | `mbs ars erpmonitor-batch-add-revise-white-list` | `root` |
| 收藏夹列表查询：查询当前用户的全部商品收藏夹（我的收藏夹），用于管理收藏夹/加入收藏夹弹窗的单选列表渲染：返回每个收藏夹的ID、名称及夹内收藏商品数量。请求体为空对象{}，后端按当前登录用户返回其收藏夹。 | `mbs ars erpmonitor-collect-folder-list` | - |
| 原币种列表查询：热销商品监控页初始化时加载「原币种(currency)」下拉选择框的可选值列表。该接口为无参 POST，返回全部可选原币种字符串数组，前端用 art-template 模板 contentTemplate4 渲染为 select#currency 的 option 项，供搜索时按原币种过滤。 | `mbs ars erpmonitor-currency` | - |
| TikTok Listing 批量上/下架(detailsActivateInfo)：店铺爆款监控页选中若干 TikTok(platformId=120) listing 后，批量提交上架(operType=1)或下架(operType=2)。前端把勾选行完整对象数组随操作类型一并 POST 给后端，后端据 code/desc 返回处理结果并前端弹窗提示。 | `mbs ars erpmonitor-details-activate-info` | `operType`, `esProductSKUList` |
| 在线列表删除下架(detailsDisabledInfo)：在线列表(热销商品监控)页勾选listing后批量删除/下架;平台为Joom(85)或TikTok(120)时调用,提交选中listing整行对象数组,成功后弹出desc并刷新列表。 | `mbs ars erpmonitor-details-disabled-info` | `root` |
| 热销商品监控-批量同步刷新详情信息：在“店铺热销商品”列表中勾选若干 listing 后触发，前端把全部勾选行（getChosenRow() 返回的完整 listing 对象数组）原样作为请求体提交后端发起详情同步刷新任务，前端仅用返回的 code/desc 弹窗提示。 | `mbs ars erpmonitor-details-refresh-info` | `fieldfb8f784d` |
| 在线列表异步导出Excel：在线列表(热销商品监控)页点击导出时，按当前页面全部筛选条件创建异步导出Excel任务；请求体与列表查询 getFormParams() 一致(含平台/团队/店铺/价格/销量/时间/类目/标签/侵权等近百项筛选)。成功后提示并可跳转我的导出队列。 | `mbs ars erpmonitor-exprot-asyn-excel` | - |
| 查询市场部所有在职人员：查询市场部(department_id=54)全部在职(status=1)员工姓名列表，用于页面「市场部在职人员」下拉/看板渲染。后端SQL：select employee_name from hr_employee where department_id =54 and status =1。前端调用函数已标注@deprecated。 | `mbs ars erpmonitor-get-all-emp-name` | - |
| 获取发货地(国家)下拉列表：热销商品监控(店铺热销商品)页面初始化时调用，从 ES 中查询全部可选发货地(国家)列表，用于填充页面顶部筛选区 #countryFrome 多选下拉框。无任何请求参数，返回国家集合。 | `mbs ars erpmonitor-get-country-from-es` | - |
| 调库日志查询：热销商品监控列表行操作「查看调库日志」时调用：根据 skuId/itemId/platformId/erpSku 定位某条 listing，返回其历史库存修改(调库)日志列表，前端以时间线按调库时间展示原库存、新库存、仓库及调库结果。 | `mbs ars erpmonitor-get-inventory-log` | `skuId`, `itemId`, `platformId`, `erpSku` |
| Listing操作日志查询：爆款商品监控(店铺爆款)列表中，点击某条 listing 查看其历史操作日志（改价、调库存等操作记录）。入参为该 listing 的 SPU/商品ID(spuId)，返回该 listing 的操作日志时间线列表，前端以 el-timeline 时间线渲染。 | `mbs ars erpmonitor-get-listing-log` | `spuId` |
| 刊登人下拉列表查询：热销商品监控(在线列表)页面「刊登人」下拉框数据源：根据平台、总监、经理等团队维度过滤，返回可选刊登人(id/name)列表，供顶部筛选区 publisher 选择器渲染。 | `mbs ars erpmonitor-get-publish-oper-list` | `employeeType` |
| 店铺运费模板查询：爆款商品监控(shopHotProducts2)页面，按当前所选平台与店铺查询其可用的运费模板列表，用于运费模板多选下拉的选项数据。仅当已选平台且已选至少一个店铺时才发起请求。 | `mbs ars erpmonitor-get-shop-freight-templates` | `platformId`, `shopNames` |
| 根据平台查找站点：依据平台标识(platform)查询该平台下的全部站点列表，用于「店铺上新统计」页面顶部「站点」下拉框的选项渲染(art-template #siteTemplate)。页面加载即调用，返回站点集合。 | `mbs ars erpmonitor-get-site-by-platform` | `platform` |
| 店铺热销商品(listing)查询：按平台、店铺、店铺负责人、原币种、销售金额区间、统计时间等条件，分页查询店铺维度的热销商品(listing)列表，返回商品图文、售价区间、7/30/90天销量、浏览量、收藏量等运营监控字段。 | `mbs ars erpmonitor-hot-product-with-shop` | `currPage` |
| 热销商品SKU销售详情查询(hotProductWithSku)：单产品分析页加载/排序时调用：按店铺(shopId)+商品(itemId)查询该店铺下该 listing 关联各 SKU 的销售详情，返回 SKU 商品信息、30天销售额/销量/平均成交价、待发货、库存/在途、重量、商品属性、成本/毛利、毛利率/退款率、7/30/90天销量、开发员等，渲染至「SKU销售详情」表格。 | `mbs ars erpmonitor-hot-product-with-sku` | `shopId` |
| 平台列表查询（热销商品监控-平台下拉）：热销商品监控页面初始化时调用，获取全部平台列表用于「平台」下拉选择框(#plaformId)渲染。无请求参数，返回平台ID与平台名称集合。 | `mbs ars erpmonitor-platform` | - |
| 店铺列表查询(按平台/shopByPlatform3)：热销商品(店铺)监控页加载时调用，无参 POST，后端按登录上下文返回店铺列表，前端通过 art-template 模板 contentTemplate2 渲染为店铺下拉框(#shopId)的 option 列表。 | `mbs ars erpmonitor-shop-by-platform3` | - |
| 平台店铺/店铺负责人下拉查询：热销商品监控页初始化及平台切换时调用：按平台(platformId)查询该平台下的店铺列表与店铺负责人列表，返回结果分别渲染到店铺下拉(shopId/shopName)与店铺负责人下拉(saleLeader)。无 platformId 时返回全部平台的店铺/负责人。 | `mbs ars erpmonitor-shop-by-platform` | - |
| 按店铺负责人查询店铺(findShopsByShopManager)：Lazada商品提价确认页“生成提价商品信息”弹窗中，选择店铺负责人后联动触发：根据所选店铺负责人(可多选,逗号拼接)查询其名下的店铺列表，用于渲染“店铺”下拉框(ySelect)供选择。 | `mbs ars erpmonitor-find-shops-by-shop-manager-lazada-reviseprice-confirm` | - |
| Lazada提价确认-店铺列表查询(findShops)：页面加载(getShopLi)时无条件拉取当前用户可见的Lazada提价确认店铺列表，返回结果渲染到筛选区“店铺”多选下拉(#checkShops)，供 getList/getList2 按 shopids 过滤提价记录。请求体固定为空对象。 | `mbs ars erpmonitor-find-shops-lazada-reviseprice-confirm` | - |
| Lazada提价确认列表查询：Lazada提价页面「等待提价」/「提价完毕」两个页签共用的列表分页查询：按创建时间区间、店铺、提价结果、涨/降价、当前售价区间、新售价区间、新物流方式、创建人等条件筛选，返回提价确认记录列表及分页汇总字段。 | `mbs ars erpmonitor-lazada-reviseprice-confirm-list` | `currPage`, `pageSize` |
| 本周新刊登·全部SPU列表查询：“在线商品监控-本周新刊登”标签页触发。以 thisWeek=1 一次性拉取本周新刊登的全部SPU列表（不分页），成功回调将返回的 obj 数组整体写入隐藏域 #weekPub，用于“全部listing”导出与全选场景。列表分页展示由同源接口 allListing?thisWeek=1 负责（渲染 pubContentTemplate）。 | `mbs ars erpmonitor-all-listing-spu` | `thisWeek` |
| 在线商品列表查询（本周新刊登 / 所有在线商品）：在线商品监控列表分页查询。同一接口被两处复用：本周新刊登标签页固定带 thisWeek=1 查询本周新刊登商品；所有在线商品标签页不带 thisWeek 查询全部在线商品。返回商品列表及分页信息（total/pages/scrollId）。 | `mbs ars erpmonitor-all-listing` | `currpage` |
| 热销Listing列表查询：在线商品监控页「热销」标签页列表查询：按销售风向(上涨/下跌/不变)筛选，分页返回热销listing列表，含商品信息、店铺/负责人、售价、7/30/90天销量、浏览量、收藏量、销售风向、毛利率、退款风向、退款率等汇总字段(前端最多展示100条)。 | `mbs ars erpmonitor-hot-listing` | `currpage` |
| 获取登录用户信息：页面加载后拉取当前登录用户的基础信息，前端仅取用其中的 obj.manageShopIds（当前用户可管理的店铺ID集合），用于后续店铺列表查询/过滤。请求无入参，返回统一响应体。 | `mbs ars erpmonitor-getlogin-info` | - |
| 查询平台名称与ID列表：商品统计(productStatistics)页面初始化时调用，获取全部平台的 平台ID/平台名称 列表，用于渲染顶部「请选择平台」下拉框(#platformName)的 option 选项。 | `mbs ars erpmonitor-get-platform-name-and-id` | - |
| 刊登参数限制查询(getPublishParamsLimit)：根据平台ID(platformId)查询该平台下各站点的刊登参数下限限制（最小毛利率、最小平台费率、最小折扣率、亚马逊自建最小毛利率等）。前端在“设置店铺刊登参数”弹窗初始化时按平台加载，选择站点后取对应站点下限并在提交时校验。 | `mbs ars erpmonitor-get-publish-params-limit` | `platformId` |
| 根据平台ID查询店铺(店铺下拉联动)：商品统计页平台选择器 onchange 触发：当已选中具体平台时，按 platformId 拉取该平台下的店铺列表，用于渲染“请选择店铺”下拉框(#ShopName)。若平台未选(值为空)则改走 /erpmonitor/erpmonitor/monitor/getShopName 查询全部店铺。 | `mbs ars erpmonitor-get-shop-name-by-platform-id` | `platformId` |
| 查询店铺列表(下拉)：商品统计页在未选择平台(平台下拉为空)时，拉取全部可见店铺列表，用于填充"请选择店铺"下拉框；每项包含店铺ID与店铺名称，供后续按店铺过滤商品统计使用。 | `mbs ars erpmonitor-get-shop-name` | - |
| SPU在线商品SKU明细查询：在“已上架商品数量统计”页面点击某平台SPU行的展开箭头时触发，按平台SPU ID + 平台 + 统计日期查询该SPU下的在线子SKU明细（平台子SKU、胤元SKU、售价、库存、尺寸/颜色），渲染为SPU下的子表格。 | `mbs ars erpmonitor-get-sku-online-product` | `spuId` |
| 销售大酋长下拉列表查询：店铺运营监控页初始化时加载"销售大酋长"筛选下拉框的数据源。无请求参数，返回销售大酋长的 ID 与名称列表，前端用 art-template(contentTemplate4) 渲染为 option 选项，供搜索时按大酋长过滤。 | `mbs ars erpmonitor-great-chief` | - |
| 重复铺货/重复标题详情查询：根据一批 SPU 商品ID(itemId,逗号拼接)批量查询每个 SPU 的重复铺货与重复标题明细，返回每个商品对应的重复 SPU 列表与重复标题列表(各含目标 itemId 与跳转 url)，用于店铺重复标题列表页的重复详情列渲染跳转链接。 | `mbs ars erpmonitor-list-repeate-details` | `itemId` |
| 已售商品(SPU)监控列表查询：依据店铺、平台、统计日期分页查询该店铺已售出的平台商品(SPU)列表，返回平台SPU ID、平台/胤元SPU编号、商品名称、关键字、售出数量、上架时间与最后更新时间，供运营监控页面表格渲染。 | `mbs ars erpmonitor-on-sold-product` | `shopId`, `platformId`, `analysisCreatedOn`, `currPage` |
| 店铺运营相关信息列表查询：店铺运营监控看板列表分页查询：按平台、店铺、销售负责人、销售大酋长、客户经理、统计时间区间、运营状态等条件筛选，返回各店铺的新品率、动销率、在售/下架商品数、刊登/改价/改运费/改标题等运营维护指标及反馈好评率、统计周期等汇总字段。 | `mbs ars erpmonitor-product-relevant-information` | `currPage` |
| 违禁/禁售刊登(重复铺货·重复标题)查询：根据上游列表得到的商品ID集合(itemId,逗号拼接)批量查询各商品的“重复铺货(repeateSpu)”与“重复标题(repeateTitle)”明细，返回每个商品对应的重复商品链接与ID，用于在列表行内渲染“重复铺货:[...] 重复标题:[...]”提示。 | `mbs ars erpmonitor-query-forbid-publish-listing` | `itemId` |
| 3个月内新品刊登&销售情况查询：财务经理看板底部「3个月内新品刊登&销售情况」表格数据源：按 SKU 状态分组，返回近3个月新品的 SKU 数量、第1~4周刊登量/销量以及监控最后记录时间，前端据此渲染表格并计算单 SKU 本周平均刊登量。 | `mbs ars erpmonitor-sale-details` | - |
| 店铺亏损SKU明细查询：按店铺查询亏损SKU明细列表，分页返回该店铺下商品(SPU/SKU)的店铺、图片、上架时间、售价、总成本、预估亏损金额、售出数量、是否加钻、库存等，用于亏损监控与批量下架/立即拉取商品。 | `mbs ars erpmonitor-sku-deficit-of-shop` | `shopId`, `currPage` |
| 查询可编辑ebay店铺列表：ebay商品描述替换(热销推荐)模块的店铺列表查询：按店铺下拉选择(shopId，可为空查全部)返回该用户可编辑的ebay店铺及其热销推荐开启状态、执行状态、PC/移动端行列配置、指定listing、描述模板、预览标识等，用于渲染店铺列表并回填店铺下拉框。 | `mbs ars erpmonitor-find-editor-shop` | - |
| 匹配可管理店铺列表查询：进入批量下架/添加货架页面(addShelf.html)时自动调用，查询当前用户可管理的店铺列表，用于渲染顶部店铺下拉选择框(#ShopName)。无任何请求入参，返回店铺数组，前端模板仅使用店铺名称 shopName 作为下拉项的 value 与显示文本。 | `mbs ars erpmonitor-match-manage-shop` | - |
| 店铺下架商品SKU匹配查询：修正刊登监控-下架明细页加载时调用：根据页面 URL 携带的店铺名称(shopName)与 SKU 集合(skus)查询该店铺下匹配到的商品 SKU 列表，返回店铺名称、商品标题、商品编号、平台SKU、主图、库存等，用于下架明细列表渲染。 | `mbs ars erpmonitor-match-skus-of-shop` | `shopName` |
| Shopee提价确认Listing删除：在“Shopee提价确认”页面勾选一条或多条Listing记录后，点击“删除listing”并确认，将所选记录的唯一ID(uniqueId)以逗号拼接经查询串 ids 提交，批量删除对应提价确认Listing记录；成功后按当前Tab刷新列表。 | `mbs ars erpmonitor-deleteshopee-reviseprice-confirm-list` | `ids` |
| 按店铺获取折扣活动信息：Shopee 提价（改价）确认页“生成提价商品信息”弹窗中，选定单个店铺后，根据店铺名查询该店铺已同步的折扣活动列表，用于填充“店铺活动”下拉框（select2），下拉项 value=discountId、显示文本=discountName。 | `mbs ars erpmonitor-get-discount-info-by-shop-shopee-reviseprice-confirm` | `shopName` |
| 根据折扣活动ID查询商品ItemID：Shopee提价确认弹窗中，选择店铺并选择该店铺的折扣活动后，根据折扣活动ID(discountId)与店铺名查询该活动下的商品ItemID集合，返回后直接回填到"Item ID"文本域(#itemID)供生成提价商品信息使用。 | `mbs ars erpmonitor-get-item-ids-by-discount-id-shopee-reviseprice-confirm` | `discountIds`, `shopName` |
| 拉取（同步）店铺折扣信息：Shopee 提价确认页，按所选店铺名称从平台侧拉取/同步该店铺最新的折扣活动信息。仅以查询参数 shopName 传入店铺名（多个以逗号拼接），无请求体；返回操作结果状态与提示文案。 | `mbs ars erpmonitor-pull-discount-info-of-shop-shopee-reviseprice-confirm` | `shopName` |
| Shopee提价确认列表查询：Shopee提价页「等待提价 / 提价完毕」两个 Tab 的列表分页查询：按创建时间、店铺、提价结果、价格涨跌、当前售价区间、新售价区间、创建人等条件分页查询提价确认记录，返回主记录及其提价明细子列表(confirmList)。getList()/getList2() 复用同一后端接口。 | `mbs ars erpmonitor-shopee-reviseprice-confirm-list` | `currPage`, `pageSize` |
| 刊登商品列表查询（按刊登状态分页）：Shopify刊登管理页的商品刊登记录分页列表查询：按刊登状态（刊登中/刊登完毕/刊登成功/刊登失败）与页码分页拉取，返回 SPU 刊登记录列表（含主图、加密SPU、标题、分类、刊登店铺/人/状态/时间）及其下的 SKU 变体明细（加密SKU、原价、售卖价、库存等）。 | `mbs ars erpmonitor-list-product-by-listing-shopify-convent-sku` | `status`, `currentPage` |
| Shopify商品详情文件上传(shopifyDetailCsv)：在"文件批量刊登"页面选择本地文件(Excel/CSV)后自动上传，用于按所选刊登店铺导入Shopify商品详情/刊登数据；以 multipart/form-data 携带文件，店铺名以 URL 查询参数 shopName 传入。上传完成后前端弹窗展示返回提示语(desc)并刷新刊登中列表。 | `mbs ars erpmonitor-shopify-detail-csv` | `file` |
| 客服组长下拉列表查询：运营监控报表「客服绩效数据」视图初始化时调用，获取全部客服组长列表，用于填充页面「组长」多选下拉框(#leaderList)，供后续按组长查询组员/店铺/客服绩效数据。该接口无请求参数(不传 body)。 | `mbs ars erpmonitor-get-customer-service-leader` | - |
| 客服(店长/组员)店铺下拉查询：运营监控报表页面中，根据已选择的「店长(大酋长)」与「组员(店铺经理)」联动查询其名下店铺列表，返回店铺ID与店铺名称，用于渲染「店铺」多选下拉框(#shopList)。店长/组员下拉变更时(onchange)触发。 | `mbs ars erpmonitor-get-customer-service-shop` | - |
| 客服组员(组员下拉)查询：客服绩效(组员维度)页面中，根据已选「店长」(leaderList 多选)联动查询其名下的客服组员列表，返回结果渲染到「组员」下拉框(customberTemplate)。请求体为裸JSON数组(店长ID数组)。 | `mbs ars erpmonitor-get-customer-service` | `root` |
| TikTok提价-店铺列表查询（findShops）：TikTok改价（提价确认）页面查询店铺列表：按关键词(店铺名)与站点过滤，返回店铺名称/店铺ID列表；供搜索店铺名下拉(select2)、Element Plus 店铺多选框及选择店铺弹层复选列表使用；无参调用则返回全部店铺。 | `mbs ars erpmonitor-find-shops-tiktok-reviseprice-confirm` | - |
| 按店铺查询TikTok折扣活动信息：TikTok改价确认(提价)弹窗中，当仅选择1个店铺时，按店铺名查询该店铺下的TikTok折扣活动列表，用于渲染“店铺活动”下拉框：每项以 discountId 为值、discountName 为展示文本。 | `mbs ars erpmonitor-get-discount-info-by-shop-tiktok-reviseprice-confirm` | `shopName` |
| 根据折扣活动ID查询ItemId：TikTok提价：在“生成提价商品信息”弹窗中选中单个店铺后，选择该店铺的折扣活动(select2)，根据折扣活动ID查询该活动下的商品 Item ID 列表，前端将结果回填到 itemId 文本域，供后续批量提价使用。 | `mbs ars erpmonitor-get-item-ids-by-discount-id-tiktok-reviseprice-confirm` | `discountIds` |
| TikTok提价-提交任务信息列表查询：TikTok提价确认页“查看任务信息”弹窗的分页查询：按当前页/每页条数分页拉取提价找源提交任务列表，返回任务的店铺/站点/ItemID/SKU/销量区间/毛利与费率/算价渠道/任务状态/创建人时间及执行详情内容。 | `mbs ars erpmonitor-get-submit-info` | `currPage`, `pageSize` |
| 同步/拉取店铺最新折扣活动信息：TikTok 商品提价页面触发：按传入的店铺名称（可多个，逗号拼接）从平台拉取/同步该店铺的最新折扣活动信息，返回操作结果提示。用于「同步最新折扣活动」按钮、「拉取折扣信息」按钮及多店铺活动刷新（refershActivities）。 | `mbs ars erpmonitor-pull-discount-info-of-shop-tiktok-reviseprice-confirm` | `shopName` |
| TikTok提价-站点列表查询：打开「生成提价商品信息」弹窗时调用，拉取全部可选站点编码列表，用于渲染「请选择站点」下拉框(select2)。无请求参数，返回站点编码字符串数组，前端将每个元素同时作为下拉项的 id 与 text。 | `mbs ars erpmonitor-site-list` | - |
| TikTok提价确认列表查询：TikTok提价确认列表分页查询：按提价申请时间、提价状态、店铺、原/新SKU价格区间、SPU近7天订单数区间、平台Item ID、页签、提价/降价、申请人等条件分页查询提价确认单，返回SPU行及其SKU提价明细(confirmList)。 | `mbs ars erpmonitor-tiktok-reviseprice-confirm-list` | `currPage`, `pageSize` |
| 速卖通POP半托管JIT预约商品列表查询：速卖通（AliExpress）POP半托管「立即加入JIT」页面的商品分页查询：按店铺、预约状态、item ID、库存区间筛选并支持排序，返回商品列表及每个商品的SKU明细（属性、销量级别、包装尺寸重量、价格、货品信息、各仓JIT可售库存）。 | `mbs ars erp-report-get-aliexpress-pop-product` | `page`, `size` |
| 速卖通店铺余额列表查询：按店铺名称分页查询速卖通(AliExpress)各店铺账户余额（可用余额、总余额、冻结余额、币种、拉取时间），用于运营监控页表格展示与导出。 | `mbs ars erp-report-list-balance` | `currentPage`, `pageSize` |
| 订阅费导入记录列表查询：查询「订阅费/开号店铺成本/店铺商标成本」导入文件的解析记录列表：按操作人、操作时间区间、解析状态分页查询，返回文件名、费用类型、操作人、创建/更新时间、解析状态及导入结果等字段。 | `mbs ars erp-report-list-daily-sale-fee` | `fileType`, `pageNo`, `pageSize` |
| SPU店铺销售状态店铺数据明细(退款明细)查询：SKU业绩页中点击某行退款金额时，按所选月份/平台/总监/经理/主管/店长及SKU筛选条件，分页查询该SKU+平台维度下的退款订单明细列表，渲染于退款详情抽屉表格。 | `mbs ars erp-report-get-db-spu-sales-status-shop-data-details` | `pageNo`, `pageSize` |
| 个人SKU业绩-店铺SKU销售业绩数据查询：「个人sku业绩」页面主列表查询：按月份(可多选)、平台、总监/经理/主管/店长组织层级、SKU、排序条件分页查询店铺维度的SKU销售业绩，返回销售额、销量、毛利额/毛利率、退款/退款率、广告费(含店长明细)等汇总指标。 | `mbs ars erp-report-get-db-spu-sales-status-shop-datas` | `pageSize`, `pageNo` |
| 销售积分明细查询：销售积分榜单页面右侧「积分明细」数据查询：按月份与销售人员名单查询，返回每位销售人员的积分项目明细（姓名、积分项目、积分增减、时间），用于右侧明细表格滚动展示。 | `mbs ars erp-report-get-db-sales-points-details` | `months` |
| 销售积分榜单-左榜排名查询：销售积分榜单大屏页面加载时调用，按月份 + 销售人员名单查询各销售人员当月积分排名，返回排名/姓名/积分列表，用于左侧「销售积分榜单」表格自动滚动展示。 | `mbs ars erp-report-get-db-sales-points` | `months` |
| 客服/开发销售积分明细查询(getKfDbSalesPointsDetails)：「开发积分榜单」大屏右侧「积分明细」表格数据源：按月份与销售人员列表查询各销售人员的积分明细流水（积分项目、加减分值、发生时间），前端 Rightdata 绑定 el-table 自动滚动展示。 | `mbs ars erp-report-get-kf-db-sales-points-details` | `months` |
| 客服/开发销售积分榜单查询(getKfDbSalesPoints)：开发积分榜单大屏左侧「榜单」数据查询：按月份与销售人员列表查询各销售人员的开发积分排名，返回排名/姓名/积分列表，供 el-table 自动滚动展示。 | `mbs ars erp-report-get-kf-db-sales-points` | `months` |
| 供应商应付下载任务创建：在采购/供应商应付报表页，根据供应商名称、应付金额区间、入库时间区间等筛选条件，向后端提交一个异步下载任务。成功返回 code=200 时弹出创建成功提示，失败用 desc 文案提示。 | `mbs ars erp-report-download-supplier` | - |
| 供应商初付/批次明细查询：按供应商名称、平台单号、应付金额区间、入库时间区间分页查询供应商应付（初付）汇总数据，返回每条供应商应付记录及其下挂的批次入库明细列表（批次号/单价/入库数量/邮费/入库时间/采购时间）。 | `mbs ars erp-report-get-supplier-primary` | `page`, `size` |
| TikTok店铺回款状态报表列表查询：按运营状态、回款状态、总监/经理/运营、店铺等条件分页查询 TikTok 店铺扣分与回款状态监控报表，支持按扣分、拉取时间排序，返回店铺监控行列表及总数。 | `mbs ars erp-report-list-report` | `pageSize`, `currentPage` |
| TikTok活动(年度)列表导出：店铺热销商品监控页「TikTok活动导出」按钮触发，按当前选中店铺(店铺名称数组)导出 TikTok 年度活动 listing 列表为 Excel 文件。请求体直接为店铺名称字符串数组；响应为 .xlsx 二进制文件流，前端以 responseType=blob 接收并触发下载，默认文件名 tiktok.xlsx。 | `mbs ars erp-report-download` | `shopNameList` |
| 平台推送说明书(推送逻辑)查询：「平台刊登推送表」页面初始化时拉取各平台的推送逻辑/说明书内容列表；用于查看气泡展示与编辑弹窗回显。POST 无请求体。 | `mbs ars erp-report-get-today-push-shuo-ming-shu` | - |
| 平台刊登推送表查询：按平台与时间区间分页查询各平台今日刊登推送汇总数据，返回平台人数、人均/总推送量、第一轮新品（昨日提交）、24/72小时出单、推送覆盖率、单SPU推送次数、放弃率/放弃次数、推送失败SPU等运营监控指标。 | `mbs ars erp-report-get-today-push-team` | `page`, `limit` |
| 支付宝采购账单-导入历史查询(分摊价导入历史)：查询「支付宝采购账单/分摊价」文件的导入历史记录：按操作人、操作时间区间、解析状态分页过滤(fileType 固定=2),返回导入文件名、操作人、操作时间、解析状态、总/成功/失败行数、导入结果描述及记录ID(用于下载分摊结果)。 | `mbs ars erp-report-query-import-history` | `fileType`, `pageSize` |

## 命令详情

- [erpmonitor-get-yesterday-wish-account.md](erpmonitor-get-yesterday-wish-account.md)
- [erpmonitor-yesterday-account-statement.md](erpmonitor-yesterday-account-statement.md)
- [erpmonitor-spu.md](erpmonitor-spu.md)
- [erpmonitor-product-brand.md](erpmonitor-product-brand.md)
- [erpmonitor-export-default-paramtes.md](erpmonitor-export-default-paramtes.md)
- [erpmonitor-forbidden-listings-of-shop.md](erpmonitor-forbidden-listings-of-shop.md)
- [erpmonitor-not-in-shanghai-listing-of-shop.md](erpmonitor-not-in-shanghai-listing-of-shop.md)
- [erpmonitor-query-repeat-spu-title-of-shop.md](erpmonitor-query-repeat-spu-title-of-shop.md)
- [erp-report-get-site-by-type.md](erp-report-get-site-by-type.md)
- [erp-report-get-site.md](erp-report-get-site.md)
- [erp-report-get-company-info.md](erp-report-get-company-info.md)
- [erp-report-get-must-publish-ablity.md](erp-report-get-must-publish-ablity.md)
- [erpflowmonitor-get-item-data-monitor.md](erpflowmonitor-get-item-data-monitor.md)
- [erpflowmonitor-get-shop-data-monitor.md](erpflowmonitor-get-shop-data-monitor.md)
- [erpmonitor-details.md](erpmonitor-details.md)
- [erpmonitor-find-account.md](erpmonitor-find-account.md)
- [erpmonitor-income-and-expend-details.md](erpmonitor-income-and-expend-details.md)
- [erpmonitor-loan.md](erpmonitor-loan.md)
- [erpmonitor-list-product-by-listing-allegro-product-publish.md](erpmonitor-list-product-by-listing-allegro-product-publish.md)
- [erpmonitor-list-publish-shop.md](erpmonitor-list-publish-shop.md)
- [erpmonitor-amazon-reviseprice-confirm-list.md](erpmonitor-amazon-reviseprice-confirm-list.md)
- [erpmonitor-get-amazon-not-fba-shop.md](erpmonitor-get-amazon-not-fba-shop.md)
- [erpmonitor-get-parent-category-name.md](erpmonitor-get-parent-category-name.md)
- [erpmonitor-ebay-reviseprice-confirm-list.md](erpmonitor-ebay-reviseprice-confirm-list.md)
- [erpmonitor-find-shops-ebay-reviseprice-confirm.md](erpmonitor-find-shops-ebay-reviseprice-confirm.md)
- [erpmonitor-get-ebay-reviseprice-detail.md](erpmonitor-get-ebay-reviseprice-detail.md)
- [erpmonitor-ez-data.md](erpmonitor-ez-data.md)
- [erpmonitor-find-product-and-order.md](erpmonitor-find-product-and-order.md)
- [erpmonitor-fanno-reviseprice-confirm-list.md](erpmonitor-fanno-reviseprice-confirm-list.md)
- [erpmonitor-find-shops-by-shop-manager-fanno-reviseprice-confirm.md](erpmonitor-find-shops-by-shop-manager-fanno-reviseprice-confirm.md)
- [erpmonitor-find-shops-fanno-reviseprice-confirm.md](erpmonitor-find-shops-fanno-reviseprice-confirm.md)
- [erpmonitor-batch-add-revise-white-list.md](erpmonitor-batch-add-revise-white-list.md)
- [erpmonitor-collect-folder-list.md](erpmonitor-collect-folder-list.md)
- [erpmonitor-currency.md](erpmonitor-currency.md)
- [erpmonitor-details-activate-info.md](erpmonitor-details-activate-info.md)
- [erpmonitor-details-disabled-info.md](erpmonitor-details-disabled-info.md)
- [erpmonitor-details-refresh-info.md](erpmonitor-details-refresh-info.md)
- [erpmonitor-exprot-asyn-excel.md](erpmonitor-exprot-asyn-excel.md)
- [erpmonitor-get-all-emp-name.md](erpmonitor-get-all-emp-name.md)
- [erpmonitor-get-country-from-es.md](erpmonitor-get-country-from-es.md)
- [erpmonitor-get-inventory-log.md](erpmonitor-get-inventory-log.md)
- [erpmonitor-get-listing-log.md](erpmonitor-get-listing-log.md)
- [erpmonitor-get-publish-oper-list.md](erpmonitor-get-publish-oper-list.md)
- [erpmonitor-get-shop-freight-templates.md](erpmonitor-get-shop-freight-templates.md)
- [erpmonitor-get-site-by-platform.md](erpmonitor-get-site-by-platform.md)
- [erpmonitor-hot-product-with-shop.md](erpmonitor-hot-product-with-shop.md)
- [erpmonitor-hot-product-with-sku.md](erpmonitor-hot-product-with-sku.md)
- [erpmonitor-platform.md](erpmonitor-platform.md)
- [erpmonitor-shop-by-platform3.md](erpmonitor-shop-by-platform3.md)
- [erpmonitor-shop-by-platform.md](erpmonitor-shop-by-platform.md)
- [erpmonitor-find-shops-by-shop-manager-lazada-reviseprice-confirm.md](erpmonitor-find-shops-by-shop-manager-lazada-reviseprice-confirm.md)
- [erpmonitor-find-shops-lazada-reviseprice-confirm.md](erpmonitor-find-shops-lazada-reviseprice-confirm.md)
- [erpmonitor-lazada-reviseprice-confirm-list.md](erpmonitor-lazada-reviseprice-confirm-list.md)
- [erpmonitor-all-listing-spu.md](erpmonitor-all-listing-spu.md)
- [erpmonitor-all-listing.md](erpmonitor-all-listing.md)
- [erpmonitor-hot-listing.md](erpmonitor-hot-listing.md)
- [erpmonitor-getlogin-info.md](erpmonitor-getlogin-info.md)
- [erpmonitor-get-platform-name-and-id.md](erpmonitor-get-platform-name-and-id.md)
- [erpmonitor-get-publish-params-limit.md](erpmonitor-get-publish-params-limit.md)
- [erpmonitor-get-shop-name-by-platform-id.md](erpmonitor-get-shop-name-by-platform-id.md)
- [erpmonitor-get-shop-name.md](erpmonitor-get-shop-name.md)
- [erpmonitor-get-sku-online-product.md](erpmonitor-get-sku-online-product.md)
- [erpmonitor-great-chief.md](erpmonitor-great-chief.md)
- [erpmonitor-list-repeate-details.md](erpmonitor-list-repeate-details.md)
- [erpmonitor-on-sold-product.md](erpmonitor-on-sold-product.md)
- [erpmonitor-product-relevant-information.md](erpmonitor-product-relevant-information.md)
- [erpmonitor-query-forbid-publish-listing.md](erpmonitor-query-forbid-publish-listing.md)
- [erpmonitor-sale-details.md](erpmonitor-sale-details.md)
- [erpmonitor-sku-deficit-of-shop.md](erpmonitor-sku-deficit-of-shop.md)
- [erpmonitor-find-editor-shop.md](erpmonitor-find-editor-shop.md)
- [erpmonitor-match-manage-shop.md](erpmonitor-match-manage-shop.md)
- [erpmonitor-match-skus-of-shop.md](erpmonitor-match-skus-of-shop.md)
- [erpmonitor-deleteshopee-reviseprice-confirm-list.md](erpmonitor-deleteshopee-reviseprice-confirm-list.md)
- [erpmonitor-get-discount-info-by-shop-shopee-reviseprice-confirm.md](erpmonitor-get-discount-info-by-shop-shopee-reviseprice-confirm.md)
- [erpmonitor-get-item-ids-by-discount-id-shopee-reviseprice-confirm.md](erpmonitor-get-item-ids-by-discount-id-shopee-reviseprice-confirm.md)
- [erpmonitor-pull-discount-info-of-shop-shopee-reviseprice-confirm.md](erpmonitor-pull-discount-info-of-shop-shopee-reviseprice-confirm.md)
- [erpmonitor-shopee-reviseprice-confirm-list.md](erpmonitor-shopee-reviseprice-confirm-list.md)
- [erpmonitor-list-product-by-listing-shopify-convent-sku.md](erpmonitor-list-product-by-listing-shopify-convent-sku.md)
- [erpmonitor-shopify-detail-csv.md](erpmonitor-shopify-detail-csv.md)
- [erpmonitor-get-customer-service-leader.md](erpmonitor-get-customer-service-leader.md)
- [erpmonitor-get-customer-service-shop.md](erpmonitor-get-customer-service-shop.md)
- [erpmonitor-get-customer-service.md](erpmonitor-get-customer-service.md)
- [erpmonitor-find-shops-tiktok-reviseprice-confirm.md](erpmonitor-find-shops-tiktok-reviseprice-confirm.md)
- [erpmonitor-get-discount-info-by-shop-tiktok-reviseprice-confirm.md](erpmonitor-get-discount-info-by-shop-tiktok-reviseprice-confirm.md)
- [erpmonitor-get-item-ids-by-discount-id-tiktok-reviseprice-confirm.md](erpmonitor-get-item-ids-by-discount-id-tiktok-reviseprice-confirm.md)
- [erpmonitor-get-submit-info.md](erpmonitor-get-submit-info.md)
- [erpmonitor-pull-discount-info-of-shop-tiktok-reviseprice-confirm.md](erpmonitor-pull-discount-info-of-shop-tiktok-reviseprice-confirm.md)
- [erpmonitor-site-list.md](erpmonitor-site-list.md)
- [erpmonitor-tiktok-reviseprice-confirm-list.md](erpmonitor-tiktok-reviseprice-confirm-list.md)
- [erp-report-get-aliexpress-pop-product.md](erp-report-get-aliexpress-pop-product.md)
- [erp-report-list-balance.md](erp-report-list-balance.md)
- [erp-report-list-daily-sale-fee.md](erp-report-list-daily-sale-fee.md)
- [erp-report-get-db-spu-sales-status-shop-data-details.md](erp-report-get-db-spu-sales-status-shop-data-details.md)
- [erp-report-get-db-spu-sales-status-shop-datas.md](erp-report-get-db-spu-sales-status-shop-datas.md)
- [erp-report-get-db-sales-points-details.md](erp-report-get-db-sales-points-details.md)
- [erp-report-get-db-sales-points.md](erp-report-get-db-sales-points.md)
- [erp-report-get-kf-db-sales-points-details.md](erp-report-get-kf-db-sales-points-details.md)
- [erp-report-get-kf-db-sales-points.md](erp-report-get-kf-db-sales-points.md)
- [erp-report-download-supplier.md](erp-report-download-supplier.md)
- [erp-report-get-supplier-primary.md](erp-report-get-supplier-primary.md)
- [erp-report-list-report.md](erp-report-list-report.md)
- [erp-report-download.md](erp-report-download.md)
- [erp-report-get-today-push-shuo-ming-shu.md](erp-report-get-today-push-shuo-ming-shu.md)
- [erp-report-get-today-push-team.md](erp-report-get-today-push-team.md)
- [erp-report-query-import-history.md](erp-report-query-import-history.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
