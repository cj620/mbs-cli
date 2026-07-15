# pim - 商品管理

通过 `mbs pim` 命令查询商品管理数据。

## 数据来源

- Service: `-`

## 适用场景

商品

## 意图匹配

关键词：商品

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 获取亚马逊子目录(类目)列表：亚马逊自动刊登确认页加载时调用，获取亚马逊「子目录」(类目)下拉列表，用于渲染筛选区 #categoryId 下拉框的选项（option 的 value=子目录ID、文本=子目录名称）。无请求参数。 | `mbs pim erp-product-get-amazon-category` | - |
| 获取大类目(Excel模板)列表：亚马逊自动刊登确认页，点击/批量修改大类时，按当前SPU所在站点(site)拉取该站点下可选的Excel模板(大类)列表，用于填充 #bigCategorySelect 下拉，选项展示为"模板名 > 产品类型"，选中后用 templateId/productType 修改大类。 | `mbs pim erp-product-site` | `site` |
| 查询刊登确认信息(UPC/刊登编号)：亚马逊自动刊登确认页，点击父SKU时根据变体组ID(groupid)查询该刊登任务下父/子变体的刊登编号(sellerSku)与UPC(productId)信息，回填到「修改UPC并提交刊登」弹窗(upcModal)供编辑确认。 | `mbs pim erp-product-groupid` | `groupid` |
| 根据店铺ID查询亚马逊自动刊登店铺配置：打开自动刊登设置弹窗(showModal)时调用，按 shopId 查询该亚马逊店铺已保存的自动刊登配置(库存/平台费率/毛利/品牌/制造商/物流渠道/类目/VAT/国家/预刊登时间/自动刊登开关/UPC豁免/备货天数/跟卖移除等)，用于回填弹窗各表单控件；无配置时返回空对象，前端清空表单。 | `mbs pim erp-product-get-shop-configure-by-shop-id` | `shopId` |
| 获取店铺刊登大类(一级类目)列表：亚马逊自动刊登配置弹窗(showModal)打开时，按店铺ID查询该店铺可选的刊登「大类(一级类目)」名称列表，用于渲染 #firstCategory 多选下拉(select2)。店铺ID以路径参数形式传入。 | `mbs pim erp-product-shop-id` | `shopId` |
| 开发员(负责经理/负责人)下拉列表查询：商品类目维护页面初始化时调用，返回可选的开发员/负责经理/负责人名称列表，用于「修改类目」「批量设置权限」「批量删除权限」弹窗中「负责经理」「负责人」下拉框的候选项。接口无入参。 | `mbs pim erp-product-get-develop-list` | - |
| FBA库存可销SKU明细查询：FBA库存可销(KX)报表的行下钻接口：点击「店铺负责人」行展开时，按该负责人(shopManager)查询其名下各SKU在各月份/周期的可销(kx)数据，返回 SKU + 周期可销数组，渲染到该行的子表格。 | `mbs pim erp-product-fba-inventory-kx-sku` | `sale` |
| 海外仓列表查询：获取当前用户可见的海外仓(HWC)列表。页面初始化 getHwclist() 调用，GET 无入参；返回海外仓数组，前端用 shopTemplate 渲染顶部'请选择海外仓'多选下拉(#shopContent,值=shopId)，用 shoplistTemplate 渲染新增跟踪单弹窗下拉(#shopList,值=shopId,shopName)。 | `mbs pim erp-product-get-hwc-list` | - |
| 印尼/海外仓SKU刊登校验查询(getSkuInfo)：SKU详情页点击刊登下拉选择平台时，按当前SKU的sid查询该SKU(印尼/海外仓)是否需要刊登提醒。obj===0直接进入对应平台刊登页；obj!==0弹出确认框务必核实海外仓sku是否需要刊登，确认后再刊登。 | `mbs pim erp-product-sid` | `sid` |
| 根据店铺名称查询店长与销售大酋长：产品问题投诉页选择店铺后(getshopleader)，按店铺名称查询该店铺的销售大酋长与店长，回填到“销售大酋长”“店长”只读输入框。 | `mbs pim erp-product-get-big-cheif-by-shop-name` | `shopName` |
| 按SPU查询开发大酋长与开发员：产品问题投诉(侵权反馈)页面初始化时，根据当前 SPU 查询该商品对应的「开发大酋长」与「开发员」，并自动回填到页面只读输入框，供投诉任务匹配责任人使用。 | `mbs pim erp-product-get-big-cheif-by-spu` | `spu` |
| SKU推荐人查询：SKU详情页加载时查询该SKU的推荐人信息，返回推荐人姓名与推荐人头像URL，用于在「推荐人」卡片区(.rementInfo)展示；无数据时隐藏该卡片。 | `mbs pim erp-product-get-sku-recommender` | `sKU` |
| 查询SKU扩展记录(数量)：订单详情页加载销售产品列表后，对每个产品SKU调用本接口，查询该SKU是否已存在扩展SKU记录并返回其数量。前端据返回值是否为0，结合产品热度类型(旺A/爆A/爆B/超级爆款)与毛利(maoli<0)，决定是否显示扩展任务按钮。 | `mbs pim erp-product-find-extend-sku` | `sku` |
| 根据SKU查询库存分仓信息：SPU详情页中点击某SKU的库存单元格时，按SKU查询该SKU在各仓库的库存明细（仓库/仓库类型/仓位/近7·30·60·90天销量/成本价/采购价/库存数/待发货/缺货订单/在途/下单），前端按仓库类型(STORAGETYPE)升序排序后渲染为悬浮气泡表格(InventoryPopover)。 | `mbs pim erp-product-get-product-info-by-sku` | `sku` |
| SKU每日销量查询(getSkuDaySold)：进入SKU详情页时，按当前SKU查询其各SID(子SKU/库存单元)的销量值，前端拼成 sid: reserve9 字符串后展示在"当日销量"区域(#skuDatSold)。 | `mbs pim erp-product-get-sku-day-sold` | `sku` |
| 查询SKU可配置海外仓类型列表：SKU详情页点击“配置海外仓映射关系”时，按 SKU 查询其可选的海外仓类型列表，用于弹窗中“海外仓类型”下拉选择框。返回值为海外仓类型字符串数组，前端 el-select 直接用每个字符串同时作为 label 和 value 渲染。 | `mbs pim erp-product-get-sku-warehouse` | `sku` |
| 获取中转仓(海外仓)列表：加载 SKU 详情页「配置海外仓映射关系」弹窗中「中转仓」下拉框的可选项。无入参，返回可选中转仓(海外仓)名称字符串列表，前端 el-select 用 v-for 直接渲染为选项(label=value=名称字符串)。 | `mbs pim erp-product-get-transit-warehouse` | - |
| 按部门获取员工列表(分配对象下拉)：采购下单/分配采购任务页面初始化时调用，按当前登录人所属部门返回可分配的员工(开发员)姓名列表，前端用 art-template 模板 contentTemplate3 遍历渲染成“分配对象”下拉框(#assignment)的 <option>，所选姓名后续作为 allocationPurchaseTask 的 oper 参数提交。 | `mbs pim erp-product-get-emp-by-dep2` | - |
| 按部门获取开发员(员工)列表：进入「独立站产品报表」页面时调用，按当前登录用户所在部门返回开发员(员工)姓名列表，用于填充页面顶部“开发员”筛选下拉框(#deveplover)。该接口为无参 GET 请求。 | `mbs pim erp-product-get-emp-by-dep3` | - |
| 根据海外仓类型查询发货仓库(前缀)列表：订单详情页「海外仓发货设置」弹窗中，用户选择「海外仓类型」后触发；以海外仓类型ID作为路径参数，返回该类型下可选的发货仓库(中转仓/前缀)列表，用于「选择前缀」下拉框。仅有一项时前端默认选中并继续联动 SKU 后缀与收货仓库。 | `mbs pim erp-product-hwc-type` | `hwcType` |
| 获取海外仓类型列表：订单详情页「转海外仓发货」时，打开创建海外仓SKU弹窗，加载「海外仓类型」下拉选项。无请求参数，返回海外仓类型(warehouseType)列表，供前端按 warehouseTypeId 选择并取 warehouseTypeName。 | `mbs pim erp-product-get-hwc-type` | - |
| 按发货仓库后缀查询收货仓库：创建海外仓SKU弹窗中，根据选中的发货仓库后缀 skuSuffix 查询对应的收货仓库列表，用于填充收货仓库多选下拉，前端默认全选所有 receivingWarehouseId。 | `mbs pim erp-product-sku-suffix` | `skuSuffix` |
| 获取速卖通(SMT)托管内容选项：SKU详情页“申请备货/上架”弹窗中，选择速卖通(smt1/aliexpress)平台时，根据当前 SKU 拉取该平台可选的托管内容选项列表(返回字符串数组)，前端用于渲染“适用内容”下拉选项(value 与 label 同值)。 | `mbs pim erp-product-sku` | `sKU` |
| SPU各平台销售状况查询：在SPU管理列表的“毛利率”单元格鼠标悬浮时触发，按SKU查询该商品在各销售平台的销售额、毛利、退款、广告费汇总，渲染为气泡内的平台明细表格。 | `mbs pim erp-product-get-spu-sales-status` | `sku` |
| 获取直邮类型(直邮仓)下拉选项：SPU(商品)管理列表页筛选条件区「直邮类型」下拉框的数据源接口。页面初始化时无参调用,返回可选直邮类型(直邮仓)名称字符串列表(如 TEMU仓、Shein仓 等),前端将其逐项渲染为下拉选项;用户所选值作为 storagebinflag 参与 SPU 列表查询过滤。 | `mbs pim erp-product-get-storagebinflag` | - |
| 售后登记表-未处理数量查询：商品列表页签栏（productTab）加载时调用，查询当前用户「售后登记表」中未处理的记录数量，用于在「售后登记表」页签上展示红色未读角标（badge-untreated-num）。返回值大于0时显示角标并填入数量。 | `mbs pim erp-product-get-untreated-num` | - |
| 创建人组长下拉选项查询：进入违规产品处理页面时调用，获取「创建人组长」筛选下拉框的全部组长名称选项。无入参，返回组长姓名字符串数组，前端用 art-template 的 groupLeaderTemplate 逐项渲染为 option，并在 search2()/exportTable() 的 getSearchParams() 中把所选组长拼进 employees 数组作为查询条件。 | `mbs pim erp-product-leader-option` | - |
| SKU平台退款率/退包率查询：在SPU管理列表中，鼠标悬浮某行的退款/退包入口时，按SKU查询该SKU在各销售平台上的退款率、质差退款率、退包率，前端渲染成平台/退款率/质差退款率/退包率的悬浮表格。 | `mbs pim erp-product-sku-refundrate-return-package` | `sku` |
| 发货仓库选项查询：获取SPU管理列表筛选器中「发货仓库」下拉框的选项列表。页面初始化时无参 GET 调用，返回值为发货仓库名称字符串数组，直接作为 el-select 的 label 与 value 渲染，供用户选择后以 storageNew 参数回传到 SPU 列表查询接口做过滤。 | `mbs pim erp-product-storage-option` | - |
| 商品异常(售后)原因类型及计数查询：在 SPU 管理页点击「举报异常/添加异常」时，按商品(SPU/productid)拉取可选的异常(售后)原因类型列表及各原因已有的计数，用于填充举报弹窗的「原因」下拉框；下拉项文本为「原因名称(数量)」，数量为 0 时不展示括号。 | `mbs pim erp-product-get` | `sku` |
| 查询Shopee水印(Logo)样式列表：打开"设置自动刊登参数"弹窗时调用，查询当前可选的Shopee水印(Logo)样式列表，用于渲染"水印样式"下拉，供刊登时为图片加水印选择样式。无请求参数。 | `mbs pim erp-product-find-shopee-logo` | - |
| SKU包装-提交人(创建人)下拉列表查询：SKU包装信息报表页加载时调用，获取该报表数据中所有「提交人(创建人)」去重列表，用于顶部「请选择提交人」筛选下拉框的选项数据。返回值为提交人姓名字符串数组。 | `mbs pim erp-product-get-sku-package-create-oper` | - |
| SKU包装-获取仓库信息(下拉)：获取SKU包装测量任务可选的仓库列表，用于「添加任务」弹窗中「仓库」多选下拉框的数据源(el-select 的 storageId/storageName)。前端在页面挂载(onMounted)时调用一次，返回的数组直接绑定到下拉选项；下拉中还会前置一条 storageId=-1「所有平台都测」(前端硬编码,非接口返回)。 | `mbs pim erp-product-get-warehouse-info` | - |
| 开发经理下拉列表查询：获取 SKU 包裹/采样业务下「开发经理」下拉选项列表。前端进入「拍照采样批次核销表」页面时自动调用，返回开发经理 id 与姓名集合，用于「开发经理」多选下拉框；选中后再以其 id 联动查询其名下开发员。 | `mbs pim erp-product-shop-manager-drop-down` | - |
| 获取员工发布类目（getEmployeeCategory）：进入“必发SPU”页面时调用，获取当前登录员工对应的发布类目信息（一级类目、二级类目），用于在页面顶部 #categoryTips 处展示“一级类目：xxx； 二级类目：xxx”的提示文案。 | `mbs pim erp-product-get-employee-category` | - |
| 查询侵权词listing一/二级类别：商品库存中心按类别名称模糊查询商品一/二级类目列表，供侵权授权申请弹框中“侵权词listing类别”多选下拉框渲染选项。name 传空表示拉取全部类别。 | `mbs pim erp-product-get-one-two-categories` | - |
| 按名称查询子类目(其他类目)：「设置类目」弹窗中，根据输入的类目名称关键字 name 模糊匹配并返回可选的子类目(其他类目)列表，结果赋值给前端 settypeapp 的 sonMenulist，用于子类目选择。name 为空时前端直接 return 不发起请求。 | `mbs pim erp-product-get-other-categories` | `name` |
| 查询员工海外仓库存仓库列表：获取当前登录员工可见的海外仓（仓库）列表，用于「海外仓库存流水/盘点日志」页面的「海外仓类型」「出入库仓库」两个下拉框数据源。前端拿到列表后按 storageType==4 过滤出海外仓类型供「海外仓类型」下拉使用，全量列表供「出入库仓库」下拉使用。 | `mbs pim erp-product-get-employee-oversea-storage-list` | - |
| 获取Ozon商品图片编辑信息：Ozon 图片编辑页进入时，按 listing 记录ID(URL路径变量)拉取该 Ozon 商品的编辑信息，前端据此渲染主图、附图列表(imgUrl JSON串)、颜色样本图，并把原始返回对象整体缓存(rawData)，用于后续 1:1还原/3:4裁剪(取 publishSpu/erpSpu/erpSku)及提交保存(原样回传)。 | `mbs pim ozon-product-service-id` | `id` |
| 根据AI图任务ID查询任务状态：图片分配工作台对存在AI图任务(aiImgTaskId)的图片按3秒间隔轮询本接口查询蜂鸟(fengniao)AI处理任务状态；当返回的fengniaoStatus不再为padding时清除定时器并刷新图片列表。 | `mbs pim product-imageditor-service-id` | `id` |
| 校验批量改价（批量改价前置校验）：亚马逊自动刊登确认列表中，勾选若干待刊登数据后点击“批量改价”时触发：把所选行的分组ID(groupIds)提交后端做改价前置校验。校验通过返回这批数据对应的币种符号(obj)，前端弹出批量改价弹窗并把币种显示在价格输入框旁；校验不通过则返回提示信息(desc)弹框告警。 | `mbs pim erp-product-check-batch-modify-price` | `groupIds` |
| 亚马逊待刊登-侧边店铺列表渲染（findPublishShop）：进入亚马逊自动刊登页左侧渲染当前用户的可刊登店铺树：返回用户头像、刊登成功总数、UPC使用/可用数量，以及店铺列表（每店含店铺ID/名称/刊登成功数/是否开启推荐刊登/是否UPC豁免）。无请求参数，后端按当前登录用户上下文返回。 | `mbs pim erp-product-find-publish-shop-amazon-product-publish` | - |
| 亚马逊自动刊登待确认列表查询：亚马逊自动刊登中心首页主列表查询：按店铺、刊登状态、SPU、关键词、站点、类目、刊登人、经理、生成时间区间、价格区间及差评/捆绑/批量等多维度分页查询，返回待刊登/刊登中/成功/失败/放弃的 SPU 行，用于刊登前确认与批量操作。 | `mbs pim erp-product-get-amazon-auto-publish-confirm-list` | `page`, `pageSize` |
| 亚马逊自动刊登-按店铺与ERP SKU查询刊登明细：在「亚马逊自动刊登确认」列表中点击 SPU 行展开时，按 erpSpu+shopId+groupid 加载该 SPU 在该店铺下的全部变体 SKU 刊登明细（标题/描述/类目/主题/库存/颜色/尺寸/价格/运费模板/刊登状态/多张图片），渲染为子表格行供逐项编辑。 | `mbs pim erp-product-get-amazon-auto-publish-info-by-shop-id-and-erp-sku` | `erpSpu`, `shopId`, `groupid` |
| 按站点与大类目查询亚马逊子类目(itemType)：在亚马逊自动刊登确认列表页，用户点击某行的“子类目”单元格进入编辑时，根据该行所属站点(site)与亚马逊大类目名称(amazonCategoryName)联动查询其下可选的亚马逊子类目(itemType)列表，渲染为下拉选项供修改。 | `mbs pim erp-product-get-amazon-category-by-site-and-product-type` | `site`, `amazonCategoryName` |
| 获取亚马逊刊登变体主题(Variation Theme)列表：在亚马逊自动刊登确认列表页点击某行"主题"单元格时触发，无入参 POST 请求，后端返回当前可选的亚马逊变体主题(Variation Theme)名称列表，前端用 themeTypeTemplate 渲染为 select 下拉；用户选中后由 themeTypeChange 将所选 variationTheme 回写到对应 SPU/SKU。 | `mbs pim erp-product-get-amazon-publish-variation-theme` | - |
| 获取亚马逊刊登SKU图片列表：亚马逊自动刊登确认列表中，点击某 SKU 的图片排序/拖拽排序时调用：按店铺+ERP SPU+ERP SKU+刊登分组ID 查询该 SKU 当前的主图、附图1~8、样本图(色卡图)URL，前端用 art-template imagesTemplate 渲染成可拖拽排序的 li>img 列表。 | `mbs pim erp-product-get-images` | `shopId`, `erpSPU`, `erpSKU`, `groupid` |
| 获取批量刊登所需UPC数量：亚马逊自动刊登确认列表中点击「批量UPC」时调用：把所有勾选的待刊登SPU行(每行携带 groupid)封装为 list 上送，后端按这些刊登组计算批量刊登所需补充的 UPC 总数，前端展示为「请填入 N 个UPC」的提示。 | `mbs pim erp-product-get-need-upc-number` | `list` |
| 亚马逊自动刊登-获取产品类型(类目)标签页：亚马逊自动刊登待确认页面顶部「类目标签栏」数据获取：按所选店铺(shopIds)与刊登状态(status)统计各产品类型(一级类目)的待处理数量，返回类目列表，前端用 categoryListTemplate 渲染为可点击的标签页(tab)，点击后按 productType/templateId 二次筛选列表。 | `mbs pim erp-product-get-product-type-tab` | - |
| 按店铺查询刊登状态数量：亚马逊自动刊登(确认)页面，左侧店铺列表点击某店铺展开时调用，按店铺ID统计该店铺的「等待刊登/刊登成功/刊登失败/放弃刊登」四类商品数量，回填到侧边栏对应徽标。 | `mbs pim erp-product-get-publish-status-number-by-shop-id` | `shopId` |
| 亚马逊刊登拦截词/SKU 操作日志查询：查询亚马逊自动刊登「拦截词/拦截SKU」的操作日志：按拦截关键字模糊检索，分页返回每条日志的操作人、操作时间、类型(拦截词/拦截SKU)与内容。用于「操作日志」弹窗展示。 | `mbs pim erp-product-intercept-log` | `page`, `pageSize` |
| 组装SKU属性明细（assembleAttributesDetail）：新增SPU页面根据颜色(color)与尺寸(size)做笛卡尔组合，由后端组装并返回该SPU下的SKU明细列表（含SKU编号、颜色-尺寸属性、产品中文名、图片等），前端渲染到SKU明细表格供继续补充供应商/尺寸/采购价后保存。 | `mbs pim erp-product-assemble-attributes-detail` | `spu`, `skuname` |
| 根据父级分类名称查询下级分类列表：在「设置SMT043自动刊登参数」弹窗中，用户选择「马帮大类(一级分类)」后，前端以所选父级分类名称 + 层级数(固定2)调用本接口，联动查询并渲染下属「二级分类」下拉选项。 | `mbs pim erp-product-find-category-list-by-parent-id` | `parentCategoryname`, `levelnum` |
| 根据ID查询商品类目详情：商品类目管理页点击「修改」时，按类目主键(sequenceid)查询单个类目的详情，用于回显到「修改类目」弹窗（类目名称、英文名称、描述、报关编码、SPU开头规则、负责经理/负责人、级别等）。 | `mbs pim erp-product-get-category-by-id` | `categoryId` |
| 商品类目分页列表查询：商品类目维护页查询：按层级(levelnum)与父类目(parentCatId)分页查询某一级类目列表，支持按类目名称(catName)子类搜索、按状态(openflag)开启/关闭筛选；返回类目列表及总数、当前页。 | `mbs pim erp-product-get-category-list` | `currentPage`, `levelnum`, `pageSize` |
| 类目全类搜索(下拉联想)：商品类目管理页顶部「全类搜索」输入框的远程联想接口：用户输入类目名称关键词(防抖500ms)后，按关键词模糊匹配返回类目候选列表，供 el-select 下拉展示；选中后用于回填面包屑层级并跳转加载该类目的数据。 | `mbs pim erp-product-get-category-select` | `keyword` |
| eBay自动刊登SPU列表查询：eBay自动刊登页面主列表查询：按店铺/刊登状态/产品状态/销量级别/站点/SPU编码等条件分页查询待刊登及已刊登的 SPU 刊登任务，返回 SPU 行及其下的 SKU 刊登明细列表(ebayPublishSku)。 | `mbs pim erp-product-find-ebay-autopublish-spu` | `currentPage`, `pageSize` |
| 按店铺名查询eBay刊登统计数：eBay自动刊登管理页左侧店铺列表，展开某店铺时按店铺名查询该店铺下四类刊登状态的计数（等待刊登 waitnum、刊登成功 successnum、刊登失败 failnum、放弃刊登 giveupnum），回填到左侧店铺树对应徽标。删除SPU后也会重新调用刷新该店铺计数。 | `mbs pim erp-product-find-publish-detail-by-shopname-ebay-product-controller` | `shopname` |
| 查询当前用户刊登店铺列表（侧边栏）：eBay 自动刊登页（eabyAutPublished.html）打开后约 500ms 自动调用，无入参（用户身份由会话/Cookie 推导）。返回当前用户头像、累计刊登成功数及其名下店铺列表（含各店铺累计刊登成功数）。前端用于渲染左侧店铺导航栏，并填充顶部“请选择店铺”下拉。 | `mbs pim erp-product-find-publish-shop-ebay-product-controller` | - |
| 查询店铺自动刊登参数(按店铺名)：在 eBay 自动刊登页面点击某店铺的设置齿轮(showModal)时调用，按店铺名 shopname 查询该店铺已保存的 SMT/eBay 自动刊登参数(站点、目标毛利率、库存、SPK/非SPK备货时长、屏蔽国家、刊登间隔、上架时间、每日上限、是否全托管)，用于回填设置自动刊登参数弹窗。 | `mbs pim erp-product-find-shop-param-by-shopname-ebay-product-controller` | `shopname` |
| Ezbuy刊登列表查询：Ezbuy刊登页列表分页查询。按店铺、刊登人、刊登状态、刊登时间区间筛选，返回刊登记录列表（含 SPU、标题、分类、店铺、刊登人、状态、生成/刊登时间及子 SKU 明细）。同一接口被「刊登中」(search) 与「刊登完毕」(search2) 两个 Tab 复用。 | `mbs pim erp-product-list-ez-buy-publish` | `currentPage` |
| EzBuy刊登店铺列表查询：进入EzBuy刊登管理页时调用，获取当前可选的EzBuy刊登店铺列表，用于「选择刊登店铺」筛选下拉框（#shopName）与「生成下架商品信息」弹窗的店铺选择框（#selectShop）。无请求参数，返回店铺数组，前端仅取店铺名 shopName 渲染为下拉选项。 | `mbs pim erp-product-list-ez-buy-shop` | - |
| FBA批次上架库存明细查询(查看全部)：FBA库存报表页点击某SKU“查看全部”时，按 SKU+店铺 分页查询该SKU各批次的上架库存明细（批次描述、FBA对应批次上架库存数、接收日期），并在弹窗表格中展示，支持分页。 | `mbs pim erp-product-batch-list-fba` | `sku`, `shopName`, `page`, `pageSize` |
| FBA货件校验（checkTrackingListFba）：在出库进度/状态报表页的FBA出库校验弹窗中，输入FBA货件编号、头程运费、包裹称重(kg)、实际发货时间、店铺后点击校验，对货件做出库校验，返回该货件下每个FNSKU的马帮商品编号、本次出库量、重量、头程运费及异常信息列表(含捆绑商品标记)，结果用于 saveTrackingListFba 保存。 | `mbs pim erp-product-check-tracking-list-fba` | `groupId` |
| FBA库息（库存信息）查询：FBA产品状态报表中，点击某行 SKU 的“库息”按钮时，按 bindId/skuValue + 店铺名称分页查询该 SKU 的库息（库存周转）历史明细，返回时间、店铺、SKU、成本价、库存数、日均销量(DMS)、库息天数、创建/操作时间等列，并据 count/countPage 渲染分页。 | `mbs pim erp-product-fba-inventory-kx` | `pageSize`, `page` |
| FBA跟踪单-货件SKU明细查询：FBA跟踪单报表中，点击某条 FBA 货件行的“点击看sku详情”时触发：以货件编号(groupId)为主键，结合时间类型/起止时间/FBA货件状态/SKU 条件，查询该货件下各 SKU 的发货数、接收数、损耗、重量、头程运费、状态等明细，渲染到展开的子表格。 | `mbs pim erp-product-tracking-list-fba-details` | `groupId` |
| 商品(SPU)差评(用户反馈)查询：在「SMT自动刊登」列表点击某 SPU 的「差评」按钮时，按 SPU 分页查询该商品在各平台(ebay/wish/aliexpress)的用户差评反馈列表，并返回各平台差评数量汇总，弹窗展示差评店铺、平台、内容、时间。 | `mbs pim erp-product-get-feed-back-by-spu` | `spu`, `pageindex` |
| Fyndiq刊登列表查询：Fyndiq刊登管理页列表分页查询：按店铺、刊登人、刊登状态、刊登时间区间筛选，分页返回 SPU 行及其下挂 skuList 子表与退款信息。页面三个 Tab（等待刊登/刊登中/刊登完毕）及分页回调共用同一接口，仅入参不同。 | `mbs pim erp-product-list-fyndiq-publish` | `currentPage` |
| Fyndiq刊登店铺列表查询：查询当前用户可用的 Fyndiq 刊登店铺列表，用于 Fyndiq 刊登页面顶部“选择刊登店铺”下拉框的选项填充。无请求参数，返回店铺数组，前端用 art-template 模板 shopnmeTemplate 渲染为 option，仅使用 shopName 字段。 | `mbs pim erp-product-list-fyndiq-shop` | - |
| 海外仓跟踪单校验(新增前出库明细校验)：新增真实海外仓跟踪单弹窗点击校验时调用，按货件编号(groupId)与海外仓核验本次出库明细，返回每条FNSKU/马帮商品的出库量、重量、头程运费及异常信息；校验通过的obj被前端缓存供保存接口saveTrackingListHwc使用。 | `mbs pim erp-product-check-tracking-listhwc` | `groupId`, `shopId` |
| 真实海外仓跟踪单-导出：「真实海外仓跟踪单」页面的导出接口。以与列表查询(trackingListHwcList)完全相同的筛选条件异步生成 Excel 导出文件。前端 myAxios.post(..., {download: true}) 触发浏览器下载并提示'已创建下载'。响应为 Excel 文件流，下表 response 为导出文件数据列(与列表行字段同源)。 | `mbs pim erp-product-export-hwc-list` | `page` |
| 海外仓产品库息(明细)查询：海外仓产品报表(notFbareport)中，点击某商品的“昨日库息”数值时弹出“库息明细”弹窗，按 SKU(或捆绑商品 bindId)+海外仓分页查询该商品逐条库息记录(时间、单个成本、库存、日均销量、库息、创建/操作时间)。 | `mbs pim erp-product-hwc-inventory-kx` | `pageSize`, `page`, `shopName` |
| 真实海外仓跟踪单-SKU明细查询：真实海外仓(HWC)跟踪单列表中，点击某条货件行的“点击看sku详情”展开按钮时，按货件编号(groupId)+时间类型/区间+货件状态+SKU 查询该货件下的逐 SKU 明细(发货/接收数量、金额、损耗、重量、头程运费、货件状态等)，用于子表 sontableTemplate 渲染。 | `mbs pim erp-product-tracking-list-hwc-details` | `groupId` |
| 真实海外仓跟踪单列表查询：真实海外仓(HWC)跟踪单分页列表查询：按时间类型/时间区间、货件编号、货件状态、海外仓、SKU、酋长/店长等条件筛选，返回跟踪单汇总列表(货件、发/收数量、损耗、金额、运费、状态等)及总条数与总页数。 | `mbs pim erp-product-tracking-list-hwc-list` | `page` |
| 图片转文本侵权检测SPU分页查询：按SPU/图片链接/文本/类目/侵权词/钓鱼词/开发员/美工/审核员/查询时间区间等条件，分页查询图片转文本侵权/钓鱼词检测结果列表，返回每条SPU的图片、文本、类目、侵权词、钓鱼词、相关人员及检测时间。 | `mbs pim erp-product-page-spu` | - |
| 印尼分销订单外部仓导出(越域网/赛盈网)：在采购看板自建商品(分销)页勾选订单后，按导出渠道(越域网flag=1/赛盈网flag=0)将所选订单导出为Excel。请求体提交所选订单号集合orderNo及渠道标识flag，后端返回Excel二进制流(.xlsx)，前端以Blob接收并触发浏览器下载。 | `mbs pim erp-product-export-distribution` | `orderNo`, `flag` |
| 国内不良库存SKU列表查询：国内/海外仓不良库存SKU分页查询：按SKU、海外仓类型、直邮类型、销量级别、产品状态、开发员(开发组员)、采购员等条件筛选，返回不良库存SKU列表及SKU/SPU总数与各项汇总。 | `mbs pim erp-product-poor-sku-list` | `pageSize`, `pageNum` |
| 不良库存饼图(末次采购/滞销)分析数据查询：根据当前页表格的 SKU 列表，批量查询每个 SKU 末次入库成功采购单往前推 30/60/90 天的入库采购分析明细（备货人/数量/金额/入库时间）。前端用其计算末次采购分析(备货人、备货数量、备货金额、距今天数)及不良库存分析(占比最高备货人、占比)，并在查看分析表抽屉中渲染 30/60/90 天饼图。 | `mbs pim erp-product-poor-sku-pie-list` | `fielde741ce4d` |
| 备货人(规则)下拉列表查询：为「国内库存(不良库存)分析」页面提供「末次采购备货人」「滞销分析占比最高备货人」下拉框选项数据源，返回规则/备货人名称字符串数组。前端拼接固定项「公司统一备货」「无采购记录」及员工名后作为下拉选项。无请求参数(空 body POST)。 | `mbs pim erp-product-rule-list` | - |
| 侵权登记列表导出：侵权(showslog/tort)登记列表按平台、问题类型、店铺/店长/销售大酋长、开发员/开发大酋长、SPU、提交时间区间、SPU提交售卖时间区间、扣分数区间、禁售政策、触发产品等多维条件，导出侵权登记记录 Excel 文件。以 XMLHttpRequest(responseType=blob) 发起，返回二进制文件流，文件名由 content-disposition 响应头携带。 | `mbs pim erp-product-export-registration-list` | `pageSize`, `page` |
| 侵权登记列表查询：侵权/违规登记记录的多维度分页查询：支持按问题类型、平台、提交时间区间、SPU提交售卖时间区间、SPU、开发员/开发大酋长、店长/销售大酋长、店铺、禁售政策、扣分区间、触发产品等条件筛选并排序，返回侵权登记列表及总条数。 | `mbs pim erp-product-get-registration-list` | `platForm`, `pageSize`, `page` |
| 通过登录人查出其管理的员工ID：以当前登录人为入口，查询其所管理的下级员工ID集合（后端 querySubManagerId）。前端示例页 getlogisticsType()(@deprecated) 复用其 obj 数组渲染物流类型候选项填充 #logisticsType。 | `mbs pim erp-product-get-emp-id-by-emp-name` | - |
| Lazada自动刊登SPU列表查询：Lazada自动刊登管理页的SPU分页查询：按搜索类型(SPU/itemid)、店铺、在线状态、产品状态、销量级别、创建/刊登时间区间、差价等条件分页查询待刊登/已刊登SPU列表，返回每个SPU及其下挂SKU列表(价格、库存、刊登状态等)。 | `mbs pim erp-product-find-lazada-autopublish-spu` | `currentPage`, `pageSize` |
| 店铺刊登明细统计查询（按店铺名）：Lazada 自动刊登页面，左侧店铺列表点击展开某店铺时，按店铺名查询该店铺的刊登明细统计：等待刊登数、刊登成功数、刊登失败数、放弃刊登数，回填到对应店铺节点的徽标。 | `mbs pim erp-product-find-publish-detail-by-shopname-lazada-autopublish-controller` | `shopname` |
| 查询Lazada自动刊登店铺列表(含汇总数)：Lazada自动刊登页加载时调用，无入参。返回当前用户头像、刊登成功/等待汇总数，以及该用户名下的刊登店铺列表(每店含店铺名与刊登成功数)，用于渲染左侧店铺栏与顶部店铺筛选下拉。 | `mbs pim erp-product-find-publish-shop-lazada-autopublish-controller` | - |
| 按店铺名查询店铺自动刊登参数：在 Lazada 自动刊登页面点击某店铺设置/编辑时调用，依据店铺名(shopname)查询该店铺已保存的自动刊登参数(分类、利润率、降价率、库存、包邮、刊登时间/间隔、是否重点店铺、是否最低价限制、是否自动、是否信任及创建信息)，用于回显到刊登参数弹窗 #pubModal。 | `mbs pim erp-product-find-shop-param-by-shopname-lazada-autopublish-controller` | `shopname` |
| Lazada下架确认列表查询：Lazada批量下架管理页的下架任务列表查询：按店铺、创建时间区间、在线编号、SPU、下架状态分页筛选，返回下架任务列表(商品图/SKU/SPU/店铺/负责人/在线编号/近30天销量/创建人/创建时间/下架状态/刊登时间/下架时间/失败原因)及总数、总页数。 | `mbs pim erp-product-find-lazada-disabled-confirm` | - |
| 解析上传文件获取itemId：Lazada批量下架页「生成下架商品信息」弹窗中，用户选择本地文件并点击「上传」按钮后，以 multipart/form-data 上传文件，后端解析文件内容匹配出对应的 itemId 集合并返回（JSON字符串数组），前端解析后用逗号拼接回填到 itemId 文本框。 | `mbs pim erp-product-find-lazada-itemid` | `file` |
| Lazada批量改标题-修改确认列表查询：Lazada批量修改标题页面查询修改任务列表：支持按站点、刊登店铺、修改状态、修改人、SPU/SKU模糊关键词筛选，分页返回修改任务行（原标题/新标题/店铺/站点/SKU/itemID/状态/创建与修改人时间）。descr 区分修改中（空）与修改完毕（修改完成）两个 Tab。 | `mbs pim erp-product-find-lazada-publish-confirm` | `currentPage` |
| 查询Lazada店铺列表：Lazada批量下架页面初始化时调用，无请求参数，返回当前用户可见的Lazada店铺名称列表（字符串数组），用于渲染顶部筛选店铺多选框与生成下架商品信息模态框店铺多选框。 | `mbs pim erp-product-find-lazada-shop` | - |
| 查询修改人(管理员工)姓名列表：Lazada批量修改标题页面初始化时调用，无入参，返回当前可选「修改人」(管理员工姓名)字符串数组，前端用 art-template(modifierTemplate) 渲染到「选择修改人」下拉框(#modifier)，供按修改人筛选 Lazada 改标题任务列表。 | `mbs pim erp-product-find-manage-employee-names` | - |
| 查询可管理刊登店铺列表：Lazada 批量修改标题页面初始化时调用，拉取当前用户可见/可管理的刊登店铺名称列表，用于渲染「选择刊登店铺」下拉框(#shopName)的选项。无请求参数，前端发起空体 POST，店铺范围由后端依据登录用户上下文确定。 | `mbs pim erp-product-find-manage-shop` | - |
| Lazada刊登详情统计(getPublishDetailInfo)：进入Lazada刊登管理页时调用，获取当前用户/团队的刊登任务统计：待刊登、刊登中、昨日刊登成功/失败、今日刊登成功/失败六项指标，渲染到页面头部统计卡片。该接口无请求参数。 | `mbs pim erp-product-get-publish-detail-info` | - |
| 查询已刊登(新刊登)店铺列表：Lazada 批量刊登页面切换到“刊登完毕”Tab 时调用，查询当前用户可选的“新刊登店铺”列表，用于渲染 #PublishedShop 下拉框（art-template 模板 PublishedShopTemplate）。无请求参数，返回店铺名称集合，选中值作为 search2() 的 targetShops 参数。 | `mbs pim erp-product-list-have-published-shop-lazada-publish` | - |
| Lazada批量刊登-按Listing查询商品列表：Lazada批量刊登页商品列表分页查询：按刊登状态、商品属性、店铺、刊登人、站点、spu备注关键词、刊登时间区间等条件分页返回待刊登/已刊登SPU列表及子SKU明细。等待刊登Tab由search()调用、刊登完毕Tab由search2()调用，复用同一接口。 | `mbs pim erp-product-list-product-by-listing-lazada-publish` | - |
| 可刊登店铺列表查询(listPublishShop)：Lazada 批量刊登页面初始化时调用，获取当前用户可用于“生成 listing/刊登”的店铺列表，渲染到“请选择店铺”多选下拉框(#pubshop)。请求无业务参数(空 body POST)，响应 obj 为店铺数组，前端仅取店铺名 ebayShopName 作为下拉选项的 value 与显示文本。 | `mbs pim erp-product-list-publish-shop-lazada-publish` | - |
| Lazada Relisting失败信息详情列表查询：查询 Lazada 平台重新刊登(relisting)的失败信息详情：按 relisting 时间、店铺名称分页查询失败列表，返回每条 SPU 的平台、店铺、店铺负责人、源标题/源itemID、上架状态、销量、失败原因等，并返回总条数与总页数用于分页。 | `mbs pim erp-product-list-relisting-details-lazada-publish` | `isSuccess`, `relistingTimeStart`, `pageSize`, `currentPage` |
| Lazada Relisting结果列表查询：查询Lazada平台重新刊登(relisting)结果列表：支持按店铺负责人、店铺、relisting时间区间筛选，分页返回各店铺当日relisting成功/失败数量、负责人、生成日期等汇总信息，用于lazada relisting列表页展示。 | `mbs pim erp-product-list-relisting-results-lazada-publish` | `relistingTimeStart`, `relistingTimeEnd`, `pageSize`, `currentPage` |
| 未刊登过店铺列表查询：查询当前用户在 Lazada 刊登场景下尚未刊登过的店铺列表，用于「等待刊登」筛选区「选择未刊登过店铺」下拉框(#shopName)的选项渲染。页面加载时自动调用，无请求参数；返回店铺ID与店铺名称列表。 | `mbs pim erp-product-list-un-publish-shop` | - |
| 爆款listing列表查询：爆款listing榜单分页查询：按平台、店铺、店铺负责人、总监/经理/主管/店长、店铺名、SPU、开发时间区间、发布时间区间、排序方式等条件筛选，返回 listing 行及分页汇总（total/totalPages）。 | `mbs pim erp-product-find-listing` | `currentPage` |
| 平台列表查询：查询平台基础数据列表，用于「爆款listing」页面顶部平台多选下拉框(platfromlist)的数据填充。无请求参数(空请求体)，返回平台数组，前端取 sequenceid 作为选项值、name 作为显示文本。 | `mbs pim erp-product-find-platform-listing-controller` | - |
| 爆款listing奖励排行榜查询：商品中心“爆款listing”页面「排行榜」标签页查询接口：无请求参数，后端返回各店铺负责人(shopPrincipal)的爆款listing数量(listingNum)排行榜列表，前端按返回顺序生成名次、姓名、listing数三列展示；奖励金额(rewardMoney)字段在模板中已注释、当前不展示。 | `mbs pim erp-product-find-reward-money` | - |
| 店铺负责人(店长)下拉查询：爆款 listing 页面初始化时拉取店铺负责人(店长)下拉选项数据，用于店铺负责人筛选控件(#saleLeader)的选项渲染。该调用为无参的空 POST，后端返回全部可选店铺负责人列表。 | `mbs pim erp-product-find-shopmanager` | - |
| 按平台查询店铺(findShop)：爆款listing页面('店铺'下拉联动)：根据所选平台(reserve11)查询该平台下的店铺列表，渲染到店铺下拉框(#shopId)。当未选择平台时传空 reserve11，查询全部店铺。 | `mbs pim erp-product-find-shop-listing-controller` | - |
| 运营优化建议(SPU)列表查询：库存/今日必做看板「优化」(optimiz/重新检测)Tab 的列表分页查询：按店铺名称、平台、店长、处理状态、itemId 等条件分页查询命中运营策略的 SPU，返回每条 SPU 的图片/标题/订单量/PV-UV/加购收藏/转化率/毛利率/评价评分/推送处理时间/处理状态、问题诊断规则(rule)与优化策略动作列表(actionList)。 | `mbs pim erp-product-proposal-list` | `page`, `pageSize` |
| OZON自动刊登列表导出Excel：OZON推荐(自动)刊登列表页按当前搜索表单筛选条件导出符合条件的刊登SPU为Excel。请求体复用列表查询getParams()结果并追加分页;响应为二进制.xls文件流(responseType=blob),前端创建a标签触发下载,文件名为ozon自动刊登+时间戳.xls。 | `mbs pim erp-product-ozon-publish-export-excel` | `currentPage`, `pageSize` |
| 图片关联侵权SKU搜索：商品侵权审核「关联SKU」环节调用：把待审核清单中的 SKU+图片分批(每批最多20条)提交，以图搜款返回图片相似的关联商品列表(含相似度评分、是否侵权标记)，前端按 sku 去重后追加到审核弹窗 list3，供审核人勾选一并提交审核。 | `mbs pim erp-product-tort` | `submitBy`, `body` |
| 独立站产品认领列表查询：独立站产品认领页列表查询：按 SPU、认领人、提交销售时间区间、测款状态分页查询已认领去广告测款的 SPU 列表，返回 SPU 基本信息及各认领人操作（认领/去广告）记录。 | `mbs pim erp-product-product-claim-list` | `page`, `pageSize` |
| 认领人下拉列表查询：进入「独立站产品认领」页面时加载，返回可作为认领人筛选项的员工列表，用于渲染顶部「认领人」多选下拉框(#queryOperList)。该请求无任何请求参数(空 body)。 | `mbs pim erp-product-query-oper-list` | - |
| 国内清仓商品管理-清仓商品列表查询：国内清仓商品管理页面列表查询接口：按清仓状态(草稿中/等待清仓/清仓中/清仓完成)分页查询清仓商品，支持按SKU、子目录、排序方式、进度(移仓/拍照/刊登)筛选，返回清仓商品列表及总数。 | `mbs pim erp-product-clearance` | - |
| 批量查询商品(海外仓SKU)成本价：在“海外仓sku成本”弹窗中，用户在文本域按“sku,成本价”逐行录入后失焦触发，前端把每行解析为 {sku, costprice} 数组放入 list 批量提交后端，后端返回每个SKU的原成本价(oldCostprice)与现成本价(newCostprice)用于表格回显，供用户修改后再调用 batchUpdateProductCostprice 保存。 | `mbs pim erp-product-batch-query-product-costprice` | `list` |
| 校验SPU是否存在：SKU详情页(SKUdetails2)中，用户在SPU输入框失焦(onblur)时触发，把SPU值通过查询参数spu提交后端，校验该SPU是否已存在。obj=true表示已存在；obj=false表示不存在，前端弹出确认框走addSpu创建流程。 | `mbs pim erp-product-check-spu-is-live` | `spu` |
| 商品咨询留言列表查询：商品咨询页按提问人/回复人/开发员、提问时间区间分页查询商品(SPU/SKU)留言：返回主留言(提问)及其子留言(回复)两级结构，前端渲染为表格并分页。 | `mbs pim erp-product-get-allleave-message` | `page`, `pageSize` |
| SPU竞品信息查询：根据SPU查询该商品的竞品信息列表，返回每个竞品的图片、链接、标题、物品所在地、销量、含运费售价等，渲染到SPU详情页「竞品信息」表格(#content5)。 | `mbs pim erp-product-get-competitor-spu` | `spu` |
| SKU国家销量统计查询：查询指定SKU近15天按国家维度的销量统计，用于SKU详情页 ECharts 横向柱状图「国家15天销量(单)」渲染。仅当商品 salesLevel 为超级爆款/爆A/爆B/旺A/旺B 时由 getProductInfoSku 成功回调触发调用。 | `mbs pim erp-product-get-country-sales-info` | `sku` |
| 查询SKU是否同步供应商标记：SKU详情页加载时查询当前SKU“是否同步供应商”的开关状态，用于回显页面右上角 #skuIsSync 复选框（勾选=已同步）。返回 obj 为同步标记：1=同步、0=不同步、null=未设置（未设置时隐藏开关区域）。与写接口 /erpProduct/erpProduct/productDetails/updateIsSyncSupply 成对使用。 | `mbs pim erp-product-get-is-sync-supply` | `sku` |
| 获取SKU留言列表：商品详情「全部留言」页加载指定SKU的留言列表：按SKU(及SPU)查询全部留言，返回每条留言的留言人/时间/内容/头像、附带的图片与文件附件，以及该留言下的子留言(回复)。 | `mbs pim erp-product-get-leave-message-sku` | `sku` |
| SPU留言查询：SPU详情页加载时查询该SPU下的全部留言（含子回复）列表，渲染到"SPU 留言"卡片。返回留言人、头像、留言内容、留言时间、留言目标(SKU/SPU)、留言类型及嵌套子留言。当前用户头像通过顶层 content 字段返回。 | `mbs pim erp-product-get-leave-message-spu` | `spu`, `isAll`, `isSystem` |
| SKU供应商信息查询(getManufactureSku)：SKU详情页加载该SKU的供应商(含主供应商与两个备选供应商)信息：供应商名称/ID、采购价、起批量、采购平台、平台链接、1688/淘宝/天猫备选供应商链接、旺旺号、商品图片等，用于渲染供应商表格(content2/contentTemplate2)。前端对返回数组补位至3条。 | `mbs pim erp-product-get-manufacture-sku` | `sku` |
| 商品(SPU)供应商信息查询：根据 SPU 查询该商品在 1688 上匹配的全部供应商信息，返回供应商旺旺、供货商品(SKU/图片/1688商品名)、商品属性、是否自动采购、捆绑数量、起批量、商品价格、含运费报价、供应商状态、匹配人/匹配时间等，用于 SPU 详情页「供应商信息」表格渲染。 | `mbs pim erp-product-get-manufacture-spu` | `spu` |
| 最优采购/预计到货信息查询：在店铺爆款监控列表中点击某行预计到货/日志入口时，按该行 ERP SKU 查询其最优采购方案下采购发货、采购到货、仓库签收等各环节的开始/完成/预警时间及整体预计到货时间，在预计到货弹窗以步骤表展示。 | `mbs pim erp-product-get-optimal-purchase` | `sku`, `sku` |
| 产品详情-销售单(订单)列表查询(getOrderSku)：移动端马帮ERP产品详情页加载时按SKU查询该商品关联的销售单(订单)列表，前端取data.obj，前3条渲染到默认销售单信息区，其余在点击查看更多后展开，逐条展示订单号/状态/英文标题/售价/数量/总收入/总毛利/国家/成交账号/店铺管理员/下单时间。 | `mbs pim erp-product-get-order-sku` | `sku` |
| 获取包装方式下拉选项：SKU 详情页初始化时调用，拉取全部包装方式字典项（ID + 名称），渲染到 #packageType 下拉框。无任何请求参数，返回包装方式列表，前端用 art-template 遍历生成 <option>；packageTypeId == 0 的项作为占位项并置为 disabled。 | `mbs pim erp-product-get-package-type` | - |
| 包材下拉列表查询：查询全部可选包材(包装材料)列表，用于 SKU 详情页"包材"下拉框(#getPackingContent)的选项渲染。前端通过 art-template getPackingTemplate 把返回的 obj 数组渲染为 <option value="包材ID">包材名称</option>。 | `mbs pim erp-product-get-packing` | - |
| SKU平台销量查询(平台15天销量)：SKU详情页查询该SKU各销售平台近15天销量，返回 平台名称 + 平台销量 列表，前端用 ECharts 横向柱状图渲染「平台15天销量(单)」。 | `mbs pim erp-product-get-platform-sales-info` | `sku` |
| 获取商品(SKU)属性列表：查询全部商品(SKU)属性，供「商品导出新建」页「SKU属性」多选下拉框作为可选项数据源。无请求参数，固定返回属性集合，前端通过 art-template 渲染为 <option>。 | `mbs pim erp-product-get-product-attribute` | - |
| SKU降本(成本扩展)记录查询：SKU详情页加载“降本(成本扩展)”模块时调用：按 URL 中的 SKU 查询该 SKU 的降本谈价记录列表（降本前价/目标价/谈妥价、供应商、捆绑数量、起批量、降本人、修改/清除信息、议价图片等），并据 isShow 控制“编辑成本”按钮显隐，回填目标价/供应商/现价/起订量到编辑表单，列表通过 art-template contentTemplate3 渲染。 | `mbs pim erp-product-get-product-extend-sku` | `sku` |
| 商品详情-按SKU查询商品基本信息：移动端「产品详情」页加载时，按 URL 上的 SKU 查询该商品的基本信息（名称、SPU/SKU、售价、售卖状态/等级、销量、毛利率/退款率、重量、库存、颜色尺码、包装、仓库仓位、开发员/采购员、申报名、备注等），返回数组(前端取第 0 个元素)渲染基本信息卡片。 | `mbs pim erp-product-get-product-info-sku` | `sku` |
| SPU/SKU 操作日志查询：根据 SPU 分页（滚动加载）查询该商品 SPU 及其下 SKU 的操作日志列表，返回操作人、操作时间、关联SKU、操作内容，前端在 SPU 详情页右侧操作日志栏渲染，并通过 IntersectionObserver 触底递增 limitNum 加载更多。 | `mbs pim erp-product-get-product-log-spu-or-sku` | `spu`, `isAll`, `limitNum` |
| SPU下SKU信息查询：SPU 详情页按 SPU 查询该 SPU 下全部 SKU 列表，返回每个 SKU 的图片、名称、库存/待发货、供应商、商品属性、销量等级、颜色尺寸、含运费成本、新品扶持期价格与剩余天数、毛净重、包装尺寸、近7/30/90天销量、开发员与创建时间等，用于渲染「SKU 信息」表格。 | `mbs pim erp-product-get-product-sku` | `spu` |
| SKU任务信息查询：SKU详情页底部「任务」模块加载：按SKU查询该商品关联的任务工单记录，返回任务发起人/执行人/任务简介/生成时间/任务状态列表，渲染为任务表格(#taskInfoSku)。 | `mbs pim erp-product-get-product-task-info-sku` | `sku` |
| 商品SPU侵权信息查询：根据商品 SPU 与平台(固定 Walmart)查询该商品的侵权提示信息，前端将返回的 content 文本以告警条形式展示在限价/侵权提示组件中，用于刊登前提醒卖家避免侵权下架风险。 | `mbs pim erp-product-get-product-tort` | `spu`, `platform` |
| SKU刊登信息查询(近30天)：根据SKU查询该商品近30天已刊登的数据排名(图片、刊登标题、销量、站点/发货地、售价、店铺、平台SKU、大酋长/客户经理、店铺类型/运营状态、刊登日期等),并返回当前用户名下未刊登该商品的店铺及负责人。支持是否全公司、低分筛选、仅白名单店铺、仅白名单SKU等开关。 | `mbs pim erp-product-get-publish-info-sku-new` | `sku` |
| SPU刊登信息查询(新)：SPU详情页「刊登信息」面板查询：传入SPU与白名单/低分等筛选开关，返回该SPU在各平台店铺的刊登明细列表(图片、标题、销量、售价、店铺、负责人、平台SPU、刊登日期等)，以及当前用户名下尚未刊登该SPU的店铺列表；同时返回数据更新时间。 | `mbs pim erp-product-get-publish-info-spu-new` | `spu`, `isAll` |
| SKU采购异常统计查询：SKU详情页加载时调用，查询该SKU近60天的采购收货异常统计：少发、多发、漏发、错发、正常各类型的数量及其占总数比例，渲染到“查看采购单”旁的标签区(#infoContent)。 | `mbs pim erp-product-get-purchaseabnormal` | `sku` |
| SKU采购异常消息查询：SKU详情页加载「采购异常」(searchAwait) 面板时调用，按 SKU 查询该商品的采购异常消息列表（异常状态、消息类型、消息详情、反馈、开发员/采购员、任务推送与截止日期等），用于渲染 awaitTempalte 表格。 | `mbs pim erp-product-get-purchase-bysku` | `sku` |
| SKU采购在途运单查询(getPurchaseSku2)：SPU管理列表中鼠标悬停某SKU在途小窗时触发，按SKU查询该SKU的采购在途运单明细（运单号、在途数量、到货状态、采购跟进日志、最新物流轨迹），渲染到 popover 弹窗。 | `mbs pim erp-product-get-purchase-sku2` | `sku`, `sku` |
| SKU详情-采购记录查询(getPurchaseSku)：按SKU查询该SKU的全部采购记录，返回每条采购单的仓库、采购批次/组、供应商及等级、运单号与物流轨迹、购买/到货数量、采购价/运费、采购备注、采购员、采购/入库时间、采购状态/退款原因、跟单日志等。SKU详情页采购记录面板(content4)渲染数据源；按部门(content)做供应商/价格脱敏。 | `mbs pim erp-product-get-purchase-sku` | `sku` |
| 按平台查询刊登站点(getSiteByPlatform)：根据所选主销平台查询该平台下已刊登过的站点列表。前端在平台下拉框 #kingPlatform 的 onchange 事件中调用，返回的站点字符串数组用于渲染‘刊登过的站点’下拉框 #siteslesct2（art-template 模板 sitemTempalte），供 SKU 列表查询按 site 参数过滤。 | `mbs pim erp-product-get-site-by-platform` | - |
| 获取SKU图片列表：根据 SKU 查询该商品的图片列表，返回每张图片的URL与图片记录序号。前端用于 SKU 详情页主图轮播展示(exzoom)与编辑图片弹窗(可删除/设为主图)。前端在拿到 imageUrl 后会把图床域名 http://instudio.gnway.cc 替换为 http://www.instudio.me 再渲染。 | `mbs pim erp-product-get-sku-images` | `sku` |
| 按SKU与海外仓查询海外仓映射关系：SKU详情页「配置海外仓映射关系」弹窗中，用户选择某个海外仓类型后调用本接口，根据当前 SKU + 海外仓类型查询该映射记录（直邮SKU/海外仓SKU/分销平台SKU/中转仓），用于回填编辑表单。返回的整条记录同时作为后续 updateSkuMapping 的原始值(orginInfo)。 | `mbs pim erp-product-get-sku-mapping-by-sku-and-warehouse` | `sku`, `warehouse` |
| SPU国家30天销量查询(New)：按SPU与月份偏移量查询该SPU近30天分国家的销量，返回各国家及其销量列表，前端用于"国家30天销量(单)"横向条形图(echarts)展示。 | `mbs pim erp-product-get-spu-country-sales-info-new` | `spu`, `month` |
| SPU国家销量信息查询（国家15天销量）：按 SPU 查询该商品近15天分国家的销量数据，前端用 ECharts 横向柱状图渲染「国家15天销量(单)」。返回为国家销量数组(country/countrySale)，按销量倒序展示；返回 obj 为 null 时隐藏图表容器 #contury12，并把 res.obj 写入 sessionStorage.resObjOne。 | `mbs pim erp-product-get-spu-country-sales-info` | `spu` |
| 获取SPU图片列表：在新增SPU页面，按SPU编号查询该SPU下已存在的全部商品图片，返回图片URL与图片记录ID列表，前端渲染为图片墙；新增/删除图片及组装属性成功后回调刷新。 | `mbs pim erp-product-get-spu-images` | `spu` |
| SPU平台30天销量信息查询：商品详情「spu销售量趋势图」页面右侧「平台30天销量(单)」柱状图数据源：按 SPU 查询该商品近30天(可按 month 月份偏移)各平台/店铺的销量(订单数)，前端用 ECharts 横向柱状图渲染。 | `mbs pim erp-product-get-spu-platform-sales-info` | `spu` |
| 获取标准商品单元(SPU详情)：SPU详情页打开时按 SPU 编号加载该 SPU 的标准商品单元信息：中文/英文标题、英文关键词、英文描述、开发性质、分类、禁售平台、侵权与禁售站点、专利国家、中英文申报名、品牌、采购链接、可公开店铺、视频/动图链接、竞品链接、公司归属等，用于详情页头部渲染及编辑SPU模态框回填。 | `mbs pim erp-product-get-standard-product-unit` | `spu` |
| 获取SKU特供虚拟仓库存设置：SKU详情页加载时查询当前SKU的「特供虚拟仓」设置：是否开启特供虚拟仓、保底库存值，用于回显复选框与保底库存输入框；无权限时返回字符串"没有权限"并隐藏整块设置区。 | `mbs pim erp-product-get-xn-sku-savenum` | `sku` |
| Listing 国家/平台销量分布查询：店铺热卖商品监控页 listing 悬浮图表数据源：按 itemId/平台/店铺/平台SPU 查询该 listing 的销量分布，返回国家维度与平台维度两组（标题数组+销量数组），前端用 ECharts 渲染上下两个横向柱状图。 | `mbs pim erp-product-listing-country-platform-sale-info` | `itemId`, `platformId`, `shopName` |
| 以图搜款(按图片URL搜索相似SKU)：在 SPU 管理列表商品图片上点击「搜索相似SKU」放大镜图标，将该商品主图URL提交后端做以图搜图，返回匹配到的相似商品SKU集合；前端把结果写入 localStorage(arrSkus)，再跳转 SPU 管理页(flag=6)，以批量SKU(batchSku)方式回填搜索框并重新查询，从而展示所有相似款。 | `mbs pim erp-product-picture-search-product-by-url` | `url` |
| 清仓/停产待办任务分页查询：成品看板「清仓申请」标签页加载/翻页时调用，按状态类型(statusType)分页查询商品清仓/停产待办任务，返回任务总数与任务行列表(SKU、商品名、销量级别、库存、推送人/时间、审核人等)。前端以 res.obj.items[0] 作为表格行渲染，并支持对单条任务进行同意/拒绝处理。 | `mbs pim erp-product-page-product-must-task` | - |
| SKU国家/平台/刊登销量分布查询：SKU销量统计弹窗(sales-chart-sku 自定义组件)右侧三张柱状图的数据源：按指定SKU返回该SKU的平台销量分布(platform)、国家销量分布(country)、刊登量分布(publish)三组数据，每组含分类名称数组(title)与对应销量数组(saleNum)，前端分别渲染到右下、右上、中间三个 ECharts 柱状图。 | `mbs pim erp-product-sku-country-platform-sale-info` | `sku` |
| 海外仓类型下拉查询：爆款商品监控页(shopHotProducts2)初始化「请选择海外仓类型」下拉框时调用，返回全部海外仓类型(ID+名称)，前端用 art-template warehouseTypeTemplate 渲染为 option 后挂到 #warehouse 并初始化 ySelect。无请求参数。 | `mbs pim erp-product-warehouse-type` | - |
| 供应商/开发员退货排行查询（退货排行榜）：降本排行榜页面「退货排行」标签页数据查询：按开始/结束时间区间统计各人员（开发员/采购员）的退款情况，返回按退款金额排行的人员列表（姓名、统计项金额、累计退款金额）。 | `mbs pim erp-product-get-manufac-refund` | `page` |
| 降本英雄榜(开发员降本汇总查询)：降本排行榜页「降本英雄榜」标签的数据查询：按时间区间统计各开发员(或采购组)在该期间内的降本明细，返回动态列头(title)与对应数据行(list)，前端以表头字段名 name 动态从每行取值渲染等级榜单。 | `mbs pim erp-product-get-oper-reduce-price` | `page` |
| 降本SKU榜查询：降本排行榜页「降本SKU榜」分页查询：按SKU编号、开发员、采购员筛选，返回SKU降本明细（开发员/采购组、图片、产品名、降本持续天数、30天销量、当前采购价、累计降本金额、每周降本金额）及总数、总页数。 | `mbs pim erp-product-get-product-reduce-price` | `pageSize`, `page` |
| 拦截SKU列表查询(forbidSkuList)：eBay 批量刊登页「拦截SKU」弹框的分页列表查询。打开拦截SKU弹框、翻页、以及按 SKU 模糊搜索均调用本接口，返回被拦截 SKU 列表(SKU编号/拦截站点范围/提交人/提交时间)及分页汇总。 | `mbs pim erp-product-forbid-sku-list` | - |
| eBay刊登Listing列表查询：eBay批量刊登页按刊登状态(等待刊登/刊登完毕)分页查询待刊登/已刊登的 Listing 列表，可按属性类型(单/多属性)、店铺过滤，返回 SPU 行及其下 SKU(ebayPublishSkuVo)明细、价格/毛利率/发货地/刊登店铺/刊登状态/刊登结果等字段。 | `mbs pim erp-product-list-product-by-listing-product-publish` | `status`, `currentPage` |
| 查询未刊登过的eBay店铺列表：eBay批量刊登页面初始化时调用，获取当前用户可用于刊登的eBay店铺列表，返回店铺ID、店铺名称及大额/小额Paypal账号，用于渲染选择未刊登过店铺下拉框与请选择您要刊登店铺下拉框。 | `mbs pim erp-product-list-publish-shop-product-publish` | - |
| 查询下属管理员ID(刊登人)：eBay批量刊登页用于获取当前登录用户的下属员工/管理员ID集合，结果写入 sessionStorage(subManngerIds) 供后续 search() 刊登列表查询作为数据权限过滤条件。请求体为空(无入参)，身份信息由登录态(Cookie/Session)隐式传递。 | `mbs pim erp-product-query-employee-id` | - |
| 按店铺负责人查询店铺列表(queryShopBeanBySaleLeader)：Lazada relisting 列表页中，当用户在“店铺负责人”下拉框选择某负责人时触发，按所选负责人的员工ID查询其名下店铺集合，返回店铺列表用于渲染“店铺”下拉框。负责人为空表示查询全部。 | `mbs pim erp-product-query-shop-bean-by-sale-leader` | - |
| Shopee各站点类目查询：按 SKU 或 SPU 分页查询商品在 Shopee 七个站点(ID印尼/SG新加坡/MY马来/TH泰国/PH菲律宾/TW台湾/VN越南)的类目分类与属性值，返回分页列表供页面表格渲染、修改与批量修改。 | `mbs pim erp-product-find-shopee-category` | `currentPage` |
| 根据店铺ID查询Amazon店铺信息：商品导出新建页选择 Amazon 店铺(下拉控件 #shopnames)后，按所选店铺 sid 查询该店铺详情，回填品牌名称(platformshopname)与店铺URL名(amazonurlname)到表单。店铺ID以 URL query 参数 shopid 传递，无请求体。 | `mbs pim erp-product-get-amazon-shop-by-id` | `shopid` |
| 获取主要购买国家列表：商品导出创建页加载时调用，拉取可选的"主要购买国家"列表，用于渲染 #purchaseCountry 多选下拉框（最多支持10个国家）。无请求参数，返回国家名称集合。 | `mbs pim erp-product-get-country` | - |
| 违规产品审核：违规产品登记表(registrationForm)「违规产品」页签中，总经办点击行内[审核]弹出审核模态框，选择审核结果(通过/驳回)并填写备注后提交。后端按 sequenceid 标记该违规记录审核状态与备注，仅返回 code/desc，前端据 code 弹窗提示并刷新列表。 | `mbs pim erp-product-check-product-illeagal` | `sequenceid`, `checkstatus` |
| 过滤禁售平台下拉选项查询：SPU列表（商品管理）高级筛选区「过滤禁售」多选下拉框的数据源接口。页面初始化时无参调用，返回可供过滤的禁售平台选项列表（value 值 + 名称），用于渲染 el-select 多选项；用户选中的 value 集合最终以 forbidPlatformIdList 参数提交到 SPU 列表查询接口。 | `mbs pim erp-product-filter-for-bid-platform-id` | - |
| 查询全部主销国家(下拉选项)：商品SPU管理(管理版)筛选区初始化时调用，拉取全部主销国家选项列表，填充到 kingCountriesOptions，供主销国家多选下拉框渲染。无请求参数，返回国家选项数组(以 name 作为下拉项的 label 与 value)。 | `mbs pim erp-product-find-all-country` | - |
| 平台列表查询：查询全部平台列表，用于详情页筛选区平台下拉选择框的选项数据源。页面加载时调用一次，返回平台集合，前端以 sequenceid 作为选项值、name 作为选项显示文本。 | `mbs pim erp-product-find-platform-product` | - |
| 查询可公开店铺列表：SPU 详情页加载"对外公开店铺(publiclyAvailableShops)"下拉框时调用，返回可选店铺列表(店铺名称集合)，前端通过 art-template 模板 contentTemplate17 渲染为 <option> 选项。请求不携带任何参数。 | `mbs pim erp-product-find-shop-product` | - |
| 查询待刊登SPU列表：ebay批量刊登页面加载时调用，查询当前用户已暂存/待刊登的SPU编号清单（无入参，按登录上下文查询），返回SPU字符串数组，前端用逗号拼接后回填到“ebay批量刊登”输入框(#batchsku)，供后续生成listing使用。 | `mbs pim erp-product-find-spu-for-publish` | - |
| 泡货(抛货)信息查询：SPU/SKU 列表中某行的泡货图标(炸弹图标)鼠标悬停时触发，按 SKU 向后端查询该 SKU 的泡货/抛货(超体积/抛重)提示信息，后端直接返回一段 HTML 片段，前端用 .html() 写入提示气泡 .findeinfos 展示。 | `mbs pim erp-product-find-throw-info` | `sku` |
| 根据部门名称获取岗位/人员名称：备货规则新增/编辑弹窗中，用户在「部门权限」下拉选择部门并触发 change 时调用。以部门名称为入参，返回该部门下可分配的岗位/人员名称集合，前端将返回的 obj 赋给 state.dialogOptions.stockUpCheckEmp 作为人员权限相关选项数据。 | `mbs pim erp-product-get-add-position-name` | `name` |
| 判断是否显示申请备货按钮（getApplyForStockUpRule）：SKU 详情页初始化时调用：后端根据当前登录用户身份/权限及备货申请规则，返回是否允许发起备货申请。前端据返回的 success 布尔值决定显示或隐藏页面上的「申请备货」按钮(#applyBtn2)。请求不携带业务参数，用户身份由会话识别。 | `mbs pim erp-product-get-apply-for-stock-up-rule` | - |
| 货源城市下拉选项查询：进入SPU管理筛选器时初始化加载「货源城市」下拉框选项，返回全部货源城市(含类型+城市名)列表，供前端 city 多选筛选控件渲染。无任何请求参数。 | `mbs pim erp-product-get-city` | - |
| 根据当前用户ID判断是否为专员：根据当前登录用户（由登录态/会话识别，无需前端显式传参）查询其是否为采购/库存专员，返回布尔型权限标志。仪表盘据此判断是否展示退款日报等总监级模块；SKU详情页据此判断备货申请金额≥1000时是否需要专员审批。 | `mbs pim erp-product-get-commissioner-by-id` | - |
| 获取部门员工列表(提问人下拉)：进入商品咨询(留言)页面时自动调用，返回当前部门下的员工(提问人)姓名列表，前端用 art-template 渲染成"提问人"下拉框(#productName)的 <option> 选项。请求无任何业务参数(部门由后端依据登录态/默认部门判定)。 | `mbs pim erp-product-get-emp-by-dep-list` | - |
| 按部门查询员工(下拉选项)：根据部门ID(depId)查询该部门下的全部员工，返回员工姓名字符串数组(obj)。前端用于采购员/开发员/销售员等人员下拉选择框的选项数据源(label=value=员工姓名)。 | `mbs pim erp-product-get-emp-by-dep` | `depId` |
| 高退款率产品列表查询：违规产品登记页(registrationForm)第三个标签页「高退款率产品」的分页列表查询：按开发员、采购员、SKU、开发时间区间筛选，返回高退款率(异常编号固定 WG51)的 SKU 列表及毛利率/退款率/销量等汇总字段。由页面 search3()/getProductIllegal3() 调用。 | `mbs pim erp-product-get-high-refund` | `pageSize`, `page` |
| 经理/总监/Ana/总经办权限校验：库存看板页加载时(created 钩子)发起的无参权限探测接口。后端依据当前会话用户身份判定其是否为经理/总监/Ana/总经办，返回对象 obj；前端仅以 data.obj 是否为真值判断有无权限，为真则置 accessible=true，从而让「停止spu推送」按钮可见。 | `mbs pim erp-product-get-jing-li-zong-jian-ana-zong-jing-ban1` | - |
| 判断当前用户是否经理总监(getJingLiZongJian)：经理工作台(Dashboard)加载时调用，判断当前登录用户是否为「经理/总监」角色；返回结果 obj 为真时展示「经理考核(managerAssessment)」模块。无请求参数，纯身份/权限校验型接口。 | `mbs pim erp-product-get-jing-li-zong-jian` | - |
| 根据SPU查询销售单(订单)列表：SPU详情页「销售单信息」模块：按SPU查询该商品关联的全部订单明细，返回订单编号、商品标题、数量、售价、运费、毛利、重量、下单/发货时间、成交账号、国家、状态、店铺负责人等字段，前端用 art-template contentTemplate0 逐行渲染订单表格。 | `mbs pim erp-product-get-order-spu` | `spu` |
| 一级品类(看板品类下拉)查询：首页综合看板(common.html「销量趋势图」筛选区)加载时调用，拉取全部一级品类(分类)列表，用于渲染「品类」多选下拉框(#ulId3 / #platform3)。无请求参数，返回品类名称数组，前端仅取每项 name。 | `mbs pim erp-product-get-primary-classification-dash-board` | - |
| 获取商品一级分类(SKU分类下拉)：进入「商品导出新建」页时($(document).ready)无条件调用，拉取商品一级分类列表，用 art-template 渲染 #contentTemplate3 填充「SKU分类」多选下拉(#skuCategory)的可选项。无请求参数，返回分类数组，每项以 name 同时作为下拉的 value 与显示文本。 | `mbs pim erp-product-get-primary-classification` | - |
| 违规/举报产品列表查询：商品违规处理页(registrationForm)的列表查询接口：按 flag 区分两种业务视图——flag=1 违规产品列表(tab1)，flag=2 举报产品列表(tab2)。支持开发经理/开发员/采购员/创建人组长/适用平台/异常原因/SKU/开发时间区间等条件筛选，返回产品行列表及销量、毛利率、退款率、异常/举报信息、审核状态等字段。 | `mbs pim erp-product-get-product-illegal1` | `flag`, `pageSize`, `page` |
| 获取销量级别(产品类型)列表：移动端商品筛选/排序页加载时调用，返回“销量级别”枚举列表，用于动态渲染 salesTemplate 中的单选项(typeName 作展示文本、id 作提交值)。无请求参数，POST 空体调用。 | `mbs pim erp-product-get-product-type` | - |
| 导出备货额度变更明细：库存/备货额度管理页「导出额度明细」按钮触发：按提交人、审核人、审核状态、额度状态、SKU、提交时间区间等条件，导出采购/备货额度变更明细。响应为二进制文件流(Excel)，前端以 blob 接收并通过 content-disposition 中的 fileName 生成下载链接。 | `mbs pim erp-product-get-purchase-limit-change-by-time` | - |
| 按父类目分页查询子类目(重新分类)：SPU列表页"重新分类"弹窗中，根据所选父目录(一级类目)分页查询其下子类目列表；支持按子类目名称关键词搜索。返回子类目(sequenceid+name)列表及分页信息(总条数、总页数)，前端渲染为可勾选的子类目复选框列表。 | `mbs pim erp-product-get-reclassify-by-cate-ids` | `currpage` |
| 根据一级品类ID获取重分类(二级品类)列表：报表页品类下拉(#Category，数据来自一级品类 getPrimaryClassificationDashBoard)勾选一个或多个一级品类后 onchange=CategoryChange() 触发，将所选一级品类 sequenceid 数组以 JSON 数组 POST 给本接口，返回这些一级品类下的重分类(二级品类)名称列表，用于渲染二级品类下拉 #CategoryList。 | `mbs pim erp-product-get-reclassify-by-ids` | `ids` |
| 获取子分类(店长)列表：移动端搜索页"店长"下拉的联动查询接口：当用户在"平台(父目录)"复选框中勾选某一项时，以该项的 sequenceid 作为 primaryCateId，查询其下属的子分类(店长)列表，用于渲染"店长"复选框组，并把每项的 sequenceid 收集到 childAll 作为默认子目录候选。 | `mbs pim erp-product-get-reclassify` | `primaryCateId` |
| 风险SPU白名单(保护)店铺名称查询：获取「风险产品保护(白名单)店铺」名称列表，用于 SPU 管理列表高级筛选中「风险产品保护店铺(whitePublishShop)」多选下拉框的选项。页面初始化时无参调用一次，返回值为店铺名称字符串数组，直接作为 el-select 的 label 与 value。 | `mbs pim erp-product-get-risk-spu-white-shop-name` | - |
| 按SKU查询备货额度统计(getSaleNumBySku1)：批量备货页中，按 SKU 与所选备货规则(stockUpID)查询该 SKU 当日全员已提交数量、平台申请备货最大值、平台申请备货额度，用于行内提示展示。 | `mbs pim erp-product-get-sale-num-by-sku1` | `sku`, `stockUpID` |
| 根据SKU/平台/备货内容获取可备货数量(getSaleNumBySku)：SKU详情页「申请备货」弹窗中，选择备货平台与备货内容后，按 SKU + 平台 + 备货内容 三个路径参数请求后端，返回该 SKU 在该平台下的最大可备货量(max)、可输入上限(other)、平台已备货量(platform)，用于回填输入框上限、placeholder 及前置校验。 | `mbs pim erp-product-add-content` | `sku`, `platform`, `addContent` |
| 仓库列表下拉查询：拉取仓库列表，用于 SKU 详情页“仓库列表”下拉框(#storageId)的选项渲染。无请求参数，POST 直接调用，返回仓库数组，前端仅使用每项的 name 作为 option 的 value 与显示文本。 | `mbs pim erp-product-get-storage` | - |
| SPU可刊登白名单店铺查询：商品SPU列表页中，鼠标悬浮“可刊登店铺”气泡时，按SPU查询该商品在各平台可刊登（白名单）的店铺列表，按平台分组展示平台名与店铺名。 | `mbs pim erp-product-get-white-shop-by-spu` | `spu` |
| 判断当前用户是否总监/总经办：进入SKU详情页采购数量表单时自动调用，判断当前登录用户是否为总监/总经办角色，返回布尔值写入 state.generalManager；为 true 时跳过库存价/采购数量上限等业务校验规则。无入参，登录身份取自后端会话/Token。 | `mbs pim erp-product-get-zong-jian-zong-jing-ban` | - |
| 获取总经办财务权限标识：无入参的权限校验接口。前端在供应商回款(returnOfItem)页面初始化时调用,根据返回的布尔值 obj 决定当前用户是否为「总经办财务」,进而控制「财务导入」「批量核销」「财务核销」「异常处理」等财务操作入口(ButtonAble)是否展示。 | `mbs pim erp-product-get-zong-jing-ban-cai-wu` | - |
| 查询当前用户是否为总经办(总经理权限)：进入「事业部人员毛利方差图」页面时调用，判断当前登录人是否为总经办/总经理。返回布尔值赋给前端 state.isGeneralManager，与无总监、无经理筛选条件共同决定是否展示「看经理人均毛利/看经理总毛利」切换按钮。请求无任何业务参数(空 POST body)。 | `mbs pim erp-product-get-zong-jing-ban` | - |
| 商品(SPU)导出数据查询：SPU 管理列表点击导出时调用：把当前列表全部筛选条件(outdownparams，由 getParams() 构建)作为请求体提交，后端返回待导出的 ES 数据列表(esDataList) 及 ES 查询构造串(sourceBuilderString)；前端据 originalSku 拼成 skuStr，type=2 时再把 sourceBuilderString 回传给 saveProductReport 完成导出。 | `mbs pim erp-product-product-info-for-export` | `pageSize`, `page` |
| 商品(SKU)极致版列表查询：商品极致版页面 SKU 维度分页查询：按类目、11种关键词类型、售卖/销量/产品状态、开发员/采购员、开发时间区间、库存/销量/重量/成本区间、国家/平台、黑马、抽检/轻小件/采样、站点等数十项筛选，返回 SKU 列表及毛利/退款/销量/库存/刊登率等汇总字段。 | `mbs pim erp-product-product-info` | `pageSize`, `page` |
| 修改日志分页查询(海外仓类型展示权限)：海外仓类型展示权限弹窗(iframe)加载时调用，分页查询该权限设置的修改日志(操作时间/操作人/操作内容)，结果渲染到「修改日志」Tab 的时间轴中。 | `mbs pim erp-product-page-query` | `currentPage`, `pageSize` |
| 待确认打折任务列表查询：成品任务看板「折扣确认」页签加载时调用，查询当前需要人工确认（恢复原成本价/清仓下架）的打折推送任务列表。无请求体，后端按登录态返回待确认 SKU 任务，前端用于 ElementPlus 表格渲染及顶部角标计数。 | `mbs pim erp-product-find-discount-confirm-must-do-list` | - |
| 查询换图结果信息：在"今日必修改"列表中点击某SPU行，按 SPU 查询该商品在各店铺的"必修改/换图"处理结果，返回各店铺待修改项明细（店铺名、原因），前端以弹窗表格展示。 | `mbs pim erp-product-querymust-refresh-change-image-info` | `spu` |
| 根据站点查询算价渠道列表：Shopee 自动刊登「设置店铺刊登参数」弹窗中，根据当前店铺所属站点(site)查询该站点可选的算价渠道列表，用于填充弹窗内算价渠道下拉框(#priceChannels)的选项。 | `mbs pim erp-product-find-price-channel-by-site` | `site` |
| Shopee待删除商品确认列表查询：Shopee批量删除页面列表查询：按店铺、创建时间区间、在线编号、SPU、删除状态分页查询待删除/删除中/已删除的Shopee商品（listing）任务，返回总数与行记录列表（商品图、SKU/SPU、店铺/负责人、商品ID、在线编号、近30天销量、创建人/时间、删除状态、刊登/删除时间）。 | `mbs pim erp-product-find-shopee-disabled-confirm` | `currentPage`, `pageSize` |
| Shopee店铺列表查询：Shopee批量删除页面进入时调用，查询当前用户可见的Shopee店铺名称列表，用于渲染搜索区店铺多选下拉(#shopName)与生成删除任务弹窗店铺多选下拉(#creatShop)。无入参，返回店铺名称字符串数组。 | `mbs pim erp-product-find-shopee-shop` | - |
| 查询店铺自动刊登参数(按店铺名)：Shopee 自动刊登页打开店铺刊登参数弹窗(showModal)时，按店铺名(shopname)查询该店铺已保存的自动刊登参数(站点/算价渠道/一二级分类/毛利率/折扣率/平台费率/库存/刊登数量/间隔/时间/捆绑/水印/托管等)，用于回显弹窗各控件。入参经 URL 查询串 shopname 传递，无请求体。 | `mbs pim erp-product-find-shop-param-by-shopname-shopee-product-controller` | `shopname` |
| 按站点查询可刊登店铺(Shopee)：Shopee「批量导入/生成 listing」弹窗中，用户在站点多选框选择一个或多个站点后，按所选站点列表查询这些站点下可用于刊登的店铺，返回店铺列表用于渲染「预刊登店铺」下拉选项。 | `mbs pim erp-product-get-enabel-publish-shop-by-site` | `siteList` |
| 获取可重新刊登(Relist)店铺列表：Shopee 刊登页“编辑/搜索店铺”弹窗中，按店铺名称关键词分页查询可用于重新刊登的店铺列表，返回店铺名称及其开启/关闭状态，并支持分页与状态切换。 | `mbs pim erp-product-get-relist-shops` | `currentPage`, `pageSize` |
| 查询已刊登店铺列表：切换到“刊登完毕”视图时调用，获取当前已经刊登过商品的 Shopee 店铺集合，用于渲染页面“选择新刊登店铺”下拉框(#PublishedShop)。请求不携带任何参数(空请求体)，仅返回店铺名称列表。 | `mbs pim erp-product-list-have-published-shop-shopee-product-publish` | - |
| Shopee刊登商品列表查询(按Listing)：Shopee商品刊登管理页面列表查询：按刊登状态(等待刊登/刊登完毕)、商品属性、店铺、刊登人、站点、SPU、批量备注、风险预警、刊登时间区间等条件分页查询，返回商品(含子SKU)刊登信息列表、总数与总页数。 | `mbs pim erp-product-list-product-by-listing-shopee-product-publish` | - |
| 未刊登店铺列表查询：查询当前用户可用于 Shopee 商品刊登的“未刊登店铺”列表，用于填充刊登页面 #shopName（未刊登店铺）下拉框及批量刊登店铺选择器。无请求参数，返回店铺名称集合。 | `mbs pim erp-product-list-publish-shop-shopee-product-publish` | - |
| Shopee Relisting失败信息详情列表查询：查询某次 Shopee 重新刊登(Relisting)任务的失败明细：按刊登时间、店铺名分页返回失败的 Shopee 商品(平台/店铺/负责人/胤元SPU/源itemID/状态/销量/失败原因等)，前端用于 relisting 失败信息详情页表格渲染与分页。 | `mbs pim erp-product-list-relisting-details-shopee-product-publish` | `isSuccess`, `relistingTimeStart`, `shopName`, `pageSize`, `currentPage` |
| Shopee Relisting 结果列表查询：查询 Shopee 重新刊登(relisting)结果列表：按店铺负责人、店铺、relisting 时间区间分页查询，返回各店铺当日 relisting 成功/失败数量、生成日期与 relisting 日期，供 shopee relisting 列表页表格渲染与分页。 | `mbs pim erp-product-list-relisting-results-shopee-product-publish` | `pageSize`, `currentPage` |
| Shopee批量刊登-预览生成店铺商品行(previewTask)：Shopee商品批量刊登弹窗中，依据所选站点(siteList)与预刊登店铺(shopList)，后端预生成待刊登店铺商品行(含唯一标识、默认站点、店铺名)，前端渲染到批量导入表格供补填库存/利润率/折扣率/平台费率/价格渠道后提交刊登。 | `mbs pim erp-product-preview-task` | `siteList` |
| 查询Shopee拦截关键词(侵权词)：Shopee商品刊登页面点击「拦截关键词」按钮时调用，无入参，返回当前Shopee平台的全部拦截/侵权关键词字符串列表，前端在 #shopeeWordModal 弹窗内用 art-template 模板 shopeeWordTemplate 遍历 obj 渲染为关键词标签。 | `mbs pim erp-product-query-shopee-tort-words` | - |
| Shopee批量下架任务列表查询：Shopee批量下架页面：按店铺、创建时间区间、在线编号、SPU、下架状态分页查询下架任务列表，返回任务行及总数、总页数。 | `mbs pim erp-product-find-shopee-unlist-confirm` | - |
| Shopify下架确认任务列表查询：Shopify批量下架页面：按创建时间区间、店铺、下架状态、SKU/SPU编号分页查询已生成的下架确认任务列表；返回任务总数、总页数及任务行(含商品信息、店铺、负责人、销量、下架状态、刊登/下架时间等)，供页面 art-template 渲染表格并支持批量下架/删除。 | `mbs pim erp-product-find-shopify-disabled-confirm` | - |
| 查询Shopify店铺列表：查询当前用户可见的全部 Shopify 店铺名称列表，用于「shopify批量下架」页面顶部店铺多选下拉框(#shopName)的数据填充。页面加载时自动调用，无任何入参；返回店铺名称字符串数组，前端用 art-template 渲染成 <option>。 | `mbs pim erp-product-find-shopify-shop` | - |
| SKU包装信息列表查询：查询SKU包装测量任务列表：按状态(全部/未完成/已完成)、SKU、提交人、开发组长、开发员、完成时间区间分页筛选，返回SKU原始/现/包装尺寸重量、开发员、仓库、提交/完成信息、图片及任务状态。 | `mbs pim erp-product-get-sku-package-info` | - |
| SMT批量下架-下架确认列表查询：SMT(速卖通)批量下架页的列表分页查询：按店铺、创建时间区间、在线编号、SPU、下架状态、销量类型筛选，返回待下架/下架中/已下架的商品列表(含图片、店铺、负责人、商品ID、在线编号、销量、创建信息、下架状态/时间等)及分页汇总。 | `mbs pim erp-product-find-smt-disabled-confirm` | - |
| SMT店铺列表查询：查询当前用户可见的 SMT(速卖通)店铺名称列表，用于「SMT批量下架」页面顶部店铺多选框及「生成下架商品信息」模态框店铺多选框的数据源。无入参，返回店铺名称字符串数组。 | `mbs pim erp-product-find-smt-shop` | - |
| SMT自动刊登-昨日刊登统计查询：查询昨日SMT自动刊登的汇总统计：返回昨日参与生成listing的店铺数、生成的listing总数、刊登成功数与失败数，用于页面顶部概况栏展示。 | `mbs pim erp-product-find-publish-shop-yesterday` | - |
| 查询自动刊登店铺列表（含刊登汇总）：SMT(速卖通)自动刊登页面初始化时调用：返回当前用户头像、刊登成功/待刊登汇总数，以及该用户名下全部店铺列表（每店铺含店铺名与刊登成功数）。前端据此渲染左侧店铺导航树及顶部店铺下拉框，并触发昨日汇总查询。无请求参数，依赖登录会话。 | `mbs pim erp-product-find-publish-shop-smt-product-controller` | - |
| 一键提价-查看发往地(收货地)列表：Speedmaster(SMT)一键提价页面，点击列表行「查看」按钮时调用：根据商品记录ID(id)与子SKU(skuId)查询该商品对应的发往地/收货地列表，前端弹出 #lookModal 并把返回的 obj.data 数组逐项渲染到 shoptoTemplate 表格中。 | `mbs pim erp-product-find-ship-to-by-id-onekey` | `id`, `skuId` |
| 按平台查询可刊登店铺(Wish刊登选店)：库存看板「Wish刊登」弹窗触发：按平台ID(固定'16'=Wish)查询当前用户可刊登的店铺名称列表，前端渲染到 #selectShop 下拉框供用户选择后跳转 /EditInformation 刊登页。 | `mbs pim erp-product-find-shop-by-pt` | `platformid` |
| 根据店铺名查询店铺自动刊登参数(回显)：SMT自动刊登设置弹窗回显：根据店铺名(shopname)查询该店铺已保存的自动刊登配置(类目、批量折扣、毛利率/促销折扣率上下限、刊登间隔/时段、库存、JIT、水印、自动开关、安全承诺等)，用于弹窗各表单控件回显。 | `mbs pim erp-product-find-shop-param-by-shopname-smt-product-controller` | `shopname` |
| SMT自动刊登SPU列表查询：SMT(速卖通)自动刊登管理页的SPU分页列表查询：支持按SPU编码/批量SPU/itemid关键词、店铺、SMT分类、开发时间/刊登时间区间、产品状态、销量级别、在线状态、价差大等条件筛选；返回SPU行及其下挂的SKU明细列表。 | `mbs pim erp-product-find-smt-autopublish-spu` | `currentPage`, `pageSize` |
| 速卖通一键提价-调价结果分页查询：速卖通(SMT)一键提价模块「调价完毕」页签的分页列表查询：按页签(columnHead)、提交人、状态、店铺、提交时间区间、商品ID(itemid)/运费模板ID(freightid)等条件分页查询调价任务结果，返回SPU行及其下挂的SKU调价明细。 | `mbs pim erp-product-find-smt-price-confirm-onekey` | `pageSize`, `columnHead` |
| 速卖通调价-国家(站点)列表查询：速卖通(SMT)批量调价页初始化时调用，查询可调价的国家/站点列表。前端不传任何请求参数，返回的列表用于渲染按 shipto 国家调价弹框中每个国家的+/-选择器与百分比/数值输入框(控件ID按 site 拼接)，并缓存到 conList 供生成调价信息时按国家组装 reviseParam。 | `mbs pim erp-product-find-smt-price-country2` | - |
| 获取SMT自动刊登模板分组配置：SMT(速卖通)自动刊登店铺参数设置弹窗中，根据店铺类型(零售/批发客户为主)加载该类型下可用的自动刊登模板分组列表，用于渲染自动刊登模板下拉框。仅当模板下拉项不足时才发起请求。 | `mbs pim erp-product-get-smt-group-counfiguration` | `isAutopublish` |
| 刊登失败属性回写值查询：在「SMT自动刊登-刊登失败编辑」弹窗中，根据 uniqueId(刊登记录/itemId) 查询该商品此前已写入的失败属性回写值列表，前端把每个属性的 id,en 拼接后回填到对应下拉框 #selectValue{i}，实现编辑回显。 | `mbs pim erp-product-smt-fail-prop-get-for-write` | `uniqueId` |
| 获取全部必刊登SPU(导出用)：按处理状态、店铺、平台、年月、类目、刊登人等筛选条件，查询满足条件的全部「必刊登SPU」编号集合。前端在商品导出页加载时调用，把返回的SPU编号列表逗号拼接后写入导出条件(spuStr)，实现按当前筛选条件批量选取SPU导出。 | `mbs pim erp-product-get-all-must-publish-spu` | - |
| 按店长查询其分组下店铺：必发SPU管理页"换店铺/重新派发"功能：根据选定的店长(oper)查询该店长所管辖分组下的全部店铺，前端用返回的店铺列表渲染 shopnameTemplate(name=chname 多选复选框)并默认全选，供后续重新派发/换店铺使用。 | `mbs pim erp-product-get-shop-by-group` | - |
| 获取SPU立刻刊登/编辑跳转地址：库存看板（必刊登/推荐刊登列表）点击「立刻刊登」时调用，依据 SPU、必修改记录序号ID、平台ID 获取后端生成的刊登/编辑页面跳转URL；成功后前端 window.open 新窗口打开 obj 返回的地址。 | `mbs pim erp-product-get-url` | `spu`, `sequenceid`, `ptid`, `flag` |
| TikTok刊登-按Listing查询商品列表：TikTok批量刊登页的商品(SPU)列表分页查询：按刊登状态、属性类型、店铺、刊登人、站点、SPU、批量备注、刊登时间区间、是否含风险预警等条件分页，返回SPU行(含子SKU列表 ebayPublishSkuVo)及刊登状态/毛利/店铺等字段。 | `mbs pim erp-product-list-product-by-listing-tiktok-product-publish` | `currentPage` |
| 查询TikTok侵权词(违禁词)列表：在TikTok刊登页面点击「侵权词/违禁词」按钮时，弹出违禁词弹窗并请求该接口，返回全部TikTok侵权词(违禁词)文本数组，前端通过 art-template shopeeWordTemplate 遍历 obj 平铺渲染到弹窗列表。请求不携带任何业务参数。 | `mbs pim erp-product-query-tiktok-tort-words` | - |
| 获取当前登录用户Wish店铺列表：wish低分评价页面初始化时调用，根据当前登录用户身份返回其可见/管理的Wish店铺列表，用于填充页面顶部「店铺」筛选下拉框(#commodity)。请求不携带任何业务参数，店铺范围由后端依据登录态自动判定。 | `mbs pim erp-product-get-login-wish-shop` | - |
| 获取wish评论信息：按 Wish listing 的 itemId 查询该商品的评价汇总信息(标题/主图/平均分/各星级评价数/误导风险处理记录)及其全部买家评论明细列表(results)，前端用于「查看评论」弹窗渲染星级、头像、评论内容与评论图片。 | `mbs pim erp-product-get-wish-rating-results` | `itemId` |
| 获取全部售后处理方案(文案)列表：拉取后端预置的售后问题处理方案文案列表，前端用于售后问题处理弹窗(developMarkModal)中处理方案下拉框(#selectedText)选项渲染；默认把列表第一项的 description 填入处理方案输入框(#markInput)。 | `mbs pim erp-product-get-all-resolutions` | - |
| 我的关注商品数量查询：经理工作台首页通知区调用，以 attentionSkuFlag=1(只看我关注的SKU)、pageSize=1 触发商品信息分页查询(新版)，仅取返回 obj.count(关注商品总数)用于通知区计数展示。 | `mbs pim erp-product-product-info-for-new-edtion` | `pageSize`, `attentionSkuFlag`, `page` |
| 获取平台：获取平台 | `mbs pim instudio-pms-emp-info-list` | - |
| 查询全部Auditor：查询全部Auditor(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-all-auditor` | - |
| 查询类目ART：查询类目ART(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-category-art` | - |
| 查询类目ART新：查询类目ART新(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-category-art-new` | - |
| 查询首个类目：查询首个类目(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-first-category` | - |
| 按团队查询Little组长：按团队查询Little组长(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-little-leader-by-team` | - |
| 查询图片类型：查询图片类型(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-picture-type` | - |
| GetqiYUANAuditor：GetqiYUANAuditor(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-qi-yuan-auditor` | - |
| 获取编辑信息：获取编辑信息 | `mbs pim instudio-pms-unique-id` | `uniqueId` |
| 批次确认列表：批次确认列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-list-batch` | - |
| 数据采集, 根据listing url 采集数据：数据采集, 根据listing url 采集数据 | `mbs pim instudio-pms-collection-data` | `url` |
| 获取amazon默认运费模板：获取amazon默认运费模板 | `mbs pim instudio-pms-shop-name` | `shopName` |
| 查询已经上传的刊登模板信息：查询已经上传的刊登模板信息 | `mbs pim instudio-pms-get-amazon-excel-template` | - |
| 根据id获取刊登详情：根据id获取刊登详情 | `mbs pim instudio-pms-id-amazon-get-amazon-info` | `id` |
| 根据店铺和大类确定商品类型：根据店铺和大类确定商品类型 | `mbs pim instudio-pms-get-amazon-product-type` | `site`, `mainCategory` |
| 获取刊登任务创建人查询的下拉列表：获取刊登任务创建人查询的下拉列表 | `mbs pim instudio-pms-get-amazon-saler` | - |
| 获取名下的店铺列表：获取名下的店铺列表 | `mbs pim instudio-pms-get-amazon-shop` | - |
| 获取配置的color,size 字段：获取配置的color,size 字段 | `mbs pim instudio-pms-get-field` | `type`, `site`, `mainCategory`, `productType` |
| 获取可刊登的大类列表：获取可刊登的大类列表 | `mbs pim instudio-pms-get-main-category` | - |
| 获取Amazon算价可用渠道：获取Amazon算价可用渠道 | `mbs pim instudio-pms-get-pricing-channel-amazon` | - |
| 根据id获取刊登详情：根据id获取刊登详情 | `mbs pim instudio-pms-id-new-get-amazon-info` | `id` |
| 获取产品类型列表：获取产品类型列表 | `mbs pim instudio-pms-get-product-type` | `shopName` |
| 获取产品类型列表（直接读取所有的产品类型）：获取产品类型列表（直接读取所有的产品类型） | `mbs pim instudio-pms-get-product-type-info` | - |
| 获取指定的Schema文件：获取指定的Schema文件 | `mbs pim instudio-pms-get-schema-by-product-type` | `shopName`, `productType` |
| 获取产品类型列表（直接读取所有的产品类型）：获取产品类型列表（直接读取所有的产品类型） | `mbs pim instudio-pms-get-schema-by-request-id` | `requestId` |
| 查询指定的Schema文件是否同步完成：查询指定的Schema文件是否同步完成 | `mbs pim instudio-pms-get-schema-path-complete` | `shopName`, `productType` |
| 通过产品标题/关键字信息来筛选产品类型：通过产品标题/关键字信息来筛选产品类型 | `mbs pim instudio-pms-query-product-type-list` | `shopName` |
| 获取amazon站点信息：获取amazon站点信息 | `mbs pim instudio-pms-site` | - |
| 获取amazon站点信息：获取amazon站点信息 | `mbs pim instudio-pms-id-amazon-template` | `id` |
| 查询：查询 | `mbs pim instudio-pms-id-api-sya-mabang-notice-content` | `id` |
| 查询：查询 | `mbs pim instudio-pms-id-api-sys-mabang-notice` | `id` |
| 根据id获取禁售详情：根据id获取禁售详情 | `mbs pim instudio-pms-id-banned-get-banned-by-id` | `id` |
| 查询品牌名称：package com.instudio.pms.controller; | `mbs pim instudio-pms-find-brand-name` | - |
| 查询全部店铺列表：查询全部店铺列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-all-shop-list` | - |
| 按ID查询品牌图片：按ID查询品牌图片(源码无注释,按方法名推断) | `mbs pim instudio-pms-id-brand-get-brand-image-by-id` | `id` |
| 按ID查询品牌平台ID：按ID查询品牌平台ID(源码无注释,按方法名推断) | `mbs pim instudio-pms-id-brand-get-brand-platform-id-by-id` | `id` |
| 按平台ID查询店铺：按平台ID查询店铺(源码无注释,按方法名推断) | `mbs pim instudio-pms-platform-id` | `platformId` |
| 获取分类详情：获取分类详情 | `mbs pim instudio-pms-category-id-get-category-info` | - |
| 查询商品资质图片列表：查询商品资质图片列表 | `mbs pim instudio-pms-spu-get-spu-certification` | `spu` |
| 查询商品资质列表：查询商品资质列表 | `mbs pim instudio-pms-list-image` | `spu` |
| 查询客服绩效数据：查询客服绩效数据 | `mbs pim instudio-pms-export-customer-service-date` | `sortedBy` |
| 补偿生成SPU场景咒语：仅传SPU，其余参数从pms数据库查询：补偿生成SPU场景咒语：仅传SPU，其余参数从pms数据库查询 | `mbs pim instudio-pms-spu-product-scene-spell` | `spu` |
| 初始化降本任务：初始化降本任务 | `mbs pim instudio-pms-dept-id` | `deptId` |
| 按SPU查询是否采购：按SPU查询是否采购(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-is-purchase-by-spu` | `spu` |
| 通过部门获取人员下拉：通过部门获取人员下拉 | `mbs pim instudio-pms-spu-get-spu-cut-cost-info` | `spu` |
| 根据登录人所在组和Spu审核状态判断是否展示提交售卖：根据登录人所在组和Spu审核状态判断是否展示提交售卖 | `mbs pim instudio-pms-is-show-sell-by-team-and-check-status` | `spu` |
| 查询所有的模型：查询所有的模型 | `mbs pim instudio-pms-keyword-aitemplate-enmus` | - |
| 开发项目导出总监维度扣退款发货毛利额：开发项目导出总监维度扣退款发货毛利额 | `mbs pim instudio-pms-id-development-project-development-project-export` | `id` |
| 开发项目导出：开发项目导出 | `mbs pim instudio-pms-export-development-project` | - |
| 获取开发项目的国家15天销售额和总销售额：获取开发项目的国家15天销售额和总销售额 | `mbs pim instudio-pms-get-spu-country-amount` | `developmentProjectId` |
| 获取开发项目的国家15天销量和总销量：获取开发项目的国家15天销量和总销量 | `mbs pim instudio-pms-get-spu-country-sales` | `developmentProjectId` |
| 获取开发项目的15天平台销售额和总销售额：获取开发项目的15天平台销售额和总销售额 | `mbs pim instudio-pms-get-spu-plat-amount` | `developmentProjectId` |
| 获取开发项目的15天平台毛利额和毛利率：获取开发项目的15天平台毛利额和毛利率 | `mbs pim instudio-pms-get-spu-plat-profit` | `developmentProjectId` |
| 获取开发项目的15天平台销量和总销量：获取开发项目的15天平台销量和总销量 | `mbs pim instudio-pms-get-spu-plat-sales` | `developmentProjectId` |
| 开发项目spu刊登图：开发项目spu刊登图 | `mbs pim instudio-pms-get-spu-pushlish` | `developmentProjectId` |
| 售卖级别饼状图：售卖级别饼状图 | `mbs pim instudio-pms-get-spu-sale-level` | `developmentProjectId` |
| 根据分类id查询ItemSpecifics2：根据分类id查询ItemSpecifics2 | `mbs pim instudio-pms-find-item-specifics-by-category-id2` | - |
| 根据侵权caseId获取录入的sku：根据侵权caseId获取录入的sku | `mbs pim instudio-pms-get-infringe-ment-sku` | `caseId` |
| 查询跟进记录：查询跟进记录 | `mbs pim instudio-pms-query-follow-list` | `flag`, `id` |
| 查询Shopee全部站点：查询Shopee全部站点(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-shopee-all-site` | - |
| 供应商信息：供应商信息 | `mbs pim instudio-pms-manufacture` | `manufacture` |
| 美客多通过标题推荐产品类目：美客多通过标题推荐产品类目 | `mbs pim instudio-pms-get-channel-category` | `groupCode`, `title` |
| 美客多获取单品刊登信息：美客多获取单品刊登信息 | `mbs pim instudio-pms-request-id-get-publish-request-info` | `requestId` |
| 广告预警信息：广告预警信息 | `mbs pim instudio-pms-saler` | `times`, `status`, `platform`, `saler` |
| ebay政策表现：ebay政策表现 | `mbs pim instudio-pms-get-performance` | `shopName` |
| 获取店铺运费模板信息：获取店铺运费模板信息 | `mbs pim instudio-pms-get-freight-template` | `shopName` |
| 获取中台报表字段解释：获取中台报表字段解释 | `mbs pim instudio-pms-get-middle-field-explain` | `type` |
| 获取中台店铺详情数据：获取中台店铺详情数据 | `mbs pim instudio-pms-get-middle-panel-shop-detail` | `shopName` |
| 查询通知信息：查询通知信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-id-get-notification-info-platform` | `platform`, `id` |
| 判断登录者是否有权限查看：判断登录者是否有权限查看 | `mbs pim instudio-pms-judge-loginer` | - |
| 获取美客多站点在线量和额度：获取美客多站点在线量和额度 | `mbs pim instudio-pms-get-num` | `shopName` |
| 查询Fixed复制店铺：查询Fixed复制店铺(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-fixed-copy-shop` | `typeCode` |
| 根据 ID 查询 Ozon SPU 类目模板详情：根据 ID 查询 Ozon SPU 类目模板详情 | `mbs pim instudio-pms-id-pms-ozon-template` | `id` |
| 根据 SPU 查询创建时间最晚（id 倒序第一条）的模板 ID：根据 SPU 查询创建时间最晚（id 倒序第一条）的模板 ID | `mbs pim instudio-pms-latest-id` | `spu` |
| 获取建单员：获取建单员 | `mbs pim instudio-pms-query-distinct-create-oper` | - |
| 通过创建时间条件获取SPU：通过创建时间条件获取SPU | `mbs pim instudio-pms-create-time-from` | `currentPage`, `pageNumber`, `createTimeFrom` |
| 通过SPU找：通过SPU找 | `mbs pim instudio-pms-spu-str` | `spuStr` |
| 查询所有的美工退回原因：查询所有的美工退回原因 | `mbs pim instudio-pms-enums` | - |
| 查询Develop类型：查询Develop类型(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-develop-type-product-image` | `spu` |
| 按ReferenceURL查询图片商品：按ReferenceURL查询图片商品(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-img-product-by-reference-url` | - |
| 根据spu拍照任务确认收货：根据spu拍照任务确认收货 | `mbs pim instudio-pms-spu-query-purcahse-group-by-spu` | `spu` |
| 发送延迟采购任务消息：发送延迟采购任务消息 | `mbs pim instudio-pms-get-sku-info-by-spu` | `spu` |
| 更新拍照任务：更新拍照任务 | `mbs pim instudio-pms-get-spu-purchase` | `spu`, `purchaseId` |
| 获取品类自定义的颜色和尺码列表：获取品类自定义的颜色和尺码列表 | `mbs pim instudio-pms-category-id-get-category-attribute-list-customize` | `categoryId` |
| 获取品类的颜色和尺码列表：获取品类的颜色和尺码列表 | `mbs pim instudio-pms-attribute-flag` | `categoryId`, `attributeFlag` |
| 通过spu获取图片路径2：通过spu获取图片路径2 | `mbs pim instudio-pms-get-product-picture-url-get` | `spu` |
| 通过spu获取图片路径(get请求)：通过spu获取图片路径(get请求) | `mbs pim instudio-pms-get-product-picture-url-lazada` | `spu` |
| 包材下拉：包材下拉 | `mbs pim instudio-pms-packaging-list` | - |
| 查询项目列表：查询项目列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-project-list-project-relation` | - |
| 查询销售导出列表：查询销售导出列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-type-get-sale-export-list` | `type` |
| 获取一级大类：获取一级大类 | `mbs pim instudio-pms-first-category` | - |
| 获取二级大类：获取二级大类 | `mbs pim instudio-pms-second-category` | `firstCategory` |
| 开发中台的列表数据：开发中台的列表数据 | `mbs pim instudio-pms-sku-oper` | `times`, `position`, `skuOper` |
| 根据类目id获取平台费率：根据类目id获取平台费率 | `mbs pim instudio-pms-get-platform-rate-by-category-id` | `categoryId` |
| SKU组套信息下拉：SKU组套信息下拉 | `mbs pim instudio-pms-get-sku-categorization-info` | - |
| 获取套图对应信息：获取套图对应信息 | `mbs pim instudio-pms-spu-test` | `spu` |
| 按平台查站点：按平台查站点 | `mbs pim instudio-pms-find-site-by-mabang-id` | - |
| 根据spu查询禁售规则内容：根据spu查询禁售规则内容 | `mbs pim instudio-pms-spu-get-banned-content` | `spu` |
| 获取商品池审核人：获取商品池审核人 | `mbs pim instudio-pms-get-check-emp` | - |
| 查询eBayNotes：查询eBayNotes(源码无注释,按方法名推断) | `mbs pim instudio-pms-spu-get-ebay-notes` | `spu` |
| 根据职位获取人员：根据职位获取人员 | `mbs pim instudio-pms-position-id` | `positionId` |
| 获取不通过详情：获取不通过详情 | `mbs pim instudio-pms-get-no-pass-detail` | `spu` |
| 按SPU查询刊登系统图片：按SPU查询刊登系统图片(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-pms-picture-by-spu` | `spu` |
| 按操作查询位置：按操作查询位置(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-position-by-oper` | - |
| 按SPU查询SKU列表：按SPU查询SKU列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-sku-list-by-spu` | `spu` |
| 判断spu是否侵权：判断spu是否侵权 | `mbs pim instudio-pms-spu-get-spu-check-is-tort` | `spu` |
| 查看SPU评论数量：查看SPU评论数量 | `mbs pim instudio-pms-evaluation-grade` | `spu`, `evaluationGrade` |
| 通知销售次数（今日必修改）：通知销售次数（今日必修改） | `mbs pim instudio-pms-get-spu-mustrefresh` | `spu` |
| 查询SPU刊登信息：查询SPU刊登信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-spu-get-spu-publish-info` | `spu` |
| 查询SPU拒绝：查询SPU拒绝(源码无注释,按方法名推断) | `mbs pim instudio-pms-spu-get-spu-refuse` | `spu` |
| 查询提交Banned内容1：查询提交Banned内容1(源码无注释,按方法名推断) | `mbs pim instudio-pms-spu-get-submit-banned-content1` | `spu` |
| 根据spu查询禁售规则内容：根据spu查询禁售规则内容 | `mbs pim instudio-pms-spu-get-submit-banned-content` | `spu` |
| 判断是否超过16个小时：判断是否超过16个小时 | `mbs pim instudio-pms-is-show-update` | `spu` |
| 显示剩余时间：显示剩余时间 | `mbs pim instudio-pms-is-show-update-time` | `spu` |
| 查询开发小组：查询开发小组 | `mbs pim instudio-pms-query-development-team` | - |
| 按SPU查SPU在SMT的图(按style筛选)：按SPU查SPU在SMT的图(按style筛选) | `mbs pim instudio-pms-find-amzpicture-by-spu-new` | `spu` |
| 根据SPU查询VT图：根据SPU查询VT图 | `mbs pim instudio-pms-find-dcpicture-by-spu` | `spu` |
| 根据SPU查询尺码图(TH&VN站)：根据SPU查询尺码图(TH&VN站) | `mbs pim instudio-pms-find-ebay-skupicture-by-spu` | `spu` |
| 根据SPU查询尺码图(TH&VN站)：根据SPU查询尺码图(TH&VN站) | `mbs pim instudio-pms-find-size-picture-by-spu` | `spu` |
| 按SPU查SPU在SMT的图：按SPU查SPU在SMT的图 | `mbs pim instudio-pms-find-smtpicture-by-spu` | `spu` |
| 按SPU查SPU在SMT的图：按SPU查SPU在SMT的图 | `mbs pim instudio-pms-find-smtpicture-by-spu-new` | `spu`, `style` |
| 根据SPU查询DC图：根据SPU查询DC图 | `mbs pim instudio-pms-find-smt-product-manual-by-spu` | `spu` |
| 根据SPU查询VT图：根据SPU查询VT图 | `mbs pim instudio-pms-find-vtpicture-by-spu` | `spu` |
| 按SPU查SKU在EBAY可以用的图：按SPU查SKU在EBAY可以用的图 | `mbs pim instudio-pms-get-spu-log-by-spu` | `spu` |
| 获取原因分类列表：获取原因分类列表 | `mbs pim instudio-pms-get-reason-cat-list` | - |
| 根据supplySku查询SupplyPoolSku的相关信息：根据supplySku查询SupplyPoolSku的相关信息 | `mbs pim instudio-pms-get-supply-pool-sku-detail-by-sku` | `supplySku` |
| 根据supplySpu查询SupplyPoolSpu的相关信息：根据supplySpu查询SupplyPoolSpu的相关信息 | `mbs pim instudio-pms-get-supply-pool-spu-detail-by-spu` | `supplySpu` |
| 品牌列表：品牌列表 | `mbs pim instudio-pms-get-all-brand-list` | - |
| chatgpt 提问：chatgpt 提问 | `mbs pim instudio-pms-get-question-format` | `keywords` |
| 查询TikTok类目Rules：查询TikTok类目Rules(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-tik-tok-category-rules` | `categoryId` |
| 获取店铺：获取店铺 | `mbs pim instudio-pms-get-tiktok-local-shop` | - |
| 下架编辑信息：下架编辑信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-item-id` | `shopName`, `itemId` |
| 查询编辑信息：查询编辑信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-id-tiktok-singlepublish-local-edit-controller-get-edit-info` | `id` |
| 根据SPU查询商标侵权词（已过滤白名单）：根据SPU查询商标侵权词（已过滤白名单） | `mbs pim instudio-pms-by-spu` | `spuId` |
| 获取条件必传信息(最新)：获取条件必传信息(最新) | `mbs pim instudio-pms-request-id-get-condition-required-info-v3` | `requestId` |
| 获取条件必传信息：获取条件必传信息 | `mbs pim instudio-pms-request-id-get-condition-required-info` | `requestId` |
| 获取算价可用渠道：获取算价可用渠道 | `mbs pim instudio-pms-get-pricing-channel-walmart` | - |
| 获取刊登任务创建人查询的下拉列表：获取刊登任务创建人查询的下拉列表 | `mbs pim instudio-pms-get-walmart-saler` | - |
| 获取可用颜色：获取可用颜色 | `mbs pim instudio-pms-get-accepted-colors` | `keyword` |
| wish仓库：wish仓库 | `mbs pim instudio-pms-get-wish-warehouses-info` | `shopName` |
| 查询类目Characteristics：查询类目Characteristics(源码无注释,按方法名推断) | `mbs pim instudio-pms-category-id-get-category-characteristics` | `categoryId`, `request` |
| 获取刊登任务创建人查询的下拉列表：获取刊登任务创建人查询的下拉列表 | `mbs pim instudio-pms-get-yandex-sales` | - |
| 获取店铺仓库信息：获取店铺仓库信息 | `mbs pim instudio-pms-shop-id` | `shopId` |
| 查询当前登陆人管理人员：查询当前登陆人管理人员 | `mbs pim instudio-pms-find-manage-employee-names-aliexpress-choice-single-publish-controller` | - |
| 查询速卖通类目Props：查询速卖通类目Props(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-aliexpress-category-props` | - |
| 查询速卖通类目Qualifications：查询速卖通类目Qualifications(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-aliexpress-category-qualifications` | - |
| 查询速卖通Choice商品仓库列表：查询速卖通Choice商品仓库列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-aliexpress-choice-product-warehouse-list` | - |
| 查询速卖通Choice单个刊登信息：查询速卖通Choice单个刊登信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-aliexpress-choice-single-publish-info` | - |
| 查询类目：查询类目(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-category-aliexpress-choice-single-publish-controller` | - |
| 查询类目列表：查询类目列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-category-list-aliexpress-choice-single-publish-controller` | - |
| 查询类目Props：查询类目Props(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-category-props` | - |
| 查询店铺名称列表：查询店铺名称列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-shop-by-pt-aliexpress-choice-single-publish-controller` | - |
| 列表速卖通Choice单个刊登刊登：列表速卖通Choice单个刊登刊登(源码无注释,按方法名推断) | `mbs pim instudio-pms-list-aliexpress-choice-single-publish-listing` | - |
| Vague搜索类目：Vague搜索类目(源码无注释,按方法名推断) | `mbs pim instudio-pms-vague-search-category` | - |
| 获取分类属性：获取分类属性 | `mbs pim instudio-pms-find-publish-shop-names` | - |
| 获取分类：获取分类 | `mbs pim instudio-pms-get-aliexpress-category` | - |
| 获取分类：获取分类 | `mbs pim instudio-pms-get-aliexpress-category-attributes` | - |
| 获取刊登信息：获取刊登信息 | `mbs pim instudio-pms-get-aliexpress-single-publish-result-info` | - |
| 获取套图信息：获取套图信息 | `mbs pim instudio-pms-get-all-freight-templates` | - |
| 获取运费模板：获取运费模板 | `mbs pim instudio-pms-get-price-infomation` | - |
| 获取套图信息：获取套图信息 | `mbs pim instudio-pms-get-style-type-pics` | - |
| 根据产品id获取信息：根据产品id获取信息 | `mbs pim instudio-pms-get-votobo-info-by-item-id-aliexpress-singlepublish-controller` | `itemId` |
| 验证SKU对应供应商是否在侵权列表存在：验证SKU对应供应商是否在侵权列表存在 | `mbs pim instudio-pms-description-infringing-word` | - |
| 美工摄影报表：美工摄影报表 | `mbs pim instudio-pms-export-art-photographer` | - |
| 获取平台：获取平台 | `mbs pim instudio-pms-find-art-photographer` | - |
| 通过旺旺名获取供应商id：通过旺旺名获取供应商id | `mbs pim instudio-pms-find-platform` | - |
| 查询类目Auditor：查询类目Auditor(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-category-auditor` | - |
| 获取平台：获取平台 | `mbs pim instudio-pms-platform` | `platform` |
| 季节产品截止备货月份：季节产品截止备货月份 | `mbs pim instudio-pms-get-seasonal-product-deadline-stocking-day-by-month` | `month` |
| 季节产品截止备货月份：季节产品截止备货月份 | `mbs pim instudio-pms-get-seasonal-product-deadline-stocking-month` | - |
| 获取平台：获取平台 | `mbs pim instudio-pms-spu-get-spu-scene-spell` | `spu` |
| 添加sku：添加sku | `mbs pim instudio-pms-get-spu-tag` | `spu` |
| RandomGenerationSKU：RandomGenerationSKU(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-supplier-url-by-supply-url` | `spu`, `sku` |
| 通过spu找到他的属性标记：通过spu找到他的属性标记 | `mbs pim instudio-pms-get-url-is-exist` | `url` |
| 已被占用的供货链接 不让再次开发：已被占用的供货链接 不让再次开发 | `mbs pim instudio-pms-select-supply-id-by-supply-url` | `setWangWangAccounts` |
| 验证SKU对应供应商是否在侵权列表存在：验证SKU对应供应商是否在侵权列表存在 | `mbs pim instudio-pms-validate-tort` | - |
| 检查是否包含违禁词：检查是否包含违禁词 | `mbs pim instudio-pms-check-prohibited-words-amazon` | - |
| 检查标题是否相似：检查标题是否相似 | `mbs pim instudio-pms-check-similarity-title` | - |
| 获取Amazon 刊登属性：获取Amazon 刊登属性 | `mbs pim instudio-pms-get-amazon-category` | - |
| 获取Amazon刊登任务列表：获取Amazon刊登任务列表 | `mbs pim instudio-pms-get-amazon-publish-confirm-list` | - |
| 获取商品分类：获取商品分类 | `mbs pim instudio-pms-get-category-properties` | - |
| 获取图片：获取图片 | `mbs pim instudio-pms-get-spu-image-amazon` | - |
| 根据选中的值, 查询variationTheme字段的配置信息：根据选中的值, 查询variationTheme字段的配置信息 | `mbs pim instudio-pms-variation-theme-config-amazon-get` | - |
| 导出爆款保护列表页面：导出爆款保护列表页面 | `mbs pim instudio-pms-export-page-list` | - |
| 热销保护分页查询：热销保护分页查询 | `mbs pim instudio-pms-page-hotgoods-protect` | - |
| 批量复制刊登任务：批量复制刊登任务 | `mbs pim instudio-pms-batch-amazon-publish-info` | - |
| 获取多变体结构：获取多变体结构 | `mbs pim instudio-pms-get-amazon-multi-structure` | - |
| 根据选中的值, 查询variationTheme字段的配置信息：根据选中的值, 查询variationTheme字段的配置信息 | `mbs pim instudio-pms-variation-theme-config-new-get` | - |
| 根据选中的值, 没有选中的值就根据requestId 查询variationTheme字段的配置信息：根据选中的值, 没有选中的值就根据requestId 查询variationTheme字段的配置信息 | `mbs pim instudio-pms-variation-theme-config-info` | - |
| 分页查询：分页查询 | `mbs pim instudio-pms-find-page-sya-mabang-notice-content` | - |
| 分页查询：分页查询 | `mbs pim instudio-pms-find-page-sys-mabang-notice` | - |
| 删除：删除 | `mbs pim instudio-pms-get-id-by-statue` | - |
| 拼装sku属性信息：拼装sku属性信息 | `mbs pim instudio-pms-assemble-attributes-detail` | - |
| 获取sku属性开头规则：获取sku属性开头规则 | `mbs pim instudio-pms-get-sku-suffix` | `attributeId` |
| 获取sku属性信息：获取sku属性信息 | `mbs pim instudio-pms-get-value` | `attributeId` |
| 获取sku属性和开头规则：获取sku属性和开头规则 | `mbs pim instudio-pms-value-sku-suffix` | `attributeId` |
| 获取sku属性信息：获取sku属性信息 | `mbs pim instudio-pms-findattributes` | - |
| 获取分页列表：获取分页列表 | `mbs pim instudio-pms-get-banned-by-list` | - |
| 查询名称：package com.instudio.pms.controller; | `mbs pim instudio-pms-name-brand` | - |
| 修改品牌信息：修改品牌信息 | `mbs pim instudio-pms-query-brand` | - |
| 通过分类id 获取分类负责人：通过分类id 获取分类负责人 | `mbs pim instudio-pms-find-employeename-by-categor-id` | `categoryId` |
| 通过胤元id获取平台映射信息：通过胤元id获取平台映射信息 | `mbs pim instudio-pms-find-platform-mapping-value` | `categoryId`, `platformId` |
| 查询SKU规则Bycategoryid：查询SKU规则Bycategoryid(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-sku-rule-bycategoryid` | `id` |
| 查询开发者分类对应的wish关键字：查询开发者分类对应的wish关键字 | `mbs pim instudio-pms-find-wish-tags-by-user-id` | `userId` |
| 查询全部类目名称：查询全部类目名称(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-all-category-name` | - |
| 通过用户名称 获取用户的分类名称：通过用户名称 获取用户的分类名称 | `mbs pim instudio-pms-get-catefory-name-by-username` | `username` |
| 查询类目列表：查询类目列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-show-all` | - |
| 查询类目列表：查询类目列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-parent-cat-id-show-all` | - |
| 查询类目名称：查询类目名称(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-category-name` | `index` |
| 获取分类下拉：获取分类下拉 | `mbs pim instudio-pms-get-category-select-category` | - |
| 按Categroy查询SPU编码：按Categroy查询SPU编码(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-spu-code-by-categroy` | `id` |
| 查询全部父分类（index：页码）：查询全部父分类（index：页码） | `mbs pim instudio-pms-query-category` | `index`, `categoryId`, `parentCategoryId`, `userId` |
| 查询属于这个用户的父分类 功能描述：查询属于这个用户的父分类 功能描述 | `mbs pim instudio-pms-query-by-category-id` | `username` |
| 按父级类目ID查询：按父级类目ID查询(源码无注释,按方法名推断) | `mbs pim instudio-pms-query-by-parent-category-id` | `username`, `categoryId` |
| 查询Subclassification：查询Subclassification(源码无注释,按方法名推断) | `mbs pim instudio-pms-query-subclassification` | `parenid`, `parentCategoryId` |
| 查询商品资质列表：查询商品资质列表 | `mbs pim instudio-pms-list-certification` | - |
| 通过spu获取竞品信息：通过spu获取竞品信息 | `mbs pim instudio-pms-find-competitor-by-spu` | `spu` |
| 通过userid 获取总条数：通过userid 获取总条数 | `mbs pim instudio-pms-find-goods` | `url` |
| 通过用户id 获取物品信息：通过用户id 获取物品信息 | `mbs pim instudio-pms-find-pool-message-competitor` | `userId` |
| 显示国家：显示国家 | `mbs pim instudio-pms-get-country-c` | - |
| 显示国家：显示国家 | `mbs pim instudio-pms-get-state` | - |
| 查询客服绩效数据：查询客服绩效数据 | `mbs pim instudio-pms-get-customer-service-date` | `sortedBy` |
| 查询阿里巴巴商品属性：查询阿里巴巴商品属性(源码无注释,按方法名推断) | `mbs pim instudio-pms-alibaba-product-attribute` | `missionId` |
| 选品任务审核：选品任务审核 | `mbs pim instudio-pms-check-ipm-project` | - |
| 根据sku查询供应商：根据sku查询供应商 | `mbs pim instudio-pms-check-manufacture` | `name`, `manufactureType` |
| 查询销售美工备注：查询销售美工备注 | `mbs pim instudio-pms-deletesaler-arter-desc` | `id` |
| 导出海外仓任务列表：导出海外仓任务列表 | `mbs pim instudio-pms-export-developer-mission` | `categoryOne`, `categoryTwo`, `developType`, `developerCon`, `developerStatus`, `flag`, `orderBy`, `productKeyword`, `recommendSource`, `salePriceUsdMax`, `salePriceUsdMin`, `sevenSaleCountMax`, `sevenSaleCountMin`, `totalSaleCountMax`, `totalSaleCountMin`, `bigChief`, `claimSaler` |
| 根据项目id查询spu：根据项目id查询spu | `mbs pim instudio-pms-find-approval-by-spu` | `spu` |
| 降本任务列表：降本任务列表 | `mbs pim instudio-pms-find-cut-cost-price` | - |
| 开发池列表查询：开发池列表查询 | `mbs pim instudio-pms-find-developer-mission` | - |
| 查询货源信息：查询货源信息 | `mbs pim instudio-pms-find-goods-supply-by-id` | `id` |
| 搜索供应商：搜索供应商 | `mbs pim instudio-pms-find-manufacture2` | - |
| 根据项目id查询spu：根据项目id查询spu | `mbs pim instudio-pms-find-spu-by-projectid` | `projectid` |
| 通过商品URL获取1688商品数据：通过商品URL获取1688商品数据 | `mbs pim instudio-pms-get1688-goods-info` | `goodsUrl` |
| 在公共类中放入一个字符串属性用来存储每一调用需要的accesstoken：在公共类中放入一个字符串属性用来存储每一调用需要的accesstoken | `mbs pim instudio-pms-get1688-goods-info-v1` | - |
| 获取根据1688链接获取的图片：获取根据1688链接获取的图片 | `mbs pim instudio-pms-id-developer-mission-get-alibaba-ai-product-img` | `id` |
| 按SPU查询审核记录列表：按SPU查询审核记录列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-mession-id-get-audit-records-by-spu` | `messionId` |
| 查询审核记录列表：查询审核记录列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-mession-id-get-audit-records` | `messionId` |
| 查询重复：查询重复 | `mbs pim instudio-pms-get-baidu-product-image` | `img` |
| 开发部大酋长：开发部大酋长 | `mbs pim instudio-pms-get-big-chief-list` | - |
| 按按EMP查询校验：按按EMP查询校验(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-check-by-by-emp` | - |
| 获得审核人：获得审核人 | `mbs pim instudio-pms-get-check-emp2` | - |
| 查询审核人：查询审核人 | `mbs pim instudio-pms-mission-id-get-developer-check-by-mission-id-and-check-by` | `missionId` |
| 查询开发者校验状态：查询开发者校验状态(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-developer-check-status` | - |
| 查询审核人列表：查询审核人列表 | `mbs pim instudio-pms-get-developer-mission-check-by-mission-id` | - |
| 获取所有的开发人员Fba组产品部：获取所有的开发人员Fba组产品部 | `mbs pim instudio-pms-get-develop-from-fba-product` | - |
| 查询开发类型：查询开发类型 | `mbs pim instudio-pms-get-develop-type-developer-mission` | - |
| 查询海外仓类型列表：查询海外仓类型列表 | `mbs pim instudio-pms-get-hwc-developer-mission` | - |
| 查询审核人missionid：查询审核人missionid | `mbs pim instudio-pms-mission-id-get-hwc-developer-mission` | `missionId` |
| 海外仓计划列表：海外仓计划列表 | `mbs pim instudio-pms-get-ipm-project` | - |
| 查询海外仓类型：查询海外仓类型 | `mbs pim instudio-pms-get-ipm-ware-house-type` | - |
| 一次性临时拉取：一次性临时拉取 | `mbs pim instudio-pms-get-json-by-mission-id` | - |
| 获取最后一条记录：获取最后一条记录 | `mbs pim instudio-pms-id-developer-mission-get-no-pass-content-by-id` | `id` |
| 查询运营意见：查询运营意见 | `mbs pim instudio-pms-get-operational-opinion-by-id` | `id` |
| 查询运营意见：查询运营意见 | `mbs pim instudio-pms-get-operational-opinions` | `missionId` |
| 查询图片：查询图片 | `mbs pim instudio-pms-mission-id-get-picture-by-mission` | `missionId` |
| 开发任务采样备货查看1688订单：开发任务采样备货查看1688订单 | `mbs pim instudio-pms-get-purchase-order-info` | - |
| 查询销售美工备注：查询销售美工备注 | `mbs pim instudio-pms-getsaler-arter-desc` | `missionId` |
| 查询sku属性：查询sku属性 | `mbs pim instudio-pms-mission-id-get-sku-proper-ties-by-mission-id` | `missionId` |
| 按MissionID查询SKU属性信息：按MissionID查询SKU属性信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-mission-id-get-sku-properties-info-by-mission-id` | `missionId` |
| 查询SPU电话品牌：查询SPU电话品牌(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-spu-phone-brand` | - |
| 查询SPU电话品牌模型：查询SPU电话品牌模型(源码无注释,按方法名推断) | `mbs pim instudio-pms-phone-id` | `phoneId` |
| 根据sku查询供应商：根据sku查询供应商 | `mbs pim instudio-pms-get-supply-url-by-sku-developer-mission` | `sku` |
| 查询海外仓类型：查询海外仓类型 | `mbs pim instudio-pms-type-id` | `typeId` |
| 海外仓计划列表：海外仓计划列表 | `mbs pim instudio-pms-ipm-project-info` | `projectCode` |
| 搜索供应商：搜索供应商 | `mbs pim instudio-pms-return-spu` | - |
| 开发项目详情：开发项目详情 | `mbs pim instudio-pms-development-project-detail` | - |
| 开发项目编辑详情：开发项目编辑详情 | `mbs pim instudio-pms-development-project-edit-detail` | `id` |
| 开发项目列表：开发项目列表 | `mbs pim instudio-pms-development-project-list` | - |
| 获取所有的项目名称和spu：获取所有的项目名称和spu | `mbs pim instudio-pms-get-all-project-and-spu` | - |
| 获取项目创建以来一年内的销量趋势图数据：获取项目创建以来一年内的销量趋势图数据 | `mbs pim instudio-pms-get-development-project-diagram` | - |
| 获取开发小组成员：获取开发小组成员 | `mbs pim instudio-pms-get-development-teamer` | - |
| 获取未结束的项目名称和spu：获取未结束的项目名称和spu | `mbs pim instudio-pms-get-not-end-project-and-spu` | - |
| 添加SPU到开发项目下拉：添加SPU到开发项目下拉 | `mbs pim instudio-pms-get-project-select` | - |
| 价格区间列表：价格区间列表 | `mbs pim instudio-pms-get-price-range-list` | - |
| 产品简介列表：产品简介列表 | `mbs pim instudio-pms-get-product-nature-list` | - |
| 产品开发池列表：产品开发池列表 | `mbs pim instudio-pms-list-developpool` | - |
| 查询ali类层级为1的类目：查询ali类层级为1的类目 | `mbs pim instudio-pms-find-alilevel` | - |
| 查询ali类层级为2的类目：查询ali类层级为2的类目 | `mbs pim instudio-pms-find-alilevel-two` | `categoryId` |
| 查询ALI消息：查询ALI消息(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-ali-message` | `index`, `state` |
| eby类目层级1：eby类目层级1 | `mbs pim instudio-pms-find-category-name-bycategory-level` | - |
| 查询ebay一级 和二级分类：查询ebay一级 和二级分类 | `mbs pim instudio-pms-find-ebay-category` | - |
| 查询ebay类层级为2的类目：查询ebay类层级为2的类目 | `mbs pim instudio-pms-find-ebaylevel-two` | `categoryId` |
| 查询eBay消息：查询eBay消息(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-ebay-message` | `index`, `state` |
| 查询aliexpress一级和二级分类：查询aliexpress一级和二级分类 | `mbs pim instudio-pms-find-smtcategory` | - |
| 查询Wish消息：查询Wish消息(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-wish-message` | `categoryId` |
| 根据所有站点：根据所有站点 | `mbs pim instudio-pms-find-all-site-ebay-singlepublish-info-controller` | - |
| 根据英文名查询分类：根据英文名查询分类 | `mbs pim instudio-pms-find-category-by-name-en` | `name`, `site`, `vtype` |
| 根据分类名字模糊搜索分类：根据分类名字模糊搜索分类 | `mbs pim instudio-pms-find-category-by-search-ebay-singlepublish-info-controller` | - |
| 根据SPU查询分类：根据SPU查询分类 | `mbs pim instudio-pms-find-category-by-spu-ebay-singlepublish-info-controller` | - |
| 根据分类id查询名字：根据分类id查询名字 | `mbs pim instudio-pms-find-category-name-by-category-id-ebay-singlepublish-info-controller` | - |
| 根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics | `mbs pim instudio-pms-find-item-specifics-by-category-id-ebay-singlepublish-info-controller` | - |
| 查询当前登陆人管理人员：查询当前登陆人管理人员 | `mbs pim instudio-pms-find-manage-employee-names-ebay-singlepublish-info-controller` | - |
| 根据spu查询sku：根据spu查询sku | `mbs pim instudio-pms-find-pms-sku-by-spu-ebay-singlepublish-info-controller` | - |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-by-pt-ebay-singlepublish-info-controller` | `pt` |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-by-pt-spu-ebay-singlepublish-info-controller` | - |
| 获取物品状况：获取物品状况 | `mbs pim instudio-pms-get-ebay-singlepublish-condition` | - |
| 获取刊登信息ById：获取刊登信息ById | `mbs pim instudio-pms-get-ebay-singlepublish-info-by-id` | - |
| 获取刊登信息列表：获取刊登信息列表 | `mbs pim instudio-pms-get-ebay-singlepublish-list` | - |
| 获取商品分类：获取商品分类 | `mbs pim instudio-pms-get-ebay-singlepublish-product-category` | - |
| 获取店铺分类：获取店铺分类 | `mbs pim instudio-pms-get-ebay-singlepublish-shop-category` | - |
| 获取套图对应信息：获取套图对应信息 | `mbs pim instudio-pms-get-pic-infos-by-pic-style-ebay-singlepublish-info-controller` | - |
| 根据所有站点：根据所有站点 | `mbs pim instudio-pms-get-price-information-ebay-singlepublish-info-controller` | `list` |
| 计算价格信息2：计算价格信息2 | `mbs pim instudio-pms-get-price-information2-ebay-singlepublish-info-controller` | `list` |
| 条目Specifics搜索：条目Specifics搜索(源码无注释,按方法名推断) | `mbs pim instudio-pms-item-specifics-search-ebay-singlepublish-info-controller` | - |
| 显示运费：显示运费 | `mbs pim instudio-pms-get-all-freight-template` | - |
| 显示运费：显示运费 | `mbs pim instudio-pms-get-all-freight-template-two` | - |
| 校验项目变更项目状态：校验项目变更项目状态(源码无注释,按方法名推断) | `mbs pim instudio-pms-check-project-and-change-project-status` | - |
| 校验SKU库存：校验SKU库存(源码无注释,按方法名推断) | `mbs pim instudio-pms-check-sku-inventory` | `projectCode` |
| 导出海外仓任务列表：导出海外仓任务列表 | `mbs pim instudio-pms-export-project-view` | - |
| 导出海外仓任务列表：导出海外仓任务列表 | `mbs pim instudio-pms-export-skuview` | `chiefName`, `orderBy`, `productProperty`, `searchFinallyExressEndTime`, `searchFinallyExressStartTime`, `searchSku`, `teamName`, `skuAddStartTime`, `skuAddEndTime`, `oper4` |
| 查询Development主管：查询Development主管(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-development-chief` | - |
| 按DEP查询EMP：按DEP查询EMP(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-emp-by-dep` | `depId` |
| 查询FBASaler：查询FBASaler(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-fbasaler` | - |
| 查询订单信息：查询订单信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-order-info` | - |
| 查询项目地址：查询项目地址(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-project-address` | `projectId` |
| 根据sku查询对应的海外仓备货计划：根据sku查询对应的海外仓备货计划 | `mbs pim instudio-pms-get-project-infos-by-sku` | - |
| 查询项目列表：查询项目列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-project-list-hwc-development-project` | - |
| 查询项目SKU：查询项目SKU(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-project-sku-hwc-development-project` | `projectId` |
| 查询站点：查询站点(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-site` | - |
| 查询SKU信息：查询SKU信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-sku-info` | - |
| 查询SKU采购信息：查询SKU采购信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-sku-purchase-info` | - |
| 查询SKU查看：查询SKU查看(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-sku-view` | - |
| 按SKU查询SKU查看信息：按SKU查询SKU查看信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-sku-view-info-by-sku` | `sku` |
| 按主管查询Teamer：按主管查询Teamer(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-teamer-by-chief` | `name` |
| 查询WAREHouse：查询WAREHouse(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-ware-house` | - |
| 查询仓库类型：查询仓库类型(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-warehouse-type` | - |
| 侵权case列表查询：侵权case列表查询 | `mbs pim instudio-pms-query-infrine-ment-case-list` | - |
| 查询侵权case的字典表(infinge_code)：查询侵权case的字典表(infinge_code) | `mbs pim instudio-pms-query-infrine-ment-category` | - |
| 根据条件查询侵权店铺：根据条件查询侵权店铺 | `mbs pim instudio-pms-query-infrine-ment-platform` | - |
| 获取店铺侵权列表：获取店铺侵权列表 | `mbs pim instudio-pms-query-infrine-ment-platform-list` | - |
| 查询店铺申诉列表：查询店铺申诉列表 | `mbs pim instudio-pms-query-shop-appeal-case-list` | - |
| 检查是否包含违禁词：检查是否包含违禁词 | `mbs pim instudio-pms-check-infringing-word2` | - |
| 检查是否包含违禁词：检查是否包含违禁词 | `mbs pim instudio-pms-check-infringing-word-list2` | - |
| 检查是否包含违禁词：检查是否包含违禁词 | `mbs pim instudio-pms-check-prohibited-words-infringing` | - |
| 检查是否包含钓鱼词和侵权词：检查是否包含钓鱼词和侵权词 | `mbs pim instudio-pms-check` | - |
| 根据所有站点：根据所有站点 | `mbs pim instudio-pms-find-all-site-lazada-singlepublish-info-controller` | - |
| 根据分类名字模糊搜索分类：根据分类名字模糊搜索分类 | `mbs pim instudio-pms-find-category-by-search-lazada-singlepublish-info-controller` | - |
| 根据分类id查询名字：根据分类id查询名字 | `mbs pim instudio-pms-find-category-name-by-category-id-lazada-singlepublish-info-controller` | - |
| 图片上传：图片上传 | `mbs pim instudio-pms-find-item-specifics-by-category-id-lazada-singlepublish-info-controller` | - |
| 查询当前登陆人管理人员：查询当前登陆人管理人员 | `mbs pim instudio-pms-find-manage-employee-names-lazada-singlepublish-info-controller` | - |
| 根据spu查询sku：根据spu查询sku | `mbs pim instudio-pms-find-pms-sku-by-spu-lazada-singlepublish-info-controller` | - |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-by-pt-lazada-singlepublish-info-controller` | `pt` |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-by-pt-spu-lazada-singlepublish-info-controller` | - |
| 查询当前登陆人店铺信息(搜索)：查询当前登陆人店铺信息(搜索) | `mbs pim instudio-pms-find-shop-by-search` | - |
| 接口进行拉取信息：接口进行拉取信息 | `mbs pim instudio-pms-get-lazada-info-for-edit` | - |
| 获取刊登信息ById：获取刊登信息ById | `mbs pim instudio-pms-get-lazada-singlepublish-info-by-id` | - |
| 查询信息：查询信息 | `mbs pim instudio-pms-get-lazada-singlepublish-info-by-id-edit` | - |
| 获取刊登信息列表：获取刊登信息列表 | `mbs pim instudio-pms-get-lazada-singlepublish-list` | - |
| 获取商品分类：获取商品分类 | `mbs pim instudio-pms-get-lazada-singlepublish-product-category` | - |
| 计算价格信息：计算价格信息 | `mbs pim instudio-pms-get-price-information-lazada-singlepublish-info-controller` | `list` |
| 计算价格信息2：计算价格信息2 | `mbs pim instudio-pms-get-price-information2-lazada-singlepublish-info-controller` | `list` |
| 条目Specifics搜索：条目Specifics搜索(源码无注释,按方法名推断) | `mbs pim instudio-pms-item-specifics-search-lazada-singlepublish-info-controller` | - |
| 供应商中台导出：供应商中台导出 | `mbs pim instudio-pms-export-manufacture` | - |
| 供应商中台的列表数据：供应商中台的列表数据 | `mbs pim instudio-pms-list-manufacture` | - |
| 美客多-产品类目下拉选择：美客多-产品类目下拉选择 | `mbs pim instudio-pms-get-category-list-mercadolibre` | - |
| 美客多-获取图片：美客多-获取图片 | `mbs pim instudio-pms-get-picture-list` | - |
| 美客多单品刊登列表查询：美客多单品刊登列表查询 | `mbs pim instudio-pms-select-publish-request-page` | - |
| 获取批量刊登任务列表：获取批量刊登任务列表 | `mbs pim instudio-pms-list-task` | - |
| 根据分类获取刊登模板数据：根据分类获取刊登模板数据 | `mbs pim instudio-pms-category-id-template` | `categoryId` |
| 导出中台数据信息：导出中台数据信息 | `mbs pim instudio-pms-export-middle-panel-data` | - |
| 获取中台数据列表：获取中台数据列表 | `mbs pim instudio-pms-get-middle-panel-list` | - |
| 查询通知列表：查询通知列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-notification-list` | - |
| 按条件查询店铺：按条件查询店铺(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-shop-by-condition` | - |
| 查看店铺策略：查看店铺策略 | `mbs pim instudio-pms-get-shop-strategy` | - |
| 根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics | `mbs pim instudio-pms-find-item-specifics-by-category-id-ozon-no-source-template` | - |
| Ozon无源刊登模板查询信息：Ozon无源刊登模板查询信息 | `mbs pim instudio-pms-get-ozon-no-source-publish-template-info` | - |
| 批量根据店铺查询仓库列表：批量根据店铺查询仓库列表 | `mbs pim instudio-pms-batch-get-ozon-warehouse` | `shopNames` |
| 根据分类名字模糊搜索分类：根据分类名字模糊搜索分类 | `mbs pim instudio-pms-find-category-by-search-ozon-singlepublish-info-controller` | - |
| 根据分类id查询名字：根据分类id查询名字 | `mbs pim instudio-pms-find-category-name-by-category-id-ozon-singlepublish-info-controller` | - |
| 根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics | `mbs pim instudio-pms-find-item-specifics-by-category-id-ozon-singlepublish-info-controller` | - |
| 根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics | `mbs pim instudio-pms-find-item-specifics-by-category-id-old` | - |
| 查询当前登陆人管理人员：查询当前登陆人管理人员 | `mbs pim instudio-pms-find-manage-employee-names-ozon-singlepublish-info-controller` | - |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-by-pt-ozon-singlepublish-info-controller` | `pt` |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-by-pt-spu-ozon-singlepublish-info-controller` | - |
| 获取所有分类：获取所有分类 | `mbs pim instudio-pms-get-all-ozon-category` | - |
| 通过spu获取sku裁剪图片对应的原图：通过spu获取sku裁剪图片对应的原图 | `mbs pim instudio-pms-get-cropped-orig-image-list-by-erp-spu` | `erpSpu` |
| 通过spu获取sku图片的原图和裁剪后的图片：通过spu获取sku图片的原图和裁剪后的图片 | `mbs pim instudio-pms-get-orig-image-and-cropped-list-by-erp-spu` | `erpSpu` |
| 获取所有分类：获取所有分类 | `mbs pim instudio-pms-get-ozon-singlepublish-category` | - |
| 获取刊登信息ById：获取刊登信息ById | `mbs pim instudio-pms-get-ozon-singlepublish-info-by-id` | - |
| 获取刊登信息列表：获取刊登信息列表 | `mbs pim instudio-pms-get-ozon-singlepublish-list` | - |
| 获取店铺仓库列表：获取店铺仓库列表 | `mbs pim instudio-pms-get-ozon-warehouse` | - |
| 计算价格信息：计算价格信息 | `mbs pim instudio-pms-get-price-information-ozon-singlepublish-info-controller` | `list` |
| 获取翻译后图片：获取翻译后图片 | `mbs pim instudio-pms-get-translated-picture` | `skus` |
| 提交裁剪数据：提交裁剪数据 | `mbs pim instudio-pms-ozon-image-cropped-list` | - |
| 分页查询 Ozon SPU 类目模板列表：分页查询 Ozon SPU 类目模板列表 | `mbs pim instudio-pms-page-ozon-template` | - |
| 单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存：单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存 | `mbs pim instudio-pms-check-phishing-words` | - |
| 单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存：单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存 | `mbs pim instudio-pms-check-phishing-words2` | - |
| 校验PhishingWords3：校验PhishingWords3(源码无注释,按方法名推断) | `mbs pim instudio-pms-check-phishing-words3` | - |
| 单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存：单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存 | `mbs pim instudio-pms-check-phishing-words-list` | - |
| 单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存：单品刊登检查标题/描述/五点卖点——包含则提示钓鱼词+弹窗提示不允许刊登/保存 | `mbs pim instudio-pms-check-phishing-words-list2` | - |
| 校验PhishingWords列表3：校验PhishingWords列表3(源码无注释,按方法名推断) | `mbs pim instudio-pms-check-phishing-words-list3` | - |
| 导出拍照订单：导出拍照订单 | `mbs pim instudio-pms-export-photo-order` | - |
| 查询全部EMP：查询全部EMP(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-all-emp` | - |
| 获取列表：获取列表 | `mbs pim instudio-pms-get-photo-order` | - |
| Getfind平台销售：Getfind平台销售(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-plat-sale` | - |
| 通过用户id 获取物品信息：通过用户id 获取物品信息 | `mbs pim instudio-pms-find-pool-message-pool-messag` | `userId` |
| 通过用户id 获取物品信息：通过用户id 获取物品信息 | `mbs pim instudio-pms-find-tag-name` | - |
| 获取放弃愿意：获取放弃愿意 | `mbs pim instudio-pms-spu-submit-sale` | `list` |
| 计算定价分摊策略：计算定价分摊策略 | `mbs pim instudio-pms-get-all-pricing-allocation-strategy` | - |
| 通过SPU找：通过SPU找 | `mbs pim instudio-pms-get1688-product-attr` | `productId` |
| 通过spu 获取sku级图片信息：通过spu 获取sku级图片信息 | `mbs pim instudio-pms-find-picture-by-spu` | `spu` |
| 获取产品图片任务池所有产品信息：获取产品图片任务池所有产品信息 | `mbs pim instudio-pms-find-product-picture-by-list` | - |
| 查询全部Develop：查询全部Develop(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-all-develop` | - |
| 获取图片任务排行榜月份下拉框：获取图片任务排行榜月份下拉框 | `mbs pim instudio-pms-get-month` | - |
| 海报类型：海报类型 | `mbs pim instudio-pms-get-poster-type` | `posterType` |
| 获取图片任务个数：获取图片任务个数 | `mbs pim instudio-pms-get-product-picture` | - |
| 查询项目SKU：查询项目SKU(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-project-sku-product-image` | `projectid` |
| 执行数据库单个查询：执行数据库单个查询 | `mbs pim instudio-pms-get-property` | `id` |
| 根据spu获取sku供应商链接：根据spu获取sku供应商链接 | `mbs pim instudio-pms-getspusupplyurl` | `spu` |
| 获取所有生成路径：获取所有生成路径 | `mbs pim instudio-pms-query-all-generated-path` | - |
| 根据商品spu获取竞品url地址：根据商品spu获取竞品url地址 | `mbs pim instudio-pms-query-competitor-bysup` | `spu` |
| 查询商品图片：查询商品图片(源码无注释,按方法名推断) | `mbs pim instudio-pms-query-product-image` | `productId` |
| 获取当前账号的图片任务：获取当前账号的图片任务 | `mbs pim instudio-pms-query-product-picture-by-user-id-product-image` | `id` |
| 获取当前账号的图片任务-新：获取当前账号的图片任务-新 | `mbs pim instudio-pms-query-product-picture-by-user-id2` | `id` |
| 获取所有的图片任务-新：获取所有的图片任务-新 | `mbs pim instudio-pms-query-product-picture-by-user-id3` | `id` |
| 导出拍照任务查询列表：导出拍照任务查询列表 | `mbs pim instudio-pms-export-photograph-mission` | - |
| 批量添加拍照任务：批量添加拍照任务 | `mbs pim instudio-pms-find-photograph-mission` | - |
| 根据spu查询拍照任务：根据spu查询拍照任务 | `mbs pim instudio-pms-find-photograph-mission-by-spu` | - |
| 分页获取拍照任务池数据：分页获取拍照任务池数据 | `mbs pim instudio-pms-get-photograph-list` | - |
| 获取当前账号的拍照任务：获取当前账号的拍照任务 | `mbs pim instudio-pms-query-product-picture-by-user-id-product-photograph-controller` | `id` |
| 侵权列表：侵权列表 | `mbs pim instudio-pms-find-product-tort` | - |
| 编辑侵权：编辑侵权 | `mbs pim instudio-pms-find-sale-leader-tort` | - |
| 侵权列表：侵权列表 | `mbs pim instudio-pms-find-sale-tort` | - |
| 侵权标记：侵权标记 | `mbs pim instudio-pms-get-msg-type-list-product-tort` | `tagType` |
| 销售人员收到侵权任务列表：销售人员收到侵权任务列表 | `mbs pim instudio-pms-validate-sku` | `flag`, `spuOrSku` |
| Product批量修改：Product批量修改 | `mbs pim instudio-pms-batch-upd-sku-info` | - |
| 获取品类自定义的颜色和尺码列表：获取品类自定义的颜色和尺码列表 | `mbs pim instudio-pms-check-product-title-is-tort` | `title` |
| 导出捆绑商品：导出捆绑商品 | `mbs pim instudio-pms-export-bind-product` | - |
| spu质检信息：spu质检信息 | `mbs pim instudio-pms-fba-quality-info` | `spu` |
| 查询eBayDescribe：productId | `mbs pim instudio-pms-find-ebay-describe` | `productId` |
| 按SPU查询eBayDescribe：按SPU查询eBayDescribe(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-ebay-describe-by-spu` | `spu` |
| 开发任务完成统计：开发任务完成统计 | `mbs pim instudio-pms-find-keyword` | - |
| 获取币种：获取币种 | `mbs pim instudio-pms-find-money-rate` | - |
| 通过spu获取sku信息：通过spu获取sku信息 | `mbs pim instudio-pms-find-product-byspu` | `spu` |
| 开发任务完成统计：开发任务完成统计 | `mbs pim instudio-pms-find-product-finish-message` | - |
| 更新spu图片选择图类型：更新spu图片选择图类型 | `mbs pim instudio-pms-find-sku-by-spu` | `spu` |
| 获取1688token：获取1688token | `mbs pim instudio-pms-find-token` | - |
| 获取当前时间的年和周：获取当前时间的年和周 | `mbs pim instudio-pms-get-current-time` | - |
| 重算：重算 | `mbs pim instudio-pms-get-end-time` | - |
| 按SKU列表查询FBA打包信息图片信息：按SKU列表查询FBA打包信息图片信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-fba-pack-info-and-image-info-by-skus` | `skus` |
| 根据sku或spu查询对应侵权信息：根据sku或spu查询对应侵权信息 | `mbs pim instudio-pms-get-info-submit` | `sku`, `spu` |
| 查询商品属性：查询商品属性(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-product-attribute` | - |
| 通过spu获取图片路径：通过spu获取图片路径 | `mbs pim instudio-pms-get-product-picture-url` | `spu` |
| 通过spu获取图片路径2：通过spu获取图片路径2 | `mbs pim instudio-pms-get-product-picture-url2` | `spu` |
| 查询该产品是否存在侵权提醒：查询该产品是否存在侵权提醒 | `mbs pim instudio-pms-get-product-tort` | `spu`, `sku` |
| 获取销售经理的组员，无权限查看：获取销售经理的组员，无权限查看 | `mbs pim instudio-pms-get-sale-team-members-by-name` | - |
| 获取spu限价，以及销售备注等：获取spu限价，以及销售备注等 | `mbs pim instudio-pms-get-spu-limit-price` | - |
| 获取商品的可刊登店铺：获取商品的可刊登店铺 | `mbs pim instudio-pms-get-spu-shop-by-name` | - |
| 获取sku供应链接信息：获取sku供应链接信息 | `mbs pim instudio-pms-get-supply-url-by-sku-product` | `sku` |
| 查询动销率统计：查询动销率统计 | `mbs pim instudio-pms-get-turnover-ratio-list` | - |
| 列表信息<已废弃>：列表信息<已废弃> | `mbs pim instudio-pms-pushprojecttomabang` | `projectId` |
| 列表信息：列表信息 | `mbs pim instudio-pms-query-page` | `warehouseid`, `skustatus`, `orderby` |
| 按条件查sku：按条件查sku | `mbs pim instudio-pms-query-sku` | `warehouseid`, `skustatus`, `orderby` |
| 查询项目Relation列表：查询项目Relation列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-project-relation-list` | - |
| 刊登时获取店铺信息：刊登时获取店铺信息 | `mbs pim instudio-pms-get-shop-info` | `userId` |
| 查询店铺列表：查询店铺列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-shop-list` | - |
| 查询提交：查询提交(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-submit` | - |
| Published列表：Published列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-published-list` | - |
| 采购异常列表：采购异常列表 | `mbs pim instudio-pms-get-exception-list` | - |
| 采购异常列表：采购异常列表 | `mbs pim instudio-pms-get-exception-list-old` | - |
| 采购异常消息类型：采购异常消息类型 | `mbs pim instudio-pms-get-msg-type-list-purchase-exception` | - |
| 获取sku默认供应商：获取sku默认供应商 | `mbs pim instudio-pms-getpurchaseexmessage` | `userid` |
| 获取sku默认供应商：获取sku默认供应商 | `mbs pim instudio-pms-get-sku-supply` | `sku` |
| FBA封样确认编辑订单详情页接口：FBA封样确认编辑订单详情页接口 | `mbs pim instudio-pms-upd-fba-sample-exception-from-order` | `msgDetail` |
| 根据分类id查询名字：根据分类id查询名字 | `mbs pim instudio-pms-find-category-name-by-category-id-shopee-singlepublish-controller-cnsc` | - |
| 根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics | `mbs pim instudio-pms-find-item-specifics-by-category-id-shopee-singlepublish-controller-cnsc` | - |
| 查询当前登陆人管理人员：查询当前登陆人管理人员 | `mbs pim instudio-pms-find-manage-employee-names-shopee-singlepublish-controller-cnsc` | - |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-by-pt-shopee-singlepublish-controller-cnsc` | - |
| 根据标题推荐分类：根据标题推荐分类 | `mbs pim instudio-pms-get-file-size` | - |
| 根据链接解析出所需数据：根据链接解析出所需数据 | `mbs pim instudio-pms-get-info-by-url-from-votobo-shopee-singlepublish-controller-cnsc` | - |
| 根据店铺获取物流模板：根据店铺获取物流模板 | `mbs pim instudio-pms-get-logistics-by-shop-name-shopee-singlepublish-controller-cnsc` | - |
| 获取文件大小：获取文件大小 | `mbs pim instudio-pms-get-main-pics-by-spu-style-shopee-singlepublish-controller-cnsc` | - |
| 获取套图：获取套图 | `mbs pim instudio-pms-get-pic-infos-by-pic-style-shopee-singlepublish-controller-cnsc` | - |
| 计算价格信息：计算价格信息 | `mbs pim instudio-pms-get-price-information-shopee-singlepublish-controller-cnsc` | `list` |
| 根据标题推荐分类：根据标题推荐分类 | `mbs pim instudio-pms-get-shopee-category-recommend-shopee-singlepublish-controller-cnsc` | - |
| 根据标题推荐分类：根据标题推荐分类 | `mbs pim instudio-pms-get-shopee-category-recommend2` | - |
| 获取刊登信息ById：获取刊登信息ById | `mbs pim instudio-pms-get-shopee-singlepublish-info-by-id-shopee-singlepublish-controller-cnsc` | - |
| 获取店铺分类：获取店铺分类 | `mbs pim instudio-pms-get-shopee-singlepublish-shop-category-shopee-singlepublish-controller-cnsc` | - |
| 根据店铺获取merchantid下的所有店铺名：根据店铺获取merchantid下的所有店铺名 | `mbs pim instudio-pms-get-shop-id-by-shop-name` | - |
| 获取刊登信息列表：获取刊登信息列表 | `mbs pim instudio-pms-get-smt-singlepublish-list-shopee-singlepublish-controller-cnsc` | - |
| 判断是否是cnsc店铺：判断是否是cnsc店铺 | `mbs pim instudio-pms-check-cnsc` | - |
| 根据分类id查询名字：根据分类id查询名字 | `mbs pim instudio-pms-find-category-name-by-category-id-shopee-singlepublish-controller` | - |
| 根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics | `mbs pim instudio-pms-find-item-specifics-by-category-id-shopee-singlepublish-controller` | - |
| 查询当前登陆人管理人员：查询当前登陆人管理人员 | `mbs pim instudio-pms-find-manage-employee-names-shopee-singlepublish-controller` | - |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-by-pt-shopee-singlepublish-controller` | - |
| 查询当前登陆人店铺信息排除直邮店铺：查询当前登陆人店铺信息排除直邮店铺 | `mbs pim instudio-pms-find-shop-by-pt-new` | - |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-by-pt-spu-shopee-singlepublish-controller` | - |
| 根据链接解析出所需数据：根据链接解析出所需数据 | `mbs pim instudio-pms-get-info-by-url-from-votobo-shopee-singlepublish-controller` | - |
| 根据店铺获取物流模板：根据店铺获取物流模板 | `mbs pim instudio-pms-get-logistics-by-shop-name-shopee-singlepublish-controller` | - |
| 图片上传：图片上传 | `mbs pim instudio-pms-get-price-information-shopee-singlepublish-controller` | `list` |
| 根据标题推荐分类：根据标题推荐分类 | `mbs pim instudio-pms-get-shopee-category-recommend-shopee-singlepublish-controller` | - |
| 接口进行拉取信息：接口进行拉取信息 | `mbs pim instudio-pms-get-shopee-info-edit-id` | - |
| 获取刊登信息ById：获取刊登信息ById | `mbs pim instudio-pms-get-shopee-singlepublish-info-by-id-shopee-singlepublish-controller` | - |
| 查询信息：查询信息 | `mbs pim instudio-pms-get-shopee-singlepublish-info-by-id-edit` | - |
| 获取店铺分类：获取店铺分类 | `mbs pim instudio-pms-get-shopee-singlepublish-shop-category-shopee-singlepublish-controller` | - |
| 获取刊登信息列表：获取刊登信息列表 | `mbs pim instudio-pms-get-smt-singlepublish-list-shopee-singlepublish-controller` | - |
| 查询spu速建链接：查询spu速建链接 | `mbs pim instudio-pms-spu-get-spu-competitor-link` | `spu` |
| 根据标题推荐分类：根据标题推荐分类 | `mbs pim instudio-pms-type-shop-name` | `shopName`, `type` |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-voucher` | - |
| 获取优惠券明细：获取优惠券明细 | `mbs pim instudio-pms-get-shopee-voucher-by-id` | - |
| 获取优惠券列表：获取优惠券列表 | `mbs pim instudio-pms-get-shopee-vouchers` | - |
| 获取优惠券模板列表：获取优惠券模板列表 | `mbs pim instudio-pms-get-shopee-voucher-template-by-id` | - |
| 获取优惠券模板列表：获取优惠券模板列表 | `mbs pim instudio-pms-get-shopee-voucher-templates` | - |
| 开发中台 类目维度导出：开发中台 类目维度导出 | `mbs pim instudio-pms-export-sku-category` | - |
| 开发中台的一级分类列表数据：开发中台的一级分类列表数据 | `mbs pim instudio-pms-list-sku-category` | - |
| 开发中台的二级分类列表数据：开发中台的二级分类列表数据 | `mbs pim instudio-pms-second-categorys` | - |
| 开发中台的三级分类列表数据：开发中台的三级分类列表数据 | `mbs pim instudio-pms-three-category` | - |
| 开发中台的列表数据：开发中台的列表数据 | `mbs pim instudio-pms-export-sku-manager` | - |
| 开发中台查看当月退款TOP30的sku：开发中台查看当月退款TOP30的sku | `mbs pim instudio-pms-get-top-thirty-refund-sku-list` | - |
| 开发中台的列表数据：开发中台的列表数据 | `mbs pim instudio-pms-list-sku-manager` | - |
| 查询当前登陆人管理的店铺：查询当前登陆人管理的店铺 | `mbs pim instudio-pms-find-freight-by-shop` | - |
| 查询当前登陆人管理人员：查询当前登陆人管理人员 | `mbs pim instudio-pms-find-manage-employee-names-smt-shipto-configuration-controller` | - |
| 查询当前登陆人管理的店铺：查询当前登陆人管理的店铺 | `mbs pim instudio-pms-find-manager-shops` | - |
| 查询当前登陆人管理的店铺：查询当前登陆人管理的店铺 | `mbs pim instudio-pms-find-shipto-for-batch-price` | - |
| 根据配置id查询出所有绑定的产品：根据配置id查询出所有绑定的产品 | `mbs pim instudio-pms-select-item-by-config-id` | - |
| 查询shipto列表：查询shipto列表 | `mbs pim instudio-pms-select-shipto-configuration` | - |
| 查询shipto列表：查询shipto列表 | `mbs pim instudio-pms-select-shipto-configuration-page` | - |
| 根据所有站点：根据所有站点 | `mbs pim instudio-pms-find-all-site-smt-singlepublish-controller` | - |
| 根据分类名字模糊搜索分类：根据分类名字模糊搜索分类 | `mbs pim instudio-pms-find-category-by-search-smt-singlepublish-controller` | - |
| 根据所有站点：根据所有站点 | `mbs pim instudio-pms-find-category-by-spu-smt-singlepublish-controller` | - |
| 根据分类id查询名字：根据分类id查询名字 | `mbs pim instudio-pms-find-category-name-by-category-id-smt-singlepublish-controller` | - |
| 根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics | `mbs pim instudio-pms-find-item-specifics-by-category-id-smt-singlepublish-controller` | - |
| 根据分类id查询ItemSpecifics：根据分类id查询ItemSpecifics | `mbs pim instudio-pms-find-item-specifics-by-category-id-edit` | - |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-manage-employee-names-smt-singlepublish-controller` | - |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-by-pt-smt-singlepublish-controller` | `pt`, `spu` |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-by-pt-edit` | `pt` |
| 获取当前店铺的分组：获取当前店铺的分组 | `mbs pim instudio-pms-find-shop-group-list` | `shopName` |
| 查询当前登陆人店铺信息：查询当前登陆人店铺信息 | `mbs pim instudio-pms-find-shop-jitb` | `shopName` |
| 根据类别查找流量词：根据类别查找流量词 | `mbs pim instudio-pms-find-smt-category-surgeword` | - |
| 同步会员分组：同步会员分组 | `mbs pim instudio-pms-get-all-shop-productgroups` | `shopName` |
| 根据店铺获取物流模板：根据店铺获取物流模板 | `mbs pim instudio-pms-get-logistics-by-shop-name-smt-singlepublish-controller` | `shopName` |
| 根据spu获取模板初始图片：根据spu获取模板初始图片 | `mbs pim instudio-pms-get-main-pics-by-spu` | `spu` |
| 获取套图对应信息：获取套图对应信息 | `mbs pim instudio-pms-get-main-pics-by-spu-style-smt-singlepublish-controller` | - |
| 获取欧代图：获取欧代图 | `mbs pim instudio-pms-get-msr-list` | - |
| 获取套图对应信息：获取套图对应信息 | `mbs pim instudio-pms-get-pic-infos-by-pic-style-smt-singlepublish-controller` | - |
| 计算价格信息：计算价格信息 | `mbs pim instudio-pms-get-price-information-smt-singlepublish-controller` | `list` |
| SKU组套信息下拉：SKU组套信息下拉 | `mbs pim instudio-pms-get-sku-variation-info` | - |
| 根据产品id获取分类id：根据产品id获取分类id | `mbs pim instudio-pms-get-smt-category-by-item-id` | `itemId` |
| 查询速卖通Related营销信息：查询速卖通Related营销信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-smt-related-marketing-info` | - |
| 获取刊登信息ById：获取刊登信息ById | `mbs pim instudio-pms-get-smt-singlepublish-info-by-id` | - |
| 获取编辑信息ById：获取编辑信息ById | `mbs pim instudio-pms-get-smt-singlepublish-info-by-id-edit` | - |
| 获取刊登信息列表：获取刊登信息列表 | `mbs pim instudio-pms-get-smt-singlepublish-list-smt-singlepublish-controller` | - |
| 获取编辑信息列表：获取编辑信息列表 | `mbs pim instudio-pms-get-smt-singlepublish-list-edit` | - |
| 自定义模板获取国家：自定义模板获取国家 | `mbs pim instudio-pms-get-smt-single-publish-main-country` | - |
| 获取店铺分类：获取店铺分类 | `mbs pim instudio-pms-get-smt-singlepublish-shop-category` | - |
| 获取欧代图：获取欧代图 | `mbs pim instudio-pms-get-spu-oudai-picture` | - |
| 根据产品id获取分类id：根据产品id获取分类id | `mbs pim instudio-pms-get-url-info` | - |
| 根据产品id获取分类id：根据产品id获取分类id | `mbs pim instudio-pms-get-votobo-info-by-item-id-smt-singlepublish-controller` | `itemId` |
| 按SPU查询VTPICS：按SPU查询VTPICS(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-vtpics-by-spu` | `spu` |
| 获取海关监管属性：获取海关监管属性 | `mbs pim instudio-pms-query-hscode-by-attribute` | - |
| 获取海关监管属性：获取海关监管属性 | `mbs pim instudio-pms-query-type-by-hscode` | - |
| 查询速卖通Related营销模板：查询速卖通Related营销模板(源码无注释,按方法名推断) | `mbs pim instudio-pms-select-smt-related-marketing-template` | - |
| 按ID查询速卖通Related营销模板：按ID查询速卖通Related营销模板(源码无注释,按方法名推断) | `mbs pim instudio-pms-select-smt-related-marketing-template-by-id` | - |
| 获取欧代图：获取欧代图 | `mbs pim instudio-pms-sendmessage` | `jsonValue` |
| 添加在线listing生成记录：添加在线listing生成记录 | `mbs pim instudio-pms-smt-edit-info-refresh` | - |
| 查找有几套图：查找有几套图 | `mbs pim instudio-pms-yl-export` | - |
| 校验Forbid平台：校验Forbid平台(源码无注释,按方法名推断) | `mbs pim instudio-pms-check-forbid-platform` | - |
| 校验SPUWAIT校验：校验SPUWAIT校验(源码无注释,按方法名推断) | `mbs pim instudio-pms-check-spu-wait-check` | - |
| 查询指定风格SPU图：查询指定风格SPU图 | `mbs pim instudio-pms-find-product-image-by-style` | `spu` |
| 批量更新spu 清仓、停产状态：批量更新spu 清仓、停产状态 | `mbs pim instudio-pms-find-site-by-mabang-id2` | `list` |
| 查看导入商品记录：查看导入商品记录 | `mbs pim instudio-pms-find-spu-import` | - |
| 商品池spu展示：商品池spu展示 | `mbs pim instudio-pms-find-spu-info` | - |
| SPU编辑页面：SPU编辑页面 | `mbs pim instudio-pms-find-spu-info2` | `index`, `skustatus`, `warehouseid`, `tagId`, `orderby`, `marketstates` |
| 通过spu获取供应商信息：通过spu获取供应商信息 | `mbs pim instudio-pms-find-supply-info-by-spu` | `spu` |
| 修改spu的商品分类：修改spu的商品分类 | `mbs pim instudio-pms-find-user` | - |
| 查询用户3：查询用户3(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-user3` | - |
| 按团队ID查询用户：按团队ID查询用户(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-user-by-team-id` | `teamId` |
| 按spu查日志：按spu查日志 | `mbs pim instudio-pms-get-arter-num` | - |
| 查询GPSR图片：查询GPSR图片(源码无注释,按方法名推断) | `mbs pim instudio-pms-spu-get-gpsr-picture` | `spu` |
| 查询刊登系统SPU列表：查询刊登系统SPU列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-pms-spu-list` | - |
| 按SPU查询推送信息：按SPU查询推送信息(源码无注释,按方法名推断) | `mbs pim instudio-pms-spu-get-push-info-by-spu` | `spu` |
| 查询SPUOUDAI图片：查询SPUOUDAI图片(源码无注释,按方法名推断) | `mbs pim instudio-pms-spu-get-spu-ou-dai-picture` | `spu` |
| 获取spu刊登标记数量：获取spu刊登标记数量 | `mbs pim instudio-pms-get-spu-publishflag` | - |
| 查询SPURE校验状态：查询SPURE校验状态(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-spu-re-check-status` | - |
| 获取spu7/30/90天销量：获取spu7/30/90天销量 | `mbs pim instudio-pms-get-spusales-volume` | `spuList` |
| 是否有编辑spu的权限：是否有编辑spu的权限 | `mbs pim instudio-pms-is-can-edit-spu` | `spu` |
| 在修改spu时是否展示已修改重新提交审核：在修改spu时是否展示已修改重新提交审核 | `mbs pim instudio-pms-is-show-update-and-audit` | - |
| 是否视频文件：是否视频文件(源码无注释,按方法名推断) | `mbs pim instudio-pms-is-video-file` | `fileUrl` |
| 查询SPUSupportedPlatforms：查询SPUSupportedPlatforms(源码无注释,按方法名推断) | `mbs pim instudio-pms-supported-platforms` | `spuList` |
| 获取优化策略结果数据结果集合：获取优化策略结果数据结果集合 | `mbs pim instudio-pms-get-strategy-list` | - |
| 导出项目：导出项目(源码无注释,按方法名推断) | `mbs pim instudio-pms-export-project` | - |
| 通过登录名获取创建的开发任务：通过登录名获取创建的开发任务 | `mbs pim instudio-pms-find-develop-consumer` | - |
| 我的开发任务列表：我的开发任务列表 | `mbs pim instudio-pms-get-developer-consumer-list` | `userId` |
| 销售人员下拉列表：销售人员下拉列表 | `mbs pim instudio-pms-get-developer-list` | - |
| 获取开发分类表：获取开发分类表 | `mbs pim instudio-pms-get-developer-type-list` | - |
| 获取开发分类表分页：获取开发分类表分页 | `mbs pim instudio-pms-get-developer-type-list-page` | - |
| 开发分类列表中开发人员列表：开发分类列表中开发人员列表 | `mbs pim instudio-pms-get-type-developer-list` | - |
| 用户部门：用户部门 | `mbs pim instudio-pms-get-user-dept` | `userId` |
| 通过不同角色获取不同用户列表：通过不同角色获取不同用户列表 | `mbs pim instudio-pms-get-user-list` | `userId` |
| 通过url获取供应商信息：通过url获取供应商信息 | `mbs pim instudio-pms-find-scm-supply-by-store-url` | `url` |
| 分类下拉：分类下拉 | `mbs pim instudio-pms-get-category-supply-develop-controller` | - |
| 供应商开发池列表：供应商开发池列表 | `mbs pim instudio-pms-get-supply-pool-list` | - |
| 查询标签类型：查询标签类型(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-tag-type` | - |
| 查询名称：package com.instudio.pms.controller; | `mbs pim instudio-pms-name-tag` | - |
| 查询：package com.instudio.pms.controller; | `mbs pim instudio-pms-query-tag` | `index`, `oper` |
| 获取推荐类目：获取推荐类目 | `mbs pim instudio-pms-check-risk-words` | - |
| 导出接口：导出接口 | `mbs pim instudio-pms-export-tk-single-publish-list` | - |
| 计算价格：计算价格 | `mbs pim instudio-pms-find-manage-employee-names-tiktok-singlepublish-global-controller` | - |
| 获取品牌：获取品牌 | `mbs pim instudio-pms-get-brand-list` | - |
| 获取分类属性：获取分类属性 | `mbs pim instudio-pms-get-category-info-data-tiktok-singlepublish-global-controller` | - |
| 获取推荐类目：获取推荐类目 | `mbs pim instudio-pms-get-category-recommend` | - |
| 获取分类规则：获取分类规则 | `mbs pim instudio-pms-get-category-rules-tiktok-singlepublish-global-controller` | - |
| 获取分类规则：获取分类规则 | `mbs pim instudio-pms-get-category-rules-new` | - |
| 获取推荐类目：获取推荐类目 | `mbs pim instudio-pms-get-global-warehouse` | - |
| 查找店铺下站点：查找店铺下站点 | `mbs pim instudio-pms-get-main-shop-list-sites` | - |
| 查找店铺下站点：查找店铺下站点 | `mbs pim instudio-pms-get-main-shop-sites` | - |
| 查找店铺下站点：查找店铺下站点 | `mbs pim instudio-pms-get-main-shop-sites-for-sd` | - |
| 获取刊登明细：获取刊登明细 | `mbs pim instudio-pms-get-product-pics-tiktok-singlepublish-global-controller` | - |
| 获取商品池图片：获取商品池图片 | `mbs pim instudio-pms-get-product-pics2` | - |
| 通过一级类目获取店铺：通过一级类目获取店铺 | `mbs pim instudio-pms-get-shop-by-first-category` | - |
| 查找店铺：查找店铺 | `mbs pim instudio-pms-get-shop-by-pt-tiktok-singlepublish-global-controller` | - |
| 查找店铺：查找店铺 | `mbs pim instudio-pms-get-shop-by-pt-have-published` | - |
| 获取店铺制造商信息：获取店铺制造商信息 | `mbs pim instudio-pms-get-shop-manufacturers-list` | - |
| 获取店铺责任人信息：获取店铺责任人信息 | `mbs pim instudio-pms-get-shop-responsible-person-list` | - |
| 通过一级类目获取店铺：通过一级类目获取店铺 | `mbs pim instudio-pms-get-shop-site-by-first-category` | - |
| 获取sku尺码颜色：获取sku尺码颜色 | `mbs pim instudio-pms-get-sku-img-color-size-tiktok-singlepublish-global-controller` | - |
| 品牌列表：品牌列表 | `mbs pim instudio-pms-get-template-category-attributes` | `categoryId` |
| 获取推荐类目：获取推荐类目 | `mbs pim instudio-pms-get-tiktok-category-recommend` | - |
| 保存刊登信息：保存刊登信息 | `mbs pim instudio-pms-get-tiktok-singlepublish-list-info-list-tiktok-singlepublish-global-controller` | - |
| 获取刊登明细：获取刊登明细 | `mbs pim instudio-pms-get-tiktok-singlepublish-result-tiktok-singlepublish-global-controller` | - |
| 获取tk一级类目：获取tk一级类目 | `mbs pim instudio-pms-get-tk-first-category` | - |
| 查询仓库：查询仓库(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-warehouse` | - |
| 获取仓库：获取仓库 | `mbs pim instudio-pms-find-manage-employee-names-tiktok-singlepublish-local-controller` | - |
| 获取分类属性：获取分类属性 | `mbs pim instudio-pms-get-category-info-data-tiktok-singlepublish-local-controller` | - |
| 获取分类规则：获取分类规则 | `mbs pim instudio-pms-get-category-rules-tiktok-singlepublish-local-controller` | - |
| 获取刊登明细：获取刊登明细 | `mbs pim instudio-pms-get-product-pics-tiktok-singlepublish-local-controller` | - |
| 查找店铺：查找店铺 | `mbs pim instudio-pms-get-shop-by-pt-tiktok-singlepublish-local-controller` | - |
| 获取sku尺码颜色：获取sku尺码颜色 | `mbs pim instudio-pms-get-sku-img-color-size-tiktok-singlepublish-local-controller` | - |
| 获取仓库：获取仓库 | `mbs pim instudio-pms-get-tiktok-local-warehouse-record` | - |
| 保存刊登信息：保存刊登信息 | `mbs pim instudio-pms-get-tiktok-singlepublish-list-info-list-tiktok-singlepublish-local-controller` | - |
| 获取刊登明细：获取刊登明细 | `mbs pim instudio-pms-get-tiktok-singlepublish-result-tiktok-singlepublish-local-controller` | - |
| 运送时间：运送时间 | `mbs pim instudio-pms-find-transportation-time` | - |
| 查询可刊登店铺：查询可刊登店铺 | `mbs pim instudio-pms-find-publish-shop-auto` | - |
| 获取自动刊登任务信息(CA)：获取自动刊登任务信息(CA) | `mbs pim instudio-pms-id-auto-get-caauto-walmart-publish-confirm` | `id` |
| 查询导出沃尔玛店铺：查询导出沃尔玛店铺(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-export-walmart-shop` | - |
| 拦截关键词/SKU 操作日志分页查询：拦截关键词/SKU 操作日志分页查询 | `mbs pim instudio-pms-get-intercept-log-list` | - |
| 获取刊登店铺列表：获取刊登店铺列表 | `mbs pim instudio-pms-get-publish-shop-list` | - |
| 获取walmart刊登任务列表：获取walmart刊登任务列表 | `mbs pim instudio-pms-get-walmart-publish-confirm-list-auto` | - |
| 获取刊登任务信息：获取刊登任务信息 | `mbs pim instudio-pms-id-auto-get-walmart-publish-confirm-new` | `id` |
| 获取walmart店铺下拉：获取walmart店铺下拉 | `mbs pim instudio-pms-get-walmart-shop-list` | - |
| 获取刊登店铺列表：获取刊登店铺列表 | `mbs pim instudio-pms-get-walmart-task-list` | - |
| walmart刊登禁售词校验：walmart刊登禁售词校验 | `mbs pim instudio-pms-check-walmart-forbid-word` | - |
| 获取刊登任务信息(CA)：获取刊登任务信息(CA) | `mbs pim instudio-pms-id-walmart-get-cawalmart-publish-confirm` | `id` |
| 根据选择的变体属性值, 获取对应的字段配置信息：根据选择的变体属性值, 获取对应的字段配置信息 | `mbs pim instudio-pms-get-field-config` | - |
| 根据选择的变体属性值, 获取对应的字段配置信息(最新)：根据选择的变体属性值, 获取对应的字段配置信息(最新) | `mbs pim instudio-pms-get-field-config-v3` | - |
| 获取图片：获取图片 | `mbs pim instudio-pms-get-spu-image-walmart` | - |
| 获取walmart刊登分类(模糊查询)：获取walmart刊登分类(模糊查询) | `mbs pim instudio-pms-get-walmart-category-list` | - |
| 获取color和size：获取color和size | `mbs pim instudio-pms-spu-get-walmart-color-and-size` | `spu` |
| 获取walmart刊登分类：获取walmart刊登分类 | `mbs pim instudio-pms-get-walmart-publish-category` | - |
| 获取walmart刊登分类(新)：获取walmart刊登分类(新) | `mbs pim instudio-pms-get-walmart-publish-category-new` | - |
| 获取walmart刊登分类路径(模糊查询)：获取walmart刊登分类路径(模糊查询) | `mbs pim instudio-pms-get-walmart-publish-category-path` | - |
| 获取walmart刊登任务列表：获取walmart刊登任务列表 | `mbs pim instudio-pms-get-walmart-publish-confirm-list-walmart` | - |
| 获取walmart刊登任务列表(最新)：获取walmart刊登任务列表(最新) | `mbs pim instudio-pms-get-walmart-publish-confirm-list-v3` | - |
| 获取刊登任务信息(新)：获取刊登任务信息(新) | `mbs pim instudio-pms-id-walmart-get-walmart-publish-confirm-new` | `id` |
| 获取刊登任务信息(最新)：获取刊登任务信息(最新) | `mbs pim instudio-pms-id-walmart-get-walmart-publish-confirm-v3` | `id` |
| 获取刊登任务信息：获取刊登任务信息 | `mbs pim instudio-pms-id-walmart-get-walmart-publish-confirm` | `id` |
| 获取walmart刊登店铺：获取walmart刊登店铺 | `mbs pim instudio-pms-get-walmart-publish-shop` | - |
| 导出walmart刊登SKU：导出walmart刊登SKU | `mbs pim instudio-pms-export-sku` | - |
| 获取warehouserreceive信息：获取warehouserreceive信息 | `mbs pim instudio-pms-find-warehouse-receive` | `warehousId` |
| 查询House：查询House(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-house` | - |
| 查询HousePostiton：查询HousePostiton(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-house-positon` | `index`, `warehouseId` |
| 查询收货：查询收货(源码无注释,按方法名推断) | `mbs pim instudio-pms-find-receive` | `warehouseId` |
| 模糊查询wish属性值：模糊查询wish属性值 | `mbs pim instudio-pms-get-attributes-by-type` | `type` |
| 国家运费设置：国家运费设置 | `mbs pim instudio-pms-get-country-shipping` | `id` |
| 获取套图：获取套图 | `mbs pim instudio-pms-get-main-pics-by-spu-style-wish-publish-info` | - |
| 获取套图：获取套图 | `mbs pim instudio-pms-get-pic-infos-by-pic-style-wish-publish-info` | - |
| 获取到售价：获取到售价 | `mbs pim instudio-pms-get-sell-price-by-sku` | `spu`, `grossProfitRate`, `logisticsName` |
| 获取sku信息：获取sku信息 | `mbs pim instudio-pms-get-spu-info` | `publishId` |
| 预览操作：预览操作 | `mbs pim instudio-pms-preview` | `publishIds` |
| 处理侵权词：处理侵权词 | `mbs pim instudio-pms-tort-data` | `str` |
| 查询刊登店铺统计：查询刊登店铺统计 | `mbs pim instudio-pms-find-publish-shop-yandex-auto-publish` | - |
| 获取yandex刊登任务列表：获取yandex刊登任务列表 | `mbs pim instudio-pms-get-yandex-publish-confirm-list` | - |
| 获取刊登任务信息：获取刊登任务信息 | `mbs pim instudio-pms-id-yandex-auto-publish-get-yandex-publish-confirm` | `id` |
| 获取yandex刊登店铺列表：获取yandex刊登店铺列表 | `mbs pim instudio-pms-get-yandex-publish-shop-yandex-auto-publish` | - |
| 获取提交刊登任务列表：获取提交刊登任务列表 | `mbs pim instudio-pms-get-yandex-task-list` | - |
| 查询类目Chain：查询类目Chain(源码无注释,按方法名推断) | `mbs pim instudio-pms-category-id-get-category-chain` | `categoryId` |
| 查询类目列表：查询类目列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-get-category-list-yandex-basic-date` | - |
| 查询类目列表：查询类目列表(源码无注释,按方法名推断) | `mbs pim instudio-pms-parent-cat-id-get-category-list` | - |
| 获取分类下拉：获取分类下拉 | `mbs pim instudio-pms-get-category-select-yandex-basic-date` | - |
| 根据属性获取对应值：根据属性获取对应值 | `mbs pim instudio-pms-get-characteristic-option` | - |
| 获取刊登任务信息：获取刊登任务信息 | `mbs pim instudio-pms-id-yandex-publish-get-yandex-publish-confirm` | `id` |
| 获取yandex刊登任务列表：获取yandex刊登任务列表 | `mbs pim instudio-pms-get-yandex-publish-request-list` | - |
| 获取yandex刊登店铺列表：获取yandex刊登店铺列表 | `mbs pim instudio-pms-get-yandex-publish-shop-yandex-publish` | `shopType` |
| yandex店铺配置列表：yandex店铺配置列表 | `mbs pim instudio-pms-get-yandex-shop-config` | - |

## 命令详情

- [erp-product-get-amazon-category.md](erp-product-get-amazon-category.md)
- [erp-product-site.md](erp-product-site.md)
- [erp-product-groupid.md](erp-product-groupid.md)
- [erp-product-get-shop-configure-by-shop-id.md](erp-product-get-shop-configure-by-shop-id.md)
- [erp-product-shop-id.md](erp-product-shop-id.md)
- [erp-product-get-develop-list.md](erp-product-get-develop-list.md)
- [erp-product-fba-inventory-kx-sku.md](erp-product-fba-inventory-kx-sku.md)
- [erp-product-get-hwc-list.md](erp-product-get-hwc-list.md)
- [erp-product-sid.md](erp-product-sid.md)
- [erp-product-get-big-cheif-by-shop-name.md](erp-product-get-big-cheif-by-shop-name.md)
- [erp-product-get-big-cheif-by-spu.md](erp-product-get-big-cheif-by-spu.md)
- [erp-product-get-sku-recommender.md](erp-product-get-sku-recommender.md)
- [erp-product-find-extend-sku.md](erp-product-find-extend-sku.md)
- [erp-product-get-product-info-by-sku.md](erp-product-get-product-info-by-sku.md)
- [erp-product-get-sku-day-sold.md](erp-product-get-sku-day-sold.md)
- [erp-product-get-sku-warehouse.md](erp-product-get-sku-warehouse.md)
- [erp-product-get-transit-warehouse.md](erp-product-get-transit-warehouse.md)
- [erp-product-get-emp-by-dep2.md](erp-product-get-emp-by-dep2.md)
- [erp-product-get-emp-by-dep3.md](erp-product-get-emp-by-dep3.md)
- [erp-product-hwc-type.md](erp-product-hwc-type.md)
- [erp-product-get-hwc-type.md](erp-product-get-hwc-type.md)
- [erp-product-sku-suffix.md](erp-product-sku-suffix.md)
- [erp-product-sku.md](erp-product-sku.md)
- [erp-product-get-spu-sales-status.md](erp-product-get-spu-sales-status.md)
- [erp-product-get-storagebinflag.md](erp-product-get-storagebinflag.md)
- [erp-product-get-untreated-num.md](erp-product-get-untreated-num.md)
- [erp-product-leader-option.md](erp-product-leader-option.md)
- [erp-product-sku-refundrate-return-package.md](erp-product-sku-refundrate-return-package.md)
- [erp-product-storage-option.md](erp-product-storage-option.md)
- [erp-product-get.md](erp-product-get.md)
- [erp-product-find-shopee-logo.md](erp-product-find-shopee-logo.md)
- [erp-product-get-sku-package-create-oper.md](erp-product-get-sku-package-create-oper.md)
- [erp-product-get-warehouse-info.md](erp-product-get-warehouse-info.md)
- [erp-product-shop-manager-drop-down.md](erp-product-shop-manager-drop-down.md)
- [erp-product-get-employee-category.md](erp-product-get-employee-category.md)
- [erp-product-get-one-two-categories.md](erp-product-get-one-two-categories.md)
- [erp-product-get-other-categories.md](erp-product-get-other-categories.md)
- [erp-product-get-employee-oversea-storage-list.md](erp-product-get-employee-oversea-storage-list.md)
- [ozon-product-service-id.md](ozon-product-service-id.md)
- [product-imageditor-service-id.md](product-imageditor-service-id.md)
- [erp-product-check-batch-modify-price.md](erp-product-check-batch-modify-price.md)
- [erp-product-find-publish-shop-amazon-product-publish.md](erp-product-find-publish-shop-amazon-product-publish.md)
- [erp-product-get-amazon-auto-publish-confirm-list.md](erp-product-get-amazon-auto-publish-confirm-list.md)
- [erp-product-get-amazon-auto-publish-info-by-shop-id-and-erp-sku.md](erp-product-get-amazon-auto-publish-info-by-shop-id-and-erp-sku.md)
- [erp-product-get-amazon-category-by-site-and-product-type.md](erp-product-get-amazon-category-by-site-and-product-type.md)
- [erp-product-get-amazon-publish-variation-theme.md](erp-product-get-amazon-publish-variation-theme.md)
- [erp-product-get-images.md](erp-product-get-images.md)
- [erp-product-get-need-upc-number.md](erp-product-get-need-upc-number.md)
- [erp-product-get-product-type-tab.md](erp-product-get-product-type-tab.md)
- [erp-product-get-publish-status-number-by-shop-id.md](erp-product-get-publish-status-number-by-shop-id.md)
- [erp-product-intercept-log.md](erp-product-intercept-log.md)
- [erp-product-assemble-attributes-detail.md](erp-product-assemble-attributes-detail.md)
- [erp-product-find-category-list-by-parent-id.md](erp-product-find-category-list-by-parent-id.md)
- [erp-product-get-category-by-id.md](erp-product-get-category-by-id.md)
- [erp-product-get-category-list.md](erp-product-get-category-list.md)
- [erp-product-get-category-select.md](erp-product-get-category-select.md)
- [erp-product-find-ebay-autopublish-spu.md](erp-product-find-ebay-autopublish-spu.md)
- [erp-product-find-publish-detail-by-shopname-ebay-product-controller.md](erp-product-find-publish-detail-by-shopname-ebay-product-controller.md)
- [erp-product-find-publish-shop-ebay-product-controller.md](erp-product-find-publish-shop-ebay-product-controller.md)
- [erp-product-find-shop-param-by-shopname-ebay-product-controller.md](erp-product-find-shop-param-by-shopname-ebay-product-controller.md)
- [erp-product-list-ez-buy-publish.md](erp-product-list-ez-buy-publish.md)
- [erp-product-list-ez-buy-shop.md](erp-product-list-ez-buy-shop.md)
- [erp-product-batch-list-fba.md](erp-product-batch-list-fba.md)
- [erp-product-check-tracking-list-fba.md](erp-product-check-tracking-list-fba.md)
- [erp-product-fba-inventory-kx.md](erp-product-fba-inventory-kx.md)
- [erp-product-tracking-list-fba-details.md](erp-product-tracking-list-fba-details.md)
- [erp-product-get-feed-back-by-spu.md](erp-product-get-feed-back-by-spu.md)
- [erp-product-list-fyndiq-publish.md](erp-product-list-fyndiq-publish.md)
- [erp-product-list-fyndiq-shop.md](erp-product-list-fyndiq-shop.md)
- [erp-product-check-tracking-listhwc.md](erp-product-check-tracking-listhwc.md)
- [erp-product-export-hwc-list.md](erp-product-export-hwc-list.md)
- [erp-product-hwc-inventory-kx.md](erp-product-hwc-inventory-kx.md)
- [erp-product-tracking-list-hwc-details.md](erp-product-tracking-list-hwc-details.md)
- [erp-product-tracking-list-hwc-list.md](erp-product-tracking-list-hwc-list.md)
- [erp-product-page-spu.md](erp-product-page-spu.md)
- [erp-product-export-distribution.md](erp-product-export-distribution.md)
- [erp-product-poor-sku-list.md](erp-product-poor-sku-list.md)
- [erp-product-poor-sku-pie-list.md](erp-product-poor-sku-pie-list.md)
- [erp-product-rule-list.md](erp-product-rule-list.md)
- [erp-product-export-registration-list.md](erp-product-export-registration-list.md)
- [erp-product-get-registration-list.md](erp-product-get-registration-list.md)
- [erp-product-get-emp-id-by-emp-name.md](erp-product-get-emp-id-by-emp-name.md)
- [erp-product-find-lazada-autopublish-spu.md](erp-product-find-lazada-autopublish-spu.md)
- [erp-product-find-publish-detail-by-shopname-lazada-autopublish-controller.md](erp-product-find-publish-detail-by-shopname-lazada-autopublish-controller.md)
- [erp-product-find-publish-shop-lazada-autopublish-controller.md](erp-product-find-publish-shop-lazada-autopublish-controller.md)
- [erp-product-find-shop-param-by-shopname-lazada-autopublish-controller.md](erp-product-find-shop-param-by-shopname-lazada-autopublish-controller.md)
- [erp-product-find-lazada-disabled-confirm.md](erp-product-find-lazada-disabled-confirm.md)
- [erp-product-find-lazada-itemid.md](erp-product-find-lazada-itemid.md)
- [erp-product-find-lazada-publish-confirm.md](erp-product-find-lazada-publish-confirm.md)
- [erp-product-find-lazada-shop.md](erp-product-find-lazada-shop.md)
- [erp-product-find-manage-employee-names.md](erp-product-find-manage-employee-names.md)
- [erp-product-find-manage-shop.md](erp-product-find-manage-shop.md)
- [erp-product-get-publish-detail-info.md](erp-product-get-publish-detail-info.md)
- [erp-product-list-have-published-shop-lazada-publish.md](erp-product-list-have-published-shop-lazada-publish.md)
- [erp-product-list-product-by-listing-lazada-publish.md](erp-product-list-product-by-listing-lazada-publish.md)
- [erp-product-list-publish-shop-lazada-publish.md](erp-product-list-publish-shop-lazada-publish.md)
- [erp-product-list-relisting-details-lazada-publish.md](erp-product-list-relisting-details-lazada-publish.md)
- [erp-product-list-relisting-results-lazada-publish.md](erp-product-list-relisting-results-lazada-publish.md)
- [erp-product-list-un-publish-shop.md](erp-product-list-un-publish-shop.md)
- [erp-product-find-listing.md](erp-product-find-listing.md)
- [erp-product-find-platform-listing-controller.md](erp-product-find-platform-listing-controller.md)
- [erp-product-find-reward-money.md](erp-product-find-reward-money.md)
- [erp-product-find-shopmanager.md](erp-product-find-shopmanager.md)
- [erp-product-find-shop-listing-controller.md](erp-product-find-shop-listing-controller.md)
- [erp-product-proposal-list.md](erp-product-proposal-list.md)
- [erp-product-ozon-publish-export-excel.md](erp-product-ozon-publish-export-excel.md)
- [erp-product-tort.md](erp-product-tort.md)
- [erp-product-product-claim-list.md](erp-product-product-claim-list.md)
- [erp-product-query-oper-list.md](erp-product-query-oper-list.md)
- [erp-product-clearance.md](erp-product-clearance.md)
- [erp-product-batch-query-product-costprice.md](erp-product-batch-query-product-costprice.md)
- [erp-product-check-spu-is-live.md](erp-product-check-spu-is-live.md)
- [erp-product-get-allleave-message.md](erp-product-get-allleave-message.md)
- [erp-product-get-competitor-spu.md](erp-product-get-competitor-spu.md)
- [erp-product-get-country-sales-info.md](erp-product-get-country-sales-info.md)
- [erp-product-get-is-sync-supply.md](erp-product-get-is-sync-supply.md)
- [erp-product-get-leave-message-sku.md](erp-product-get-leave-message-sku.md)
- [erp-product-get-leave-message-spu.md](erp-product-get-leave-message-spu.md)
- [erp-product-get-manufacture-sku.md](erp-product-get-manufacture-sku.md)
- [erp-product-get-manufacture-spu.md](erp-product-get-manufacture-spu.md)
- [erp-product-get-optimal-purchase.md](erp-product-get-optimal-purchase.md)
- [erp-product-get-order-sku.md](erp-product-get-order-sku.md)
- [erp-product-get-package-type.md](erp-product-get-package-type.md)
- [erp-product-get-packing.md](erp-product-get-packing.md)
- [erp-product-get-platform-sales-info.md](erp-product-get-platform-sales-info.md)
- [erp-product-get-product-attribute.md](erp-product-get-product-attribute.md)
- [erp-product-get-product-extend-sku.md](erp-product-get-product-extend-sku.md)
- [erp-product-get-product-info-sku.md](erp-product-get-product-info-sku.md)
- [erp-product-get-product-log-spu-or-sku.md](erp-product-get-product-log-spu-or-sku.md)
- [erp-product-get-product-sku.md](erp-product-get-product-sku.md)
- [erp-product-get-product-task-info-sku.md](erp-product-get-product-task-info-sku.md)
- [erp-product-get-product-tort.md](erp-product-get-product-tort.md)
- [erp-product-get-publish-info-sku-new.md](erp-product-get-publish-info-sku-new.md)
- [erp-product-get-publish-info-spu-new.md](erp-product-get-publish-info-spu-new.md)
- [erp-product-get-purchaseabnormal.md](erp-product-get-purchaseabnormal.md)
- [erp-product-get-purchase-bysku.md](erp-product-get-purchase-bysku.md)
- [erp-product-get-purchase-sku2.md](erp-product-get-purchase-sku2.md)
- [erp-product-get-purchase-sku.md](erp-product-get-purchase-sku.md)
- [erp-product-get-site-by-platform.md](erp-product-get-site-by-platform.md)
- [erp-product-get-sku-images.md](erp-product-get-sku-images.md)
- [erp-product-get-sku-mapping-by-sku-and-warehouse.md](erp-product-get-sku-mapping-by-sku-and-warehouse.md)
- [erp-product-get-spu-country-sales-info-new.md](erp-product-get-spu-country-sales-info-new.md)
- [erp-product-get-spu-country-sales-info.md](erp-product-get-spu-country-sales-info.md)
- [erp-product-get-spu-images.md](erp-product-get-spu-images.md)
- [erp-product-get-spu-platform-sales-info.md](erp-product-get-spu-platform-sales-info.md)
- [erp-product-get-standard-product-unit.md](erp-product-get-standard-product-unit.md)
- [erp-product-get-xn-sku-savenum.md](erp-product-get-xn-sku-savenum.md)
- [erp-product-listing-country-platform-sale-info.md](erp-product-listing-country-platform-sale-info.md)
- [erp-product-picture-search-product-by-url.md](erp-product-picture-search-product-by-url.md)
- [erp-product-page-product-must-task.md](erp-product-page-product-must-task.md)
- [erp-product-sku-country-platform-sale-info.md](erp-product-sku-country-platform-sale-info.md)
- [erp-product-warehouse-type.md](erp-product-warehouse-type.md)
- [erp-product-get-manufac-refund.md](erp-product-get-manufac-refund.md)
- [erp-product-get-oper-reduce-price.md](erp-product-get-oper-reduce-price.md)
- [erp-product-get-product-reduce-price.md](erp-product-get-product-reduce-price.md)
- [erp-product-forbid-sku-list.md](erp-product-forbid-sku-list.md)
- [erp-product-list-product-by-listing-product-publish.md](erp-product-list-product-by-listing-product-publish.md)
- [erp-product-list-publish-shop-product-publish.md](erp-product-list-publish-shop-product-publish.md)
- [erp-product-query-employee-id.md](erp-product-query-employee-id.md)
- [erp-product-query-shop-bean-by-sale-leader.md](erp-product-query-shop-bean-by-sale-leader.md)
- [erp-product-find-shopee-category.md](erp-product-find-shopee-category.md)
- [erp-product-get-amazon-shop-by-id.md](erp-product-get-amazon-shop-by-id.md)
- [erp-product-get-country.md](erp-product-get-country.md)
- [erp-product-check-product-illeagal.md](erp-product-check-product-illeagal.md)
- [erp-product-filter-for-bid-platform-id.md](erp-product-filter-for-bid-platform-id.md)
- [erp-product-find-all-country.md](erp-product-find-all-country.md)
- [erp-product-find-platform-product.md](erp-product-find-platform-product.md)
- [erp-product-find-shop-product.md](erp-product-find-shop-product.md)
- [erp-product-find-spu-for-publish.md](erp-product-find-spu-for-publish.md)
- [erp-product-find-throw-info.md](erp-product-find-throw-info.md)
- [erp-product-get-add-position-name.md](erp-product-get-add-position-name.md)
- [erp-product-get-apply-for-stock-up-rule.md](erp-product-get-apply-for-stock-up-rule.md)
- [erp-product-get-city.md](erp-product-get-city.md)
- [erp-product-get-commissioner-by-id.md](erp-product-get-commissioner-by-id.md)
- [erp-product-get-emp-by-dep-list.md](erp-product-get-emp-by-dep-list.md)
- [erp-product-get-emp-by-dep.md](erp-product-get-emp-by-dep.md)
- [erp-product-get-high-refund.md](erp-product-get-high-refund.md)
- [erp-product-get-jing-li-zong-jian-ana-zong-jing-ban1.md](erp-product-get-jing-li-zong-jian-ana-zong-jing-ban1.md)
- [erp-product-get-jing-li-zong-jian.md](erp-product-get-jing-li-zong-jian.md)
- [erp-product-get-order-spu.md](erp-product-get-order-spu.md)
- [erp-product-get-primary-classification-dash-board.md](erp-product-get-primary-classification-dash-board.md)
- [erp-product-get-primary-classification.md](erp-product-get-primary-classification.md)
- [erp-product-get-product-illegal1.md](erp-product-get-product-illegal1.md)
- [erp-product-get-product-type.md](erp-product-get-product-type.md)
- [erp-product-get-purchase-limit-change-by-time.md](erp-product-get-purchase-limit-change-by-time.md)
- [erp-product-get-reclassify-by-cate-ids.md](erp-product-get-reclassify-by-cate-ids.md)
- [erp-product-get-reclassify-by-ids.md](erp-product-get-reclassify-by-ids.md)
- [erp-product-get-reclassify.md](erp-product-get-reclassify.md)
- [erp-product-get-risk-spu-white-shop-name.md](erp-product-get-risk-spu-white-shop-name.md)
- [erp-product-get-sale-num-by-sku1.md](erp-product-get-sale-num-by-sku1.md)
- [erp-product-add-content.md](erp-product-add-content.md)
- [erp-product-get-storage.md](erp-product-get-storage.md)
- [erp-product-get-white-shop-by-spu.md](erp-product-get-white-shop-by-spu.md)
- [erp-product-get-zong-jian-zong-jing-ban.md](erp-product-get-zong-jian-zong-jing-ban.md)
- [erp-product-get-zong-jing-ban-cai-wu.md](erp-product-get-zong-jing-ban-cai-wu.md)
- [erp-product-get-zong-jing-ban.md](erp-product-get-zong-jing-ban.md)
- [erp-product-product-info-for-export.md](erp-product-product-info-for-export.md)
- [erp-product-product-info.md](erp-product-product-info.md)
- [erp-product-page-query.md](erp-product-page-query.md)
- [erp-product-find-discount-confirm-must-do-list.md](erp-product-find-discount-confirm-must-do-list.md)
- [erp-product-querymust-refresh-change-image-info.md](erp-product-querymust-refresh-change-image-info.md)
- [erp-product-find-price-channel-by-site.md](erp-product-find-price-channel-by-site.md)
- [erp-product-find-shopee-disabled-confirm.md](erp-product-find-shopee-disabled-confirm.md)
- [erp-product-find-shopee-shop.md](erp-product-find-shopee-shop.md)
- [erp-product-find-shop-param-by-shopname-shopee-product-controller.md](erp-product-find-shop-param-by-shopname-shopee-product-controller.md)
- [erp-product-get-enabel-publish-shop-by-site.md](erp-product-get-enabel-publish-shop-by-site.md)
- [erp-product-get-relist-shops.md](erp-product-get-relist-shops.md)
- [erp-product-list-have-published-shop-shopee-product-publish.md](erp-product-list-have-published-shop-shopee-product-publish.md)
- [erp-product-list-product-by-listing-shopee-product-publish.md](erp-product-list-product-by-listing-shopee-product-publish.md)
- [erp-product-list-publish-shop-shopee-product-publish.md](erp-product-list-publish-shop-shopee-product-publish.md)
- [erp-product-list-relisting-details-shopee-product-publish.md](erp-product-list-relisting-details-shopee-product-publish.md)
- [erp-product-list-relisting-results-shopee-product-publish.md](erp-product-list-relisting-results-shopee-product-publish.md)
- [erp-product-preview-task.md](erp-product-preview-task.md)
- [erp-product-query-shopee-tort-words.md](erp-product-query-shopee-tort-words.md)
- [erp-product-find-shopee-unlist-confirm.md](erp-product-find-shopee-unlist-confirm.md)
- [erp-product-find-shopify-disabled-confirm.md](erp-product-find-shopify-disabled-confirm.md)
- [erp-product-find-shopify-shop.md](erp-product-find-shopify-shop.md)
- [erp-product-get-sku-package-info.md](erp-product-get-sku-package-info.md)
- [erp-product-find-smt-disabled-confirm.md](erp-product-find-smt-disabled-confirm.md)
- [erp-product-find-smt-shop.md](erp-product-find-smt-shop.md)
- [erp-product-find-publish-shop-yesterday.md](erp-product-find-publish-shop-yesterday.md)
- [erp-product-find-publish-shop-smt-product-controller.md](erp-product-find-publish-shop-smt-product-controller.md)
- [erp-product-find-ship-to-by-id-onekey.md](erp-product-find-ship-to-by-id-onekey.md)
- [erp-product-find-shop-by-pt.md](erp-product-find-shop-by-pt.md)
- [erp-product-find-shop-param-by-shopname-smt-product-controller.md](erp-product-find-shop-param-by-shopname-smt-product-controller.md)
- [erp-product-find-smt-autopublish-spu.md](erp-product-find-smt-autopublish-spu.md)
- [erp-product-find-smt-price-confirm-onekey.md](erp-product-find-smt-price-confirm-onekey.md)
- [erp-product-find-smt-price-country2.md](erp-product-find-smt-price-country2.md)
- [erp-product-get-smt-group-counfiguration.md](erp-product-get-smt-group-counfiguration.md)
- [erp-product-smt-fail-prop-get-for-write.md](erp-product-smt-fail-prop-get-for-write.md)
- [erp-product-get-all-must-publish-spu.md](erp-product-get-all-must-publish-spu.md)
- [erp-product-get-shop-by-group.md](erp-product-get-shop-by-group.md)
- [erp-product-get-url.md](erp-product-get-url.md)
- [erp-product-list-product-by-listing-tiktok-product-publish.md](erp-product-list-product-by-listing-tiktok-product-publish.md)
- [erp-product-query-tiktok-tort-words.md](erp-product-query-tiktok-tort-words.md)
- [erp-product-get-login-wish-shop.md](erp-product-get-login-wish-shop.md)
- [erp-product-get-wish-rating-results.md](erp-product-get-wish-rating-results.md)
- [erp-product-get-all-resolutions.md](erp-product-get-all-resolutions.md)
- [erp-product-product-info-for-new-edtion.md](erp-product-product-info-for-new-edtion.md)
- [instudio-pms-emp-info-list.md](instudio-pms-emp-info-list.md)
- [instudio-pms-get-all-auditor.md](instudio-pms-get-all-auditor.md)
- [instudio-pms-get-category-art.md](instudio-pms-get-category-art.md)
- [instudio-pms-get-category-art-new.md](instudio-pms-get-category-art-new.md)
- [instudio-pms-get-first-category.md](instudio-pms-get-first-category.md)
- [instudio-pms-get-little-leader-by-team.md](instudio-pms-get-little-leader-by-team.md)
- [instudio-pms-get-picture-type.md](instudio-pms-get-picture-type.md)
- [instudio-pms-get-qi-yuan-auditor.md](instudio-pms-get-qi-yuan-auditor.md)
- [instudio-pms-unique-id.md](instudio-pms-unique-id.md)
- [instudio-pms-list-batch.md](instudio-pms-list-batch.md)
- [instudio-pms-collection-data.md](instudio-pms-collection-data.md)
- [instudio-pms-shop-name.md](instudio-pms-shop-name.md)
- [instudio-pms-get-amazon-excel-template.md](instudio-pms-get-amazon-excel-template.md)
- [instudio-pms-id-amazon-get-amazon-info.md](instudio-pms-id-amazon-get-amazon-info.md)
- [instudio-pms-get-amazon-product-type.md](instudio-pms-get-amazon-product-type.md)
- [instudio-pms-get-amazon-saler.md](instudio-pms-get-amazon-saler.md)
- [instudio-pms-get-amazon-shop.md](instudio-pms-get-amazon-shop.md)
- [instudio-pms-get-field.md](instudio-pms-get-field.md)
- [instudio-pms-get-main-category.md](instudio-pms-get-main-category.md)
- [instudio-pms-get-pricing-channel-amazon.md](instudio-pms-get-pricing-channel-amazon.md)
- [instudio-pms-id-new-get-amazon-info.md](instudio-pms-id-new-get-amazon-info.md)
- [instudio-pms-get-product-type.md](instudio-pms-get-product-type.md)
- [instudio-pms-get-product-type-info.md](instudio-pms-get-product-type-info.md)
- [instudio-pms-get-schema-by-product-type.md](instudio-pms-get-schema-by-product-type.md)
- [instudio-pms-get-schema-by-request-id.md](instudio-pms-get-schema-by-request-id.md)
- [instudio-pms-get-schema-path-complete.md](instudio-pms-get-schema-path-complete.md)
- [instudio-pms-query-product-type-list.md](instudio-pms-query-product-type-list.md)
- [instudio-pms-site.md](instudio-pms-site.md)
- [instudio-pms-id-amazon-template.md](instudio-pms-id-amazon-template.md)
- [instudio-pms-id-api-sya-mabang-notice-content.md](instudio-pms-id-api-sya-mabang-notice-content.md)
- [instudio-pms-id-api-sys-mabang-notice.md](instudio-pms-id-api-sys-mabang-notice.md)
- [instudio-pms-id-banned-get-banned-by-id.md](instudio-pms-id-banned-get-banned-by-id.md)
- [instudio-pms-find-brand-name.md](instudio-pms-find-brand-name.md)
- [instudio-pms-get-all-shop-list.md](instudio-pms-get-all-shop-list.md)
- [instudio-pms-id-brand-get-brand-image-by-id.md](instudio-pms-id-brand-get-brand-image-by-id.md)
- [instudio-pms-id-brand-get-brand-platform-id-by-id.md](instudio-pms-id-brand-get-brand-platform-id-by-id.md)
- [instudio-pms-platform-id.md](instudio-pms-platform-id.md)
- [instudio-pms-category-id-get-category-info.md](instudio-pms-category-id-get-category-info.md)
- [instudio-pms-spu-get-spu-certification.md](instudio-pms-spu-get-spu-certification.md)
- [instudio-pms-list-image.md](instudio-pms-list-image.md)
- [instudio-pms-export-customer-service-date.md](instudio-pms-export-customer-service-date.md)
- [instudio-pms-spu-product-scene-spell.md](instudio-pms-spu-product-scene-spell.md)
- [instudio-pms-dept-id.md](instudio-pms-dept-id.md)
- [instudio-pms-get-is-purchase-by-spu.md](instudio-pms-get-is-purchase-by-spu.md)
- [instudio-pms-spu-get-spu-cut-cost-info.md](instudio-pms-spu-get-spu-cut-cost-info.md)
- [instudio-pms-is-show-sell-by-team-and-check-status.md](instudio-pms-is-show-sell-by-team-and-check-status.md)
- [instudio-pms-keyword-aitemplate-enmus.md](instudio-pms-keyword-aitemplate-enmus.md)
- [instudio-pms-id-development-project-development-project-export.md](instudio-pms-id-development-project-development-project-export.md)
- [instudio-pms-export-development-project.md](instudio-pms-export-development-project.md)
- [instudio-pms-get-spu-country-amount.md](instudio-pms-get-spu-country-amount.md)
- [instudio-pms-get-spu-country-sales.md](instudio-pms-get-spu-country-sales.md)
- [instudio-pms-get-spu-plat-amount.md](instudio-pms-get-spu-plat-amount.md)
- [instudio-pms-get-spu-plat-profit.md](instudio-pms-get-spu-plat-profit.md)
- [instudio-pms-get-spu-plat-sales.md](instudio-pms-get-spu-plat-sales.md)
- [instudio-pms-get-spu-pushlish.md](instudio-pms-get-spu-pushlish.md)
- [instudio-pms-get-spu-sale-level.md](instudio-pms-get-spu-sale-level.md)
- [instudio-pms-find-item-specifics-by-category-id2.md](instudio-pms-find-item-specifics-by-category-id2.md)
- [instudio-pms-get-infringe-ment-sku.md](instudio-pms-get-infringe-ment-sku.md)
- [instudio-pms-query-follow-list.md](instudio-pms-query-follow-list.md)
- [instudio-pms-find-shopee-all-site.md](instudio-pms-find-shopee-all-site.md)
- [instudio-pms-manufacture.md](instudio-pms-manufacture.md)
- [instudio-pms-get-channel-category.md](instudio-pms-get-channel-category.md)
- [instudio-pms-request-id-get-publish-request-info.md](instudio-pms-request-id-get-publish-request-info.md)
- [instudio-pms-saler.md](instudio-pms-saler.md)
- [instudio-pms-get-performance.md](instudio-pms-get-performance.md)
- [instudio-pms-get-freight-template.md](instudio-pms-get-freight-template.md)
- [instudio-pms-get-middle-field-explain.md](instudio-pms-get-middle-field-explain.md)
- [instudio-pms-get-middle-panel-shop-detail.md](instudio-pms-get-middle-panel-shop-detail.md)
- [instudio-pms-id-get-notification-info-platform.md](instudio-pms-id-get-notification-info-platform.md)
- [instudio-pms-judge-loginer.md](instudio-pms-judge-loginer.md)
- [instudio-pms-get-num.md](instudio-pms-get-num.md)
- [instudio-pms-get-fixed-copy-shop.md](instudio-pms-get-fixed-copy-shop.md)
- [instudio-pms-id-pms-ozon-template.md](instudio-pms-id-pms-ozon-template.md)
- [instudio-pms-latest-id.md](instudio-pms-latest-id.md)
- [instudio-pms-query-distinct-create-oper.md](instudio-pms-query-distinct-create-oper.md)
- [instudio-pms-create-time-from.md](instudio-pms-create-time-from.md)
- [instudio-pms-spu-str.md](instudio-pms-spu-str.md)
- [instudio-pms-enums.md](instudio-pms-enums.md)
- [instudio-pms-get-develop-type-product-image.md](instudio-pms-get-develop-type-product-image.md)
- [instudio-pms-get-img-product-by-reference-url.md](instudio-pms-get-img-product-by-reference-url.md)
- [instudio-pms-spu-query-purcahse-group-by-spu.md](instudio-pms-spu-query-purcahse-group-by-spu.md)
- [instudio-pms-get-sku-info-by-spu.md](instudio-pms-get-sku-info-by-spu.md)
- [instudio-pms-get-spu-purchase.md](instudio-pms-get-spu-purchase.md)
- [instudio-pms-category-id-get-category-attribute-list-customize.md](instudio-pms-category-id-get-category-attribute-list-customize.md)
- [instudio-pms-attribute-flag.md](instudio-pms-attribute-flag.md)
- [instudio-pms-get-product-picture-url-get.md](instudio-pms-get-product-picture-url-get.md)
- [instudio-pms-get-product-picture-url-lazada.md](instudio-pms-get-product-picture-url-lazada.md)
- [instudio-pms-packaging-list.md](instudio-pms-packaging-list.md)
- [instudio-pms-get-project-list-project-relation.md](instudio-pms-get-project-list-project-relation.md)
- [instudio-pms-type-get-sale-export-list.md](instudio-pms-type-get-sale-export-list.md)
- [instudio-pms-first-category.md](instudio-pms-first-category.md)
- [instudio-pms-second-category.md](instudio-pms-second-category.md)
- [instudio-pms-sku-oper.md](instudio-pms-sku-oper.md)
- [instudio-pms-get-platform-rate-by-category-id.md](instudio-pms-get-platform-rate-by-category-id.md)
- [instudio-pms-get-sku-categorization-info.md](instudio-pms-get-sku-categorization-info.md)
- [instudio-pms-spu-test.md](instudio-pms-spu-test.md)
- [instudio-pms-find-site-by-mabang-id.md](instudio-pms-find-site-by-mabang-id.md)
- [instudio-pms-spu-get-banned-content.md](instudio-pms-spu-get-banned-content.md)
- [instudio-pms-get-check-emp.md](instudio-pms-get-check-emp.md)
- [instudio-pms-spu-get-ebay-notes.md](instudio-pms-spu-get-ebay-notes.md)
- [instudio-pms-position-id.md](instudio-pms-position-id.md)
- [instudio-pms-get-no-pass-detail.md](instudio-pms-get-no-pass-detail.md)
- [instudio-pms-get-pms-picture-by-spu.md](instudio-pms-get-pms-picture-by-spu.md)
- [instudio-pms-get-position-by-oper.md](instudio-pms-get-position-by-oper.md)
- [instudio-pms-get-sku-list-by-spu.md](instudio-pms-get-sku-list-by-spu.md)
- [instudio-pms-spu-get-spu-check-is-tort.md](instudio-pms-spu-get-spu-check-is-tort.md)
- [instudio-pms-evaluation-grade.md](instudio-pms-evaluation-grade.md)
- [instudio-pms-get-spu-mustrefresh.md](instudio-pms-get-spu-mustrefresh.md)
- [instudio-pms-spu-get-spu-publish-info.md](instudio-pms-spu-get-spu-publish-info.md)
- [instudio-pms-spu-get-spu-refuse.md](instudio-pms-spu-get-spu-refuse.md)
- [instudio-pms-spu-get-submit-banned-content1.md](instudio-pms-spu-get-submit-banned-content1.md)
- [instudio-pms-spu-get-submit-banned-content.md](instudio-pms-spu-get-submit-banned-content.md)
- [instudio-pms-is-show-update.md](instudio-pms-is-show-update.md)
- [instudio-pms-is-show-update-time.md](instudio-pms-is-show-update-time.md)
- [instudio-pms-query-development-team.md](instudio-pms-query-development-team.md)
- [instudio-pms-find-amzpicture-by-spu-new.md](instudio-pms-find-amzpicture-by-spu-new.md)
- [instudio-pms-find-dcpicture-by-spu.md](instudio-pms-find-dcpicture-by-spu.md)
- [instudio-pms-find-ebay-skupicture-by-spu.md](instudio-pms-find-ebay-skupicture-by-spu.md)
- [instudio-pms-find-size-picture-by-spu.md](instudio-pms-find-size-picture-by-spu.md)
- [instudio-pms-find-smtpicture-by-spu.md](instudio-pms-find-smtpicture-by-spu.md)
- [instudio-pms-find-smtpicture-by-spu-new.md](instudio-pms-find-smtpicture-by-spu-new.md)
- [instudio-pms-find-smt-product-manual-by-spu.md](instudio-pms-find-smt-product-manual-by-spu.md)
- [instudio-pms-find-vtpicture-by-spu.md](instudio-pms-find-vtpicture-by-spu.md)
- [instudio-pms-get-spu-log-by-spu.md](instudio-pms-get-spu-log-by-spu.md)
- [instudio-pms-get-reason-cat-list.md](instudio-pms-get-reason-cat-list.md)
- [instudio-pms-get-supply-pool-sku-detail-by-sku.md](instudio-pms-get-supply-pool-sku-detail-by-sku.md)
- [instudio-pms-get-supply-pool-spu-detail-by-spu.md](instudio-pms-get-supply-pool-spu-detail-by-spu.md)
- [instudio-pms-get-all-brand-list.md](instudio-pms-get-all-brand-list.md)
- [instudio-pms-get-question-format.md](instudio-pms-get-question-format.md)
- [instudio-pms-get-tik-tok-category-rules.md](instudio-pms-get-tik-tok-category-rules.md)
- [instudio-pms-get-tiktok-local-shop.md](instudio-pms-get-tiktok-local-shop.md)
- [instudio-pms-item-id.md](instudio-pms-item-id.md)
- [instudio-pms-id-tiktok-singlepublish-local-edit-controller-get-edit-info.md](instudio-pms-id-tiktok-singlepublish-local-edit-controller-get-edit-info.md)
- [instudio-pms-by-spu.md](instudio-pms-by-spu.md)
- [instudio-pms-request-id-get-condition-required-info-v3.md](instudio-pms-request-id-get-condition-required-info-v3.md)
- [instudio-pms-request-id-get-condition-required-info.md](instudio-pms-request-id-get-condition-required-info.md)
- [instudio-pms-get-pricing-channel-walmart.md](instudio-pms-get-pricing-channel-walmart.md)
- [instudio-pms-get-walmart-saler.md](instudio-pms-get-walmart-saler.md)
- [instudio-pms-get-accepted-colors.md](instudio-pms-get-accepted-colors.md)
- [instudio-pms-get-wish-warehouses-info.md](instudio-pms-get-wish-warehouses-info.md)
- [instudio-pms-category-id-get-category-characteristics.md](instudio-pms-category-id-get-category-characteristics.md)
- [instudio-pms-get-yandex-sales.md](instudio-pms-get-yandex-sales.md)
- [instudio-pms-shop-id.md](instudio-pms-shop-id.md)
- [instudio-pms-find-manage-employee-names-aliexpress-choice-single-publish-controller.md](instudio-pms-find-manage-employee-names-aliexpress-choice-single-publish-controller.md)
- [instudio-pms-get-aliexpress-category-props.md](instudio-pms-get-aliexpress-category-props.md)
- [instudio-pms-get-aliexpress-category-qualifications.md](instudio-pms-get-aliexpress-category-qualifications.md)
- [instudio-pms-get-aliexpress-choice-product-warehouse-list.md](instudio-pms-get-aliexpress-choice-product-warehouse-list.md)
- [instudio-pms-get-aliexpress-choice-single-publish-info.md](instudio-pms-get-aliexpress-choice-single-publish-info.md)
- [instudio-pms-get-category-aliexpress-choice-single-publish-controller.md](instudio-pms-get-category-aliexpress-choice-single-publish-controller.md)
- [instudio-pms-get-category-list-aliexpress-choice-single-publish-controller.md](instudio-pms-get-category-list-aliexpress-choice-single-publish-controller.md)
- [instudio-pms-get-category-props.md](instudio-pms-get-category-props.md)
- [instudio-pms-get-shop-by-pt-aliexpress-choice-single-publish-controller.md](instudio-pms-get-shop-by-pt-aliexpress-choice-single-publish-controller.md)
- [instudio-pms-list-aliexpress-choice-single-publish-listing.md](instudio-pms-list-aliexpress-choice-single-publish-listing.md)
- [instudio-pms-vague-search-category.md](instudio-pms-vague-search-category.md)
- [instudio-pms-find-publish-shop-names.md](instudio-pms-find-publish-shop-names.md)
- [instudio-pms-get-aliexpress-category.md](instudio-pms-get-aliexpress-category.md)
- [instudio-pms-get-aliexpress-category-attributes.md](instudio-pms-get-aliexpress-category-attributes.md)
- [instudio-pms-get-aliexpress-single-publish-result-info.md](instudio-pms-get-aliexpress-single-publish-result-info.md)
- [instudio-pms-get-all-freight-templates.md](instudio-pms-get-all-freight-templates.md)
- [instudio-pms-get-price-infomation.md](instudio-pms-get-price-infomation.md)
- [instudio-pms-get-style-type-pics.md](instudio-pms-get-style-type-pics.md)
- [instudio-pms-get-votobo-info-by-item-id-aliexpress-singlepublish-controller.md](instudio-pms-get-votobo-info-by-item-id-aliexpress-singlepublish-controller.md)
- [instudio-pms-description-infringing-word.md](instudio-pms-description-infringing-word.md)
- [instudio-pms-export-art-photographer.md](instudio-pms-export-art-photographer.md)
- [instudio-pms-find-art-photographer.md](instudio-pms-find-art-photographer.md)
- [instudio-pms-find-platform.md](instudio-pms-find-platform.md)
- [instudio-pms-get-category-auditor.md](instudio-pms-get-category-auditor.md)
- [instudio-pms-platform.md](instudio-pms-platform.md)
- [instudio-pms-get-seasonal-product-deadline-stocking-day-by-month.md](instudio-pms-get-seasonal-product-deadline-stocking-day-by-month.md)
- [instudio-pms-get-seasonal-product-deadline-stocking-month.md](instudio-pms-get-seasonal-product-deadline-stocking-month.md)
- [instudio-pms-spu-get-spu-scene-spell.md](instudio-pms-spu-get-spu-scene-spell.md)
- [instudio-pms-get-spu-tag.md](instudio-pms-get-spu-tag.md)
- [instudio-pms-get-supplier-url-by-supply-url.md](instudio-pms-get-supplier-url-by-supply-url.md)
- [instudio-pms-get-url-is-exist.md](instudio-pms-get-url-is-exist.md)
- [instudio-pms-select-supply-id-by-supply-url.md](instudio-pms-select-supply-id-by-supply-url.md)
- [instudio-pms-validate-tort.md](instudio-pms-validate-tort.md)
- [instudio-pms-check-prohibited-words-amazon.md](instudio-pms-check-prohibited-words-amazon.md)
- [instudio-pms-check-similarity-title.md](instudio-pms-check-similarity-title.md)
- [instudio-pms-get-amazon-category.md](instudio-pms-get-amazon-category.md)
- [instudio-pms-get-amazon-publish-confirm-list.md](instudio-pms-get-amazon-publish-confirm-list.md)
- [instudio-pms-get-category-properties.md](instudio-pms-get-category-properties.md)
- [instudio-pms-get-spu-image-amazon.md](instudio-pms-get-spu-image-amazon.md)
- [instudio-pms-variation-theme-config-amazon-get.md](instudio-pms-variation-theme-config-amazon-get.md)
- [instudio-pms-export-page-list.md](instudio-pms-export-page-list.md)
- [instudio-pms-page-hotgoods-protect.md](instudio-pms-page-hotgoods-protect.md)
- [instudio-pms-batch-amazon-publish-info.md](instudio-pms-batch-amazon-publish-info.md)
- [instudio-pms-get-amazon-multi-structure.md](instudio-pms-get-amazon-multi-structure.md)
- [instudio-pms-variation-theme-config-new-get.md](instudio-pms-variation-theme-config-new-get.md)
- [instudio-pms-variation-theme-config-info.md](instudio-pms-variation-theme-config-info.md)
- [instudio-pms-find-page-sya-mabang-notice-content.md](instudio-pms-find-page-sya-mabang-notice-content.md)
- [instudio-pms-find-page-sys-mabang-notice.md](instudio-pms-find-page-sys-mabang-notice.md)
- [instudio-pms-get-id-by-statue.md](instudio-pms-get-id-by-statue.md)
- [instudio-pms-assemble-attributes-detail.md](instudio-pms-assemble-attributes-detail.md)
- [instudio-pms-get-sku-suffix.md](instudio-pms-get-sku-suffix.md)
- [instudio-pms-get-value.md](instudio-pms-get-value.md)
- [instudio-pms-value-sku-suffix.md](instudio-pms-value-sku-suffix.md)
- [instudio-pms-findattributes.md](instudio-pms-findattributes.md)
- [instudio-pms-get-banned-by-list.md](instudio-pms-get-banned-by-list.md)
- [instudio-pms-name-brand.md](instudio-pms-name-brand.md)
- [instudio-pms-query-brand.md](instudio-pms-query-brand.md)
- [instudio-pms-find-employeename-by-categor-id.md](instudio-pms-find-employeename-by-categor-id.md)
- [instudio-pms-find-platform-mapping-value.md](instudio-pms-find-platform-mapping-value.md)
- [instudio-pms-find-sku-rule-bycategoryid.md](instudio-pms-find-sku-rule-bycategoryid.md)
- [instudio-pms-find-wish-tags-by-user-id.md](instudio-pms-find-wish-tags-by-user-id.md)
- [instudio-pms-get-all-category-name.md](instudio-pms-get-all-category-name.md)
- [instudio-pms-get-catefory-name-by-username.md](instudio-pms-get-catefory-name-by-username.md)
- [instudio-pms-show-all.md](instudio-pms-show-all.md)
- [instudio-pms-parent-cat-id-show-all.md](instudio-pms-parent-cat-id-show-all.md)
- [instudio-pms-get-category-name.md](instudio-pms-get-category-name.md)
- [instudio-pms-get-category-select-category.md](instudio-pms-get-category-select-category.md)
- [instudio-pms-get-spu-code-by-categroy.md](instudio-pms-get-spu-code-by-categroy.md)
- [instudio-pms-query-category.md](instudio-pms-query-category.md)
- [instudio-pms-query-by-category-id.md](instudio-pms-query-by-category-id.md)
- [instudio-pms-query-by-parent-category-id.md](instudio-pms-query-by-parent-category-id.md)
- [instudio-pms-query-subclassification.md](instudio-pms-query-subclassification.md)
- [instudio-pms-list-certification.md](instudio-pms-list-certification.md)
- [instudio-pms-find-competitor-by-spu.md](instudio-pms-find-competitor-by-spu.md)
- [instudio-pms-find-goods.md](instudio-pms-find-goods.md)
- [instudio-pms-find-pool-message-competitor.md](instudio-pms-find-pool-message-competitor.md)
- [instudio-pms-get-country-c.md](instudio-pms-get-country-c.md)
- [instudio-pms-get-state.md](instudio-pms-get-state.md)
- [instudio-pms-get-customer-service-date.md](instudio-pms-get-customer-service-date.md)
- [instudio-pms-alibaba-product-attribute.md](instudio-pms-alibaba-product-attribute.md)
- [instudio-pms-check-ipm-project.md](instudio-pms-check-ipm-project.md)
- [instudio-pms-check-manufacture.md](instudio-pms-check-manufacture.md)
- [instudio-pms-deletesaler-arter-desc.md](instudio-pms-deletesaler-arter-desc.md)
- [instudio-pms-export-developer-mission.md](instudio-pms-export-developer-mission.md)
- [instudio-pms-find-approval-by-spu.md](instudio-pms-find-approval-by-spu.md)
- [instudio-pms-find-cut-cost-price.md](instudio-pms-find-cut-cost-price.md)
- [instudio-pms-find-developer-mission.md](instudio-pms-find-developer-mission.md)
- [instudio-pms-find-goods-supply-by-id.md](instudio-pms-find-goods-supply-by-id.md)
- [instudio-pms-find-manufacture2.md](instudio-pms-find-manufacture2.md)
- [instudio-pms-find-spu-by-projectid.md](instudio-pms-find-spu-by-projectid.md)
- [instudio-pms-get1688-goods-info.md](instudio-pms-get1688-goods-info.md)
- [instudio-pms-get1688-goods-info-v1.md](instudio-pms-get1688-goods-info-v1.md)
- [instudio-pms-id-developer-mission-get-alibaba-ai-product-img.md](instudio-pms-id-developer-mission-get-alibaba-ai-product-img.md)
- [instudio-pms-mession-id-get-audit-records-by-spu.md](instudio-pms-mession-id-get-audit-records-by-spu.md)
- [instudio-pms-mession-id-get-audit-records.md](instudio-pms-mession-id-get-audit-records.md)
- [instudio-pms-get-baidu-product-image.md](instudio-pms-get-baidu-product-image.md)
- [instudio-pms-get-big-chief-list.md](instudio-pms-get-big-chief-list.md)
- [instudio-pms-get-check-by-by-emp.md](instudio-pms-get-check-by-by-emp.md)
- [instudio-pms-get-check-emp2.md](instudio-pms-get-check-emp2.md)
- [instudio-pms-mission-id-get-developer-check-by-mission-id-and-check-by.md](instudio-pms-mission-id-get-developer-check-by-mission-id-and-check-by.md)
- [instudio-pms-get-developer-check-status.md](instudio-pms-get-developer-check-status.md)
- [instudio-pms-get-developer-mission-check-by-mission-id.md](instudio-pms-get-developer-mission-check-by-mission-id.md)
- [instudio-pms-get-develop-from-fba-product.md](instudio-pms-get-develop-from-fba-product.md)
- [instudio-pms-get-develop-type-developer-mission.md](instudio-pms-get-develop-type-developer-mission.md)
- [instudio-pms-get-hwc-developer-mission.md](instudio-pms-get-hwc-developer-mission.md)
- [instudio-pms-mission-id-get-hwc-developer-mission.md](instudio-pms-mission-id-get-hwc-developer-mission.md)
- [instudio-pms-get-ipm-project.md](instudio-pms-get-ipm-project.md)
- [instudio-pms-get-ipm-ware-house-type.md](instudio-pms-get-ipm-ware-house-type.md)
- [instudio-pms-get-json-by-mission-id.md](instudio-pms-get-json-by-mission-id.md)
- [instudio-pms-id-developer-mission-get-no-pass-content-by-id.md](instudio-pms-id-developer-mission-get-no-pass-content-by-id.md)
- [instudio-pms-get-operational-opinion-by-id.md](instudio-pms-get-operational-opinion-by-id.md)
- [instudio-pms-get-operational-opinions.md](instudio-pms-get-operational-opinions.md)
- [instudio-pms-mission-id-get-picture-by-mission.md](instudio-pms-mission-id-get-picture-by-mission.md)
- [instudio-pms-get-purchase-order-info.md](instudio-pms-get-purchase-order-info.md)
- [instudio-pms-getsaler-arter-desc.md](instudio-pms-getsaler-arter-desc.md)
- [instudio-pms-mission-id-get-sku-proper-ties-by-mission-id.md](instudio-pms-mission-id-get-sku-proper-ties-by-mission-id.md)
- [instudio-pms-mission-id-get-sku-properties-info-by-mission-id.md](instudio-pms-mission-id-get-sku-properties-info-by-mission-id.md)
- [instudio-pms-get-spu-phone-brand.md](instudio-pms-get-spu-phone-brand.md)
- [instudio-pms-phone-id.md](instudio-pms-phone-id.md)
- [instudio-pms-get-supply-url-by-sku-developer-mission.md](instudio-pms-get-supply-url-by-sku-developer-mission.md)
- [instudio-pms-type-id.md](instudio-pms-type-id.md)
- [instudio-pms-ipm-project-info.md](instudio-pms-ipm-project-info.md)
- [instudio-pms-return-spu.md](instudio-pms-return-spu.md)
- [instudio-pms-development-project-detail.md](instudio-pms-development-project-detail.md)
- [instudio-pms-development-project-edit-detail.md](instudio-pms-development-project-edit-detail.md)
- [instudio-pms-development-project-list.md](instudio-pms-development-project-list.md)
- [instudio-pms-get-all-project-and-spu.md](instudio-pms-get-all-project-and-spu.md)
- [instudio-pms-get-development-project-diagram.md](instudio-pms-get-development-project-diagram.md)
- [instudio-pms-get-development-teamer.md](instudio-pms-get-development-teamer.md)
- [instudio-pms-get-not-end-project-and-spu.md](instudio-pms-get-not-end-project-and-spu.md)
- [instudio-pms-get-project-select.md](instudio-pms-get-project-select.md)
- [instudio-pms-get-price-range-list.md](instudio-pms-get-price-range-list.md)
- [instudio-pms-get-product-nature-list.md](instudio-pms-get-product-nature-list.md)
- [instudio-pms-list-developpool.md](instudio-pms-list-developpool.md)
- [instudio-pms-find-alilevel.md](instudio-pms-find-alilevel.md)
- [instudio-pms-find-alilevel-two.md](instudio-pms-find-alilevel-two.md)
- [instudio-pms-find-ali-message.md](instudio-pms-find-ali-message.md)
- [instudio-pms-find-category-name-bycategory-level.md](instudio-pms-find-category-name-bycategory-level.md)
- [instudio-pms-find-ebay-category.md](instudio-pms-find-ebay-category.md)
- [instudio-pms-find-ebaylevel-two.md](instudio-pms-find-ebaylevel-two.md)
- [instudio-pms-find-ebay-message.md](instudio-pms-find-ebay-message.md)
- [instudio-pms-find-smtcategory.md](instudio-pms-find-smtcategory.md)
- [instudio-pms-find-wish-message.md](instudio-pms-find-wish-message.md)
- [instudio-pms-find-all-site-ebay-singlepublish-info-controller.md](instudio-pms-find-all-site-ebay-singlepublish-info-controller.md)
- [instudio-pms-find-category-by-name-en.md](instudio-pms-find-category-by-name-en.md)
- [instudio-pms-find-category-by-search-ebay-singlepublish-info-controller.md](instudio-pms-find-category-by-search-ebay-singlepublish-info-controller.md)
- [instudio-pms-find-category-by-spu-ebay-singlepublish-info-controller.md](instudio-pms-find-category-by-spu-ebay-singlepublish-info-controller.md)
- [instudio-pms-find-category-name-by-category-id-ebay-singlepublish-info-controller.md](instudio-pms-find-category-name-by-category-id-ebay-singlepublish-info-controller.md)
- [instudio-pms-find-item-specifics-by-category-id-ebay-singlepublish-info-controller.md](instudio-pms-find-item-specifics-by-category-id-ebay-singlepublish-info-controller.md)
- [instudio-pms-find-manage-employee-names-ebay-singlepublish-info-controller.md](instudio-pms-find-manage-employee-names-ebay-singlepublish-info-controller.md)
- [instudio-pms-find-pms-sku-by-spu-ebay-singlepublish-info-controller.md](instudio-pms-find-pms-sku-by-spu-ebay-singlepublish-info-controller.md)
- [instudio-pms-find-shop-by-pt-ebay-singlepublish-info-controller.md](instudio-pms-find-shop-by-pt-ebay-singlepublish-info-controller.md)
- [instudio-pms-find-shop-by-pt-spu-ebay-singlepublish-info-controller.md](instudio-pms-find-shop-by-pt-spu-ebay-singlepublish-info-controller.md)
- [instudio-pms-get-ebay-singlepublish-condition.md](instudio-pms-get-ebay-singlepublish-condition.md)
- [instudio-pms-get-ebay-singlepublish-info-by-id.md](instudio-pms-get-ebay-singlepublish-info-by-id.md)
- [instudio-pms-get-ebay-singlepublish-list.md](instudio-pms-get-ebay-singlepublish-list.md)
- [instudio-pms-get-ebay-singlepublish-product-category.md](instudio-pms-get-ebay-singlepublish-product-category.md)
- [instudio-pms-get-ebay-singlepublish-shop-category.md](instudio-pms-get-ebay-singlepublish-shop-category.md)
- [instudio-pms-get-pic-infos-by-pic-style-ebay-singlepublish-info-controller.md](instudio-pms-get-pic-infos-by-pic-style-ebay-singlepublish-info-controller.md)
- [instudio-pms-get-price-information-ebay-singlepublish-info-controller.md](instudio-pms-get-price-information-ebay-singlepublish-info-controller.md)
- [instudio-pms-get-price-information2-ebay-singlepublish-info-controller.md](instudio-pms-get-price-information2-ebay-singlepublish-info-controller.md)
- [instudio-pms-item-specifics-search-ebay-singlepublish-info-controller.md](instudio-pms-item-specifics-search-ebay-singlepublish-info-controller.md)
- [instudio-pms-get-all-freight-template.md](instudio-pms-get-all-freight-template.md)
- [instudio-pms-get-all-freight-template-two.md](instudio-pms-get-all-freight-template-two.md)
- [instudio-pms-check-project-and-change-project-status.md](instudio-pms-check-project-and-change-project-status.md)
- [instudio-pms-check-sku-inventory.md](instudio-pms-check-sku-inventory.md)
- [instudio-pms-export-project-view.md](instudio-pms-export-project-view.md)
- [instudio-pms-export-skuview.md](instudio-pms-export-skuview.md)
- [instudio-pms-get-development-chief.md](instudio-pms-get-development-chief.md)
- [instudio-pms-get-emp-by-dep.md](instudio-pms-get-emp-by-dep.md)
- [instudio-pms-get-fbasaler.md](instudio-pms-get-fbasaler.md)
- [instudio-pms-get-order-info.md](instudio-pms-get-order-info.md)
- [instudio-pms-get-project-address.md](instudio-pms-get-project-address.md)
- [instudio-pms-get-project-infos-by-sku.md](instudio-pms-get-project-infos-by-sku.md)
- [instudio-pms-get-project-list-hwc-development-project.md](instudio-pms-get-project-list-hwc-development-project.md)
- [instudio-pms-get-project-sku-hwc-development-project.md](instudio-pms-get-project-sku-hwc-development-project.md)
- [instudio-pms-get-site.md](instudio-pms-get-site.md)
- [instudio-pms-get-sku-info.md](instudio-pms-get-sku-info.md)
- [instudio-pms-get-sku-purchase-info.md](instudio-pms-get-sku-purchase-info.md)
- [instudio-pms-get-sku-view.md](instudio-pms-get-sku-view.md)
- [instudio-pms-get-sku-view-info-by-sku.md](instudio-pms-get-sku-view-info-by-sku.md)
- [instudio-pms-get-teamer-by-chief.md](instudio-pms-get-teamer-by-chief.md)
- [instudio-pms-get-ware-house.md](instudio-pms-get-ware-house.md)
- [instudio-pms-get-warehouse-type.md](instudio-pms-get-warehouse-type.md)
- [instudio-pms-query-infrine-ment-case-list.md](instudio-pms-query-infrine-ment-case-list.md)
- [instudio-pms-query-infrine-ment-category.md](instudio-pms-query-infrine-ment-category.md)
- [instudio-pms-query-infrine-ment-platform.md](instudio-pms-query-infrine-ment-platform.md)
- [instudio-pms-query-infrine-ment-platform-list.md](instudio-pms-query-infrine-ment-platform-list.md)
- [instudio-pms-query-shop-appeal-case-list.md](instudio-pms-query-shop-appeal-case-list.md)
- [instudio-pms-check-infringing-word2.md](instudio-pms-check-infringing-word2.md)
- [instudio-pms-check-infringing-word-list2.md](instudio-pms-check-infringing-word-list2.md)
- [instudio-pms-check-prohibited-words-infringing.md](instudio-pms-check-prohibited-words-infringing.md)
- [instudio-pms-check.md](instudio-pms-check.md)
- [instudio-pms-find-all-site-lazada-singlepublish-info-controller.md](instudio-pms-find-all-site-lazada-singlepublish-info-controller.md)
- [instudio-pms-find-category-by-search-lazada-singlepublish-info-controller.md](instudio-pms-find-category-by-search-lazada-singlepublish-info-controller.md)
- [instudio-pms-find-category-name-by-category-id-lazada-singlepublish-info-controller.md](instudio-pms-find-category-name-by-category-id-lazada-singlepublish-info-controller.md)
- [instudio-pms-find-item-specifics-by-category-id-lazada-singlepublish-info-controller.md](instudio-pms-find-item-specifics-by-category-id-lazada-singlepublish-info-controller.md)
- [instudio-pms-find-manage-employee-names-lazada-singlepublish-info-controller.md](instudio-pms-find-manage-employee-names-lazada-singlepublish-info-controller.md)
- [instudio-pms-find-pms-sku-by-spu-lazada-singlepublish-info-controller.md](instudio-pms-find-pms-sku-by-spu-lazada-singlepublish-info-controller.md)
- [instudio-pms-find-shop-by-pt-lazada-singlepublish-info-controller.md](instudio-pms-find-shop-by-pt-lazada-singlepublish-info-controller.md)
- [instudio-pms-find-shop-by-pt-spu-lazada-singlepublish-info-controller.md](instudio-pms-find-shop-by-pt-spu-lazada-singlepublish-info-controller.md)
- [instudio-pms-find-shop-by-search.md](instudio-pms-find-shop-by-search.md)
- [instudio-pms-get-lazada-info-for-edit.md](instudio-pms-get-lazada-info-for-edit.md)
- [instudio-pms-get-lazada-singlepublish-info-by-id.md](instudio-pms-get-lazada-singlepublish-info-by-id.md)
- [instudio-pms-get-lazada-singlepublish-info-by-id-edit.md](instudio-pms-get-lazada-singlepublish-info-by-id-edit.md)
- [instudio-pms-get-lazada-singlepublish-list.md](instudio-pms-get-lazada-singlepublish-list.md)
- [instudio-pms-get-lazada-singlepublish-product-category.md](instudio-pms-get-lazada-singlepublish-product-category.md)
- [instudio-pms-get-price-information-lazada-singlepublish-info-controller.md](instudio-pms-get-price-information-lazada-singlepublish-info-controller.md)
- [instudio-pms-get-price-information2-lazada-singlepublish-info-controller.md](instudio-pms-get-price-information2-lazada-singlepublish-info-controller.md)
- [instudio-pms-item-specifics-search-lazada-singlepublish-info-controller.md](instudio-pms-item-specifics-search-lazada-singlepublish-info-controller.md)
- [instudio-pms-export-manufacture.md](instudio-pms-export-manufacture.md)
- [instudio-pms-list-manufacture.md](instudio-pms-list-manufacture.md)
- [instudio-pms-get-category-list-mercadolibre.md](instudio-pms-get-category-list-mercadolibre.md)
- [instudio-pms-get-picture-list.md](instudio-pms-get-picture-list.md)
- [instudio-pms-select-publish-request-page.md](instudio-pms-select-publish-request-page.md)
- [instudio-pms-list-task.md](instudio-pms-list-task.md)
- [instudio-pms-category-id-template.md](instudio-pms-category-id-template.md)
- [instudio-pms-export-middle-panel-data.md](instudio-pms-export-middle-panel-data.md)
- [instudio-pms-get-middle-panel-list.md](instudio-pms-get-middle-panel-list.md)
- [instudio-pms-get-notification-list.md](instudio-pms-get-notification-list.md)
- [instudio-pms-get-shop-by-condition.md](instudio-pms-get-shop-by-condition.md)
- [instudio-pms-get-shop-strategy.md](instudio-pms-get-shop-strategy.md)
- [instudio-pms-find-item-specifics-by-category-id-ozon-no-source-template.md](instudio-pms-find-item-specifics-by-category-id-ozon-no-source-template.md)
- [instudio-pms-get-ozon-no-source-publish-template-info.md](instudio-pms-get-ozon-no-source-publish-template-info.md)
- [instudio-pms-batch-get-ozon-warehouse.md](instudio-pms-batch-get-ozon-warehouse.md)
- [instudio-pms-find-category-by-search-ozon-singlepublish-info-controller.md](instudio-pms-find-category-by-search-ozon-singlepublish-info-controller.md)
- [instudio-pms-find-category-name-by-category-id-ozon-singlepublish-info-controller.md](instudio-pms-find-category-name-by-category-id-ozon-singlepublish-info-controller.md)
- [instudio-pms-find-item-specifics-by-category-id-ozon-singlepublish-info-controller.md](instudio-pms-find-item-specifics-by-category-id-ozon-singlepublish-info-controller.md)
- [instudio-pms-find-item-specifics-by-category-id-old.md](instudio-pms-find-item-specifics-by-category-id-old.md)
- [instudio-pms-find-manage-employee-names-ozon-singlepublish-info-controller.md](instudio-pms-find-manage-employee-names-ozon-singlepublish-info-controller.md)
- [instudio-pms-find-shop-by-pt-ozon-singlepublish-info-controller.md](instudio-pms-find-shop-by-pt-ozon-singlepublish-info-controller.md)
- [instudio-pms-find-shop-by-pt-spu-ozon-singlepublish-info-controller.md](instudio-pms-find-shop-by-pt-spu-ozon-singlepublish-info-controller.md)
- [instudio-pms-get-all-ozon-category.md](instudio-pms-get-all-ozon-category.md)
- [instudio-pms-get-cropped-orig-image-list-by-erp-spu.md](instudio-pms-get-cropped-orig-image-list-by-erp-spu.md)
- [instudio-pms-get-orig-image-and-cropped-list-by-erp-spu.md](instudio-pms-get-orig-image-and-cropped-list-by-erp-spu.md)
- [instudio-pms-get-ozon-singlepublish-category.md](instudio-pms-get-ozon-singlepublish-category.md)
- [instudio-pms-get-ozon-singlepublish-info-by-id.md](instudio-pms-get-ozon-singlepublish-info-by-id.md)
- [instudio-pms-get-ozon-singlepublish-list.md](instudio-pms-get-ozon-singlepublish-list.md)
- [instudio-pms-get-ozon-warehouse.md](instudio-pms-get-ozon-warehouse.md)
- [instudio-pms-get-price-information-ozon-singlepublish-info-controller.md](instudio-pms-get-price-information-ozon-singlepublish-info-controller.md)
- [instudio-pms-get-translated-picture.md](instudio-pms-get-translated-picture.md)
- [instudio-pms-ozon-image-cropped-list.md](instudio-pms-ozon-image-cropped-list.md)
- [instudio-pms-page-ozon-template.md](instudio-pms-page-ozon-template.md)
- [instudio-pms-check-phishing-words.md](instudio-pms-check-phishing-words.md)
- [instudio-pms-check-phishing-words2.md](instudio-pms-check-phishing-words2.md)
- [instudio-pms-check-phishing-words3.md](instudio-pms-check-phishing-words3.md)
- [instudio-pms-check-phishing-words-list.md](instudio-pms-check-phishing-words-list.md)
- [instudio-pms-check-phishing-words-list2.md](instudio-pms-check-phishing-words-list2.md)
- [instudio-pms-check-phishing-words-list3.md](instudio-pms-check-phishing-words-list3.md)
- [instudio-pms-export-photo-order.md](instudio-pms-export-photo-order.md)
- [instudio-pms-get-all-emp.md](instudio-pms-get-all-emp.md)
- [instudio-pms-get-photo-order.md](instudio-pms-get-photo-order.md)
- [instudio-pms-find-plat-sale.md](instudio-pms-find-plat-sale.md)
- [instudio-pms-find-pool-message-pool-messag.md](instudio-pms-find-pool-message-pool-messag.md)
- [instudio-pms-find-tag-name.md](instudio-pms-find-tag-name.md)
- [instudio-pms-spu-submit-sale.md](instudio-pms-spu-submit-sale.md)
- [instudio-pms-get-all-pricing-allocation-strategy.md](instudio-pms-get-all-pricing-allocation-strategy.md)
- [instudio-pms-get1688-product-attr.md](instudio-pms-get1688-product-attr.md)
- [instudio-pms-find-picture-by-spu.md](instudio-pms-find-picture-by-spu.md)
- [instudio-pms-find-product-picture-by-list.md](instudio-pms-find-product-picture-by-list.md)
- [instudio-pms-get-all-develop.md](instudio-pms-get-all-develop.md)
- [instudio-pms-get-month.md](instudio-pms-get-month.md)
- [instudio-pms-get-poster-type.md](instudio-pms-get-poster-type.md)
- [instudio-pms-get-product-picture.md](instudio-pms-get-product-picture.md)
- [instudio-pms-get-project-sku-product-image.md](instudio-pms-get-project-sku-product-image.md)
- [instudio-pms-get-property.md](instudio-pms-get-property.md)
- [instudio-pms-getspusupplyurl.md](instudio-pms-getspusupplyurl.md)
- [instudio-pms-query-all-generated-path.md](instudio-pms-query-all-generated-path.md)
- [instudio-pms-query-competitor-bysup.md](instudio-pms-query-competitor-bysup.md)
- [instudio-pms-query-product-image.md](instudio-pms-query-product-image.md)
- [instudio-pms-query-product-picture-by-user-id-product-image.md](instudio-pms-query-product-picture-by-user-id-product-image.md)
- [instudio-pms-query-product-picture-by-user-id2.md](instudio-pms-query-product-picture-by-user-id2.md)
- [instudio-pms-query-product-picture-by-user-id3.md](instudio-pms-query-product-picture-by-user-id3.md)
- [instudio-pms-export-photograph-mission.md](instudio-pms-export-photograph-mission.md)
- [instudio-pms-find-photograph-mission.md](instudio-pms-find-photograph-mission.md)
- [instudio-pms-find-photograph-mission-by-spu.md](instudio-pms-find-photograph-mission-by-spu.md)
- [instudio-pms-get-photograph-list.md](instudio-pms-get-photograph-list.md)
- [instudio-pms-query-product-picture-by-user-id-product-photograph-controller.md](instudio-pms-query-product-picture-by-user-id-product-photograph-controller.md)
- [instudio-pms-find-product-tort.md](instudio-pms-find-product-tort.md)
- [instudio-pms-find-sale-leader-tort.md](instudio-pms-find-sale-leader-tort.md)
- [instudio-pms-find-sale-tort.md](instudio-pms-find-sale-tort.md)
- [instudio-pms-get-msg-type-list-product-tort.md](instudio-pms-get-msg-type-list-product-tort.md)
- [instudio-pms-validate-sku.md](instudio-pms-validate-sku.md)
- [instudio-pms-batch-upd-sku-info.md](instudio-pms-batch-upd-sku-info.md)
- [instudio-pms-check-product-title-is-tort.md](instudio-pms-check-product-title-is-tort.md)
- [instudio-pms-export-bind-product.md](instudio-pms-export-bind-product.md)
- [instudio-pms-fba-quality-info.md](instudio-pms-fba-quality-info.md)
- [instudio-pms-find-ebay-describe.md](instudio-pms-find-ebay-describe.md)
- [instudio-pms-find-ebay-describe-by-spu.md](instudio-pms-find-ebay-describe-by-spu.md)
- [instudio-pms-find-keyword.md](instudio-pms-find-keyword.md)
- [instudio-pms-find-money-rate.md](instudio-pms-find-money-rate.md)
- [instudio-pms-find-product-byspu.md](instudio-pms-find-product-byspu.md)
- [instudio-pms-find-product-finish-message.md](instudio-pms-find-product-finish-message.md)
- [instudio-pms-find-sku-by-spu.md](instudio-pms-find-sku-by-spu.md)
- [instudio-pms-find-token.md](instudio-pms-find-token.md)
- [instudio-pms-get-current-time.md](instudio-pms-get-current-time.md)
- [instudio-pms-get-end-time.md](instudio-pms-get-end-time.md)
- [instudio-pms-get-fba-pack-info-and-image-info-by-skus.md](instudio-pms-get-fba-pack-info-and-image-info-by-skus.md)
- [instudio-pms-get-info-submit.md](instudio-pms-get-info-submit.md)
- [instudio-pms-get-product-attribute.md](instudio-pms-get-product-attribute.md)
- [instudio-pms-get-product-picture-url.md](instudio-pms-get-product-picture-url.md)
- [instudio-pms-get-product-picture-url2.md](instudio-pms-get-product-picture-url2.md)
- [instudio-pms-get-product-tort.md](instudio-pms-get-product-tort.md)
- [instudio-pms-get-sale-team-members-by-name.md](instudio-pms-get-sale-team-members-by-name.md)
- [instudio-pms-get-spu-limit-price.md](instudio-pms-get-spu-limit-price.md)
- [instudio-pms-get-spu-shop-by-name.md](instudio-pms-get-spu-shop-by-name.md)
- [instudio-pms-get-supply-url-by-sku-product.md](instudio-pms-get-supply-url-by-sku-product.md)
- [instudio-pms-get-turnover-ratio-list.md](instudio-pms-get-turnover-ratio-list.md)
- [instudio-pms-pushprojecttomabang.md](instudio-pms-pushprojecttomabang.md)
- [instudio-pms-query-page.md](instudio-pms-query-page.md)
- [instudio-pms-query-sku.md](instudio-pms-query-sku.md)
- [instudio-pms-get-project-relation-list.md](instudio-pms-get-project-relation-list.md)
- [instudio-pms-get-shop-info.md](instudio-pms-get-shop-info.md)
- [instudio-pms-get-shop-list.md](instudio-pms-get-shop-list.md)
- [instudio-pms-get-submit.md](instudio-pms-get-submit.md)
- [instudio-pms-published-list.md](instudio-pms-published-list.md)
- [instudio-pms-get-exception-list.md](instudio-pms-get-exception-list.md)
- [instudio-pms-get-exception-list-old.md](instudio-pms-get-exception-list-old.md)
- [instudio-pms-get-msg-type-list-purchase-exception.md](instudio-pms-get-msg-type-list-purchase-exception.md)
- [instudio-pms-getpurchaseexmessage.md](instudio-pms-getpurchaseexmessage.md)
- [instudio-pms-get-sku-supply.md](instudio-pms-get-sku-supply.md)
- [instudio-pms-upd-fba-sample-exception-from-order.md](instudio-pms-upd-fba-sample-exception-from-order.md)
- [instudio-pms-find-category-name-by-category-id-shopee-singlepublish-controller-cnsc.md](instudio-pms-find-category-name-by-category-id-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-find-item-specifics-by-category-id-shopee-singlepublish-controller-cnsc.md](instudio-pms-find-item-specifics-by-category-id-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-find-manage-employee-names-shopee-singlepublish-controller-cnsc.md](instudio-pms-find-manage-employee-names-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-find-shop-by-pt-shopee-singlepublish-controller-cnsc.md](instudio-pms-find-shop-by-pt-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-get-file-size.md](instudio-pms-get-file-size.md)
- [instudio-pms-get-info-by-url-from-votobo-shopee-singlepublish-controller-cnsc.md](instudio-pms-get-info-by-url-from-votobo-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-get-logistics-by-shop-name-shopee-singlepublish-controller-cnsc.md](instudio-pms-get-logistics-by-shop-name-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-get-main-pics-by-spu-style-shopee-singlepublish-controller-cnsc.md](instudio-pms-get-main-pics-by-spu-style-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-get-pic-infos-by-pic-style-shopee-singlepublish-controller-cnsc.md](instudio-pms-get-pic-infos-by-pic-style-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-get-price-information-shopee-singlepublish-controller-cnsc.md](instudio-pms-get-price-information-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-get-shopee-category-recommend-shopee-singlepublish-controller-cnsc.md](instudio-pms-get-shopee-category-recommend-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-get-shopee-category-recommend2.md](instudio-pms-get-shopee-category-recommend2.md)
- [instudio-pms-get-shopee-singlepublish-info-by-id-shopee-singlepublish-controller-cnsc.md](instudio-pms-get-shopee-singlepublish-info-by-id-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-get-shopee-singlepublish-shop-category-shopee-singlepublish-controller-cnsc.md](instudio-pms-get-shopee-singlepublish-shop-category-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-get-shop-id-by-shop-name.md](instudio-pms-get-shop-id-by-shop-name.md)
- [instudio-pms-get-smt-singlepublish-list-shopee-singlepublish-controller-cnsc.md](instudio-pms-get-smt-singlepublish-list-shopee-singlepublish-controller-cnsc.md)
- [instudio-pms-check-cnsc.md](instudio-pms-check-cnsc.md)
- [instudio-pms-find-category-name-by-category-id-shopee-singlepublish-controller.md](instudio-pms-find-category-name-by-category-id-shopee-singlepublish-controller.md)
- [instudio-pms-find-item-specifics-by-category-id-shopee-singlepublish-controller.md](instudio-pms-find-item-specifics-by-category-id-shopee-singlepublish-controller.md)
- [instudio-pms-find-manage-employee-names-shopee-singlepublish-controller.md](instudio-pms-find-manage-employee-names-shopee-singlepublish-controller.md)
- [instudio-pms-find-shop-by-pt-shopee-singlepublish-controller.md](instudio-pms-find-shop-by-pt-shopee-singlepublish-controller.md)
- [instudio-pms-find-shop-by-pt-new.md](instudio-pms-find-shop-by-pt-new.md)
- [instudio-pms-find-shop-by-pt-spu-shopee-singlepublish-controller.md](instudio-pms-find-shop-by-pt-spu-shopee-singlepublish-controller.md)
- [instudio-pms-get-info-by-url-from-votobo-shopee-singlepublish-controller.md](instudio-pms-get-info-by-url-from-votobo-shopee-singlepublish-controller.md)
- [instudio-pms-get-logistics-by-shop-name-shopee-singlepublish-controller.md](instudio-pms-get-logistics-by-shop-name-shopee-singlepublish-controller.md)
- [instudio-pms-get-price-information-shopee-singlepublish-controller.md](instudio-pms-get-price-information-shopee-singlepublish-controller.md)
- [instudio-pms-get-shopee-category-recommend-shopee-singlepublish-controller.md](instudio-pms-get-shopee-category-recommend-shopee-singlepublish-controller.md)
- [instudio-pms-get-shopee-info-edit-id.md](instudio-pms-get-shopee-info-edit-id.md)
- [instudio-pms-get-shopee-singlepublish-info-by-id-shopee-singlepublish-controller.md](instudio-pms-get-shopee-singlepublish-info-by-id-shopee-singlepublish-controller.md)
- [instudio-pms-get-shopee-singlepublish-info-by-id-edit.md](instudio-pms-get-shopee-singlepublish-info-by-id-edit.md)
- [instudio-pms-get-shopee-singlepublish-shop-category-shopee-singlepublish-controller.md](instudio-pms-get-shopee-singlepublish-shop-category-shopee-singlepublish-controller.md)
- [instudio-pms-get-smt-singlepublish-list-shopee-singlepublish-controller.md](instudio-pms-get-smt-singlepublish-list-shopee-singlepublish-controller.md)
- [instudio-pms-spu-get-spu-competitor-link.md](instudio-pms-spu-get-spu-competitor-link.md)
- [instudio-pms-type-shop-name.md](instudio-pms-type-shop-name.md)
- [instudio-pms-find-shop-voucher.md](instudio-pms-find-shop-voucher.md)
- [instudio-pms-get-shopee-voucher-by-id.md](instudio-pms-get-shopee-voucher-by-id.md)
- [instudio-pms-get-shopee-vouchers.md](instudio-pms-get-shopee-vouchers.md)
- [instudio-pms-get-shopee-voucher-template-by-id.md](instudio-pms-get-shopee-voucher-template-by-id.md)
- [instudio-pms-get-shopee-voucher-templates.md](instudio-pms-get-shopee-voucher-templates.md)
- [instudio-pms-export-sku-category.md](instudio-pms-export-sku-category.md)
- [instudio-pms-list-sku-category.md](instudio-pms-list-sku-category.md)
- [instudio-pms-second-categorys.md](instudio-pms-second-categorys.md)
- [instudio-pms-three-category.md](instudio-pms-three-category.md)
- [instudio-pms-export-sku-manager.md](instudio-pms-export-sku-manager.md)
- [instudio-pms-get-top-thirty-refund-sku-list.md](instudio-pms-get-top-thirty-refund-sku-list.md)
- [instudio-pms-list-sku-manager.md](instudio-pms-list-sku-manager.md)
- [instudio-pms-find-freight-by-shop.md](instudio-pms-find-freight-by-shop.md)
- [instudio-pms-find-manage-employee-names-smt-shipto-configuration-controller.md](instudio-pms-find-manage-employee-names-smt-shipto-configuration-controller.md)
- [instudio-pms-find-manager-shops.md](instudio-pms-find-manager-shops.md)
- [instudio-pms-find-shipto-for-batch-price.md](instudio-pms-find-shipto-for-batch-price.md)
- [instudio-pms-select-item-by-config-id.md](instudio-pms-select-item-by-config-id.md)
- [instudio-pms-select-shipto-configuration.md](instudio-pms-select-shipto-configuration.md)
- [instudio-pms-select-shipto-configuration-page.md](instudio-pms-select-shipto-configuration-page.md)
- [instudio-pms-find-all-site-smt-singlepublish-controller.md](instudio-pms-find-all-site-smt-singlepublish-controller.md)
- [instudio-pms-find-category-by-search-smt-singlepublish-controller.md](instudio-pms-find-category-by-search-smt-singlepublish-controller.md)
- [instudio-pms-find-category-by-spu-smt-singlepublish-controller.md](instudio-pms-find-category-by-spu-smt-singlepublish-controller.md)
- [instudio-pms-find-category-name-by-category-id-smt-singlepublish-controller.md](instudio-pms-find-category-name-by-category-id-smt-singlepublish-controller.md)
- [instudio-pms-find-item-specifics-by-category-id-smt-singlepublish-controller.md](instudio-pms-find-item-specifics-by-category-id-smt-singlepublish-controller.md)
- [instudio-pms-find-item-specifics-by-category-id-edit.md](instudio-pms-find-item-specifics-by-category-id-edit.md)
- [instudio-pms-find-manage-employee-names-smt-singlepublish-controller.md](instudio-pms-find-manage-employee-names-smt-singlepublish-controller.md)
- [instudio-pms-find-shop-by-pt-smt-singlepublish-controller.md](instudio-pms-find-shop-by-pt-smt-singlepublish-controller.md)
- [instudio-pms-find-shop-by-pt-edit.md](instudio-pms-find-shop-by-pt-edit.md)
- [instudio-pms-find-shop-group-list.md](instudio-pms-find-shop-group-list.md)
- [instudio-pms-find-shop-jitb.md](instudio-pms-find-shop-jitb.md)
- [instudio-pms-find-smt-category-surgeword.md](instudio-pms-find-smt-category-surgeword.md)
- [instudio-pms-get-all-shop-productgroups.md](instudio-pms-get-all-shop-productgroups.md)
- [instudio-pms-get-logistics-by-shop-name-smt-singlepublish-controller.md](instudio-pms-get-logistics-by-shop-name-smt-singlepublish-controller.md)
- [instudio-pms-get-main-pics-by-spu.md](instudio-pms-get-main-pics-by-spu.md)
- [instudio-pms-get-main-pics-by-spu-style-smt-singlepublish-controller.md](instudio-pms-get-main-pics-by-spu-style-smt-singlepublish-controller.md)
- [instudio-pms-get-msr-list.md](instudio-pms-get-msr-list.md)
- [instudio-pms-get-pic-infos-by-pic-style-smt-singlepublish-controller.md](instudio-pms-get-pic-infos-by-pic-style-smt-singlepublish-controller.md)
- [instudio-pms-get-price-information-smt-singlepublish-controller.md](instudio-pms-get-price-information-smt-singlepublish-controller.md)
- [instudio-pms-get-sku-variation-info.md](instudio-pms-get-sku-variation-info.md)
- [instudio-pms-get-smt-category-by-item-id.md](instudio-pms-get-smt-category-by-item-id.md)
- [instudio-pms-get-smt-related-marketing-info.md](instudio-pms-get-smt-related-marketing-info.md)
- [instudio-pms-get-smt-singlepublish-info-by-id.md](instudio-pms-get-smt-singlepublish-info-by-id.md)
- [instudio-pms-get-smt-singlepublish-info-by-id-edit.md](instudio-pms-get-smt-singlepublish-info-by-id-edit.md)
- [instudio-pms-get-smt-singlepublish-list-smt-singlepublish-controller.md](instudio-pms-get-smt-singlepublish-list-smt-singlepublish-controller.md)
- [instudio-pms-get-smt-singlepublish-list-edit.md](instudio-pms-get-smt-singlepublish-list-edit.md)
- [instudio-pms-get-smt-single-publish-main-country.md](instudio-pms-get-smt-single-publish-main-country.md)
- [instudio-pms-get-smt-singlepublish-shop-category.md](instudio-pms-get-smt-singlepublish-shop-category.md)
- [instudio-pms-get-spu-oudai-picture.md](instudio-pms-get-spu-oudai-picture.md)
- [instudio-pms-get-url-info.md](instudio-pms-get-url-info.md)
- [instudio-pms-get-votobo-info-by-item-id-smt-singlepublish-controller.md](instudio-pms-get-votobo-info-by-item-id-smt-singlepublish-controller.md)
- [instudio-pms-get-vtpics-by-spu.md](instudio-pms-get-vtpics-by-spu.md)
- [instudio-pms-query-hscode-by-attribute.md](instudio-pms-query-hscode-by-attribute.md)
- [instudio-pms-query-type-by-hscode.md](instudio-pms-query-type-by-hscode.md)
- [instudio-pms-select-smt-related-marketing-template.md](instudio-pms-select-smt-related-marketing-template.md)
- [instudio-pms-select-smt-related-marketing-template-by-id.md](instudio-pms-select-smt-related-marketing-template-by-id.md)
- [instudio-pms-sendmessage.md](instudio-pms-sendmessage.md)
- [instudio-pms-smt-edit-info-refresh.md](instudio-pms-smt-edit-info-refresh.md)
- [instudio-pms-yl-export.md](instudio-pms-yl-export.md)
- [instudio-pms-check-forbid-platform.md](instudio-pms-check-forbid-platform.md)
- [instudio-pms-check-spu-wait-check.md](instudio-pms-check-spu-wait-check.md)
- [instudio-pms-find-product-image-by-style.md](instudio-pms-find-product-image-by-style.md)
- [instudio-pms-find-site-by-mabang-id2.md](instudio-pms-find-site-by-mabang-id2.md)
- [instudio-pms-find-spu-import.md](instudio-pms-find-spu-import.md)
- [instudio-pms-find-spu-info.md](instudio-pms-find-spu-info.md)
- [instudio-pms-find-spu-info2.md](instudio-pms-find-spu-info2.md)
- [instudio-pms-find-supply-info-by-spu.md](instudio-pms-find-supply-info-by-spu.md)
- [instudio-pms-find-user.md](instudio-pms-find-user.md)
- [instudio-pms-find-user3.md](instudio-pms-find-user3.md)
- [instudio-pms-find-user-by-team-id.md](instudio-pms-find-user-by-team-id.md)
- [instudio-pms-get-arter-num.md](instudio-pms-get-arter-num.md)
- [instudio-pms-spu-get-gpsr-picture.md](instudio-pms-spu-get-gpsr-picture.md)
- [instudio-pms-get-pms-spu-list.md](instudio-pms-get-pms-spu-list.md)
- [instudio-pms-spu-get-push-info-by-spu.md](instudio-pms-spu-get-push-info-by-spu.md)
- [instudio-pms-spu-get-spu-ou-dai-picture.md](instudio-pms-spu-get-spu-ou-dai-picture.md)
- [instudio-pms-get-spu-publishflag.md](instudio-pms-get-spu-publishflag.md)
- [instudio-pms-get-spu-re-check-status.md](instudio-pms-get-spu-re-check-status.md)
- [instudio-pms-get-spusales-volume.md](instudio-pms-get-spusales-volume.md)
- [instudio-pms-is-can-edit-spu.md](instudio-pms-is-can-edit-spu.md)
- [instudio-pms-is-show-update-and-audit.md](instudio-pms-is-show-update-and-audit.md)
- [instudio-pms-is-video-file.md](instudio-pms-is-video-file.md)
- [instudio-pms-supported-platforms.md](instudio-pms-supported-platforms.md)
- [instudio-pms-get-strategy-list.md](instudio-pms-get-strategy-list.md)
- [instudio-pms-export-project.md](instudio-pms-export-project.md)
- [instudio-pms-find-develop-consumer.md](instudio-pms-find-develop-consumer.md)
- [instudio-pms-get-developer-consumer-list.md](instudio-pms-get-developer-consumer-list.md)
- [instudio-pms-get-developer-list.md](instudio-pms-get-developer-list.md)
- [instudio-pms-get-developer-type-list.md](instudio-pms-get-developer-type-list.md)
- [instudio-pms-get-developer-type-list-page.md](instudio-pms-get-developer-type-list-page.md)
- [instudio-pms-get-type-developer-list.md](instudio-pms-get-type-developer-list.md)
- [instudio-pms-get-user-dept.md](instudio-pms-get-user-dept.md)
- [instudio-pms-get-user-list.md](instudio-pms-get-user-list.md)
- [instudio-pms-find-scm-supply-by-store-url.md](instudio-pms-find-scm-supply-by-store-url.md)
- [instudio-pms-get-category-supply-develop-controller.md](instudio-pms-get-category-supply-develop-controller.md)
- [instudio-pms-get-supply-pool-list.md](instudio-pms-get-supply-pool-list.md)
- [instudio-pms-get-tag-type.md](instudio-pms-get-tag-type.md)
- [instudio-pms-name-tag.md](instudio-pms-name-tag.md)
- [instudio-pms-query-tag.md](instudio-pms-query-tag.md)
- [instudio-pms-check-risk-words.md](instudio-pms-check-risk-words.md)
- [instudio-pms-export-tk-single-publish-list.md](instudio-pms-export-tk-single-publish-list.md)
- [instudio-pms-find-manage-employee-names-tiktok-singlepublish-global-controller.md](instudio-pms-find-manage-employee-names-tiktok-singlepublish-global-controller.md)
- [instudio-pms-get-brand-list.md](instudio-pms-get-brand-list.md)
- [instudio-pms-get-category-info-data-tiktok-singlepublish-global-controller.md](instudio-pms-get-category-info-data-tiktok-singlepublish-global-controller.md)
- [instudio-pms-get-category-recommend.md](instudio-pms-get-category-recommend.md)
- [instudio-pms-get-category-rules-tiktok-singlepublish-global-controller.md](instudio-pms-get-category-rules-tiktok-singlepublish-global-controller.md)
- [instudio-pms-get-category-rules-new.md](instudio-pms-get-category-rules-new.md)
- [instudio-pms-get-global-warehouse.md](instudio-pms-get-global-warehouse.md)
- [instudio-pms-get-main-shop-list-sites.md](instudio-pms-get-main-shop-list-sites.md)
- [instudio-pms-get-main-shop-sites.md](instudio-pms-get-main-shop-sites.md)
- [instudio-pms-get-main-shop-sites-for-sd.md](instudio-pms-get-main-shop-sites-for-sd.md)
- [instudio-pms-get-product-pics-tiktok-singlepublish-global-controller.md](instudio-pms-get-product-pics-tiktok-singlepublish-global-controller.md)
- [instudio-pms-get-product-pics2.md](instudio-pms-get-product-pics2.md)
- [instudio-pms-get-shop-by-first-category.md](instudio-pms-get-shop-by-first-category.md)
- [instudio-pms-get-shop-by-pt-tiktok-singlepublish-global-controller.md](instudio-pms-get-shop-by-pt-tiktok-singlepublish-global-controller.md)
- [instudio-pms-get-shop-by-pt-have-published.md](instudio-pms-get-shop-by-pt-have-published.md)
- [instudio-pms-get-shop-manufacturers-list.md](instudio-pms-get-shop-manufacturers-list.md)
- [instudio-pms-get-shop-responsible-person-list.md](instudio-pms-get-shop-responsible-person-list.md)
- [instudio-pms-get-shop-site-by-first-category.md](instudio-pms-get-shop-site-by-first-category.md)
- [instudio-pms-get-sku-img-color-size-tiktok-singlepublish-global-controller.md](instudio-pms-get-sku-img-color-size-tiktok-singlepublish-global-controller.md)
- [instudio-pms-get-template-category-attributes.md](instudio-pms-get-template-category-attributes.md)
- [instudio-pms-get-tiktok-category-recommend.md](instudio-pms-get-tiktok-category-recommend.md)
- [instudio-pms-get-tiktok-singlepublish-list-info-list-tiktok-singlepublish-global-controller.md](instudio-pms-get-tiktok-singlepublish-list-info-list-tiktok-singlepublish-global-controller.md)
- [instudio-pms-get-tiktok-singlepublish-result-tiktok-singlepublish-global-controller.md](instudio-pms-get-tiktok-singlepublish-result-tiktok-singlepublish-global-controller.md)
- [instudio-pms-get-tk-first-category.md](instudio-pms-get-tk-first-category.md)
- [instudio-pms-get-warehouse.md](instudio-pms-get-warehouse.md)
- [instudio-pms-find-manage-employee-names-tiktok-singlepublish-local-controller.md](instudio-pms-find-manage-employee-names-tiktok-singlepublish-local-controller.md)
- [instudio-pms-get-category-info-data-tiktok-singlepublish-local-controller.md](instudio-pms-get-category-info-data-tiktok-singlepublish-local-controller.md)
- [instudio-pms-get-category-rules-tiktok-singlepublish-local-controller.md](instudio-pms-get-category-rules-tiktok-singlepublish-local-controller.md)
- [instudio-pms-get-product-pics-tiktok-singlepublish-local-controller.md](instudio-pms-get-product-pics-tiktok-singlepublish-local-controller.md)
- [instudio-pms-get-shop-by-pt-tiktok-singlepublish-local-controller.md](instudio-pms-get-shop-by-pt-tiktok-singlepublish-local-controller.md)
- [instudio-pms-get-sku-img-color-size-tiktok-singlepublish-local-controller.md](instudio-pms-get-sku-img-color-size-tiktok-singlepublish-local-controller.md)
- [instudio-pms-get-tiktok-local-warehouse-record.md](instudio-pms-get-tiktok-local-warehouse-record.md)
- [instudio-pms-get-tiktok-singlepublish-list-info-list-tiktok-singlepublish-local-controller.md](instudio-pms-get-tiktok-singlepublish-list-info-list-tiktok-singlepublish-local-controller.md)
- [instudio-pms-get-tiktok-singlepublish-result-tiktok-singlepublish-local-controller.md](instudio-pms-get-tiktok-singlepublish-result-tiktok-singlepublish-local-controller.md)
- [instudio-pms-find-transportation-time.md](instudio-pms-find-transportation-time.md)
- [instudio-pms-find-publish-shop-auto.md](instudio-pms-find-publish-shop-auto.md)
- [instudio-pms-id-auto-get-caauto-walmart-publish-confirm.md](instudio-pms-id-auto-get-caauto-walmart-publish-confirm.md)
- [instudio-pms-get-export-walmart-shop.md](instudio-pms-get-export-walmart-shop.md)
- [instudio-pms-get-intercept-log-list.md](instudio-pms-get-intercept-log-list.md)
- [instudio-pms-get-publish-shop-list.md](instudio-pms-get-publish-shop-list.md)
- [instudio-pms-get-walmart-publish-confirm-list-auto.md](instudio-pms-get-walmart-publish-confirm-list-auto.md)
- [instudio-pms-id-auto-get-walmart-publish-confirm-new.md](instudio-pms-id-auto-get-walmart-publish-confirm-new.md)
- [instudio-pms-get-walmart-shop-list.md](instudio-pms-get-walmart-shop-list.md)
- [instudio-pms-get-walmart-task-list.md](instudio-pms-get-walmart-task-list.md)
- [instudio-pms-check-walmart-forbid-word.md](instudio-pms-check-walmart-forbid-word.md)
- [instudio-pms-id-walmart-get-cawalmart-publish-confirm.md](instudio-pms-id-walmart-get-cawalmart-publish-confirm.md)
- [instudio-pms-get-field-config.md](instudio-pms-get-field-config.md)
- [instudio-pms-get-field-config-v3.md](instudio-pms-get-field-config-v3.md)
- [instudio-pms-get-spu-image-walmart.md](instudio-pms-get-spu-image-walmart.md)
- [instudio-pms-get-walmart-category-list.md](instudio-pms-get-walmart-category-list.md)
- [instudio-pms-spu-get-walmart-color-and-size.md](instudio-pms-spu-get-walmart-color-and-size.md)
- [instudio-pms-get-walmart-publish-category.md](instudio-pms-get-walmart-publish-category.md)
- [instudio-pms-get-walmart-publish-category-new.md](instudio-pms-get-walmart-publish-category-new.md)
- [instudio-pms-get-walmart-publish-category-path.md](instudio-pms-get-walmart-publish-category-path.md)
- [instudio-pms-get-walmart-publish-confirm-list-walmart.md](instudio-pms-get-walmart-publish-confirm-list-walmart.md)
- [instudio-pms-get-walmart-publish-confirm-list-v3.md](instudio-pms-get-walmart-publish-confirm-list-v3.md)
- [instudio-pms-id-walmart-get-walmart-publish-confirm-new.md](instudio-pms-id-walmart-get-walmart-publish-confirm-new.md)
- [instudio-pms-id-walmart-get-walmart-publish-confirm-v3.md](instudio-pms-id-walmart-get-walmart-publish-confirm-v3.md)
- [instudio-pms-id-walmart-get-walmart-publish-confirm.md](instudio-pms-id-walmart-get-walmart-publish-confirm.md)
- [instudio-pms-get-walmart-publish-shop.md](instudio-pms-get-walmart-publish-shop.md)
- [instudio-pms-export-sku.md](instudio-pms-export-sku.md)
- [instudio-pms-find-warehouse-receive.md](instudio-pms-find-warehouse-receive.md)
- [instudio-pms-find-house.md](instudio-pms-find-house.md)
- [instudio-pms-find-house-positon.md](instudio-pms-find-house-positon.md)
- [instudio-pms-find-receive.md](instudio-pms-find-receive.md)
- [instudio-pms-get-attributes-by-type.md](instudio-pms-get-attributes-by-type.md)
- [instudio-pms-get-country-shipping.md](instudio-pms-get-country-shipping.md)
- [instudio-pms-get-main-pics-by-spu-style-wish-publish-info.md](instudio-pms-get-main-pics-by-spu-style-wish-publish-info.md)
- [instudio-pms-get-pic-infos-by-pic-style-wish-publish-info.md](instudio-pms-get-pic-infos-by-pic-style-wish-publish-info.md)
- [instudio-pms-get-sell-price-by-sku.md](instudio-pms-get-sell-price-by-sku.md)
- [instudio-pms-get-spu-info.md](instudio-pms-get-spu-info.md)
- [instudio-pms-preview.md](instudio-pms-preview.md)
- [instudio-pms-tort-data.md](instudio-pms-tort-data.md)
- [instudio-pms-find-publish-shop-yandex-auto-publish.md](instudio-pms-find-publish-shop-yandex-auto-publish.md)
- [instudio-pms-get-yandex-publish-confirm-list.md](instudio-pms-get-yandex-publish-confirm-list.md)
- [instudio-pms-id-yandex-auto-publish-get-yandex-publish-confirm.md](instudio-pms-id-yandex-auto-publish-get-yandex-publish-confirm.md)
- [instudio-pms-get-yandex-publish-shop-yandex-auto-publish.md](instudio-pms-get-yandex-publish-shop-yandex-auto-publish.md)
- [instudio-pms-get-yandex-task-list.md](instudio-pms-get-yandex-task-list.md)
- [instudio-pms-category-id-get-category-chain.md](instudio-pms-category-id-get-category-chain.md)
- [instudio-pms-get-category-list-yandex-basic-date.md](instudio-pms-get-category-list-yandex-basic-date.md)
- [instudio-pms-parent-cat-id-get-category-list.md](instudio-pms-parent-cat-id-get-category-list.md)
- [instudio-pms-get-category-select-yandex-basic-date.md](instudio-pms-get-category-select-yandex-basic-date.md)
- [instudio-pms-get-characteristic-option.md](instudio-pms-get-characteristic-option.md)
- [instudio-pms-id-yandex-publish-get-yandex-publish-confirm.md](instudio-pms-id-yandex-publish-get-yandex-publish-confirm.md)
- [instudio-pms-get-yandex-publish-request-list.md](instudio-pms-get-yandex-publish-request-list.md)
- [instudio-pms-get-yandex-publish-shop-yandex-publish.md](instudio-pms-get-yandex-publish-shop-yandex-publish.md)
- [instudio-pms-get-yandex-shop-config.md](instudio-pms-get-yandex-shop-config.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
