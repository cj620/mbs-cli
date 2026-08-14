// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import type { AuditManifest } from './router.js'

export const projectManifest = {
  "schemaVersion": "1",
  "manifestVersion": "2026-05-20T00:00:00+08:00",
  "modules": [
    {
      "domain": "ars",
      "pathPrefix": "",
      "actions": [
        {
          "name": "erpmonitor-get-yesterday-wish-account",
          "description": "昨日wish放款额度查询：财务看板初始化时调用，查询 payoneer 接口提供的 wish 店铺昨日可放款总额，前端直接渲染到看板「昨日wish放款额度」卡片(#WishAccount)。无请求参数。",
          "method": "GET",
          "path": "/erpmonitor/erpmonitor/accountStatementMonitor/getYesterdayWishAccount",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-yesterday-account-statement",
          "description": "昨日账户收支监控查询：首页仪表盘财务看板加载时自动调用，查询昨日账户收支汇总，返回昨日支出金额(expend)与昨日收入金额(income)，分别渲染到看板支出/收入两个数字卡片。无请求参数。",
          "method": "GET",
          "path": "/erpmonitor/erpmonitor/accountStatementMonitor/yesterdayAccountStatement",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-spu",
          "description": "获取商品视频地址(getVedio)：在“在线列表(热销商品监控)”页面的绑定视频弹窗中，按商品SPU查询该SPU当前已绑定的视频地址，用于回填视频地址输入框。",
          "method": "GET",
          "path": "/erpmonitor/erpmonitor/ebayVideoController/getVedio/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-product-brand",
          "description": "热销商品监控-商品品牌下拉查询：进入热销商品监控页(shopHotProducts2)时调用，加载\"商品品牌\"筛选下拉框的全部可选品牌列表。无请求参数，返回品牌集合(品牌ID + 品牌名称)，前端以 brandName 作为选项的 label 与 value。",
          "method": "GET",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/productBrand",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-export-default-paramtes",
          "description": "导出默认参数查询（按平台取默认平台费率/毛利率/退款率）：商品导出创建页在选择/初始化导出平台时调用，按 platformId 查询该平台对应的默认导出参数（平台费率、毛利率、退款率），并回填到「数据格式」区的平台费率、毛利率、退款率输入框。",
          "method": "GET",
          "path": "/erpmonitor/erpmonitor/managerHotProduct/exportDefaultParamtes",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-forbidden-listings-of-shop",
          "description": "店铺违禁词刊登列表查询：按店铺ID分页查询该店铺下命中违禁词(禁词)的刊登商品列表，返回商品店铺、主图、SPU、命中禁词标识、上架时间、标题、商品链接、商品ID等，以及分页汇总(总页数/总条数)。前端每页固定100条，使用art-template(#contentTemplate)渲染表格并配合分页控件翻页。",
          "method": "GET",
          "path": "/erpmonitor/erpmonitor/monitor/forbiddenListingsOfShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-not-in-shanghai-listing-of-shop",
          "description": "店铺非上海刊登商品查询：按店铺ID分页查询该店铺“违规地（非上海地址）”刊登的商品列表，返回店铺名称、SPU、图片、上架时间、标题、商品链接、商品ID等，前端 art-template 渲染表格并分页展示。",
          "method": "GET",
          "path": "/erpmonitor/erpmonitor/monitor/notInShanghaiListingOfShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-query-repeat-spu-title-of-shop",
          "description": "店铺重复SPU标题查询：按店铺分页查询该店铺下存在重复标题/重复铺货的 SPU 列表：返回店铺名、主图、ERP SPU、重复数、上架时间、标题、商品链接等，并携带总条数与总页数用于分页。",
          "method": "GET",
          "path": "/erpmonitor/erpmonitor/monitor/queryRepeatSpuTitleOfShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-site-by-type",
          "description": "按站点查询账单表头解析规则(getSiteByType)：amazonBill 文件上传解析页「设置解析规则」弹窗中，选择站点后按站点查询该站点已配置的账单表头解析规则。返回以费项类型名称为键、对应账单表头列名候选列表为值的 Map，前端 for...in 遍历生成解析规则表格。",
          "method": "GET",
          "path": "/erpReport/erpReport/amazonHeaderRecord/getSiteByType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-site",
          "description": "获取亚马逊账单站点列表：amazonBill「文件上传解析」页面初始化(created)时调用，获取已配置解析规则的亚马逊站点(site)名称列表，用于「设置解析规则」弹窗中的站点下拉选择。选中站点后再调用 getSiteByType 拉取该站点的表头规则。",
          "method": "GET",
          "path": "/erpReport/erpReport/amazonHeaderRecord/getSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-company-info",
          "description": "公司信息下拉列表查询：消息客服监控报表页加载时调用，获取当前用户可见的公司列表，用于渲染顶部「请选择公司」下拉框。GET 无入参，返回公司数组，前端用 art-template 模板 companyTemplate 遍历 obj 渲染 option(value=companyId, text=companyName)。",
          "method": "GET",
          "path": "/erpReport/erpReport/message/getCompanyInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-must-publish-ablity",
          "description": "获取必发布(适用)平台列表：进入「今日推送团队监控」页面时调用，拉取必发布/适用平台清单，用于顶部「请选择平台」下拉框(el-select)的选项渲染。无请求参数，返回平台数组。",
          "method": "GET",
          "path": "/erpReport/erpReport/todayPushTeam/getMustPublishAblity",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpflowmonitor-get-item-data-monitor",
          "description": "商品流量监控列表查询（getItemDataMonitor）：平台流量看板页「商品流量看板」Tab 的商品维度流量监控分页查询：按平台、大酋长、组员、店铺、SPU、统计天数（1/7/30天）筛选，并按订单量/销售数量/访问/转化率/销售风向/退款风向等排序，返回商品流量列表及总数、总页数。",
          "method": "POST",
          "path": "/erpflowmonitor/erpflowmonitor/ebayDataMonitor/getItemDataMonitor",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpflowmonitor-get-shop-data-monitor",
          "description": "店铺流量监控-平台流量看板数据查询：店铺流量监控页「平台流量看板」按平台/大酋长/组员/店铺维度，统计近 1/7/30 天店铺整体流量指标(访客数UV、访问次数PV、人均访问次数、访问时长、被访问产品数、订单量及各指标环比上期变化率)，用于渲染顶部 7 个指标卡。",
          "method": "POST",
          "path": "/erpflowmonitor/erpflowmonitor/ebayDataMonitor/getShopDataMonitor",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-details",
          "description": "账户对账单监控-收支明细查询：账户对账单监控页面，根据交易时间区间、账户邮箱、收支类型、币种查询某账户的资金收支(进账/出账)流水明细，分页返回流水列表(币种、外币/人民币金额、来源去向、账户余额、平台、店铺、备注、交易日期)及总条数/总页数。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/accountStatementMonitor/details",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-find-account",
          "description": "查询收支监控账号列表：收支监控（收入/支出）页面初始化时调用，获取当前可选的账号列表，用于渲染顶部“请选择账号”下拉框（select#findAccount）。请求不携带任何请求体，响应返回账号字符串数组 obj，前端通过 art-template 模板 findAccountTemplate 逐项渲染为 option，其 value 与显示文本均为账号本身。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/accountStatementMonitor/findAccount",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-income-and-expend-details",
          "description": "账户收支明细汇总查询：账户对账监控：按交易时间区间与账号(邮箱)查询各账号的收入/支出/余额汇总，返回账号、开户平台、币种、收入金额、支出金额、当前余额列表，供页面表格展示并提供「查看明细」跳转。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/accountStatementMonitor/incomeAndExpendDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-loan",
          "description": "押款（可放款）监控查询：对账单监控：按“可放款时间”查询各账号（店铺）押款金额、币种及可放款时间，分页返回（每页50条）。页面加载即自动调用一次。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/accountStatementMonitor/loan",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-list-product-by-listing-allegro-product-publish",
          "description": "Allegro已导入商品(Listing)列表查询：查询 Allegro 商品导入(刊登 listing)结果列表：按 SPU、导入结果状态、导入人分页筛选，返回导入商品(SPU)行及其下 SKU 明细、店铺、毛利率、备货时长、物流模板、价格、导入人、导入结果与时间等字段；列表行可展开查看 SKU 价格/库存/币种。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/allegroProductPublish/listProductByListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-list-publish-shop",
          "description": "查询Allegro可刊登店铺列表：Allegro商品刊登导入页初始化时调用，获取当前用户可选的Allegro店铺列表，用于填充「导入」弹窗中的「选择店铺」下拉框(#shopName)。POST无请求体，返回店铺ID与店铺名称集合。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/allegroProductPublish/listPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-amazon-reviseprice-confirm-list",
          "description": "亚马逊调价确认列表查询：AMZ调价页列表分页查询：按创建时间、刊登时间、调价结果、店铺、原/新价格区间、物流方式、涨降价、SKU/SPU/子ASIN、是否跟卖、运费模板等条件分页查询亚马逊调价确认记录，返回列表及分页汇总。tab=1 等待调价，tab=2 调价完毕。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/amaoznRevisepriceConfirm/amazonRevisepriceConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-amazon-not-fba-shop",
          "description": "亚马逊非FBA店铺列表查询：亚马逊调价页面初始化拉取当前用户可见的亚马逊非FBA店铺列表，用于渲染店铺筛选下拉与多选店铺框。请求体固定为空对象，无入参；返回店铺数组，元素含 shopId/shopName 等字段。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/amaoznRevisepriceConfirm/getAmazonNotFbaShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-parent-category-name",
          "description": "调价/不调价分类(父类目名称)查询：亚马逊价格调整页面初始化时调用：拉取父级类目名称列表，分别渲染到「不调价分类(adjustNoTemplate)」与「调价分类(adjustDoTemplate)」两个复选框下拉中，供生成提价商品信息时选择。无请求参数，响应为类目名称字符串数组。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/amaoznRevisepriceConfirm/getParentCategoryName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-ebay-reviseprice-confirm-list",
          "description": "ebay提价确认列表查询：ebay提价页列表分页查询：按创建时间、店铺、提价结果、涨/降价、当前售价区间、新售价区间、当前/新物流方式、创建人、itemId等条件筛选，返回提价确认记录列表。等待提价与提价完毕两个Tab共用同一接口。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/ebayRevisepriceConfirm/ebayRevisepriceConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-find-shops-ebay-reviseprice-confirm",
          "description": "eBay提价确认-店铺下拉列表查询：eBay提价确认页面初始化时加载当前用户可见的店铺列表，用于店铺单选下拉框(#selectShop)与多选店铺勾选框(#ulallchk)的数据源。请求体为空JSON对象，无入参；返回店铺集合，逐项含店铺ID与店铺名称。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/ebayRevisepriceConfirm/findShops",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-ebay-reviseprice-detail",
          "description": "eBay提价任务统计详情查询：进入eBay提价页时调用，查询当天提价任务的各项统计数字（计算中任务数、等待提价listing数、提价中数、今/昨提价失败数、今/昨提价成功数），渲染到页面头部状态栏。该接口无请求参数，POST 空请求体。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/ebayRevisepriceConfirm/getEbayRevisepriceDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-ez-data",
          "description": "EZBuy 商品/订单汇总统计查询：EZBuy 商品 & 订单报表页面加载时调用，查询平台维度的汇总统计数据：平台总商品数、平台总订单数、当日订单数，回填到页面头部的三个统计标签。前端不传任何请求参数。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/ezbuy/ezData",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-find-product-and-order",
          "description": "EZBuy 商品 & 订单报表查询：EZBuy 各店铺按品类的商品数/订单数监控报表分页查询：按统计时间区间、店铺过滤，返回每条统计日期-店铺-品类下的平台总商品数、平台总订单数、当日订单数及排名，并返回总条数与总页数用于前端分页。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/ezbuy/findProductAndOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-fanno-reviseprice-confirm-list",
          "description": "fanno提价列表查询：fanno提价页面「等待提价 / 提价完毕」两个标签页的列表分页查询：按创建时间、店铺、提价结果、涨价/降价、当前售价区间、新售价区间、创建人、itemid、sku 等条件筛选，返回提价 listing 列表及店铺、负责人、当前售价、新售价、新折前价格、站点、提价结果、刊登/提价时间等字段。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/fannoRevisepriceConfirm/fannoRevisepriceConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-find-shops-by-shop-manager-fanno-reviseprice-confirm",
          "description": "根据店铺负责人查询店铺列表：fanno提价页\"生成提价商品信息\"弹窗中，选择\"店铺负责人\"后联动触发；以负责人(员工名)列表为入参，查询其名下的店铺，返回店铺名称集合用于填充\"店铺\"多选下拉框。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/fannoRevisepriceConfirm/findShopsByShopManager",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-find-shops-fanno-reviseprice-confirm",
          "description": "店铺列表查询(fanno提价店铺下拉)：fanno提价页面初始化时调用，获取当前用户可选的店铺列表，用于顶部店铺多选下拉(#checkShops)的渲染。请求体为空对象{}，无入参；返回店铺集合，每项含店铺名称与店铺ID，供勾选后回填 checkShop(店铺名)与 checkShopId(店铺ID)。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/fannoRevisepriceConfirm/findShops",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-batch-add-revise-white-list",
          "description": "批量加入改价(缺货不改0)白名单：在线列表页面勾选一条或多条 listing 后，点击\"我不要缺货改0\"，将所选 listing（按 平台ID+店铺名+平台商品ID 定位）批量加入改价白名单，加入后系统不再对其执行缺货自动改0处理。请求体为 JSON 数组，成功后弹出提示并刷新列表。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/batchAddReviseWhiteList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-collect-folder-list",
          "description": "收藏夹列表查询：查询当前用户的全部商品收藏夹（我的收藏夹），用于管理收藏夹/加入收藏夹弹窗的单选列表渲染：返回每个收藏夹的ID、名称及夹内收藏商品数量。请求体为空对象{}，后端按当前登录用户返回其收藏夹。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/collectFolderList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-currency",
          "description": "原币种列表查询：热销商品监控页初始化时加载「原币种(currency)」下拉选择框的可选值列表。该接口为无参 POST，返回全部可选原币种字符串数组，前端用 art-template 模板 contentTemplate4 渲染为 select#currency 的 option 项，供搜索时按原币种过滤。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/currency",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-details-activate-info",
          "description": "TikTok Listing 批量上/下架(detailsActivateInfo)：店铺爆款监控页选中若干 TikTok(platformId=120) listing 后，批量提交上架(operType=1)或下架(operType=2)。前端把勾选行完整对象数组随操作类型一并 POST 给后端，后端据 code/desc 返回处理结果并前端弹窗提示。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/detailsActivateInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-details-disabled-info",
          "description": "在线列表删除下架(detailsDisabledInfo)：在线列表(热销商品监控)页勾选listing后批量删除/下架;平台为Joom(85)或TikTok(120)时调用,提交选中listing整行对象数组,成功后弹出desc并刷新列表。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/detailsDisabledInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-details-refresh-info",
          "description": "热销商品监控-批量同步刷新详情信息：在“店铺热销商品”列表中勾选若干 listing 后触发，前端把全部勾选行（getChosenRow() 返回的完整 listing 对象数组）原样作为请求体提交后端发起详情同步刷新任务，前端仅用返回的 code/desc 弹窗提示。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/detailsRefreshInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-exprot-asyn-excel",
          "description": "在线列表异步导出Excel：在线列表(热销商品监控)页点击导出时，按当前页面全部筛选条件创建异步导出Excel任务；请求体与列表查询 getFormParams() 一致(含平台/团队/店铺/价格/销量/时间/类目/标签/侵权等近百项筛选)。成功后提示并可跳转我的导出队列。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/exprotAsynExcel",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-all-emp-name",
          "description": "查询市场部所有在职人员：查询市场部(department_id=54)全部在职(status=1)员工姓名列表，用于页面「市场部在职人员」下拉/看板渲染。后端SQL：select employee_name from hr_employee where department_id =54 and status =1。前端调用函数已标注@deprecated。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/getAllEmpName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-country-from-es",
          "description": "获取发货地(国家)下拉列表：热销商品监控(店铺热销商品)页面初始化时调用，从 ES 中查询全部可选发货地(国家)列表，用于填充页面顶部筛选区 #countryFrome 多选下拉框。无任何请求参数，返回国家集合。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/getCountryFromEs",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-inventory-log",
          "description": "调库日志查询：热销商品监控列表行操作「查看调库日志」时调用：根据 skuId/itemId/platformId/erpSku 定位某条 listing，返回其历史库存修改(调库)日志列表，前端以时间线按调库时间展示原库存、新库存、仓库及调库结果。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/getInventoryLog",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-listing-log",
          "description": "Listing操作日志查询：爆款商品监控(店铺爆款)列表中，点击某条 listing 查看其历史操作日志（改价、调库存等操作记录）。入参为该 listing 的 SPU/商品ID(spuId)，返回该 listing 的操作日志时间线列表，前端以 el-timeline 时间线渲染。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/getListingLog",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-publish-oper-list",
          "description": "刊登人下拉列表查询：热销商品监控(在线列表)页面「刊登人」下拉框数据源：根据平台、总监、经理等团队维度过滤，返回可选刊登人(id/name)列表，供顶部筛选区 publisher 选择器渲染。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/getPublishOperList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-shop-freight-templates",
          "description": "店铺运费模板查询：爆款商品监控(shopHotProducts2)页面，按当前所选平台与店铺查询其可用的运费模板列表，用于运费模板多选下拉的选项数据。仅当已选平台且已选至少一个店铺时才发起请求。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/getShopFreightTemplates",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-site-by-platform",
          "description": "根据平台查找站点：依据平台标识(platform)查询该平台下的全部站点列表，用于「店铺上新统计」页面顶部「站点」下拉框的选项渲染(art-template #siteTemplate)。页面加载即调用，返回站点集合。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/getSiteByPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-hot-product-with-shop",
          "description": "店铺热销商品(listing)查询：按平台、店铺、店铺负责人、原币种、销售金额区间、统计时间等条件，分页查询店铺维度的热销商品(listing)列表，返回商品图文、售价区间、7/30/90天销量、浏览量、收藏量等运营监控字段。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/hotProductWithShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-hot-product-with-sku",
          "description": "热销商品SKU销售详情查询(hotProductWithSku)：单产品分析页加载/排序时调用：按店铺(shopId)+商品(itemId)查询该店铺下该 listing 关联各 SKU 的销售详情，返回 SKU 商品信息、30天销售额/销量/平均成交价、待发货、库存/在途、重量、商品属性、成本/毛利、毛利率/退款率、7/30/90天销量、开发员等，渲染至「SKU销售详情」表格。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/hotProductWithSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-platform",
          "description": "平台列表查询（热销商品监控-平台下拉）：热销商品监控页面初始化时调用，获取全部平台列表用于「平台」下拉选择框(#plaformId)渲染。无请求参数，返回平台ID与平台名称集合。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/platform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-shop-by-platform3",
          "description": "店铺列表查询(按平台/shopByPlatform3)：热销商品(店铺)监控页加载时调用，无参 POST，后端按登录上下文返回店铺列表，前端通过 art-template 模板 contentTemplate2 渲染为店铺下拉框(#shopId)的 option 列表。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/shopByPlatform3",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-shop-by-platform",
          "description": "平台店铺/店铺负责人下拉查询：热销商品监控页初始化及平台切换时调用：按平台(platformId)查询该平台下的店铺列表与店铺负责人列表，返回结果分别渲染到店铺下拉(shopId/shopName)与店铺负责人下拉(saleLeader)。无 platformId 时返回全部平台的店铺/负责人。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/hotProductMonitor/shopByPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-find-shops-by-shop-manager-lazada-reviseprice-confirm",
          "description": "按店铺负责人查询店铺(findShopsByShopManager)：Lazada商品提价确认页“生成提价商品信息”弹窗中，选择店铺负责人后联动触发：根据所选店铺负责人(可多选,逗号拼接)查询其名下的店铺列表，用于渲染“店铺”下拉框(ySelect)供选择。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/lazadaRevisepriceConfirm/findShopsByShopManager",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-find-shops-lazada-reviseprice-confirm",
          "description": "Lazada提价确认-店铺列表查询(findShops)：页面加载(getShopLi)时无条件拉取当前用户可见的Lazada提价确认店铺列表，返回结果渲染到筛选区“店铺”多选下拉(#checkShops)，供 getList/getList2 按 shopids 过滤提价记录。请求体固定为空对象。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/lazadaRevisepriceConfirm/findShops",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-lazada-reviseprice-confirm-list",
          "description": "Lazada提价确认列表查询：Lazada提价页面「等待提价」/「提价完毕」两个页签共用的列表分页查询：按创建时间区间、店铺、提价结果、涨/降价、当前售价区间、新售价区间、新物流方式、创建人等条件筛选，返回提价确认记录列表及分页汇总字段。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/lazadaRevisepriceConfirm/lazadaRevisepriceConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-all-listing-spu",
          "description": "本周新刊登·全部SPU列表查询：“在线商品监控-本周新刊登”标签页触发。以 thisWeek=1 一次性拉取本周新刊登的全部SPU列表（不分页），成功回调将返回的 obj 数组整体写入隐藏域 #weekPub，用于“全部listing”导出与全选场景。列表分页展示由同源接口 allListing?thisWeek=1 负责（渲染 pubContentTemplate）。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/managerHotProduct/allListingSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-all-listing",
          "description": "在线商品列表查询（本周新刊登 / 所有在线商品）：在线商品监控列表分页查询。同一接口被两处复用：本周新刊登标签页固定带 thisWeek=1 查询本周新刊登商品；所有在线商品标签页不带 thisWeek 查询全部在线商品。返回商品列表及分页信息（total/pages/scrollId）。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/managerHotProduct/allListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-hot-listing",
          "description": "热销Listing列表查询：在线商品监控页「热销」标签页列表查询：按销售风向(上涨/下跌/不变)筛选，分页返回热销listing列表，含商品信息、店铺/负责人、售价、7/30/90天销量、浏览量、收藏量、销售风向、毛利率、退款风向、退款率等汇总字段(前端最多展示100条)。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/managerHotProduct/hotListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-getlogin-info",
          "description": "获取登录用户信息：页面加载后拉取当前登录用户的基础信息，前端仅取用其中的 obj.manageShopIds（当前用户可管理的店铺ID集合），用于后续店铺列表查询/过滤。请求无入参，返回统一响应体。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/getloginInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-platform-name-and-id",
          "description": "查询平台名称与ID列表：商品统计(productStatistics)页面初始化时调用，获取全部平台的 平台ID/平台名称 列表，用于渲染顶部「请选择平台」下拉框(#platformName)的 option 选项。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/getPlatformNameAndId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-publish-params-limit",
          "description": "刊登参数限制查询(getPublishParamsLimit)：根据平台ID(platformId)查询该平台下各站点的刊登参数下限限制（最小毛利率、最小平台费率、最小折扣率、亚马逊自建最小毛利率等）。前端在“设置店铺刊登参数”弹窗初始化时按平台加载，选择站点后取对应站点下限并在提交时校验。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/getPublishParamsLimit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-shop-name-by-platform-id",
          "description": "根据平台ID查询店铺(店铺下拉联动)：商品统计页平台选择器 onchange 触发：当已选中具体平台时，按 platformId 拉取该平台下的店铺列表，用于渲染“请选择店铺”下拉框(#ShopName)。若平台未选(值为空)则改走 /erpmonitor/erpmonitor/monitor/getShopName 查询全部店铺。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/getShopNameByPlatformId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-shop-name",
          "description": "查询店铺列表(下拉)：商品统计页在未选择平台(平台下拉为空)时，拉取全部可见店铺列表，用于填充\"请选择店铺\"下拉框；每项包含店铺ID与店铺名称，供后续按店铺过滤商品统计使用。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/getShopName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-sku-online-product",
          "description": "SPU在线商品SKU明细查询：在“已上架商品数量统计”页面点击某平台SPU行的展开箭头时触发，按平台SPU ID + 平台 + 统计日期查询该SPU下的在线子SKU明细（平台子SKU、胤元SKU、售价、库存、尺寸/颜色），渲染为SPU下的子表格。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/getSkuOnlineProduct",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-great-chief",
          "description": "销售大酋长下拉列表查询：店铺运营监控页初始化时加载\"销售大酋长\"筛选下拉框的数据源。无请求参数，返回销售大酋长的 ID 与名称列表，前端用 art-template(contentTemplate4) 渲染为 option 选项，供搜索时按大酋长过滤。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/greatChief",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-list-repeate-details",
          "description": "重复铺货/重复标题详情查询：根据一批 SPU 商品ID(itemId,逗号拼接)批量查询每个 SPU 的重复铺货与重复标题明细，返回每个商品对应的重复 SPU 列表与重复标题列表(各含目标 itemId 与跳转 url)，用于店铺重复标题列表页的重复详情列渲染跳转链接。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/listRepeateDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-on-sold-product",
          "description": "已售商品(SPU)监控列表查询：依据店铺、平台、统计日期分页查询该店铺已售出的平台商品(SPU)列表，返回平台SPU ID、平台/胤元SPU编号、商品名称、关键字、售出数量、上架时间与最后更新时间，供运营监控页面表格渲染。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/onSoldProduct",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-product-relevant-information",
          "description": "店铺运营相关信息列表查询：店铺运营监控看板列表分页查询：按平台、店铺、销售负责人、销售大酋长、客户经理、统计时间区间、运营状态等条件筛选，返回各店铺的新品率、动销率、在售/下架商品数、刊登/改价/改运费/改标题等运营维护指标及反馈好评率、统计周期等汇总字段。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/productRelevantInformation",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-query-forbid-publish-listing",
          "description": "违禁/禁售刊登(重复铺货·重复标题)查询：根据上游列表得到的商品ID集合(itemId,逗号拼接)批量查询各商品的“重复铺货(repeateSpu)”与“重复标题(repeateTitle)”明细，返回每个商品对应的重复商品链接与ID，用于在列表行内渲染“重复铺货:[...] 重复标题:[...]”提示。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/queryForbidPublishListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-sale-details",
          "description": "3个月内新品刊登&销售情况查询：财务经理看板底部「3个月内新品刊登&销售情况」表格数据源：按 SKU 状态分组，返回近3个月新品的 SKU 数量、第1~4周刊登量/销量以及监控最后记录时间，前端据此渲染表格并计算单 SKU 本周平均刊登量。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/saleDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-sku-deficit-of-shop",
          "description": "店铺亏损SKU明细查询：按店铺查询亏损SKU明细列表，分页返回该店铺下商品(SPU/SKU)的店铺、图片、上架时间、售价、总成本、预估亏损金额、售出数量、是否加钻、库存等，用于亏损监控与批量下架/立即拉取商品。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/monitor/skuDeficitOfShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-find-editor-shop",
          "description": "查询可编辑ebay店铺列表：ebay商品描述替换(热销推荐)模块的店铺列表查询：按店铺下拉选择(shopId，可为空查全部)返回该用户可编辑的ebay店铺及其热销推荐开启状态、执行状态、PC/移动端行列配置、指定listing、描述模板、预览标识等，用于渲染店铺列表并回填店铺下拉框。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/replaceEbaydesc/findEditorShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-match-manage-shop",
          "description": "匹配可管理店铺列表查询：进入批量下架/添加货架页面(addShelf.html)时自动调用，查询当前用户可管理的店铺列表，用于渲染顶部店铺下拉选择框(#ShopName)。无任何请求入参，返回店铺数组，前端模板仅使用店铺名称 shopName 作为下拉项的 value 与显示文本。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/ReviseListingMonitor/matchManageShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-match-skus-of-shop",
          "description": "店铺下架商品SKU匹配查询：修正刊登监控-下架明细页加载时调用：根据页面 URL 携带的店铺名称(shopName)与 SKU 集合(skus)查询该店铺下匹配到的商品 SKU 列表，返回店铺名称、商品标题、商品编号、平台SKU、主图、库存等，用于下架明细列表渲染。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/ReviseListingMonitor/matchSkusOfShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-deleteshopee-reviseprice-confirm-list",
          "description": "Shopee提价确认Listing删除：在“Shopee提价确认”页面勾选一条或多条Listing记录后，点击“删除listing”并确认，将所选记录的唯一ID(uniqueId)以逗号拼接经查询串 ids 提交，批量删除对应提价确认Listing记录；成功后按当前Tab刷新列表。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/deleteshopeeRevisepriceConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-discount-info-by-shop-shopee-reviseprice-confirm",
          "description": "按店铺获取折扣活动信息：Shopee 提价（改价）确认页“生成提价商品信息”弹窗中，选定单个店铺后，根据店铺名查询该店铺已同步的折扣活动列表，用于填充“店铺活动”下拉框（select2），下拉项 value=discountId、显示文本=discountName。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/getDiscountInfoByShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-item-ids-by-discount-id-shopee-reviseprice-confirm",
          "description": "根据折扣活动ID查询商品ItemID：Shopee提价确认弹窗中，选择店铺并选择该店铺的折扣活动后，根据折扣活动ID(discountId)与店铺名查询该活动下的商品ItemID集合，返回后直接回填到\"Item ID\"文本域(#itemID)供生成提价商品信息使用。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/getItemIdsByDiscountId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-pull-discount-info-of-shop-shopee-reviseprice-confirm",
          "description": "拉取（同步）店铺折扣信息：Shopee 提价确认页，按所选店铺名称从平台侧拉取/同步该店铺最新的折扣活动信息。仅以查询参数 shopName 传入店铺名（多个以逗号拼接），无请求体；返回操作结果状态与提示文案。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/pullDiscountInfoOfShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-shopee-reviseprice-confirm-list",
          "description": "Shopee提价确认列表查询：Shopee提价页「等待提价 / 提价完毕」两个 Tab 的列表分页查询：按创建时间、店铺、提价结果、价格涨跌、当前售价区间、新售价区间、创建人等条件分页查询提价确认记录，返回主记录及其提价明细子列表(confirmList)。getList()/getList2() 复用同一后端接口。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/shopeeRevisepriceConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-list-product-by-listing-shopify-convent-sku",
          "description": "刊登商品列表查询（按刊登状态分页）：Shopify刊登管理页的商品刊登记录分页列表查询：按刊登状态（刊登中/刊登完毕/刊登成功/刊登失败）与页码分页拉取，返回 SPU 刊登记录列表（含主图、加密SPU、标题、分类、刊登店铺/人/状态/时间）及其下的 SKU 变体明细（加密SKU、原价、售卖价、库存等）。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/shopifyConventSku/listProductByListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-shopify-detail-csv",
          "description": "Shopify商品详情文件上传(shopifyDetailCsv)：在\"文件批量刊登\"页面选择本地文件(Excel/CSV)后自动上传，用于按所选刊登店铺导入Shopify商品详情/刊登数据；以 multipart/form-data 携带文件，店铺名以 URL 查询参数 shopName 传入。上传完成后前端弹窗展示返回提示语(desc)并刷新刊登中列表。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/shopifyConventSku/shopifyDetailCsv",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-customer-service-leader",
          "description": "客服组长下拉列表查询：运营监控报表「客服绩效数据」视图初始化时调用，获取全部客服组长列表，用于填充页面「组长」多选下拉框(#leaderList)，供后续按组长查询组员/店铺/客服绩效数据。该接口无请求参数(不传 body)。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/smtShopKpi/getCustomerServiceLeader",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-customer-service-shop",
          "description": "客服(店长/组员)店铺下拉查询：运营监控报表页面中，根据已选择的「店长(大酋长)」与「组员(店铺经理)」联动查询其名下店铺列表，返回店铺ID与店铺名称，用于渲染「店铺」多选下拉框(#shopList)。店长/组员下拉变更时(onchange)触发。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/smtShopKpi/getCustomerServiceShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-customer-service",
          "description": "客服组员(组员下拉)查询：客服绩效(组员维度)页面中，根据已选「店长」(leaderList 多选)联动查询其名下的客服组员列表，返回结果渲染到「组员」下拉框(customberTemplate)。请求体为裸JSON数组(店长ID数组)。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/smtShopKpi/getCustomerService",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-find-shops-tiktok-reviseprice-confirm",
          "description": "TikTok提价-店铺列表查询（findShops）：TikTok改价（提价确认）页面查询店铺列表：按关键词(店铺名)与站点过滤，返回店铺名称/店铺ID列表；供搜索店铺名下拉(select2)、Element Plus 店铺多选框及选择店铺弹层复选列表使用；无参调用则返回全部店铺。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/findShops",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-discount-info-by-shop-tiktok-reviseprice-confirm",
          "description": "按店铺查询TikTok折扣活动信息：TikTok改价确认(提价)弹窗中，当仅选择1个店铺时，按店铺名查询该店铺下的TikTok折扣活动列表，用于渲染“店铺活动”下拉框：每项以 discountId 为值、discountName 为展示文本。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/getDiscountInfoByShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-item-ids-by-discount-id-tiktok-reviseprice-confirm",
          "description": "根据折扣活动ID查询ItemId：TikTok提价：在“生成提价商品信息”弹窗中选中单个店铺后，选择该店铺的折扣活动(select2)，根据折扣活动ID查询该活动下的商品 Item ID 列表，前端将结果回填到 itemId 文本域，供后续批量提价使用。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/getItemIdsByDiscountId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-get-submit-info",
          "description": "TikTok提价-提交任务信息列表查询：TikTok提价确认页“查看任务信息”弹窗的分页查询：按当前页/每页条数分页拉取提价找源提交任务列表，返回任务的店铺/站点/ItemID/SKU/销量区间/毛利与费率/算价渠道/任务状态/创建人时间及执行详情内容。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/getSubmitInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-pull-discount-info-of-shop-tiktok-reviseprice-confirm",
          "description": "同步/拉取店铺最新折扣活动信息：TikTok 商品提价页面触发：按传入的店铺名称（可多个，逗号拼接）从平台拉取/同步该店铺的最新折扣活动信息，返回操作结果提示。用于「同步最新折扣活动」按钮、「拉取折扣信息」按钮及多店铺活动刷新（refershActivities）。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/pullDiscountInfoOfShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-site-list",
          "description": "TikTok提价-站点列表查询：打开「生成提价商品信息」弹窗时调用，拉取全部可选站点编码列表，用于渲染「请选择站点」下拉框(select2)。无请求参数，返回站点编码字符串数组，前端将每个元素同时作为下拉项的 id 与 text。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/siteList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpmonitor-tiktok-reviseprice-confirm-list",
          "description": "TikTok提价确认列表查询：TikTok提价确认列表分页查询：按提价申请时间、提价状态、店铺、原/新SKU价格区间、SPU近7天订单数区间、平台Item ID、页签、提价/降价、申请人等条件分页查询提价确认单，返回SPU行及其SKU提价明细(confirmList)。",
          "method": "POST",
          "path": "/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/tiktokRevisepriceConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-aliexpress-pop-product",
          "description": "速卖通POP半托管JIT预约商品列表查询：速卖通（AliExpress）POP半托管「立即加入JIT」页面的商品分页查询：按店铺、预约状态、item ID、库存区间筛选并支持排序，返回商品列表及每个商品的SKU明细（属性、销量级别、包装尺寸重量、价格、货品信息、各仓JIT可售库存）。",
          "method": "POST",
          "path": "/erpReport/erpReport/aliexpressPopProduct/getAliexpressPopProduct",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-list-balance",
          "description": "速卖通店铺余额列表查询：按店铺名称分页查询速卖通(AliExpress)各店铺账户余额（可用余额、总余额、冻结余额、币种、拉取时间），用于运营监控页表格展示与导出。",
          "method": "POST",
          "path": "/erpReport/erpReport/aliexpress/balance/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-list-daily-sale-fee",
          "description": "订阅费导入记录列表查询：查询「订阅费/开号店铺成本/店铺商标成本」导入文件的解析记录列表：按操作人、操作时间区间、解析状态分页查询，返回文件名、费用类型、操作人、创建/更新时间、解析状态及导入结果等字段。",
          "method": "POST",
          "path": "/erpReport/erpReport/dailySaleFee/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-db-spu-sales-status-shop-data-details",
          "description": "SPU店铺销售状态店铺数据明细(退款明细)查询：SKU业绩页中点击某行退款金额时，按所选月份/平台/总监/经理/主管/店长及SKU筛选条件，分页查询该SKU+平台维度下的退款订单明细列表，渲染于退款详情抽屉表格。",
          "method": "POST",
          "path": "/erpReport/erpReport/feeReport/getDbSpuSalesStatusShopDataDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-db-spu-sales-status-shop-datas",
          "description": "个人SKU业绩-店铺SKU销售业绩数据查询：「个人sku业绩」页面主列表查询：按月份(可多选)、平台、总监/经理/主管/店长组织层级、SKU、排序条件分页查询店铺维度的SKU销售业绩，返回销售额、销量、毛利额/毛利率、退款/退款率、广告费(含店长明细)等汇总指标。",
          "method": "POST",
          "path": "/erpReport/erpReport/feeReport/getDbSpuSalesStatusShopDatas",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-db-sales-points-details",
          "description": "销售积分明细查询：销售积分榜单页面右侧「积分明细」数据查询：按月份与销售人员名单查询，返回每位销售人员的积分项目明细（姓名、积分项目、积分增减、时间），用于右侧明细表格滚动展示。",
          "method": "POST",
          "path": "/erpReport/erpReport/pointsRanking/getDbSalesPointsDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-db-sales-points",
          "description": "销售积分榜单-左榜排名查询：销售积分榜单大屏页面加载时调用，按月份 + 销售人员名单查询各销售人员当月积分排名，返回排名/姓名/积分列表，用于左侧「销售积分榜单」表格自动滚动展示。",
          "method": "POST",
          "path": "/erpReport/erpReport/pointsRanking/getDbSalesPoints",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-kf-db-sales-points-details",
          "description": "客服/开发销售积分明细查询(getKfDbSalesPointsDetails)：「开发积分榜单」大屏右侧「积分明细」表格数据源：按月份与销售人员列表查询各销售人员的积分明细流水（积分项目、加减分值、发生时间），前端 Rightdata 绑定 el-table 自动滚动展示。",
          "method": "POST",
          "path": "/erpReport/erpReport/pointsRanking/getKfDbSalesPointsDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-kf-db-sales-points",
          "description": "客服/开发销售积分榜单查询(getKfDbSalesPoints)：开发积分榜单大屏左侧「榜单」数据查询：按月份与销售人员列表查询各销售人员的开发积分排名，返回排名/姓名/积分列表，供 el-table 自动滚动展示。",
          "method": "POST",
          "path": "/erpReport/erpReport/pointsRanking/getKfDbSalesPoints",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-download-supplier",
          "description": "供应商应付下载任务创建：在采购/供应商应付报表页，根据供应商名称、应付金额区间、入库时间区间等筛选条件，向后端提交一个异步下载任务。成功返回 code=200 时弹出创建成功提示，失败用 desc 文案提示。",
          "method": "POST",
          "path": "/erpReport/erpReport/SupplierPrimaryBatchController/downloadSupplier",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-supplier-primary",
          "description": "供应商初付/批次明细查询：按供应商名称、平台单号、应付金额区间、入库时间区间分页查询供应商应付（初付）汇总数据，返回每条供应商应付记录及其下挂的批次入库明细列表（批次号/单价/入库数量/邮费/入库时间/采购时间）。",
          "method": "POST",
          "path": "/erpReport/erpReport/SupplierPrimaryBatchController/getSupplierPrimary",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-list-report",
          "description": "TikTok店铺回款状态报表列表查询：按运营状态、回款状态、总监/经理/运营、店铺等条件分页查询 TikTok 店铺扣分与回款状态监控报表，支持按扣分、拉取时间排序，返回店铺监控行列表及总数。",
          "method": "POST",
          "path": "/erpReport/erpReport/tiktok/payment/report/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-download",
          "description": "TikTok活动(年度)列表导出：店铺热销商品监控页「TikTok活动导出」按钮触发，按当前选中店铺(店铺名称数组)导出 TikTok 年度活动 listing 列表为 Excel 文件。请求体直接为店铺名称字符串数组；响应为 .xlsx 二进制文件流，前端以 responseType=blob 接收并触发下载，默认文件名 tiktok.xlsx。",
          "method": "POST",
          "path": "/erpReport/erpReport/tiktok/year/campaign/list/download",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-today-push-shuo-ming-shu",
          "description": "平台推送说明书(推送逻辑)查询：「平台刊登推送表」页面初始化时拉取各平台的推送逻辑/说明书内容列表；用于查看气泡展示与编辑弹窗回显。POST 无请求体。",
          "method": "POST",
          "path": "/erpReport/erpReport/todayPushTeam/getTodayPushShuoMingShu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-get-today-push-team",
          "description": "平台刊登推送表查询：按平台与时间区间分页查询各平台今日刊登推送汇总数据，返回平台人数、人均/总推送量、第一轮新品（昨日提交）、24/72小时出单、推送覆盖率、单SPU推送次数、放弃率/放弃次数、推送失败SPU等运营监控指标。",
          "method": "POST",
          "path": "/erpReport/erpReport/todayPushTeam/getTodayPushTeam",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-report-query-import-history",
          "description": "支付宝采购账单-导入历史查询(分摊价导入历史)：查询「支付宝采购账单/分摊价」文件的导入历史记录：按操作人、操作时间区间、解析状态分页过滤(fileType 固定=2),返回导入文件名、操作人、操作时间、解析状态、总/成功/失败行数、导入结果描述及记录ID(用于下载分摊结果)。",
          "method": "POST",
          "path": "/erpReport/erpReport/zfbPurchaseBill/queryImportHistory",
          "pathPrefix": "",
          "responseMode": "json"
        }
      ]
    },
    {
      "domain": "fars",
      "pathPrefix": "",
      "actions": [
        {
          "name": "erpaccount-get-ding-ding-attendance",
          "description": "钉钉考勤(奋斗榜)查询：获取钉钉考勤奋斗榜数据，返回员工加班时长排行列表(含头像、姓名、部门、加班小时数)及考勤统计时间，用于 struggleLlist 看板页面渲染。",
          "method": "GET",
          "path": "/erpaccount/erpaccount/account/getDingDingAttendance",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-country",
          "description": "仪表盘-国家下拉列表查询：财务仪表盘(经理case分析页)初始化时拉取国家列表，用于填充“按国家搜索”的国家下拉框 #country。页面加载即自动调用 country()，无入参，返回国家值数组，前端用 art-template 渲染为 <option>。",
          "method": "GET",
          "path": "/erpaccount/erpaccount/dashboard/country",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-last-logininfo",
          "description": "上次登录信息查询：仪表盘(common.html)加载后由 getmessageconfig() 成功回调触发 lastLogininfo()，GET 查询当前登录用户的上次登录信息（登录人、提示文案、IP、时间及提示级别），渲染到顶部告警条 #lastLogininfo，5秒后自动收起。无请求参数。",
          "method": "GET",
          "path": "/erpaccount/erpaccount/dashboard/lastLogininfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-shop",
          "description": "物流店铺下拉列表查询：加载「Case分析（管理明细）」页面店铺筛选下拉框(#shoptype)的可选项数据。页面初始化时无参 GET 调用，返回店铺集合，前端用 art-template(contentTemplate2) 渲染为 option，仅取 shopName 作为选项值与文本。",
          "method": "GET",
          "path": "/erpaccount/erpaccount/dashboard/shop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-cycles",
          "description": "财务推送任务-获取期数列表(getCycles)：财务导入进度页面初始化(onMounted)时调用，获取可选的财务期数列表，用于顶部\"请选择期数\"下拉框；返回后默认选中第一项并据其 years/cycle 触发任务列表查询。无请求参数。",
          "method": "GET",
          "path": "/erpFinance/erpFinance/financePushTask/getCycles",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-finance-push-task",
          "description": "财务推送任务进度查询：财务数据导入页按所选期数(年份 years + 期次 cycle)查询财务推送任务列表，返回各任务的应导入数/成功数/失败数/进度/状态等汇总字段，用于 el-table 渲染任务进度。",
          "method": "GET",
          "path": "/erpFinance/erpFinance/financePushTask/getFinancePushTask",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-sku",
          "description": "出库单SKU明细查询：在「商品退回(供应商回款)」列表中点击某条出库单行展开时，按出库单号(orderId)懒加载该单下的 SKU 明细行，返回每个 SKU 的名称、数量、成本价/成本合计、零售价/零售合计及异常处理信息，用于在树形子行中展示。",
          "method": "GET",
          "path": "/erpFinance/erpFinance/manufacture/payment/get/order/sku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-auth-url",
          "description": "Payoneer 账号授权链接获取：根据 Payoneer 账号ID获取该账号的 OAuth 授权链接。前端点击「获取授权链接」按钮触发；返回链接非空时 window.open 打开授权，返回空字符串时提示「暂无授权链接」。",
          "method": "GET",
          "path": "/erpFinance/erpFinance/payoneer/account/100049360/auth-url",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yyaccount-instudio-account-getstaymessage1",
          "description": "待办通知-爆单SPU通知查询：经理工作台待办通知区点击「爆单SPU」按钮触发，按当前登录员工 userid 拉取待处理爆单SPU通知列表(JSON字符串)及未读条数，前端 JSON.parse 后 shift() 移除首元素再用 contentComment 模板渲染；JSONP 跨域调用。",
          "method": "GET",
          "path": "/yyaccount/account/messagecontroller/getstaymessage1",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yyaccount-getstaymessage",
          "description": "待办通知（全部通知）查询：经理看板右侧通知卡片点击【全部】按钮触发，按当前员工 userid 拉取全部待办/通知消息列表，返回 JSON 字符串形式通知数组与新通知条数；前端 JSON.parse(data.obj) 后 shift() 去首行，用 art-template contentComment 渲染到 #comment-section。",
          "method": "GET",
          "path": "/yyaccount/account/messagecontroller/getstaymessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yyfms-id-get-developer-bill-detail",
          "description": "开发员账单详情查询：按账单ID查询某开发员账期账单详情，返回结算汇总(settlement)、账单总额(bill)、账期起止、收入明细列表(incomeList)、支出明细列表(disburseList)；前端按岗位渲染不同的过程管理与最终绩效模块。",
          "method": "GET",
          "path": "/yyfms/fms/settlement/getDeveloperBillDetail/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yyfms-id-get-sale-bill",
          "description": "销售账单(绩效结算账单)查询：按账单ID查询销售人员账期内的绩效结算账单详情：含账单周期、收入/支出汇总、收入明细列表、支出明细列表，以及绩效结算(目标销售额、完成率、各档提点、折扣、最终绩效、各项奖金/罚款/补贴等)数据，供绩效结算账单页面渲染。",
          "method": "GET",
          "path": "/yyfms/fms/settlement/getSaleBill/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yyfms-fms-position-name",
          "description": "查询当前用户岗位名称：根据员工ID查询其在财务结算体系中的岗位名称，前端据返回值是否等于\"财务组员\"来控制仪表盘上提现登记/账户流水登记两组区块的显隐。JSONP 跨域调用。",
          "method": "GET",
          "path": "/yyfms/fms/shopSettlementNew/positionName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-get-manager-month",
          "description": "经理月度考核查询：经理月度考核数据查询：按所选平台与月份返回各月经理（人员）的毛利额增长得分、新品销售额得分、爆款得分、总分及发货毛利率等考核字段，用于经理月度考核播报表格展示。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/getManagerMonth",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-get-over-two-days-unshipped-delivery",
          "description": "超2天未发货采购单详情查询：仪表盘下钻：按销量级别(typename)、产品状态(status)、开发员(oper3)筛选，查询超过2天仍未发货的采购单(采购批次)详情列表，返回采购批次、供应商、SKU、采购员、待发货/库存/在途量等字段。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/getOverTwoDaysUnshippedDelivery",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-get-platform-publish-info",
          "description": "平台正常在售产品刊登报表查询：财务管理看板加载“正常在售产品刊登报表”：无入参，按商品类目返回 EBAY/ALIEXPRESS/WISH/AMAZON/LAZADA/SHOPEE 六大平台的在线老品SKU数、在线新品SKU数(新品=30天内创建的sku)、平均刊登量，前端用 art-template 渲染为表格。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/getPlatformPublishInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-get-platform-shortage-rate",
          "description": "八个平台缺货率查询：平台店长看板（platformleader）加载时调用，按平台维度统计各电商平台的库存缺货率与按时发货率，返回平台缺货率列表，前端据缺货率高低用不同颜色卡片渲染（≥15%红/10~15%黄/5~10%灰/<5%绿），并可点击查看单平台缺货 SKU 明细。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/getPlatformShortageRate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-get-pro-publish-cover-rate",
          "description": "正常在售产品刊登覆盖率查询：商品刊登覆盖率看板查询：按商品类目维度统计马帮老品/新品 SKU 数量，以及老品、新品在 EBAY/ALIEXPRESS/WISH/AMAZON/LAZADA/SHOPEE 六大平台的铺货覆盖率（新品=30天内创建的 sku）。页面加载即自动调用，无请求参数。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/getProPublishCoverRate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-get-purchaseanalysis-over-seven-day",
          "description": "超7天采购单详情查询：看板「超7天采购单」明细下钻：按销量级别(typename)、产品状态(status)、开发员(oper3)筛选，返回超7天未到货采购单明细列表(采购批次/供应商/SKU/采购员/销量级别/产品状态/开发员/待发货量/库存量/在途量)。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/getPurchaseanalysisOverSevenDay",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-get-sales-level-reportkf",
          "description": "销售层级报表(客服版 kf)查询：仪表盘商品图表页(productChart)在 flag==2(客服版)分支调用：按 SKU类型、所选统计指标、基准日期与前后30天方向，返回 ECharts 折线图所需的 X 轴类目数据与多系列数据，用于渲染近30天趋势图。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/getSalesLevelReportkf",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-get-shorage-sku-info",
          "description": "缺货SKU列表查询：仪表盘“缺货SKU”明细查询：按平台分类(sortnum)查询当前缺货的SKU列表，返回每个SKU的图片、商品信息、状态、侵权/淘汰标记、开发员/采购员、缺货单量与件数、销售级别、近7/30/90天销量、产品创建时间、最新采购信息及最后一次跟进日志。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/getShorageSkuInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-get-site-by-platform",
          "description": "根据平台查询站点：首页仪表盘「销量趋势图」筛选区，根据已勾选的平台(可多选,逗号拼接)查询对应的站点列表，返回站点名称数组，用于渲染「站点」多选下拉框(#ulSite)。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/getSiteByPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-platform-pull-down",
          "description": "平台下拉列表查询：仪表盘销售员页加载时调用，返回当前用户可见的平台名称列表，用于填充销量趋势图/销售占比图的平台下拉选择框。请求无任何业务参数，后端依据登录态返回平台名称字符串数组。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/platformPullDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-product-managerqhlv",
          "description": "开发SKU平均订单缺货时长(开发酋长缺货率)查询：看板首页加载时调用，查询各开发酋长(productManager)近60-15天开发SKU在出单后各缺货时长区间(0-4/4-7/7-15/15-20/20天以上)的订单量、SKU数、缺货占比，以及总缺货订单量与总平均缺货天数；前端按 skunum04Ratio 计算最大/最小项加红绿高亮，渲染至 #content11 表格。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/productManagerqhlv",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-purchaseanalysis-purchased-sku-detail",
          "description": "已采购的SKU明细查询：采购分析看板「已采购的SKU」下钻明细：根据销量级别(typename)、状态(status)、开发员(oper3)三个查询条件，查询对应分组下的已采购SKU列表，返回 SKU、销量级别、状态、缺货量、在途量、开发员、采购员等字段，前端用 art-template 渲染为表格。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/purchaseanalysisPurchasedSkuDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-purchaseanalysis-purchase-order-detail",
          "description": "超4天采购单详情查询：Dashboard“超4天采购单详情”明细查询：按销量级别(类型名称)、产品状态、开发员三项过滤条件，返回符合条件的采购单明细行（采购批次、供应商、SKU、采购员、销量级别、产品状态、开发员、待发货量、库存量、在途量）。前端以 art-template 渲染为明细表。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/purchaseanalysisPurchaseOrderDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-purchaseanalysis-sku-detail",
          "description": "未采购SKU明细查询：财务域 Dashboard「未采购的SKU」明细查询：按销量级别(typename)、状态(status)、开发员(oper3)三项条件查询未采购SKU列表，返回SKU、销量级别、状态、缺货量、在途量、开发员、采购员等字段，前端用 art-template 渲染为表格。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/purchaseanalysisSkuDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-show-case-by-month",
          "description": "Case按月统计(按所属订单月份归类)：仪表盘经理明细页：按搜索类型(物流方式/国家/订单月份/店铺/马帮SKU)与时间区间统计 case 数。页面 search() 用同一组参数发起两次 POST：第一次绘制 ECharts 柱状图(月份-case数)，第二次渲染明细表(月份/case数/case数按订单月份归类占比)。本页固定为按所属订单月份搜索(filterType=5)。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/showCaseByMonth",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-urchaseanalysis-shortage-sku-detail",
          "description": "缺货SKU明细查询：采购分析-缺货SKU明细查询：根据销量级别(typename)、状态(status)、开发员(oper3)查询对应缺货SKU列表，返回每个缺货SKU的图片、名称、SKU、状态、成本价、供应商、缺货量、在途量、开发员/采购员等信息，用于「缺货SKU」看板明细渲染。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/dashboard/urchaseanalysisShortageSkuDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-lazada-coupon-list",
          "description": "Lazada优惠券(促销)执行记录列表查询：查询各店铺Lazada促销(优惠券)定时执行结果：按店铺/店长(组员)/大酋长/站点/状态/日期类型与时间区间分页筛选，返回店铺、店长、站点、促销设置、上一次成功/失败时间及失败原因，并支持分页与排序。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/lazadaUnRead/lazadaCouponList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-lazada-un-read-message-list",
          "description": "Lazada店铺未读消息列表查询：Lazada未读消息看板分页查询：按排序方式分页返回各Lazada店铺的未读消息统计（ID/TH/MY/PH/SG/VN六站点未读数）、店铺状态、是否超过30分钟未同步消息、店铺登录账号密码等信息，前端以卡片形式渲染并支持分页。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/lazadaUnRead/LazadaUnReadMessageList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-find-all-logistics",
          "description": "物流(货运渠道)统计明细查询：物流明细看板按统计时间区间查询各货运渠道(默认按货运渠道维度)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款/回归退款、各平台(wish/ebay/amz/smt/joom/其他)单量及覆盖国家等统计指标；支持类型筛选与多种排序方式。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/logisticsController/findAllLogistics",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-find-express-code51-all",
          "description": "物流商(51渠道)列表查询：查询51渠道物流商(express code51)列表：支持按物流商名称、物流商编码过滤并分页。前端两处复用——物流商下拉数据源(getcustmer，仅传 courierCode 取全量)与时效配置弹窗列表(searchtraffic，传 page/pageSize/logisticsProviderName 分页查询)，返回物流商及其时效限制配置(limitJsonList)。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/logisticsController/findExpressCode51All",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-find-for-country",
          "description": "物流统计-按国家查看：物流统计仪表盘「按国家查看」维度查询：按统计时间区间、物流类型(平邮/挂号)、排序方式，返回各国家的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款/回归退款、各平台(wish/ebay/amz/smt/joom/其他)分布等统计数据。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/logisticsController/findForCountry",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-find-for-logisticscompany",
          "description": "物流公司维度物流统计查询：物流统计看板「按物流公司查看」维度的统计查询：按统计时间区间与排序方式，返回各物流公司的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款情况及各平台(wish/ebay/amazon/aliexpress/joom/其他)发货单量。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/logisticsController/findForLogisticscompany",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-find-line",
          "description": "物流方式统计查询(findLine)：物流仪表盘统计接口：按统计时间区间与排序方式，统计各物流方式(/货运渠道/国家/物流公司，随页面 viewMode 切换)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款及各平台(wish/ebay/amz/smt/joom/其他)单量。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/logisticsController/findLine",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-find-logistics-info2",
          "description": "物流订单信息查询：电商订单物流信息分页查询：按订单名称/客户、客户预留(自选物流)、货运方式、时间区间筛选，分页返回订单列表(订单编号、状态、店铺、金额、国家、物流单号、交易号、平台订单号等)及总条数/总页数。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/logisticsController/findLogisticsInfo2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-find-logistics-provider-name-all",
          "description": "物流商(物流渠道)名称分页查询：按物流商名称(模糊)查询物流渠道(物流商)列表：用于货运详情/物流时效监控页头部物流渠道下拉数据加载(不分页)，以及运营商及马帮渠道配置弹窗的分页列表(含分页与总数)。返回物流渠道行(渠道ID、物流商名称、物流商编码、是否国外、51Express渠道ID等)。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/logisticsController/findLogisticsProviderNameAll",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-find-logistics",
          "description": "昨天货运渠道监控报表查询：物流员/销售首页仪表盘加载时调用，按时间区间统计昨天各货运渠道的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比及渠道启用状态，返回渠道监控列表用于「昨天货运渠道监控报表」表格渲染。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/logisticsController/findLogistics",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-shopee-un-read-message-list",
          "description": "Shopee店铺未读消息列表查询：分页查询当前用户名下 Shopee 店铺的未读站内信统计：返回每个店铺下各站点账号的未读消息条数、登录状态(是否需验证码、是否超1小时未同步)等，前端按卡片渲染并提供逐站点登录跳转。",
          "method": "POST",
          "path": "/erpaccount/erpaccount/shopeeUnRead/shopeeUnReadMessageList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-excel-list",
          "description": "账单导入Excel历史记录列表查询：查询账单导入(Excel上传)的历史记录列表，返回每次上传的文件名、上传时间、上传人、总记录/成功数/失败数、成功金额、状态及失败订单文件等信息，供 report/excelList.html 页面渲染历史记录表格。无请求参数。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/bill/excelList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-find-platform-bill",
          "description": "平台账单查询：按平台、店铺、费用起止日期查询各平台店铺的账单汇总：订单收入、到帐/平台费/物流费/服务费/广告费/罚款/退款/放款金额、应收款余额及占比，返回账单列表用于财务报表页渲染。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/bill/findPlatformBill",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-platform",
          "description": "获取平台列表：财务报表(平台账单)页加载时调用，无入参，返回当前用户可见的平台列表，用于渲染页面顶部「平台」下拉选择框(art-template PlatformTemplate)。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/bill/getPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-shop-bill",
          "description": "平台店铺列表查询：财务-平台账单页中，平台下拉框 change 时触发，按所选平台名称查询其下全部店铺，返回店铺列表用于渲染「店铺」下拉框选项。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/bill/getShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-finance-account-account-list",
          "description": "科目(会计科目)列表查询：查询全部会计科目(account.account)列表，用于日记账凭证页面顶部筛选栏“科目”下拉框，以及创建/修改凭证弹窗中的“科目/银行科目”下拉框数据填充。页面加载时一次性拉取全部科目，前端用 art-template 渲染为 <option>。前端为不带请求体的空 POST。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/financeAccountAccount/financeAccountAccountList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-finance-account-move-line-list",
          "description": "日记账凭证(分录)列表查询：日记账凭证页(journalVoucher)列表分页查询：按科目、账户、币种、凭证来源、费用日期区间、摘要等条件筛选，返回会计分录(account_move_line)列表及借贷方、状态、创建人等字段。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/financeAccountMoveLine/financeAccountMoveLineList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-finance-paypal-balance-list",
          "description": "PayPal账户(账户)列表查询：查询当前用户可用的 PayPal/收款账户列表，用于「日记账凭证」页面顶部账户筛选下拉框(#BalanceList)、创建凭证弹窗账户下拉(#addBalance)、编辑凭证弹窗账户下拉(#editBalance)的数据渲染。前端 financePaypalBalanceList() 在页面加载时调用，不传任何请求参数，返回账户数组(每项含账户ID与账户邮箱)。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/financePaypalBalance/financePaypalBalanceList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-finance-push-task-sell",
          "description": "财务推送任务-销售导入日志查询：财务数据导入页面：展开某个推送任务行或导入过程中(每5秒轮询)调用，按期数(年份/周期)+任务ID查询该任务下的销售导入子任务列表，返回各子任务的数据周期、应导入数/成功数/失败数、进度、操作人、状态、操作时间，用于表格展开行渲染与进度刷新。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/financePushTask/getFinancePushTaskSell",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-finance-res-currency-list",
          "description": "币种(资源币种)列表查询：日记账凭证页面初始化时获取全部资源币种列表，用于渲染「币种」筛选下拉、创建凭证弹窗(addCurrency)与编辑凭证弹窗(editCurrency)的币种选择框。接口无请求参数，直接返回币种数组。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/financeResCurrency/financeResCurrencyList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-finance-analytic-account",
          "description": "分析账户列表查询：日记账凭证(创建/编辑凭证)页面点击「分析账户」时，按名称关键词分页查询分析账户列表，供用户选择并回填到凭证的「分析账户」输入框。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/financeResPartner/financeAnalyticAccount",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-finance-res-partner-list",
          "description": "辅助核算(合作伙伴)列表查询：日记账凭证创建/编辑时，点击「辅助核算」打开 #partnerModal 弹窗，按名称关键词分页查询合作伙伴(辅助核算)列表，供选择后回填到凭证的辅助核算字段。支持 name 关键词模糊搜索与 page/pageSize 分页。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/financeResPartner/financeResPartnerList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-page",
          "description": "供应商回款·出库单分页查询：供应商回款（退货/回款）管理页的出库单分页列表查询：按回款状态、出库单号、运单号、订单状态、创建人、供应商旺旺号、建单/发货/回款时间区间、回款方式、公司、采购员、供应商类型、填写人、仓库等条件分页查询，返回分页对象(total/totalPages/rows)及金额汇总对象(total)。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/manufacture/payment/get/order/page",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-list",
          "description": "Payoneer账号列表查询：查询 Payoneer 合作伙伴账号列表：支持按邮箱、账号状态筛选并分页，返回账号基础信息(ID/合作伙伴ID/邮箱/姓名/电话/地址/状态/授权状态)及总数。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/payoneer/account/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-paypal-case-address",
          "description": "获取PayPal纠纷退货地址列表：PayPal纠纷(Case)处理详情页加载时调用，拉取当前账号可用的退货地址列表，用于退货并部分退款(PART_REFUND_RETURN)、退货并全额退款(FULL_REFUND_RETURN)的退货地址下拉选择(.refundAddress)。无请求参数，返回地址列表(每项含地址主键 sid 与地址展示内容 content)。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/paypalcase/getPaypalCaseAddress",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-type",
          "description": "PayPal纠纷案件处理意见列表查询：在 PayPal 纠纷案件详情页加载处理意见(建议)列表：以路径方式传入案件编号 caseId 与查询类型 2，返回该案件下全部处理意见记录(含处理意见内容、提交人/时间、状态、完成人、驳回原因等)，前端用 suggestTemplate 渲染到 #suggestContent 表格。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/paypalcase/getpaypalCaseSuggest/{caseId}/{type}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-paypal",
          "description": "获取PayPal账号列表(下拉数据)：PayPal纠纷Case列表页初始化时调用，获取全部可筛选的PayPal账号及其对应Case数量，用于渲染页面顶部\"请选择paypal账号\"多选下拉框(#paypal)的选项。每个选项展示为 账号名称(数量)。该接口无请求参数。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/paypalcase/getPaypal",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-shop-customer-serviceer",
          "description": "获取客服信息（店铺客服列表）：进入 PayPal 纠纷(Case)列表页时调用，拉取全部「店铺客服(客服服务员)」名称列表，用于渲染页面顶部「客服」多选下拉框(#shopCustomer)的可选项；用户选中的客服作为 shopCustomerServiceerList 参与 Case 列表查询及店铺联动查询。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/paypalcase/getShopCustomerServiceer",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-shop-manager",
          "description": "获取店长信息：PayPal纠纷(Case)列表页初始化时调用，无入参，返回当前可选的店长名称列表，用于填充顶部\"店长\"多选下拉框(#shopManager)，作为列表查询的筛选条件来源。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/paypalcase/getShopManager",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-shop-paypalcase",
          "description": "获取店铺信息(按店长/客服筛选)：PayPal纠纷案件列表页(paypalcaseList)的店铺下拉框联动数据源。根据已选择的店长(shopManager)与客服(shopCustomer)多选条件，查询对应店铺名称列表，用于渲染店铺多选下拉(#shopName)。页面加载时、以及店长/客服选择变化(onchange=getShop())时触发。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/paypalcase/getShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-case-id",
          "description": "PayPal纠纷事件详情查询：根据纠纷事件编号(caseId)查询单条 PayPal 纠纷(case)事件详情：返回事件基本信息(店铺、客服/店长、账单、状态、到期日)、争议/交易/退款金额、物品信息列表、买卖双方对话消息列表以及当前可选的处理方式(taskList)，用于详情页(paypalcaseDetail.html)渲染。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/paypalcase/paypalCaseDetail/{caseId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-paypalcase-list",
          "description": "PayPal纠纷(Case)列表查询：PayPal纠纷(Case)列表查询：按编号类型(事件编号/交易号/账单编号)、原因、到期日区间、处理状态、PayPal账号、店铺/店长/客服、平台、异常case等条件分页查询，并返回未解决/已结束事件统计及待处理/审查中/等待对方处理各子状态数量与当前生命周期阶段的Case列表。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/paypalcase/paypalcaseList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-paypal-case-reason",
          "description": "PayPal Case 原因列表查询：查询 PayPal 纠纷案件（Case）的全部「原因」枚举项，用于 PayPal Case 列表页顶部「请选择原因」多选下拉框的渲染。无请求参数，页面加载时调用一次，返回原因值/名称数组供用户多选筛选。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/paypalcase/paypalCaseReason",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-paypal-case-constant",
          "description": "获取PayPal纠纷承运商常量(TRACK_NAME)：PayPal纠纷详情页加载时调用，获取\"提供跟踪信息\"时可选择的承运商(物流商)常量列表。URL中 TRACK_NAME 为固定常量类型标识。返回承运商列表渲染为 #paypalConstant 下拉框选项，供提交跟踪信息时填入 carrierName。无请求体参数。",
          "method": "POST",
          "path": "/erpFinance/erpFinance/paypalcase/TRACK_NAME/getPaypalCaseConstant",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-erp-fin-manage-data",
          "description": "财务数据批量更新/核销（通用 updateRows）：前端通用助手 updateRows(url, search?, index) 向 /erpFinManageData/erpFinManageData 拼接子路径后 POST，对勾选行执行批量更新/核销；无 JSON 请求体，参数经 URL 子路径+查询串传递；成功(code==200)弹提示并回调 search 重查。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-parallel-last-month-advance-infos",
          "description": "eBay上月预收余额信息查询：eBay 平台「上月已收」页面的余额信息分页查询：按 ids、平台订单号、店铺名称、余额月份区间、公司等条件分页查询，返回订单金额/平台费/发货金额/账单退款/上月余额/余额等对账字段列表及总条数。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/ebayFinance/parallelLastMonthAdvanceInfos",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-parallel-his-bill-infos-fetcher",
          "description": "非当月账单明细查询：TikTok 对账中心「非当月账单明细」分页查询：按汇总单号/财务单号/订单编号/付款单号/结算单号/店铺名称/账单时间/问题反馈/账单分类/所属公司等条件筛选，返回账单明细列表及总条数。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/parallelHisBillInfosFetcher",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-parallel-info-process-fetcher",
          "description": "账单反查表查询：TikTok 核对域「账单反查表」列表分页查询：按付款单号/结算单号/店铺名称/所属公司等条件，返回账单反查明细列表（结算/付款单号、店铺、币种、总应收、平台费、物流费、广告费、税费、退款、打款金额、公司等）及总数。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/parallelInfoProcessFetcher",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-parallel-pay-contrast-fetcher",
          "description": "账-付-流并行对比数据查询：TikTok「账-付-流核对」表分页查询：按付款单号、结算单号、店铺名称、付款时间、流水时间、问题反馈(一级/二级)、所属公司等条件过滤，返回账单(结)、付款(付)、流水(流)三表并行对比的明细行与差值/反馈字段及总记录数。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/parallelPayContrastFetcher",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-parallel-tk-bill-infos-fetcher",
          "description": "TikTok账单核对表查询：TikTok核销·账单核对明细列表分页查询：按汇总单号/订单编号/付款单号/结算单号/店铺名称/账单时间/问题反馈/异常分类/是否核销/付款反查/所属公司等条件筛选，返回账单核对行明细及总条数。type=1 标识账单核对表。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/parallelTkBillInfosFetcher",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-parallel-tk-query-lianlian-fetcher",
          "description": "连连反查表(明细)查询：TikTok 平台「连连反查表」明细分页查询：以流水号、店铺名称(拆分后/原)、流水时间区间、所属公司为筛选条件，返回连连流水反查明细列表(流水id/币种/金额/店铺/创建时间/匹配状态/公司)及总记录数。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/parallelTkQueryLianlianFetcher",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-parallel-tk-reference-provision",
          "description": "TikTok 凭证计提参考(账单反查表)查询：TikTok 凭证计提参考页面的列表查询：按流水号 / 店铺名称 / 所属公司及分页条件，反查并返回各店铺平台费、物流费的计提/冲销金额、差值，以及借贷方科目（分析账户、辅助核算、科目编号、币种、金额）和凭证字/凭证编号等明细，供凭证计提参考。type=1 为固定查询类型。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/parallelTkReferenceProvision",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-parallel-tk-voucher-provision-fetcher",
          "description": "TikTok计提冲销凭证拉取(列表查询)：TikTok平台「计提冲销」凭证并行拉取的列表分页查询：按订单编号、结算单号、店铺名称、创建(付款)时间区间、所属公司等条件筛选，分页返回交易号、发货时间、店铺、平台费、物流费、币种、汇率、上传人、公司等字段。?type=1 为固定查询参数。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/parallelTkVoucherProvisionFetcher",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-parallel-verification-fetcher",
          "description": "异常账单表-平行核对数据查询：TikTok「异常账单明细」表的平行核对数据分页查询：按汇总单号/订单编号/结算单号/店铺名称/账单时间区间/问题反馈/所属公司等条件分页查询异常账单核对明细，返回明细列表及总记录数。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/parallelVerificationFetcher",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-query-company-id-info",
          "description": "公司ID信息查询：查询当前用户可见的全部公司列表（公司ID + 公司名称），前端模块首次加载时无参 POST 拉取并缓存为响应式 companyList，供各对账/明细页面将 companyId 翻译为公司名称（getComName）及作为公司下拉选项数据源。接口直接返回公司对象数组，无 code/obj 包装。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/queryCompanyIdInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-query-download-infos-fetcher",
          "description": "下载任务记录查询：「下载任务记录」页面分页查询下载任务列表：按所属公司、文件名、创建时间区间、任务状态、平台等条件筛选，返回任务列表（含文件名、创建人、状态、表格大小/总数、进度、sheet 信息、起止/刷新时间、错误摘要、所属公司等）及总记录数。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/queryDownloadInfosFetcher",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-query-upload-infos-fetcher",
          "description": "上传任务记录列表查询：财务「上传任务记录」分页查询：按所属公司/文件名/创建时间区间/任务状态/平台等条件筛选导入任务，返回任务记录列表（文件名、创建人、成功/失败总数、状态、文件大小、表格总数等）及总记录数，供前端表格分页展示。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/queryUploadInfosFetcher",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-fin-manage-data-parallel-tk-reference-refund",
          "description": "凭证退款参考(账单反查表)查询：TikTok 平台「凭证退款参考」页面账单反查表分页查询：按流水号、店铺名称、所属公司过滤，返回退款金额/冲回金额/差值、凭证字、辅助核算、应收账款等账单反查行数据及总数。",
          "method": "POST",
          "path": "/erpFinManageData/erpFinManageData/finance/parallelTkReferenceRefund",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "crm-web-service-refund-condition",
          "description": "订单退款条件查询（发起退款明细）：订单详情页点击“发起退款(send refund)”时调用，按订单ID查询该订单的可退款条件：退款币种、退款总额、可退款SKU明细及原始金额、可选退款理由列表，以及ERP/平台两侧的历史退款记录，用于回填发起退款弹窗。",
          "method": "POST",
          "path": "/crm-web-service/cancelOrder/1/refundCondition",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "finance-lingxing-data-service-parallel-lingxing-download-infos",
          "description": "领星下载历史分页查询：下载历史页分页查询领星导出任务记录：按文件名、任务状态、创建时间区间筛选并分页，返回任务文件名、下载地址、状态、创建时间、表格总数、文件大小等列表数据。",
          "method": "POST",
          "path": "/finance-lingxing-data-service/LingxingPaging/parallelLingxingDownloadInfos",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yyfms-export-account-date",
          "description": "Payoneer账户费用明细导出：根据币种、起止日期、邮箱、描述等筛选条件及表格勾选的记录ID集合，导出账户费用明细文件(Excel)。前端以XMLHttpRequest POST JSON、responseType=blob接收二进制流，并从响应头content-disposition解析文件名后触发浏览器下载。",
          "method": "POST",
          "path": "/yyfms/fms/accountcostexport/exportAccountDate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yyfms-get-account-cost-list",
          "description": "账户费用(对账)列表查询：Payoneer 账户费用对账列表分页查询：按币种、起止日期、邮箱、描述等条件查询账户收支流水（账户类型、金额、收入/支出、人民币折算、余额、来源/目标、日期等），返回流水列表及总记录数，供页面表格展示与分页。",
          "method": "POST",
          "path": "/yyfms/fms/accountcostexport/getAccountCostList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-finance-get-expense-list",
          "description": "凭证来源(费用名称)列表查询：日记账凭证页面初始化时调用，拉取全部凭证来源/费用名称列表，用于渲染顶部筛选区 #expenseName(凭证来源)下拉选项。前端用原生 fetch 发起，无请求参数；返回结果生成 <option>，仅取每项 name(或字符串元素本身)作为下拉值与显示文本。",
          "method": "GET",
          "path": "/erpFinance/erpFinance/financeAccountMoveLine/getExpenseList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yyaccount-getmessage",
          "description": "关注SKU到货异常消息查询：经理仪表盘消息中心，点击\"关注sku到货异常\"按钮触发，按消息类型(messageTypeId=20)与接收人(toId)分页查询SKU到货异常通知列表，返回消息记录(创建时间/类型/正文/标题/来源SKU)及消息条数，经 contentComment 模板渲染。",
          "method": "POST",
          "path": "/yyaccount/account/messagecontroller/getmessage",
          "pathPrefix": "",
          "responseMode": "json"
        }
      ]
    },
    {
      "domain": "oms",
      "pathPrefix": "",
      "actions": [
        {
          "name": "erp-mobile-get-db-sysadmin",
          "description": "查询当前登录管理员信息(getDbSysadmin)：从 HttpSession(sysloginadmin) 取出当前登录管理员实体 DbSysadmin 并整体返回。移动端页面初始化时调用，用于获取当前用户的部门、职位、平台、店铺管理权限等信息；前端将整个返回对象存入 localStorage.userInfo，并据 depart(部门) 控制页面跳转与展示。直接返回实体，未包装 CommonResponse。",
          "method": "GET",
          "path": "/erpMobile/erpMobile/pushController/getDbSysadmin",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-order-log-by-order-id",
          "description": "订单操作日志查询：根据订单ID查询该订单的全部操作日志记录，返回操作人、操作时间、操作描述的列表；前端在订单详情页“操作日志”模块中，将列表前10条渲染到 OperTemplate1，第10条之后渲染到 OperTemplate2(点击查看更多展开)。",
          "method": "GET",
          "path": "/erpMobile/erpMobile/pushController/getOrderLogByOrderId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-position-id-by-oper",
          "description": "根据操作员获取岗位ID：移动端订单详情页加载时调用，无入参，返回当前登录操作员对应的岗位ID。前端取响应体 obj 字段赋给 window.positionId，供作废订单等操作校验。",
          "method": "GET",
          "path": "/erpMobile/erpMobile/pushController/getPositionIdByOper",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-developer-info-by-datetime",
          "description": "开发趋势图-榜单与汇总查询：按日期+开发员+类目查询当日/上一日交易额、热销类目榜、组员排行榜、店铺贡献榜、销售贡献榜。",
          "method": "GET",
          "path": "/erpMobile/erpMobile/saleTrendChart/{datetime}/getDeveloperInfoByDatetime",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-findbigchief-by-login",
          "description": "按平台查询大酋长(负责人)列表：销售趋势图搜索页(移动端)：选择平台后，按平台ID查询该平台对应的「大酋长」负责人列表，渲染为可多选的复选框供筛选。页面初始化时以空 platformId 调用一次拉取默认列表。",
          "method": "GET",
          "path": "/erpMobile/erpMobile/saleTrendChart/findbigchiefByLogin",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-developer-big-chief",
          "description": "获取开发大酋长(含小酋长)名单：移动端开发数据搜索页加载时调用，返回当前可筛选的“大酋长”与“小酋长”开发负责人姓名列表，用于渲染“大酋长”分组的复选框筛选项。无任何请求参数。",
          "method": "GET",
          "path": "/erpMobile/erpMobile/saleTrendChart/getDeveloperBigChief",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-developer-team-member-by-leader",
          "description": "获取组长下属开发组员列表：移动端马帮ERP「开发搜索」页面加载时调用，返回当前登录组长名下的开发组员(姓名)列表，用于\"组员\"筛选区渲染可勾选的复选框。GET 请求，无业务请求参数(身份由会话/Cookie 识别)。",
          "method": "GET",
          "path": "/erpMobile/erpMobile/saleTrendChart/getDeveloperTeamMemberByLeader",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-leader-shop2-sale-trend-chart",
          "description": "组长店铺列表查询(getLeaderShop2)：移动端销售趋势\"搜索\"页：在用户勾选平台或组员后触发，按所选组员员工姓名与平台ID查询该范围下可选的店铺列表，渲染为店铺勾选框。",
          "method": "GET",
          "path": "/erpMobile/erpMobile/saleTrendChart/getLeaderShop2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-platform-list",
          "description": "平台列表查询：移动端销售趋势图「搜索」页加载时调用，获取当前登录用户可见的平台列表，用于渲染「平台」多选框（art-template getPlatformTemplate）。选中某平台后会以其 PLATFORMID 触发「大酋长」接口 findbigchiefByLogin。",
          "method": "GET",
          "path": "/erpMobile/erpMobile/saleTrendChart/getPlatformList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-primary-category",
          "description": "获取大类(一级类目)列表：移动端「开发搜索」页面初始化时调用，拉取“大类(一级类目)”候选列表，用于渲染大类多选复选框。无任何请求参数，返回大类的 id/name 列表，前端用 id 作为复选框 value、name 作为复选框标签。",
          "method": "GET",
          "path": "/erpMobile/erpMobile/saleTrendChart/getPrimaryCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-team-member-by-leader-sale-trend-chart",
          "description": "获取组长名下团队组员列表：移动端马帮ERP「销售搜索」页面初始化时调用，根据当前登录人(组长)身份返回其名下可选的团队组员列表，用于渲染\"组员\"多选筛选项。前端无入参，由后端依据登录态识别组长并返回组员集合。",
          "method": "GET",
          "path": "/erpMobile/erpMobile/saleTrendChart/getTeamMemberByLeader",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-country-list",
          "description": "借用运单号-国家列表查询：借用运单号(Vova借单)页面加载时调用，获取可借用运单号的国家列表，用于目的国家选择/展示。前端在页面初始化 countryList() 中以 GET 无参方式请求，成功后通过 art-template 模板 countryListTemplate 渲染。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/borrowingNo/countryList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-developer-card-info",
          "description": "开发员名片信息查询：仪表盘加载时查询当前登录开发员的名片信息：返回开发员基本信息(姓名/职位/头像/品类/工龄)及8项考核指标(销售额、30天开发量、动销率、爆旺比例、滞销比例、单SKU产出、累积侵权量、30天发货毛利率)的实际值/排名/进度区间。obj为空则判定为非开发员(展示管理者卡片)。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/developerVisting/getDeveloperCardInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-smt-ad-campaign-weeks",
          "description": "SMT广告报表-周期(周)列表查询：SMT(速卖通)广告报表页加载时获取可选「周期(周)」下拉列表，并据 isSelect 标记默认选中的当前周；前端用于初始化周期多选框及默认筛选周。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/eabyAdCampaignFee/findSmtAdCampaignWeeks",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-platform",
          "description": "获取平台(回填默认排除平台)：借用运单号(Vova)页面加载时，根据浏览器 localStorage 中缓存的 platformId 调用本接口，取回当前用户对应的平台标识，用于回填页面顶部“排除平台”下拉框的默认选中值。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/ERPOrder/getPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-available-storage-list",
          "description": "获取可用仓库列表：获取当前用户可用的仓库分组列表，用于商品(SPU)管理页“关联仓库”弹窗的仓库选项渲染。返回按仓库分组类型(直发仓/中转仓/海外仓)划分的分组，每个分组内含具体仓库列表(仓库ID、仓库名称、仓库类型)。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/orderNew/getAvailableStorageList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-position-id",
          "description": "获取当前用户职位ID：订单详情页点击“作废订单”时调用，获取当前登录操作员的职位(岗位)ID(positionId)。前端取返回 obj 作为 positionId，若为空则提示“职位id丢失”并中断作废流程；非空时随订单作废表单一并提交至 /eshop/order.do?method=cancelOrder。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/orderNew/getPositionId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-storage-list",
          "description": "发货仓库列表查询：获取全部发货仓库列表，用于订单列表页\"发货仓库\"筛选下拉框的渲染；前端拿到数组后将\"上海仓库\"\"东莞仓库\"置顶排序，并在部分场景按仓库类型(storagetype)过滤。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/orderNew/getStorageList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-0-1",
          "description": "获取大酋长列表：手动刊登相关数据统计页初始化时调用，获取「大酋长」下拉选择框的数据源。返回大酋长（团队负责人）列表，每项含 id 与 name，前端用 art-template 渲染为 #bigChief 下拉框的 option（value=id，文本=name）。选中后联动 getTeamMemberByLeader 拉取组员。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleReport/getBigChief2/1/0",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-1",
          "description": "大酋长列表查询：大酋长发布统计报表页面初始化时加载\"大酋长\"下拉选择框的数据源：无业务请求参数，返回全部大酋长(id+name)列表，前端据此渲染下拉框并缓存名称数组，随后触发统计接口调用。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleReport/getBigChief2/1/1",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-platform-id-1",
          "description": "获取大酋长列表：进入 Lazada 优惠券看板页面时调用，按平台加载“大酋长”（团队负责人）下拉选项列表，用于填充顶部 #shopManager 多选下拉框。URL 路径中第一段固定为 1，第二段为平台ID（页面内固定为 18=Lazada）。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleReport/getBigChief2/1/{platformId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-0-2",
          "description": "获取大酋长(销售战报)列表：进入“产品刊登分析(开发覆盖率)”页面时加载“大酋长”下拉框数据源。页面 ready 时调用，返回大酋长(销售主管/区域负责人)列表，渲染为 #bigChief 下拉的 option，其 id 作为选中值、name 作为显示文本与 peoanme 属性。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleReport/getBigChief2/2/0",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-platform-id-order-status",
          "description": "获取销售大酋长列表(getBigChief2)：平台流量监控/看板页面进入或切换平台时，按「订单状态 + 平台ID」两个路径参数查询销售大酋长(店铺管理者)列表，用于填充页面顶部「-大酋长-」多选下拉(#shopManager)。返回数组，每项含大酋长 id 与 name。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleReport/getBigChief2/{orderStatus}/{platformId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-leader-shop2-sale-report",
          "description": "获取组长/平台对应店铺列表：客服消息报表页店铺多选下拉的数据源接口，返回当前组长/平台/组员可见的店铺列表。注：示例页面中本 URL 已被注释并由 /erpReport/erpReport/message/getShop 取代，按任务指定方法 GET 文档化，注释态/未引用字段标注待人工确认。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleReport/getLeaderShop2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-platform-list",
          "description": "平台列表查询：销售业绩目标页面在“批量设置店铺目标”弹窗中调用，拉取平台下拉列表（平台ID+平台名称），用于渲染 #platform 平台选择下拉框。GET 无入参。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleReport/getPlatformList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-site-list-sale-report",
          "description": "销售报表-站点下拉列表查询：订单时间/发货时间业绩报表页面的站点多选下拉数据源。根据已选所属平台的平台ID列表，查询该平台下的站点集合，用于渲染 #getSiteList 站点多选下拉框。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleReport/getSiteList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-trigger-product",
          "description": "触发产品(禁限售触发产品)下拉列表查询：产品问题投诉页(taskComplaint2.html)在 created 生命周期调用 getgoodslist()，无参 GET 拉取“触发产品”候选名称列表，赋值给 goodslist，用于“平台限售”场景下“触发产品”下拉框(支持 allow-create 手动输入)的候选项。返回值 obj 为字符串数组(简明、准确、含特征的产品名称，如：除藻粉、激光逗猫棒)。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleReport/triggerProduct",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-head-down-show-data-sales-amount-target",
          "description": "启元市场部头部年度/月度目标展示数据查询：加载启元市场部月目标页面头部展示数据：年度目标及完成情况（实际/目标毛利额、完成率、预计完成率提点档位）、各月毛利额目标列表（目标/实际/完成率），并返回当年各月时间段记录（down）。前端据 headStatus 切换单一汇总视图与多平台下拉切换视图。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/salesAmountTarget/getHeadDownShowData",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-head-down-show-data-sales-profit-target",
          "description": "市场部月目标-头部目标展示数据查询：进入「市场部月目标」看板时调用，返回页面头部展示所需数据：年度目标及完成情况(yearHead)、各月毛利额目标(monthHead)、当年各月目标时间段列表(down)、头部展示模式(headStatus)及默认选中的年度头(maxyearHead)。headStatus 决定 yearHead/monthHead 的结构形态。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/salesProfitTarget/getHeadDownShowData",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-sale-visting-card",
          "description": "销售名片·东南亚/赛道战况播报查询：首页战况播报模块查询。基础路径 /erpOrder/erpOrder/saleVistingCard/，含两种 GET 形态：getTrackByTrackDny(东南亚战况，无入参) 与 {type}/getTrackByTrack(指定赛道战况，赛道经路径参数 type 传入)。返回 obj 列表(平台/团队/销售额/毛利率/增量/奖金等)及 content 更新文案，前端用 art-template 渲染战况播报表格。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleVistingCard/",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-category-develop-info",
          "description": "类目昨日开发/经营表现查询：销售看板右侧「类目昨日表现」卡片数据源：按类目返回昨日发货销售额、发货订单量、发货毛利率、订单缺货率、按时发货率及各项环比涨跌幅，前端遍历渲染为类目表现卡片列表。GET 无入参，由当前登录态(会话/Cookie)确定数据范围。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleVistingCard/getCategoryDevelopInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-remind-msg",
          "description": "销售名片-获取提醒消息：业务员仪表盘(salesman2.html)首屏加载时调用，获取当前登录业务员的提醒消息(销售名片提醒)。返回提醒类型(color)与提醒文本(msg)，前端据 color 渲染为黄色警告或绿色成功提示条，15 秒后自动收起。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleVistingCard/getRemindMsg",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-page-size",
          "description": "销售人均发货毛利额增长排行榜查询：大屏「人均发货毛利额增长榜」榜单数据查询：按页码/每页条数分页（路径参数），按榜单类型 type 取数，返回排行榜列表（名次、小组人数、姓名、人均毛利额增长、预测月业绩、毛利率、预估奖金）及总页数，前端用 art-template 模板渲染表格并定时轮询滚动。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleVistingCard/getSaleTrackNew/{page}/{pageSize}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-shop-sale-info",
          "description": "店铺昨日销售表现查询：销售看板（销售名片页）右侧 店铺昨日表现 卡片数据源。页面加载时无参 GET 调用，返回当前用户可见店铺列表，每个店铺含昨日销售额、订单量、在线量、动销率、缺货率、按时发货率、退款金额及各自的环比涨跌幅，由 #ShopSaleTemplate 循环渲染。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleVistingCard/getShopSaleInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-sysadmin",
          "description": "获取系统管理员默认平台：双屏销售大屏(doubleinfo2)初始化时调用。无入参，返回当前登录用户(系统管理员)的默认平台ID。前端在未通过URL指定 platformid 时，用返回的 obj 作为平台下拉框(#platformList)的默认选中值，随后触发 search() 按该平台刷新看板。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleVistingCard/getSysadmin",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-track-by-track-dny",
          "description": "东南亚战况播报(各赛道排名查询)：首页仪表盘(common.html)加载时调用，拉取「东南亚X月战况播报」榜单：按销售平台返回店长/员工的奖金、入围店铺毛利率明细、毛利率、总积分等，渲染到 #DeskRank 表格；同时返回播报更新时间(content)写入 #updateTime。无任何请求入参。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/saleVistingCard/getTrackByTrackDny",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-customer-service-assess-shop",
          "description": "店铺客服考核(平台店铺评估)查询：店铺业绩列表(chakanShop)中鼠标悬浮店铺名时触发，按店铺名查询该店铺在所属平台(Shopee/Lazada/ebay)的客服考核/店铺评估明细，返回评估项数组(obj)。前端按 platform 套用不同模板(shopeeTemplate/lazadaTemplate/ebayTemplate)渲染，code=500 时直接展示 desc 文案。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/shopAchievements/customerServiceAssessShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-customer-service-mgr",
          "description": "客户经理列表查询：获取店铺业绩(客户服务管理)页面\"请选择客户经理\"下拉框的全部客户经理(客服经理)名称列表。页面加载时由 getcustomerServiceMgr() 调用，遍历 data.obj(字符串数组)逐项 <option> 填充 #custService 选择器，该值后续作为 shopAchievementsList/downloadShopAchievementsList 的 customerServiceMgr 查询条件。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/shopAchievements/customerServiceMgr",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-year-month",
          "description": "店铺业绩-年月下拉列表查询：获取店铺业绩可选的「年月」列表，用于仪表盘必发/必修改 SPU 页顶部时间筛选下拉框(#yearMonth、#n_month)的初始化。无入参，返回字符串数组(每项为一个年月值)，前端逐项渲染为 <option>，value 与文本同为该年月值，并在首部追加「选择时间」空项。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/shopAchievements/getYearMonth",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-shop-id",
          "description": "根据店铺ID获取店长：在“事业部人员毛利方差图”页面，店铺下拉框选中某店铺后触发，按店铺ID（拼接到URL路径末尾）查询该店铺对应的店长，前端取返回 obj.SHOPMANAGER 回填店长筛选项并重新加载方差数据。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/teamDropDown/getShopManagerByShopId/{shopId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-all-manager",
          "description": "查询全部店长列表：Wish推广(ProductBoost)报表\"按照listing查看\"页面初始化时调用，无入参，返回全部店长(店铺负责人)列表，用于渲染顶部\"请选择店长\"下拉框(#Shopowner)；选中后再联动查询其名下店铺。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/wishProductBoost/findAllManager",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-allshop",
          "description": "查询全部店铺(店铺下拉)：PB广告费报表(按店铺查看)页面初始化时拉取全部店铺列表，用于渲染「请选择店铺」下拉框。GET 请求，无任何入参；响应 obj 为店铺数组，前端通过 art-template 模板 contentTemplate2 遍历，仅取 shopname 作为 option 的 value 与文本。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/wishProductBoost/findAllshop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-findshop-by-manger",
          "description": "按店铺负责人查询店铺(findshopByManger)：PB广告费报表页：根据已选「店铺负责人」联动查询其名下店铺列表，结果渲染到「请选择店铺」下拉(#shopName)。由 #shopManger 选择框 onchange 触发的 findshopByManger() 发起；GET 请求，shopmanager 作为查询字符串传入。",
          "method": "GET",
          "path": "/erpOrder/erpOrder/wishProductBoost/findshopByManger",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-leader-shop2-hot-product-listing",
          "description": "组员店铺列表查询(getLeaderShop2)：订单查询(爆款)页\"店铺\"下拉数据源：根据所选大酋长(经理)、组员、平台及店铺名模糊关键字，查询并返回对应的可选店铺列表(店铺ID+店铺名)，渲染为店铺多选复选框。平台/组员选择变化或店铺名输入时自动触发。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/hotProductListing/getLeaderShop2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-listing-detail-info",
          "description": "热销商品-在线刊登详情查询：移动端「在线详情」页加载时调用，按父SPU(商品)ID与店铺ID查询该刊登商品的在线详情：标题/主图/店铺/刊登人/发布时间/30天销量，以及各SKU的属性、净重、在线售价/运费、在线库存、马帮库存、调价/改库存状态等，用于详情卡片渲染。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/hotProductListing/getListingDetailInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-listing-order-by-item-id",
          "description": "商品在线详情-销售单列表查询：移动端马帮ERP「在线详情」页根据商品ID(SPU)与平台ID查询该商品对应的销售单(订单)列表，返回订单号、状态、售价/数量、总收入/总毛利、国家、成交账号、下单时间等，前端按前10条/其余两段渲染。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/hotProductListing/getListingOrderByItemId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-listing-order-in-month",
          "description": "刊登商品近一月销量趋势查询：移动端「商品在线详情」页销量趋势图（echarts）数据来源接口：按商品(itemId/parentSPUId)与平台(platformId)查询该刊登商品近一个月内逐日的销量数据，返回销售时间(saleTime)与销量(saleNum)序列，前端据此绘制销量趋势折线图。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/hotProductListing/getListingOrderInMonth",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-modify-listing-log-by-item-id",
          "description": "刊登/上架修改操作日志查询：根据商品(父SPU)ID查询该商品的刊登/上架修改操作日志列表，返回操作人、操作时间、修改结果与描述，用于在线商品详情页\"操作日志\"模块展示（前端拆分为前10条与其余两段渲染）。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/hotProductListing/getModifyListingLogByItemId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-platform-info-hot-product-listing",
          "description": "平台信息列表查询：订单移动端搜索页加载时调用，获取当前登录人可见的平台列表，用于渲染「平台」多选(单选)筛选项。选中后驱动经理(大酋长)、组员、店铺等级联下拉的数据加载。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/hotProductListing/getPlatformInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-sku-info-by-item-id",
          "description": "在线商品SKU信息查询（按商品ID）：移动端「在线」商品列表中点击某商品行的展开箭头时调用，按商品ID(parentSPUId/itemId)与店铺ID(shopId)查询该商品下全部SKU的售价、币种、运费、在线库存、马帮库存及调价/调库存状态，并据部门(department)判断是否展示调价/调库存入口。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/hotProductListing/getSkuInfoByItemId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-team-member-by-leader-hot-product-listing",
          "description": "根据大酋长(经理)查询组员列表：订单移动端搜索页中，选中某个大酋长(经理)后，按该经理的员工ID查询其下属团队组员列表，用于渲染「组员」多选框；选中组员后会进一步触发店铺列表查询(getLeaderShop2)。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/hotProductListing/getTeamMemberByLeader",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-hot-product-with-shop",
          "description": "在线商品(SPU)列表查询(带店铺)：移动端\"在线\"页热卖商品列表分页查询：按关键词(店铺名/商品ID)、时间区间、价格区间、缺货标记、平台、大区主管、团队成员、店铺等条件筛选，返回在线商品(SPU)列表及销量、单量、毛利率、备货天数、TikTok佣金率等字段；用于首屏 search() 与加载更多 getMore()。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/hotProductListing/hotProductWithShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-befor-verifier",
          "description": "侵权审核SKU预校验(审核前查询)：移动端侵权下架审核页打开时，根据侵权记录 id 查询该侵权单下「待审核SKU(listbefore)」与「关联出的SKU(listAfter)」两组列表，分别渲染到审核页两块卡片，供用户勾选后审核通过。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/infringing/beforVerifier",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-examine-infringing-info",
          "description": "侵权SKU审核(审核通过)：移动端侵权审核页：用户在「待审核SKU」与「关联出的SKU」两个列表中勾选 SKU 后，点击「审核通过已选择的SKU」提交，把所选侵权 SKU 及其关联 SKU 以审核状态=2(通过)提交给后端完成侵权审核处理。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/infringing/examineInfringingInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-find-infringing-info",
          "description": "商品侵权信息查询：移动端马帮ERP「商品侵权信息」页面分页查询：按关键词(spu/sku/侵权关键字)与审核状态筛选，返回按侵权平台分组的侵权提交记录及其下侵权明细列表，支持加载更多分页。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/infringing/findInfringingInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-find-on-line-product",
          "description": "查看线上(侵权)商品列表查询：移动端马帮ERP「查看线上商品」页：按商品ID与关键词(sku/店铺)分页查询线上侵权商品列表，返回商品标题、SKU、侵权关键词及移除状态、店铺、刊登时间等，支持「加载更多」分页。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/infringing/findOnLineProduct",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-platform-info-infringing",
          "description": "侵权平台信息查询：移动端马帮ERP“提交侵权”页面加载时调用，获取可选的侵权平台列表，用于渲染“侵权平台”复选框（前4个直接展示，第5个及以后归入“更多平台”折叠区）。本接口不需要任何请求参数。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/infringing/getPlatformInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-submit-infringing-info",
          "description": "提交侵权信息：移动端「提交侵权」页提交侵权处理：勾选自动移除图片/自动移除关键词/自动下架，填写侵权SKU、侵权关键词、勾选侵权平台、填写描述（不少于6字），提交后端执行侵权处理。提交前二次确认；侵权平台、描述为必填校验。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/infringing/submitInfringingInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-find-order-details",
          "description": "订单详情查询：移动端订单详情页加载接口：根据订单ID(orderid)查询单个订单的完整详情，返回订单状态/属性/物流、客户信息、SKU商品明细列表、金额(毛利/实收/运费/平台交易费)及店铺/时间等信息，供详情页渲染。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/pushController/findOrderDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-find-order-today",
          "description": "今日订单概况查询：移动端「我的桌面」首页按订单时间查询当天的订单概况：返回今日订单数/销售额/退款单、总待发货/待发销售额、今日退款金额、今日新增缺货单、总缺货单量/缺货销售额、利润、毛利率、缺货率等汇总指标，以及当前用户头像。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/pushController/findOrderToday",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-find-order",
          "description": "订单列表查询（移动端正常/缺货订单）：移动端订单列表分页查询：按店长、店铺类型、订单类型标志(正常/缺货)与模糊关键字(订单ID/交易ID/卖家ID/SKU)分页拉取订单列表，返回订单行及正常/缺货数量汇总，并下发当前用户头像。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/pushController/findOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-find-shop2",
          "description": "按店铺名称查询店铺列表：移动端「按店铺搜索」页面：根据店铺名称关键词(shopName，以 URL 查询参数传递)模糊查询当前用户可见的店铺列表，返回店铺集合(店铺ID + 店铺名称)，前端用 art-template 渲染列表并跳转到对应店铺订单列表页。页面首次加载与上拉加载更多均调用本接口。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/pushController/findShop2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-find-shop",
          "description": "店铺名称列表查询：订单详情页加载时调用，查询当前用户可见的店铺列表，用于渲染左侧导航「店铺」子菜单（每项可跳转到对应店铺的订单列表）。无请求参数，返回店铺ID与店铺名称。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/pushController/findShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-get-express-type-list",
          "description": "物流方式列表查询：移动端「修改物流」页面进入时自动调用，查询可选的物流方式（快递类型）列表，用于渲染单选列表供用户选择并修改订单物流方式。无请求参数，返回物流方式数组（含ID与名称）。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/pushController/getExpressTypeList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-find-develop-mission-extend-by-id",
          "description": "货源报价详情查询(按ID)：移动端「货源报价录入」页进入时，根据货源记录ID与开发任务ID查询该货源的报价资料详情（联系人/手机/旺旺/质量/供货类型/供应商地址/报价规格/店铺链接/备注/商品图片），用于回显表单及图片列表。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/shoeController/findDevelopMissionExtendById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-find-develop-mission-extend",
          "description": "开发任务(货源)分页列表查询：移动端马帮ERP「未找到货源/已找到货源」页面的开发任务分页列表查询：按是否已找到货源标志 isGoodSupply 分页拉取开发任务，返回任务列表(商品标题、售价、放弃状态/原因等)、总页数及当前用户头像，前端用 art-template(#nosupplyTemplate) 渲染并支持加载更多分页。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/shoeController/findDevelopMissionExtend",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-find-information-by-phone",
          "description": "根据手机号查询供应商报价资料：移动端「货源报价录入」页，手机号输入框失焦(onblur)时按手机号查询该供应商已有的报价资料(联系人/旺旺号/质量/供货类型/供应商地址/报价规格/店铺链接/备注/商品图片等)，并通过 art-template 模板 infosTemplate 渲染回填表单。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/shoeController/findInformationByPhone",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-mobile-find-manufacture",
          "description": "供应商列表查询(含名下SKU订单)：移动端「供应商管理」页面，根据供应商名称关键词分页查询供应商列表，每个供应商下挂其相关 SKU 的商品(图片/名称/SKU/总笔数/总金额)，并返回当前用户头像地址。支持「加载更多」翻页。",
          "method": "POST",
          "path": "/erpMobile/erpMobile/shoeController/findManufacture",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-bad-comment-task-detail",
          "description": "获取差评任务详情：根据订单编号(orderId)与任务状态(status)查询该订单下差评任务的商品(SKU)明细列表，返回SKU图片/标题/itemId/销量级别/商品状态/售价/原始币种售价/币种/数量/总售价/评价类别/评价内容等字段，用于差评处理页(待处理/已处理/已结案)点击订单行展开时渲染下级明细表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/badCommentTask/{orderId}/{status}/getBadCommentTaskDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-bad-comment-task-list",
          "description": "差评任务列表查询：客户评价(差评)处理列表分页查询：按订单编号、店铺/店长/客服/站点、店铺等级、回复状态、评价时间、回复次数、排序方式等条件，分 status(待处理/已处理/成功删除) 查询差评任务列表，返回订单、店铺、评价及回复时间等字段，供 customerRating 页面三个 Tab 渲染。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/badCommentTask/getBadCommentTaskList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-clear-detail",
          "description": "差评任务清理详情查询：客服服务详情页「评价」Tab 加载时调用，按店铺×时间维度统计各店铺收到的差评数与剩余回复数，并标记是否「忘清」(未清理)，渲染为多列统计表格。页面 ready 时无参直接调用。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/badCommentTask/getClearDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-borrow-express",
          "description": "可借用运单号查询：按排除平台、发货时间区间、交运时间区间、货运渠道、邮寄类型、目的国家等条件，分页查询可借用的运单号列表，返回运单号、国内运单号、发货时间、收件地址及渠道类型。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/borrowingNo/getBorrowExpress",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-clearance-reward-repoer",
          "description": "清仓任务榜(奖金报表)查询：清仓任务榜页面加载/展开/收起时调用，返回各清仓项目及其下属销售的清仓任务量、在线Listing量、当前清仓量、完成进度、剩余清仓量、销售额、成本与奖金等汇总数据。前端按项目分组渲染，saleList默认取前5条，展开时取全部。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/clearanceReward/getClearanceRewardRepoer",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-custom-sku-order-list",
          "description": "定制SKU订单列表查询：仪表盘「定制sku」面板分页查询定制订单列表：按确认状态(未确认/已确认/已下单/所有)、店长、店铺过滤，返回订单+SKU+定制内容(文字/图片1/2/3)+采购发货等行数据及总条数，供 Element Plus 表格渲染与批量确认。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/customOrder/getCustomSkuOrderList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-developer-info-by-shop-manager",
          "description": "开发员覆盖率-按店长查询(第二级下钻)：产品刊登分析-开发覆盖率页面，点击大酋长(第一级)行展开时调用，按所选大酋长/组员(开发员)及该组员 employeeId，查询其名下各店长(shopManager)维度的刊登/覆盖率/SPU汇总/销售额占比等数据，返回店长列表用于二级表格渲染。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/developerTarget/getDeveloperInfoByShopManager",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-developer-info-by-shop",
          "description": "开发员店铺刊登覆盖率明细查询（按店铺）：产品刊登分析报表第三级钻取：在选定大酋长+组员(开发员)、并指定店长(employeeId)后，查询该店长名下各店铺的刊登覆盖明细，返回店铺在线listing、开发员刊登数、总/新品覆盖率、SPU汇总及占比、近30天销售额占比等汇总字段。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/developerTarget/getDeveloperInfoByShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-develop-repoer",
          "description": "开发大酋长报表查询：「开发大酋长报表」页面按周(本周/上周/上上周)查询开发员开发与业绩报表：返回开发员(含组员明细 reportList)的开发表现、业绩表现、工作表现、质量表现等多维指标及一行汇总(sum)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/developReport/getDevelopRepoer",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-three-week-time",
          "description": "获取近三周时间区间(开发大酋长报表)：开发大酋长报表页面加载时自动调用，返回本周、上周、上上周三个时间标记(times)。前端将三者分别存入 sessionStorage(devthisweek/devlastweek/devbeforeweek)，作为后续 getDevelopRepoer 接口的 times 入参。本接口无请求参数(空请求体)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/developReport/getThreeWeekTime",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-all-manager-platform",
          "description": "速卖通广告-按平台查询全部店长(店长下拉)：速卖通(SMT)广告花费看板顶部「请选择店长」下拉框的数据源。前端在页面 onMounted 时调用，按平台ID(固定 platformId=10)查询该平台下的全部店长名称列表，返回字符串数组直接填充店长下拉选项。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/eabyAdCampaignFee/findAllManagerPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-allshop-platform",
          "description": "查询平台全部店铺（findAllshopPlatform）：SMT（速卖通）广告报表页初始化时调用，按平台ID查询该平台下的全部店铺列表，用于「请选择店铺」下拉框选项渲染。当前页面固定传 platformId=10。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/eabyAdCampaignFee/findAllshopPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-smt-ad-campaign-performance-campaign",
          "description": "SMT广告报表-广告活动绩效查询：速卖通(SMT)广告报表页查询：按店铺/人员维度，结合周期、店长、店铺、排序方式等条件分页查询广告活动绩效，返回曝光、点击、下单、毛利、广告费、ACOS、ROI、PB占比等汇总指标列表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/eabyAdCampaignFee/findSmtAdCampaignPerformanceCampaign",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-show-ebay-bill-detail",
          "description": "Ebay账户费用账单明细查询：按账单标识(billStr)、店铺、费用类型分页查询某 Ebay 账单下的费用明细，返回明细列表(店铺、账户、费用类型、毛/净明细、增值税率、人民币金额、汇率、itemid、商品标题等)及分页信息(总页数、总条数)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayAccountFee/showEbayBillDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-show-ebay-bills",
          "description": "eBay账期(账单周期)列表查询：eBay账户费用对账页面初始化时调用，查询当前可选的eBay账单账期(账单周期)列表。返回值为账期字符串数组，前端用于渲染“选择账期”下拉框选项，并默认选中第一个账期后触发账单明细查询(search())。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayAccountFee/showEbayBills",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-show-ebay-bill",
          "description": "eBay账期账单费用查询：eBay对账页面按账期(billStr)+店铺(shopId)分页查询账单费用列表，返回各店铺该账期的币种、新增费用、折扣和退款及其人民币折算金额，并返回总条数与总页数供前端分页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayAccountFee/showEbayBill",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-show-ebay-fee-type",
          "description": "查询Ebay账户费用类型：Ebay账单明细页面加载时(freeName())调用，按账单标识 billStr 与店铺 shopId 查询该账单下出现的全部费用类型(entryType)集合，返回字符串数组用于渲染顶部'费用类型'筛选下拉框(#freeType)的选项。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayAccountFee/showEbayFeeType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-show-ebay-shops",
          "description": "eBay店铺账期-查询店铺下拉列表：eBay 账期费用报表页(ebayRecking)进入时调用，查询当前登录用户可见的 eBay 店铺列表，用于渲染「店铺名」下拉框。POST 无请求体；返回 obj 为店铺数组，每项含 shopId 与 shopName。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayAccountFee/showEbayShops",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-ebay-case-task-list",
          "description": "eBay Case 案件任务列表查询：eBay 个案(Case)任务看板列表查询：按案件状态(待处理/已处理/已结案)分页拉取案件任务，支持按客户ID、店铺、店长、站点、客服筛选，返回案件列表及分页汇总。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayCaseTask/getEbayCaseTaskList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-ebay-case-task-clear-detail",
          "description": "eBay Case/Return升级清理详情查询：客服工作台详情页「case/return升级」页签数据查询：按店铺/组员维度返回各时间段(表头)收到的 case/return 升级数与未处理升级数，并标记是否「忘清」。页面加载时无参调用，结果渲染到 #contentTemplate2。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayCaseTask/getEbayCaseTaskClearDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-manager-people-name",
          "description": "获取客服人员名称列表：eBay Case 退货任务管理页面初始化时调用，返回客服人员名称列表，用于渲染「客服」筛选下拉框选项。页面加载即自动触发，无请求参数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayCaseTask/getManagerPeopleName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-responsible-shop-saler",
          "description": "获取负责店长(店长下拉)列表：eBay Case 任务看板筛选区「店长」下拉框的数据源接口。页面加载时无参 POST 调用，返回当前用户可见的负责店长(销售员)名称数组，前端用 art-template 渲染为 option 列表填充 #shopSalers 下拉框。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayCaseTask/getResponsibleShopSaler",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-responsible-shop",
          "description": "查询负责店铺列表：查询当前登录用户所负责（有权限）的店铺名称列表，用于 eBay 个案任务页顶部「请选择店铺」下拉框的选项填充。页面 ready 时由 getResponsibleShops() 自动调用一次，无请求参数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayCaseTask/getResponsibleShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-site-list-ebay-case-task",
          "description": "eBay个案-站点下拉列表查询：eBay升级个案（case）处理页面初始化时调用，获取当前用户可见的站点列表，用于填充顶部「请选择站点」下拉框（#siteLists），作为案件列表查询的筛选条件之一。无请求参数，返回站点字符串数组。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayCaseTask/getSiteList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-ebay-shop-spk-order",
          "description": "eBay店铺SPK发货比例(周报)查询：按店铺/店铺负责人/国家及周次维度，分页查询 eBay 店铺一周(周日~周六)每天的「符合SPK考核范围订单数 / 客户自选SPK订单数 / 自选并匹配SPK订单数 / 符合且自选且匹配SPK订单数」，并返回考核范围内实际发SPK比例与自选SPK实际发SPK比例；支持上一周/下一周翻页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayShopSpkRate/ebayShopSpkOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-ebay-oper-shop",
          "description": "获取eBay店铺/店长/国家下拉数据：eBay店铺SPK发货比例报表页初始化时调用，一次性返回当前用户可见的店铺列表、店铺负责人(店长)列表、国家列表，用于填充页面顶部「--店铺--」「--店铺负责人--」「--国家--」三个多选下拉框。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ebayShopSpkRate/getEbayOperShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-borrow-order-log-fm",
          "description": "借用订单日志查询：按订单时间区间、平邮/挂号类型、订单编号、借用运单号、借用物流方式、国家等条件，分页查询订单的借用运单操作日志列表，返回总条数/总页数及每条日志的订单、借用运单、操作人等信息。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ERPOrder/borrowOrderLogFm",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-borrow-order-log",
          "description": "借用订单日志查询：按订单时间区间、物流类型(平邮/挂号)、订单编号、借用运单号、借用物流方式、国家等条件分页查询借用订单操作日志，返回订单基本信息、借用运单信息及操作人/操作时间/描述。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ERPOrder/borrowOrderLog",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-delay-order",
          "description": "查询可借用运单号(延迟订单)：根据输入的交易单号(可多个逗号分隔,一次最多500个)查询延迟订单及其可借用的运单号(最多三个候选),返回订单基础信息、延迟天数、渠道、国家及每个候选运单号的快递类型/原运费/原店铺/原订单号,供前端选择并'提前上网'借用。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ERPOrder/findDelayOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-factory-market-delay-order",
          "description": "工厂集市延迟订单-可借用运单号查询：根据输入的一批交易单号（逗号分隔，最多500个）查询工厂集市延迟订单，返回每个订单的基本信息及最多三组可借用运单号候选（含运单号、物流方式、原运费、原店铺、原订单号），供前端选择并提前上网。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ERPOrder/findFactoryMarketDelayOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-cache-express",
          "description": "获取缓存运单(借用单号)信息：在“借用Vova运单号”页面，前端无参 POST 请求该接口，获取后端缓存的运单号集合及外部/内部调用耗时；desc/innerdesc/url 均为逗号拼接字符串，前端 split(',') 后通过 art-template 渲染并显示接口用时/内部用时。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ERPOrder/getCacheExpress",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-vovafind-delay-order",
          "description": "Vova延迟订单查询：按订单时间区间与店铺分页查询 Vova 订单列表（含借用运单/借用物流等信息），用于页面表格渲染与分页。页面加载即自动调用一次。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/ERPOrder/vovafindDelayOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-fbafee-import",
          "description": "FBA费用导入记录查询：财务报表-FBA费用导入记录分页查询：按页码分页拉取FBA费用导入记录列表，返回店铺、费用产生时间、费用类型、站点、导入状态、结果描述、创建人/创建时间及源文件地址等信息，供前端表格渲染与分页展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/fbaReport/findFBAFeeImport",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-shop-by-pt",
          "description": "按平台查询店铺列表：根据平台ID查询该平台下的店铺名称列表，用于「亚马逊费项导入」弹窗中店铺下拉框(#shopNames)的数据填充。页面加载时(findShoplist())固定按平台ID=2(亚马逊)查询。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/fbaReport/findShopByPt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-over-twenty-pro-week",
          "description": "7天内超过20单的产品个数(独立优化师周报)：按优化师(erpName)和时间区间，分页查询该优化师近7天内出单量超过20单的产品(SPU)列表，返回 SPU 图片/编号/产品名/属性/出单量/开发员/创建时间，并附总条数与总页数用于分页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/independentOptimizerReport/findOverTwentyProWeek",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-details-by-erp-name",
          "description": "独立站优化师报表-按业务员查询测款数量明细：独立站优化师(投放)报表：按业务员名称(erpName)与时间区间(beginTime/endTime)查询该业务员的测款 SPU 广告投放明细列表，返回每个测款 SPU 的广告费用、转化价值、ROI、触达、频次、订单数、CPR/CPC/CTR/CPM、点击等投放指标，以及总条数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/independentOptimizerReport/getDetailsByErpName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-optimizer-details",
          "description": "独立站优化师报表-优化师明细查询：独立站(独立优化师)投放报表明细查询：按 SPU + 时间区间查询各优化师的广告费用、转化价值、ROI、订单数、触达/频次/CPR/CPC/CTR/点击等投放效果指标，返回合计与优化师明细列表用于报表渲染。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/independentOptimizerReport/getOptimizerDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-hr",
          "description": "获取HRBP列表：新人(待审核/历史审核人员)列表页初始化时调用，获取全部 HRBP(人力资源业务伙伴)名称集合，用于填充页面顶部「请选择HRBP」筛选下拉框(#hrbp)的选项。无请求参数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getHr",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-market-newcomer-transcript-detail",
          "description": "营销新人成绩单-业绩/店铺状态明细查询：营销新人成绩单详情页「业绩明细」与「店铺状态明细」两块表格的数据来源。按员工姓名查询该新人各入职阶段的刊登/出单/动销/毛利/销售额等业绩汇总，以及各时间节点的店铺数量/黑马/健康/疲软/等级变化等店铺状态汇总，返回按阶段排列的明细列表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getMarketNewcomerTranscriptDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-market-newcomer-transcript",
          "description": "市场新人成绩单(Summary)查询：营销/市场新人成绩单页面加载时调用：以员工姓名为入参，返回该新人的基本信息(头像/姓名/入职/指导人/HRBP/简介)、新人summary六大指标(日均销售额、毛利率、手动刊登量、手动动销率、新品出单比、新手刊listing产出，含本人值与平台平均值)、大酋长评语、总经办意见以及转正第一/第二阶段自然月。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getMarketNewcomerTranscript",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-new-comer-attitude",
          "description": "新人成绩单-态度(出勤)明细查询：营销新人成绩单详情页「态度」板块数据查询：按员工姓名查询新人的出勤态度明细，返回个人与大酋长组平均两行数据，含应出勤工时、实际工时、事假、其它假、迟到、秒闪、缺卡、旷工等出勤考核指标，用于渲染态度表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getNewComerAttitude",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-new-comer-help-result",
          "description": "新人助力结果查询：按员工姓名查询新人转正助力结果，返回方案一/方案二两套助力评估数据（第一阶段、第二阶段、转正述职评分、完成目标档位、提前转正天数），用于在\"新人助力结果\"表格中渲染。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getNewComerHelpResult",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-newcomer-list",
          "description": "新人成绩单-新人列表查询：新人成绩单审核页面的新人列表分页查询：按审核人员类型(待审核/历史审核)、人员类型(销售/开发)、HRBP、审核状态、组员(员工姓名)等条件分页查询新人列表，返回新人头像、姓名、入职时间、指导人、HRBP、成绩单描述、部门、审核状态等字段，并附带分页汇总信息。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getNewcomerList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-new-comer-train-examin",
          "description": "新人培训考核查询：营销新人成绩单详情页「培训考核」板块数据查询：按员工姓名查询该新人应参加/已参加的培训课题及各项考试结果，返回培训考核记录列表，前端渲染到「培训考核」表格(content5)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getNewComerTrainExamin",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-new-comer-winaward",
          "description": "新人试用期获得奖项查询：新人成绩单页面「试用期间获得奖项」模块数据查询：按员工姓名查询该新人在试用期间获得的奖项列表，返回奖项名称集合，前端逐条渲染序号与奖项名称。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getNewComerWinaward",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-product-newcomer-transcript",
          "description": "产品新人成绩单查询：根据员工姓名查询产品新人试用期成绩单：返回新人summary（头像、姓名、入职、指导人、HRBP、简介）及业绩明细（开发量SPU、动销率、百元动销率、新品销售额、日均销售额、发货毛利率及各自我司产品部平均值），并返回大酋长评语、总经办意见。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getProductNewcomerTranscript",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-pro-newcomer-transcript-det",
          "description": "新人成绩单-产品开发明细查询：新人成绩单详情页第二块数据查询：按员工姓名查询其各接手时间段(平均/0-15天…61-75天)的产品开发量、营销率、销量及增长、以及各时间节点(第0/30/60/75天)的SPU爆款/旺款/平款/滞款占比、供应商占比、侵权误导处罚、降本数量等明细，前端用 contentTemplate3~6 渲染 4 张明细表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getProNewcomerTranscriptDet",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-result-target-info",
          "description": "新人转正结果考核目标查询(getResultTargetInfo)：营销新人成绩单「新人转正目标」模块——结果考核数据查询：按员工姓名查询该新人「结果考核」表格(考核店铺、转正目标、提前转正目标、实际完成销售额)及第一/第二阶段日常任务完成率，用于渲染结果考核行并回填两阶段完成率。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getResultTargetInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-shop-select1",
          "description": "新人转正目标-第一阶段店铺下拉列表查询：新人营销成绩单详情页「新人转正目标」第一阶段(入职次个自然月)考核店铺下拉框的数据源接口：按员工姓名查询其第一阶段可选/已选店铺名称列表，前端用 art-template 渲染为 #shopSelect7_1 下拉选项(ySelect 多选)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getShopSelect1",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-shop-select2",
          "description": "新人转正第二阶段考核店铺下拉查询：营销新人成绩单详情页“新人转正目标 - 第二阶段”考核店铺下拉框(#shopSelect7_2)的数据源。按员工(新人)姓名查询其可选店铺名称列表，前端用 art-template 渲染成 <option>，并初始化 ySelect 多选下拉。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getShopSelect2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-shop-select",
          "description": "新人成绩单-店铺下拉查询：为「新人成绩单(营销新人详情)」页面的店铺多选下拉框提供数据源：无入参，返回当前可选店铺列表(店铺ID + 店铺名称)，前端用 art-template 渲染为带「全选」的复选框列表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getShopSelect",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-stage-info",
          "description": "新人转正阶段考核信息查询：新人转正成绩单详情页中，按员工+阶段(第一阶段/第二阶段)+店铺查询该阶段考核指标：手动刊登量、订单量、店铺发货运营毛利率、月目标完成档位，结果回填到对应阶段表格行。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/newComerTranscript/getStageInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-query-fail-order",
          "description": "失败订单查询：按订单下载/导入时间区间分页查询导入 ODO 系统失败的订单列表，返回失败订单的订单号、错误信息、下载时间、导入时间及分页汇总信息（总数、总页数）。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/Odo/queryFailOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-query-fail-purchase",
          "description": "失败采购单查询：按时间区间分页查询导入 odo 系统失败的采购单列表，返回采购单批次号、错误信息、采购时间、导入时间，并返回总记录数与总页数供前端分页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/Odo/queryFailPurchase",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-order-group",
          "description": "待采购汇总(按供应商/货运方式)查询：进入待采购汇总页或勾选/取消「不生成采购单」复选框时调用，依据 sessionStorage 中的订单ID集合查询缺货SKU，按供应商(manufacture)与货运方式(expresstype)两个维度返回缺货SKU件数、缺货订单量等汇总数据，并返回汇总提示文案。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderDeliver/getOrderGroup",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-search-order",
          "description": "待发货订单查询：待发货订单列表分页查询：按订单状态(必选)、SKU、供应商、平台/店铺、货运方式、订单时间区间、是否缺货等条件筛选，返回订单列表及总数、总页数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderDeliver/searchOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-director-sku-by-hwc-order-sku",
          "description": "转直邮发货-按海外仓订单SKU获取直邮SKU：订单详情页点击「转直邮发货」时调用：以当前订单未删除(flag!=3)商品列表为入参(每项含 sku/storage/orderId)，请求后端返回转直邮的 SKU 列表(res.data.obj)，写入 basedata.zhiyouSKUList 并在「转直邮发货设置」弹窗中展示「修改前SKU」，供录入「修改后SKU」后确认转单。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/directorSkuByHwcOrderSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-expresstype",
          "description": "查询快递方式(物流方式)列表：订单详情页加载时根据物流类型 logisticsType 查询可选的快递方式(物流方式)列表，结果存入 basedata.expresstypelist 供物流信息下拉选择；保存物流/基本信息时按 ID 匹配 expresstypeid 取 NAME 作为快递方式名称回传。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/findExpresstype",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-order-type",
          "description": "查询自定义订单类型(下拉数据源)：订单详情页点击编辑时，加载「自定义类型」下拉框的可选项列表。返回全部自定义订单类型(ID+名称)，前端用 art-template 渲染为 select#findOrderType 的 option，并以当前订单的 ordertypeid 回显选中项。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/findOrderType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-buyer",
          "description": "高级搜索-采购员下拉列表查询：订单列表页打开时调用，加载「高级搜索」中「采购员」筛选下拉框(#buyer)的全部可选项；返回当前用户可见的采购员名称列表，前端用 buyerTemplate 渲染为 option。所选采购员名称随订单列表查询(orderList)以 buyer 参数回传后端。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getBuyer",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-dbsell-info",
          "description": "订单SKU(商品)明细列表查询(getDbsellInfo)：订单详情页根据订单ID(orderid)查询该订单下的全部商品(SKU)明细行，返回 obj.list 数组，含每行 SKU 的产品信息、价格(售价/成本)、订购数量、库存/在途/缺货、仓库仓位、收入金额、状态/侵权/折扣等字段；前端据此渲染商品明细表并计算订单总成本(totalCost = Σ ordernum × costprice)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getDbsellInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-feed-back",
          "description": "订单评价(反馈)查询：订单详情页加载时根据订单号查询该订单的客户评价(反馈)列表，返回好评/中评/差评类型、评价内容、评价时间及星期，前端渲染于「订单评价」卡片。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getFeedBack",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-historylist",
          "description": "历史订单列表查询：订单详情页据当前订单的客户ID(customerid)查询该客户的历史订单列表，返回每条历史订单的商品图、SKU、产品名、下单时间、订单编号、店铺、状态、国家邮编、订单金额、货运单号/方式、邮寄地址等，用于「历史订单」区块表格展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getHistorylist",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-hwcorder-delivery-info",
          "description": "订单SKU标签/装箱单标签信息查询：订单详情页根据订单ID与标签类型(sku标签/装箱单标签)，查询该订单已上传的标签信息列表，用于在装运信息区渲染标签内容及删除入口。业务参数以URL查询串传递，无JSON请求体。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getHwcorderDeliveryInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-hwcorder-shipment-info",
          "description": "订单货件(海外仓发货)信息查询：订单详情页加载时按订单号查询该订单的海外仓货件/发货信息(货件店铺、货件编号、发货实重、真实运费、仓库类型)，渲染到货件信息区并回填仓库类型，随后联动加载SKU标签/装箱单标签。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getHwcorderShipmentInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-last-order-log",
          "description": "获取订单最新操作日志：进入订单详情页时调用，根据订单ID查询并返回该订单的最近一条操作日志（已是后端拼接好的文本/HTML片段），前端直接渲染到详情页头部 #lastOrderLog 区域展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getLastOrderLog",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-leave-message",
          "description": "订单留言查询：订单详情页加载时，根据订单号查询该订单的「订单留言」列表，返回每条留言的内容、操作人、操作时间，前端用 art-template 渲染到「订单留言」区域。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getLeaveMessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-messagelist",
          "description": "订单留言列表查询：订单详情页加载该订单客户的站内信/留言列表。以客户ID(sender)与订单操作时间(opertime)为条件，返回该客户对应的留言记录(创建时间、星期、序号ID、留言主题)，前端在客户留言卡片中循环渲染，点击留言主题可跳转留言详情页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getMessagelist",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-oper3",
          "description": "高级搜索-开发员下拉数据查询：订单列表页「高级搜索」弹窗中，初始化「开发员」(#selloper)下拉框选项。返回当前用户可选的开发员(销售开发员)名称列表；前端用 art-template selloperTemplate 遍历 obj 渲染为 option，并对 #selloper 启用 select2。无任何请求参数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getOper3",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-order-logistics",
          "description": "订单物流轨迹查询：根据订单ID查询该订单的物流轨迹（物流跟踪节点）列表，用于订单详情页点击「物流轨迹」时以时间线（el-timeline）形式展示每个轨迹节点的时间与描述文本。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getOrderLogistics",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-order-log",
          "description": "订单操作日志分页查询：订单详情页右侧操作日志时间轴分页查询：按订单号查询该订单的操作日志，返回当前页码、总页数及日志列表(操作员、部门、日志描述、操作时间、星期)。前端按相邻同一操作员(oper)合并分组渲染。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getOrderLog",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-order-refund",
          "description": "订单退款记录查询：订单详情页加载时，根据订单ID查询该订单的全部退款记录（退款申请单列表），渲染至「退款」卡片表格；返回为空则隐藏该模块。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getOrderRefund",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-getpackaging",
          "description": "包材(包装材料)下拉列表查询：订单详情页编辑时加载“包材(包装材料)”下拉框的可选项列表。无请求参数，POST 空 body；返回全部包材选项(ID/NAME)，前端用 art-template 渲染为 option 并用 select2 美化，同时把当前订单的 packagingid 设为选中值。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getpackaging",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-person-info",
          "description": "当前登录人业绩信息查询：订单列表页加载时调用，获取当前登录人头像及当月业绩汇总(营业额、总毛利额、总毛利率)，渲染到页面左上角用户信息区(.user-head)。无请求参数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getPersonInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-sku-purchase-info",
          "description": "订单SKU采购信息查询：订单详情页订单状态条「采购中」图标鼠标移上(onmouseover)时触发，弹出「采购中」模态框，按订单ID查询该订单下各SKU的采购单信息(SKU、采购批次/组ID、备注、采购状态)，渲染到 skuInfosTemplate 列表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/getSkuPurchaseInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-has-order-authority",
          "description": "校验当前用户对指定订单的查看权限：订单详情页加载时调用：除部门=66且用户名=罗梦娅外，所有用户进入详情页都会以 orderid 调用本接口校验是否有该订单的查看权限；返回 obj==0 表示无权限，前端清空订单数据并提示“无法查询订单”，否则继续加载订单详情。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/hasOrderAuthority",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-has-order-edit-authority",
          "description": "订单是否可编辑权限校验(hasOrderEditAuthority)：订单详情页加载完成后调用，校验当前登录用户对该订单是否拥有编辑/操作权限。返回 obj==1 表示有权限(展示编辑相关按钮)，否则隐藏 #draw、.draw 等操作区并将 orderdata 置空。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/hasOrderEditAuthority",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-order-details",
          "description": "订单详情查询：马帮ERP订单详情页主数据加载接口：依据订单ID返回单个订单的全量信息(状态/标志位、买家资料、收货地址、Paypal地址、物流详情、支付账号、费用核算、毛利等)，结果赋给 orderdata 渲染整页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/orderDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-order-list",
          "description": "订单列表查询：订单中心列表多维度分页查询：按店铺/平台/订单状态/货运方式/自定义流程/关键词/时间区间/开发员/采购员/店长/经理/客服/销量级别/重量·价格·毛利·毛利率·剩余备货天数区间/退款/最晚到货等数十项条件,配合左侧标签(tab 0~11)分页返回订单及其商品明细(dbSellList)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/orderList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-ordersource",
          "description": "订单属性(订单来源)下拉数据查询：订单列表页初始化时调用，加载\"订单属性/订单来源\"下拉选择框的全部可选项。请求无入参，返回字符串数组 obj，前端通过 art-template ordersourceTemplate 渲染为 <select id=\"ordersource\"> 的 <option>，所选值后续作为 ordersource 参数提交到订单列表查询接口 /erpOrder/erpOrder/orderNew/orderList。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/ordersource",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-order-status",
          "description": "订单状态下拉项查询：查询订单状态枚举列表，用于订单列表页左上“订单状态”筛选下拉框（#orderStatus）的初始化渲染。无请求参数，返回订单状态字符串数组，前端逐项渲染为 <option>，选中值作为 search() 提交的 status 字段。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/orderStatus",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-order-type-list",
          "description": "订单类型列表查询：获取全部订单类型名称列表，用于订单列表页顶部筛选区 #ordertype 下拉框选项渲染。前端页面加载时(IIFE)调用一次，返回的字符串数组逐项渲染为 <option>，选中值随订单列表查询(orderList)以 ordertype 参数提交。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/orderTypeList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-platform-list",
          "description": "平台下拉列表查询：订单列表页初始化时加载所有平台，用于填充顶部筛选区\"平台\"下拉框(#platformList)。无入参，返回平台集合(序号ID + 平台名称)，前端通过 art-template 渲染为 <option>。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/platformList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-query-conditions",
          "description": "订单查询条件(筛选项)下拉数据查询：订单列表页初始化时拉取“查询条件(filtertype)”下拉框的可选项列表，返回 key(提交值)/values(中文显示文案)，用于渲染 #queryConditions 选择器；用户选中后其 key 作为 filtertype 提交给订单列表查询接口。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/queryConditions",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-shop-fba-list",
          "description": "店铺(FBA)列表查询：订单详情页进入「修改」编辑态时调用，拉取当前可选店铺列表，用于渲染所属店铺下拉框(select2)。接口无请求参数，返回店铺名称集合。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/shopFbaList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-shop-info",
          "description": "左侧店铺信息查询（shopInfo）：订单列表页左侧 Top100 店铺列表查询：按维度(待发量/今日单量)返回当前用户可见店铺集合，含店铺名称、所属平台ID、对应单量；前端用于渲染左侧店铺树并支持点击店铺过滤订单。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/shopInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-sku-warehouse-list",
          "description": "海外仓SKU仓位查询：订单详情页「转海外仓」弹窗中，选择海外仓类型后，按订单未删除明细行(flag!=3)批量提交 sku/海外仓类型/订单号，查询并返回各 SKU 对应的海外仓 SKU(hwcSku)等信息，渲染「修改前SKU/修改后SKU」对照表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/orderNew/skuWarehouseList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-deliver-chinese-rose-shop",
          "description": "月度店销报表-发货时间业绩查询(findDeliverChineseRoseShop)：月度店销报表「发货时间业绩」维度查询：按人员类别、平台、品类、客户经理、组织架构(总监/经理/主管/店长)、店铺、月份、统计类型、公司、海外仓、店龄等条件筛选，返回 ECharts 折线图系列(series/x)、表头(title)与店铺明细行列表(saleReportList，含发货小计/利润/毛利率/运营毛利率/订单量/退款金额/平台费/站内推广费等分时段汇总)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/personSaleReport/findDeliverChineseRoseShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-deliver-chinese-rose",
          "description": "人员发货时间业绩报表查询：按发货时间维度统计人员（大酋长/组员）销售业绩，支持平台、品类、组员、大酋长、月份、统计类型等多维筛选；返回 ECharts 折线图序列（series + x 轴）、表头标题对象（title）及报表行列表（saleReportList），用于发货时间业绩页表格与图表渲染。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/personSaleReport/findDeliverChineseRose",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-order-chinese-rose-shop",
          "description": "月度店销报表(按订单时间)查询：月度店销报表页订单时间业绩维度查询：按平台、品类、客户经理、店铺、组员/大酋长/总监/主管、运营状态、月份、统计指标、公司、海外仓类型、店龄区间等筛选，返回echarts折线序列、动态时间表头及报表行数据。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/personSaleReport/findOrderChineseRoseShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-order-chinese-rose",
          "description": "人销售报表(订单时间业绩)曲线查询：按订单时间维度统计人员/团队销售业绩：依据人员类别、平台、品类、大酋长、组员、月份、指标类型等条件查询，返回 ECharts 曲线数据(x轴/series)、表头(title)及报表明细列表(saleReportList，含收入小计/利润/毛利率/订单量/退款金额/平台费/站内推广费/单包裹利润等分时段指标)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/personSaleReport/findOrderChineseRose",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-category-name",
          "description": "大类名称下拉列表查询：大类(月)报表页初始化时调用，获取全部商品「大类名称」枚举列表，用于渲染页头 #categoryName 大类下拉框选项（首项固定为「请选择大类」）。无请求参数，响应 obj 为大类名称字符串数组。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/personSaleReport/getCategoryName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-develop-manager-pk-match",
          "description": "开发经理PK赛数据查询：大屏「经理擂台」PK 播报数据查询：按指定日期(默认昨天)与平台拉取各部门经理的爆款SKU数量、百元动销率及其排名榜单，前端 Element-Plus 表格滚动播报，超过21条滚动后跳转开发员榜单页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/pKmatchController/getDevelopManagerPkMatch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-develop-pk-match",
          "description": "开发员PK榜单查询：开发员PK大屏数据查询：按指定日期与平台，返回各开发员的爆款SKU数量、百元动销率、新品销售额及对应排名，用于 developer.html 全屏轮播榜单展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/pKmatchController/getDevelopPkMatch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-director-sales-pkmatch",
          "description": "二级部门销售PK榜(总监)查询：销售PK大屏播报：按平台与日期查询各二级部门(及负责人/总监)的上月销售额、当月销售额、预计当月销售额、预计增长额、排名与预估输赢，渲染于 Element-Plus 表格大屏轮播。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/pKmatchController/getDirectorSalesPKMatch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-manager-sales-pk-match",
          "description": "二级部门经理销售PK榜单查询：实景大屏「业绩PK」播报页：按平台(aliexpress)与数据日期查询各二级部门经理的销售额PK榜单，返回上月/本月/预计本月/预计增长销售额及排名，前端以 el-table 渲染，前3名展示奖杯。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/pKmatchController/getManagerSalesPkMatch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-productdepartment-pkmatch",
          "description": "各产品部门PK赛战报查询：产品部门新品PK赛大屏战报：查询各部门(队伍)新品销售额、订单销售额预估增长率、发货毛利额预估增长率及各项排名，按队伍逐行返回用于大屏 el-table 滚动播报展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/pKmatchController/getProductdepartmentPkmatch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-shopowner-sales-pk-match",
          "description": "店长销售PK赛榜单查询：大屏轮播看板按平台查询店长销售额PK赛榜单：传入统计日期(time，前端取昨日 yyyyMMdd)与平台(platform)，返回各二/三级部门、店长在指定平台的上月/本月/预计本月/预计增长销售额及平台排名、公司排名，用于大屏自动滚动轮播展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/pKmatchController/getShopownerSalesPkMatch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-month-platform-performance",
          "description": "平台绩效月报-获取各月度统计起始时间：平台绩效月报页面初始化调用，返回近7个月（本月、上月、上上月、上三月~上六月）的统计起始时间数组obj，前端逐个写入sessionStorage并作为后续findPlatformPerformance的starttime入参。请求体为空（data被注释）。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/platformPerformance/findMonth",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-platform-performance",
          "description": "平台绩效月报查询：平台绩效月报页面按月查询各电商平台绩效数据：传入起始月份(starttime)、平台(platformid)、类型(type=2)，返回 obj.data 各平台行（本月/上月各项数据反馈、月度涨幅、近30天数据、毛利率等）与 obj.sum 汇总行，以及最后更新日期 obj.time。本月/上月/上上月/上三~六月各 Tab 均调用本接口，仅 starttime 不同。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/platformPerformance/findPlatformPerformance",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-week-platform-performance",
          "description": "平台绩效周报-周时间点查询：平台绩效周报页面加载时调用，返回本周、上周、上上周三个周起始时间点；前端分别存入 sessionStorage(thisweek/lastweek/beforeweek) 作为后续 findPlatformPerformance 的 starttime 入参，并用于页面起止日期展示。前端未提交任何请求体参数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/platformPerformance/findWeek",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-export-low-profit-order",
          "description": "限价(低毛利)订单导出：订单中心「限价」页签的订单导出接口：以与列表查询(findLowProfitOrder)相同的筛选条件(店长、店铺、任务类型、平台、推送时间区间、处理状态)拉取低毛利/限价订单，以 Excel(.xls) 二进制流返回供前端下载。导出全部走 limitedPriceExportall()，导出选中走 limitedPriceExportchek()(追加 orderids)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/exportLowProfitOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-export-send-failed-order",
          "description": "派送失败订单导出：订单看板「派送失败」标签页的导出功能：按店长、店铺、平台筛选条件（导出全部）或勾选的订单 orderids（导出选中）导出派送失败订单，后端以二进制流（Excel）返回，前端用 blob 下载为「派送失败{时间戳}.xls」。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/exportSendFailedOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-auto-create-order-item",
          "description": "自动创建(自建商品)订单明细查询：在「自动创建/自建商品订单」列表中点击某一行的展开图标时，按订单ID(orderId)查询该订单下的商品明细行(图片、标题、SKU、等级、价格、库存、在途、毛利等)，结果渲染到子表 buildContentTemplate2。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findAutoCreateOrderItem",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-auto-create-order",
          "description": "自动创建(自建)订单列表查询：订单看板「自动创建/自建订单」Tab的分页列表查询：按店长、店铺过滤，分页返回自建订单列表（订单编号、状态、店铺/客户、原币与RMB金额、国家、下单与拉单时间、运费、交易单号、是否低利润、备注等）。参数以URL查询串传递，无请求体。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findAutoCreateOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-bucha-order-order-item",
          "description": "补差大订单-商品明细查询(第二层)：在订单管理“补差大”页签的订单列表中，点击某条订单的展开图标时触发；以该订单 orderId 为入参，POST 查询该订单下的补差商品明细行(图片/标题/SKU/销量/等级/单价/补差金额/库存等)，渲染到二级明细表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findBuchaOrderOrderItem",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-bucha-order",
          "description": "补差大订单列表查询：订单看板「补差大」标签页的分页列表查询：按店铺、店长筛选，分页返回亏损补差较大的订单列表（含订单号、SKU、金额、亏损额、国家、物流方式、下单/建单时间等），用于补差大订单的处理（解除禁止/作废/标记已完成）。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findBuchaOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-db-expresstype",
          "description": "查询物流类型(渠道)下拉列表：查询数据库中全部物流类型(物流渠道)，用于「物流延迟」筛选区 #expressType 下拉框的数据源；前端在页面加载时调用 getExpressTypeList()，把返回的 obj 数组渲染为 <option>，option 的 value 取 expressTypeId、显示文本取 expressType，并初始化 select2。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findDbExpresstype",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-defict-ban-order-item",
          "description": "缺货禁售订单明细查询：根据订单ID(orderId)查询该订单下缺货/禁售商品明细列表，返回每个商品的图片、标题、SKU、销量、售卖等级、单价、币种原价、库存/在途、成本价等，前端在表格中渲染并计算毛利与毛利率。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findDefictBanOrderItem",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-defict-ban-order",
          "description": "亏损禁止发货订单列表查询：销售融合订单-亏损禁止发货订单分页列表查询：按店长、店铺筛选，分页返回因亏损被禁止发货的订单列表，并返回总数与总页数用于分页。参数以URL Query String传递，无请求体。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findDefictBanOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-distribution-order-item",
          "description": "自建商品订单详情查询：在自建商品订单列表中点击某行展开时，按 orderId 查询该分销订单下的全部商品明细行，返回图片/标题/SKU/售卖等级/单价/销量/库存/在途/成本等字段，渲染到子表 buildContentTemplate2。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findDistributionOrderItem",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-distribution-order",
          "description": "分销订单(自建商品订单)列表查询：采购桌面「自建商品」标签页的分销订单分页列表查询：按店铺、店长筛选并分页拉取分销订单，返回订单总数、总页数及订单行（订单号、状态、分销平台、店铺、币种/金额、客户国家、下单/建单时间、运费、交易号等），由 art-template buildContentTemplate 渲染表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findDistributionOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-expire-order-item",
          "description": "到期订单明细查询：在「到期订单」列表展开某行时，按 orderId 查询该订单下的商品明细行，返回商品图片、销量、产品等级、单价、币种、原价、库存/在途、成本价等字段，前端用 art-template dutoTemplate2 渲染子表并计算毛利额与毛利率。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findExpireOrderItem",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-expire-order",
          "description": "到期订单列表查询：订单管理「到期订单」页签查询：按店铺、店长、延迟天数区间筛选备货到期/临期订单，分页返回订单列表（含状态、店铺、金额、备货时长、国家、物流、运费等）及总数/总页数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findExpireOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-infriging-order-item",
          "description": "侵权商品订单明细查询：在「侵权或禁售」订单列表中点击某条订单行展开时，按订单ID查询该订单下的商品明细(订单项)列表，返回每个订单项的图片、标题、SKU、产品等级、单价、销量、库存/在途、币种/原价、开发员、利润计算所需成本及侵权平台，渲染到子表格 tortContentTemplate2。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findInfrigingOrderItem",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-infriging-order",
          "description": "侵权商品订单查询：查询命中侵权(已标注侵权但线上仍出单)的订单列表，按店铺、店长筛选并分页返回侵权订单及其侵权SKU、订单金额、状态、店铺等信息，供仪表盘“侵权或禁售”页签展示与后续作废/换图下架/标记处理。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findInfrigingOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-logistics-by-order-id",
          "description": "订单物流轨迹查询(按订单ID)：在\"投递失败订单\"列表行操作菜单点击\"查看轨迹\"时调用，按订单编号 orderId 查询该订单的物流轨迹明细，返回一组(时间+状态描述)记录，前端拼接为多行文本后 alert 展示，无数据时提示\"无\"。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findLogisticsByOrderId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-low-profit-order",
          "description": "低利润(限价)订单列表查询：仪表盘「限价订单」(低利润订单)页签的分页列表查询：按店长、店铺、任务类型、平台、推送时间区间、处理状态等条件筛选低利润/限价订单，返回订单列表及金额、国家、时间、运费、交易单号、订单备注、是否低利润等字段，前端用 art-template 渲染表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findLowProfitOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-no-inventory-order-forkf",
          "description": "清仓停产暂售缺货订单列表查询：成品仪表盘(finishedGoods)「清停暂售缺货」页签的分页列表查询：按当前页码 currPageStr 分页拉取因清仓/停产/暂售导致缺货的待处理订单，返回总条数、总页数及订单行列表，用于 notprodContentTemplate 渲染表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findNoInventoryOrderForkf",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-no-inventory-order-new",
          "description": "清仓停产(无货)订单列表查询：仪表盘订单中心“清停暂收/清仓停产”页签：按店铺、店长筛选，分页查询马帮内清仓停产不再采购但线上仍出单的“无货”订单，返回订单列表(订单编号、状态、延迟天数、店铺、客户、金额、时间、运费、交易单号、备注等)及总条数/总页数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findNoInventoryOrderNEW",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-other-ban-order-item",
          "description": "其他禁止订单明细查询：在“其他禁止”订单列表中点击某行展开时，按 orderId 查询该订单下的商品明细(SKU 行)，返回图片/标题/SKU/产品等级/单价/销量/库存/在途/原价/开发员/成本价等字段，前端用 art-template otherContentTemplate2 渲染子表并现算利润额与利润率。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findOtherBanOrderItem",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-other-ban-order",
          "description": "其他禁止订单分页查询：订单监控看板「其他禁止」标签页的列表查询：按店铺、店长筛选并分页拉取“其他原因被禁止发货”的订单，返回订单总数、总页数及订单行，前端用 art-template otherContentTemplate 渲染表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findOtherBanOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-other-infringement",
          "description": "查询其他侵权listing信息：根据侵权 SKU 列表查询其它平台上的侵权 listing 信息，返回侵权商品的图片、标题、店铺、商品ID、SKU、售价、30天销量、浏览量、收藏量等，用于「侵权listing信息」页面表格展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findOtherInfringement",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-refund-order-item",
          "description": "退款(退货)订单明细查询：在「退包订单」列表中点击订单展开时，按 orderId 查询该订单下的退款明细行(SKU级)，返回明细数组并渲染到子表(returnContentTemplate2)，展示图片/标题/SKU/产品等级/售价/数量/库存/在途/原价/开发员及前端计算的毛利与毛利率。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findRefundOrderItem",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-refund-order",
          "description": "退包(退款)订单列表查询：仪表盘「退包订单」页签的列表查询：按店铺(shopid)、店长(shopManager)、页码(currPage)过滤，返回退款/退包订单分页列表，并返回 total/pages 供分页。参数以 URL Query 传递，无请求体。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findRefundOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-send-failed-order-item",
          "description": "发货失败订单-商品明细查询：在“发货失败订单”面板中展开某一订单行时，按 orderId 查询该订单下的全部商品(SKU行)明细，返回图片、标题、SKU、产品等级、售价、销量、库存/在途、原价、开发员、成本价等字段，前端据此计算并展示毛利与毛利率。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findSendFailedOrderItem",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-send-failed-order",
          "description": "发货失败订单列表查询：销售融合订单中心-发货失败订单页签的分页列表查询：按店长、店铺、平台筛选，返回发货失败订单分页列表（订单编号、状态、店铺/客户、金额、国家、时间、运费、交易单号、备注等），并返回总条数与总页数供前端分页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findSendFailedOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-shortage-order-by-principal",
          "description": "缺货订单查询(按负责人)：仪表盘「清仓停产/15天缺货订单」列表分页查询：按当前登录负责人(principal)拉取其名下缺货订单，返回订单列表(订单号、状态、延迟天数、店铺、客户、金额、时间、运费、交易单号、备注)及总条数/总页数。首屏不带分页参数(默认首页)，翻页回调带 currPage。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findShortageOrderByPrincipal",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-shortage-order-item",
          "description": "投递失败订单-缺货商品明细查询：客户评价(差评)页「投递失败订单」Tab中，点击某一行的展开图标时，按订单号(orderId)查询该订单下的商品明细列表(图片/标题/SKU/数量/销量级别/单价/库存/在途/成本等)，用于渲染子表格并计算商品毛利与毛利率。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findShortageOrderItem",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-shortage-order",
          "description": "缺货订单数量查询：移动端「必做清零」页面进入时(selgetSure()链式回调第7个)调用，查询当前用户「清仓停产缺货 / >=10天延迟」类待办订单数量，返回 obj.total 填充页面计数块 .odernum7。该接口无请求体，仅依赖登录态按当前用户统计。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findShortageOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-smt-ban-tuo-refund-order-item",
          "description": "SMT半托管退款订单明细查询：SMT(速卖通)半托管退款订单列表中，点击某交易订单行展开时，按交易订单ID查询该订单下的退款商品明细行（图片/标题/SKU/产品等级/单价/销量/库存在途/币种原价/开发员/成本毛利等），用于渲染展开子表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findSmtBanTuoRefundOrderItem",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-track-exception-order",
          "description": "投递失败(物流轨迹异常)订单列表查询：客户评价(差评)管理页「投递失败订单」标签页的分页列表查询：按店铺、店长、异常类型(固定4)、查询类型(固定\"客服\")等条件，查询物流投递失败/轨迹异常的订单，返回订单列表及分页信息。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/findTrackExceptionOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-show-button",
          "description": "今日必做清零按钮是否显示：管理者驾驶舱(看板)加载后，查询当前登录人是否具备「今日必做清零」按钮显示权限/条件，返回 1 显示、0 隐藏，用于控制页面 .getsure(保存今日清零结果按钮及提示语)的显隐。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleFussionOrder/showButton",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-export-insite-free",
          "description": "站内推广费/费项差异核对 导出：差异核对页 findDifference 点击导出，以当前查询条件 params 为请求体，导出指定费项类型的订单/批次费项差异明细 Excel；请求体复用 localStorage params（由 dailyorderTimeReport.html 写入）并追加 oneDay/type/pageSize；响应为二进制 Excel 文件流。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/exportInsiteFree",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-difference2",
          "description": "销售报表-差异费项明细查询(findDifference2)：日订单时段报表中点击某日某费项差异数字时弹窗调用，按上级报表筛选条件 + 单日日期(oneDay) + 费项类型(type) 分页查询该费项的逐订单/批次差异明细，返回订单号、店铺、店长、对应费项金额、费项说明与插入时间。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/findDifference2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-difference-fine",
          "description": "销售报表-罚款差异明细查询：日销售报表费用差异下钻：平台含Wish(16)且费用类型为罚款时，按报表搜索条件+指定日期分页查询罚款明细。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/findDifferenceFine",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-difference-for-ebay",
          "description": "eBay账单差异明细查询：日销售报表-成本明细下钻：根据上级报表查询条件(平台/站点/品类/人员/店铺)+账单日期oneDay+费用类型type，分页查询某日各订单的费用差异明细(订单号、店铺、店长、交易单号、付款交易费及原始金额、币种、费用类型、费用说明、账单时间)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/findDifferenceForEbay",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-difference-for-smt",
          "description": "SMT联盟费差异明细查询：日销报表「站内推广费」明细钻取页：当平台为 SpeedMaster/SMT(platformIds=10/138) 且员工类型≠4 时跳转本页，按单日(oneDay)分页查询联盟费差异明细，返回交易单号、店铺、币种、联盟费、汇率、店长、费用时间等列。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/findDifferenceForSmt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-difference-lazada-publish-fee",
          "description": "Lazada刊登费差异(站内费用)列表查询：查询Lazada刊登费差异(站内RMB费用)对账列表：按费用时间区间分页查询，返回订单/交易编号、店铺、店长、站内RMB费用、费用时间等明细及总条数、总页数，用于差异费用核对展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/findDifferenceLazadaPublishFee",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-difference",
          "description": "销售报表-差异费用明细查询(findDifference)：日订单时效/销售报表中点击某日某类费用金额时，按上一页报表查询条件(localStorage params)+当日日期 oneDay+费用类型 type 分页查询该费用对应的订单/批次费用明细列表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/findDifference",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-month-sale-report",
          "description": "销售报表-月份(账期)列表查询：月度销售报表页(monthReport.html)初始化时调用,返回月份(账期)描述列表 obj。obj[0]=本月、obj[1]=上月、obj[2]=上上月(写入 sessionStorage 作为后续报表查询 descr 入参);obj 从第4个元素起(obj.splice(3))为前十二个月可选项,渲染进 #otherMonthSelect 下拉框。接口本身不传任何请求参数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/findMonth",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-week-sale-report",
          "description": "销售周报-获取周次销售报表描述(findWeek)：销售周报(销售大屏)页面初始化时调用，无入参，返回本周/上周/上上周三个销售报表描述(descr)的数组，前端分别存入 sessionStorage 的 thisweek/lastweek/beforeweek，供后续 findSaleChiefReportNew 等接口作为 descr 查询条件。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/findWeek",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-add-shippingfee-by-one-day",
          "description": "某日补差运费(getAddShippingfeeByOneDay)明细查询：查询某一天(oneDay)的订单补差运费明细：以上一页传入的报表筛选条件(URL params)为基础，叠加统计日 oneDay、分页参数，分页返回订单编号、店铺号、补差运费、店长等明细行，并返回总页数用于分页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getAddShippingfeeByOneDay",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-big-chief2",
          "description": "获取大酋长(店长负责人)列表：销售业绩报表(订单时间业绩/发货时间业绩)页面，按人员类别、所属平台、公司维度查询可选的“大酋长”(店长/团队负责人)列表，用于渲染顶部“大酋长”多选下拉框，选中后联动获取组员、店铺并触发业绩查询。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getBigChief2/",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-big-chief3",
          "description": "大酋长(销售主管/Leader)列表查询：根据员工类型获取“大酋长”(销售主管/Leader)列表，用于页面顶部“请选择大酋长”下拉选择框(ySelect)的选项渲染；返回 id/name 列表供后续按 Leader 查询组员等使用。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getBigChief3",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-company-info",
          "description": "获取公司(地区)信息：FBA产品利润分析表页面加载时调用，获取当前用户可见的公司(地区)列表，用于渲染顶部“请选择地区”多选下拉框(#selectCity)。该接口无请求体参数，success 回调取 data.obj 数组，按 companyId/shortName 渲染为 <option>。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getCompanyInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-deposit",
          "description": "押款金额查询：按所属平台、店铺、结束月份查询对应账期的押款金额，返回的押款金额写入发货时间业绩报表的“押款金额”列（.amountNum）展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getDeposit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-emp-sale-rep-site",
          "description": "员工销售报表站点统计查询：月销售主管报表中，鼠标悬浮到某员工行时按需查询该员工在指定月份、指定平台下各站点的新刊登量、总在线量与新品比例，渲染到悬浮下拉框中。第一层(getEmpSaleRepSite)与第二层(getEmpSaleRepSite2)均调用本接口，入参与出参一致。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getEmpSaleRepSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-estimated-freight-detail",
          "description": "预估运费明细查询：销售报表-预估运费明细分页查询：根据父页面透传的查询条件(params)、统计日期(currentdate)与页码(page)，分页返回订单的预估运费明细列表(订单号/店铺号/预估运费/店长/时间)及总条数、总页数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getEstimatedFreightDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-finefee-by-date",
          "description": "按日期查询店铺罚款明细：销售日报(dailySalesReport)中“罚款”金额单元格下钻：携带日报查询条件(参数取自 sessionStorage 的 params)加上所点击行的日期 oneDay，查询当日各交易单的罚款明细列表，渲染为交易单号/罚款日期/店铺/罚款金额/店铺负责人表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getFinefeeByDate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-ke-dan-price-info",
          "description": "客单价报表查询(国家/品类)：销售客单价报表：按时间区间、平台、排序及总监/经理/店长/店铺/国家/品类/邮寄方式等筛选，查询各客单价分组的收入、支出、订单数量、利润与毛利率明细行及合计行；前端用于渲染明细表格与收入/利润柱状图。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getKeDanPriceInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-leader-shop3",
          "description": "平台看店铺(getLeaderShop3)：根据平台、组员、大酋长、客服经理查询登录人可见的店铺列表，用于页面店铺下拉框联动渲染；后端按部门与管辖范围过滤并补写店铺级别/暂停/客户经理信息。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getLeaderShop3",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-leader-shop4-new",
          "description": "店长/店铺列表查询(getLeaderShop4New)：在「订单时间业绩/发货时间业绩」报表页中，根据所属平台、组员、大酋长(店长)、客服经理、公司等条件查询符合条件的店铺清单，用于店铺勾选弹框/店铺下拉的数据渲染。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getLeaderShop4New",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-leader-shop4",
          "description": "根据平台/大酋长/组员查询店铺列表(getLeaderShop4)：销售报表筛选区联动接口：用户选择平台(可叠加大酋长、组员)后，后端返回对应可选店铺名称列表，前端用于渲染 #shoptypeid 店铺下拉框的 <option>。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getLeaderShop4",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-leader-shop-new5",
          "description": "店长店铺列表查询(getLeaderShopNew5)：销售报表(saleReport)模块：根据大区长、客服经理、店长(员工)、平台、关键词、运营状态等条件查询店长名下的店铺列表，返回店铺数组(SHOPID/SHOPNAME)，用于「店铺」多选下拉(el-select)的选项渲染与远程搜索。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getLeaderShopNew5",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-prohibition-list",
          "description": "禁售清单查询：销售报表-禁售清单分页查询：按是否禁售、是否违规、平台、禁售政策(二级类目)、侵权产品等条件筛选，返回各平台禁限售政策行(一级/二级政策、触发产品、去重SPU数量、禁售状态、不违规备注及对应SPU图片列表)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getProhibitionList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-runturn-pkgby-date",
          "description": "退包(退货报表)按日期查询：退货报表页(马帮ERP)按日期统计退包数据：接收上级页面通过 URL params 透传的筛选条件 JSON，叠加单日标记、分页参数后分页查询，返回订单退包列表(订单编号/店铺/店长/退包收入/订单金额)及分页汇总。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getRunturnPKGByDate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-sale-rep-site",
          "description": "销售报表-按店铺查询站点刊登统计(getSaleRepSite)：销售月报表第三层（店铺维度）查询：根据店铺名称与月份描述，查询该店铺各站点的新刊登量、总在线量、新品比例，用于月报表悬浮下拉框中展示站点刊登统计明细。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getSaleRepSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-team-member-by-leader-new",
          "description": "按店长查询团队成员(店长列表)：库存看板/必刊登「优化建议」筛选区，根据平台筛选条件查询团队成员(店长)列表，用于渲染店长下拉选择器(el-select)。Vue 组件 #shopvue 初始化及平台变更时调用，返回列表渲染为店长下拉项。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getTeamMemberByLeaderNew",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-team-member-by-leader",
          "description": "根据大酋长获取组员列表：平台流量看板/商品流量看板页面，选择大酋长(销售主管)下拉后联动调用，根据所选大酋长ID集合查询其名下组员(员工)列表，用于填充组员多选下拉框。请求体为大酋长ID的JSON数组(非对象)，响应obj为组员数组，前端仅取employee_name作为下拉项的value与文本。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/getTeamMemberByLeader",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-no-sale-platform",
          "description": "平台禁限售政策列表查询：在「产品问题投诉」页面，当问题类型为“平台限售”且选择平台后，按平台名称查询该平台对应的禁限售（禁售）政策列表，返回字符串数组用于「禁售政策」下拉框选项。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/noSalePlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-show-amz-bill-detail",
          "description": "亚马逊平台费账单明细查询：销售业绩报表中点击某日「平台费」(发货时间业绩 + 平台=Amazon)下钻，按账单日期分页查询亚马逊平台费账单明细，返回店铺/币种/费用金额/费用类型/订单号/SKU/出账时间等明细行及总条数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/showAmzBillDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-show-one-day-ebay-bill-detail",
          "description": "某一天eBay账单明细查询：日销报表下钻：根据父页面筛选条件(员工类型/时间区间/平台/分类/店铺/员工/大主管)+指定某一天(currentdate)，分页查询该日 eBay 账单明细，并返回总条数与总页数供前端分页与展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/saleReport/showOneDayEbayBillDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-amount-target-list",
          "description": "市场部月度毛利额目标列表查询：按部门与时间区间查询市场部（人员维度）月度毛利额目标完成情况，返回人员/部门列表（本月/上月/下月/年度的目标额、完成率、环比、销售额/毛利率/毛利额）及一行汇总 sum；列表为树形懒加载首层数据。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesAmountTarget/getAmountTargetList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-profit-target-list",
          "description": "市场部月度毛利目标列表查询：市场部月目标页面按部门与时间区间查询各负责人(部门/团队)月度毛利额目标完成情况列表，返回本月/上月/下月/年度累计等字段及汇总(sum)行；前端以懒加载树表展示，可下钻经理与店铺。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesProfitTarget/getProfitTargetList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-all-publish-number",
          "description": "销售日刊登报表-获取全部刊登数量(上上周)：销售日刊登报表顶层查询：按周次标记(weekTag)返回各销售员一周每天新刊登listing数量、个人汇总数量及全员每日合计数量，并通过 flag 标识是否可向下钻取。weekTag=100 对应上上周页签。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesTarget/getAllPublishNumber",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-manager-shop",
          "description": "销售日报-经理店铺数据查询(getManagerShop)：销售目标/销售日报页面中，按员工(经理)下钻查询其名下各店铺的本周/上周/上上周发布(刊登)数量数据。点击表格行展开图标时触发，传入员工ID、员工姓名及周标识，返回该员工下各店铺(weekList)及每店铺逐日数量(week)，由 art-template 渲染到店铺明细行。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesTarget/getManagerShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-product-target-first",
          "description": "月度业绩目标首页查询：月业绩目标页首屏加载：按 targetType=2（月）与 week（月偏移量）查询当前层级（level 1/2/3）下各销售/主管的本月业绩目标、环比涨跌、实际销售额/毛利率/毛利额、完成率，以及上月、下月目标等数据，并返回历史目标时段（timeSlot）列表用于切换查看。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesTarget/getProductTargetFirst",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-product-target",
          "description": "业绩目标-按商品(开发员/大组长)月度目标查询：进入“新增业绩目标”页面时加载业绩目标数据：返回本人(大组长)目标行集合 bigChief、组员目标行集合 sales(含“汇总”行)、是否可编辑档标识 isLast、以及可切换查看的历史目标时段 timeSlot。每行包含本月实际完成、本月目标三档、下月目标三档。week=0 时为本月并可编辑下月目标，week>0 时查看对应历史时段(只读)。入参均为 URL Query，无请求体。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesTarget/getProductTarget",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-sales-target-first",
          "description": "月度销售业绩目标首页查询：月业绩目标看板首页加载：按 targetType=2(月) 与时间槽 week 查询当前层级(店铺/姓名)的本月/上月/下月业绩目标、实际销售额、毛利率、毛利额、完成率、环比涨跌、订单量等，返回可逐级下钻的 sales 列表及历史时间槽 timeSlot。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesTarget/getSalesTargetFirst",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-sales-target-shop",
          "description": "月业绩目标-店铺/组员下钻查询：月业绩目标页面点击行前的展开箭头时，按店长/平台下钻查询其下级（店铺或组员）的月业绩目标、环比涨跌、本月/上月实际销售额、毛利率、毛利额、实际完成率及下月目标等明细，结果渲染为子表格。targetType 固定为 2（月目标）。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesTarget/getSalesTargetShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-sales-target",
          "description": "业绩目标(大酋长/月)查询：大酋长业绩目标页加载/切换时段时调用：按 targetType=4（大酋长口径）、week（时段下标）拉取业绩目标数据，返回组员目标(bigChief)、店铺/汇总目标(sales)、可选历史时段(timeSlot)及 isLast 是否当前月标记，前端用 art-template(contentTemplate) 渲染本月/下月各三档目标表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesTarget/getSalesTarget",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-sub-manager-number",
          "description": "销售目标-下级主管(酋长)业绩数量查询：销售日报页面，点击展开某员工行时，按 employeeId+weekTag 查询其下级主管(酋长)的本周/上周/上上周业绩数量明细(weekList)，用于渲染下钻子表。请求参数全部以 URL query 传递(weekTag: 001本周/010上周/100上上周)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesTarget/getSubManagerNumber",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-week-month-product-sales-volume",
          "description": "月度商品销量(周/月)统计查询：业绩目标(月)看板顶部卡片数据查询：返回所选时段的年度已完成销售额及按周/月维度的销量目标完成列表(实际/目标 形式)，供 contentTemplate2 模板渲染「{year}年已完成 / 月业绩目标」区块。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesTarget/getWeekMonthProductSalesVolume",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-week-month-sales-volume",
          "description": "月业绩目标销量(已完成)统计查询：月业绩看板头部卡片数据查询：返回当前用户/部门本年度已完成销售额(万)及「月业绩目标」列表(各周/月时段销量，格式 目标/实际)，渲染于页面顶部卡片 #contentTemplate2。由月业绩首屏 getSalesTargetFirst() 成功回调内联调用。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/salesTarget/getWeekMonthSalesVolume",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-product-details",
          "description": "新品出单产品明细查询：看板店铺(seebeeDevelopmentShop)新品出单产品明细分页查询：按店铺管理员/店铺名称/自建-继承状态/时间区间/类型筛选，分页返回商品图片、SPU、产品名、商品属性、出单量、创建时间等明细行，并返回总条数与总页数用于分页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/seebeeDevelopmentShop/findProductDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-first-list",
          "description": "SeeBee平台开发报表-店铺首层列表查询：SeeBee平台开发报表首层数据查询：按开始/结束时间筛选，返回店长(店铺管理者)维度的店铺汇总报表行，含订单量、订单销售额、发货毛利额、新品/老品出单量与销售额、总产品数、爆B以上产品数及爆款率(均含搜索时间范围内与不受时间限制两套口径)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/seebeeDevelopmentShop/firstList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-account-campaign-stat",
          "description": "人员任务报表-账号Campaign统计查询：按时间区间与排序方式统计各业务员(ERP用户)的广告投放业绩：返回每个人的 campaigns 数量、消耗金额、转化价值、单量、ROI、周出单≥10 的 campaigns 数量、出单比例、点击、转化率等汇总指标，用于报表页表格渲染。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/seebeeDevelopmentShop/getAccountCampaignStat",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-second-list",
          "description": "SeeBee平台开发-店铺下钻(二级)列表查询：SeeBee平台开发报表中，点击某店铺管理员(开发员)行展开后触发，按 店铺管理员+店铺状态+起止时间 查询该管理员名下各店铺的开发明细（订单量/销售额/毛利/新老品出单量与销售额/总产品数/爆B以上产品数/爆款率），返回明细列表渲染为子表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/seebeeDevelopmentShop/secondList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-leader-shop2-shop-achievements",
          "description": "店长名下店铺下拉查询(getLeaderShop2)：订单看板页中，选择销售负责人(店长)下拉后，根据所选店长(employeeList)联动查询其名下店铺列表，渲染到各 Tab 的店铺(shopName1~shopName10)下拉框。请求体还固定携带空的 bigChiefList(大酋长列表)与 platformId(平台ID列表)两个数组占位参数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/shopAchievements/getLeaderShop2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-leader-shop",
          "description": "大酋长/组员店铺列表查询(getLeaderShop)：店铺业绩页的「店铺」下拉联动接口：根据所选平台、大酋长(组长)、组员(员工)，查询其名下可选店铺集合，用于填充 #shop 多选下拉。平台/大酋长/组员任一为空时传空数组。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/shopAchievements/getLeaderShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-shop-site",
          "description": "店铺站点列表查询(getShopSite)：获取「店铺站点」下拉列表数据。页面加载时(password())无条件调用，返回当前可选的店铺站点字符串数组，用于渲染 #password(店铺站点)下拉选择框；用户选中后作为店铺业绩列表查询/导出的 password 过滤条件。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/shopAchievements/getShopSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-shop-achievements-list",
          "description": "店铺业绩列表查询：店铺业绩(店铺成绩)分页列表查询：按平台、月份、店铺、组员、大酋长、店铺站点、店铺类型、店铺等级、运营状态、店铺属性、店铺标签、店龄区间、客户经理、资质状态、跟卖状态等条件筛选，支持排序字段与升降序，返回店铺业绩列表及总数、总页数。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/shopAchievements/shopAchievementsList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-shopname",
          "description": "店铺登录地址获取：订单详情页点击面包屑店铺名称时，按店铺名(路径变量)查询该店铺后台免登录地址；成功(code=200)则 window.open(obj) 打开店铺地址，失败则 ElMessage.warning(desc) 提示。无请求体。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/shop/login/url/get/{shopname}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-sta-publish-big-chief",
          "description": "大酋长上新统计查询：上新发布统计-按大酋长统计：按所选月份(date)与大酋长(bigChief/allChief)统计每位大酋长的毛利额、运营毛利率、销售额、在线量、总上新量、上新/在线占比，以及美国/英国/德国/澳大利亚/加拿大/法国/爱尔兰/意大利/奥地利/西班牙 10 个站点的上新量与占比。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/statisticsPublish/findStaPublishBigChief",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-sta-publish-emp",
          "description": "按人员统计上新发布报表查询：上新发布统计报表（按人员）：按所选月份(日期)与可选大酋长，分页查询各销售人员在美国/英国/德国/澳大利亚/加拿大/法国/爱尔兰/意大利/奥地利/西班牙等站点的上新量与占比，并汇总毛利额、运营毛利率、销售额、在线量。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/statisticsPublish/findStaPublishEmp",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-sta-publish-shop",
          "description": "刊登统计-按店铺统计查询：刊登统计报表「按照店铺统计」页签的列表查询：按统计月份(date)及站点、大酋长、店铺负责人、店铺等筛选条件分页查询各店铺的销售额、上新量、在线量、上新占比、剩余刊登数量、剩余销售额、卖家等级等汇总指标。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/statisticsPublish/findStaPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-sta-publish-site",
          "description": "站点周期上新统计查询：刊登统计-按站点统计：传入某一日期(date)，返回各站点在四个统计周期(周期标题由 title 给出)下的销售额、周期上新量、在线量、周期上新占比，前端按站点行渲染统计表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/statisticsPublish/findStaPublishSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-leader-drop-down",
          "description": "总监下拉列表查询：依据人员类别+公司+所属平台查询团队总监(leader)下拉列表，用于自定义客单价报表页『所有总监』多选下拉的数据源，返回总监 id/name 列表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/teamDropDown/leaderDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-little-manager-drop-down",
          "description": "主管(小经理)下拉列表查询：人销售报表页面顶部筛选区的「主管」下拉框数据源。根据所选人员类别(订单/发货时间业绩)、公司、平台、总监、经理等上级条件，联动查询其下属主管(小经理)列表，返回 {id,name} 数组供 el-select 渲染主管选项。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/teamDropDown/littleManagerDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-manager-drop-down",
          "description": "经理下拉列表查询：自定义报表(客单价分析)页头部“所有经理”下拉框的数据源接口。根据人员类别、公司、平台及已选总监(leaders)联动查询其下属经理列表，返回 {id,name} 列表用于 el-select 渲染。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/teamDropDown/managerDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-shop-drop-down",
          "description": "店铺下拉列表查询：根据平台、总监/经理/店长、客户经理、运营状态、海外仓、店铺排名、店铺名称关键字等条件分页查询店铺下拉列表；后端会把入参的总监/经理/主管换算成店长再过滤，并按登录人名下组员限定数据范围。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/teamDropDown/shopDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-shop-manager-drop-down",
          "description": "店长下拉列表查询：按总监/经理/主管、公司、平台等条件查询店长(店铺销售负责人 sale_leader)下拉选项列表，后端将总监/经理/主管转换为名下店长并按公司/平台/登录人组员过滤后去重返回，供前端店长下拉控件使用。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/teamDropDown/shopManagerDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-team-number-drop-down1",
          "description": "团队人员下拉(按集团公司)查询：按集团公司ID(groupCompanyId)、员工类型、公司/平台/组长等条件查询团队成员(员工)下拉列表。前端在创建海外仓SKU弹窗 onMounted 时分别以 groupCompanyId=1 与 groupCompanyId=33 各调一次，把返回数组分别缓存到 companyUserMap[1] / companyUserMap[33]，用于开发员(developer1/developer2)下拉选择，选项展示与取值均为成员姓名 name。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/teamDropDown/teamNumberDropDown1",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-team-number-drop-down4",
          "description": "根据人员获取下面组员的店铺(店铺下拉)：团队下拉组件数据源：根据店长(shopManagers)与平台(platform/平台名称)筛选在营店铺，返回店铺ID与店铺名称列表，供前端“店铺”下拉选择器渲染 label/value。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/teamDropDown/teamNumberDropDown4",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-team-number-drop-down",
          "description": "团队人员(下拉)查询：按员工类型/公司/平台/组长/主管等条件查询团队人员名单，返回人员对象数组。前端在刊登检测(type=checkPublish)模式下，用其 name 字段填充创建人下拉框(createdBy)的可选项。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/teamDropDown/teamNumberDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-logistics-country",
          "description": "物流国家统计列表查询：物流跟进看板（任务跟进页）按国家维度统计查询：依据国家、物流类型、统计时间区间与排序方式，返回各国家的跟进次数、发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款数/退款率及各平台（wish/ebay/amz/smt/joom/其他）发货单量。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/trackController/findLogisticsCountry",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-logistics-express-name",
          "description": "物流货运渠道(三级)统计查询：物流跟进看板(taskFollow)第三层下钻接口：在「国家→货运类型」展开后，按所选国家、货运类型及统计时间区间、排序方式，返回该货运类型下各具体货运渠道(物流商)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款订单数/退款率以及 wish/ebay/amazon/aliexpress/joom/其他 各平台单量；同时回传上层员工头像、跟进描述与跟进总次数用于头部展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/trackController/findLogisticsExpressName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-logistics-express-type",
          "description": "物流类型(第二层)统计查询：物流跟进看板中，点击第一层「国家」行展开时按所选国家+物流类型+统计时间区间+排序方式查询该国家下各物流类型(expressType)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款数/退款率及各平台(wish/ebay/amz/smt/joom/其他)分布，并返回跟进次数、最后联系时间、跟进描述等跟单信息，用于渲染第二层(tbodyTwoTemplate)列表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/trackController/findLogisticsExpressType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-logistics-follow-log",
          "description": "物流跟进记录查询：物流跟进日志看板查询：按国家、类型、物流商及操作时间区间分页查询物流商跟进记录，返回跟进编号、跟进人/时间、国家/类型、物流商类型/物流商、跟进内容、聊天图片、价格附件、下一步跟进计划与下一次联系日期等列表数据。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/trackController/findLogisticsFollowLog",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-logistics-providers",
          "description": "物流商下拉列表查询：物流跟进日志页加载时调用，无入参，返回全部物流商名称列表，用于填充“请选择物流商”下拉框。返回的 obj 数组每一项既作为 option 的 value 又作为显示文本。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/trackController/findLogisticsProviders",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-track-country",
          "description": "物流跟进-国家下拉查询：物流跟进日志页面初始化时调用，拉取可选「国家」清单，用于顶部「请选择国家」下拉框(#country)的渲染。无请求参数，直接返回国家名称字符串数组。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/trackController/findTrackCountry",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-track-express-type",
          "description": "物流跟进-运输类型(下拉)查询：物流跟进日志(logView)页面初始化时调用，无入参，返回全部\"类型\"(运输/快递类型)字符串列表，前端用 art-template(#expressTypeTemplate) 渲染为类型下拉框选项（既作 option 的 value 又作显示文本）。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/trackController/findTrackExpressType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-show-wish-fine-bills",
          "description": "Wish罚款账单列表查询：按发生时间区间(dateFromStr~dateToStr)分页查询各店铺的Wish平台罚款账单汇总，返回店铺名、罚款类型、罚款金额(美元/人民币)列表及分页信息；前端以 art-template(#contentTemplate) 渲染表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishFine/showWishFineBills",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-show-wish-fine-detail",
          "description": "Wish罚款明细查询：按时间区间、店铺名、罚款类型分页查询 Wish 平台罚款明细列表，返回总条数、总页数及每条罚款记录(店铺、交易/订单ID、延迟天数、发生时间、罚款/扣减金额(美元/人民币)、是否撤销、罚款类型与状态)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishFine/showWishFineDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-pbfeeof-spu",
          "description": "SPU的PB(Product Boost)费用明细查询：根据SPU及时间区间，查询该SPU在各店铺的Wish Product Boost(PB)推广活动费用明细，返回活动基本信息、GMV、预算、消耗、曝光与曝光费等字段；前端在末尾追加一行汇总行后渲染表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/findPBFeeofSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-pbreportof-shop",
          "description": "店铺ProductBoost(PB)推广费报表查询：根据店铺ID与活动时间区间，查询该店铺下 Wish ProductBoost(商品推广)各活动的费用报表：返回活动基础信息、GMV/PB GMV、活动最大预算、广告总消耗与期间消耗、曝光费/报名费/曝光数等明细；前端对 totalCampaignSpend、incrementFee 做合计生成汇总行并以 art-template 渲染表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/findPBReportofShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-wish-pbfee-by-spu",
          "description": "按SPU查询商品推广(PB)费用统计：按交易时间区间与排序条件，分页查询各 SPU 的销售收入(总/新品/老品)、订单数、订单毛利额、广告费(总/新品/老品)、广告销售额(总/新品/老品)、广告占比(ACOS)、PB占比与 ROI 等统计指标，用于 PB费用-按SPU查看 报表页渲染。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/findWishPBFeeBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-wish-pbof-itemid-every-next-or-last",
          "description": "WishPB商品翻页(前/后45天)趋势查询：WishPB(Product Boost)推广趋势图的翻页查询：在 listingChart 页面点击「前45天 searchChart('0')」/「后45天 searchChart('1')」时，按 productId + 基准日期 date + 选中指标 selectOption + 方向 days 拉取折线趋势数据(x 轴日期 + series 多指标系列)，并回写新的基准日期用于继续翻页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEveryNextOrLast",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-wish-pbof-itemid-every-table-next-or-last",
          "description": "Wish产品PB活动明细-前/后45天翻页查询：PB(Product Boost)推广趋势页点击「前45天/后45天」翻页时，按产品ID、基准日期、方向(前/后)查询该时间段内的PB推广活动明细列表(活动名/起止时间/关键字/订单数/活动状态/花费)，渲染到下方明细表格。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEveryTableNextOrLast",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-wish-pbof-itemid-every-table",
          "description": "Wish产品PB活动每日明细表查询：根据产品ID与时间区间(默认前45天至昨天)，查询该Wish产品在 Product Boost(PB)推广中每日的活动明细列表，含活动名称、起止时间、关键字、订单数、活动状态、花费，用于刊登趋势图(listingChart)下方明细表渲染。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEveryTable",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-wish-pbof-itemid-every",
          "description": "Wish商品Boost每日PB趋势查询：根据产品ID与起止日期，查询该产品 Wish ProductBoost(PB) 推广在前45天时间窗内每日的趋势数据，返回 echarts 折线图所需的 X 轴日期分类与多条系列(总费用/总计费流量/ERP总成交额/ERP总单量)，并回传当前定位日期(desc)用于前/后45天翻页。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEvery",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-wish-pbof-itemid",
          "description": "Wish按listing查询PB投放报表(findWishPBOfItemid)：Wish平台Product Boost(广告/推广)按 listing 维度的分页统计查询：依据交易时间区间、店长、店铺、产品ID等条件，按指定字段排序，返回每个 listing 的广告费(总/新品/老品)、广告销售额、ACOS、PB占比、刊登时间、要价、CPM、费用流量、订单成交、店铺店长、ERP成交额单量等汇总指标列表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemid",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-wish-pbof-manager",
          "description": "PB（广告）按人员维度统计查询：按交易时间区间，统计每个运营人员（店铺管理员）的销售收入（总/新品/老品）、销售订单数、毛利额、广告费（总/新品/老品）、广告销售额（总/新品/老品）、广告占比、PB占比、毛利率、ROI 等指标，按所选字段升/降序分页返回人员汇总列表。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/findWishPBOfManager",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-find-wish-pbof-plan",
          "description": "按投放计划查询 Wish ProductBoost 推广效果：Wish ProductBoost(产品推广)报表「按照投放计划查看」维度的分页查询：按交易时间区间、店长、店铺、活动名称、活动状态等条件筛选，按指定字段升/降序排序，返回投放计划(活动)列表及其活动花费、订单数、ERP总成交额/总单量等汇总字段。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/findWishPBOfPlan",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-campaign-online",
          "description": "某日在线投放计划(活动)查询：Wish商品Boost(PB)趋势图中点击某一天的数据点时，按商品ID与日期查询当天正在进行的投放活动(Campaign)列表，弹窗展示活动名称、起止时间、关键字、订单数、活动状态、花费等明细；返回空数组时提示“此时间无投放计划在进行”。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/getCampaignOnline",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-query-wish-pbby-manager",
          "description": "Wish推广(店长维度)活动查询：按店长(店铺经理)与时间区间查询其名下店铺的 Wish 商品推广(Product Boost)活动列表，返回各活动的店铺、活动ID/名称、起止时间、状态、成交额(GMV)、最大预算与期间消耗等；前端汇总各活动期间消耗(incrementFee)合计展示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/wishProductBoost/QueryWishPBByManager",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-profit-variance",
          "description": "事业部人员毛利方差图查询：按月份、平台、总监、经理、店长等条件，查询事业部各店长的毛利方差数据，返回每个店长的实际毛利/人均毛利/总毛利及入职、平台、经理等信息，前端用 ECharts 渲染柱状图(实际毛利)+折线(平均值)。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/getProfitVariance",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "crm-web-service-check-cancel-eligibility",
          "description": "校验订单取消资格(checkCancelEligibility)：订单详情页点击「取消订单」时调用：根据订单ID校验该订单是否满足取消条件，并返回可选的取消理由列表(cancelReasonList)，用于取消订单弹窗中的「取消理由」下拉。code!=200 时弹出 message 错误提示并中断。",
          "method": "POST",
          "path": "/crm-web-service/cancelOrder/1/checkCancelEligibility",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-export-chinese-roses",
          "description": "月度店销报表导出：导出「月度店销报表」。按人员类别(订单时间业绩/发货时间业绩)、平台、品类、客户经理、总监/大酋长/组员、店铺、年月、展示指标类型、公司、海外仓类型、店龄区间等条件，导出 Excel(.xls) 文件流；无数据或异常时返回 JSON 提示。",
          "method": "POST",
          "path": "/erpOrder/erpOrder/personSaleReport/exportChineseRoses",
          "pathPrefix": "",
          "responseMode": "json"
        }
      ]
    },
    {
      "domain": "pim",
      "pathPrefix": "",
      "actions": [
        {
          "name": "erp-product-get-amazon-category",
          "description": "获取亚马逊子目录(类目)列表：亚马逊自动刊登确认页加载时调用，获取亚马逊「子目录」(类目)下拉列表，用于渲染筛选区 #categoryId 下拉框的选项（option 的 value=子目录ID、文本=子目录名称）。无请求参数。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getAmazonCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-site",
          "description": "获取大类目(Excel模板)列表：亚马逊自动刊登确认页，点击/批量修改大类时，按当前SPU所在站点(site)拉取该站点下可选的Excel模板(大类)列表，用于填充 #bigCategorySelect 下拉，选项展示为\"模板名 > 产品类型\"，选中后用 templateId/productType 修改大类。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getExcelTemplate/{site}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-groupid",
          "description": "查询刊登确认信息(UPC/刊登编号)：亚马逊自动刊登确认页，点击父SKU时根据变体组ID(groupid)查询该刊登任务下父/子变体的刊登编号(sellerSku)与UPC(productId)信息，回填到「修改UPC并提交刊登」弹窗(upcModal)供编辑确认。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getPublishConfirmInfo/{groupid}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-shop-configure-by-shop-id",
          "description": "根据店铺ID查询亚马逊自动刊登店铺配置：打开自动刊登设置弹窗(showModal)时调用，按 shopId 查询该亚马逊店铺已保存的自动刊登配置(库存/平台费率/毛利/品牌/制造商/物流渠道/类目/VAT/国家/预刊登时间/自动刊登开关/UPC豁免/备货天数/跟卖移除等)，用于回填弹窗各表单控件；无配置时返回空对象，前端清空表单。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getShopConfigureByShopId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-shop-id",
          "description": "获取店铺刊登大类(一级类目)列表：亚马逊自动刊登配置弹窗(showModal)打开时，按店铺ID查询该店铺可选的刊登「大类(一级类目)」名称列表，用于渲染 #firstCategory 多选下拉(select2)。店铺ID以路径参数形式传入。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getFirstCategory/{shopId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-develop-list",
          "description": "开发员(负责经理/负责人)下拉列表查询：商品类目维护页面初始化时调用，返回可选的开发员/负责经理/负责人名称列表，用于「修改类目」「批量设置权限」「批量删除权限」弹窗中「负责经理」「负责人」下拉框的候选项。接口无入参。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/categoryController/getDevelopList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-fba-inventory-kx-sku",
          "description": "FBA库存可销SKU明细查询：FBA库存可销(KX)报表的行下钻接口：点击「店铺负责人」行展开时，按该负责人(shopManager)查询其名下各SKU在各月份/周期的可销(kx)数据，返回 SKU + 周期可销数组，渲染到该行的子表格。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/fbaProduct/fbaInventoryKxSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-hwc-list",
          "description": "海外仓列表查询：获取当前用户可见的海外仓(HWC)列表。页面初始化 getHwclist() 调用，GET 无入参；返回海外仓数组，前端用 shopTemplate 渲染顶部'请选择海外仓'多选下拉(#shopContent,值=shopId)，用 shoplistTemplate 渲染新增跟踪单弹窗下拉(#shopList,值=shopId,shopName)。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/hwcProduct/getHwcList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-sid",
          "description": "印尼/海外仓SKU刊登校验查询(getSkuInfo)：SKU详情页点击刊登下拉选择平台时，按当前SKU的sid查询该SKU(印尼/海外仓)是否需要刊登提醒。obj===0直接进入对应平台刊登页；obj!==0弹出确认框务必核实海外仓sku是否需要刊登，确认后再刊登。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/indonesia/getSkuInfo/{sid}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-big-cheif-by-shop-name",
          "description": "根据店铺名称查询店长与销售大酋长：产品问题投诉页选择店铺后(getshopleader)，按店铺名称查询该店铺的销售大酋长与店长，回填到“销售大酋长”“店长”只读输入框。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/infringement/getBigCheifByShopName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-big-cheif-by-spu",
          "description": "按SPU查询开发大酋长与开发员：产品问题投诉(侵权反馈)页面初始化时，根据当前 SPU 查询该商品对应的「开发大酋长」与「开发员」，并自动回填到页面只读输入框，供投诉任务匹配责任人使用。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/infringement/getBigCheifBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-sku-recommender",
          "description": "SKU推荐人查询：SKU详情页加载时查询该SKU的推荐人信息，返回推荐人姓名与推荐人头像URL，用于在「推荐人」卡片区(.rementInfo)展示；无数据时隐藏该卡片。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/productDetails/{SKU}/getSkuRecommender",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-extend-sku",
          "description": "查询SKU扩展记录(数量)：订单详情页加载销售产品列表后，对每个产品SKU调用本接口，查询该SKU是否已存在扩展SKU记录并返回其数量。前端据返回值是否为0，结合产品热度类型(旺A/爆A/爆B/超级爆款)与毛利(maoli<0)，决定是否显示扩展任务按钮。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/productDetails/findExtendSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-info-by-sku",
          "description": "根据SKU查询库存分仓信息：SPU详情页中点击某SKU的库存单元格时，按SKU查询该SKU在各仓库的库存明细（仓库/仓库类型/仓位/近7·30·60·90天销量/成本价/采购价/库存数/待发货/缺货订单/在途/下单），前端按仓库类型(STORAGETYPE)升序排序后渲染为悬浮气泡表格(InventoryPopover)。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/productDetails/getProductInfoBySku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-sku-day-sold",
          "description": "SKU每日销量查询(getSkuDaySold)：进入SKU详情页时，按当前SKU查询其各SID(子SKU/库存单元)的销量值，前端拼成 sid: reserve9 字符串后展示在\"当日销量\"区域(#skuDatSold)。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/productDetails/getSkuDaySold",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-sku-warehouse",
          "description": "查询SKU可配置海外仓类型列表：SKU详情页点击“配置海外仓映射关系”时，按 SKU 查询其可选的海外仓类型列表，用于弹窗中“海外仓类型”下拉选择框。返回值为海外仓类型字符串数组，前端 el-select 直接用每个字符串同时作为 label 和 value 渲染。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/productDetails/getSkuWarehouse",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-transit-warehouse",
          "description": "获取中转仓(海外仓)列表：加载 SKU 详情页「配置海外仓映射关系」弹窗中「中转仓」下拉框的可选项。无入参，返回可选中转仓(海外仓)名称字符串列表，前端 el-select 用 v-for 直接渲染为选项(label=value=名称字符串)。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/productDetails/getTransitWarehouse",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-emp-by-dep2",
          "description": "按部门获取员工列表(分配对象下拉)：采购下单/分配采购任务页面初始化时调用，按当前登录人所属部门返回可分配的员工(开发员)姓名列表，前端用 art-template 模板 contentTemplate3 遍历渲染成“分配对象”下拉框(#assignment)的 <option>，所选姓名后续作为 allocationPurchaseTask 的 oper 参数提交。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/getEmpByDep2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-emp-by-dep3",
          "description": "按部门获取开发员(员工)列表：进入「独立站产品报表」页面时调用，按当前登录用户所在部门返回开发员(员工)姓名列表，用于填充页面顶部“开发员”筛选下拉框(#deveplover)。该接口为无参 GET 请求。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/getEmpByDep3",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-hwc-type",
          "description": "根据海外仓类型查询发货仓库(前缀)列表：订单详情页「海外仓发货设置」弹窗中，用户选择「海外仓类型」后触发；以海外仓类型ID作为路径参数，返回该类型下可选的发货仓库(中转仓/前缀)列表，用于「选择前缀」下拉框。仅有一项时前端默认选中并继续联动 SKU 后缀与收货仓库。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/getHWCSuffByHwcType/{hwcType}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-hwc-type",
          "description": "获取海外仓类型列表：订单详情页「转海外仓发货」时，打开创建海外仓SKU弹窗，加载「海外仓类型」下拉选项。无请求参数，返回海外仓类型(warehouseType)列表，供前端按 warehouseTypeId 选择并取 warehouseTypeName。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/getHwcType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-sku-suffix",
          "description": "按发货仓库后缀查询收货仓库：创建海外仓SKU弹窗中，根据选中的发货仓库后缀 skuSuffix 查询对应的收货仓库列表，用于填充收货仓库多选下拉，前端默认全选所有 receivingWarehouseId。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/getReceivingWarehouseId/{skuSuffix}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-sku",
          "description": "获取速卖通(SMT)托管内容选项：SKU详情页“申请备货/上架”弹窗中，选择速卖通(smt1/aliexpress)平台时，根据当前 SKU 拉取该平台可选的托管内容选项列表(返回字符串数组)，前端用于渲染“适用内容”下拉选项(value 与 label 同值)。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/getSmtTuoGuan/{SKU}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-spu-sales-status",
          "description": "SPU各平台销售状况查询：在SPU管理列表的“毛利率”单元格鼠标悬浮时触发，按SKU查询该商品在各销售平台的销售额、毛利、退款、广告费汇总，渲染为气泡内的平台明细表格。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/getSpuSalesStatus",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-storagebinflag",
          "description": "获取直邮类型(直邮仓)下拉选项：SPU(商品)管理列表页筛选条件区「直邮类型」下拉框的数据源接口。页面初始化时无参调用,返回可选直邮类型(直邮仓)名称字符串列表(如 TEMU仓、Shein仓 等),前端将其逐项渲染为下拉选项;用户所选值作为 storagebinflag 参与 SPU 列表查询过滤。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/getStoragebinflag",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-untreated-num",
          "description": "售后登记表-未处理数量查询：商品列表页签栏（productTab）加载时调用，查询当前用户「售后登记表」中未处理的记录数量，用于在「售后登记表」页签上展示红色未读角标（badge-untreated-num）。返回值大于0时显示角标并填入数量。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/getUntreatedNum",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-leader-option",
          "description": "创建人组长下拉选项查询：进入违规产品处理页面时调用，获取「创建人组长」筛选下拉框的全部组长名称选项。无入参，返回组长姓名字符串数组，前端用 art-template 的 groupLeaderTemplate 逐项渲染为 option，并在 search2()/exportTable() 的 getSearchParams() 中把所选组长拼进 employees 数组作为查询条件。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/leaderOption",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-sku-refundrate-return-package",
          "description": "SKU平台退款率/退包率查询：在SPU管理列表中，鼠标悬浮某行的退款/退包入口时，按SKU查询该SKU在各销售平台上的退款率、质差退款率、退包率，前端渲染成平台/退款率/质差退款率/退包率的悬浮表格。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/skuRefundrateReturnPackage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-storage-option",
          "description": "发货仓库选项查询：获取SPU管理列表筛选器中「发货仓库」下拉框的选项列表。页面初始化时无参 GET 调用，返回值为发货仓库名称字符串数组，直接作为 el-select 的 label 与 value 渲染，供用户选择后以 storageNew 参数回传到 SPU 列表查询接口做过滤。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/storageOption",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get",
          "description": "商品异常(售后)原因类型及计数查询：在 SPU 管理页点击「举报异常/添加异常」时，按商品(SPU/productid)拉取可选的异常(售后)原因类型列表及各原因已有的计数，用于填充举报弹窗的「原因」下拉框；下拉项文本为「原因名称(数量)」，数量为 0 时不展示括号。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/{sku}/abnormal/type/count/get",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shopee-logo",
          "description": "查询Shopee水印(Logo)样式列表：打开\"设置自动刊登参数\"弹窗时调用，查询当前可选的Shopee水印(Logo)样式列表，用于渲染\"水印样式\"下拉，供刊登时为图片加水印选择样式。无请求参数。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/shopeeProductPublish/findShopeeLogo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-sku-package-create-oper",
          "description": "SKU包装-提交人(创建人)下拉列表查询：SKU包装信息报表页加载时调用，获取该报表数据中所有「提交人(创建人)」去重列表，用于顶部「请选择提交人」筛选下拉框的选项数据。返回值为提交人姓名字符串数组。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/skuPackage/getSkuPackageCreateOper",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-warehouse-info",
          "description": "SKU包装-获取仓库信息(下拉)：获取SKU包装测量任务可选的仓库列表，用于「添加任务」弹窗中「仓库」多选下拉框的数据源(el-select 的 storageId/storageName)。前端在页面挂载(onMounted)时调用一次，返回的数组直接绑定到下拉选项；下拉中还会前置一条 storageId=-1「所有平台都测」(前端硬编码,非接口返回)。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/skuPackage/getWarehouseInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-shop-manager-drop-down",
          "description": "开发经理下拉列表查询：获取 SKU 包裹/采样业务下「开发经理」下拉选项列表。前端进入「拍照采样批次核销表」页面时自动调用，返回开发经理 id 与姓名集合，用于「开发经理」多选下拉框；选中后再以其 id 联动查询其名下开发员。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/skuPackage/shopManagerDropDown",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-employee-category",
          "description": "获取员工发布类目（getEmployeeCategory）：进入“必发SPU”页面时调用，获取当前登录员工对应的发布类目信息（一级类目、二级类目），用于在页面顶部 #categoryTips 处展示“一级类目：xxx； 二级类目：xxx”的提示文案。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/stockProduct/getEmployeeCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-one-two-categories",
          "description": "查询侵权词listing一/二级类别：商品库存中心按类别名称模糊查询商品一/二级类目列表，供侵权授权申请弹框中“侵权词listing类别”多选下拉框渲染选项。name 传空表示拉取全部类别。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/stockProduct/getOneTwoCategories",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-other-categories",
          "description": "按名称查询子类目(其他类目)：「设置类目」弹窗中，根据输入的类目名称关键字 name 模糊匹配并返回可选的子类目(其他类目)列表，结果赋值给前端 settypeapp 的 sonMenulist，用于子类目选择。name 为空时前端直接 return 不发起请求。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/stockProduct/getOtherCategories",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-employee-oversea-storage-list",
          "description": "查询员工海外仓库存仓库列表：获取当前登录员工可见的海外仓（仓库）列表，用于「海外仓库存流水/盘点日志」页面的「海外仓类型」「出入库仓库」两个下拉框数据源。前端拿到列表后按 storageType==4 过滤出海外仓类型供「海外仓类型」下拉使用，全量列表供「出入库仓库」下拉使用。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/storage/getEmployeeOverseaStorageList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "ozon-product-service-id",
          "description": "获取Ozon商品图片编辑信息：Ozon 图片编辑页进入时，按 listing 记录ID(URL路径变量)拉取该 Ozon 商品的编辑信息，前端据此渲染主图、附图列表(imgUrl JSON串)、颜色样本图，并把原始返回对象整体缓存(rawData)，用于后续 1:1还原/3:4裁剪(取 publishSpu/erpSpu/erpSku)及提交保存(原样回传)。",
          "method": "GET",
          "path": "/ozon-product-service/ozonProductEdit/getOzonProductEditInfo/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "product-imageditor-service-id",
          "description": "根据AI图任务ID查询任务状态：图片分配工作台对存在AI图任务(aiImgTaskId)的图片按3秒间隔轮询本接口查询蜂鸟(fengniao)AI处理任务状态；当返回的fengniaoStatus不再为padding时清除定时器并刷新图片列表。",
          "method": "GET",
          "path": "/product-imageditor-service/artImage/getAiImgTaskById/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-check-batch-modify-price",
          "description": "校验批量改价（批量改价前置校验）：亚马逊自动刊登确认列表中，勾选若干待刊登数据后点击“批量改价”时触发：把所选行的分组ID(groupIds)提交后端做改价前置校验。校验通过返回这批数据对应的币种符号(obj)，前端弹出批量改价弹窗并把币种显示在价格输入框旁；校验不通过则返回提示信息(desc)弹框告警。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/amazonProductPublish/checkBatchModifyPrice",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-publish-shop-amazon-product-publish",
          "description": "亚马逊待刊登-侧边店铺列表渲染（findPublishShop）：进入亚马逊自动刊登页左侧渲染当前用户的可刊登店铺树：返回用户头像、刊登成功总数、UPC使用/可用数量，以及店铺列表（每店含店铺ID/名称/刊登成功数/是否开启推荐刊登/是否UPC豁免）。无请求参数，后端按当前登录用户上下文返回。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/amazonProductPublish/findPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-amazon-auto-publish-confirm-list",
          "description": "亚马逊自动刊登待确认列表查询：亚马逊自动刊登中心首页主列表查询：按店铺、刊登状态、SPU、关键词、站点、类目、刊登人、经理、生成时间区间、价格区间及差评/捆绑/批量等多维度分页查询，返回待刊登/刊登中/成功/失败/放弃的 SPU 行，用于刊登前确认与批量操作。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getAmazonAutoPublishConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-amazon-auto-publish-info-by-shop-id-and-erp-sku",
          "description": "亚马逊自动刊登-按店铺与ERP SKU查询刊登明细：在「亚马逊自动刊登确认」列表中点击 SPU 行展开时，按 erpSpu+shopId+groupid 加载该 SPU 在该店铺下的全部变体 SKU 刊登明细（标题/描述/类目/主题/库存/颜色/尺寸/价格/运费模板/刊登状态/多张图片），渲染为子表格行供逐项编辑。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getAmazonAutoPublishInfoByShopIdAndErpSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-amazon-category-by-site-and-product-type",
          "description": "按站点与大类目查询亚马逊子类目(itemType)：在亚马逊自动刊登确认列表页，用户点击某行的“子类目”单元格进入编辑时，根据该行所属站点(site)与亚马逊大类目名称(amazonCategoryName)联动查询其下可选的亚马逊子类目(itemType)列表，渲染为下拉选项供修改。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getAmazonCategoryBySiteAndProductType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-amazon-publish-variation-theme",
          "description": "获取亚马逊刊登变体主题(Variation Theme)列表：在亚马逊自动刊登确认列表页点击某行\"主题\"单元格时触发，无入参 POST 请求，后端返回当前可选的亚马逊变体主题(Variation Theme)名称列表，前端用 themeTypeTemplate 渲染为 select 下拉；用户选中后由 themeTypeChange 将所选 variationTheme 回写到对应 SPU/SKU。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getAmazonPublishVariationTheme",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-images",
          "description": "获取亚马逊刊登SKU图片列表：亚马逊自动刊登确认列表中，点击某 SKU 的图片排序/拖拽排序时调用：按店铺+ERP SPU+ERP SKU+刊登分组ID 查询该 SKU 当前的主图、附图1~8、样本图(色卡图)URL，前端用 art-template imagesTemplate 渲染成可拖拽排序的 li>img 列表。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getImages",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-need-upc-number",
          "description": "获取批量刊登所需UPC数量：亚马逊自动刊登确认列表中点击「批量UPC」时调用：把所有勾选的待刊登SPU行(每行携带 groupid)封装为 list 上送，后端按这些刊登组计算批量刊登所需补充的 UPC 总数，前端展示为「请填入 N 个UPC」的提示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getNeedUpcNumber",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-type-tab",
          "description": "亚马逊自动刊登-获取产品类型(类目)标签页：亚马逊自动刊登待确认页面顶部「类目标签栏」数据获取：按所选店铺(shopIds)与刊登状态(status)统计各产品类型(一级类目)的待处理数量，返回类目列表，前端用 categoryListTemplate 渲染为可点击的标签页(tab)，点击后按 productType/templateId 二次筛选列表。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getProductTypeTab",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-publish-status-number-by-shop-id",
          "description": "按店铺查询刊登状态数量：亚马逊自动刊登(确认)页面，左侧店铺列表点击某店铺展开时调用，按店铺ID统计该店铺的「等待刊登/刊登成功/刊登失败/放弃刊登」四类商品数量，回填到侧边栏对应徽标。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/amazonProductPublish/getPublishStatusNumberByShopId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-intercept-log",
          "description": "亚马逊刊登拦截词/SKU 操作日志查询：查询亚马逊自动刊登「拦截词/拦截SKU」的操作日志：按拦截关键字模糊检索，分页返回每条日志的操作人、操作时间、类型(拦截词/拦截SKU)与内容。用于「操作日志」弹窗展示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/amazonProductPublish/interceptLog",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-assemble-attributes-detail",
          "description": "组装SKU属性明细（assembleAttributesDetail）：新增SPU页面根据颜色(color)与尺寸(size)做笛卡尔组合，由后端组装并返回该SPU下的SKU明细列表（含SKU编号、颜色-尺寸属性、产品中文名、图片等），前端渲染到SKU明细表格供继续补充供应商/尺寸/采购价后保存。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/attributeDetail/assembleAttributesDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-category-list-by-parent-id",
          "description": "根据父级分类名称查询下级分类列表：在「设置SMT043自动刊登参数」弹窗中，用户选择「马帮大类(一级分类)」后，前端以所选父级分类名称 + 层级数(固定2)调用本接口，联动查询并渲染下属「二级分类」下拉选项。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/categoryController/findCategoryListByParentId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-category-by-id",
          "description": "根据ID查询商品类目详情：商品类目管理页点击「修改」时，按类目主键(sequenceid)查询单个类目的详情，用于回显到「修改类目」弹窗（类目名称、英文名称、描述、报关编码、SPU开头规则、负责经理/负责人、级别等）。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/categoryController/getCategoryById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-category-list",
          "description": "商品类目分页列表查询：商品类目维护页查询：按层级(levelnum)与父类目(parentCatId)分页查询某一级类目列表，支持按类目名称(catName)子类搜索、按状态(openflag)开启/关闭筛选；返回类目列表及总数、当前页。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/categoryController/getCategoryList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-category-select",
          "description": "类目全类搜索(下拉联想)：商品类目管理页顶部「全类搜索」输入框的远程联想接口：用户输入类目名称关键词(防抖500ms)后，按关键词模糊匹配返回类目候选列表，供 el-select 下拉展示；选中后用于回填面包屑层级并跳转加载该类目的数据。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/categoryController/getCategorySelect",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-ebay-autopublish-spu",
          "description": "eBay自动刊登SPU列表查询：eBay自动刊登页面主列表查询：按店铺/刊登状态/产品状态/销量级别/站点/SPU编码等条件分页查询待刊登及已刊登的 SPU 刊登任务，返回 SPU 行及其下的 SKU 刊登明细列表(ebayPublishSku)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/ebayProductController/findEbayAutopublishSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-publish-detail-by-shopname-ebay-product-controller",
          "description": "按店铺名查询eBay刊登统计数：eBay自动刊登管理页左侧店铺列表，展开某店铺时按店铺名查询该店铺下四类刊登状态的计数（等待刊登 waitnum、刊登成功 successnum、刊登失败 failnum、放弃刊登 giveupnum），回填到左侧店铺树对应徽标。删除SPU后也会重新调用刷新该店铺计数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/ebayProductController/findPublishDetailByShopname",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-publish-shop-ebay-product-controller",
          "description": "查询当前用户刊登店铺列表（侧边栏）：eBay 自动刊登页（eabyAutPublished.html）打开后约 500ms 自动调用，无入参（用户身份由会话/Cookie 推导）。返回当前用户头像、累计刊登成功数及其名下店铺列表（含各店铺累计刊登成功数）。前端用于渲染左侧店铺导航栏，并填充顶部“请选择店铺”下拉。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/ebayProductController/findPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shop-param-by-shopname-ebay-product-controller",
          "description": "查询店铺自动刊登参数(按店铺名)：在 eBay 自动刊登页面点击某店铺的设置齿轮(showModal)时调用，按店铺名 shopname 查询该店铺已保存的 SMT/eBay 自动刊登参数(站点、目标毛利率、库存、SPK/非SPK备货时长、屏蔽国家、刊登间隔、上架时间、每日上限、是否全托管)，用于回填设置自动刊登参数弹窗。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/ebayProductController/findShopParamByShopname",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-ez-buy-publish",
          "description": "Ezbuy刊登列表查询：Ezbuy刊登页列表分页查询。按店铺、刊登人、刊登状态、刊登时间区间筛选，返回刊登记录列表（含 SPU、标题、分类、店铺、刊登人、状态、生成/刊登时间及子 SKU 明细）。同一接口被「刊登中」(search) 与「刊登完毕」(search2) 两个 Tab 复用。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/ezBuyProductPublish/listEzBuyPublish",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-ez-buy-shop",
          "description": "EzBuy刊登店铺列表查询：进入EzBuy刊登管理页时调用，获取当前可选的EzBuy刊登店铺列表，用于「选择刊登店铺」筛选下拉框（#shopName）与「生成下架商品信息」弹窗的店铺选择框（#selectShop）。无请求参数，返回店铺数组，前端仅取店铺名 shopName 渲染为下拉选项。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/ezBuyProductPublish/listEzBuyShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-batch-list-fba",
          "description": "FBA批次上架库存明细查询(查看全部)：FBA库存报表页点击某SKU“查看全部”时，按 SKU+店铺 分页查询该SKU各批次的上架库存明细（批次描述、FBA对应批次上架库存数、接收日期），并在弹窗表格中展示，支持分页。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/fbaProduct/batchListFba",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-check-tracking-list-fba",
          "description": "FBA货件校验（checkTrackingListFba）：在出库进度/状态报表页的FBA出库校验弹窗中，输入FBA货件编号、头程运费、包裹称重(kg)、实际发货时间、店铺后点击校验，对货件做出库校验，返回该货件下每个FNSKU的马帮商品编号、本次出库量、重量、头程运费及异常信息列表(含捆绑商品标记)，结果用于 saveTrackingListFba 保存。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/fbaProduct/checkTrackingListFba",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-fba-inventory-kx",
          "description": "FBA库息（库存信息）查询：FBA产品状态报表中，点击某行 SKU 的“库息”按钮时，按 bindId/skuValue + 店铺名称分页查询该 SKU 的库息（库存周转）历史明细，返回时间、店铺、SKU、成本价、库存数、日均销量(DMS)、库息天数、创建/操作时间等列，并据 count/countPage 渲染分页。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/fbaProduct/fbaInventoryKx",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-tracking-list-fba-details",
          "description": "FBA跟踪单-货件SKU明细查询：FBA跟踪单报表中，点击某条 FBA 货件行的“点击看sku详情”时触发：以货件编号(groupId)为主键，结合时间类型/起止时间/FBA货件状态/SKU 条件，查询该货件下各 SKU 的发货数、接收数、损耗、重量、头程运费、状态等明细，渲染到展开的子表格。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/fbaProduct/trackingListFbaDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-feed-back-by-spu",
          "description": "商品(SPU)差评(用户反馈)查询：在「SMT自动刊登」列表点击某 SPU 的「差评」按钮时，按 SPU 分页查询该商品在各平台(ebay/wish/aliexpress)的用户差评反馈列表，并返回各平台差评数量汇总，弹窗展示差评店铺、平台、内容、时间。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/feedback/getFeedBackBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-fyndiq-publish",
          "description": "Fyndiq刊登列表查询：Fyndiq刊登管理页列表分页查询：按店铺、刊登人、刊登状态、刊登时间区间筛选，分页返回 SPU 行及其下挂 skuList 子表与退款信息。页面三个 Tab（等待刊登/刊登中/刊登完毕）及分页回调共用同一接口，仅入参不同。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/fyndiqProductPublish/listFyndiqPublish",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-fyndiq-shop",
          "description": "Fyndiq刊登店铺列表查询：查询当前用户可用的 Fyndiq 刊登店铺列表，用于 Fyndiq 刊登页面顶部“选择刊登店铺”下拉框的选项填充。无请求参数，返回店铺数组，前端用 art-template 模板 shopnmeTemplate 渲染为 option，仅使用 shopName 字段。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/fyndiqProductPublish/listFyndiqShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-check-tracking-listhwc",
          "description": "海外仓跟踪单校验(新增前出库明细校验)：新增真实海外仓跟踪单弹窗点击校验时调用，按货件编号(groupId)与海外仓核验本次出库明细，返回每条FNSKU/马帮商品的出库量、重量、头程运费及异常信息；校验通过的obj被前端缓存供保存接口saveTrackingListHwc使用。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/hwcProduct/checkTrackingListhwc",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-export-hwc-list",
          "description": "真实海外仓跟踪单-导出：「真实海外仓跟踪单」页面的导出接口。以与列表查询(trackingListHwcList)完全相同的筛选条件异步生成 Excel 导出文件。前端 myAxios.post(..., {download: true}) 触发浏览器下载并提示'已创建下载'。响应为 Excel 文件流，下表 response 为导出文件数据列(与列表行字段同源)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/hwcProduct/exportHwcList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-hwc-inventory-kx",
          "description": "海外仓产品库息(明细)查询：海外仓产品报表(notFbareport)中，点击某商品的“昨日库息”数值时弹出“库息明细”弹窗，按 SKU(或捆绑商品 bindId)+海外仓分页查询该商品逐条库息记录(时间、单个成本、库存、日均销量、库息、创建/操作时间)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/hwcProduct/HwcInventoryKx",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-tracking-list-hwc-details",
          "description": "真实海外仓跟踪单-SKU明细查询：真实海外仓(HWC)跟踪单列表中，点击某条货件行的“点击看sku详情”展开按钮时，按货件编号(groupId)+时间类型/区间+货件状态+SKU 查询该货件下的逐 SKU 明细(发货/接收数量、金额、损耗、重量、头程运费、货件状态等)，用于子表 sontableTemplate 渲染。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/hwcProduct/trackingListHwcDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-tracking-list-hwc-list",
          "description": "真实海外仓跟踪单列表查询：真实海外仓(HWC)跟踪单分页列表查询：按时间类型/时间区间、货件编号、货件状态、海外仓、SKU、酋长/店长等条件筛选，返回跟踪单汇总列表(货件、发/收数量、损耗、金额、运费、状态等)及总条数与总页数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/hwcProduct/trackingListHwcList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-page-spu",
          "description": "图片转文本侵权检测SPU分页查询：按SPU/图片链接/文本/类目/侵权词/钓鱼词/开发员/美工/审核员/查询时间区间等条件，分页查询图片转文本侵权/钓鱼词检测结果列表，返回每条SPU的图片、文本、类目、侵权词、钓鱼词、相关人员及检测时间。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/image-to-text/spu/page",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-export-distribution",
          "description": "印尼分销订单外部仓导出(越域网/赛盈网)：在采购看板自建商品(分销)页勾选订单后，按导出渠道(越域网flag=1/赛盈网flag=0)将所选订单导出为Excel。请求体提交所选订单号集合orderNo及渠道标识flag，后端返回Excel二进制流(.xlsx)，前端以Blob接收并触发浏览器下载。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/indonesia/exportDistribution",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-poor-sku-list",
          "description": "国内不良库存SKU列表查询：国内/海外仓不良库存SKU分页查询：按SKU、海外仓类型、直邮类型、销量级别、产品状态、开发员(开发组员)、采购员等条件筛选，返回不良库存SKU列表及SKU/SPU总数与各项汇总。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/indonesia/poorSkuList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-poor-sku-pie-list",
          "description": "不良库存饼图(末次采购/滞销)分析数据查询：根据当前页表格的 SKU 列表，批量查询每个 SKU 末次入库成功采购单往前推 30/60/90 天的入库采购分析明细（备货人/数量/金额/入库时间）。前端用其计算末次采购分析(备货人、备货数量、备货金额、距今天数)及不良库存分析(占比最高备货人、占比)，并在查看分析表抽屉中渲染 30/60/90 天饼图。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/indonesia/poorSkuPieList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-rule-list",
          "description": "备货人(规则)下拉列表查询：为「国内库存(不良库存)分析」页面提供「末次采购备货人」「滞销分析占比最高备货人」下拉框选项数据源，返回规则/备货人名称字符串数组。前端拼接固定项「公司统一备货」「无采购记录」及员工名后作为下拉选项。无请求参数(空 body POST)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/indonesia/ruleList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-export-registration-list",
          "description": "侵权登记列表导出：侵权(showslog/tort)登记列表按平台、问题类型、店铺/店长/销售大酋长、开发员/开发大酋长、SPU、提交时间区间、SPU提交售卖时间区间、扣分数区间、禁售政策、触发产品等多维条件，导出侵权登记记录 Excel 文件。以 XMLHttpRequest(responseType=blob) 发起，返回二进制文件流，文件名由 content-disposition 响应头携带。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/infringement/exportRegistrationList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-registration-list",
          "description": "侵权登记列表查询：侵权/违规登记记录的多维度分页查询：支持按问题类型、平台、提交时间区间、SPU提交售卖时间区间、SPU、开发员/开发大酋长、店长/销售大酋长、店铺、禁售政策、扣分区间、触发产品等条件筛选并排序，返回侵权登记列表及总条数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/infringement/getRegistrationList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-emp-id-by-emp-name",
          "description": "通过登录人查出其管理的员工ID：以当前登录人为入口，查询其所管理的下级员工ID集合（后端 querySubManagerId）。前端示例页 getlogisticsType()(@deprecated) 复用其 obj 数组渲染物流类型候选项填充 #logisticsType。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/joomController/getEmpIdByEmpName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-lazada-autopublish-spu",
          "description": "Lazada自动刊登SPU列表查询：Lazada自动刊登管理页的SPU分页查询：按搜索类型(SPU/itemid)、店铺、在线状态、产品状态、销量级别、创建/刊登时间区间、差价等条件分页查询待刊登/已刊登SPU列表，返回每个SPU及其下挂SKU列表(价格、库存、刊登状态等)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaAutopublishController/findLazadaAutopublishSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-publish-detail-by-shopname-lazada-autopublish-controller",
          "description": "店铺刊登明细统计查询（按店铺名）：Lazada 自动刊登页面，左侧店铺列表点击展开某店铺时，按店铺名查询该店铺的刊登明细统计：等待刊登数、刊登成功数、刊登失败数、放弃刊登数，回填到对应店铺节点的徽标。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaAutopublishController/findPublishDetailByShopname",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-publish-shop-lazada-autopublish-controller",
          "description": "查询Lazada自动刊登店铺列表(含汇总数)：Lazada自动刊登页加载时调用，无入参。返回当前用户头像、刊登成功/等待汇总数，以及该用户名下的刊登店铺列表(每店含店铺名与刊登成功数)，用于渲染左侧店铺栏与顶部店铺筛选下拉。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaAutopublishController/findPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shop-param-by-shopname-lazada-autopublish-controller",
          "description": "按店铺名查询店铺自动刊登参数：在 Lazada 自动刊登页面点击某店铺设置/编辑时调用，依据店铺名(shopname)查询该店铺已保存的自动刊登参数(分类、利润率、降价率、库存、包邮、刊登时间/间隔、是否重点店铺、是否最低价限制、是否自动、是否信任及创建信息)，用于回显到刊登参数弹窗 #pubModal。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaAutopublishController/findShopParamByShopname",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-lazada-disabled-confirm",
          "description": "Lazada下架确认列表查询：Lazada批量下架管理页的下架任务列表查询：按店铺、创建时间区间、在线编号、SPU、下架状态分页筛选，返回下架任务列表(商品图/SKU/SPU/店铺/负责人/在线编号/近30天销量/创建人/创建时间/下架状态/刊登时间/下架时间/失败原因)及总数、总页数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaExportController/findLazadaDisabledConfirm",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-lazada-itemid",
          "description": "解析上传文件获取itemId：Lazada批量下架页「生成下架商品信息」弹窗中，用户选择本地文件并点击「上传」按钮后，以 multipart/form-data 上传文件，后端解析文件内容匹配出对应的 itemId 集合并返回（JSON字符串数组），前端解析后用逗号拼接回填到 itemId 文本框。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaExportController/findLazadaItemid",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-lazada-publish-confirm",
          "description": "Lazada批量改标题-修改确认列表查询：Lazada批量修改标题页面查询修改任务列表：支持按站点、刊登店铺、修改状态、修改人、SPU/SKU模糊关键词筛选，分页返回修改任务行（原标题/新标题/店铺/站点/SKU/itemID/状态/创建与修改人时间）。descr 区分修改中（空）与修改完毕（修改完成）两个 Tab。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaExportController/findLazadaPublishConfirm",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-lazada-shop",
          "description": "查询Lazada店铺列表：Lazada批量下架页面初始化时调用，无请求参数，返回当前用户可见的Lazada店铺名称列表（字符串数组），用于渲染顶部筛选店铺多选框与生成下架商品信息模态框店铺多选框。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaExportController/findLazadaShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-manage-employee-names",
          "description": "查询修改人(管理员工)姓名列表：Lazada批量修改标题页面初始化时调用，无入参，返回当前可选「修改人」(管理员工姓名)字符串数组，前端用 art-template(modifierTemplate) 渲染到「选择修改人」下拉框(#modifier)，供按修改人筛选 Lazada 改标题任务列表。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaExportController/findManageEmployeeNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-manage-shop",
          "description": "查询可管理刊登店铺列表：Lazada 批量修改标题页面初始化时调用，拉取当前用户可见/可管理的刊登店铺名称列表，用于渲染「选择刊登店铺」下拉框(#shopName)的选项。无请求参数，前端发起空体 POST，店铺范围由后端依据登录用户上下文确定。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaExportController/findManageShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-publish-detail-info",
          "description": "Lazada刊登详情统计(getPublishDetailInfo)：进入Lazada刊登管理页时调用，获取当前用户/团队的刊登任务统计：待刊登、刊登中、昨日刊登成功/失败、今日刊登成功/失败六项指标，渲染到页面头部统计卡片。该接口无请求参数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaPublish/getPublishDetailInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-have-published-shop-lazada-publish",
          "description": "查询已刊登(新刊登)店铺列表：Lazada 批量刊登页面切换到“刊登完毕”Tab 时调用，查询当前用户可选的“新刊登店铺”列表，用于渲染 #PublishedShop 下拉框（art-template 模板 PublishedShopTemplate）。无请求参数，返回店铺名称集合，选中值作为 search2() 的 targetShops 参数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaPublish/listHavePublishedShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-product-by-listing-lazada-publish",
          "description": "Lazada批量刊登-按Listing查询商品列表：Lazada批量刊登页商品列表分页查询：按刊登状态、商品属性、店铺、刊登人、站点、spu备注关键词、刊登时间区间等条件分页返回待刊登/已刊登SPU列表及子SKU明细。等待刊登Tab由search()调用、刊登完毕Tab由search2()调用，复用同一接口。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaPublish/listProductByListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-publish-shop-lazada-publish",
          "description": "可刊登店铺列表查询(listPublishShop)：Lazada 批量刊登页面初始化时调用，获取当前用户可用于“生成 listing/刊登”的店铺列表，渲染到“请选择店铺”多选下拉框(#pubshop)。请求无业务参数(空 body POST)，响应 obj 为店铺数组，前端仅取店铺名 ebayShopName 作为下拉选项的 value 与显示文本。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaPublish/listPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-relisting-details-lazada-publish",
          "description": "Lazada Relisting失败信息详情列表查询：查询 Lazada 平台重新刊登(relisting)的失败信息详情：按 relisting 时间、店铺名称分页查询失败列表，返回每条 SPU 的平台、店铺、店铺负责人、源标题/源itemID、上架状态、销量、失败原因等，并返回总条数与总页数用于分页。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaPublish/listRelistingDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-relisting-results-lazada-publish",
          "description": "Lazada Relisting结果列表查询：查询Lazada平台重新刊登(relisting)结果列表：支持按店铺负责人、店铺、relisting时间区间筛选，分页返回各店铺当日relisting成功/失败数量、负责人、生成日期等汇总信息，用于lazada relisting列表页展示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaPublish/listRelistingResults",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-un-publish-shop",
          "description": "未刊登过店铺列表查询：查询当前用户在 Lazada 刊登场景下尚未刊登过的店铺列表，用于「等待刊登」筛选区「选择未刊登过店铺」下拉框(#shopName)的选项渲染。页面加载时自动调用，无请求参数；返回店铺ID与店铺名称列表。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/lazadaPublish/listUnPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-listing",
          "description": "爆款listing列表查询：爆款listing榜单分页查询：按平台、店铺、店铺负责人、总监/经理/主管/店长、店铺名、SPU、开发时间区间、发布时间区间、排序方式等条件筛选，返回 listing 行及分页汇总（total/totalPages）。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/listingController/findListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-platform-listing-controller",
          "description": "平台列表查询：查询平台基础数据列表，用于「爆款listing」页面顶部平台多选下拉框(platfromlist)的数据填充。无请求参数(空请求体)，返回平台数组，前端取 sequenceid 作为选项值、name 作为显示文本。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/listingController/findPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-reward-money",
          "description": "爆款listing奖励排行榜查询：商品中心“爆款listing”页面「排行榜」标签页查询接口：无请求参数，后端返回各店铺负责人(shopPrincipal)的爆款listing数量(listingNum)排行榜列表，前端按返回顺序生成名次、姓名、listing数三列展示；奖励金额(rewardMoney)字段在模板中已注释、当前不展示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/listingController/findRewardMoney",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shopmanager",
          "description": "店铺负责人(店长)下拉查询：爆款 listing 页面初始化时拉取店铺负责人(店长)下拉选项数据，用于店铺负责人筛选控件(#saleLeader)的选项渲染。该调用为无参的空 POST，后端返回全部可选店铺负责人列表。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/listingController/findShopmanager",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shop-listing-controller",
          "description": "按平台查询店铺(findShop)：爆款listing页面('店铺'下拉联动)：根据所选平台(reserve11)查询该平台下的店铺列表，渲染到店铺下拉框(#shopId)。当未选择平台时传空 reserve11，查询全部店铺。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/listingController/findShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-proposal-list",
          "description": "运营优化建议(SPU)列表查询：库存/今日必做看板「优化」(optimiz/重新检测)Tab 的列表分页查询：按店铺名称、平台、店长、处理状态、itemId 等条件分页查询命中运营策略的 SPU，返回每条 SPU 的图片/标题/订单量/PV-UV/加购收藏/转化率/毛利率/评价评分/推送处理时间/处理状态、问题诊断规则(rule)与优化策略动作列表(actionList)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/operateStrate/proposalList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-ozon-publish-export-excel",
          "description": "OZON自动刊登列表导出Excel：OZON推荐(自动)刊登列表页按当前搜索表单筛选条件导出符合条件的刊登SPU为Excel。请求体复用列表查询getParams()结果并追加分页;响应为二进制.xls文件流(responseType=blob),前端创建a标签触发下载,文件名为ozon自动刊登+时间戳.xls。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/ozonProductController/ozonPublishExportExcel",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-tort",
          "description": "图片关联侵权SKU搜索：商品侵权审核「关联SKU」环节调用：把待审核清单中的 SKU+图片分批(每批最多20条)提交，以图搜款返回图片相似的关联商品列表(含相似度评分、是否侵权标记)，前端按 sku 去重后追加到审核弹窗 list3，供审核人勾选一并提交审核。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/picture/search/product/tort",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-product-claim-list",
          "description": "独立站产品认领列表查询：独立站产品认领页列表查询：按 SPU、认领人、提交销售时间区间、测款状态分页查询已认领去广告测款的 SPU 列表，返回 SPU 基本信息及各认领人操作（认领/去广告）记录。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productClaim/productClaimList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-query-oper-list",
          "description": "认领人下拉列表查询：进入「独立站产品认领」页面时加载，返回可作为认领人筛选项的员工列表，用于渲染顶部「认领人」多选下拉框(#queryOperList)。该请求无任何请求参数(空 body)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productClaim/queryOperList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-clearance",
          "description": "国内清仓商品管理-清仓商品列表查询：国内清仓商品管理页面列表查询接口：按清仓状态(草稿中/等待清仓/清仓中/清仓完成)分页查询清仓商品，支持按SKU、子目录、排序方式、进度(移仓/拍照/刊登)筛选，返回清仓商品列表及总数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productClearance/clearance",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-batch-query-product-costprice",
          "description": "批量查询商品(海外仓SKU)成本价：在“海外仓sku成本”弹窗中，用户在文本域按“sku,成本价”逐行录入后失焦触发，前端把每行解析为 {sku, costprice} 数组放入 list 批量提交后端，后端返回每个SKU的原成本价(oldCostprice)与现成本价(newCostprice)用于表格回显，供用户修改后再调用 batchUpdateProductCostprice 保存。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/batchQueryProductCostprice",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-check-spu-is-live",
          "description": "校验SPU是否存在：SKU详情页(SKUdetails2)中，用户在SPU输入框失焦(onblur)时触发，把SPU值通过查询参数spu提交后端，校验该SPU是否已存在。obj=true表示已存在；obj=false表示不存在，前端弹出确认框走addSpu创建流程。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/checkSpuIsLive",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-allleave-message",
          "description": "商品咨询留言列表查询：商品咨询页按提问人/回复人/开发员、提问时间区间分页查询商品(SPU/SKU)留言：返回主留言(提问)及其子留言(回复)两级结构，前端渲染为表格并分页。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getALLLeaveMessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-competitor-spu",
          "description": "SPU竞品信息查询：根据SPU查询该商品的竞品信息列表，返回每个竞品的图片、链接、标题、物品所在地、销量、含运费售价等，渲染到SPU详情页「竞品信息」表格(#content5)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getCompetitorSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-country-sales-info",
          "description": "SKU国家销量统计查询：查询指定SKU近15天按国家维度的销量统计，用于SKU详情页 ECharts 横向柱状图「国家15天销量(单)」渲染。仅当商品 salesLevel 为超级爆款/爆A/爆B/旺A/旺B 时由 getProductInfoSku 成功回调触发调用。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getCountrySalesInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-is-sync-supply",
          "description": "查询SKU是否同步供应商标记：SKU详情页加载时查询当前SKU“是否同步供应商”的开关状态，用于回显页面右上角 #skuIsSync 复选框（勾选=已同步）。返回 obj 为同步标记：1=同步、0=不同步、null=未设置（未设置时隐藏开关区域）。与写接口 /erpProduct/erpProduct/productDetails/updateIsSyncSupply 成对使用。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getIsSyncSupply",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-leave-message-sku",
          "description": "获取SKU留言列表：商品详情「全部留言」页加载指定SKU的留言列表：按SKU(及SPU)查询全部留言，返回每条留言的留言人/时间/内容/头像、附带的图片与文件附件，以及该留言下的子留言(回复)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getLeaveMessageSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-leave-message-spu",
          "description": "SPU留言查询：SPU详情页加载时查询该SPU下的全部留言（含子回复）列表，渲染到\"SPU 留言\"卡片。返回留言人、头像、留言内容、留言时间、留言目标(SKU/SPU)、留言类型及嵌套子留言。当前用户头像通过顶层 content 字段返回。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getLeaveMessageSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-manufacture-sku",
          "description": "SKU供应商信息查询(getManufactureSku)：SKU详情页加载该SKU的供应商(含主供应商与两个备选供应商)信息：供应商名称/ID、采购价、起批量、采购平台、平台链接、1688/淘宝/天猫备选供应商链接、旺旺号、商品图片等，用于渲染供应商表格(content2/contentTemplate2)。前端对返回数组补位至3条。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getManufactureSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-manufacture-spu",
          "description": "商品(SPU)供应商信息查询：根据 SPU 查询该商品在 1688 上匹配的全部供应商信息，返回供应商旺旺、供货商品(SKU/图片/1688商品名)、商品属性、是否自动采购、捆绑数量、起批量、商品价格、含运费报价、供应商状态、匹配人/匹配时间等，用于 SPU 详情页「供应商信息」表格渲染。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getManufactureSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-optimal-purchase",
          "description": "最优采购/预计到货信息查询：在店铺爆款监控列表中点击某行预计到货/日志入口时，按该行 ERP SKU 查询其最优采购方案下采购发货、采购到货、仓库签收等各环节的开始/完成/预警时间及整体预计到货时间，在预计到货弹窗以步骤表展示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getOptimalPurchase",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-order-sku",
          "description": "产品详情-销售单(订单)列表查询(getOrderSku)：移动端马帮ERP产品详情页加载时按SKU查询该商品关联的销售单(订单)列表，前端取data.obj，前3条渲染到默认销售单信息区，其余在点击查看更多后展开，逐条展示订单号/状态/英文标题/售价/数量/总收入/总毛利/国家/成交账号/店铺管理员/下单时间。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getOrderSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-package-type",
          "description": "获取包装方式下拉选项：SKU 详情页初始化时调用，拉取全部包装方式字典项（ID + 名称），渲染到 #packageType 下拉框。无任何请求参数，返回包装方式列表，前端用 art-template 遍历生成 <option>；packageTypeId == 0 的项作为占位项并置为 disabled。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getPackageType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-packing",
          "description": "包材下拉列表查询：查询全部可选包材(包装材料)列表，用于 SKU 详情页\"包材\"下拉框(#getPackingContent)的选项渲染。前端通过 art-template getPackingTemplate 把返回的 obj 数组渲染为 <option value=\"包材ID\">包材名称</option>。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getPacking",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-platform-sales-info",
          "description": "SKU平台销量查询(平台15天销量)：SKU详情页查询该SKU各销售平台近15天销量，返回 平台名称 + 平台销量 列表，前端用 ECharts 横向柱状图渲染「平台15天销量(单)」。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getPlatformSalesInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-attribute",
          "description": "获取商品(SKU)属性列表：查询全部商品(SKU)属性，供「商品导出新建」页「SKU属性」多选下拉框作为可选项数据源。无请求参数，固定返回属性集合，前端通过 art-template 渲染为 <option>。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getProductAttribute",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-extend-sku",
          "description": "SKU降本(成本扩展)记录查询：SKU详情页加载“降本(成本扩展)”模块时调用：按 URL 中的 SKU 查询该 SKU 的降本谈价记录列表（降本前价/目标价/谈妥价、供应商、捆绑数量、起批量、降本人、修改/清除信息、议价图片等），并据 isShow 控制“编辑成本”按钮显隐，回填目标价/供应商/现价/起订量到编辑表单，列表通过 art-template contentTemplate3 渲染。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getProductExtendSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-info-sku",
          "description": "商品详情-按SKU查询商品基本信息：移动端「产品详情」页加载时，按 URL 上的 SKU 查询该商品的基本信息（名称、SPU/SKU、售价、售卖状态/等级、销量、毛利率/退款率、重量、库存、颜色尺码、包装、仓库仓位、开发员/采购员、申报名、备注等），返回数组(前端取第 0 个元素)渲染基本信息卡片。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getProductInfoSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-log-spu-or-sku",
          "description": "SPU/SKU 操作日志查询：根据 SPU 分页（滚动加载）查询该商品 SPU 及其下 SKU 的操作日志列表，返回操作人、操作时间、关联SKU、操作内容，前端在 SPU 详情页右侧操作日志栏渲染，并通过 IntersectionObserver 触底递增 limitNum 加载更多。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getProductLogSpuOrSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-sku",
          "description": "SPU下SKU信息查询：SPU 详情页按 SPU 查询该 SPU 下全部 SKU 列表，返回每个 SKU 的图片、名称、库存/待发货、供应商、商品属性、销量等级、颜色尺寸、含运费成本、新品扶持期价格与剩余天数、毛净重、包装尺寸、近7/30/90天销量、开发员与创建时间等，用于渲染「SKU 信息」表格。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getProductSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-task-info-sku",
          "description": "SKU任务信息查询：SKU详情页底部「任务」模块加载：按SKU查询该商品关联的任务工单记录，返回任务发起人/执行人/任务简介/生成时间/任务状态列表，渲染为任务表格(#taskInfoSku)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getProductTaskInfoSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-tort",
          "description": "商品SPU侵权信息查询：根据商品 SPU 与平台(固定 Walmart)查询该商品的侵权提示信息，前端将返回的 content 文本以告警条形式展示在限价/侵权提示组件中，用于刊登前提醒卖家避免侵权下架风险。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getProductTort",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-publish-info-sku-new",
          "description": "SKU刊登信息查询(近30天)：根据SKU查询该商品近30天已刊登的数据排名(图片、刊登标题、销量、站点/发货地、售价、店铺、平台SKU、大酋长/客户经理、店铺类型/运营状态、刊登日期等),并返回当前用户名下未刊登该商品的店铺及负责人。支持是否全公司、低分筛选、仅白名单店铺、仅白名单SKU等开关。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getPublishInfoSkuNew",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-publish-info-spu-new",
          "description": "SPU刊登信息查询(新)：SPU详情页「刊登信息」面板查询：传入SPU与白名单/低分等筛选开关，返回该SPU在各平台店铺的刊登明细列表(图片、标题、销量、售价、店铺、负责人、平台SPU、刊登日期等)，以及当前用户名下尚未刊登该SPU的店铺列表；同时返回数据更新时间。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getPublishInfoSpuNew",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-purchaseabnormal",
          "description": "SKU采购异常统计查询：SKU详情页加载时调用，查询该SKU近60天的采购收货异常统计：少发、多发、漏发、错发、正常各类型的数量及其占总数比例，渲染到“查看采购单”旁的标签区(#infoContent)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getPurchaseabnormal",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-purchase-bysku",
          "description": "SKU采购异常消息查询：SKU详情页加载「采购异常」(searchAwait) 面板时调用，按 SKU 查询该商品的采购异常消息列表（异常状态、消息类型、消息详情、反馈、开发员/采购员、任务推送与截止日期等），用于渲染 awaitTempalte 表格。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getPurchaseBysku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-purchase-sku2",
          "description": "SKU采购在途运单查询(getPurchaseSku2)：SPU管理列表中鼠标悬停某SKU在途小窗时触发，按SKU查询该SKU的采购在途运单明细（运单号、在途数量、到货状态、采购跟进日志、最新物流轨迹），渲染到 popover 弹窗。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getPurchaseSku2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-purchase-sku",
          "description": "SKU详情-采购记录查询(getPurchaseSku)：按SKU查询该SKU的全部采购记录，返回每条采购单的仓库、采购批次/组、供应商及等级、运单号与物流轨迹、购买/到货数量、采购价/运费、采购备注、采购员、采购/入库时间、采购状态/退款原因、跟单日志等。SKU详情页采购记录面板(content4)渲染数据源；按部门(content)做供应商/价格脱敏。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getPurchaseSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-site-by-platform",
          "description": "按平台查询刊登站点(getSiteByPlatform)：根据所选主销平台查询该平台下已刊登过的站点列表。前端在平台下拉框 #kingPlatform 的 onchange 事件中调用，返回的站点字符串数组用于渲染‘刊登过的站点’下拉框 #siteslesct2（art-template 模板 sitemTempalte），供 SKU 列表查询按 site 参数过滤。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getSiteByPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-sku-images",
          "description": "获取SKU图片列表：根据 SKU 查询该商品的图片列表，返回每张图片的URL与图片记录序号。前端用于 SKU 详情页主图轮播展示(exzoom)与编辑图片弹窗(可删除/设为主图)。前端在拿到 imageUrl 后会把图床域名 http://instudio.gnway.cc 替换为 http://www.instudio.me 再渲染。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getSkuImages",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-sku-mapping-by-sku-and-warehouse",
          "description": "按SKU与海外仓查询海外仓映射关系：SKU详情页「配置海外仓映射关系」弹窗中，用户选择某个海外仓类型后调用本接口，根据当前 SKU + 海外仓类型查询该映射记录（直邮SKU/海外仓SKU/分销平台SKU/中转仓），用于回填编辑表单。返回的整条记录同时作为后续 updateSkuMapping 的原始值(orginInfo)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getSkuMappingBySkuAndWarehouse",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-spu-country-sales-info-new",
          "description": "SPU国家30天销量查询(New)：按SPU与月份偏移量查询该SPU近30天分国家的销量，返回各国家及其销量列表，前端用于\"国家30天销量(单)\"横向条形图(echarts)展示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getSpuCountrySalesInfoNew",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-spu-country-sales-info",
          "description": "SPU国家销量信息查询（国家15天销量）：按 SPU 查询该商品近15天分国家的销量数据，前端用 ECharts 横向柱状图渲染「国家15天销量(单)」。返回为国家销量数组(country/countrySale)，按销量倒序展示；返回 obj 为 null 时隐藏图表容器 #contury12，并把 res.obj 写入 sessionStorage.resObjOne。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getSpuCountrySalesInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-spu-images",
          "description": "获取SPU图片列表：在新增SPU页面，按SPU编号查询该SPU下已存在的全部商品图片，返回图片URL与图片记录ID列表，前端渲染为图片墙；新增/删除图片及组装属性成功后回调刷新。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getSpuImages",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-spu-platform-sales-info",
          "description": "SPU平台30天销量信息查询：商品详情「spu销售量趋势图」页面右侧「平台30天销量(单)」柱状图数据源：按 SPU 查询该商品近30天(可按 month 月份偏移)各平台/店铺的销量(订单数)，前端用 ECharts 横向柱状图渲染。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getSpuPlatformSalesInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-standard-product-unit",
          "description": "获取标准商品单元(SPU详情)：SPU详情页打开时按 SPU 编号加载该 SPU 的标准商品单元信息：中文/英文标题、英文关键词、英文描述、开发性质、分类、禁售平台、侵权与禁售站点、专利国家、中英文申报名、品牌、采购链接、可公开店铺、视频/动图链接、竞品链接、公司归属等，用于详情页头部渲染及编辑SPU模态框回填。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getStandardProductUnit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-xn-sku-savenum",
          "description": "获取SKU特供虚拟仓库存设置：SKU详情页加载时查询当前SKU的「特供虚拟仓」设置：是否开启特供虚拟仓、保底库存值，用于回显复选框与保底库存输入框；无权限时返回字符串\"没有权限\"并隐藏整块设置区。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/getXnSkuSavenum",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-listing-country-platform-sale-info",
          "description": "Listing 国家/平台销量分布查询：店铺热卖商品监控页 listing 悬浮图表数据源：按 itemId/平台/店铺/平台SPU 查询该 listing 的销量分布，返回国家维度与平台维度两组（标题数组+销量数组），前端用 ECharts 渲染上下两个横向柱状图。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/listingCountryPlatformSaleInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-picture-search-product-by-url",
          "description": "以图搜款(按图片URL搜索相似SKU)：在 SPU 管理列表商品图片上点击「搜索相似SKU」放大镜图标，将该商品主图URL提交后端做以图搜图，返回匹配到的相似商品SKU集合；前端把结果写入 localStorage(arrSkus)，再跳转 SPU 管理页(flag=6)，以批量SKU(batchSku)方式回填搜索框并重新查询，从而展示所有相似款。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/pictureSearchProductByUrl",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-page-product-must-task",
          "description": "清仓/停产待办任务分页查询：成品看板「清仓申请」标签页加载/翻页时调用，按状态类型(statusType)分页查询商品清仓/停产待办任务，返回任务总数与任务行列表(SKU、商品名、销量级别、库存、推送人/时间、审核人等)。前端以 res.obj.items[0] 作为表格行渲染，并支持对单条任务进行同意/拒绝处理。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/productMustTask/page",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-sku-country-platform-sale-info",
          "description": "SKU国家/平台/刊登销量分布查询：SKU销量统计弹窗(sales-chart-sku 自定义组件)右侧三张柱状图的数据源：按指定SKU返回该SKU的平台销量分布(platform)、国家销量分布(country)、刊登量分布(publish)三组数据，每组含分类名称数组(title)与对应销量数组(saleNum)，前端分别渲染到右下、右上、中间三个 ECharts 柱状图。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/skuCountryPlatformSaleInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-warehouse-type",
          "description": "海外仓类型下拉查询：爆款商品监控页(shopHotProducts2)初始化「请选择海外仓类型」下拉框时调用，返回全部海外仓类型(ID+名称)，前端用 art-template warehouseTypeTemplate 渲染为 option 后挂到 #warehouse 并初始化 ySelect。无请求参数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productDetails/warehouseType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-manufac-refund",
          "description": "供应商/开发员退货排行查询（退货排行榜）：降本排行榜页面「退货排行」标签页数据查询：按开始/结束时间区间统计各人员（开发员/采购员）的退款情况，返回按退款金额排行的人员列表（姓名、统计项金额、累计退款金额）。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productExtend/getManufacRefund",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-oper-reduce-price",
          "description": "降本英雄榜(开发员降本汇总查询)：降本排行榜页「降本英雄榜」标签的数据查询：按时间区间统计各开发员(或采购组)在该期间内的降本明细，返回动态列头(title)与对应数据行(list)，前端以表头字段名 name 动态从每行取值渲染等级榜单。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productExtend/getOperReducePrice",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-reduce-price",
          "description": "降本SKU榜查询：降本排行榜页「降本SKU榜」分页查询：按SKU编号、开发员、采购员筛选，返回SKU降本明细（开发员/采购组、图片、产品名、降本持续天数、30天销量、当前采购价、累计降本金额、每周降本金额）及总数、总页数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productExtend/getProductReducePrice",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-forbid-sku-list",
          "description": "拦截SKU列表查询(forbidSkuList)：eBay 批量刊登页「拦截SKU」弹框的分页列表查询。打开拦截SKU弹框、翻页、以及按 SKU 模糊搜索均调用本接口，返回被拦截 SKU 列表(SKU编号/拦截站点范围/提交人/提交时间)及分页汇总。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productPublish/forbidSkuList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-product-by-listing-product-publish",
          "description": "eBay刊登Listing列表查询：eBay批量刊登页按刊登状态(等待刊登/刊登完毕)分页查询待刊登/已刊登的 Listing 列表，可按属性类型(单/多属性)、店铺过滤，返回 SPU 行及其下 SKU(ebayPublishSkuVo)明细、价格/毛利率/发货地/刊登店铺/刊登状态/刊登结果等字段。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productPublish/listProductByListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-publish-shop-product-publish",
          "description": "查询未刊登过的eBay店铺列表：eBay批量刊登页面初始化时调用，获取当前用户可用于刊登的eBay店铺列表，返回店铺ID、店铺名称及大额/小额Paypal账号，用于渲染选择未刊登过店铺下拉框与请选择您要刊登店铺下拉框。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productPublish/listPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-query-employee-id",
          "description": "查询下属管理员ID(刊登人)：eBay批量刊登页用于获取当前登录用户的下属员工/管理员ID集合，结果写入 sessionStorage(subManngerIds) 供后续 search() 刊登列表查询作为数据权限过滤条件。请求体为空(无入参)，身份信息由登录态(Cookie/Session)隐式传递。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productPublish/queryEmployeeId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-query-shop-bean-by-sale-leader",
          "description": "按店铺负责人查询店铺列表(queryShopBeanBySaleLeader)：Lazada relisting 列表页中，当用户在“店铺负责人”下拉框选择某负责人时触发，按所选负责人的员工ID查询其名下店铺集合，返回店铺列表用于渲染“店铺”下拉框。负责人为空表示查询全部。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productPublish/queryShopBeanBySaleLeader",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shopee-category",
          "description": "Shopee各站点类目查询：按 SKU 或 SPU 分页查询商品在 Shopee 七个站点(ID印尼/SG新加坡/MY马来/TH泰国/PH菲律宾/TW台湾/VN越南)的类目分类与属性值，返回分页列表供页面表格渲染、修改与批量修改。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productReport/findShopeeCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-amazon-shop-by-id",
          "description": "根据店铺ID查询Amazon店铺信息：商品导出新建页选择 Amazon 店铺(下拉控件 #shopnames)后，按所选店铺 sid 查询该店铺详情，回填品牌名称(platformshopname)与店铺URL名(amazonurlname)到表单。店铺ID以 URL query 参数 shopid 传递，无请求体。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productReport/getAmazonShopById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-country",
          "description": "获取主要购买国家列表：商品导出创建页加载时调用，拉取可选的\"主要购买国家\"列表，用于渲染 #purchaseCountry 多选下拉框（最多支持10个国家）。无请求参数，返回国家名称集合。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/productReport/getCountry",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-check-product-illeagal",
          "description": "违规产品审核：违规产品登记表(registrationForm)「违规产品」页签中，总经办点击行内[审核]弹出审核模态框，选择审核结果(通过/驳回)并填写备注后提交。后端按 sequenceid 标记该违规记录审核状态与备注，仅返回 code/desc，前端据 code 弹窗提示并刷新列表。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/checkProductIlleagal",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-filter-for-bid-platform-id",
          "description": "过滤禁售平台下拉选项查询：SPU列表（商品管理）高级筛选区「过滤禁售」多选下拉框的数据源接口。页面初始化时无参调用，返回可供过滤的禁售平台选项列表（value 值 + 名称），用于渲染 el-select 多选项；用户选中的 value 集合最终以 forbidPlatformIdList 参数提交到 SPU 列表查询接口。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/filterForBidPlatformId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-all-country",
          "description": "查询全部主销国家(下拉选项)：商品SPU管理(管理版)筛选区初始化时调用，拉取全部主销国家选项列表，填充到 kingCountriesOptions，供主销国家多选下拉框渲染。无请求参数，返回国家选项数组(以 name 作为下拉项的 label 与 value)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/findAllCountry",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-platform-product",
          "description": "平台列表查询：查询全部平台列表，用于详情页筛选区平台下拉选择框的选项数据源。页面加载时调用一次，返回平台集合，前端以 sequenceid 作为选项值、name 作为选项显示文本。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/findPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shop-product",
          "description": "查询可公开店铺列表：SPU 详情页加载\"对外公开店铺(publiclyAvailableShops)\"下拉框时调用，返回可选店铺列表(店铺名称集合)，前端通过 art-template 模板 contentTemplate17 渲染为 <option> 选项。请求不携带任何参数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/findShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-spu-for-publish",
          "description": "查询待刊登SPU列表：ebay批量刊登页面加载时调用，查询当前用户已暂存/待刊登的SPU编号清单（无入参，按登录上下文查询），返回SPU字符串数组，前端用逗号拼接后回填到“ebay批量刊登”输入框(#batchsku)，供后续生成listing使用。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/findSpuForPublish",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-throw-info",
          "description": "泡货(抛货)信息查询：SPU/SKU 列表中某行的泡货图标(炸弹图标)鼠标悬停时触发，按 SKU 向后端查询该 SKU 的泡货/抛货(超体积/抛重)提示信息，后端直接返回一段 HTML 片段，前端用 .html() 写入提示气泡 .findeinfos 展示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/findThrowInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-add-position-name",
          "description": "根据部门名称获取岗位/人员名称：备货规则新增/编辑弹窗中，用户在「部门权限」下拉选择部门并触发 change 时调用。以部门名称为入参，返回该部门下可分配的岗位/人员名称集合，前端将返回的 obj 赋给 state.dialogOptions.stockUpCheckEmp 作为人员权限相关选项数据。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getAddPositionName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-apply-for-stock-up-rule",
          "description": "判断是否显示申请备货按钮（getApplyForStockUpRule）：SKU 详情页初始化时调用：后端根据当前登录用户身份/权限及备货申请规则，返回是否允许发起备货申请。前端据返回的 success 布尔值决定显示或隐藏页面上的「申请备货」按钮(#applyBtn2)。请求不携带业务参数，用户身份由会话识别。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getApplyForStockUpRule",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-city",
          "description": "货源城市下拉选项查询：进入SPU管理筛选器时初始化加载「货源城市」下拉框选项，返回全部货源城市(含类型+城市名)列表，供前端 city 多选筛选控件渲染。无任何请求参数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getCity",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-commissioner-by-id",
          "description": "根据当前用户ID判断是否为专员：根据当前登录用户（由登录态/会话识别，无需前端显式传参）查询其是否为采购/库存专员，返回布尔型权限标志。仪表盘据此判断是否展示退款日报等总监级模块；SKU详情页据此判断备货申请金额≥1000时是否需要专员审批。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getCommissionerById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-emp-by-dep-list",
          "description": "获取部门员工列表(提问人下拉)：进入商品咨询(留言)页面时自动调用，返回当前部门下的员工(提问人)姓名列表，前端用 art-template 渲染成\"提问人\"下拉框(#productName)的 <option> 选项。请求无任何业务参数(部门由后端依据登录态/默认部门判定)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getEmpByDepList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-emp-by-dep",
          "description": "按部门查询员工(下拉选项)：根据部门ID(depId)查询该部门下的全部员工，返回员工姓名字符串数组(obj)。前端用于采购员/开发员/销售员等人员下拉选择框的选项数据源(label=value=员工姓名)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getEmpByDep",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-high-refund",
          "description": "高退款率产品列表查询：违规产品登记页(registrationForm)第三个标签页「高退款率产品」的分页列表查询：按开发员、采购员、SKU、开发时间区间筛选，返回高退款率(异常编号固定 WG51)的 SKU 列表及毛利率/退款率/销量等汇总字段。由页面 search3()/getProductIllegal3() 调用。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getHighRefund",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-jing-li-zong-jian-ana-zong-jing-ban1",
          "description": "经理/总监/Ana/总经办权限校验：库存看板页加载时(created 钩子)发起的无参权限探测接口。后端依据当前会话用户身份判定其是否为经理/总监/Ana/总经办，返回对象 obj；前端仅以 data.obj 是否为真值判断有无权限，为真则置 accessible=true，从而让「停止spu推送」按钮可见。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getJingLiZongJianAnaZongJingBan1",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-jing-li-zong-jian",
          "description": "判断当前用户是否经理总监(getJingLiZongJian)：经理工作台(Dashboard)加载时调用，判断当前登录用户是否为「经理/总监」角色；返回结果 obj 为真时展示「经理考核(managerAssessment)」模块。无请求参数，纯身份/权限校验型接口。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getJingLiZongJian",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-order-spu",
          "description": "根据SPU查询销售单(订单)列表：SPU详情页「销售单信息」模块：按SPU查询该商品关联的全部订单明细，返回订单编号、商品标题、数量、售价、运费、毛利、重量、下单/发货时间、成交账号、国家、状态、店铺负责人等字段，前端用 art-template contentTemplate0 逐行渲染订单表格。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getOrderSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-primary-classification-dash-board",
          "description": "一级品类(看板品类下拉)查询：首页综合看板(common.html「销量趋势图」筛选区)加载时调用，拉取全部一级品类(分类)列表，用于渲染「品类」多选下拉框(#ulId3 / #platform3)。无请求参数，返回品类名称数组，前端仅取每项 name。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getPrimaryClassificationDashBoard",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-primary-classification",
          "description": "获取商品一级分类(SKU分类下拉)：进入「商品导出新建」页时($(document).ready)无条件调用，拉取商品一级分类列表，用 art-template 渲染 #contentTemplate3 填充「SKU分类」多选下拉(#skuCategory)的可选项。无请求参数，返回分类数组，每项以 name 同时作为下拉的 value 与显示文本。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getPrimaryClassification",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-illegal1",
          "description": "违规/举报产品列表查询：商品违规处理页(registrationForm)的列表查询接口：按 flag 区分两种业务视图——flag=1 违规产品列表(tab1)，flag=2 举报产品列表(tab2)。支持开发经理/开发员/采购员/创建人组长/适用平台/异常原因/SKU/开发时间区间等条件筛选，返回产品行列表及销量、毛利率、退款率、异常/举报信息、审核状态等字段。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getProductIllegal1",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-product-type",
          "description": "获取销量级别(产品类型)列表：移动端商品筛选/排序页加载时调用，返回“销量级别”枚举列表，用于动态渲染 salesTemplate 中的单选项(typeName 作展示文本、id 作提交值)。无请求参数，POST 空体调用。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getProductType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-purchase-limit-change-by-time",
          "description": "导出备货额度变更明细：库存/备货额度管理页「导出额度明细」按钮触发：按提交人、审核人、审核状态、额度状态、SKU、提交时间区间等条件，导出采购/备货额度变更明细。响应为二进制文件流(Excel)，前端以 blob 接收并通过 content-disposition 中的 fileName 生成下载链接。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getPurchaseLimitChangeByTime",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-reclassify-by-cate-ids",
          "description": "按父类目分页查询子类目(重新分类)：SPU列表页\"重新分类\"弹窗中，根据所选父目录(一级类目)分页查询其下子类目列表；支持按子类目名称关键词搜索。返回子类目(sequenceid+name)列表及分页信息(总条数、总页数)，前端渲染为可勾选的子类目复选框列表。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getReclassifyByCateIds",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-reclassify-by-ids",
          "description": "根据一级品类ID获取重分类(二级品类)列表：报表页品类下拉(#Category，数据来自一级品类 getPrimaryClassificationDashBoard)勾选一个或多个一级品类后 onchange=CategoryChange() 触发，将所选一级品类 sequenceid 数组以 JSON 数组 POST 给本接口，返回这些一级品类下的重分类(二级品类)名称列表，用于渲染二级品类下拉 #CategoryList。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getReclassifyByIds",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-reclassify",
          "description": "获取子分类(店长)列表：移动端搜索页\"店长\"下拉的联动查询接口：当用户在\"平台(父目录)\"复选框中勾选某一项时，以该项的 sequenceid 作为 primaryCateId，查询其下属的子分类(店长)列表，用于渲染\"店长\"复选框组，并把每项的 sequenceid 收集到 childAll 作为默认子目录候选。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getReclassify",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-risk-spu-white-shop-name",
          "description": "风险SPU白名单(保护)店铺名称查询：获取「风险产品保护(白名单)店铺」名称列表，用于 SPU 管理列表高级筛选中「风险产品保护店铺(whitePublishShop)」多选下拉框的选项。页面初始化时无参调用一次，返回值为店铺名称字符串数组，直接作为 el-select 的 label 与 value。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getRiskSpuWhiteShopName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-sale-num-by-sku1",
          "description": "按SKU查询备货额度统计(getSaleNumBySku1)：批量备货页中，按 SKU 与所选备货规则(stockUpID)查询该 SKU 当日全员已提交数量、平台申请备货最大值、平台申请备货额度，用于行内提示展示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getSaleNumBySku1",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-add-content",
          "description": "根据SKU/平台/备货内容获取可备货数量(getSaleNumBySku)：SKU详情页「申请备货」弹窗中，选择备货平台与备货内容后，按 SKU + 平台 + 备货内容 三个路径参数请求后端，返回该 SKU 在该平台下的最大可备货量(max)、可输入上限(other)、平台已备货量(platform)，用于回填输入框上限、placeholder 及前置校验。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getSaleNumBySku/{sku}/{platform}/{addContent}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-storage",
          "description": "仓库列表下拉查询：拉取仓库列表，用于 SKU 详情页“仓库列表”下拉框(#storageId)的选项渲染。无请求参数，POST 直接调用，返回仓库数组，前端仅使用每项的 name 作为 option 的 value 与显示文本。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getStorage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-white-shop-by-spu",
          "description": "SPU可刊登白名单店铺查询：商品SPU列表页中，鼠标悬浮“可刊登店铺”气泡时，按SPU查询该商品在各平台可刊登（白名单）的店铺列表，按平台分组展示平台名与店铺名。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getWhiteShopBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-zong-jian-zong-jing-ban",
          "description": "判断当前用户是否总监/总经办：进入SKU详情页采购数量表单时自动调用，判断当前登录用户是否为总监/总经办角色，返回布尔值写入 state.generalManager；为 true 时跳过库存价/采购数量上限等业务校验规则。无入参，登录身份取自后端会话/Token。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getZongJianZongJingBan",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-zong-jing-ban-cai-wu",
          "description": "获取总经办财务权限标识：无入参的权限校验接口。前端在供应商回款(returnOfItem)页面初始化时调用,根据返回的布尔值 obj 决定当前用户是否为「总经办财务」,进而控制「财务导入」「批量核销」「财务核销」「异常处理」等财务操作入口(ButtonAble)是否展示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getZongJingBanCaiWu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-zong-jing-ban",
          "description": "查询当前用户是否为总经办(总经理权限)：进入「事业部人员毛利方差图」页面时调用，判断当前登录人是否为总经办/总经理。返回布尔值赋给前端 state.isGeneralManager，与无总监、无经理筛选条件共同决定是否展示「看经理人均毛利/看经理总毛利」切换按钮。请求无任何业务参数(空 POST body)。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/getZongJingBan",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-product-info-for-export",
          "description": "商品(SPU)导出数据查询：SPU 管理列表点击导出时调用：把当前列表全部筛选条件(outdownparams，由 getParams() 构建)作为请求体提交，后端返回待导出的 ES 数据列表(esDataList) 及 ES 查询构造串(sourceBuilderString)；前端据 originalSku 拼成 skuStr，type=2 时再把 sourceBuilderString 回传给 saveProductReport 完成导出。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/productInfoForExport",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-product-info",
          "description": "商品(SKU)极致版列表查询：商品极致版页面 SKU 维度分页查询：按类目、11种关键词类型、售卖/销量/产品状态、开发员/采购员、开发时间区间、库存/销量/重量/成本区间、国家/平台、黑马、抽检/轻小件/采样、站点等数十项筛选，返回 SKU 列表及毛利/退款/销量/库存/刊登率等汇总字段。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/productInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-page-query",
          "description": "修改日志分页查询(海外仓类型展示权限)：海外仓类型展示权限弹窗(iframe)加载时调用，分页查询该权限设置的修改日志(操作时间/操作人/操作内容)，结果渲染到「修改日志」Tab 的时间轴中。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/query/page",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-discount-confirm-must-do-list",
          "description": "待确认打折任务列表查询：成品任务看板「折扣确认」页签加载时调用，查询当前需要人工确认（恢复原成本价/清仓下架）的打折推送任务列表。无请求体，后端按登录态返回待确认 SKU 任务，前端用于 ElementPlus 表格渲染及顶部角标计数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/pushProduct/findDiscountConfirmMustDoList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-querymust-refresh-change-image-info",
          "description": "查询换图结果信息：在\"今日必修改\"列表中点击某SPU行，按 SPU 查询该商品在各店铺的\"必修改/换图\"处理结果，返回各店铺待修改项明细（店铺名、原因），前端以弹窗表格展示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/pushProduct/querymustRefreshChangeImageInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-price-channel-by-site",
          "description": "根据站点查询算价渠道列表：Shopee 自动刊登「设置店铺刊登参数」弹窗中，根据当前店铺所属站点(site)查询该站点可选的算价渠道列表，用于填充弹窗内算价渠道下拉框(#priceChannels)的选项。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductController/findPriceChannelBySite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shopee-disabled-confirm",
          "description": "Shopee待删除商品确认列表查询：Shopee批量删除页面列表查询：按店铺、创建时间区间、在线编号、SPU、删除状态分页查询待删除/删除中/已删除的Shopee商品（listing）任务，返回总数与行记录列表（商品图、SKU/SPU、店铺/负责人、商品ID、在线编号、近30天销量、创建人/时间、删除状态、刊登/删除时间）。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductController/findShopeeDisabledConfirm",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shopee-shop",
          "description": "Shopee店铺列表查询：Shopee批量删除页面进入时调用，查询当前用户可见的Shopee店铺名称列表，用于渲染搜索区店铺多选下拉(#shopName)与生成删除任务弹窗店铺多选下拉(#creatShop)。无入参，返回店铺名称字符串数组。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductController/findShopeeShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shop-param-by-shopname-shopee-product-controller",
          "description": "查询店铺自动刊登参数(按店铺名)：Shopee 自动刊登页打开店铺刊登参数弹窗(showModal)时，按店铺名(shopname)查询该店铺已保存的自动刊登参数(站点/算价渠道/一二级分类/毛利率/折扣率/平台费率/库存/刊登数量/间隔/时间/捆绑/水印/托管等)，用于回显弹窗各控件。入参经 URL 查询串 shopname 传递，无请求体。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductController/findShopParamByShopname",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-enabel-publish-shop-by-site",
          "description": "按站点查询可刊登店铺(Shopee)：Shopee「批量导入/生成 listing」弹窗中，用户在站点多选框选择一个或多个站点后，按所选站点列表查询这些站点下可用于刊登的店铺，返回店铺列表用于渲染「预刊登店铺」下拉选项。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductPublish/getEnabelPublishShopBySite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-relist-shops",
          "description": "获取可重新刊登(Relist)店铺列表：Shopee 刊登页“编辑/搜索店铺”弹窗中，按店铺名称关键词分页查询可用于重新刊登的店铺列表，返回店铺名称及其开启/关闭状态，并支持分页与状态切换。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductPublish/getRelistShops",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-have-published-shop-shopee-product-publish",
          "description": "查询已刊登店铺列表：切换到“刊登完毕”视图时调用，获取当前已经刊登过商品的 Shopee 店铺集合，用于渲染页面“选择新刊登店铺”下拉框(#PublishedShop)。请求不携带任何参数(空请求体)，仅返回店铺名称列表。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductPublish/listHavePublishedShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-product-by-listing-shopee-product-publish",
          "description": "Shopee刊登商品列表查询(按Listing)：Shopee商品刊登管理页面列表查询：按刊登状态(等待刊登/刊登完毕)、商品属性、店铺、刊登人、站点、SPU、批量备注、风险预警、刊登时间区间等条件分页查询，返回商品(含子SKU)刊登信息列表、总数与总页数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductPublish/listProductByListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-publish-shop-shopee-product-publish",
          "description": "未刊登店铺列表查询：查询当前用户可用于 Shopee 商品刊登的“未刊登店铺”列表，用于填充刊登页面 #shopName（未刊登店铺）下拉框及批量刊登店铺选择器。无请求参数，返回店铺名称集合。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductPublish/listPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-relisting-details-shopee-product-publish",
          "description": "Shopee Relisting失败信息详情列表查询：查询某次 Shopee 重新刊登(Relisting)任务的失败明细：按刊登时间、店铺名分页返回失败的 Shopee 商品(平台/店铺/负责人/胤元SPU/源itemID/状态/销量/失败原因等)，前端用于 relisting 失败信息详情页表格渲染与分页。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductPublish/listRelistingDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-relisting-results-shopee-product-publish",
          "description": "Shopee Relisting 结果列表查询：查询 Shopee 重新刊登(relisting)结果列表：按店铺负责人、店铺、relisting 时间区间分页查询，返回各店铺当日 relisting 成功/失败数量、生成日期与 relisting 日期，供 shopee relisting 列表页表格渲染与分页。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductPublish/listRelistingResults",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-preview-task",
          "description": "Shopee批量刊登-预览生成店铺商品行(previewTask)：Shopee商品批量刊登弹窗中，依据所选站点(siteList)与预刊登店铺(shopList)，后端预生成待刊登店铺商品行(含唯一标识、默认站点、店铺名)，前端渲染到批量导入表格供补填库存/利润率/折扣率/平台费率/价格渠道后提交刊登。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductPublish/previewTask",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-query-shopee-tort-words",
          "description": "查询Shopee拦截关键词(侵权词)：Shopee商品刊登页面点击「拦截关键词」按钮时调用，无入参，返回当前Shopee平台的全部拦截/侵权关键词字符串列表，前端在 #shopeeWordModal 弹窗内用 art-template 模板 shopeeWordTemplate 遍历 obj 渲染为关键词标签。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeProductPublish/queryShopeeTortWords",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shopee-unlist-confirm",
          "description": "Shopee批量下架任务列表查询：Shopee批量下架页面：按店铺、创建时间区间、在线编号、SPU、下架状态分页查询下架任务列表，返回任务行及总数、总页数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopeeUnlistController/findShopeeUnlistConfirm",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shopify-disabled-confirm",
          "description": "Shopify下架确认任务列表查询：Shopify批量下架页面：按创建时间区间、店铺、下架状态、SKU/SPU编号分页查询已生成的下架确认任务列表；返回任务总数、总页数及任务行(含商品信息、店铺、负责人、销量、下架状态、刊登/下架时间等)，供页面 art-template 渲染表格并支持批量下架/删除。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopifyProductController/findShopifyDisabledConfirm",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shopify-shop",
          "description": "查询Shopify店铺列表：查询当前用户可见的全部 Shopify 店铺名称列表，用于「shopify批量下架」页面顶部店铺多选下拉框(#shopName)的数据填充。页面加载时自动调用，无任何入参；返回店铺名称字符串数组，前端用 art-template 渲染成 <option>。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/shopifyProductController/findShopifyShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-sku-package-info",
          "description": "SKU包装信息列表查询：查询SKU包装测量任务列表：按状态(全部/未完成/已完成)、SKU、提交人、开发组长、开发员、完成时间区间分页筛选，返回SKU原始/现/包装尺寸重量、开发员、仓库、提交/完成信息、图片及任务状态。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/skuPackage/getSkuPackageInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-smt-disabled-confirm",
          "description": "SMT批量下架-下架确认列表查询：SMT(速卖通)批量下架页的列表分页查询：按店铺、创建时间区间、在线编号、SPU、下架状态、销量类型筛选，返回待下架/下架中/已下架的商品列表(含图片、店铺、负责人、商品ID、在线编号、销量、创建信息、下架状态/时间等)及分页汇总。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtExportController/findSmtDisabledConfirm",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-smt-shop",
          "description": "SMT店铺列表查询：查询当前用户可见的 SMT(速卖通)店铺名称列表，用于「SMT批量下架」页面顶部店铺多选框及「生成下架商品信息」模态框店铺多选框的数据源。无入参，返回店铺名称字符串数组。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtExportController/findSmtShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-publish-shop-yesterday",
          "description": "SMT自动刊登-昨日刊登统计查询：查询昨日SMT自动刊登的汇总统计：返回昨日参与生成listing的店铺数、生成的listing总数、刊登成功数与失败数，用于页面顶部概况栏展示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtProductController/findPublishShopYesterday",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-publish-shop-smt-product-controller",
          "description": "查询自动刊登店铺列表（含刊登汇总）：SMT(速卖通)自动刊登页面初始化时调用：返回当前用户头像、刊登成功/待刊登汇总数，以及该用户名下全部店铺列表（每店铺含店铺名与刊登成功数）。前端据此渲染左侧店铺导航树及顶部店铺下拉框，并触发昨日汇总查询。无请求参数，依赖登录会话。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtProductController/findPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-ship-to-by-id-onekey",
          "description": "一键提价-查看发往地(收货地)列表：Speedmaster(SMT)一键提价页面，点击列表行「查看」按钮时调用：根据商品记录ID(id)与子SKU(skuId)查询该商品对应的发往地/收货地列表，前端弹出 #lookModal 并把返回的 obj.data 数组逐项渲染到 shoptoTemplate 表格中。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtProductController/findShipToByIdOnekey",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shop-by-pt",
          "description": "按平台查询可刊登店铺(Wish刊登选店)：库存看板「Wish刊登」弹窗触发：按平台ID(固定'16'=Wish)查询当前用户可刊登的店铺名称列表，前端渲染到 #selectShop 下拉框供用户选择后跳转 /EditInformation 刊登页。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtProductController/findShopByPt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-shop-param-by-shopname-smt-product-controller",
          "description": "根据店铺名查询店铺自动刊登参数(回显)：SMT自动刊登设置弹窗回显：根据店铺名(shopname)查询该店铺已保存的自动刊登配置(类目、批量折扣、毛利率/促销折扣率上下限、刊登间隔/时段、库存、JIT、水印、自动开关、安全承诺等)，用于弹窗各表单控件回显。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtProductController/findShopParamByShopname",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-smt-autopublish-spu",
          "description": "SMT自动刊登SPU列表查询：SMT(速卖通)自动刊登管理页的SPU分页列表查询：支持按SPU编码/批量SPU/itemid关键词、店铺、SMT分类、开发时间/刊登时间区间、产品状态、销量级别、在线状态、价差大等条件筛选；返回SPU行及其下挂的SKU明细列表。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtProductController/findSmtAutopublishSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-smt-price-confirm-onekey",
          "description": "速卖通一键提价-调价结果分页查询：速卖通(SMT)一键提价模块「调价完毕」页签的分页列表查询：按页签(columnHead)、提交人、状态、店铺、提交时间区间、商品ID(itemid)/运费模板ID(freightid)等条件分页查询调价任务结果，返回SPU行及其下挂的SKU调价明细。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtProductController/findSmtPriceConfirmOnekey",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-find-smt-price-country2",
          "description": "速卖通调价-国家(站点)列表查询：速卖通(SMT)批量调价页初始化时调用，查询可调价的国家/站点列表。前端不传任何请求参数，返回的列表用于渲染按 shipto 国家调价弹框中每个国家的+/-选择器与百分比/数值输入框(控件ID按 site 拼接)，并缓存到 conList 供生成调价信息时按国家组装 reviseParam。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtProductController/findSmtPriceCountry2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-smt-group-counfiguration",
          "description": "获取SMT自动刊登模板分组配置：SMT(速卖通)自动刊登店铺参数设置弹窗中，根据店铺类型(零售/批发客户为主)加载该类型下可用的自动刊登模板分组列表，用于渲染自动刊登模板下拉框。仅当模板下拉项不足时才发起请求。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtProductController/getSmtGroupCounfiguration",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-smt-fail-prop-get-for-write",
          "description": "刊登失败属性回写值查询：在「SMT自动刊登-刊登失败编辑」弹窗中，根据 uniqueId(刊登记录/itemId) 查询该商品此前已写入的失败属性回写值列表，前端把每个属性的 id,en 拼接后回填到对应下拉框 #selectValue{i}，实现编辑回显。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/smtProductController/smtFailPropGetForWrite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-all-must-publish-spu",
          "description": "获取全部必刊登SPU(导出用)：按处理状态、店铺、平台、年月、类目、刊登人等筛选条件，查询满足条件的全部「必刊登SPU」编号集合。前端在商品导出页加载时调用，把返回的SPU编号列表逗号拼接后写入导出条件(spuStr)，实现按当前筛选条件批量选取SPU导出。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/stockProduct/getAllMustPublishSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-shop-by-group",
          "description": "按店长查询其分组下店铺：必发SPU管理页\"换店铺/重新派发\"功能：根据选定的店长(oper)查询该店长所管辖分组下的全部店铺，前端用返回的店铺列表渲染 shopnameTemplate(name=chname 多选复选框)并默认全选，供后续重新派发/换店铺使用。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/stockProduct/getShopByGroup",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-url",
          "description": "获取SPU立刻刊登/编辑跳转地址：库存看板（必刊登/推荐刊登列表）点击「立刻刊登」时调用，依据 SPU、必修改记录序号ID、平台ID 获取后端生成的刊登/编辑页面跳转URL；成功后前端 window.open 新窗口打开 obj 返回的地址。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/stockProduct/getUrl",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-list-product-by-listing-tiktok-product-publish",
          "description": "TikTok刊登-按Listing查询商品列表：TikTok批量刊登页的商品(SPU)列表分页查询：按刊登状态、属性类型、店铺、刊登人、站点、SPU、批量备注、刊登时间区间、是否含风险预警等条件分页，返回SPU行(含子SKU列表 ebayPublishSkuVo)及刊登状态/毛利/店铺等字段。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/tiktokProductPublish/listProductByListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-query-tiktok-tort-words",
          "description": "查询TikTok侵权词(违禁词)列表：在TikTok刊登页面点击「侵权词/违禁词」按钮时，弹出违禁词弹窗并请求该接口，返回全部TikTok侵权词(违禁词)文本数组，前端通过 art-template shopeeWordTemplate 遍历 obj 平铺渲染到弹窗列表。请求不携带任何业务参数。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/tiktokProductPublish/queryTiktokTortWords",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-login-wish-shop",
          "description": "获取当前登录用户Wish店铺列表：wish低分评价页面初始化时调用，根据当前登录用户身份返回其可见/管理的Wish店铺列表，用于填充页面顶部「店铺」筛选下拉框(#commodity)。请求不携带任何业务参数，店铺范围由后端依据登录态自动判定。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/wishRating/getLoginWishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-wish-rating-results",
          "description": "获取wish评论信息：按 Wish listing 的 itemId 查询该商品的评价汇总信息(标题/主图/平均分/各星级评价数/误导风险处理记录)及其全部买家评论明细列表(results)，前端用于「查看评论」弹窗渲染星级、头像、评论内容与评论图片。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/wishRating/getWishRatingResults",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-get-all-resolutions",
          "description": "获取全部售后处理方案(文案)列表：拉取后端预置的售后问题处理方案文案列表，前端用于售后问题处理弹窗(developMarkModal)中处理方案下拉框(#selectedText)选项渲染；默认把列表第一项的 description 填入处理方案输入框(#markInput)。",
          "method": "GET",
          "path": "/erpProduct/erpProduct/product/getAllResolutions",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-product-product-info-for-new-edtion",
          "description": "我的关注商品数量查询：经理工作台首页通知区调用，以 attentionSkuFlag=1(只看我关注的SKU)、pageSize=1 触发商品信息分页查询(新版)，仅取返回 obj.count(关注商品总数)用于通知区计数展示。",
          "method": "POST",
          "path": "/erpProduct/erpProduct/product/productInfoForNewEdtion",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-emp-info-list",
          "description": "获取平台：获取平台",
          "method": "GET",
          "path": "/yypms/pms/AllMessage/empInfoList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-auditor",
          "description": "查询全部Auditor：查询全部Auditor(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/AllMessage/getAllAuditor",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-art",
          "description": "查询类目ART：查询类目ART(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/AllMessage/getCategoryArt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-art-new",
          "description": "查询类目ART新：查询类目ART新(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/AllMessage/getCategoryArtNew",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-first-category",
          "description": "查询首个类目：查询首个类目(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/AllMessage/getFirstCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-little-leader-by-team",
          "description": "按团队查询Little组长：按团队查询Little组长(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/AllMessage/getLittleLeaderByTeam",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-picture-type",
          "description": "查询图片类型：查询图片类型(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/AllMessage/getPictureType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-qi-yuan-auditor",
          "description": "GetqiYUANAuditor：GetqiYUANAuditor(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/AllMessage/getQiYuanAuditor",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-unique-id",
          "description": "获取编辑信息：获取编辑信息",
          "method": "GET",
          "path": "/yypms/pms/amazon/amazonEditlistingQuery/{uniqueId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-list-batch",
          "description": "批次确认列表：批次确认列表(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/amazon/batch/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-collection-data",
          "description": "数据采集, 根据listing url 采集数据：数据采集, 根据listing url 采集数据",
          "method": "GET",
          "path": "/yypms/pms/amazon/collectionData",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-shop-name",
          "description": "获取amazon默认运费模板：获取amazon默认运费模板",
          "method": "GET",
          "path": "/yypms/pms/amazon/defaultTemplate/{shopName}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-amazon-excel-template",
          "description": "查询已经上传的刊登模板信息：查询已经上传的刊登模板信息",
          "method": "GET",
          "path": "/yypms/pms/amazon/getAmazonExcelTemplate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-amazon-get-amazon-info",
          "description": "根据id获取刊登详情：根据id获取刊登详情",
          "method": "GET",
          "path": "/yypms/pms/amazon/getAmazonInfo/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-amazon-product-type",
          "description": "根据店铺和大类确定商品类型：根据店铺和大类确定商品类型",
          "method": "GET",
          "path": "/yypms/pms/amazon/getAmazonProductType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-amazon-saler",
          "description": "获取刊登任务创建人查询的下拉列表：获取刊登任务创建人查询的下拉列表",
          "method": "GET",
          "path": "/yypms/pms/amazon/getAmazonSaler",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-amazon-shop",
          "description": "获取名下的店铺列表：获取名下的店铺列表",
          "method": "GET",
          "path": "/yypms/pms/amazon/getAmazonShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-field",
          "description": "获取配置的color,size 字段：获取配置的color,size 字段",
          "method": "GET",
          "path": "/yypms/pms/amazon/getField",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-main-category",
          "description": "获取可刊登的大类列表：获取可刊登的大类列表",
          "method": "GET",
          "path": "/yypms/pms/amazon/getMainCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-pricing-channel-amazon",
          "description": "获取Amazon算价可用渠道：获取Amazon算价可用渠道",
          "method": "GET",
          "path": "/yypms/pms/amazon/getPricingChannel",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-new-get-amazon-info",
          "description": "根据id获取刊登详情：根据id获取刊登详情",
          "method": "GET",
          "path": "/yypms/pms/amazon/new/getAmazonInfo/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-type",
          "description": "获取产品类型列表：获取产品类型列表",
          "method": "GET",
          "path": "/yypms/pms/amazon/new/getProductType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-type-info",
          "description": "获取产品类型列表（直接读取所有的产品类型）：获取产品类型列表（直接读取所有的产品类型）",
          "method": "GET",
          "path": "/yypms/pms/amazon/new/getProductTypeInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-schema-by-product-type",
          "description": "获取指定的Schema文件：获取指定的Schema文件",
          "method": "GET",
          "path": "/yypms/pms/amazon/new/getSchemaByProductType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-schema-by-request-id",
          "description": "获取产品类型列表（直接读取所有的产品类型）：获取产品类型列表（直接读取所有的产品类型）",
          "method": "GET",
          "path": "/yypms/pms/amazon/new/getSchemaByRequestId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-schema-path-complete",
          "description": "查询指定的Schema文件是否同步完成：查询指定的Schema文件是否同步完成",
          "method": "GET",
          "path": "/yypms/pms/amazon/new/getSchemaPathComplete",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-product-type-list",
          "description": "通过产品标题/关键字信息来筛选产品类型：通过产品标题/关键字信息来筛选产品类型",
          "method": "GET",
          "path": "/yypms/pms/amazon/new/queryProductTypeList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-site",
          "description": "获取amazon站点信息：获取amazon站点信息",
          "method": "GET",
          "path": "/yypms/pms/amazon/site",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-amazon-template",
          "description": "获取amazon站点信息：获取amazon站点信息",
          "method": "GET",
          "path": "/yypms/pms/amazon/template/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-api-sya-mabang-notice-content",
          "description": "查询：查询",
          "method": "GET",
          "path": "/yypms/pms/api/syaMabangNoticeContent/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-api-sys-mabang-notice",
          "description": "查询：查询",
          "method": "GET",
          "path": "/yypms/pms/api/sysMabangNotice/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-banned-get-banned-by-id",
          "description": "根据id获取禁售详情：根据id获取禁售详情",
          "method": "GET",
          "path": "/yypms/pms/banned/getBannedById/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-brand-name",
          "description": "查询品牌名称：package com.instudio.pms.controller;",
          "method": "GET",
          "path": "/yypms/pms/brand/findBrandName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-shop-list",
          "description": "查询全部店铺列表：查询全部店铺列表(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/brand/getAllShopList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-brand-get-brand-image-by-id",
          "description": "按ID查询品牌图片：按ID查询品牌图片(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/brand/getBrandImageById/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-brand-get-brand-platform-id-by-id",
          "description": "按ID查询品牌平台ID：按ID查询品牌平台ID(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/brand/getBrandPlatformIdById/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-platform-id",
          "description": "按平台ID查询店铺：按平台ID查询店铺(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/brand/getShopByPlatformId/{platformId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-category-id-get-category-info",
          "description": "获取分类详情：获取分类详情",
          "method": "GET",
          "path": "/yypms/pms/category/getCategoryInfo/{categoryId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-spu-certification",
          "description": "查询商品资质图片列表：查询商品资质图片列表",
          "method": "GET",
          "path": "/yypms/pms/certification/getSpuCertification/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-list-image",
          "description": "查询商品资质列表：查询商品资质列表",
          "method": "GET",
          "path": "/yypms/pms/certification/{spu}/image/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-customer-service-date",
          "description": "查询客服绩效数据：查询客服绩效数据",
          "method": "GET",
          "path": "/yypms/pms/customerServiceDateController/exportCustomerServiceDate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-product-scene-spell",
          "description": "补偿生成SPU场景咒语：仅传SPU，其余参数从pms数据库查询：补偿生成SPU场景咒语：仅传SPU，其余参数从pms数据库查询",
          "method": "GET",
          "path": "/yypms/pms/developerMission/ai/productSceneSpell/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-dept-id",
          "description": "初始化降本任务：初始化降本任务",
          "method": "GET",
          "path": "/yypms/pms/developerMission/getEmpBydept/{deptId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-is-purchase-by-spu",
          "description": "按SPU查询是否采购：按SPU查询是否采购(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/developerMission/getIsPurchaseBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-spu-cut-cost-info",
          "description": "通过部门获取人员下拉：通过部门获取人员下拉",
          "method": "GET",
          "path": "/yypms/pms/developerMission/getSpuCutCostInfo/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-is-show-sell-by-team-and-check-status",
          "description": "根据登录人所在组和Spu审核状态判断是否展示提交售卖：根据登录人所在组和Spu审核状态判断是否展示提交售卖",
          "method": "GET",
          "path": "/yypms/pms/developerMission/isShowSellByTeamAndCheckStatus",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-keyword-aitemplate-enmus",
          "description": "查询所有的模型：查询所有的模型",
          "method": "GET",
          "path": "/yypms/pms/developerMission/keywordAITemplateEnmus",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-development-project-development-project-export",
          "description": "开发项目导出总监维度扣退款发货毛利额：开发项目导出总监维度扣退款发货毛利额",
          "method": "GET",
          "path": "/yypms/pms/developmentProject/developmentProjectExport/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-development-project",
          "description": "开发项目导出：开发项目导出",
          "method": "GET",
          "path": "/yypms/pms/developmentProject/exportDevelopmentProject",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-country-amount",
          "description": "获取开发项目的国家15天销售额和总销售额：获取开发项目的国家15天销售额和总销售额",
          "method": "GET",
          "path": "/yypms/pms/developmentProject/getSpuCountryAmount",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-country-sales",
          "description": "获取开发项目的国家15天销量和总销量：获取开发项目的国家15天销量和总销量",
          "method": "GET",
          "path": "/yypms/pms/developmentProject/getSpuCountrySales",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-plat-amount",
          "description": "获取开发项目的15天平台销售额和总销售额：获取开发项目的15天平台销售额和总销售额",
          "method": "GET",
          "path": "/yypms/pms/developmentProject/getSpuPlatAmount",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-plat-profit",
          "description": "获取开发项目的15天平台毛利额和毛利率：获取开发项目的15天平台毛利额和毛利率",
          "method": "GET",
          "path": "/yypms/pms/developmentProject/getSpuPlatProfit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-plat-sales",
          "description": "获取开发项目的15天平台销量和总销量：获取开发项目的15天平台销量和总销量",
          "method": "GET",
          "path": "/yypms/pms/developmentProject/getSpuPlatSales",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-pushlish",
          "description": "开发项目spu刊登图：开发项目spu刊登图",
          "method": "GET",
          "path": "/yypms/pms/developmentProject/getSpuPushlish",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-sale-level",
          "description": "售卖级别饼状图：售卖级别饼状图",
          "method": "GET",
          "path": "/yypms/pms/developmentProject/getSpuSaleLevel",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-item-specifics-by-category-id2",
          "description": "根据分类id查询ItemSpecifics2：根据分类id查询ItemSpecifics2",
          "method": "GET",
          "path": "/yypms/pms/ebaySinglepublishInfoController/findItemSpecificsByCategoryId2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-infringe-ment-sku",
          "description": "根据侵权caseId获取录入的sku：根据侵权caseId获取录入的sku",
          "method": "GET",
          "path": "/yypms/pms/infringement/getInfringeMentSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-follow-list",
          "description": "查询跟进记录：查询跟进记录",
          "method": "GET",
          "path": "/yypms/pms/infringement/queryFollowList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shopee-all-site",
          "description": "查询Shopee全部站点：查询Shopee全部站点(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/lazadaOrShopeeSinglePublishController/findShopeeAllSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-manufacture",
          "description": "供应商信息：供应商信息",
          "method": "GET",
          "path": "/yypms/pms/manufacture/detail/{manufacture}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-channel-category",
          "description": "美客多通过标题推荐产品类目：美客多通过标题推荐产品类目",
          "method": "GET",
          "path": "/yypms/pms/mercadolibre/getChannelCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-request-id-get-publish-request-info",
          "description": "美客多获取单品刊登信息：美客多获取单品刊登信息",
          "method": "GET",
          "path": "/yypms/pms/mercadolibre/getPublishRequestInfo/{requestId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-saler",
          "description": "广告预警信息：广告预警信息",
          "method": "GET",
          "path": "/yypms/pms/middlePanel/advertisingWarning/detail/{times}/{status}/{platform}/{saler}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-performance",
          "description": "ebay政策表现：ebay政策表现",
          "method": "GET",
          "path": "/yypms/pms/middlePanel/ebay/policy/performance/get",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-freight-template",
          "description": "获取店铺运费模板信息：获取店铺运费模板信息",
          "method": "GET",
          "path": "/yypms/pms/middlePanel/getFreightTemplate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-middle-field-explain",
          "description": "获取中台报表字段解释：获取中台报表字段解释",
          "method": "GET",
          "path": "/yypms/pms/middlePanel/getMiddleFieldExplain",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-middle-panel-shop-detail",
          "description": "获取中台店铺详情数据：获取中台店铺详情数据",
          "method": "GET",
          "path": "/yypms/pms/middlePanel/getMiddlePanelShopDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-get-notification-info-platform",
          "description": "查询通知信息：查询通知信息(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/middlePanel/getNotificationInfo/{platform}/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-judge-loginer",
          "description": "判断登录者是否有权限查看：判断登录者是否有权限查看",
          "method": "GET",
          "path": "/yypms/pms/middlePanel/judgeLoginer",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-num",
          "description": "获取美客多站点在线量和额度：获取美客多站点在线量和额度",
          "method": "GET",
          "path": "/yypms/pms/middlePanel/mercadolibre/site/listing/num/get",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-fixed-copy-shop",
          "description": "查询Fixed复制店铺：查询Fixed复制店铺(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/ozonSinglepublishInfoController/getFixedCopyShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-pms-ozon-template",
          "description": "根据 ID 查询 Ozon SPU 类目模板详情：根据 ID 查询 Ozon SPU 类目模板详情",
          "method": "GET",
          "path": "/yypms/pms/ozonTemplate/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-latest-id",
          "description": "根据 SPU 查询创建时间最晚（id 倒序第一条）的模板 ID：根据 SPU 查询创建时间最晚（id 倒序第一条）的模板 ID",
          "method": "GET",
          "path": "/yypms/pms/ozonTemplate/latestId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-distinct-create-oper",
          "description": "获取建单员：获取建单员",
          "method": "GET",
          "path": "/yypms/pms/photoOrder/queryDistinctCreateOper",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-create-time-from",
          "description": "通过创建时间条件获取SPU：通过创建时间条件获取SPU",
          "method": "GET",
          "path": "/yypms/pms/productApi/findProductList/{currentPage}/{pageNumber}/{createTimeFrom}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-str",
          "description": "通过SPU找：通过SPU找",
          "method": "GET",
          "path": "/yypms/pms/productApi/getProductBySpu/{spuStr}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-enums",
          "description": "查询所有的美工退回原因：查询所有的美工退回原因",
          "method": "GET",
          "path": "/yypms/pms/productImage/enums",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-develop-type-product-image",
          "description": "查询Develop类型：查询Develop类型(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/productImage/getDevelopType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-img-product-by-reference-url",
          "description": "按ReferenceURL查询图片商品：按ReferenceURL查询图片商品(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/ProductPhotographController/getImgProductByReferenceUrl",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-query-purcahse-group-by-spu",
          "description": "根据spu拍照任务确认收货：根据spu拍照任务确认收货",
          "method": "GET",
          "path": "/yypms/pms/ProductPhotographController/queryPurcahseGroupBySpu/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-info-by-spu",
          "description": "发送延迟采购任务消息：发送延迟采购任务消息",
          "method": "GET",
          "path": "/yypms/pms/ProductPhotographController/{spu}/getSkuInfoBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-purchase",
          "description": "更新拍照任务：更新拍照任务",
          "method": "GET",
          "path": "/yypms/pms/ProductPhotographController/{spu}/{purchaseId}/getSpuPurchase",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-category-id-get-category-attribute-list-customize",
          "description": "获取品类自定义的颜色和尺码列表：获取品类自定义的颜色和尺码列表",
          "method": "GET",
          "path": "/yypms/pms/product/getCategoryAttributeListCustomize/{categoryId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-attribute-flag",
          "description": "获取品类的颜色和尺码列表：获取品类的颜色和尺码列表",
          "method": "GET",
          "path": "/yypms/pms/product/getCategoryAttributeList/{categoryId}/{attributeFlag}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-picture-url-get",
          "description": "通过spu获取图片路径2：通过spu获取图片路径2",
          "method": "GET",
          "path": "/yypms/pms/product/getProductPictureUrlGet",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-picture-url-lazada",
          "description": "通过spu获取图片路径(get请求)：通过spu获取图片路径(get请求)",
          "method": "GET",
          "path": "/yypms/pms/product/getProductPictureUrlLazada",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-packaging-list",
          "description": "包材下拉：包材下拉",
          "method": "GET",
          "path": "/yypms/pms/product/packagingList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-project-list-project-relation",
          "description": "查询项目列表：查询项目列表(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/projectRelation/getProjectList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-type-get-sale-export-list",
          "description": "查询销售导出列表：查询销售导出列表(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/saleExportTemp/getSaleExportList/{type}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-first-category",
          "description": "获取一级大类：获取一级大类",
          "method": "GET",
          "path": "/yypms/pms/skuCategory/firstCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-second-category",
          "description": "获取二级大类：获取二级大类",
          "method": "GET",
          "path": "/yypms/pms/skuCategory/secondCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-sku-oper",
          "description": "开发中台的列表数据：开发中台的列表数据",
          "method": "GET",
          "path": "/yypms/pms/skuManager/get/{times}/{position}/{skuOper}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-platform-rate-by-category-id",
          "description": "根据类目id获取平台费率：根据类目id获取平台费率",
          "method": "GET",
          "path": "/yypms/pms/smtSinglepublishController/getPlatformRateByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-categorization-info",
          "description": "SKU组套信息下拉：SKU组套信息下拉",
          "method": "GET",
          "path": "/yypms/pms/smtSinglepublishController/getSkuCategorizationInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-test",
          "description": "获取套图对应信息：获取套图对应信息",
          "method": "GET",
          "path": "/yypms/pms/smtSinglepublishController/test/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-site-by-mabang-id",
          "description": "按平台查站点：按平台查站点",
          "method": "GET",
          "path": "/yypms/pms/spu/findSiteByMabangId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-banned-content",
          "description": "根据spu查询禁售规则内容：根据spu查询禁售规则内容",
          "method": "GET",
          "path": "/yypms/pms/spu/getBannedContent/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-check-emp",
          "description": "获取商品池审核人：获取商品池审核人",
          "method": "GET",
          "path": "/yypms/pms/spu/getCheckEmp",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-ebay-notes",
          "description": "查询eBayNotes：查询eBayNotes(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/spu/getEbayNotes/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-position-id",
          "description": "根据职位获取人员：根据职位获取人员",
          "method": "GET",
          "path": "/yypms/pms/spu/getEmpByPositionId/{positionId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-no-pass-detail",
          "description": "获取不通过详情：获取不通过详情",
          "method": "GET",
          "path": "/yypms/pms/spu/getNoPassDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-pms-picture-by-spu",
          "description": "按SPU查询刊登系统图片：按SPU查询刊登系统图片(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/spu/getPmsPictureBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-position-by-oper",
          "description": "按操作查询位置：按操作查询位置(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/spu/getPositionByOper",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-list-by-spu",
          "description": "按SPU查询SKU列表：按SPU查询SKU列表(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/spu/getSkuListBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-spu-check-is-tort",
          "description": "判断spu是否侵权：判断spu是否侵权",
          "method": "GET",
          "path": "/yypms/pms/spu/getSpuCheckIsTort/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-evaluation-grade",
          "description": "查看SPU评论数量：查看SPU评论数量",
          "method": "GET",
          "path": "/yypms/pms/spu/getSpuEvaluationBySpu/{spu}/{evaluationGrade}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-mustrefresh",
          "description": "通知销售次数（今日必修改）：通知销售次数（今日必修改）",
          "method": "GET",
          "path": "/yypms/pms/spu/getSpuMustrefresh",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-spu-publish-info",
          "description": "查询SPU刊登信息：查询SPU刊登信息(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/spu/getSpuPublishInfo/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-spu-refuse",
          "description": "查询SPU拒绝：查询SPU拒绝(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/spu/getSpuRefuse/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-submit-banned-content1",
          "description": "查询提交Banned内容1：查询提交Banned内容1(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/spu/getSubmitBannedContent1/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-submit-banned-content",
          "description": "根据spu查询禁售规则内容：根据spu查询禁售规则内容",
          "method": "GET",
          "path": "/yypms/pms/spu/getSubmitBannedContent/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-is-show-update",
          "description": "判断是否超过16个小时：判断是否超过16个小时",
          "method": "GET",
          "path": "/yypms/pms/spu/isShowUpdate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-is-show-update-time",
          "description": "显示剩余时间：显示剩余时间",
          "method": "GET",
          "path": "/yypms/pms/spu/isShowUpdateTime",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-development-team",
          "description": "查询开发小组：查询开发小组",
          "method": "GET",
          "path": "/yypms/pms/spu/queryDevelopmentTeam",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-amzpicture-by-spu-new",
          "description": "按SPU查SPU在SMT的图(按style筛选)：按SPU查SPU在SMT的图(按style筛选)",
          "method": "GET",
          "path": "/yypms/pms/spu/{spu}/findAMZpictureBySpuNew",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-dcpicture-by-spu",
          "description": "根据SPU查询VT图：根据SPU查询VT图",
          "method": "GET",
          "path": "/yypms/pms/spu/{spu}/findDCpictureBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-ebay-skupicture-by-spu",
          "description": "根据SPU查询尺码图(TH&VN站)：根据SPU查询尺码图(TH&VN站)",
          "method": "GET",
          "path": "/yypms/pms/spu/{spu}/findEbaySkupictureBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-size-picture-by-spu",
          "description": "根据SPU查询尺码图(TH&VN站)：根据SPU查询尺码图(TH&VN站)",
          "method": "GET",
          "path": "/yypms/pms/spu/{spu}/findSizePictureBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-smtpicture-by-spu",
          "description": "按SPU查SPU在SMT的图：按SPU查SPU在SMT的图",
          "method": "GET",
          "path": "/yypms/pms/spu/{spu}/findSMTpictureBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-smtpicture-by-spu-new",
          "description": "按SPU查SPU在SMT的图：按SPU查SPU在SMT的图",
          "method": "GET",
          "path": "/yypms/pms/spu/{spu}/findSMTpictureBySpuNew",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-smt-product-manual-by-spu",
          "description": "根据SPU查询DC图：根据SPU查询DC图",
          "method": "GET",
          "path": "/yypms/pms/spu/{spu}/findSmtProductManualBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-vtpicture-by-spu",
          "description": "根据SPU查询VT图：根据SPU查询VT图",
          "method": "GET",
          "path": "/yypms/pms/spu/{spu}/findVTpictureBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-log-by-spu",
          "description": "按SPU查SKU在EBAY可以用的图：按SPU查SKU在EBAY可以用的图",
          "method": "GET",
          "path": "/yypms/pms/spu/{spu}/getSpuLogBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-reason-cat-list",
          "description": "获取原因分类列表：获取原因分类列表",
          "method": "GET",
          "path": "/yypms/pms/strategyReasonCategory/getReasonCatList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-supply-pool-sku-detail-by-sku",
          "description": "根据supplySku查询SupplyPoolSku的相关信息：根据supplySku查询SupplyPoolSku的相关信息",
          "method": "GET",
          "path": "/yypms/pms/SupplyPoolController/getSupplyPoolSkuDetailBySku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-supply-pool-spu-detail-by-spu",
          "description": "根据supplySpu查询SupplyPoolSpu的相关信息：根据supplySpu查询SupplyPoolSpu的相关信息",
          "method": "GET",
          "path": "/yypms/pms/SupplyPoolController/getSupplyPoolSpuDetailBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-brand-list",
          "description": "品牌列表：品牌列表",
          "method": "GET",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getAllBrandList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-question-format",
          "description": "chatgpt 提问：chatgpt 提问",
          "method": "GET",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getQuestionFormat",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-tik-tok-category-rules",
          "description": "查询TikTok类目Rules：查询TikTok类目Rules(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getTikTokCategoryRules",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-tiktok-local-shop",
          "description": "获取店铺：获取店铺",
          "method": "GET",
          "path": "/yypms/pms/tiktokSinglepublishLocalController/getTiktokLocalShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-item-id",
          "description": "下架编辑信息：下架编辑信息(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/tiktokSinglepublishLocalEditController/downEditInfo/{shopName}/{itemId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-tiktok-singlepublish-local-edit-controller-get-edit-info",
          "description": "查询编辑信息：查询编辑信息(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/tiktokSinglepublishLocalEditController/getEditInfo/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-by-spu",
          "description": "根据SPU查询商标侵权词（已过滤白名单）：根据SPU查询商标侵权词（已过滤白名单）",
          "method": "GET",
          "path": "/yypms/pms/trademark/names/by-spu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-request-id-get-condition-required-info-v3",
          "description": "获取条件必传信息(最新)：获取条件必传信息(最新)",
          "method": "GET",
          "path": "/yypms/pms/walmart/getConditionRequiredInfoV3/{requestId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-request-id-get-condition-required-info",
          "description": "获取条件必传信息：获取条件必传信息",
          "method": "GET",
          "path": "/yypms/pms/walmart/getConditionRequiredInfo/{requestId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-pricing-channel-walmart",
          "description": "获取算价可用渠道：获取算价可用渠道",
          "method": "GET",
          "path": "/yypms/pms/walmart/getPricingChannel",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-walmart-saler",
          "description": "获取刊登任务创建人查询的下拉列表：获取刊登任务创建人查询的下拉列表",
          "method": "GET",
          "path": "/yypms/pms/walmart/getWalmartSaler",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-accepted-colors",
          "description": "获取可用颜色：获取可用颜色",
          "method": "GET",
          "path": "/yypms/pms/wishPublishInfo/getAcceptedColors",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-wish-warehouses-info",
          "description": "wish仓库：wish仓库",
          "method": "GET",
          "path": "/yypms/pms/wishPublishInfo/getWishWarehousesInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-category-id-get-category-characteristics",
          "description": "查询类目Characteristics：查询类目Characteristics(源码无注释,按方法名推断)",
          "method": "GET",
          "path": "/yypms/pms/yandexBasicDate/getCategoryCharacteristics/{categoryId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-yandex-sales",
          "description": "获取刊登任务创建人查询的下拉列表：获取刊登任务创建人查询的下拉列表",
          "method": "GET",
          "path": "/yypms/pms/yandexPublish/getYandexSales",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-shop-id",
          "description": "获取店铺仓库信息：获取店铺仓库信息",
          "method": "GET",
          "path": "/yypms/pms/yandexPublish/getYandexWarehouseByShopId/{shopId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manage-employee-names-aliexpress-choice-single-publish-controller",
          "description": "查询当前登陆人管理人员：查询当前登陆人管理人员",
          "method": "POST",
          "path": "/yypms/pms/aliexpressChoiceSinglePublishController/findManageEmployeeNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-aliexpress-category-props",
          "description": "查询速卖通类目Props：查询速卖通类目Props(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/aliexpressChoiceSinglePublishController/getAliexpressCategoryProps",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-aliexpress-category-qualifications",
          "description": "查询速卖通类目Qualifications：查询速卖通类目Qualifications(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/aliexpressChoiceSinglePublishController/getAliexpressCategoryQualifications",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-aliexpress-choice-product-warehouse-list",
          "description": "查询速卖通Choice商品仓库列表：查询速卖通Choice商品仓库列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/aliexpressChoiceSinglePublishController/getAliexpressChoiceProductWarehouseList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-aliexpress-choice-single-publish-info",
          "description": "查询速卖通Choice单个刊登信息：查询速卖通Choice单个刊登信息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/aliexpressChoiceSinglePublishController/getAliexpressChoiceSinglePublishInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-aliexpress-choice-single-publish-controller",
          "description": "查询类目：查询类目(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/aliexpressChoiceSinglePublishController/getCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-list-aliexpress-choice-single-publish-controller",
          "description": "查询类目列表：查询类目列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/aliexpressChoiceSinglePublishController/getCategoryList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-props",
          "description": "查询类目Props：查询类目Props(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/aliexpressChoiceSinglePublishController/getCategoryProps",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-by-pt-aliexpress-choice-single-publish-controller",
          "description": "查询店铺名称列表：查询店铺名称列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/aliexpressChoiceSinglePublishController/getShopByPt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-list-aliexpress-choice-single-publish-listing",
          "description": "列表速卖通Choice单个刊登刊登：列表速卖通Choice单个刊登刊登(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/aliexpressChoiceSinglePublishController/listAliexpressChoiceSinglePublishListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-vague-search-category",
          "description": "Vague搜索类目：Vague搜索类目(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/aliexpressChoiceSinglePublishController/vagueSearchCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-publish-shop-names",
          "description": "获取分类属性：获取分类属性",
          "method": "POST",
          "path": "/yypms/pms/aliexpressSinglepublishController/findPublishShopNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-aliexpress-category",
          "description": "获取分类：获取分类",
          "method": "POST",
          "path": "/yypms/pms/aliexpressSinglepublishController/getAliexpressCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-aliexpress-category-attributes",
          "description": "获取分类：获取分类",
          "method": "POST",
          "path": "/yypms/pms/aliexpressSinglepublishController/getAliexpressCategoryAttributes",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-aliexpress-single-publish-result-info",
          "description": "获取刊登信息：获取刊登信息",
          "method": "POST",
          "path": "/yypms/pms/aliexpressSinglepublishController/getAliexpressSinglePublishResultInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-freight-templates",
          "description": "获取套图信息：获取套图信息",
          "method": "POST",
          "path": "/yypms/pms/aliexpressSinglepublishController/getAllFreightTemplates",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-price-infomation",
          "description": "获取运费模板：获取运费模板",
          "method": "POST",
          "path": "/yypms/pms/aliexpressSinglepublishController/getPriceInfomation",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-style-type-pics",
          "description": "获取套图信息：获取套图信息",
          "method": "POST",
          "path": "/yypms/pms/aliexpressSinglepublishController/getStyleTypePics",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-votobo-info-by-item-id-aliexpress-singlepublish-controller",
          "description": "根据产品id获取信息：根据产品id获取信息",
          "method": "POST",
          "path": "/yypms/pms/aliexpressSinglepublishController/getVotoboInfoByItemId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-description-infringing-word",
          "description": "验证SKU对应供应商是否在侵权列表存在：验证SKU对应供应商是否在侵权列表存在",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/descriptionInfringingWord",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-art-photographer",
          "description": "美工摄影报表：美工摄影报表",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/exportArtPhotographer",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-art-photographer",
          "description": "获取平台：获取平台",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/findArtPhotographer",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-platform",
          "description": "通过旺旺名获取供应商id：通过旺旺名获取供应商id",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/findPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-auditor",
          "description": "查询类目Auditor：查询类目Auditor(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/getCategoryAuditor",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-platform",
          "description": "获取平台：获取平台",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/getCurrencyByPlatform/{platform}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-seasonal-product-deadline-stocking-day-by-month",
          "description": "季节产品截止备货月份：季节产品截止备货月份",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/getSeasonalProductDeadlineStockingDayByMonth",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-seasonal-product-deadline-stocking-month",
          "description": "季节产品截止备货月份：季节产品截止备货月份",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/getSeasonalProductDeadlineStockingMonth",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-spu-scene-spell",
          "description": "获取平台：获取平台",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/getSpuSceneSpell/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-tag",
          "description": "添加sku：添加sku",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/getSpuTag",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-supplier-url-by-supply-url",
          "description": "RandomGenerationSKU：RandomGenerationSKU(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/getSupplierUrlBySupplyUrl",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-url-is-exist",
          "description": "通过spu找到他的属性标记：通过spu找到他的属性标记",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/getUrlIsExist",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-select-supply-id-by-supply-url",
          "description": "已被占用的供货链接 不让再次开发：已被占用的供货链接 不让再次开发",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/selectSupplyIdBySupplyUrl",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-validate-tort",
          "description": "验证SKU对应供应商是否在侵权列表存在：验证SKU对应供应商是否在侵权列表存在",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/validateTort",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-prohibited-words-amazon",
          "description": "检查是否包含违禁词：检查是否包含违禁词",
          "method": "POST",
          "path": "/yypms/pms/amazon/checkProhibitedWords",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-similarity-title",
          "description": "检查标题是否相似：检查标题是否相似",
          "method": "POST",
          "path": "/yypms/pms/amazon/checkSimilarityTitle",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-amazon-category",
          "description": "获取Amazon 刊登属性：获取Amazon 刊登属性",
          "method": "POST",
          "path": "/yypms/pms/amazon/getAmazonCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-amazon-publish-confirm-list",
          "description": "获取Amazon刊登任务列表：获取Amazon刊登任务列表",
          "method": "POST",
          "path": "/yypms/pms/amazon/getAmazonPublishConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-properties",
          "description": "获取商品分类：获取商品分类",
          "method": "POST",
          "path": "/yypms/pms/amazon/getCategoryProperties",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-image-amazon",
          "description": "获取图片：获取图片",
          "method": "POST",
          "path": "/yypms/pms/amazon/getSpuImage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-variation-theme-config-amazon-get",
          "description": "根据选中的值, 查询variationTheme字段的配置信息：根据选中的值, 查询variationTheme字段的配置信息",
          "method": "POST",
          "path": "/yypms/pms/amazon/get/variationThemeConfig",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-page-list",
          "description": "导出爆款保护列表页面：导出爆款保护列表页面",
          "method": "POST",
          "path": "/yypms/pms/amazon/hotgoodsProtect/exportPageList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-page-hotgoods-protect",
          "description": "热销保护分页查询：热销保护分页查询",
          "method": "POST",
          "path": "/yypms/pms/amazon/hotgoodsProtect/page",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-batch-amazon-publish-info",
          "description": "批量复制刊登任务：批量复制刊登任务",
          "method": "POST",
          "path": "/yypms/pms/amazon/new/batchAmazonPublishInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-amazon-multi-structure",
          "description": "获取多变体结构：获取多变体结构",
          "method": "POST",
          "path": "/yypms/pms/amazon/new/getAmazonMultiStructure",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-variation-theme-config-new-get",
          "description": "根据选中的值, 查询variationTheme字段的配置信息：根据选中的值, 查询variationTheme字段的配置信息",
          "method": "POST",
          "path": "/yypms/pms/amazon/new/get/variationThemeConfig",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-variation-theme-config-info",
          "description": "根据选中的值, 没有选中的值就根据requestId 查询variationTheme字段的配置信息：根据选中的值, 没有选中的值就根据requestId 查询variationTheme字段的配置信息",
          "method": "POST",
          "path": "/yypms/pms/amazon/new/get/variationThemeConfigInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-page-sya-mabang-notice-content",
          "description": "分页查询：分页查询",
          "method": "POST",
          "path": "/yypms/pms/api/syaMabangNoticeContent/findPage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-page-sys-mabang-notice",
          "description": "分页查询：分页查询",
          "method": "POST",
          "path": "/yypms/pms/api/sysMabangNotice/findPage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-id-by-statue",
          "description": "删除：删除",
          "method": "POST",
          "path": "/yypms/pms/api/sysMabangNotice/getIdByStatue",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-assemble-attributes-detail",
          "description": "拼装sku属性信息：拼装sku属性信息",
          "method": "POST",
          "path": "/yypms/pms/attributesdetail/assembleAttributesDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-suffix",
          "description": "获取sku属性开头规则：获取sku属性开头规则",
          "method": "POST",
          "path": "/yypms/pms/attributesdetail/getSkuSuffix",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-value",
          "description": "获取sku属性信息：获取sku属性信息",
          "method": "POST",
          "path": "/yypms/pms/attributesdetail/getValue",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-value-sku-suffix",
          "description": "获取sku属性和开头规则：获取sku属性和开头规则",
          "method": "POST",
          "path": "/yypms/pms/attributesdetail/ValueSkuSuffix",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-findattributes",
          "description": "获取sku属性信息：获取sku属性信息",
          "method": "POST",
          "path": "/yypms/pms/attributes/findattributes",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-banned-by-list",
          "description": "获取分页列表：获取分页列表",
          "method": "POST",
          "path": "/yypms/pms/banned/getBannedByList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-name-brand",
          "description": "查询名称：package com.instudio.pms.controller;",
          "method": "POST",
          "path": "/yypms/pms/brand/name",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-brand",
          "description": "修改品牌信息：修改品牌信息",
          "method": "POST",
          "path": "/yypms/pms/brand/query",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-employeename-by-categor-id",
          "description": "通过分类id 获取分类负责人：通过分类id 获取分类负责人",
          "method": "POST",
          "path": "/yypms/pms/category/findEmployeenameByCategorId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-platform-mapping-value",
          "description": "通过胤元id获取平台映射信息：通过胤元id获取平台映射信息",
          "method": "POST",
          "path": "/yypms/pms/category/findPlatformMappingValue",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-sku-rule-bycategoryid",
          "description": "查询SKU规则Bycategoryid：查询SKU规则Bycategoryid(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/category/findSku_ruleBycategoryid",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-wish-tags-by-user-id",
          "description": "查询开发者分类对应的wish关键字：查询开发者分类对应的wish关键字",
          "method": "POST",
          "path": "/yypms/pms/category/findWishTagsByUserId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-category-name",
          "description": "查询全部类目名称：查询全部类目名称(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/category/getAllCategoryName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-catefory-name-by-username",
          "description": "通过用户名称 获取用户的分类名称：通过用户名称 获取用户的分类名称",
          "method": "POST",
          "path": "/yypms/pms/category/getCateforyNameByUsername",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-show-all",
          "description": "查询类目列表：查询类目列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/category/getCategoryList/{showAll}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-parent-cat-id-show-all",
          "description": "查询类目列表：查询类目列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/category/getCategoryList/{showAll}/{parentCatId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-name",
          "description": "查询类目名称：查询类目名称(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/category/getCategoryName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-select-category",
          "description": "获取分类下拉：获取分类下拉",
          "method": "POST",
          "path": "/yypms/pms/category/getCategorySelect",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-code-by-categroy",
          "description": "按Categroy查询SPU编码：按Categroy查询SPU编码(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/category/getSpuCodeByCategroy",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-category",
          "description": "查询全部父分类（index：页码）：查询全部父分类（index：页码）",
          "method": "POST",
          "path": "/yypms/pms/category/query",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-by-category-id",
          "description": "查询属于这个用户的父分类 功能描述：查询属于这个用户的父分类 功能描述",
          "method": "POST",
          "path": "/yypms/pms/category/queryByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-by-parent-category-id",
          "description": "按父级类目ID查询：按父级类目ID查询(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/category/queryByParentCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-subclassification",
          "description": "查询Subclassification：查询Subclassification(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/category/querySubclassification",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-list-certification",
          "description": "查询商品资质列表：查询商品资质列表",
          "method": "POST",
          "path": "/yypms/pms/certification/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-competitor-by-spu",
          "description": "通过spu获取竞品信息：通过spu获取竞品信息",
          "method": "POST",
          "path": "/yypms/pms/CompetitorController/findCompetitorBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-goods",
          "description": "通过userid 获取总条数：通过userid 获取总条数",
          "method": "POST",
          "path": "/yypms/pms/Competitor/findGoods",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-pool-message-competitor",
          "description": "通过用户id 获取物品信息：通过用户id 获取物品信息",
          "method": "POST",
          "path": "/yypms/pms/Competitor/findPoolMessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-country-c",
          "description": "显示国家：显示国家",
          "method": "POST",
          "path": "/yypms/pms/countryCController/getCountryC",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-state",
          "description": "显示国家：显示国家",
          "method": "POST",
          "path": "/yypms/pms/countryCController/getState",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-customer-service-date",
          "description": "查询客服绩效数据：查询客服绩效数据",
          "method": "POST",
          "path": "/yypms/pms/customerServiceDateController/getCustomerServiceDate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-alibaba-product-attribute",
          "description": "查询阿里巴巴商品属性：查询阿里巴巴商品属性(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/developerMission/alibabaProductAttribute",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-ipm-project",
          "description": "选品任务审核：选品任务审核",
          "method": "POST",
          "path": "/yypms/pms/developerMission/checkIpmProject",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-manufacture",
          "description": "根据sku查询供应商：根据sku查询供应商",
          "method": "POST",
          "path": "/yypms/pms/developerMission/checkManufacture",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-deletesaler-arter-desc",
          "description": "查询销售美工备注：查询销售美工备注",
          "method": "POST",
          "path": "/yypms/pms/developerMission/deletesalerArterDesc",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-developer-mission",
          "description": "导出海外仓任务列表：导出海外仓任务列表",
          "method": "POST",
          "path": "/yypms/pms/developerMission/exportDeveloperMission",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-approval-by-spu",
          "description": "根据项目id查询spu：根据项目id查询spu",
          "method": "POST",
          "path": "/yypms/pms/developerMission/findApprovalBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-cut-cost-price",
          "description": "降本任务列表：降本任务列表",
          "method": "POST",
          "path": "/yypms/pms/developerMission/findCutCostPrice",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-developer-mission",
          "description": "开发池列表查询：开发池列表查询",
          "method": "POST",
          "path": "/yypms/pms/developerMission/findDeveloperMission",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-goods-supply-by-id",
          "description": "查询货源信息：查询货源信息",
          "method": "POST",
          "path": "/yypms/pms/developerMission/findGoodsSupplyById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manufacture2",
          "description": "搜索供应商：搜索供应商",
          "method": "POST",
          "path": "/yypms/pms/developerMission/findManufacture2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-spu-by-projectid",
          "description": "根据项目id查询spu：根据项目id查询spu",
          "method": "POST",
          "path": "/yypms/pms/developerMission/findSpuByProjectid",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get1688-goods-info",
          "description": "通过商品URL获取1688商品数据：通过商品URL获取1688商品数据",
          "method": "POST",
          "path": "/yypms/pms/developerMission/get1688GoodsInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get1688-goods-info-v1",
          "description": "在公共类中放入一个字符串属性用来存储每一调用需要的accesstoken：在公共类中放入一个字符串属性用来存储每一调用需要的accesstoken",
          "method": "POST",
          "path": "/yypms/pms/developerMission/get1688GoodsInfoV1",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-developer-mission-get-alibaba-ai-product-img",
          "description": "获取根据1688链接获取的图片：获取根据1688链接获取的图片",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getAlibabaAiProductImg/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-mession-id-get-audit-records-by-spu",
          "description": "按SPU查询审核记录列表：按SPU查询审核记录列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getAuditRecordsBySpu/{messionId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-mession-id-get-audit-records",
          "description": "查询审核记录列表：查询审核记录列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getAuditRecords/{messionId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-baidu-product-image",
          "description": "查询重复：查询重复",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getBaiduProductImage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-big-chief-list",
          "description": "开发部大酋长：开发部大酋长",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getBigChiefList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-check-by-by-emp",
          "description": "按按EMP查询校验：按按EMP查询校验(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getCheckByByEmp",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-check-emp2",
          "description": "获得审核人：获得审核人",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getCheckEmp2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-mission-id-get-developer-check-by-mission-id-and-check-by",
          "description": "查询审核人：查询审核人",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getDeveloperCheckByMissionIdAndCheckBy/{missionId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-developer-check-status",
          "description": "查询开发者校验状态：查询开发者校验状态(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getDeveloperCheckStatus",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-developer-mission-check-by-mission-id",
          "description": "查询审核人列表：查询审核人列表",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getDeveloperMissionCheckByMissionId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-develop-from-fba-product",
          "description": "获取所有的开发人员Fba组产品部：获取所有的开发人员Fba组产品部",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getDevelopFromFbaProduct",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-develop-type-developer-mission",
          "description": "查询开发类型：查询开发类型",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getDevelopType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-hwc-developer-mission",
          "description": "查询海外仓类型列表：查询海外仓类型列表",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getHwcDeveloperMission",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-mission-id-get-hwc-developer-mission",
          "description": "查询审核人missionid：查询审核人missionid",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getHwcDeveloperMission/{missionId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ipm-project",
          "description": "海外仓计划列表：海外仓计划列表",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getIpmProject",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ipm-ware-house-type",
          "description": "查询海外仓类型：查询海外仓类型",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getIpmWareHouseType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-json-by-mission-id",
          "description": "一次性临时拉取：一次性临时拉取",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getJsonByMissionId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-developer-mission-get-no-pass-content-by-id",
          "description": "获取最后一条记录：获取最后一条记录",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getNoPassContentById/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-operational-opinion-by-id",
          "description": "查询运营意见：查询运营意见",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getOperationalOpinionById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-operational-opinions",
          "description": "查询运营意见：查询运营意见",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getOperationalOpinions",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-mission-id-get-picture-by-mission",
          "description": "查询图片：查询图片",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getPictureByMission/{missionId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-purchase-order-info",
          "description": "开发任务采样备货查看1688订单：开发任务采样备货查看1688订单",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getPurchaseOrderInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-getsaler-arter-desc",
          "description": "查询销售美工备注：查询销售美工备注",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getsalerArterDesc",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-mission-id-get-sku-proper-ties-by-mission-id",
          "description": "查询sku属性：查询sku属性",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getSkuProperTiesByMissionId/{missionId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-mission-id-get-sku-properties-info-by-mission-id",
          "description": "按MissionID查询SKU属性信息：按MissionID查询SKU属性信息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getSkuPropertiesInfoByMissionId/{missionId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-phone-brand",
          "description": "查询SPU电话品牌：查询SPU电话品牌(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getSpuPhoneBrand",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-phone-id",
          "description": "查询SPU电话品牌模型：查询SPU电话品牌模型(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getSpuPhoneBrandModel/{phoneId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-supply-url-by-sku-developer-mission",
          "description": "根据sku查询供应商：根据sku查询供应商",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getSupplyUrlBySku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-type-id",
          "description": "查询海外仓类型：查询海外仓类型",
          "method": "POST",
          "path": "/yypms/pms/developerMission/getWarehouseTypeNameCheck/{typeId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-ipm-project-info",
          "description": "海外仓计划列表：海外仓计划列表",
          "method": "POST",
          "path": "/yypms/pms/developerMission/ipmProjectInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-return-spu",
          "description": "搜索供应商：搜索供应商",
          "method": "POST",
          "path": "/yypms/pms/developerMission/returnSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-development-project-detail",
          "description": "开发项目详情：开发项目详情",
          "method": "POST",
          "path": "/yypms/pms/developmentProject/developmentProjectDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-development-project-edit-detail",
          "description": "开发项目编辑详情：开发项目编辑详情",
          "method": "POST",
          "path": "/yypms/pms/developmentProject/developmentProjectEditDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-development-project-list",
          "description": "开发项目列表：开发项目列表",
          "method": "POST",
          "path": "/yypms/pms/developmentProject/developmentProjectList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-project-and-spu",
          "description": "获取所有的项目名称和spu：获取所有的项目名称和spu",
          "method": "POST",
          "path": "/yypms/pms/developmentProject/getAllProjectAndSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-development-project-diagram",
          "description": "获取项目创建以来一年内的销量趋势图数据：获取项目创建以来一年内的销量趋势图数据",
          "method": "POST",
          "path": "/yypms/pms/developmentProject/getDevelopmentProjectDiagram",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-development-teamer",
          "description": "获取开发小组成员：获取开发小组成员",
          "method": "POST",
          "path": "/yypms/pms/developmentProject/getDevelopmentTeamer",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-not-end-project-and-spu",
          "description": "获取未结束的项目名称和spu：获取未结束的项目名称和spu",
          "method": "POST",
          "path": "/yypms/pms/developmentProject/getNotEndProjectAndSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-project-select",
          "description": "添加SPU到开发项目下拉：添加SPU到开发项目下拉",
          "method": "POST",
          "path": "/yypms/pms/developmentProject/getProjectSelect",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-price-range-list",
          "description": "价格区间列表：价格区间列表",
          "method": "POST",
          "path": "/yypms/pms/developpool/getPriceRangeList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-nature-list",
          "description": "产品简介列表：产品简介列表",
          "method": "POST",
          "path": "/yypms/pms/developpool/getProductNatureList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-list-developpool",
          "description": "产品开发池列表：产品开发池列表",
          "method": "POST",
          "path": "/yypms/pms/developpool/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-alilevel",
          "description": "查询ali类层级为1的类目：查询ali类层级为1的类目",
          "method": "POST",
          "path": "/yypms/pms/EbayOrAliexpressMessage/findAlilevel",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-alilevel-two",
          "description": "查询ali类层级为2的类目：查询ali类层级为2的类目",
          "method": "POST",
          "path": "/yypms/pms/EbayOrAliexpressMessage/findAlilevelTwo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-ali-message",
          "description": "查询ALI消息：查询ALI消息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/EbayOrAliexpressMessage/findAliMessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-name-bycategory-level",
          "description": "eby类目层级1：eby类目层级1",
          "method": "POST",
          "path": "/yypms/pms/EbayOrAliexpressMessage/findCategoryNameBycategoryLevel",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-ebay-category",
          "description": "查询ebay一级 和二级分类：查询ebay一级 和二级分类",
          "method": "POST",
          "path": "/yypms/pms/EbayOrAliexpressMessage/findEbayCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-ebaylevel-two",
          "description": "查询ebay类层级为2的类目：查询ebay类层级为2的类目",
          "method": "POST",
          "path": "/yypms/pms/EbayOrAliexpressMessage/findEbaylevelTwo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-ebay-message",
          "description": "查询eBay消息：查询eBay消息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/EbayOrAliexpressMessage/findEbayMessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-smtcategory",
          "description": "查询aliexpress一级和二级分类：查询aliexpress一级和二级分类",
          "method": "POST",
          "path": "/yypms/pms/EbayOrAliexpressMessage/findSMTCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-wish-message",
          "description": "查询Wish消息：查询Wish消息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/EbayOrAliexpressMessage/FindWishMessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-all-site-ebay-singlepublish-info-controller",
          "description": "根据所有站点：根据所有站点",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/findAllSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-by-name-en",
          "description": "根据英文名查询分类：根据英文名查询分类",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/findCategoryByNameEn",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-by-search-ebay-singlepublish-info-controller",
          "description": "根据分类名字模糊搜索分类：根据分类名字模糊搜索分类",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/findCategoryBySearch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-by-spu-ebay-singlepublish-info-controller",
          "description": "根据SPU查询分类：根据SPU查询分类",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/findCategoryBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-name-by-category-id-ebay-singlepublish-info-controller",
          "description": "根据分类id查询名字：根据分类id查询名字",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/findCategoryNameByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-item-specifics-by-category-id-ebay-singlepublish-info-controller",
          "description": "根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/findItemSpecificsByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manage-employee-names-ebay-singlepublish-info-controller",
          "description": "查询当前登陆人管理人员：查询当前登陆人管理人员",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/findManageEmployeeNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-pms-sku-by-spu-ebay-singlepublish-info-controller",
          "description": "根据spu查询sku：根据spu查询sku",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/findPmsSkuBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-ebay-singlepublish-info-controller",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/findShopByPt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-spu-ebay-singlepublish-info-controller",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/findShopByPtSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ebay-singlepublish-condition",
          "description": "获取物品状况：获取物品状况",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/getEbaySinglepublishCondition",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ebay-singlepublish-info-by-id",
          "description": "获取刊登信息ById：获取刊登信息ById",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/getEbaySinglepublishInfoById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ebay-singlepublish-list",
          "description": "获取刊登信息列表：获取刊登信息列表",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/getEbaySinglepublishList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ebay-singlepublish-product-category",
          "description": "获取商品分类：获取商品分类",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/getEbaySinglepublishProductCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ebay-singlepublish-shop-category",
          "description": "获取店铺分类：获取店铺分类",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/getEbaySinglepublishShopCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-pic-infos-by-pic-style-ebay-singlepublish-info-controller",
          "description": "获取套图对应信息：获取套图对应信息",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/getPicInfosByPicStyle",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-price-information-ebay-singlepublish-info-controller",
          "description": "根据所有站点：根据所有站点",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/getPriceInformation",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-price-information2-ebay-singlepublish-info-controller",
          "description": "计算价格信息2：计算价格信息2",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/getPriceInformation2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-item-specifics-search-ebay-singlepublish-info-controller",
          "description": "条目Specifics搜索：条目Specifics搜索(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/ebaySinglepublishInfoController/itemSpecificsSearch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-freight-template",
          "description": "显示运费：显示运费",
          "method": "POST",
          "path": "/yypms/pms/freightTemplateController/getAllFreightTemplate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-freight-template-two",
          "description": "显示运费：显示运费",
          "method": "POST",
          "path": "/yypms/pms/freightTemplateController/getAllFreightTemplateTwo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-project-and-change-project-status",
          "description": "校验项目变更项目状态：校验项目变更项目状态(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/checkProjectAndChangeProjectStatus",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-sku-inventory",
          "description": "校验SKU库存：校验SKU库存(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/checkSkuInventory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-project-view",
          "description": "导出海外仓任务列表：导出海外仓任务列表",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/exportProjectView",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-skuview",
          "description": "导出海外仓任务列表：导出海外仓任务列表",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/exportSkuview",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-development-chief",
          "description": "查询Development主管：查询Development主管(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getDevelopmentChief",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-emp-by-dep",
          "description": "按DEP查询EMP：按DEP查询EMP(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getEmpByDep",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-fbasaler",
          "description": "查询FBASaler：查询FBASaler(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getFBASaler",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-order-info",
          "description": "查询订单信息：查询订单信息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getOrderInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-project-address",
          "description": "查询项目地址：查询项目地址(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getProjectAddress",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-project-infos-by-sku",
          "description": "根据sku查询对应的海外仓备货计划：根据sku查询对应的海外仓备货计划",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getProjectInfosBySku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-project-list-hwc-development-project",
          "description": "查询项目列表：查询项目列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getProjectList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-project-sku-hwc-development-project",
          "description": "查询项目SKU：查询项目SKU(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getProjectSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-site",
          "description": "查询站点：查询站点(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-info",
          "description": "查询SKU信息：查询SKU信息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getSkuInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-purchase-info",
          "description": "查询SKU采购信息：查询SKU采购信息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getSkuPurchaseInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-view",
          "description": "查询SKU查看：查询SKU查看(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getSkuView",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-view-info-by-sku",
          "description": "按SKU查询SKU查看信息：按SKU查询SKU查看信息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getSkuViewInfoBySku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-teamer-by-chief",
          "description": "按主管查询Teamer：按主管查询Teamer(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getTeamerByChief",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ware-house",
          "description": "查询WAREHouse：查询WAREHouse(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getWareHouse",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-warehouse-type",
          "description": "查询仓库类型：查询仓库类型(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/hwcDevelopmentProject/getWarehouseType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-infrine-ment-case-list",
          "description": "侵权case列表查询：侵权case列表查询",
          "method": "POST",
          "path": "/yypms/pms/infringement/queryInfrineMentCaseList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-infrine-ment-category",
          "description": "查询侵权case的字典表(infinge_code)：查询侵权case的字典表(infinge_code)",
          "method": "POST",
          "path": "/yypms/pms/infringement/queryInfrineMentCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-infrine-ment-platform",
          "description": "根据条件查询侵权店铺：根据条件查询侵权店铺",
          "method": "POST",
          "path": "/yypms/pms/infringement/queryInfrineMentPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-infrine-ment-platform-list",
          "description": "获取店铺侵权列表：获取店铺侵权列表",
          "method": "POST",
          "path": "/yypms/pms/infringement/queryInfrineMentPlatformList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-shop-appeal-case-list",
          "description": "查询店铺申诉列表：查询店铺申诉列表",
          "method": "POST",
          "path": "/yypms/pms/infringement/queryShopAppealCaseList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-infringing-word2",
          "description": "检查是否包含违禁词：检查是否包含违禁词",
          "method": "POST",
          "path": "/yypms/pms/infringing/checkInfringingWord2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-infringing-word-list2",
          "description": "检查是否包含违禁词：检查是否包含违禁词",
          "method": "POST",
          "path": "/yypms/pms/infringing/checkInfringingWordList2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-prohibited-words-infringing",
          "description": "检查是否包含违禁词：检查是否包含违禁词",
          "method": "POST",
          "path": "/yypms/pms/infringing/checkProhibitedWords",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check",
          "description": "检查是否包含钓鱼词和侵权词：检查是否包含钓鱼词和侵权词",
          "method": "POST",
          "path": "/yypms/pms/infringing/prohibited/word/check",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-all-site-lazada-singlepublish-info-controller",
          "description": "根据所有站点：根据所有站点",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/findAllSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-by-search-lazada-singlepublish-info-controller",
          "description": "根据分类名字模糊搜索分类：根据分类名字模糊搜索分类",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/findCategoryBySearch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-name-by-category-id-lazada-singlepublish-info-controller",
          "description": "根据分类id查询名字：根据分类id查询名字",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/findCategoryNameByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-item-specifics-by-category-id-lazada-singlepublish-info-controller",
          "description": "图片上传：图片上传",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/findItemSpecificsByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manage-employee-names-lazada-singlepublish-info-controller",
          "description": "查询当前登陆人管理人员：查询当前登陆人管理人员",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/findManageEmployeeNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-pms-sku-by-spu-lazada-singlepublish-info-controller",
          "description": "根据spu查询sku：根据spu查询sku",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/findPmsSkuBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-lazada-singlepublish-info-controller",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/findShopByPt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-spu-lazada-singlepublish-info-controller",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/findShopByPtSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-search",
          "description": "查询当前登陆人店铺信息(搜索)：查询当前登陆人店铺信息(搜索)",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/findShopBySearch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-lazada-info-for-edit",
          "description": "接口进行拉取信息：接口进行拉取信息",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/getLazadaInfoForEdit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-lazada-singlepublish-info-by-id",
          "description": "获取刊登信息ById：获取刊登信息ById",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/getLazadaSinglepublishInfoById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-lazada-singlepublish-info-by-id-edit",
          "description": "查询信息：查询信息",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/getLazadaSinglepublishInfoByIdEdit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-lazada-singlepublish-list",
          "description": "获取刊登信息列表：获取刊登信息列表",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/getLazadaSinglepublishList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-lazada-singlepublish-product-category",
          "description": "获取商品分类：获取商品分类",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/getLazadaSinglepublishProductCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-price-information-lazada-singlepublish-info-controller",
          "description": "计算价格信息：计算价格信息",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/getPriceInformation",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-price-information2-lazada-singlepublish-info-controller",
          "description": "计算价格信息2：计算价格信息2",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/getPriceInformation2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-item-specifics-search-lazada-singlepublish-info-controller",
          "description": "条目Specifics搜索：条目Specifics搜索(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/lazadaSinglepublishInfoController/itemSpecificsSearch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-manufacture",
          "description": "供应商中台导出：供应商中台导出",
          "method": "POST",
          "path": "/yypms/pms/manufacture/export",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-list-manufacture",
          "description": "供应商中台的列表数据：供应商中台的列表数据",
          "method": "POST",
          "path": "/yypms/pms/manufacture/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-list-mercadolibre",
          "description": "美客多-产品类目下拉选择：美客多-产品类目下拉选择",
          "method": "POST",
          "path": "/yypms/pms/mercadolibre/getCategoryList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-picture-list",
          "description": "美客多-获取图片：美客多-获取图片",
          "method": "POST",
          "path": "/yypms/pms/mercadolibre/getPictureList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-select-publish-request-page",
          "description": "美客多单品刊登列表查询：美客多单品刊登列表查询",
          "method": "POST",
          "path": "/yypms/pms/mercadolibre/selectPublishRequestPage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-list-task",
          "description": "获取批量刊登任务列表：获取批量刊登任务列表",
          "method": "POST",
          "path": "/yypms/pms/mercadolibre/task/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-category-id-template",
          "description": "根据分类获取刊登模板数据：根据分类获取刊登模板数据",
          "method": "POST",
          "path": "/yypms/pms/mercadolibre/template/{categoryId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-middle-panel-data",
          "description": "导出中台数据信息：导出中台数据信息",
          "method": "POST",
          "path": "/yypms/pms/middlePanel/exportMiddlePanelData",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-middle-panel-list",
          "description": "获取中台数据列表：获取中台数据列表",
          "method": "POST",
          "path": "/yypms/pms/middlePanel/getMiddlePanelList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-notification-list",
          "description": "查询通知列表：查询通知列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/middlePanel/getNotificationList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-by-condition",
          "description": "按条件查询店铺：按条件查询店铺(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/middlePanel/getShopByCondition",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-strategy",
          "description": "查看店铺策略：查看店铺策略",
          "method": "POST",
          "path": "/yypms/pms/middlePanel/getShopStrategy",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-item-specifics-by-category-id-ozon-no-source-template",
          "description": "根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics",
          "method": "POST",
          "path": "/yypms/pms/ozonNoSourceTemplate/findItemSpecificsByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ozon-no-source-publish-template-info",
          "description": "Ozon无源刊登模板查询信息：Ozon无源刊登模板查询信息",
          "method": "POST",
          "path": "/yypms/pms/ozonNoSourceTemplate/getOzonNoSourcePublishTemplateInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-batch-get-ozon-warehouse",
          "description": "批量根据店铺查询仓库列表：批量根据店铺查询仓库列表",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/batchGetOzonWarehouse",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-by-search-ozon-singlepublish-info-controller",
          "description": "根据分类名字模糊搜索分类：根据分类名字模糊搜索分类",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/findCategoryBySearch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-name-by-category-id-ozon-singlepublish-info-controller",
          "description": "根据分类id查询名字：根据分类id查询名字",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/findCategoryNameByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-item-specifics-by-category-id-ozon-singlepublish-info-controller",
          "description": "根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/findItemSpecificsByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-item-specifics-by-category-id-old",
          "description": "根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/findItemSpecificsByCategoryIdOld",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manage-employee-names-ozon-singlepublish-info-controller",
          "description": "查询当前登陆人管理人员：查询当前登陆人管理人员",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/findManageEmployeeNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-ozon-singlepublish-info-controller",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/findShopByPt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-spu-ozon-singlepublish-info-controller",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/findShopByPtSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-ozon-category",
          "description": "获取所有分类：获取所有分类",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/getAllOzonCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-cropped-orig-image-list-by-erp-spu",
          "description": "通过spu获取sku裁剪图片对应的原图：通过spu获取sku裁剪图片对应的原图",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/getCroppedOrigImageListByErpSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-orig-image-and-cropped-list-by-erp-spu",
          "description": "通过spu获取sku图片的原图和裁剪后的图片：通过spu获取sku图片的原图和裁剪后的图片",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/getOrigImageAndCroppedListByErpSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ozon-singlepublish-category",
          "description": "获取所有分类：获取所有分类",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/getOzonSinglepublishCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ozon-singlepublish-info-by-id",
          "description": "获取刊登信息ById：获取刊登信息ById",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/getOzonSinglepublishInfoById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ozon-singlepublish-list",
          "description": "获取刊登信息列表：获取刊登信息列表",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/getOzonSinglepublishList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-ozon-warehouse",
          "description": "获取店铺仓库列表：获取店铺仓库列表",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/getOzonWarehouse",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-price-information-ozon-singlepublish-info-controller",
          "description": "计算价格信息：计算价格信息",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/getPriceInformation",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-translated-picture",
          "description": "获取翻译后图片：获取翻译后图片",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/getTranslatedPicture",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-ozon-image-cropped-list",
          "description": "提交裁剪数据：提交裁剪数据",
          "method": "POST",
          "path": "/yypms/pms/ozonSinglepublishInfoController/ozonImageCroppedList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-page-ozon-template",
          "description": "分页查询 Ozon SPU 类目模板列表：分页查询 Ozon SPU 类目模板列表",
          "method": "POST",
          "path": "/yypms/pms/ozonTemplate/page",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-phishing-words",
          "description": "单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存：单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存",
          "method": "POST",
          "path": "/yypms/pms/phishingWordsController/checkPhishingWords",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-phishing-words2",
          "description": "单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存：单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存",
          "method": "POST",
          "path": "/yypms/pms/phishingWordsController/checkPhishingWords2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-phishing-words3",
          "description": "校验PhishingWords3：校验PhishingWords3(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/phishingWordsController/checkPhishingWords3",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-phishing-words-list",
          "description": "单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存：单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存",
          "method": "POST",
          "path": "/yypms/pms/phishingWordsController/checkPhishingWordsList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-phishing-words-list2",
          "description": "单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存：单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存",
          "method": "POST",
          "path": "/yypms/pms/phishingWordsController/checkPhishingWordsList2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-phishing-words-list3",
          "description": "校验PhishingWords列表3：校验PhishingWords列表3(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/phishingWordsController/checkPhishingWordsList3",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-photo-order",
          "description": "导出拍照订单：导出拍照订单",
          "method": "POST",
          "path": "/yypms/pms/photoOrder/exportPhotoOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-emp",
          "description": "查询全部EMP：查询全部EMP(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/photoOrder/getAllEmp",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-photo-order",
          "description": "获取列表：获取列表",
          "method": "POST",
          "path": "/yypms/pms/photoOrder/getPhotoOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-plat-sale",
          "description": "Getfind平台销售：Getfind平台销售(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/platform/findPlatSale",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-pool-message-pool-messag",
          "description": "通过用户id 获取物品信息：通过用户id 获取物品信息",
          "method": "POST",
          "path": "/yypms/pms/PoolMessag/findPoolMessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-tag-name",
          "description": "通过用户id 获取物品信息：通过用户id 获取物品信息",
          "method": "POST",
          "path": "/yypms/pms/PoolMessag/findTagName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-submit-sale",
          "description": "获取放弃愿意：获取放弃愿意",
          "method": "POST",
          "path": "/yypms/pms/PoolMessag/spuSubmitSale",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-pricing-allocation-strategy",
          "description": "计算定价分摊策略：计算定价分摊策略",
          "method": "POST",
          "path": "/yypms/pms/pricingAllocationStrategyController/getAllPricingAllocationStrategy",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get1688-product-attr",
          "description": "通过SPU找：通过SPU找",
          "method": "POST",
          "path": "/yypms/pms/productApi/get1688ProductAttr",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-picture-by-spu",
          "description": "通过spu 获取sku级图片信息：通过spu 获取sku级图片信息",
          "method": "POST",
          "path": "/yypms/pms/productImage/findPictureBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-product-picture-by-list",
          "description": "获取产品图片任务池所有产品信息：获取产品图片任务池所有产品信息",
          "method": "POST",
          "path": "/yypms/pms/productImage/findProductPictureByList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-develop",
          "description": "查询全部Develop：查询全部Develop(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/productImage/getAllDevelop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-month",
          "description": "获取图片任务排行榜月份下拉框：获取图片任务排行榜月份下拉框",
          "method": "POST",
          "path": "/yypms/pms/productImage/getMonth",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-poster-type",
          "description": "海报类型：海报类型",
          "method": "POST",
          "path": "/yypms/pms/productImage/getPosterType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-picture",
          "description": "获取图片任务个数：获取图片任务个数",
          "method": "POST",
          "path": "/yypms/pms/productImage/getProductPicture",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-project-sku-product-image",
          "description": "查询项目SKU：查询项目SKU(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/productImage/getProjectSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-property",
          "description": "执行数据库单个查询：执行数据库单个查询",
          "method": "POST",
          "path": "/yypms/pms/productImage/getProperty",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-getspusupplyurl",
          "description": "根据spu获取sku供应商链接：根据spu获取sku供应商链接",
          "method": "POST",
          "path": "/yypms/pms/productImage/getspusupplyurl",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-all-generated-path",
          "description": "获取所有生成路径：获取所有生成路径",
          "method": "POST",
          "path": "/yypms/pms/productImage/queryAllGeneratedPath",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-competitor-bysup",
          "description": "根据商品spu获取竞品url地址：根据商品spu获取竞品url地址",
          "method": "POST",
          "path": "/yypms/pms/productImage/queryCompetitorBysup",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-product-image",
          "description": "查询商品图片：查询商品图片(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/productImage/queryProductImage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-product-picture-by-user-id-product-image",
          "description": "获取当前账号的图片任务：获取当前账号的图片任务",
          "method": "POST",
          "path": "/yypms/pms/productImage/queryProductPictureByUserId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-product-picture-by-user-id2",
          "description": "获取当前账号的图片任务-新：获取当前账号的图片任务-新",
          "method": "POST",
          "path": "/yypms/pms/productImage/queryProductPictureByUserId2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-product-picture-by-user-id3",
          "description": "获取所有的图片任务-新：获取所有的图片任务-新",
          "method": "POST",
          "path": "/yypms/pms/productImage/queryProductPictureByUserId3",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-photograph-mission",
          "description": "导出拍照任务查询列表：导出拍照任务查询列表",
          "method": "POST",
          "path": "/yypms/pms/ProductPhotographController/exportPhotographMission",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-photograph-mission",
          "description": "批量添加拍照任务：批量添加拍照任务",
          "method": "POST",
          "path": "/yypms/pms/ProductPhotographController/findPhotographMission",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-photograph-mission-by-spu",
          "description": "根据spu查询拍照任务：根据spu查询拍照任务",
          "method": "POST",
          "path": "/yypms/pms/ProductPhotographController/findPhotographMissionBySPU",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-photograph-list",
          "description": "分页获取拍照任务池数据：分页获取拍照任务池数据",
          "method": "POST",
          "path": "/yypms/pms/ProductPhotographController/getPhotographList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-product-picture-by-user-id-product-photograph-controller",
          "description": "获取当前账号的拍照任务：获取当前账号的拍照任务",
          "method": "POST",
          "path": "/yypms/pms/ProductPhotographController/queryProductPictureByUserId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-product-tort",
          "description": "侵权列表：侵权列表",
          "method": "POST",
          "path": "/yypms/pms/productTort/findProductTort",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-sale-leader-tort",
          "description": "编辑侵权：编辑侵权",
          "method": "POST",
          "path": "/yypms/pms/productTort/findSaleLeaderTort",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-sale-tort",
          "description": "侵权列表：侵权列表",
          "method": "POST",
          "path": "/yypms/pms/productTort/findSaleTort",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-msg-type-list-product-tort",
          "description": "侵权标记：侵权标记",
          "method": "POST",
          "path": "/yypms/pms/productTort/getMsgTypeList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-validate-sku",
          "description": "销售人员收到侵权任务列表：销售人员收到侵权任务列表",
          "method": "POST",
          "path": "/yypms/pms/productTort/validateSKU",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-batch-upd-sku-info",
          "description": "Product批量修改：Product批量修改",
          "method": "POST",
          "path": "/yypms/pms/product/batchUpdSkuInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-product-title-is-tort",
          "description": "获取品类自定义的颜色和尺码列表：获取品类自定义的颜色和尺码列表",
          "method": "POST",
          "path": "/yypms/pms/product/checkProductTitleIsTort",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-bind-product",
          "description": "导出捆绑商品：导出捆绑商品",
          "method": "POST",
          "path": "/yypms/pms/product/exportBindProduct",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-fba-quality-info",
          "description": "spu质检信息：spu质检信息",
          "method": "POST",
          "path": "/yypms/pms/product/fbaQualityInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-ebay-describe",
          "description": "查询eBayDescribe：productId",
          "method": "POST",
          "path": "/yypms/pms/product/findEbayDescribe",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-ebay-describe-by-spu",
          "description": "按SPU查询eBayDescribe：按SPU查询eBayDescribe(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/product/findEbayDescribeBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-keyword",
          "description": "开发任务完成统计：开发任务完成统计",
          "method": "POST",
          "path": "/yypms/pms/product/findKeyword",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-money-rate",
          "description": "获取币种：获取币种",
          "method": "POST",
          "path": "/yypms/pms/product/findMoneyRate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-product-byspu",
          "description": "通过spu获取sku信息：通过spu获取sku信息",
          "method": "POST",
          "path": "/yypms/pms/product/findProductByspu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-product-finish-message",
          "description": "开发任务完成统计：开发任务完成统计",
          "method": "POST",
          "path": "/yypms/pms/product/findProductFinishMessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-sku-by-spu",
          "description": "更新spu图片选择图类型：更新spu图片选择图类型",
          "method": "POST",
          "path": "/yypms/pms/product/findSkuBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-token",
          "description": "获取1688token：获取1688token",
          "method": "POST",
          "path": "/yypms/pms/product/findToken",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-current-time",
          "description": "获取当前时间的年和周：获取当前时间的年和周",
          "method": "POST",
          "path": "/yypms/pms/product/getCurrentTime",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-end-time",
          "description": "重算：重算",
          "method": "POST",
          "path": "/yypms/pms/product/getEndTime",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-fba-pack-info-and-image-info-by-skus",
          "description": "按SKU列表查询FBA打包信息图片信息：按SKU列表查询FBA打包信息图片信息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/product/getFbaPackInfoAndImageInfoBySkus",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-info-submit",
          "description": "根据sku或spu查询对应侵权信息：根据sku或spu查询对应侵权信息",
          "method": "POST",
          "path": "/yypms/pms/product/getInfoSubmit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-attribute",
          "description": "查询商品属性：查询商品属性(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/product/getProductAttribute",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-picture-url",
          "description": "通过spu获取图片路径：通过spu获取图片路径",
          "method": "POST",
          "path": "/yypms/pms/product/getProductPictureUrl",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-picture-url2",
          "description": "通过spu获取图片路径2：通过spu获取图片路径2",
          "method": "POST",
          "path": "/yypms/pms/product/getProductPictureUrl2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-tort",
          "description": "查询该产品是否存在侵权提醒：查询该产品是否存在侵权提醒",
          "method": "POST",
          "path": "/yypms/pms/product/getProductTort",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sale-team-members-by-name",
          "description": "获取销售经理的组员，无权限查看：获取销售经理的组员，无权限查看",
          "method": "POST",
          "path": "/yypms/pms/product/getSaleTeamMembersByName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-limit-price",
          "description": "获取spu限价，以及销售备注等：获取spu限价，以及销售备注等",
          "method": "POST",
          "path": "/yypms/pms/product/getSpuLimitPrice",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-shop-by-name",
          "description": "获取商品的可刊登店铺：获取商品的可刊登店铺",
          "method": "POST",
          "path": "/yypms/pms/product/getSpuShopByName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-supply-url-by-sku-product",
          "description": "获取sku供应链接信息：获取sku供应链接信息",
          "method": "POST",
          "path": "/yypms/pms/product/getSupplyUrlBySku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-turnover-ratio-list",
          "description": "查询动销率统计：查询动销率统计",
          "method": "POST",
          "path": "/yypms/pms/product/getTurnoverRatioList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-pushprojecttomabang",
          "description": "列表信息<已废弃>：列表信息<已废弃>",
          "method": "POST",
          "path": "/yypms/pms/product/pushprojecttomabang",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-page",
          "description": "列表信息：列表信息",
          "method": "POST",
          "path": "/yypms/pms/product/queryPage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-sku",
          "description": "按条件查sku：按条件查sku",
          "method": "POST",
          "path": "/yypms/pms/product/querySku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-project-relation-list",
          "description": "查询项目Relation列表：查询项目Relation列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/projectRelation/getProjectRelationList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-info",
          "description": "刊登时获取店铺信息：刊登时获取店铺信息",
          "method": "POST",
          "path": "/yypms/pms/publishedProduct/getShopInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-list",
          "description": "查询店铺列表：查询店铺列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/publishedProduct/getShopList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-submit",
          "description": "查询提交：查询提交(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/publishedProduct/getSubmit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-published-list",
          "description": "Published列表：Published列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/publishedProduct/publishedList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-exception-list",
          "description": "采购异常列表：采购异常列表",
          "method": "POST",
          "path": "/yypms/pms/purchaseException/getExceptionList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-exception-list-old",
          "description": "采购异常列表：采购异常列表",
          "method": "POST",
          "path": "/yypms/pms/purchaseException/getExceptionListOld",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-msg-type-list-purchase-exception",
          "description": "采购异常消息类型：采购异常消息类型",
          "method": "POST",
          "path": "/yypms/pms/purchaseException/getMsgTypeList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-getpurchaseexmessage",
          "description": "获取sku默认供应商：获取sku默认供应商",
          "method": "POST",
          "path": "/yypms/pms/purchaseException/getpurchaseexmessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-supply",
          "description": "获取sku默认供应商：获取sku默认供应商",
          "method": "POST",
          "path": "/yypms/pms/purchaseException/getSkuSupply",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-upd-fba-sample-exception-from-order",
          "description": "FBA封样确认编辑订单详情页接口：FBA封样确认编辑订单详情页接口",
          "method": "POST",
          "path": "/yypms/pms/purchaseException/updFbaSampleExceptionFromOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-name-by-category-id-shopee-singlepublish-controller-cnsc",
          "description": "根据分类id查询名字：根据分类id查询名字",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/findCategoryNameByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-item-specifics-by-category-id-shopee-singlepublish-controller-cnsc",
          "description": "根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/findItemSpecificsByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manage-employee-names-shopee-singlepublish-controller-cnsc",
          "description": "查询当前登陆人管理人员：查询当前登陆人管理人员",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/findManageEmployeeNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-shopee-singlepublish-controller-cnsc",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/findShopByPt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-file-size",
          "description": "根据标题推荐分类：根据标题推荐分类",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getFileSize",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-info-by-url-from-votobo-shopee-singlepublish-controller-cnsc",
          "description": "根据链接解析出所需数据：根据链接解析出所需数据",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getInfoByUrlFromVotobo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-logistics-by-shop-name-shopee-singlepublish-controller-cnsc",
          "description": "根据店铺获取物流模板：根据店铺获取物流模板",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getLogisticsByShopName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-main-pics-by-spu-style-shopee-singlepublish-controller-cnsc",
          "description": "获取文件大小：获取文件大小",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getMainPicsBySpuStyle",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-pic-infos-by-pic-style-shopee-singlepublish-controller-cnsc",
          "description": "获取套图：获取套图",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getPicInfosByPicStyle",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-price-information-shopee-singlepublish-controller-cnsc",
          "description": "计算价格信息：计算价格信息",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getPriceInformation",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-category-recommend-shopee-singlepublish-controller-cnsc",
          "description": "根据标题推荐分类：根据标题推荐分类",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getShopeeCategoryRecommend",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-category-recommend2",
          "description": "根据标题推荐分类：根据标题推荐分类",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getShopeeCategoryRecommend2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-singlepublish-info-by-id-shopee-singlepublish-controller-cnsc",
          "description": "获取刊登信息ById：获取刊登信息ById",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getShopeeSinglepublishInfoById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-singlepublish-shop-category-shopee-singlepublish-controller-cnsc",
          "description": "获取店铺分类：获取店铺分类",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getShopeeSinglepublishShopCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-id-by-shop-name",
          "description": "根据店铺获取merchantid下的所有店铺名：根据店铺获取merchantid下的所有店铺名",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getShopIdByShopName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-smt-singlepublish-list-shopee-singlepublish-controller-cnsc",
          "description": "获取刊登信息列表：获取刊登信息列表",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishControllerCNSC/getSmtSinglepublishList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-cnsc",
          "description": "判断是否是cnsc店铺：判断是否是cnsc店铺",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/checkCNSC",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-name-by-category-id-shopee-singlepublish-controller",
          "description": "根据分类id查询名字：根据分类id查询名字",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/findCategoryNameByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-item-specifics-by-category-id-shopee-singlepublish-controller",
          "description": "根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/findItemSpecificsByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manage-employee-names-shopee-singlepublish-controller",
          "description": "查询当前登陆人管理人员：查询当前登陆人管理人员",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/findManageEmployeeNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-shopee-singlepublish-controller",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/findShopByPt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-new",
          "description": "查询当前登陆人店铺信息排除直邮店铺：查询当前登陆人店铺信息排除直邮店铺",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/findShopByPtNew",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-spu-shopee-singlepublish-controller",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/findShopByPtSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-info-by-url-from-votobo-shopee-singlepublish-controller",
          "description": "根据链接解析出所需数据：根据链接解析出所需数据",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/getInfoByUrlFromVotobo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-logistics-by-shop-name-shopee-singlepublish-controller",
          "description": "根据店铺获取物流模板：根据店铺获取物流模板",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/getLogisticsByShopName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-price-information-shopee-singlepublish-controller",
          "description": "图片上传：图片上传",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/getPriceInformation",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-category-recommend-shopee-singlepublish-controller",
          "description": "根据标题推荐分类：根据标题推荐分类",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/getShopeeCategoryRecommend",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-info-edit-id",
          "description": "接口进行拉取信息：接口进行拉取信息",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/getShopeeInfoEditId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-singlepublish-info-by-id-shopee-singlepublish-controller",
          "description": "获取刊登信息ById：获取刊登信息ById",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/getShopeeSinglepublishInfoById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-singlepublish-info-by-id-edit",
          "description": "查询信息：查询信息",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/getShopeeSinglepublishInfoByIdEdit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-singlepublish-shop-category-shopee-singlepublish-controller",
          "description": "获取店铺分类：获取店铺分类",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/getShopeeSinglepublishShopCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-smt-singlepublish-list-shopee-singlepublish-controller",
          "description": "获取刊登信息列表：获取刊登信息列表",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/getSmtSinglepublishList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-spu-competitor-link",
          "description": "查询spu速建链接：查询spu速建链接",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/getSpuCompetitorLink/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-type-shop-name",
          "description": "根据标题推荐分类：根据标题推荐分类",
          "method": "POST",
          "path": "/yypms/pms/shopeeSinglepublishController/getString/{shopName}/{type}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-voucher",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/shopeeVoucherController/findShopVoucher",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-voucher-by-id",
          "description": "获取优惠券明细：获取优惠券明细",
          "method": "POST",
          "path": "/yypms/pms/shopeeVoucherController/getShopeeVoucherById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-vouchers",
          "description": "获取优惠券列表：获取优惠券列表",
          "method": "POST",
          "path": "/yypms/pms/shopeeVoucherController/getShopeeVouchers",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-voucher-template-by-id",
          "description": "获取优惠券模板列表：获取优惠券模板列表",
          "method": "POST",
          "path": "/yypms/pms/shopeeVoucherController/getShopeeVoucherTemplateById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shopee-voucher-templates",
          "description": "获取优惠券模板列表：获取优惠券模板列表",
          "method": "POST",
          "path": "/yypms/pms/shopeeVoucherController/getShopeeVoucherTemplates",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-sku-category",
          "description": "开发中台 类目维度导出：开发中台 类目维度导出",
          "method": "POST",
          "path": "/yypms/pms/skuCategory/export",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-list-sku-category",
          "description": "开发中台的一级分类列表数据：开发中台的一级分类列表数据",
          "method": "POST",
          "path": "/yypms/pms/skuCategory/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-second-categorys",
          "description": "开发中台的二级分类列表数据：开发中台的二级分类列表数据",
          "method": "POST",
          "path": "/yypms/pms/skuCategory/secondCategorys",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-three-category",
          "description": "开发中台的三级分类列表数据：开发中台的三级分类列表数据",
          "method": "POST",
          "path": "/yypms/pms/skuCategory/threeCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-sku-manager",
          "description": "开发中台的列表数据：开发中台的列表数据",
          "method": "POST",
          "path": "/yypms/pms/skuManager/export",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-top-thirty-refund-sku-list",
          "description": "开发中台查看当月退款TOP30的sku：开发中台查看当月退款TOP30的sku",
          "method": "POST",
          "path": "/yypms/pms/skuManager/getTopThirtyRefundSkuList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-list-sku-manager",
          "description": "开发中台的列表数据：开发中台的列表数据",
          "method": "POST",
          "path": "/yypms/pms/skuManager/list",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-freight-by-shop",
          "description": "查询当前登陆人管理的店铺：查询当前登陆人管理的店铺",
          "method": "POST",
          "path": "/yypms/pms/smtShiptoConfigurationController/findFreightByShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manage-employee-names-smt-shipto-configuration-controller",
          "description": "查询当前登陆人管理人员：查询当前登陆人管理人员",
          "method": "POST",
          "path": "/yypms/pms/smtShiptoConfigurationController/findManageEmployeeNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manager-shops",
          "description": "查询当前登陆人管理的店铺：查询当前登陆人管理的店铺",
          "method": "POST",
          "path": "/yypms/pms/smtShiptoConfigurationController/findManagerShops",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shipto-for-batch-price",
          "description": "查询当前登陆人管理的店铺：查询当前登陆人管理的店铺",
          "method": "POST",
          "path": "/yypms/pms/smtShiptoConfigurationController/findShiptoForBatchPrice",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-select-item-by-config-id",
          "description": "根据配置id查询出所有绑定的产品：根据配置id查询出所有绑定的产品",
          "method": "POST",
          "path": "/yypms/pms/smtShiptoConfigurationController/selectItemByConfigId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-select-shipto-configuration",
          "description": "查询shipto列表：查询shipto列表",
          "method": "POST",
          "path": "/yypms/pms/smtShiptoConfigurationController/selectShiptoConfiguration",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-select-shipto-configuration-page",
          "description": "查询shipto列表：查询shipto列表",
          "method": "POST",
          "path": "/yypms/pms/smtShiptoConfigurationController/selectShiptoConfigurationPage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-all-site-smt-singlepublish-controller",
          "description": "根据所有站点：根据所有站点",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findAllSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-by-search-smt-singlepublish-controller",
          "description": "根据分类名字模糊搜索分类：根据分类名字模糊搜索分类",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findCategoryBySearch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-by-spu-smt-singlepublish-controller",
          "description": "根据所有站点：根据所有站点",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findCategoryBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-category-name-by-category-id-smt-singlepublish-controller",
          "description": "根据分类id查询名字：根据分类id查询名字",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findCategoryNameByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-item-specifics-by-category-id-smt-singlepublish-controller",
          "description": "根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findItemSpecificsByCategoryId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-item-specifics-by-category-id-edit",
          "description": "根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findItemSpecificsByCategoryIdEdit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manage-employee-names-smt-singlepublish-controller",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findManageEmployeeNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-smt-singlepublish-controller",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findShopByPt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-by-pt-edit",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findShopByPtEdit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-group-list",
          "description": "获取当前店铺的分组：获取当前店铺的分组",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findShopGroupList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-shop-jitb",
          "description": "查询当前登陆人店铺信息：查询当前登陆人店铺信息",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findShopJITB",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-smt-category-surgeword",
          "description": "根据类别查找流量词：根据类别查找流量词",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/findSmtCategorySurgeword",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-all-shop-productgroups",
          "description": "同步会员分组：同步会员分组",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getAllShopProductgroups",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-logistics-by-shop-name-smt-singlepublish-controller",
          "description": "根据店铺获取物流模板：根据店铺获取物流模板",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getLogisticsByShopName",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-main-pics-by-spu",
          "description": "根据spu获取模板初始图片：根据spu获取模板初始图片",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getMainPicsBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-main-pics-by-spu-style-smt-singlepublish-controller",
          "description": "获取套图对应信息：获取套图对应信息",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getMainPicsBySpuStyle",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-msr-list",
          "description": "获取欧代图：获取欧代图",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getMsrList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-pic-infos-by-pic-style-smt-singlepublish-controller",
          "description": "获取套图对应信息：获取套图对应信息",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getPicInfosByPicStyle",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-price-information-smt-singlepublish-controller",
          "description": "计算价格信息：计算价格信息",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getPriceInformation",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-variation-info",
          "description": "SKU组套信息下拉：SKU组套信息下拉",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getSkuVariationInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-smt-category-by-item-id",
          "description": "根据产品id获取分类id：根据产品id获取分类id",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getSmtCategoryByItemId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-smt-related-marketing-info",
          "description": "查询速卖通Related营销信息：查询速卖通Related营销信息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getSmtRelatedMarketingInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-smt-singlepublish-info-by-id",
          "description": "获取刊登信息ById：获取刊登信息ById",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getSmtSinglepublishInfoById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-smt-singlepublish-info-by-id-edit",
          "description": "获取编辑信息ById：获取编辑信息ById",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getSmtSinglepublishInfoByIdEdit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-smt-singlepublish-list-smt-singlepublish-controller",
          "description": "获取刊登信息列表：获取刊登信息列表",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getSmtSinglepublishList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-smt-singlepublish-list-edit",
          "description": "获取编辑信息列表：获取编辑信息列表",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getSmtSinglepublishListEdit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-smt-single-publish-main-country",
          "description": "自定义模板获取国家：自定义模板获取国家",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getSmtSinglePublishMainCountry",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-smt-singlepublish-shop-category",
          "description": "获取店铺分类：获取店铺分类",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getSmtSinglepublishShopCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-oudai-picture",
          "description": "获取欧代图：获取欧代图",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getSpuOudaiPicture",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-url-info",
          "description": "根据产品id获取分类id：根据产品id获取分类id",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getUrlInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-votobo-info-by-item-id-smt-singlepublish-controller",
          "description": "根据产品id获取分类id：根据产品id获取分类id",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getVotoboInfoByItemId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-vtpics-by-spu",
          "description": "按SPU查询VTPICS：按SPU查询VTPICS(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/getVTPicsBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-hscode-by-attribute",
          "description": "获取海关监管属性：获取海关监管属性",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/queryHscodeByAttribute",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-type-by-hscode",
          "description": "获取海关监管属性：获取海关监管属性",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/queryTypeByHscode",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-select-smt-related-marketing-template",
          "description": "查询速卖通Related营销模板：查询速卖通Related营销模板(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/selectSmtRelatedMarketingTemplate",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-select-smt-related-marketing-template-by-id",
          "description": "按ID查询速卖通Related营销模板：按ID查询速卖通Related营销模板(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/selectSmtRelatedMarketingTemplateById",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-sendmessage",
          "description": "获取欧代图：获取欧代图",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/sendmessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-smt-edit-info-refresh",
          "description": "添加在线listing生成记录：添加在线listing生成记录",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/smtEditInfoRefresh",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-yl-export",
          "description": "查找有几套图：查找有几套图",
          "method": "POST",
          "path": "/yypms/pms/smtSinglepublishController/ylExport",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-forbid-platform",
          "description": "校验Forbid平台：校验Forbid平台(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/spu/checkForbidPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-spu-wait-check",
          "description": "校验SPUWAIT校验：校验SPUWAIT校验(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/spu/checkSpuWaitCheck",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-product-image-by-style",
          "description": "查询指定风格SPU图：查询指定风格SPU图",
          "method": "POST",
          "path": "/yypms/pms/spu/findProductImageByStyle",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-site-by-mabang-id2",
          "description": "批量更新spu 清仓、停产状态：批量更新spu 清仓、停产状态",
          "method": "POST",
          "path": "/yypms/pms/spu/findSiteByMabangId2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-spu-import",
          "description": "查看导入商品记录：查看导入商品记录",
          "method": "POST",
          "path": "/yypms/pms/spu/findSpuImport",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-spu-info",
          "description": "商品池spu展示：商品池spu展示",
          "method": "POST",
          "path": "/yypms/pms/spu/findSpuInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-spu-info2",
          "description": "SPU编辑页面：SPU编辑页面",
          "method": "POST",
          "path": "/yypms/pms/spu/findSpuInfo2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-supply-info-by-spu",
          "description": "通过spu获取供应商信息：通过spu获取供应商信息",
          "method": "POST",
          "path": "/yypms/pms/spu/findSupplyInfoBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-user",
          "description": "修改spu的商品分类：修改spu的商品分类",
          "method": "POST",
          "path": "/yypms/pms/spu/findUser",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-user3",
          "description": "查询用户3：查询用户3(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/spu/findUser3",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-user-by-team-id",
          "description": "按团队ID查询用户：按团队ID查询用户(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/spu/findUserByTeamId",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-arter-num",
          "description": "按spu查日志：按spu查日志",
          "method": "POST",
          "path": "/yypms/pms/spu/getArterNum",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-gpsr-picture",
          "description": "查询GPSR图片：查询GPSR图片(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/spu/getGpsrPicture/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-pms-spu-list",
          "description": "查询刊登系统SPU列表：查询刊登系统SPU列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/spu/getPmsSpuList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-push-info-by-spu",
          "description": "按SPU查询推送信息：按SPU查询推送信息(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/spu/getPushInfoBySpu/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-spu-ou-dai-picture",
          "description": "查询SPUOUDAI图片：查询SPUOUDAI图片(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/spu/getSpuOuDaiPicture/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-publishflag",
          "description": "获取spu刊登标记数量：获取spu刊登标记数量",
          "method": "POST",
          "path": "/yypms/pms/spu/getSpuPublishflag",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-re-check-status",
          "description": "查询SPURE校验状态：查询SPURE校验状态(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/spu/getSpuReCheckStatus",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spusales-volume",
          "description": "获取spu7/30/90天销量：获取spu7/30/90天销量",
          "method": "POST",
          "path": "/yypms/pms/spu/getSpusalesVolume",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-is-can-edit-spu",
          "description": "是否有编辑spu的权限：是否有编辑spu的权限",
          "method": "POST",
          "path": "/yypms/pms/spu/isCanEditSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-is-show-update-and-audit",
          "description": "在修改spu时是否展示已修改重新提交审核：在修改spu时是否展示已修改重新提交审核",
          "method": "POST",
          "path": "/yypms/pms/spu/isShowUpdateAndAudit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-is-video-file",
          "description": "是否视频文件：是否视频文件(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/spu/isVideoFile",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-supported-platforms",
          "description": "查询SPUSupportedPlatforms：查询SPUSupportedPlatforms(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/spu/supportedPlatforms",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-strategy-list",
          "description": "获取优化策略结果数据结果集合：获取优化策略结果数据结果集合",
          "method": "POST",
          "path": "/yypms/pms/strategyReasonCategory/getStrategyList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-project",
          "description": "导出项目：导出项目(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/submitProduct/exportProject",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-develop-consumer",
          "description": "通过登录名获取创建的开发任务：通过登录名获取创建的开发任务",
          "method": "POST",
          "path": "/yypms/pms/submitProduct/findDevelopConsumer",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-developer-consumer-list",
          "description": "我的开发任务列表：我的开发任务列表",
          "method": "POST",
          "path": "/yypms/pms/submitProduct/getDeveloperConsumerList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-developer-list",
          "description": "销售人员下拉列表：销售人员下拉列表",
          "method": "POST",
          "path": "/yypms/pms/submitProduct/getDeveloperList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-developer-type-list",
          "description": "获取开发分类表：获取开发分类表",
          "method": "POST",
          "path": "/yypms/pms/submitProduct/getDeveloperTypeList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-developer-type-list-page",
          "description": "获取开发分类表分页：获取开发分类表分页",
          "method": "POST",
          "path": "/yypms/pms/submitProduct/getDeveloperTypeListPage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-type-developer-list",
          "description": "开发分类列表中开发人员列表：开发分类列表中开发人员列表",
          "method": "POST",
          "path": "/yypms/pms/submitProduct/getTypeDeveloperList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-user-dept",
          "description": "用户部门：用户部门",
          "method": "POST",
          "path": "/yypms/pms/submitProduct/getUserDept",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-user-list",
          "description": "通过不同角色获取不同用户列表：通过不同角色获取不同用户列表",
          "method": "POST",
          "path": "/yypms/pms/submitProduct/getUserList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-scm-supply-by-store-url",
          "description": "通过url获取供应商信息：通过url获取供应商信息",
          "method": "POST",
          "path": "/yypms/pms/SupplyController/findScmSupplyByStoreUrl",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-supply-develop-controller",
          "description": "分类下拉：分类下拉",
          "method": "POST",
          "path": "/yypms/pms/supplyDevelopController/getCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-supply-pool-list",
          "description": "供应商开发池列表：供应商开发池列表",
          "method": "POST",
          "path": "/yypms/pms/supplyDevelopController/getSupplyPoolList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-tag-type",
          "description": "查询标签类型：查询标签类型(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/tag/getTagType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-name-tag",
          "description": "查询名称：package com.instudio.pms.controller;",
          "method": "POST",
          "path": "/yypms/pms/tag/name",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-query-tag",
          "description": "查询：package com.instudio.pms.controller;",
          "method": "POST",
          "path": "/yypms/pms/tag/query",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-risk-words",
          "description": "获取推荐类目：获取推荐类目",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/checkRiskWords",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-tk-single-publish-list",
          "description": "导出接口：导出接口",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/exportTkSinglePublishList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manage-employee-names-tiktok-singlepublish-global-controller",
          "description": "计算价格：计算价格",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/findManageEmployeeNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-brand-list",
          "description": "获取品牌：获取品牌",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getBrandList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-info-data-tiktok-singlepublish-global-controller",
          "description": "获取分类属性：获取分类属性",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getCategoryInfoData",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-recommend",
          "description": "获取推荐类目：获取推荐类目",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getCategoryRecommend",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-rules-tiktok-singlepublish-global-controller",
          "description": "获取分类规则：获取分类规则",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getCategoryRules",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-rules-new",
          "description": "获取分类规则：获取分类规则",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getCategoryRulesNew",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-global-warehouse",
          "description": "获取推荐类目：获取推荐类目",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getGlobalWarehouse",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-main-shop-list-sites",
          "description": "查找店铺下站点：查找店铺下站点",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getMainShopListSites",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-main-shop-sites",
          "description": "查找店铺下站点：查找店铺下站点",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getMainShopSites",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-main-shop-sites-for-sd",
          "description": "查找店铺下站点：查找店铺下站点",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getMainShopSitesForSd",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-pics-tiktok-singlepublish-global-controller",
          "description": "获取刊登明细：获取刊登明细",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getProductPics",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-pics2",
          "description": "获取商品池图片：获取商品池图片",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getProductPics2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-by-first-category",
          "description": "通过一级类目获取店铺：通过一级类目获取店铺",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getShopByFirstCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-by-pt-tiktok-singlepublish-global-controller",
          "description": "查找店铺：查找店铺",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getShopByPt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-by-pt-have-published",
          "description": "查找店铺：查找店铺",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getShopByPtHavePublished",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-manufacturers-list",
          "description": "获取店铺制造商信息：获取店铺制造商信息",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getShopManufacturersList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-responsible-person-list",
          "description": "获取店铺责任人信息：获取店铺责任人信息",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getShopResponsiblePersonList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-site-by-first-category",
          "description": "通过一级类目获取店铺：通过一级类目获取店铺",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getShopSiteByFirstCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-img-color-size-tiktok-singlepublish-global-controller",
          "description": "获取sku尺码颜色：获取sku尺码颜色",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getSkuImgColorSize",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-template-category-attributes",
          "description": "品牌列表：品牌列表",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getTemplateCategoryAttributes",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-tiktok-category-recommend",
          "description": "获取推荐类目：获取推荐类目",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getTiktokCategoryRecommend",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-tiktok-singlepublish-list-info-list-tiktok-singlepublish-global-controller",
          "description": "保存刊登信息：保存刊登信息",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getTiktokSinglepublishListInfoList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-tiktok-singlepublish-result-tiktok-singlepublish-global-controller",
          "description": "获取刊登明细：获取刊登明细",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getTiktokSinglepublishResult",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-tk-first-category",
          "description": "获取tk一级类目：获取tk一级类目",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getTkFirstCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-warehouse",
          "description": "查询仓库：查询仓库(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishGlobalController/getWarehouse",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-manage-employee-names-tiktok-singlepublish-local-controller",
          "description": "获取仓库：获取仓库",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishLocalController/findManageEmployeeNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-info-data-tiktok-singlepublish-local-controller",
          "description": "获取分类属性：获取分类属性",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishLocalController/getCategoryInfoData",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-rules-tiktok-singlepublish-local-controller",
          "description": "获取分类规则：获取分类规则",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishLocalController/getCategoryRules",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-product-pics-tiktok-singlepublish-local-controller",
          "description": "获取刊登明细：获取刊登明细",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishLocalController/getProductPics",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-shop-by-pt-tiktok-singlepublish-local-controller",
          "description": "查找店铺：查找店铺",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishLocalController/getShopByPt",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sku-img-color-size-tiktok-singlepublish-local-controller",
          "description": "获取sku尺码颜色：获取sku尺码颜色",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishLocalController/getSkuImgColorSize",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-tiktok-local-warehouse-record",
          "description": "获取仓库：获取仓库",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishLocalController/getTiktokLocalWarehouseRecord",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-tiktok-singlepublish-list-info-list-tiktok-singlepublish-local-controller",
          "description": "保存刊登信息：保存刊登信息",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishLocalController/getTiktokSinglepublishListInfoList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-tiktok-singlepublish-result-tiktok-singlepublish-local-controller",
          "description": "获取刊登明细：获取刊登明细",
          "method": "POST",
          "path": "/yypms/pms/tiktokSinglepublishLocalController/getTiktokSinglepublishResult",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-transportation-time",
          "description": "运送时间：运送时间",
          "method": "POST",
          "path": "/yypms/pms/transportationTimeController/findTransportationTime",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-publish-shop-auto",
          "description": "查询可刊登店铺：查询可刊登店铺",
          "method": "POST",
          "path": "/yypms/pms/walmart/auto/findPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-auto-get-caauto-walmart-publish-confirm",
          "description": "获取自动刊登任务信息(CA)：获取自动刊登任务信息(CA)",
          "method": "POST",
          "path": "/yypms/pms/walmart/auto/getCAAutoWalmartPublishConfirm/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-export-walmart-shop",
          "description": "查询导出沃尔玛店铺：查询导出沃尔玛店铺(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/walmart/auto/getExportWalmartShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-intercept-log-list",
          "description": "拦截关键词/SKU 操作日志分页查询：拦截关键词/SKU 操作日志分页查询",
          "method": "POST",
          "path": "/yypms/pms/walmart/auto/getInterceptLogList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-publish-shop-list",
          "description": "获取刊登店铺列表：获取刊登店铺列表",
          "method": "POST",
          "path": "/yypms/pms/walmart/auto/getPublishShopList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-walmart-publish-confirm-list-auto",
          "description": "获取walmart刊登任务列表：获取walmart刊登任务列表",
          "method": "POST",
          "path": "/yypms/pms/walmart/auto/getWalmartPublishConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-auto-get-walmart-publish-confirm-new",
          "description": "获取刊登任务信息：获取刊登任务信息",
          "method": "POST",
          "path": "/yypms/pms/walmart/auto/getWalmartPublishConfirmNew/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-walmart-shop-list",
          "description": "获取walmart店铺下拉：获取walmart店铺下拉",
          "method": "POST",
          "path": "/yypms/pms/walmart/auto/getWalmartShopList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-walmart-task-list",
          "description": "获取刊登店铺列表：获取刊登店铺列表",
          "method": "POST",
          "path": "/yypms/pms/walmart/auto/getWalmartTaskList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-check-walmart-forbid-word",
          "description": "walmart刊登禁售词校验：walmart刊登禁售词校验",
          "method": "POST",
          "path": "/yypms/pms/walmart/checkWalmartForbidWord",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-walmart-get-cawalmart-publish-confirm",
          "description": "获取刊登任务信息(CA)：获取刊登任务信息(CA)",
          "method": "POST",
          "path": "/yypms/pms/walmart/getCAWalmartPublishConfirm/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-field-config",
          "description": "根据选择的变体属性值, 获取对应的字段配置信息：根据选择的变体属性值, 获取对应的字段配置信息",
          "method": "POST",
          "path": "/yypms/pms/walmart/getFieldConfig",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-field-config-v3",
          "description": "根据选择的变体属性值, 获取对应的字段配置信息(最新)：根据选择的变体属性值, 获取对应的字段配置信息(最新)",
          "method": "POST",
          "path": "/yypms/pms/walmart/getFieldConfigV3",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-image-walmart",
          "description": "获取图片：获取图片",
          "method": "POST",
          "path": "/yypms/pms/walmart/getSpuImage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-walmart-category-list",
          "description": "获取walmart刊登分类(模糊查询)：获取walmart刊登分类(模糊查询)",
          "method": "POST",
          "path": "/yypms/pms/walmart/getWalmartCategoryList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-spu-get-walmart-color-and-size",
          "description": "获取color和size：获取color和size",
          "method": "POST",
          "path": "/yypms/pms/walmart/getWalmartColorAndSize/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-walmart-publish-category",
          "description": "获取walmart刊登分类：获取walmart刊登分类",
          "method": "POST",
          "path": "/yypms/pms/walmart/getWalmartPublishCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-walmart-publish-category-new",
          "description": "获取walmart刊登分类(新)：获取walmart刊登分类(新)",
          "method": "POST",
          "path": "/yypms/pms/walmart/getWalmartPublishCategoryNew",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-walmart-publish-category-path",
          "description": "获取walmart刊登分类路径(模糊查询)：获取walmart刊登分类路径(模糊查询)",
          "method": "POST",
          "path": "/yypms/pms/walmart/getWalmartPublishCategoryPath",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-walmart-publish-confirm-list-walmart",
          "description": "获取walmart刊登任务列表：获取walmart刊登任务列表",
          "method": "POST",
          "path": "/yypms/pms/walmart/getWalmartPublishConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-walmart-publish-confirm-list-v3",
          "description": "获取walmart刊登任务列表(最新)：获取walmart刊登任务列表(最新)",
          "method": "POST",
          "path": "/yypms/pms/walmart/getWalmartPublishConfirmListV3",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-walmart-get-walmart-publish-confirm-new",
          "description": "获取刊登任务信息(新)：获取刊登任务信息(新)",
          "method": "POST",
          "path": "/yypms/pms/walmart/getWalmartPublishConfirmNew/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-walmart-get-walmart-publish-confirm-v3",
          "description": "获取刊登任务信息(最新)：获取刊登任务信息(最新)",
          "method": "POST",
          "path": "/yypms/pms/walmart/getWalmartPublishConfirmV3/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-walmart-get-walmart-publish-confirm",
          "description": "获取刊登任务信息：获取刊登任务信息",
          "method": "POST",
          "path": "/yypms/pms/walmart/getWalmartPublishConfirm/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-walmart-publish-shop",
          "description": "获取walmart刊登店铺：获取walmart刊登店铺",
          "method": "POST",
          "path": "/yypms/pms/walmart/getWalmartPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-export-sku",
          "description": "导出walmart刊登SKU：导出walmart刊登SKU",
          "method": "POST",
          "path": "/yypms/pms/walmart/publish/sku/export",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-warehouse-receive",
          "description": "获取warehouserreceive信息：获取warehouserreceive信息",
          "method": "POST",
          "path": "/yypms/pms/WarehouseReceive/findWarehouseReceive",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-house",
          "description": "查询House：查询House(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/warehouse/findHouse",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-house-positon",
          "description": "查询HousePostiton：查询HousePostiton(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/warehouse/findHousePositon",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-receive",
          "description": "查询收货：查询收货(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/warehouse/findReceive",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-attributes-by-type",
          "description": "模糊查询wish属性值：模糊查询wish属性值",
          "method": "POST",
          "path": "/yypms/pms/wishPublishInfo/getAttributesByType",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-country-shipping",
          "description": "国家运费设置：国家运费设置",
          "method": "POST",
          "path": "/yypms/pms/wishPublishInfo/getCountryShipping",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-main-pics-by-spu-style-wish-publish-info",
          "description": "获取套图：获取套图",
          "method": "POST",
          "path": "/yypms/pms/wishPublishInfo/getMainPicsBySpuStyle",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-pic-infos-by-pic-style-wish-publish-info",
          "description": "获取套图：获取套图",
          "method": "POST",
          "path": "/yypms/pms/wishPublishInfo/getPicInfosByPicStyle",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-sell-price-by-sku",
          "description": "获取到售价：获取到售价",
          "method": "POST",
          "path": "/yypms/pms/wishPublishInfo/getSellPriceBySku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-spu-info",
          "description": "获取sku信息：获取sku信息",
          "method": "POST",
          "path": "/yypms/pms/wishPublishInfo/getSpuInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-preview",
          "description": "预览操作：预览操作",
          "method": "POST",
          "path": "/yypms/pms/wishPublishInfo/preview",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-tort-data",
          "description": "处理侵权词：处理侵权词",
          "method": "POST",
          "path": "/yypms/pms/wishPublishInfo/tortData",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-find-publish-shop-yandex-auto-publish",
          "description": "查询刊登店铺统计：查询刊登店铺统计",
          "method": "POST",
          "path": "/yypms/pms/yandexAutoPublish/findPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-yandex-publish-confirm-list",
          "description": "获取yandex刊登任务列表：获取yandex刊登任务列表",
          "method": "POST",
          "path": "/yypms/pms/yandexAutoPublish/getYandexPublishConfirmList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-yandex-auto-publish-get-yandex-publish-confirm",
          "description": "获取刊登任务信息：获取刊登任务信息",
          "method": "POST",
          "path": "/yypms/pms/yandexAutoPublish/getYandexPublishConfirm/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-yandex-publish-shop-yandex-auto-publish",
          "description": "获取yandex刊登店铺列表：获取yandex刊登店铺列表",
          "method": "POST",
          "path": "/yypms/pms/yandexAutoPublish/getYandexPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-yandex-task-list",
          "description": "获取提交刊登任务列表：获取提交刊登任务列表",
          "method": "POST",
          "path": "/yypms/pms/yandexAutoPublish/getYandexTaskList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-category-id-get-category-chain",
          "description": "查询类目Chain：查询类目Chain(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/yandexBasicDate/getCategoryChain/{categoryId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-list-yandex-basic-date",
          "description": "查询类目列表：查询类目列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/yandexBasicDate/getCategoryList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-parent-cat-id-get-category-list",
          "description": "查询类目列表：查询类目列表(源码无注释,按方法名推断)",
          "method": "POST",
          "path": "/yypms/pms/yandexBasicDate/getCategoryList/{parentCatId}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-category-select-yandex-basic-date",
          "description": "获取分类下拉：获取分类下拉",
          "method": "POST",
          "path": "/yypms/pms/yandexBasicDate/getCategorySelect",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-characteristic-option",
          "description": "根据属性获取对应值：根据属性获取对应值",
          "method": "POST",
          "path": "/yypms/pms/yandexPublish/getCharacteristicOption",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-id-yandex-publish-get-yandex-publish-confirm",
          "description": "获取刊登任务信息：获取刊登任务信息",
          "method": "POST",
          "path": "/yypms/pms/yandexPublish/getYandexPublishConfirm/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-yandex-publish-request-list",
          "description": "获取yandex刊登任务列表：获取yandex刊登任务列表",
          "method": "POST",
          "path": "/yypms/pms/yandexPublish/getYandexPublishRequestList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-yandex-publish-shop-yandex-publish",
          "description": "获取yandex刊登店铺列表：获取yandex刊登店铺列表",
          "method": "POST",
          "path": "/yypms/pms/yandexPublish/getYandexPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "instudio-pms-get-yandex-shop-config",
          "description": "yandex店铺配置列表：yandex店铺配置列表",
          "method": "POST",
          "path": "/yypms/pms/yandexPublish/getYandexShopConfig",
          "pathPrefix": "",
          "responseMode": "json"
        }
      ]
    },
    {
      "domain": "pms",
      "pathPrefix": "",
      "actions": [
        {
          "name": "aieditor-fontborders",
          "description": "字体特效(边框)样式列表查询：拉取字体特效/边框样式集合(Strapi collection)。前端右侧属性面板展示样式缩略图，点击后把样式配置(json:填充/描边/阴影等)应用到画布文本对象。请求为Strapi标准查询参数(populate展开缩略图、pagination分页)，响应为Strapi列表结构，经前端拦截器拍平后使用。",
          "method": "GET",
          "path": "/api/fontborders",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "app-apihost-query-all",
          "description": "会员码列表查询：查询当前登录用户已绑定/生效的 VIP 会员码列表，用于个人中心页展示 VIP 会员信息（会员类型、生效起止时间）。无请求参数，依赖请求头 Authorization: Bearer <token> 标识用户身份；返回结果落到页面 vipList 并渲染为会员信息描述列表。",
          "method": "GET",
          "path": "/api/vipcode/queryAll",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpaccount-last-logininfo",
          "description": "上次登录信息查询：客服工作台首页加载时查询当前登录用户的“上次登录信息”，用于在页面顶部弹出安全提醒条（不同 loginType 对应 成功/警告/危险 三种样式），5 秒后自动收起。",
          "method": "GET",
          "path": "/dev/erpaccount/erpaccount/dashboard/lastLogininfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-remind-msg",
          "description": "销售拜访卡-获取提醒消息：客服/销售工作台首页加载时拉取当前登录用户的提醒消息，返回提醒类型(color)与提醒文案(msg)，前端据 color 值以橙色警告条或绿色奖杯成功条的样式渲染到页面顶部 #getRemindMsg 区域，展示 5 秒后自动上滑隐藏。",
          "method": "GET",
          "path": "/dev/erpOrder/erpOrder/saleVistingCard/getRemindMsg",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-get-track-by-track-dny",
          "description": "东南亚战况播报(DeskRank)查询：客服工作台首页(customerservice.html)加载完成后自动调用，拉取东南亚X月战况播报排行榜数据：按销售平台列出店长、入围店铺毛利率、发货毛利率、总积分/奖金等，渲染到#DeskRank表格；同时用content更新更新时间。GET请求，无查询参数。",
          "method": "GET",
          "path": "/dev/erpOrder/erpOrder/saleVistingCard/getTrackByTrackDny",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yyecm-getsaleskpi",
          "description": "销售员KPI(等级)查询：客服/销售工作台首页看板：按员工ID查询该销售员的销售额排名、销售额、毛利排名、毛利率、共事天数等 KPI 指标，用于渲染销售名片的排名与当前/上期业绩。",
          "method": "GET",
          "path": "/dev/yyecm/ecm/sales/getsaleskpi",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-get-sku-info-by-spu",
          "description": "按SPU查询SKU信息(拍照延迟子表)：在「拍照延迟30天」任务列表中，点击某一行(SPU)的展开图标时，按该 SPU 查询其下所有 SKU 的明细(图片、SKU、SKU名称、仓位、库存数量)，渲染为子表格；库存≤0 时前端追加“(缺货)”标识。",
          "method": "GET",
          "path": "/erpTask/erpTask/developMustDo/{spu}/getSkuInfoBySpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-order-show-button",
          "description": "今日必做清零按钮显隐判断：客服工作台首页判断「保存今日清零结果」按钮是否显示：后端据当前登录人当日是否满足清零条件返回 obj=0/1，前端据此 show/hide 按钮。页面加载调用一次并每 30 秒轮询。",
          "method": "POST",
          "path": "/dev/erpOrder/erpOrder/saleFussionOrder/showButton",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-infring-product-num",
          "description": "待处理侵权商品数量查询：工作台(customerservice)首页顶部统计卡片，按员工查询其名下「待处理侵权」商品数量。页面初始化及切换组员时各调用一次，返回数量填入 #findInfringProductNum，并用返回的员工ID拼接侵权明细页链接。",
          "method": "POST",
          "path": "/dev/erpsoldout/erpsoldout/infringing/findInfringProductNum",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-log-find-log-exception-information",
          "description": "IP异常登录报表查询：按时间区间分页查询员工登录 IP 异常信息，返回按员工聚合的异常记录（员工、登录IP、异常IP、异常登录详情列表、创建时间、备注）及分页汇总（总条数/总页数）。前端「IP异常报表」页面据此渲染，每页固定20条。",
          "method": "POST",
          "path": "/erpLog/erpLog/loginLogController/findLogExceptionInformation",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-check-today-result",
          "description": "开发今日必做-查看今日清零结果：开发工作台「今日必做」清零弹窗：点击清零/保存按钮时调用，查询当前开发员各类必做任务（重量异常、产品投诉、复审被拒、售后问题、采购异常、拍照、推荐品等）的应完成数量，渲染到 mustDoTemplate 弹窗表格；实际完成数由前端从页面各 span 补写后随 saveTodayResult 保存。",
          "method": "POST",
          "path": "/erpTask/erpTask/developMustDo/checkTodayResult",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-find-photograph-mission",
          "description": "拍照延迟任务列表查询：首页/看板\"拍照延迟\"面板分页查询：按完成状态与当前页码，返回拍照/作图任务列表（含SPU、任务类型、拍照耗时、拍摄备注、采购/物流、库存状态、创建人/时间、任务起止时间、拍照状态等）及分页信息(总数、总页数)，前端以art-template渲染成列表并分页。",
          "method": "POST",
          "path": "/erpTask/erpTask/developMustDo/findPhotographMission",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-get-clear-details2",
          "description": "开发必做清零明细查询(人事部/组员维度)：按时间区间与组员维度分页查询开发必做各类任务的应完成/未完成明细：涵盖重量异常、产品投诉、售后问题、采购异常、拍照、质检二套图、复审被拒、推荐品共8类任务的应完成与未完成量，以及手动清零时间。",
          "method": "POST",
          "path": "/erpTask/erpTask/developMustDo/getClearDetails2",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-get-clear-details",
          "description": "开发必做事项清零明细查询：查询当前登录人（非人事部/总经办视角）的开发必做事项每日清零明细，返回按日期排列的重量异常、产品投诉、售后问题、采购异常、拍照、质检二套图、复审被拒、推荐品等各类事项的应完成/未完成数量及手动清零时间。当 content 为大酋长时额外展示组员(开发员)列。本接口无请求体参数。",
          "method": "POST",
          "path": "/erpTask/erpTask/developMustDo/getClearDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-get-delay-task",
          "description": "拍照/作图延迟任务列表查询：首页看板「拍照(延迟)」标签页分页查询：固定按 checkStatus=2 拉取拍照延迟(type=1)与作图延迟(type=2)两类任务，返回任务列表(含SPU/采购单/物流跟踪/完成状态/库存/创建人/任务起止时间等)及总数、总页数，前端用 art-template delayTemplate 渲染表格。",
          "method": "POST",
          "path": "/erpTask/erpTask/developMustDo/getDelayTask",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-spu",
          "description": "获取商品英文描述(getEnglishDescRipiton)：质检详情弹窗打开时（老维度质检任务），按 SPU 拉取该商品的英文产品描述文本；前端取返回体的 desc 字段，若非空再调用 AI 翻译接口翻成中文，填入‘产品描述’文本域。SPU 作为 URL 路径变量传递，无请求体。",
          "method": "POST",
          "path": "/erpTask/erpTask/developMustDo/getEnglishDescRipiton/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-get-explosion",
          "description": "销量下降(爆款监控)列表查询：首页\"开发必做\"面板中\"销量下降\"页签的分页查询：按复核/处理状态(checkStatus)分页拉取销量持续下降的 SPU 任务列表，返回 SPU 编号、产品名、日销量、库存、毛利率、开发员、任务推送/截止日期、处理备注等字段，用于渲染 #salesDownTemplate 表格。",
          "method": "POST",
          "path": "/erpTask/erpTask/developMustDo/getExplosion",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-get-product-illegal",
          "description": "违规产品列表查询：已完成商品看板\"违规产品\"页签的分页列表查询：按当前页码/每页条数、审核状态(待处理/已完成)及角色(经理·总监/普通)拉取违规(被举报)商品列表，返回商品信息、开发人/创建人、销量(7/30/90)、毛利率/退款率、举报类型/原因/图片、处理结果等字段，供 productsTemplate 渲染。",
          "method": "POST",
          "path": "/erpTask/erpTask/developMustDo/getProductIllegal",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-find-listing-review-task",
          "description": "刊登评价任务详情查询：根据任务ID查询「刊登评价」任务详情：返回任务处理状态/系统检查结果/截止时间/创建人等任务头信息，以及待评价的商品(listing)列表(图片、链接、商品ID、发布时间、评价状态等)，供任务细节页渲染倒计时、任务状态与商品评价入口。",
          "method": "POST",
          "path": "/erpTask/erpTask/reviewListingTask/findListingReviewTask",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-get-four-day-time",
          "description": "获取评价任务四/五天时间Tab信息：listing评价列表页(evaluationList.html)加载时调用，返回顶部若干个时间Tab（今天/昨天/前天/更早/精华等）的标题、任务数量与时间(区间)。前端据此渲染各Tab文案与徽标数字，并用第1个Tab的时间(TIMES)自动触发 reviewListingList 查询当日评价列表。",
          "method": "POST",
          "path": "/erpTask/erpTask/reviewListingTask/getFourDayTime",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-get-review-listing-detail-by-oper",
          "description": "我也要点评-Listing评价详情查询(按操作人)：“我也要点评”场景(flag=2)下，按 listingId 查询当前操作人对该 listing 的评价详情，回显标题/图片/价格/属性/促销/维护/好评 7 项评分、综合评定、评价正文与需改进内容，并据 evaluateTime 判断是否显示“保存草稿”按钮。",
          "method": "POST",
          "path": "/erpTask/erpTask/reviewListingTask/getReviewListingDetailByOper",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-review-listing-list",
          "description": "listing评价任务列表查询：listing评价任务列表查询：按平台、时间段(今天/昨天/前天/更早/精华/自定义区间)、类型、分组人员等条件查询已创建的 listing 评价任务，返回 listing 卡片列表(主图/标题/链接/图标/点赞数/评论数)供页面各 tab 与排行榜下钻渲染。",
          "method": "POST",
          "path": "/erpTask/erpTask/reviewListingTask/reviewListingList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-write-review-listing-detail",
          "description": "提交/保存 Listing 评价（writeReviewListingDetail）：提交或暂存一条 Listing 打造质量评价：七项 1~5 星评分(标题/图片/价格/属性/促销/维护频次(核心卖点)/好评维护(颜色/尺码))、综合评定下拉、listing亮点(content)与需要改进(listingMerit)两段富文本；按 draftType 区分保存草稿与提交评价，按场景传 sequenceid/listingId。",
          "method": "POST",
          "path": "/erpTask/erpTask/reviewListingTask/writeReviewListingDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-find-spu-publish-detail",
          "description": "SPU刊登报表明细查询：按 SPU编号/开发员/提交售卖时间/品牌或推荐人/出单量区间 分页查询 SPU 刊登报表明细，返回每个 SPU 在 eBay、wish、amazon、aliexpress、joom、mail.ru、zoodmall、shopee、其他 共9个平台的实际刊登量、放弃刊登量、出单量，以及平台标记完成量、放弃刊登量、出单量等汇总字段。",
          "method": "POST",
          "path": "/erpTask/erpTask/spuController/findSpuPublishDetail",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-find-category",
          "description": "订阅类目候选查询：任务细节页“订阅类目”弹窗打开前，加载全部可订阅类目名称列表，用于填充 #findCategory 的 chosen 多选下拉框的候选项；返回值为类目名称字符串数组，每个元素同时作为 option 的 value 与显示文本。",
          "method": "POST",
          "path": "/erpTask/erpTask/taskController/findCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-find-direction",
          "description": "人员(方向)下拉列表查询：任务统计报表页初始化时调用，用于拉取「人员/方向(direction)」下拉选择框的可选项列表。接口无请求参数，返回一个字符串数组，前端通过 contentTemplate2 模板 v-for 渲染为 #direction 下拉框的 option 选项。",
          "method": "POST",
          "path": "/erpTask/erpTask/taskController/findDirection",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-find-dispatch-clerk",
          "description": "分派任务者统计查询：任务管理（我收到的任务）页面右侧「分派任务者」栏统计：按日期区间、处理结果、任务分类类型统计各分派人（任务创建人）名下的任务数量，返回分派人头像、账号及任务数，用于渲染分派人列表。",
          "method": "POST",
          "path": "/erpTask/erpTask/taskController/findDispatchClerk",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-find-task",
          "description": "我收到的任务列表查询：任务管理页「我收到的任务」分页查询：按日期区间、处理结果筛选，返回任务卡片列表（含分类、已读状态、标题、内容、创建人、处理结果、倒计时截止时间等），并驱动分页与倒计时渲染。",
          "method": "POST",
          "path": "/erpTask/erpTask/taskController/findTask",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-task-get-leave-message",
          "description": "任务留言列表查询：任务/投诉详情页底部「物流任务 留言」模块的留言列表查询：按任务标识(spu)拉取该任务下全部留言及其子留言(回复)，用于渲染留言时间线（头像、留言人、时间、内容、关联SKU、嵌套回复）。",
          "method": "POST",
          "path": "/erpTask/erpTask/taskController/getLeaveMessage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "fengniao-bridge-service-translate-editor",
          "description": "获取AI精修(翻译编辑器)链接：图库右键\"AI精修\"时调用，向蜂鸟桥接服务请求翻译/精修编辑器访问链接(url)，请求体为空，用户身份通过请求头 customer_id(来源 localStorage userid) 传递；前端拿到 data.url 后作为编辑器 iframe 的 src 打开。",
          "method": "POST",
          "path": "/fengniao-bridge-service/auth/translateEditor",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "record-controller-get-recording",
          "description": "获取单条录制详情：录制回放(recordplay)插件在页面加载时先调用 /RecordController/ListRecordings 取得录制列表，再对列表中每条录制按 recordingId 调用本接口获取该条录制的完整内容（录制名、录制ID、事件列表），随后经 convertFromJson 转换并渲染为录制树、绑定回放触发事件。",
          "method": "POST",
          "path": "/RecordController/GetRecording",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "record-controller-list-recordings",
          "description": "录制回放-列出全部录制：Axure 原型「录制/回放(recordplay)」插件在页面加载事件(load.page_notes)中调用，用于拉取当前已保存的全部操作录制列表；前端遍历返回的 recordingList，逐条以其 recordingId 再调用 /RecordController/GetRecording 拉取录制详情并渲染到录制树中。",
          "method": "POST",
          "path": "/RecordController/ListRecordings",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "center-message-service-query-notice-page",
          "description": "通知公告分页查询：站内通知公告分页查询。页面加载后调用，拉取当前用户的通知列表（默认只查未读），前端取列表第一条 records[0].id，再调用 getById 拉取详情并弹窗提醒。",
          "method": "POST",
          "path": "/center-message-service/message/notice/queryNoticePage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "center-message-service-read",
          "description": "公告通知-标记已读：用户在首页公告弹窗中点击「确认已读」按钮时调用，按公告ID将当前公告标记为已读；以 GET 方式携带 noticeId 查询参数请求，前端调用后仅关闭弹窗、不消费返回体。",
          "method": "GET",
          "path": "/center-message-service/message/notice/read",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "crm-web-service-get-ebay-mail-notice",
          "description": "获取eBay未回复邮件提醒：拉取当前登录客服/员工需要处理的 eBay 未回复邮件汇总，按邮件主题聚合返回每个主题下的未回复邮件数量，前端在仪表盘右侧以 ElNotification 弹窗提醒；data 为空对象时不弹窗。配套确认已读按钮调用 removeEbayMailNotice。",
          "method": "POST",
          "path": "/crm-web-service/notice/getEbayMailNotice",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "mms-venom-list-warehouse",
          "description": "Temu 供应商销售管理-仓库(备货)库存列表查询：Temu 商家后台备货/库存分页列表查询：按店铺(mallid 头)、是否缺货、调价近N天、最大剩余库存数分页拉取 SKC 明细，返回缺货/售罄/即将售罄等汇总统计及每个 SKC 的 SKU 数量明细、多仓库存信息、价格与备货建议。",
          "method": "POST",
          "path": "/mms/venom/api/supplier/sales/management/listWarehouse",
          "pathPrefix": "",
          "responseMode": "json"
        }
      ]
    },
    {
      "domain": "prm",
      "pathPrefix": "",
      "actions": [
        {
          "name": "erpsoldout-get-all-site",
          "description": "获取全部站点(站点下拉数据)：商品侵权授权弹框(tortForm)初始化时拉取全部「平台-站点」清单，用于「站点」多选下拉(#site-selector)。前端遍历返回数组为每项拼装 key=平台ID-站点-平台名 与 label=平台名-站点 后绑定到 siteOptions。",
          "method": "GET",
          "path": "/erpsoldout/erpsoldout/infringing/getAllSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-id-get-pantent-country-by-id1",
          "description": "按专利国家ID查询关联禁售平台/站点：SPU详情页“禁售平台/专利国家”模块中，用户在「专利国家」多选下拉选择一个或多个国家后触发，按所选专利国家ID(列表)查询其对应需禁售的平台与站点集合，前端据此把对应平台名加入禁售平台多选、把站点加入禁售站点多选。",
          "method": "GET",
          "path": "/erpsoldout/erpsoldout/infringing/getPantentCountryById1/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-id-get-pantent-country-by-id",
          "description": "根据专利国家ID查询关联平台与站点：在商品侵权审核-提交侵权授权弹框中选择专利国家后触发；按所选专利国家ID返回关联的侵权平台(platform)与站点(site)集合，前端据此自动并入已选侵权平台与站点。",
          "method": "GET",
          "path": "/erpsoldout/erpsoldout/infringing/getPantentCountryById/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-get-pantent-country",
          "description": "获取专利国家下拉选项：SPU详情页“专利国家”多选下拉的数据源接口。页面加载时以 axios.get 调用，无请求参数；返回 obj 数组赋给 state.patentCountryOptions，在 #patentCountry el-select 中以 id 为选项值、countryName 为显示文本渲染，并据用户角色与已选专利国家设置选项禁用态。",
          "method": "GET",
          "path": "/erpsoldout/erpsoldout/infringing/getPantentCountry",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-get-site",
          "description": "根据平台查询站点列表(getSite)：在「提交钓鱼信息」弹窗中，用户选择「平台」(多选)后触发，根据所选平台ID集合查询其对应的站点(site)列表，用于「站点」下拉框的可选项渲染。",
          "method": "GET",
          "path": "/erpsoldout/erpsoldout/infringing/getSite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "product-auto-listing-service-platform-type-enum",
          "description": "平台类型枚举查询：获取刊登模板下拉所需的「平台类型枚举」列表。前端在组件挂载时调用，拿到平台数组后用于渲染「刊登模板」下拉菜单，并按 canSalePlatform 过滤被禁用平台（120→TIKTOK、119→OZON），再据所选平台预取刊登模板ID。",
          "method": "GET",
          "path": "/product-auto-listing-service/support/enum/platformTypeEnum",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yypms-shop-name",
          "description": "亚马逊获取默认/可用物流模板：亚马逊调价页面切换店铺时，按店铺名称(shopName，作为 URL 路径参数)查询该店铺的可用物流(运费)模板，返回模板列表用于渲染「物流模板」下拉框(#shippingTemplate)。",
          "method": "GET",
          "path": "/yypms/pms/amazon/new/getDefaultTemplate/{shopName}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yypms-spu",
          "description": "获取SPU的AI商品属性：文生图向导(场景图/ozon主图/自定义咒语)打开时，按 SPU 拉取该商品由AI生成的结构化属性(产品名、关键词、卖点、受众、使用场景/方式、材质、ozon类目与排版模板、ozon中俄标题与主/次卖点)，用于自动拼装“商品信息”向导文本与排版模板默认值。",
          "method": "GET",
          "path": "/yypms/pms/developerMission/ai/ai/attributes/{spu}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yypms-id-get-developer-approval-by-id",
          "description": "开发审批详情查询（按ID）：根据开发任务/审批ID查询开发审批详情。前端在 AI 图片描述组件中，当未取到1688采集图片(getAlibabaAiProductImg)时，调用本接口作为回退(fallback)，从返回的 obj.pictureList 中解析供应商图片URL列表用于展示。",
          "method": "GET",
          "path": "/yypms/pms/developerMission/getDeveloperApprovalById/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yypms-sequenceid",
          "description": "类目自定义刊登属性(颜色/尺码)查询：海外仓即时开发页选定产品分类(类目最后一级)后，按该类目序号ID查询其自定义刊登属性，返回可用的刊登颜色与刊登尺码候选列表，用于款式表格中刊登颜色/刊登尺码输入框的自动补全。",
          "method": "GET",
          "path": "/yypms/pms/product/getCategoryAttributeListCustomize/{sequenceid}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yypms-id-get-condition-required-info-v3",
          "description": "Walmart 属性条件必填规则查询：Walmart 刊登商品编辑页加载产品属性时调用：按商品(草稿/listing)ID 获取该模板的条件必填联动规则列表。前端据此规则，当某属性(conditionField)取到指定值(conditionValue)时，把被联动字段(thenRequiredField)从选填动态切换为必填，反之切回选填。",
          "method": "GET",
          "path": "/yypms/pms/walmart/getConditionRequiredInfoV3/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yypms-pms-id",
          "description": "Walmart 产品属性条件必填规则查询：Walmart 刊登编辑页加载产品属性时调用：依据刊登任务ID查询该商品/模板下属性条件必填联动规则列表。前端据此在某属性当前值命中 conditionValue 时，把 thenRequiredField 指定的字段由选填动态切换为必填（反之回退为选填）。",
          "method": "GET",
          "path": "/yypms/pms/walmart/getConditionRequiredInfo/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-get-small-shop-by-big-shop",
          "description": "根据大店铺查询子(Joom)店铺：Joom 批量刊登页“请选择店铺”模态框中，用户在大店铺多选框选定店铺后触发，按大店铺名称(shopName)查询其下属的 Joom 子店铺名称列表，用于渲染子店铺多选清单。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/joomProductPublish/getSmallShopByBigShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-list-have-published-shop-joom-product-publish",
          "description": "查询已刊登过的店铺(Joom)：Joom 批量刊登页切换到\"刊登完毕\"视图时调用，获取已刊登过的 Joom 店铺列表，用于渲染\"选择新刊登店铺\"下拉框。无任何请求参数，返回店铺名称列表。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/joomProductPublish/listHavePublishedShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-list-product-by-listing-joom-product-publish",
          "description": "Joom刊登商品(Listing)列表查询：Joom批量刊登页面列表分页查询：等待刊登/刊登完毕两标签页共用，按刊登状态、商品属性、店铺、刊登人、站点、SPU备注、刊登时间区间、新刊登店铺等筛选，返回SPU行(含子SKU列表joomPublishSkuVo)、价格/毛利、店铺、刊登状态与时间等字段。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/joomProductPublish/listProductByListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-list-un-publish-shop",
          "description": "查询未刊登过的店铺列表(Joom)：进入 Joom 批量刊登页或切换到「等待刊登」标签时，在 search() 成功回调内调用，拉取当前用户「未刊登过」的 Joom 店铺列表，用于渲染 #shopName 店铺下拉框。该接口不携带任何请求参数。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/joomProductPublish/listUnPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-forbid-sku-list",
          "description": "拦截SKU列表查询：eBay批量刊登页\"拦截SKU\"弹窗的列表查询接口：分页查询已被拦截(禁止刊登)的SKU记录，支持按SKU模糊查询，返回拦截SKU清单(SKU、拦截站点/范围、提交人、提交时间)及分页汇总信息。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/productPublish/forbidSkuList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-get-publish-detail-info",
          "description": "刊登统计概览查询：ebay批量刊登页面初始化时调用，无入参，返回当前等待刊登、刊登中、昨日/今日刊登成功与失败数量等汇总统计，用于页面顶部状态条展示。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/productPublish/getPublishDetailInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-list-have-published-shop-product-publish",
          "description": "查询已刊登过的店铺列表：加载当前用户已刊登过的 eBay 店铺列表，用于批量刊登页面顶部「选择新刊登店铺」下拉框（#PublishedShop）的渲染。页面加载时调用一次，无任何请求参数；返回店铺名称数组，前端用 art-template 模板 PublishedShopTemplate 渲染为 option。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/productPublish/listHavePublishedShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-list-product-by-listing-product-publish",
          "description": "eBay刊登商品列表查询：eBay批量刊登页列表多维度分页查询：按生成时间/刊登时间区间、刊登状态、SKU、属性类型、站点、店铺、刊登人、价格区间、批量备注、退款、刊登结果等条件筛选，返回刊登商品(SPU)列表及其下 eBay SKU 明细、总条数与总页数。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/productPublish/listProductByListing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-list-publish-shop-product-publish",
          "description": "未刊登店铺列表查询：获取当前用户尚未刊登过的 eBay 店铺列表，用于 eBay 批量刊登页的目标店铺下拉框(#pubshop)与未刊登店铺筛选下拉框(#shopName)渲染。前端不传任何业务参数，直接 POST 调用。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/productPublish/listPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-find-publish-detail-by-shopname-shopee-product-controller",
          "description": "店铺刊登状态数量统计查询：Shopee 自动刊登页面，按店铺名称查询该店铺「等待刊登/刊登成功/刊登失败/放弃刊登」四类数量，回填到店铺左侧统计标签；删除/放弃刊登成功后重新调用以刷新数量。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/shopeeProductController/findPublishDetailByShopname",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-find-publish-shop-shopee-product-controller",
          "description": "查询Shopee自动刊登店铺及刊登统计：Shopee自动刊登页面加载时调用，查询当前用户的头像、当前刊登成功数、当前等待刊登数，以及该用户名下的Shopee店铺列表（含每个店铺的店铺名、店铺ID、已刊登成功数量）。返回结果用于渲染顶部统计、左侧店铺树与店铺下拉框。该接口无请求参数，依赖登录态识别当前用户。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/shopeeProductController/findPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-find-shopee-autopublish-spu",
          "description": "Shopee自动刊登SPU列表查询：Shopee 自动刊登管理页右侧 SPU 列表分页查询：按目标店铺、刊登状态、SPU关键词、产品状态、销量级别、站点等条件筛选，返回待刊登/刊登中/已刊登的 SPU 列表（含每个 SPU 下的 SKU 明细、价格、库存、刊登状态等），并返回总数与总页数用于分页。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/shopeeProductController/findShopeeAutopublishSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-list-publish-shop-smt-product-publish",
          "description": "SMT可刊登店铺列表查询：SMT批量刊登页打开“多选店铺”模态框时调用，获取当前可刊登(SMT/Lazada)店铺列表，用于渲染店铺多选复选框。请求体为空(不传任何参数)，返回店铺名称列表。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/smtProductPublish/listPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-list-relisting-details",
          "description": "SMT Relisting失败信息详情列表查询：查询速卖通(SMT/aliexpress)商品重新刊登(relisting)的明细列表，按是否成功、刊登时间、店铺名进行分页过滤，返回失败/成功的源SPU、源itemID、状态、销量、失败原因等明细，用于relisting失败信息详情页面表格渲染。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/smtProductPublish/listRelistingDetails",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-list-relisting-results",
          "description": "AliExpress Relisting结果列表查询：速卖通(平台ID=10) relisting 结果列表查询：按店铺负责人、店铺、relisting时间区间分页查询，返回每个店铺/日期的 relisting 成功数量、失败数量及生成/relisting日期，并附分页总页数与总条数。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/smtProductPublish/listRelistingResults",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-get-price-channel-by-site",
          "description": "按站点获取算价渠道：TikTok 批量提价/生成提价商品信息弹窗中，用户在站点多选框选择站点后(onchange 触发 getPriceChannels)，按站点(逗号拼接)查询该站点集合下可用的算价渠道列表，返回结果用于填充算价渠道下拉框 #priceChannels。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/tiktokBatchPublishController/getPriceChannelBySite",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-find-publish-detail-by-shopname-tiktok-product-controller",
          "description": "店铺刊登明细数量查询(按店铺名)：TikTok自动刊登页面左侧店铺树展开某店铺时调用，按店铺名称查询该店铺下「等待刊登/刊登成功/刊登失败/放弃刊登」四类数量，用于侧边店铺节点徽标展示。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/tiktokProductController/findPublishDetailByShopname",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-find-publish-shop-tiktok-product-controller",
          "description": "查询刊登店铺及刊登概况：TikTok自动刊登页初始化时调用，返回当前用户头像、当前刊登成功/等待刊登数量，以及该用户可见的刊登店铺列表(含店铺名称、店铺ID、各店铺刊登成功数)，用于渲染顶部概况、左侧店铺导航及店铺下拉框。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/tiktokProductController/findPublishShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-find-shop-param-by-shopname",
          "description": "按店铺名查询(TikTok)自动刊登参数：在「TikTok自动刊登」页面点击某店铺的「设置」齿轮时调用，按店铺名称查询该店铺已保存的自动刊登参数（站点、分类、毛利率、折扣、平台费率、上架时间、刊登间隔、是否自动刊登、算价渠道、库存、刊登数等），用于回显自动刊登参数设置弹窗。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/tiktokProductController/findShopParamByShopname",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-find-tiktok-autopublish-spu",
          "description": "TikTok自动刊登SPU列表查询：TikTok自动刊登页（已刊登/待刊登）SPU分页列表查询：支持按目标店铺、刊登结果、店铺名称、刊登状态、SPU编码、产品状态、销量级别、站点等条件分页查询，返回SPU列表（含每个SPU下的刊登SKU明细、价格/毛利率、刊登状态、开发员等）。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/tiktokProductController/findTiktokAutopublishSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-publish-fin-tiktok-first-category",
          "description": "查询TikTok一级分类：TikTok 自动刊登页加载时调用，获取 TikTok 全部一级分类名称列表，用于渲染页面「TikTok一级分类」筛选下拉框(#tiktokFirstCategory)。请求体为空对象，不需要任何入参；返回值 obj 为分类名称字符串数组。",
          "method": "POST",
          "path": "/erpPublish/erpPublish/tiktokProductController/finTiktokFirstCategory",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-befor-verifier-infringing",
          "description": "侵权审核-关联SKU查询(beforVerifier)：在“商品侵权”列表点击单条/批量审核时，按侵权记录ID(id)查询该记录关联的“审核后(listAfter)”与“审核前(listbefore)”SKU列表，用于侵权审核弹框中展示并勾选要提交的侵权SKU；返回每个SKU的图片、子SKU、相似度评分、是否侵权等。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/beforVerifier",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-category",
          "description": "侵权下架-分类(一级分类)下拉查询：侵权下架SKU列表页加载时调用，获取「一级分类」下拉选择框的可选分类列表（返回分类名称数组），用于渲染 #category 下拉框的 <option>。无请求参数。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/category",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-check-is-batch",
          "description": "侵权审核-批量操作前批次校验：商品侵权审核列表中，点击批量「通过/不通过/删除」时，先把列表中勾选的侵权记录ID集合(submitIdList)提交后端校验是否满足批量条件(如是否同一批次/请求)。校验通过(code=200)后前端再弹确认框并调用 batchVerify 执行批量审核；校验不通过则用返回的 desc 文案提示。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/checkIsBatch",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-emp-id",
          "description": "获取当前登录员工ID(empID)：财务工作台仪表盘加载完成后调用，获取当前登录用户对应的 yy 员工ID(yyemployeeId)，前端将其写入名为 employeeId 的 Cookie(有效期365天)，供后续接口(如 positionName 取岗位、侵权/下架数量跳转链接)使用。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/empID",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-creater-infringing",
          "description": "获取提交人(创建人)下拉列表：商品侵权列表页初始化时调用，拉取提交人/创建人候选员工列表，渲染 #Founder 下拉框。前端 findCreater() 通过 $.ajax POST 调用，无请求参数，成功后用 art-template 模板 contentTemplate2 渲染。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/findCreater",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-findinfringing",
          "description": "侵权商品列表查询：按 SKU 列表查询侵权商品记录，分页返回侵权关键词、关联SKU、侵权平台、在售/下架成功/下架失败商品数、审核状态、提交/审核人、侵权图片等明细，用于侵权审核任务列表渲染与分页。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/findinfringing",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-infring-num",
          "description": "侵权信息待审核数量查询：开发员工作台(Dashboard)首页加载及每5分钟定时刷新时调用，统计当前登录员工名下「侵权信息待审核」的商品数量，渲染到工作台 #findInfringNum 角标，并据返回的员工ID拼接跳转链接。无请求参数(后端依据登录态/会话识别员工)。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/findInfringNum",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-infring-product-num",
          "description": "侵权商品数量查询：仪表盘(common.html)按员工/店铺统计该用户名下已标注侵权但线上仍在售的商品数量，结果填入侵权商品角标(#findInfringProductNum)，并据返回 content 拼接跳转到侵权商品明细页。订单看板加载(orderstats)、切换组员(salesmanstats)及每5分钟定时刷新(settime)均会调用。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/findInfringProductNum",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-platform-infringing",
          "description": "查询平台列表(侵权商品筛选用)：进入侵权商品明细页时自动调用，获取全部平台列表，渲染顶部「请选择平台」下拉框(#platformName)的选项，供后续侵权商品查询/导出按平台筛选。该接口为无参 POST 查询。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/findPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-shop",
          "description": "店铺下拉列表查询(findShop)：商品侵权详情页加载时调用，获取当前可选店铺列表，用于渲染「请选择店铺」下拉框(#shopId)。POST 请求无任何请求参数，返回店铺ID与店铺名称集合。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/findShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-get-examine-team-authority",
          "description": "获取审核小组权限：抛重检测页面 packageInfo.vue 在 onMounted 时调用 getPerson()，向后端查询当前登录用户是否具备审核权限及所属部门，用于控制页面审核相关按钮的显示。请求无任何业务参数(POST 空 body)，返回审核标识 isExamine 与部门名称 depart。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/getExamineTeamAuthority",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-get-info-submit",
          "description": "SKU侵权平台信息查询(getInfoSubmit)：SKU详情页加载时查询该SKU的侵权平台提示信息，后端返回以英文分号';'拼接的侵权平台字符串，前端按';'拆分后逐条以红色文字渲染到#totarplat区域，用于提示运营该SKU在哪些平台存在侵权风险。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/getInfoSubmit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-get-infringing-sku-info",
          "description": "侵权SKU(画廊)信息查询：侵权监控画廊页(gallery.html)加载/换一批/切换大类时调用：按大类(parentCategoryId)查询已提交侵权信息的SKU列表，返回该大类下SKU数量徽标(content)与SKU卡片列表(obj，含图片、SPU、侵权描述、提交人与提交时间)，用于art-template渲染商品画廊。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/getInfringingSkuInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-get-pms-infringed-words",
          "description": "侵权词库分页查询：侵权词库列表分页查询：按侵权词、平台、提交人筛选，分页返回侵权词记录列表（含替换词、平台、描述、提交记录、站点、筛选规则等）及总条数，供侵权词库页面表格展示。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/getPmsInfringedWords",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-get-pms-phishing-words-list",
          "description": "钓鱼词库列表查询：钓鱼词库（侵权钓鱼词）分页列表查询：支持按钓鱼词、平台、提交人、审核人、大类、审核状态等条件分页过滤，返回钓鱼词记录列表（含平台/站点/替换词/筛选规则/创建更新删除轨迹/审核状态/操作日志）及总条数。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/getPmsPhishingWordsList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-get-pms-phishing-words-log-list",
          "description": "钓鱼词操作日志列表查询：钓鱼词库列表页中，点击某一条钓鱼词记录“操作日志”列的“获取更多”链接时，按该记录ID查询其全部操作日志，返回操作时间/操作人/操作内容列表，前端以时间线(el-timeline)形式弹窗展示。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/getPmsPhishingWordsLogList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-get-pms-phishing-words",
          "description": "钓鱼词详情查询：根据钓鱼词记录ID查询单条钓鱼词配置详情，用于「编辑」弹窗回填表单（钓鱼词、替换词、平台、描述、站点、一级分类、包含词、是否包含for、是否车标词等）。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/getPmsPhishingWords",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-on-line-product-infringing",
          "description": "侵权在线商品列表查询：侵权商品详情页的在线商品分页查询：按 SKU、平台、店铺、开发员、关键词移除状态、图片移除/更换状态、商品(下架)状态、时间等条件分页查询平台在线侵权商品列表，返回商品信息、店铺、侵权关键词/商品/图片三类侵权信息列表及 SKU 列表。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/onLineProduct",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-sould-out-sku-list",
          "description": "侵权/下架SKU列表查询：侵权下架（SKU下架）管理列表的多条件分页查询：支持一级分类、平台、提交人、下架原因、侵权关键词、SKU（多值空格分割）、商品标题关键词、创建时间区间等筛选，返回下架商品列表及总数、总页数。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/souldOutSkuList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-submit",
          "description": "提交人下拉列表查询：SKU下架管理页加载时调用，获取「提交人」筛选下拉框的人员列表（员工ID + 员工姓名），用于渲染 #submitRen 选择框。POST 请求，无请求体参数；返回 obj 数组，前端用 art-template 模板 contentTemplate3 逐项渲染为 option。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/submit",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-info",
          "description": "提交侵权(下架授权)信息：商品侵权页“提交侵权信息”弹框点击确认后，提交侵权SKU、侵权关键词、侵权图片、侵权平台/站点、移除范围(类别/标题关键字)及自动移除图片/自动下架/自动移除关键词等处理选项，由后端登记侵权信息并按选项执行下架/移除处理。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/upload/info",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-verifier",
          "description": "获取侵权审核人列表：商品侵权审核页加载时调用，获取可选的侵权审核人(审核人)员工列表，用于渲染筛选区 #Auditor 下拉框。无请求参数；响应为审核人数组，前端用 art-template 模板 contentTemplate5 遍历 obj 渲染 option，取 employeeId 作为 value、employeeName 作为显示文本。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/infringing/verifier",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-befor-verifier-sold-out",
          "description": "下架任务审核前关联SKU查询：平台商品下架页点击某下架任务“审核通过”链接时调用：传任务ID，返回该任务待审核的SKU列表(listbefore，左栏)与系统关联出的SKU列表(listAfter，右栏)，前端用 art-template(contentTemplate7) 渲染双栏勾选框，供审核人勾选后调用 passAudit 通过审核。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/soldOut/beforVerifier",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-creater-sold-out",
          "description": "查询下架任务创建人列表：平台商品下架页加载时调用，拉取“创建人”筛选下拉框的可选项列表，用于按创建人过滤下架任务。无任何请求参数；返回创建人(员工)集合，每项含员工ID与员工姓名，前端用 art-template 渲染为 #Founder 下拉框的 <option>。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/soldOut/findCreater",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-phishing-words-creater",
          "description": "查询钓鱼词提交人(创建人)列表：钓鱼词库(report/phishingwords.vue)页面初始化时调用，返回所有钓鱼词的提交人(创建人)姓名列表，用于顶部搜索区\"请选择提交人\"下拉框(Searchoption.submitBy)的可选项。无任何请求参数。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/soldOut/findPhishingWordsCreater",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-platform-of-add",
          "description": "获取新增下架平台(及当前创建人)：平台商品下架(PlatformCommodityShelf)页面初始化及点击“提交下架SKU”时调用：无入参，返回当前可选的下架平台列表(平台ID/平台名称)，同时返回当前操作人(创建人)信息；前端取 obj[0].employeeName 作为创建人显示、用 contentTemplate6 渲染下架平台下拉框。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/soldOut/findPlatformOfAdd",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-platform-sold-out",
          "description": "查询平台列表(下架平台下拉)：平台商品下架页面初始化时调用，无入参，返回全部平台列表(平台ID+平台名称)，用于渲染「请选择平台」下拉框(#platformName)的选项。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/soldOut/findPlatform",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-sold-out-num",
          "description": "下架SKU待审核数量查询：开发员工作台(仪表盘)统计当前登录员工「下架SKU待审核」的商品数量，返回数量值并随返回的员工ID拼接跳转链接(跳转下架商品上架页 status=4)。定时器每 5 分钟刷新一次。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/soldOut/findSoldOutNum",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-sold-out-product-num",
          "description": "查询售罄(清仓滞销)商品数量：根据用户(员工)ID统计其名下售罄/清仓(soldOut)商品的数量，返回单个数量值，前端用于 Dashboard 首页 #findSoldOutProductNum 徽标展示，并据返回的员工ID拼接「平台商品详情(status=0)」跳转链接。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/soldOut/findSoldOutProductNum",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-sold-out-reason",
          "description": "查询下架原因列表：进入平台商品下架明细页时调用，获取全部「下架原因」枚举列表，用于渲染顶部筛选区 #Reason 下拉框（contentTemplate4）。无请求参数，响应为下架原因字符串数组。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/soldOut/findSoldOutReason",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-sold-out-task",
          "description": "下架任务列表查询：平台商品下架任务分页查询：按 SKU、创建人、平台、创建时间区间、下架原因、任务状态等条件分页查询下架任务列表，返回任务编号、状态、平台、下架原因、下架总量/成功/失败数、关联 SKU、创建人/审核人/创建时间/完成时间等字段。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/soldOut/findSoldOutTask",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-find-sold-out-verifier",
          "description": "获取下架审核人列表：平台商品下架页面初始化时调用，用于获取“下架审核人”下拉框的数据源。无入参，返回审核人(员工)列表，前端用 art-template 模板 contentTemplate5 渲染为 #frameReviewer 下拉选项(value=员工ID，文本=员工姓名)。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/soldOut/findSoldOutVerifier",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erpsoldout-on-line-product-sold-out",
          "description": "平台在线商品(下架任务)列表查询：平台商品下架管理页列表查询：按平台、店铺、SKU(多值)、操作状态、下架原因等条件分页查询在线商品/下架任务记录，返回分页列表(含店铺、标题、SKU、库存、销量、操作状态、执行信息等)。",
          "method": "POST",
          "path": "/erpsoldout/erpsoldout/soldOut/onLineProduct",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "product-auto-listing-service-get-listing-template-page",
          "description": "刊登模板分页查询：根据 ERP SPU 与平台类型(platformType)分页查询该商品在指定平台下已存在的刊登模板列表；前端取返回列表首条记录的 id，用于刊登模板下拉跳转到对应平台的编辑页(回填模板id)。",
          "method": "POST",
          "path": "/product-auto-listing-service/listing/listingTemplate/getListingTemplatePage",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "yypms-spu-name",
          "description": "获取SPU预设场景咒语(提示词)：根据SPU编号查询该商品在AI文字生成图片/场景定制功能下预设的场景列表，每个场景包含一组方案变体(提示词/咒语)。前端在图片库AI生成弹窗中据此渲染预设场景卡片、场景下拉、方案变体标签与指令描述输入框。",
          "method": "POST",
          "path": "/yypms/pms/AllMessage/getSpuSceneSpell/{spuName}",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "pms-id",
          "description": "商品分类列表查询(级联)：按分类层级与父级分类ID查询商品分类列表，用于 SPU 在线报表页一级/二级分类级联下拉。空 id 查一级分类；传一级分类 sequenceid 查其二级分类。URL 末段 /1/ 为固定层级标识，父级分类 id 拼接其后。axios.post 无请求体，参数全部在 URL 路径上。",
          "method": "POST",
          "path": "/yypms/pms/category/getCategoryList/1/{id}",
          "pathPrefix": "",
          "responseMode": "json"
        }
      ]
    },
    {
      "domain": "scm",
      "pathPrefix": "",
      "actions": [
        {
          "name": "erp-manufacture-find-issue-shop",
          "description": "纠纷店铺/负责人下拉数据查询：纠纷处理（拒绝退款）页面初始化时调用，返回当前用户可见的店铺列表(shopTypeList)与店铺负责人列表(operList)，用于渲染顶部“店铺”和“店铺负责人”两个筛选下拉框的选项。无请求参数。",
          "method": "GET",
          "path": "/erpManufacture/erpManufacture/issueInfo/findIssueShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-find-postpone-shop",
          "description": "延长收货-店铺/负责人/物流方式下拉数据查询：进入“延长收货订单”报表页时初始化加载，返回店铺(店铺类型)列表、店铺负责人(操作员)列表、物流方式列表三组下拉数据，分别填充页面顶部的“店铺/店铺负责人/物流方式”三个下拉筛选框。该接口为 GET 且无任何请求参数。",
          "method": "GET",
          "path": "/erpManufacture/erpManufacture/postponeInfo/findPostponeShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-page",
          "description": "采购任务分页查询：采购任务列表分页查询：以路径参数形式传入 SKU 与当前页码，返回采购任务总数与任务列表（供应商名称/等级、任务数量、采购员、任务时间、生成时间、任务状态）。",
          "method": "GET",
          "path": "/erpPurchase/erpPurchase/purchase/task/page/",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "purchase-core-service-get",
          "description": "今日工作统计查询(下单/跟单任务汇总)：采购“提交今日工作”弹窗数据源：GET 拉取当日下单任务(按采购员的总任务量/完成量/付款完成量)与跟单任务(按组别的任务类型明细及合计)统计，前端将 followUpTask 对象按键遍历转成 [{label,value}] 后渲染到弹窗左右两张表格。",
          "method": "GET",
          "path": "/purchase-core-service/report/today/work/get",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-batch-sku-list",
          "description": "客户订单-批量SKU明细列表查询：客户详情页订单列表点击行展开（第二层）时，按订单批量SKU(batchSku)查询其下属 SKU 明细列表，返回每个 SKU 的图片、编号、名称、商品属性、销量等级、近7/30/90天销量、库存、在途、开发员及开发时间，用于渲染子表 twoContentTemplate。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/customer/batchSkuList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-customer-list",
          "description": "客户(CRM)列表查询：CRM 客户列表分页查询：支持按客户名称模糊、所属销售、订单数量区间、订单总金额区间、累计毛利额区间、是否有跟进日志、最新跟进日志时间区间、是否已录入客户信息等条件筛选，并按下单时间/订单数量/订单总金额/客单价/毛利率/累计毛利额排序，返回客户列表及其订单、毛利、退款、跟进等汇总字段。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/customer/customerList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-customer-order-list",
          "description": "客户订购产品列表查询：客户详情页「订购产品」卡片的分页列表查询：按当前客户(sequenceid)聚合其订购的主产品行，支持 SKU 模糊搜索、排序、分页，返回订购主产品(主SKU、下单时间、代发订单数、订购总金额、订购总数量、SKU个数)列表及总数/总页数。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/customer/customerOrderList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-customer-task-list",
          "description": "客户跟进日志列表查询：客户详情页加载/刷新「跟进日志」区块：按客户ID查询该客户全部跟进日志(线索)列表，含每条跟进的跟进人、状态、内容、下一步计划，以及该跟进下的回复(taskList)子列表，前端用 art-template taskListTemplate 渲染。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/customer/customerTaskList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-customer-task",
          "description": "客户跟进线索(任务)详情查询：客户详情页跟进线索(跟进任务)数据获取接口。不传 id 时仅返回当前跟进人(createBy)与跟进时间(createDate)用于新增弹窗回填；传 id 时按跟进任务主键回查该条跟进线索完整内容用于编辑弹窗回填。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/customer/customerTask",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-customer",
          "description": "客户信息详情查询：进入大客户详情页时，根据客户主键(sequenceid)查询单个客户的联系方式(Skype/微信/WhatsApp/邮箱/电话)及订单概览(累计订单数、累计金额、退款金额、复购间隔)，返回结果渲染到左侧客户信息卡片。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/customer/customer",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-get-customer-log",
          "description": "客户操作日志查询(getCustomerLog)：客户详情页加载/编辑客户信息后调用，按客户ID查询该客户的全部操作日志(操作人、操作时间、操作内容)，返回日志列表渲染到 #customerLog 区域(art-template logTemplate)。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/customer/getCustomerLog",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-get-sale-names",
          "description": "所属销售名称列表查询：获取“所属销售”名称列表，用于 CRM 客户列表页 #saleNames 下拉框的选项数据源。请求无任何业务参数；返回 obj 为销售姓名字符串数组，前端经 saleNamesTemplate 渲染为 <option>。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/customer/getSaleNames",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-export-excel",
          "description": "SMT纠纷信息导出Excel：在SMT纠纷统计页点击导出按钮，按当前列表查询条件导出纠纷信息明细Excel。请求体复用纠纷列表查询(getIssueInfoList)最后一次的查询参数(exportdata=params)，响应为二进制文件流(responseType:blob)，文件名取自响应头content-disposition。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/issueInfo/exportExcel",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-find-issue-info",
          "description": "纠纷详情查询：根据纠纷ID与买家登录ID查询单条纠纷(issue)的完整详情：纠纷原因/状态/倒计时、买家方案与卖家(我的)方案、卖方上传证据、关联订单信息与产品信息，供纠纷详情页渲染并支持后续“拒绝并新增方案”“上传证据”等操作。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/issueInfo/findIssueInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-find-refused-issue",
          "description": "拒绝并新增（仅退款）纠纷方案：在“纠纷详情”页中，卖家点击“拒绝并新增仅退款方案”弹窗确定时调用：携带被拒绝的买家方案ID列表、卖家新增方案类型、退款金额、方案说明，提交后端处理；成功后弹出后端提示信息并刷新纠纷详情。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/issueInfo/findRefusedIssue",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-get-issue-info-list",
          "description": "SMT纠纷信息列表查询：SMT纠纷统计列表分页查询：按物流方式、店铺、店长、订单时间区间、纠纷时间区间、SKU/SPU/产品ID/订单ID/国家等条件筛选，返回各产品纠纷数量、货不对板纠纷数、物流纠纷数、退款金额、纠纷率等汇总列表。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/issueInfo/getIssueInfoList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-query-sku-issue-num-list",
          "description": "SKU纠纷数量明细查询：SMT纠纷分析列表页点击某行 SPU 时触发，按当前筛选条件 + 该行 SPU/产品ID 查询该 SPU 下各 SKU 的纠纷数量、退款金额与纠纷率明细，结果渲染到弹出表格(treedata)。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/issueInfo/querySkuIssueNumList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-query-smt-shop-manager",
          "description": "SMT店长列表查询：查询 SMT 纠纷统计页面\"店长\"筛选下拉框的可选店长名称列表。无请求参数，返回店长名称字符串数组，前端直接遍历填充 el-select 选项（label 与 value 均为店长名称）。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/issueInfo/querySmtShopManager",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-query-smt-shop",
          "description": "SMT店铺列表查询：查询SMT纠纷统计页可选「店铺」列表。前端在页面 onMounted → getshop() 中调用，无任何请求参数，返回店铺名称字符串数组，前端将每个名称映射为 {value,label} 后填充店铺筛选下拉框。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/issueInfo/querySmtShop",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-find-db-manufacture-evaluation",
          "description": "供应商采购评价列表查询：供应商详情页「采购评价」Tab 的分页列表查询：按供应商ID查询该供应商的采购评价记录（评价星级、评价内容、评价人、评价时间、关联采购单号），支持分页；返回评价行列表及总数/总页数，前端用 art-template (contentTemplate8) 渲染并用 pagination 翻页。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/manufactureExtendController/findDbManufactureEvaluation",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-find-db-manufacture-extend-list",
          "description": "供应商拓展信息列表查询：供应商管理列表多维度分页查询：支持供应商名称、风险评估、黑名单、供应商类型、退换货情况、地址、评级、状态、是否定制、是否拜访、采购员、供货金额区间、采购时间区间等筛选，并按多种供货金额/数量/笔数/创建时间排序，返回供应商列表及联系人、商品、供货金额、采购笔数、评级等汇总字段。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/manufactureExtendController/findDbManufactureExtendList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-find-db-manufacture-extend",
          "description": "供应商扩展信息(详情)查询：供应商信息详情页加载入口：依据 URL 上的 sequenceid(供应商序号ID) 查询单个供应商的扩展信息，返回数组 obj(取首元素 obj[0])，包含基本信息、采购信息、定做信息、经营信息、详情描述、交易信用记录、采购评价(发货时长/涨跌价采购单)等数十项字段，供详情页渲染与编辑回填。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/manufactureExtendController/findDbManufactureExtend",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-findpurchase",
          "description": "固定供应商采购员查询：供应商详情页加载时调用，查询全部「固定供应商」的采购员清单，用于「采购员」下拉框（id=fixedmanuname / fixedmanuname2）选项渲染。无请求参数，返回采购员ID与姓名列表。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/manufactureExtendController/findpurchase",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-find-return-list",
          "description": "退换货情况下拉框查询：查询「退换货情况」下拉枚举列表。后端从 ReturnEnum 枚举构造 code/desc 列表返回，前端用作 SPU 列表筛选区「退换货情况」多选下拉框的选项数据源（item.code 作 value、item.desc 作 label）。无请求参数，仅校验登录会话。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/manufactureExtendController/findReturnList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-get-manufac-cooperate-product",
          "description": "厂商合作(候选)产品列表查询：根据厂商(供应商)ID分页查询该厂商向您提供的候选合作产品，返回产品图片、产品编号、产品名称、净重等信息，前端以缩略图卡片形式渲染并分页展示。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/manufactureExtendController/getManufacCooperateProduct",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-get-manufac-product-purchase-sku",
          "description": "供应商-合作中产品SKU明细查询：在供应商详情页「合作中产品」(SPU列表)中点击某行展开时，按供应商ID(manufactureId)与该SPU产品ID(sid)查询其下所有SKU的采购明细，返回SKU编号、图片、标题、销量等级、状态、侵权/淘汰标记、累计采购笔数/量/金额、当前库存、开发员/采购员、首末采购日期等，渲染到二级子表格 twoContentTemplate。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/manufactureExtendController/getManufacProductPurchaseSku",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-get-manufac-product-purchase-spu",
          "description": "供应商合作中产品(SPU)列表查询：供应商详情页「合作中产品」Tab：按供应商ID(manufactureId)分页查询该供应商合作中的商品(SPU)汇总列表，返回每个SPU的图片、名称、累计采购笔数/采购量/采购金额、开始与最后采购日，并支持点击展开下钻 SKU 明细。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/manufactureExtendController/getManufacProductPurchaseSpu",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-getmanufacture-level",
          "description": "供应商等级分配概况查询：按月份(date)查询供应商等级分配概况：返回横向表头(xData，各列名称)与按等级分组的行数据(levelData)，每个等级下含各列单元格数值(chiefData)，前端用 art-template 渲染为「等级 × 列」的二维统计表格。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/manufactureExtendController/getmanufactureLevel",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-get-manufacture-purchase",
          "description": "历史采购单查询：在供应商详情页「历史采购单」Tab中，按供应商ID分页查询该供应商的历史采购单记录，返回采购批次、采购时间、SKU、采购件数、采购金额、发货/到货时间、采购员、是否结算等列表数据及总条数、总页数。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/manufactureExtendController/getManufacturePurchase",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-get-manufacture-risk-assess",
          "description": "供应商风险评估列表查询：供应商风险评估页面分页列表查询：通过 assessStatus 区分“待评估供应商”与“历史评估供应商”两个 Tab，keyword 在两个 Tab 下含义不同（待评估=是否仅看需进一步检查；历史=通过/未通过），返回供应商基础信息、评估内容与评估结果汇总，前端用 art-template 模板渲染列表卡片。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/manufactureExtendController/getManufactureRiskAssess",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-find-postpone-info",
          "description": "延长收货订单分页查询：延长收货订单管理页查询：按订单编号、买家、时间(订单/发货)区间、店铺、店铺负责人、物流类型/方式、剩余收货时间区间、排序及 Tab 状态(延长收货订单/延长中)分页查询，返回订单列表及订单金额、毛利、物流、剩余收货时间、延长状态等字段。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/postponeInfo/findPostponeInfo",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-manufacture-get-manufacture-images",
          "description": "供应商(公司)图片库查询：根据供应商序号ID(manufactureId)查询该供应商的公司图片库图片列表，前端用于渲染“公司图片库”展示网格(contentTemplate1)及“编辑图片”弹窗网格(contentTemplate2)。上传图片/删除图片后会重新调用本接口刷新图片列表。",
          "method": "POST",
          "path": "/erpManufacture/erpManufacture/uploadFlieController/getManufactureImages",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-get-stutus-list",
          "description": "菜鸟入库单-状态列表查询：查询菜鸟优选入库单的状态枚举列表，用于「入库单查询」页面顶部「状态」下拉筛选框的选项渲染（el-option 的 label/value 数据源）。无请求参数，成功后返回状态数组。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/caiNiao/getStutusList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-query-cai-niao-in-storage-order",
          "description": "菜鸟入库单列表查询：优选仓菜鸟入库单分页列表查询：按单据类型(采购入库单/退货入库单)、时间区间、入库单编号、SKU、店铺、状态筛选，返回入库单行(FOC单号、优选SKU、申请/已入数、各仓库存、销量、直邮信息、采购情况、状态、操作日志等)及是否有操作权限。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/caiNiao/queryCaiNiaoInStorageOrder",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-spu-list",
          "description": "降本任务-SPU列表查询：采购工作台「降本任务」标签页的 SPU 层分页列表查询：按任务状态(未完成/已完成)、任务类型(下单任务/黑马/其他)、SPU 关键词过滤，返回降本任务 SPU 列表及总条数，供 el-table 渲染，展开行再调用 skuList 获取 SKU 明细。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/downCostTask/spuList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-view-stock-descr",
          "description": "查看签收入库注意事项：采购审批页“入库注意事项”弹窗点开时，按采购批次序号ID(sequenceid)查询该批次已保存的签收入库注意事项(stockdescr)，回填到弹窗文本域中供查看/编辑。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/purchaseApproval/viewStockDescr",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-querypurchase-custom-order-list",
          "description": "采购定制订单明细列表查询：采购任务页(purchaseTask)「制作/条码/财务」页签中，展开某供应商行时按 manufactureId 拉取该供应商下的定制订单明细列表，支持SKU/SPU/供应商/批次/订单号/平台单号/订单状态/采购状态/核销状态/到货状态/同步状态/采购时间区间等多维筛选与排序，返回订单明细列表(含定制内容图文、成本、店铺、采购与签收信息)。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/purchaseCustomOrder/querypurchaseCustomOrderList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-get-documentary-log",
          "description": "采购开发-查看跟进日志：在 SKU 详情页点击“查看跟进日志”时，按批次分组ID(groupId) 查询该批次的采购/供应商跟进日志列表，返回每条日志的时间、跟进明细、操作员，渲染到跟进日志弹窗表格。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/purchaseDevelop/getDocumentaryLog",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-get-order-infos",
          "description": "采购批次订单信息查询：按采购批次分组ID(groupId)查询该批次完整订单信息：批次头部(供应商/仓库/付款方式/马帮与平台金额/运单号/跟单日志/财务审核)及其下 purchaseList 采购明细行(SKU/采购状态/缺货/采购量到货量/1688采购信息/退款)。前端采购跟单任务页刷新单条批次时调用。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/purchaseDevelop/getOrderInfos",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-purchase-task-followup-export",
          "description": "采购任务跟进导出：将「今日采购跟进」页面当前筛选条件（downloadparams）下的采购跟进任务列表导出为 Excel 文件。前端点击导出按钮触发 outdown()，POST 请求体为最近一次任务类型为1(今日必跟进)或14(今日已跟进)的查询条件，后端返回 xlsx 二进制流，前端以 Blob 下载。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/purchaseDevelop/purchaseTaskFollowupExport",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-get-down-order-address",
          "description": "采购下单-获取下单收货地址列表：采购下单/自动下单弹窗中，依据当前勾选的子SKU列表与所属仓库(storageId)，向后端查询可下单的收货地址集合，返回地址字符串数组，前端渲染为地址下拉框(#address2/#genaddress)的option选项，默认选中第一项。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/purchaseDownOrder/getDownOrderAddress",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-get-purchase-task-log-list",
          "description": "采购任务日志列表查询：查询当前采购员的工作日志统计列表，按日期返回采购总任务量、下单量、付款完成量，以及超时付款/超时发货/虚假发货/物流延迟/入库延迟/tk出单/SMT出单等各维度的任务量与完成量及合计。页面加载即调用，不传任何查询参数。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/purchaseDownOrder/getPurchaseTaskLogList",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-get-sku-purchase-task",
          "description": "查询SKU采购任务：依据 SKU 查询该商品在采购下单模块生成的采购任务列表，返回采购任务生成时间、采购员、采购备注、采购仓库/数量、延迟天数、异常信息与标记完成情况，用于 SKU 详情页采购任务表格渲染。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/purchaseDownOrder/getSkuPurchaseTask",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "erp-purchase-purchase-and-manufac",
          "description": "采购下单-供应商SKU采购明细查询(purchaseAndManufac)：采购下单页(采购任务列表)展开某一供应商行时，按当前搜索/筛选条件查询该供应商(某仓库)下的待采购SKU明细，返回每个SKU的商品信息、供应商、成本/备货价、推荐采购量、库存/在途、销量预留、异常提示等，前端拼接HTML表格渲染。",
          "method": "POST",
          "path": "/erpPurchase/erpPurchase/purchaseDownOrder/purchaseAndManufac",
          "pathPrefix": "",
          "responseMode": "json"
        },
        {
          "name": "purchase-core-service-page",
          "description": "降本明细分页查询：降本优化报表「降本明细」页签的多条件分页查询：支持降本时间、入库时间区间、SPU、SKU、降本人、排序方式等筛选，返回降本明细列表（SPU/SKU/产品名/供应商/降本前后金额/降本差额/下降比率/累计降本金额）及总条数。",
          "method": "POST",
          "path": "/purchase-core-service/down/cost/report/page",
          "pathPrefix": "",
          "responseMode": "json"
        }
      ]
    }
  ]
} satisfies AuditManifest
