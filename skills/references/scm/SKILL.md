# scm - 供应链

通过 `mbs scm` 命令查询供应链数据。

## 数据来源

- Service: `-`

## 适用场景

供应链

## 意图匹配

关键词：供应链

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 纠纷店铺/负责人下拉数据查询：纠纷处理（拒绝退款）页面初始化时调用，返回当前用户可见的店铺列表(shopTypeList)与店铺负责人列表(operList)，用于渲染顶部“店铺”和“店铺负责人”两个筛选下拉框的选项。无请求参数。 | `mbs scm erp-manufacture-find-issue-shop` | - |
| 延长收货-店铺/负责人/物流方式下拉数据查询：进入“延长收货订单”报表页时初始化加载，返回店铺(店铺类型)列表、店铺负责人(操作员)列表、物流方式列表三组下拉数据，分别填充页面顶部的“店铺/店铺负责人/物流方式”三个下拉筛选框。该接口为 GET 且无任何请求参数。 | `mbs scm erp-manufacture-find-postpone-shop` | - |
| 采购任务分页查询：采购任务列表分页查询：以路径参数形式传入 SKU 与当前页码，返回采购任务总数与任务列表（供应商名称/等级、任务数量、采购员、任务时间、生成时间、任务状态）。 | `mbs scm erp-purchase-page` | `sku`, `page` |
| 今日工作统计查询(下单/跟单任务汇总)：采购“提交今日工作”弹窗数据源：GET 拉取当日下单任务(按采购员的总任务量/完成量/付款完成量)与跟单任务(按组别的任务类型明细及合计)统计，前端将 followUpTask 对象按键遍历转成 [{label,value}] 后渲染到弹窗左右两张表格。 | `mbs scm purchase-core-service-get` | - |
| 客户订单-批量SKU明细列表查询：客户详情页订单列表点击行展开（第二层）时，按订单批量SKU(batchSku)查询其下属 SKU 明细列表，返回每个 SKU 的图片、编号、名称、商品属性、销量等级、近7/30/90天销量、库存、在途、开发员及开发时间，用于渲染子表 twoContentTemplate。 | `mbs scm erp-manufacture-batch-sku-list` | `batchSku` |
| 客户(CRM)列表查询：CRM 客户列表分页查询：支持按客户名称模糊、所属销售、订单数量区间、订单总金额区间、累计毛利额区间、是否有跟进日志、最新跟进日志时间区间、是否已录入客户信息等条件筛选，并按下单时间/订单数量/订单总金额/客单价/毛利率/累计毛利额排序，返回客户列表及其订单、毛利、退款、跟进等汇总字段。 | `mbs scm erp-manufacture-customer-list` | `pageSize`, `page` |
| 客户订购产品列表查询：客户详情页「订购产品」卡片的分页列表查询：按当前客户(sequenceid)聚合其订购的主产品行，支持 SKU 模糊搜索、排序、分页，返回订购主产品(主SKU、下单时间、代发订单数、订购总金额、订购总数量、SKU个数)列表及总数/总页数。 | `mbs scm erp-manufacture-customer-order-list` | `customer`, `pageSize`, `page` |
| 客户跟进日志列表查询：客户详情页加载/刷新「跟进日志」区块：按客户ID查询该客户全部跟进日志(线索)列表，含每条跟进的跟进人、状态、内容、下一步计划，以及该跟进下的回复(taskList)子列表，前端用 art-template taskListTemplate 渲染。 | `mbs scm erp-manufacture-customer-task-list` | `customer` |
| 客户跟进线索(任务)详情查询：客户详情页跟进线索(跟进任务)数据获取接口。不传 id 时仅返回当前跟进人(createBy)与跟进时间(createDate)用于新增弹窗回填；传 id 时按跟进任务主键回查该条跟进线索完整内容用于编辑弹窗回填。 | `mbs scm erp-manufacture-customer-task` | - |
| 客户信息详情查询：进入大客户详情页时，根据客户主键(sequenceid)查询单个客户的联系方式(Skype/微信/WhatsApp/邮箱/电话)及订单概览(累计订单数、累计金额、退款金额、复购间隔)，返回结果渲染到左侧客户信息卡片。 | `mbs scm erp-manufacture-customer` | `id` |
| 客户操作日志查询(getCustomerLog)：客户详情页加载/编辑客户信息后调用，按客户ID查询该客户的全部操作日志(操作人、操作时间、操作内容)，返回日志列表渲染到 #customerLog 区域(art-template logTemplate)。 | `mbs scm erp-manufacture-get-customer-log` | `customId` |
| 所属销售名称列表查询：获取“所属销售”名称列表，用于 CRM 客户列表页 #saleNames 下拉框的选项数据源。请求无任何业务参数；返回 obj 为销售姓名字符串数组，前端经 saleNamesTemplate 渲染为 <option>。 | `mbs scm erp-manufacture-get-sale-names` | - |
| SMT纠纷信息导出Excel：在SMT纠纷统计页点击导出按钮，按当前列表查询条件导出纠纷信息明细Excel。请求体复用纠纷列表查询(getIssueInfoList)最后一次的查询参数(exportdata=params)，响应为二进制文件流(responseType:blob)，文件名取自响应头content-disposition。 | `mbs scm erp-manufacture-export-excel` | `pageSize`, `currentPage` |
| 纠纷详情查询：根据纠纷ID与买家登录ID查询单条纠纷(issue)的完整详情：纠纷原因/状态/倒计时、买家方案与卖家(我的)方案、卖方上传证据、关联订单信息与产品信息，供纠纷详情页渲染并支持后续“拒绝并新增方案”“上传证据”等操作。 | `mbs scm erp-manufacture-find-issue-info` | `issueid`, `buyerloginid` |
| 拒绝并新增（仅退款）纠纷方案：在“纠纷详情”页中，卖家点击“拒绝并新增仅退款方案”弹窗确定时调用：携带被拒绝的买家方案ID列表、卖家新增方案类型、退款金额、方案说明，提交后端处理；成功后弹出后端提示信息并刷新纠纷详情。 | `mbs scm erp-manufacture-find-refused-issue` | `buyerSolutionIdList`, `addSolutionType`, `solutionContext` |
| SMT纠纷信息列表查询：SMT纠纷统计列表分页查询：按物流方式、店铺、店长、订单时间区间、纠纷时间区间、SKU/SPU/产品ID/订单ID/国家等条件筛选，返回各产品纠纷数量、货不对板纠纷数、物流纠纷数、退款金额、纠纷率等汇总列表。 | `mbs scm erp-manufacture-get-issue-info-list` | `pageSize`, `currentPage` |
| SKU纠纷数量明细查询：SMT纠纷分析列表页点击某行 SPU 时触发，按当前筛选条件 + 该行 SPU/产品ID 查询该 SPU 下各 SKU 的纠纷数量、退款金额与纠纷率明细，结果渲染到弹出表格(treedata)。 | `mbs scm erp-manufacture-query-sku-issue-num-list` | - |
| SMT店长列表查询：查询 SMT 纠纷统计页面"店长"筛选下拉框的可选店长名称列表。无请求参数，返回店长名称字符串数组，前端直接遍历填充 el-select 选项（label 与 value 均为店长名称）。 | `mbs scm erp-manufacture-query-smt-shop-manager` | - |
| SMT店铺列表查询：查询SMT纠纷统计页可选「店铺」列表。前端在页面 onMounted → getshop() 中调用，无任何请求参数，返回店铺名称字符串数组，前端将每个名称映射为 {value,label} 后填充店铺筛选下拉框。 | `mbs scm erp-manufacture-query-smt-shop` | - |
| 供应商采购评价列表查询：供应商详情页「采购评价」Tab 的分页列表查询：按供应商ID查询该供应商的采购评价记录（评价星级、评价内容、评价人、评价时间、关联采购单号），支持分页；返回评价行列表及总数/总页数，前端用 art-template (contentTemplate8) 渲染并用 pagination 翻页。 | `mbs scm erp-manufacture-find-db-manufacture-evaluation` | `manufactureId` |
| 供应商拓展信息列表查询：供应商管理列表多维度分页查询：支持供应商名称、风险评估、黑名单、供应商类型、退换货情况、地址、评级、状态、是否定制、是否拜访、采购员、供货金额区间、采购时间区间等筛选，并按多种供货金额/数量/笔数/创建时间排序，返回供应商列表及联系人、商品、供货金额、采购笔数、评级等汇总字段。 | `mbs scm erp-manufacture-find-db-manufacture-extend-list` | `currentPage`, `pageSize` |
| 供应商扩展信息(详情)查询：供应商信息详情页加载入口：依据 URL 上的 sequenceid(供应商序号ID) 查询单个供应商的扩展信息，返回数组 obj(取首元素 obj[0])，包含基本信息、采购信息、定做信息、经营信息、详情描述、交易信用记录、采购评价(发货时长/涨跌价采购单)等数十项字段，供详情页渲染与编辑回填。 | `mbs scm erp-manufacture-find-db-manufacture-extend` | `sequenceid` |
| 固定供应商采购员查询：供应商详情页加载时调用，查询全部「固定供应商」的采购员清单，用于「采购员」下拉框（id=fixedmanuname / fixedmanuname2）选项渲染。无请求参数，返回采购员ID与姓名列表。 | `mbs scm erp-manufacture-findpurchase` | - |
| 退换货情况下拉框查询：查询「退换货情况」下拉枚举列表。后端从 ReturnEnum 枚举构造 code/desc 列表返回，前端用作 SPU 列表筛选区「退换货情况」多选下拉框的选项数据源（item.code 作 value、item.desc 作 label）。无请求参数，仅校验登录会话。 | `mbs scm erp-manufacture-find-return-list` | - |
| 厂商合作(候选)产品列表查询：根据厂商(供应商)ID分页查询该厂商向您提供的候选合作产品，返回产品图片、产品编号、产品名称、净重等信息，前端以缩略图卡片形式渲染并分页展示。 | `mbs scm erp-manufacture-get-manufac-cooperate-product` | `manufactureId`, `pageSize`, `page` |
| 供应商-合作中产品SKU明细查询：在供应商详情页「合作中产品」(SPU列表)中点击某行展开时，按供应商ID(manufactureId)与该SPU产品ID(sid)查询其下所有SKU的采购明细，返回SKU编号、图片、标题、销量等级、状态、侵权/淘汰标记、累计采购笔数/量/金额、当前库存、开发员/采购员、首末采购日期等，渲染到二级子表格 twoContentTemplate。 | `mbs scm erp-manufacture-get-manufac-product-purchase-sku` | `manufactureId`, `sid` |
| 供应商合作中产品(SPU)列表查询：供应商详情页「合作中产品」Tab：按供应商ID(manufactureId)分页查询该供应商合作中的商品(SPU)汇总列表，返回每个SPU的图片、名称、累计采购笔数/采购量/采购金额、开始与最后采购日，并支持点击展开下钻 SKU 明细。 | `mbs scm erp-manufacture-get-manufac-product-purchase-spu` | `manufactureId`, `pageSize`, `page` |
| 供应商等级分配概况查询：按月份(date)查询供应商等级分配概况：返回横向表头(xData，各列名称)与按等级分组的行数据(levelData)，每个等级下含各列单元格数值(chiefData)，前端用 art-template 渲染为「等级 × 列」的二维统计表格。 | `mbs scm erp-manufacture-getmanufacture-level` | `date` |
| 历史采购单查询：在供应商详情页「历史采购单」Tab中，按供应商ID分页查询该供应商的历史采购单记录，返回采购批次、采购时间、SKU、采购件数、采购金额、发货/到货时间、采购员、是否结算等列表数据及总条数、总页数。 | `mbs scm erp-manufacture-get-manufacture-purchase` | `manufactureId`, `pageSize`, `page` |
| 供应商风险评估列表查询：供应商风险评估页面分页列表查询：通过 assessStatus 区分“待评估供应商”与“历史评估供应商”两个 Tab，keyword 在两个 Tab 下含义不同（待评估=是否仅看需进一步检查；历史=通过/未通过），返回供应商基础信息、评估内容与评估结果汇总，前端用 art-template 模板渲染列表卡片。 | `mbs scm erp-manufacture-get-manufacture-risk-assess` | `pageSize`, `page`, `assessStatus` |
| 延长收货订单分页查询：延长收货订单管理页查询：按订单编号、买家、时间(订单/发货)区间、店铺、店铺负责人、物流类型/方式、剩余收货时间区间、排序及 Tab 状态(延长收货订单/延长中)分页查询，返回订单列表及订单金额、毛利、物流、剩余收货时间、延长状态等字段。 | `mbs scm erp-manufacture-find-postpone-info` | `page`, `status` |
| 供应商(公司)图片库查询：根据供应商序号ID(manufactureId)查询该供应商的公司图片库图片列表，前端用于渲染“公司图片库”展示网格(contentTemplate1)及“编辑图片”弹窗网格(contentTemplate2)。上传图片/删除图片后会重新调用本接口刷新图片列表。 | `mbs scm erp-manufacture-get-manufacture-images` | `manufactureId` |
| 菜鸟入库单-状态列表查询：查询菜鸟优选入库单的状态枚举列表，用于「入库单查询」页面顶部「状态」下拉筛选框的选项渲染（el-option 的 label/value 数据源）。无请求参数，成功后返回状态数组。 | `mbs scm erp-purchase-get-stutus-list` | - |
| 菜鸟入库单列表查询：优选仓菜鸟入库单分页列表查询：按单据类型(采购入库单/退货入库单)、时间区间、入库单编号、SKU、店铺、状态筛选，返回入库单行(FOC单号、优选SKU、申请/已入数、各仓库存、销量、直邮信息、采购情况、状态、操作日志等)及是否有操作权限。 | `mbs scm erp-purchase-query-cai-niao-in-storage-order` | `pageNum`, `pageSize` |
| 降本任务-SPU列表查询：采购工作台「降本任务」标签页的 SPU 层分页列表查询：按任务状态(未完成/已完成)、任务类型(下单任务/黑马/其他)、SPU 关键词过滤，返回降本任务 SPU 列表及总条数，供 el-table 渲染，展开行再调用 skuList 获取 SKU 明细。 | `mbs scm erp-purchase-spu-list` | `status`, `pageSize`, `page` |
| 查看签收入库注意事项：采购审批页“入库注意事项”弹窗点开时，按采购批次序号ID(sequenceid)查询该批次已保存的签收入库注意事项(stockdescr)，回填到弹窗文本域中供查看/编辑。 | `mbs scm erp-purchase-view-stock-descr` | `sequenceid` |
| 采购定制订单明细列表查询：采购任务页(purchaseTask)「制作/条码/财务」页签中，展开某供应商行时按 manufactureId 拉取该供应商下的定制订单明细列表，支持SKU/SPU/供应商/批次/订单号/平台单号/订单状态/采购状态/核销状态/到货状态/同步状态/采购时间区间等多维筛选与排序，返回订单明细列表(含定制内容图文、成本、店铺、采购与签收信息)。 | `mbs scm erp-purchase-querypurchase-custom-order-list` | `pageSize`, `manufactureId`, `page` |
| 采购开发-查看跟进日志：在 SKU 详情页点击“查看跟进日志”时，按批次分组ID(groupId) 查询该批次的采购/供应商跟进日志列表，返回每条日志的时间、跟进明细、操作员，渲染到跟进日志弹窗表格。 | `mbs scm erp-purchase-get-documentary-log` | `groupId` |
| 采购批次订单信息查询：按采购批次分组ID(groupId)查询该批次完整订单信息：批次头部(供应商/仓库/付款方式/马帮与平台金额/运单号/跟单日志/财务审核)及其下 purchaseList 采购明细行(SKU/采购状态/缺货/采购量到货量/1688采购信息/退款)。前端采购跟单任务页刷新单条批次时调用。 | `mbs scm erp-purchase-get-order-infos` | `groupId` |
| 采购任务跟进导出：将「今日采购跟进」页面当前筛选条件（downloadparams）下的采购跟进任务列表导出为 Excel 文件。前端点击导出按钮触发 outdown()，POST 请求体为最近一次任务类型为1(今日必跟进)或14(今日已跟进)的查询条件，后端返回 xlsx 二进制流，前端以 Blob 下载。 | `mbs scm erp-purchase-purchase-task-followup-export` | `searchType` |
| 采购下单-获取下单收货地址列表：采购下单/自动下单弹窗中，依据当前勾选的子SKU列表与所属仓库(storageId)，向后端查询可下单的收货地址集合，返回地址字符串数组，前端渲染为地址下拉框(#address2/#genaddress)的option选项，默认选中第一项。 | `mbs scm erp-purchase-get-down-order-address` | `storageId`, `skuList` |
| 采购任务日志列表查询：查询当前采购员的工作日志统计列表，按日期返回采购总任务量、下单量、付款完成量，以及超时付款/超时发货/虚假发货/物流延迟/入库延迟/tk出单/SMT出单等各维度的任务量与完成量及合计。页面加载即调用，不传任何查询参数。 | `mbs scm erp-purchase-get-purchase-task-log-list` | - |
| 查询SKU采购任务：依据 SKU 查询该商品在采购下单模块生成的采购任务列表，返回采购任务生成时间、采购员、采购备注、采购仓库/数量、延迟天数、异常信息与标记完成情况，用于 SKU 详情页采购任务表格渲染。 | `mbs scm erp-purchase-get-sku-purchase-task` | `sku` |
| 采购下单-供应商SKU采购明细查询(purchaseAndManufac)：采购下单页(采购任务列表)展开某一供应商行时，按当前搜索/筛选条件查询该供应商(某仓库)下的待采购SKU明细，返回每个SKU的商品信息、供应商、成本/备货价、推荐采购量、库存/在途、销量预留、异常提示等，前端拼接HTML表格渲染。 | `mbs scm erp-purchase-purchase-and-manufac` | `manufactureid`, `storageId` |
| 降本明细分页查询：降本优化报表「降本明细」页签的多条件分页查询：支持降本时间、入库时间区间、SPU、SKU、降本人、排序方式等筛选，返回降本明细列表（SPU/SKU/产品名/供应商/降本前后金额/降本差额/下降比率/累计降本金额）及总条数。 | `mbs scm purchase-core-service-page` | `page`, `pageSize` |

## 命令详情

- [erp-manufacture-find-issue-shop.md](erp-manufacture-find-issue-shop.md)
- [erp-manufacture-find-postpone-shop.md](erp-manufacture-find-postpone-shop.md)
- [erp-purchase-page.md](erp-purchase-page.md)
- [purchase-core-service-get.md](purchase-core-service-get.md)
- [erp-manufacture-batch-sku-list.md](erp-manufacture-batch-sku-list.md)
- [erp-manufacture-customer-list.md](erp-manufacture-customer-list.md)
- [erp-manufacture-customer-order-list.md](erp-manufacture-customer-order-list.md)
- [erp-manufacture-customer-task-list.md](erp-manufacture-customer-task-list.md)
- [erp-manufacture-customer-task.md](erp-manufacture-customer-task.md)
- [erp-manufacture-customer.md](erp-manufacture-customer.md)
- [erp-manufacture-get-customer-log.md](erp-manufacture-get-customer-log.md)
- [erp-manufacture-get-sale-names.md](erp-manufacture-get-sale-names.md)
- [erp-manufacture-export-excel.md](erp-manufacture-export-excel.md)
- [erp-manufacture-find-issue-info.md](erp-manufacture-find-issue-info.md)
- [erp-manufacture-find-refused-issue.md](erp-manufacture-find-refused-issue.md)
- [erp-manufacture-get-issue-info-list.md](erp-manufacture-get-issue-info-list.md)
- [erp-manufacture-query-sku-issue-num-list.md](erp-manufacture-query-sku-issue-num-list.md)
- [erp-manufacture-query-smt-shop-manager.md](erp-manufacture-query-smt-shop-manager.md)
- [erp-manufacture-query-smt-shop.md](erp-manufacture-query-smt-shop.md)
- [erp-manufacture-find-db-manufacture-evaluation.md](erp-manufacture-find-db-manufacture-evaluation.md)
- [erp-manufacture-find-db-manufacture-extend-list.md](erp-manufacture-find-db-manufacture-extend-list.md)
- [erp-manufacture-find-db-manufacture-extend.md](erp-manufacture-find-db-manufacture-extend.md)
- [erp-manufacture-findpurchase.md](erp-manufacture-findpurchase.md)
- [erp-manufacture-find-return-list.md](erp-manufacture-find-return-list.md)
- [erp-manufacture-get-manufac-cooperate-product.md](erp-manufacture-get-manufac-cooperate-product.md)
- [erp-manufacture-get-manufac-product-purchase-sku.md](erp-manufacture-get-manufac-product-purchase-sku.md)
- [erp-manufacture-get-manufac-product-purchase-spu.md](erp-manufacture-get-manufac-product-purchase-spu.md)
- [erp-manufacture-getmanufacture-level.md](erp-manufacture-getmanufacture-level.md)
- [erp-manufacture-get-manufacture-purchase.md](erp-manufacture-get-manufacture-purchase.md)
- [erp-manufacture-get-manufacture-risk-assess.md](erp-manufacture-get-manufacture-risk-assess.md)
- [erp-manufacture-find-postpone-info.md](erp-manufacture-find-postpone-info.md)
- [erp-manufacture-get-manufacture-images.md](erp-manufacture-get-manufacture-images.md)
- [erp-purchase-get-stutus-list.md](erp-purchase-get-stutus-list.md)
- [erp-purchase-query-cai-niao-in-storage-order.md](erp-purchase-query-cai-niao-in-storage-order.md)
- [erp-purchase-spu-list.md](erp-purchase-spu-list.md)
- [erp-purchase-view-stock-descr.md](erp-purchase-view-stock-descr.md)
- [erp-purchase-querypurchase-custom-order-list.md](erp-purchase-querypurchase-custom-order-list.md)
- [erp-purchase-get-documentary-log.md](erp-purchase-get-documentary-log.md)
- [erp-purchase-get-order-infos.md](erp-purchase-get-order-infos.md)
- [erp-purchase-purchase-task-followup-export.md](erp-purchase-purchase-task-followup-export.md)
- [erp-purchase-get-down-order-address.md](erp-purchase-get-down-order-address.md)
- [erp-purchase-get-purchase-task-log-list.md](erp-purchase-get-purchase-task-log-list.md)
- [erp-purchase-get-sku-purchase-task.md](erp-purchase-get-sku-purchase-task.md)
- [erp-purchase-purchase-and-manufac.md](erp-purchase-purchase-and-manufac.md)
- [purchase-core-service-page.md](purchase-core-service-page.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
