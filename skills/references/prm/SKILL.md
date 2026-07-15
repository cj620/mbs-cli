# prm - 负责将商品信息上传到指定平台

通过 `mbs prm` 命令查询负责将商品信息上传到指定平台数据。

## 数据来源

- Service: `-`

## 适用场景

刊登

## 意图匹配

关键词：刊登、publish

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 获取全部站点(站点下拉数据)：商品侵权授权弹框(tortForm)初始化时拉取全部「平台-站点」清单，用于「站点」多选下拉(#site-selector)。前端遍历返回数组为每项拼装 key=平台ID-站点-平台名 与 label=平台名-站点 后绑定到 siteOptions。 | `mbs prm erpsoldout-get-all-site` | - |
| 按专利国家ID查询关联禁售平台/站点：SPU详情页“禁售平台/专利国家”模块中，用户在「专利国家」多选下拉选择一个或多个国家后触发，按所选专利国家ID(列表)查询其对应需禁售的平台与站点集合，前端据此把对应平台名加入禁售平台多选、把站点加入禁售站点多选。 | `mbs prm erpsoldout-id-get-pantent-country-by-id1` | `id` |
| 根据专利国家ID查询关联平台与站点：在商品侵权审核-提交侵权授权弹框中选择专利国家后触发；按所选专利国家ID返回关联的侵权平台(platform)与站点(site)集合，前端据此自动并入已选侵权平台与站点。 | `mbs prm erpsoldout-id-get-pantent-country-by-id` | `id` |
| 获取专利国家下拉选项：SPU详情页“专利国家”多选下拉的数据源接口。页面加载时以 axios.get 调用，无请求参数；返回 obj 数组赋给 state.patentCountryOptions，在 #patentCountry el-select 中以 id 为选项值、countryName 为显示文本渲染，并据用户角色与已选专利国家设置选项禁用态。 | `mbs prm erpsoldout-get-pantent-country` | - |
| 根据平台查询站点列表(getSite)：在「提交钓鱼信息」弹窗中，用户选择「平台」(多选)后触发，根据所选平台ID集合查询其对应的站点(site)列表，用于「站点」下拉框的可选项渲染。 | `mbs prm erpsoldout-get-site` | `platformIds` |
| 平台类型枚举查询：获取刊登模板下拉所需的「平台类型枚举」列表。前端在组件挂载时调用，拿到平台数组后用于渲染「刊登模板」下拉菜单，并按 canSalePlatform 过滤被禁用平台（120→TIKTOK、119→OZON），再据所选平台预取刊登模板ID。 | `mbs prm product-auto-listing-service-platform-type-enum` | - |
| 亚马逊获取默认/可用物流模板：亚马逊调价页面切换店铺时，按店铺名称(shopName，作为 URL 路径参数)查询该店铺的可用物流(运费)模板，返回模板列表用于渲染「物流模板」下拉框(#shippingTemplate)。 | `mbs prm yypms-shop-name` | `shopName` |
| 获取SPU的AI商品属性：文生图向导(场景图/ozon主图/自定义咒语)打开时，按 SPU 拉取该商品由AI生成的结构化属性(产品名、关键词、卖点、受众、使用场景/方式、材质、ozon类目与排版模板、ozon中俄标题与主/次卖点)，用于自动拼装“商品信息”向导文本与排版模板默认值。 | `mbs prm yypms-spu` | `spu` |
| 开发审批详情查询（按ID）：根据开发任务/审批ID查询开发审批详情。前端在 AI 图片描述组件中，当未取到1688采集图片(getAlibabaAiProductImg)时，调用本接口作为回退(fallback)，从返回的 obj.pictureList 中解析供应商图片URL列表用于展示。 | `mbs prm yypms-id-get-developer-approval-by-id` | `id` |
| 类目自定义刊登属性(颜色/尺码)查询：海外仓即时开发页选定产品分类(类目最后一级)后，按该类目序号ID查询其自定义刊登属性，返回可用的刊登颜色与刊登尺码候选列表，用于款式表格中刊登颜色/刊登尺码输入框的自动补全。 | `mbs prm yypms-sequenceid` | `sequenceid` |
| Walmart 属性条件必填规则查询：Walmart 刊登商品编辑页加载产品属性时调用：按商品(草稿/listing)ID 获取该模板的条件必填联动规则列表。前端据此规则，当某属性(conditionField)取到指定值(conditionValue)时，把被联动字段(thenRequiredField)从选填动态切换为必填，反之切回选填。 | `mbs prm yypms-id-get-condition-required-info-v3` | `id` |
| Walmart 产品属性条件必填规则查询：Walmart 刊登编辑页加载产品属性时调用：依据刊登任务ID查询该商品/模板下属性条件必填联动规则列表。前端据此在某属性当前值命中 conditionValue 时，把 thenRequiredField 指定的字段由选填动态切换为必填（反之回退为选填）。 | `mbs prm yypms-pms-id` | `id` |
| 根据大店铺查询子(Joom)店铺：Joom 批量刊登页“请选择店铺”模态框中，用户在大店铺多选框选定店铺后触发，按大店铺名称(shopName)查询其下属的 Joom 子店铺名称列表，用于渲染子店铺多选清单。 | `mbs prm erp-publish-get-small-shop-by-big-shop` | - |
| 查询已刊登过的店铺(Joom)：Joom 批量刊登页切换到"刊登完毕"视图时调用，获取已刊登过的 Joom 店铺列表，用于渲染"选择新刊登店铺"下拉框。无任何请求参数，返回店铺名称列表。 | `mbs prm erp-publish-list-have-published-shop-joom-product-publish` | - |
| Joom刊登商品(Listing)列表查询：Joom批量刊登页面列表分页查询：等待刊登/刊登完毕两标签页共用，按刊登状态、商品属性、店铺、刊登人、站点、SPU备注、刊登时间区间、新刊登店铺等筛选，返回SPU行(含子SKU列表joomPublishSkuVo)、价格/毛利、店铺、刊登状态与时间等字段。 | `mbs prm erp-publish-list-product-by-listing-joom-product-publish` | `currentPage` |
| 查询未刊登过的店铺列表(Joom)：进入 Joom 批量刊登页或切换到「等待刊登」标签时，在 search() 成功回调内调用，拉取当前用户「未刊登过」的 Joom 店铺列表，用于渲染 #shopName 店铺下拉框。该接口不携带任何请求参数。 | `mbs prm erp-publish-list-un-publish-shop` | - |
| 拦截SKU列表查询：eBay批量刊登页"拦截SKU"弹窗的列表查询接口：分页查询已被拦截(禁止刊登)的SKU记录，支持按SKU模糊查询，返回拦截SKU清单(SKU、拦截站点/范围、提交人、提交时间)及分页汇总信息。 | `mbs prm erp-publish-forbid-sku-list` | - |
| 刊登统计概览查询：ebay批量刊登页面初始化时调用，无入参，返回当前等待刊登、刊登中、昨日/今日刊登成功与失败数量等汇总统计，用于页面顶部状态条展示。 | `mbs prm erp-publish-get-publish-detail-info` | - |
| 查询已刊登过的店铺列表：加载当前用户已刊登过的 eBay 店铺列表，用于批量刊登页面顶部「选择新刊登店铺」下拉框（#PublishedShop）的渲染。页面加载时调用一次，无任何请求参数；返回店铺名称数组，前端用 art-template 模板 PublishedShopTemplate 渲染为 option。 | `mbs prm erp-publish-list-have-published-shop-product-publish` | - |
| eBay刊登商品列表查询：eBay批量刊登页列表多维度分页查询：按生成时间/刊登时间区间、刊登状态、SKU、属性类型、站点、店铺、刊登人、价格区间、批量备注、退款、刊登结果等条件筛选，返回刊登商品(SPU)列表及其下 eBay SKU 明细、总条数与总页数。 | `mbs prm erp-publish-list-product-by-listing-product-publish` | `currentPage`, `pagesize` |
| 未刊登店铺列表查询：获取当前用户尚未刊登过的 eBay 店铺列表，用于 eBay 批量刊登页的目标店铺下拉框(#pubshop)与未刊登店铺筛选下拉框(#shopName)渲染。前端不传任何业务参数，直接 POST 调用。 | `mbs prm erp-publish-list-publish-shop-product-publish` | - |
| 店铺刊登状态数量统计查询：Shopee 自动刊登页面，按店铺名称查询该店铺「等待刊登/刊登成功/刊登失败/放弃刊登」四类数量，回填到店铺左侧统计标签；删除/放弃刊登成功后重新调用以刷新数量。 | `mbs prm erp-publish-find-publish-detail-by-shopname-shopee-product-controller` | `shopname` |
| 查询Shopee自动刊登店铺及刊登统计：Shopee自动刊登页面加载时调用，查询当前用户的头像、当前刊登成功数、当前等待刊登数，以及该用户名下的Shopee店铺列表（含每个店铺的店铺名、店铺ID、已刊登成功数量）。返回结果用于渲染顶部统计、左侧店铺树与店铺下拉框。该接口无请求参数，依赖登录态识别当前用户。 | `mbs prm erp-publish-find-publish-shop-shopee-product-controller` | - |
| Shopee自动刊登SPU列表查询：Shopee 自动刊登管理页右侧 SPU 列表分页查询：按目标店铺、刊登状态、SPU关键词、产品状态、销量级别、站点等条件筛选，返回待刊登/刊登中/已刊登的 SPU 列表（含每个 SPU 下的 SKU 明细、价格、库存、刊登状态等），并返回总数与总页数用于分页。 | `mbs prm erp-publish-find-shopee-autopublish-spu` | `currentPage`, `pageSize` |
| SMT可刊登店铺列表查询：SMT批量刊登页打开“多选店铺”模态框时调用，获取当前可刊登(SMT/Lazada)店铺列表，用于渲染店铺多选复选框。请求体为空(不传任何参数)，返回店铺名称列表。 | `mbs prm erp-publish-list-publish-shop-smt-product-publish` | - |
| SMT Relisting失败信息详情列表查询：查询速卖通(SMT/aliexpress)商品重新刊登(relisting)的明细列表，按是否成功、刊登时间、店铺名进行分页过滤，返回失败/成功的源SPU、源itemID、状态、销量、失败原因等明细，用于relisting失败信息详情页面表格渲染。 | `mbs prm erp-publish-list-relisting-details` | `isSuccess`, `pageSize`, `currentPage` |
| AliExpress Relisting结果列表查询：速卖通(平台ID=10) relisting 结果列表查询：按店铺负责人、店铺、relisting时间区间分页查询，返回每个店铺/日期的 relisting 成功数量、失败数量及生成/relisting日期，并附分页总页数与总条数。 | `mbs prm erp-publish-list-relisting-results` | `relistingTimeStart`, `relistingTimeEnd`, `pageSize`, `currentPage` |
| 按站点获取算价渠道：TikTok 批量提价/生成提价商品信息弹窗中，用户在站点多选框选择站点后(onchange 触发 getPriceChannels)，按站点(逗号拼接)查询该站点集合下可用的算价渠道列表，返回结果用于填充算价渠道下拉框 #priceChannels。 | `mbs prm erp-publish-get-price-channel-by-site` | `site` |
| 店铺刊登明细数量查询(按店铺名)：TikTok自动刊登页面左侧店铺树展开某店铺时调用，按店铺名称查询该店铺下「等待刊登/刊登成功/刊登失败/放弃刊登」四类数量，用于侧边店铺节点徽标展示。 | `mbs prm erp-publish-find-publish-detail-by-shopname-tiktok-product-controller` | `shopname` |
| 查询刊登店铺及刊登概况：TikTok自动刊登页初始化时调用，返回当前用户头像、当前刊登成功/等待刊登数量，以及该用户可见的刊登店铺列表(含店铺名称、店铺ID、各店铺刊登成功数)，用于渲染顶部概况、左侧店铺导航及店铺下拉框。 | `mbs prm erp-publish-find-publish-shop-tiktok-product-controller` | - |
| 按店铺名查询(TikTok)自动刊登参数：在「TikTok自动刊登」页面点击某店铺的「设置」齿轮时调用，按店铺名称查询该店铺已保存的自动刊登参数（站点、分类、毛利率、折扣、平台费率、上架时间、刊登间隔、是否自动刊登、算价渠道、库存、刊登数等），用于回显自动刊登参数设置弹窗。 | `mbs prm erp-publish-find-shop-param-by-shopname` | `shopname` |
| TikTok自动刊登SPU列表查询：TikTok自动刊登页（已刊登/待刊登）SPU分页列表查询：支持按目标店铺、刊登结果、店铺名称、刊登状态、SPU编码、产品状态、销量级别、站点等条件分页查询，返回SPU列表（含每个SPU下的刊登SKU明细、价格/毛利率、刊登状态、开发员等）。 | `mbs prm erp-publish-find-tiktok-autopublish-spu` | `currentPage`, `pageSize` |
| 查询TikTok一级分类：TikTok 自动刊登页加载时调用，获取 TikTok 全部一级分类名称列表，用于渲染页面「TikTok一级分类」筛选下拉框(#tiktokFirstCategory)。请求体为空对象，不需要任何入参；返回值 obj 为分类名称字符串数组。 | `mbs prm erp-publish-fin-tiktok-first-category` | - |
| 侵权审核-关联SKU查询(beforVerifier)：在“商品侵权”列表点击单条/批量审核时，按侵权记录ID(id)查询该记录关联的“审核后(listAfter)”与“审核前(listbefore)”SKU列表，用于侵权审核弹框中展示并勾选要提交的侵权SKU；返回每个SKU的图片、子SKU、相似度评分、是否侵权等。 | `mbs prm erpsoldout-befor-verifier-infringing` | `id` |
| 侵权下架-分类(一级分类)下拉查询：侵权下架SKU列表页加载时调用，获取「一级分类」下拉选择框的可选分类列表（返回分类名称数组），用于渲染 #category 下拉框的 <option>。无请求参数。 | `mbs prm erpsoldout-category` | - |
| 侵权审核-批量操作前批次校验：商品侵权审核列表中，点击批量「通过/不通过/删除」时，先把列表中勾选的侵权记录ID集合(submitIdList)提交后端校验是否满足批量条件(如是否同一批次/请求)。校验通过(code=200)后前端再弹确认框并调用 batchVerify 执行批量审核；校验不通过则用返回的 desc 文案提示。 | `mbs prm erpsoldout-check-is-batch` | `submitIdList` |
| 获取当前登录员工ID(empID)：财务工作台仪表盘加载完成后调用，获取当前登录用户对应的 yy 员工ID(yyemployeeId)，前端将其写入名为 employeeId 的 Cookie(有效期365天)，供后续接口(如 positionName 取岗位、侵权/下架数量跳转链接)使用。 | `mbs prm erpsoldout-emp-id` | - |
| 获取提交人(创建人)下拉列表：商品侵权列表页初始化时调用，拉取提交人/创建人候选员工列表，渲染 #Founder 下拉框。前端 findCreater() 通过 $.ajax POST 调用，无请求参数，成功后用 art-template 模板 contentTemplate2 渲染。 | `mbs prm erpsoldout-find-creater-infringing` | - |
| 侵权商品列表查询：按 SKU 列表查询侵权商品记录，分页返回侵权关键词、关联SKU、侵权平台、在售/下架成功/下架失败商品数、审核状态、提交/审核人、侵权图片等明细，用于侵权审核任务列表渲染与分页。 | `mbs prm erpsoldout-findinfringing` | - |
| 侵权信息待审核数量查询：开发员工作台(Dashboard)首页加载及每5分钟定时刷新时调用，统计当前登录员工名下「侵权信息待审核」的商品数量，渲染到工作台 #findInfringNum 角标，并据返回的员工ID拼接跳转链接。无请求参数(后端依据登录态/会话识别员工)。 | `mbs prm erpsoldout-find-infring-num` | - |
| 侵权商品数量查询：仪表盘(common.html)按员工/店铺统计该用户名下已标注侵权但线上仍在售的商品数量，结果填入侵权商品角标(#findInfringProductNum)，并据返回 content 拼接跳转到侵权商品明细页。订单看板加载(orderstats)、切换组员(salesmanstats)及每5分钟定时刷新(settime)均会调用。 | `mbs prm erpsoldout-find-infring-product-num` | `userId` |
| 查询平台列表(侵权商品筛选用)：进入侵权商品明细页时自动调用，获取全部平台列表，渲染顶部「请选择平台」下拉框(#platformName)的选项，供后续侵权商品查询/导出按平台筛选。该接口为无参 POST 查询。 | `mbs prm erpsoldout-find-platform-infringing` | - |
| 店铺下拉列表查询(findShop)：商品侵权详情页加载时调用，获取当前可选店铺列表，用于渲染「请选择店铺」下拉框(#shopId)。POST 请求无任何请求参数，返回店铺ID与店铺名称集合。 | `mbs prm erpsoldout-find-shop` | - |
| 获取审核小组权限：抛重检测页面 packageInfo.vue 在 onMounted 时调用 getPerson()，向后端查询当前登录用户是否具备审核权限及所属部门，用于控制页面审核相关按钮的显示。请求无任何业务参数(POST 空 body)，返回审核标识 isExamine 与部门名称 depart。 | `mbs prm erpsoldout-get-examine-team-authority` | - |
| SKU侵权平台信息查询(getInfoSubmit)：SKU详情页加载时查询该SKU的侵权平台提示信息，后端返回以英文分号';'拼接的侵权平台字符串，前端按';'拆分后逐条以红色文字渲染到#totarplat区域，用于提示运营该SKU在哪些平台存在侵权风险。 | `mbs prm erpsoldout-get-info-submit` | `sku` |
| 侵权SKU(画廊)信息查询：侵权监控画廊页(gallery.html)加载/换一批/切换大类时调用：按大类(parentCategoryId)查询已提交侵权信息的SKU列表，返回该大类下SKU数量徽标(content)与SKU卡片列表(obj，含图片、SPU、侵权描述、提交人与提交时间)，用于art-template渲染商品画廊。 | `mbs prm erpsoldout-get-infringing-sku-info` | - |
| 侵权词库分页查询：侵权词库列表分页查询：按侵权词、平台、提交人筛选，分页返回侵权词记录列表（含替换词、平台、描述、提交记录、站点、筛选规则等）及总条数，供侵权词库页面表格展示。 | `mbs prm erpsoldout-get-pms-infringed-words` | - |
| 钓鱼词库列表查询：钓鱼词库（侵权钓鱼词）分页列表查询：支持按钓鱼词、平台、提交人、审核人、大类、审核状态等条件分页过滤，返回钓鱼词记录列表（含平台/站点/替换词/筛选规则/创建更新删除轨迹/审核状态/操作日志）及总条数。 | `mbs prm erpsoldout-get-pms-phishing-words-list` | `currentPage`, `pageSize` |
| 钓鱼词操作日志列表查询：钓鱼词库列表页中，点击某一条钓鱼词记录“操作日志”列的“获取更多”链接时，按该记录ID查询其全部操作日志，返回操作时间/操作人/操作内容列表，前端以时间线(el-timeline)形式弹窗展示。 | `mbs prm erpsoldout-get-pms-phishing-words-log-list` | `id` |
| 钓鱼词详情查询：根据钓鱼词记录ID查询单条钓鱼词配置详情，用于「编辑」弹窗回填表单（钓鱼词、替换词、平台、描述、站点、一级分类、包含词、是否包含for、是否车标词等）。 | `mbs prm erpsoldout-get-pms-phishing-words` | `id` |
| 侵权在线商品列表查询：侵权商品详情页的在线商品分页查询：按 SKU、平台、店铺、开发员、关键词移除状态、图片移除/更换状态、商品(下架)状态、时间等条件分页查询平台在线侵权商品列表，返回商品信息、店铺、侵权关键词/商品/图片三类侵权信息列表及 SKU 列表。 | `mbs prm erpsoldout-on-line-product-infringing` | `currPage` |
| 侵权/下架SKU列表查询：侵权下架（SKU下架）管理列表的多条件分页查询：支持一级分类、平台、提交人、下架原因、侵权关键词、SKU（多值空格分割）、商品标题关键词、创建时间区间等筛选，返回下架商品列表及总数、总页数。 | `mbs prm erpsoldout-sould-out-sku-list` | `currPage` |
| 提交人下拉列表查询：SKU下架管理页加载时调用，获取「提交人」筛选下拉框的人员列表（员工ID + 员工姓名），用于渲染 #submitRen 选择框。POST 请求，无请求体参数；返回 obj 数组，前端用 art-template 模板 contentTemplate3 逐项渲染为 option。 | `mbs prm erpsoldout-submit` | - |
| 提交侵权(下架授权)信息：商品侵权页“提交侵权信息”弹框点击确认后，提交侵权SKU、侵权关键词、侵权图片、侵权平台/站点、移除范围(类别/标题关键字)及自动移除图片/自动下架/自动移除关键词等处理选项，由后端登记侵权信息并按选项执行下架/移除处理。 | `mbs prm erpsoldout-info` | `description` |
| 获取侵权审核人列表：商品侵权审核页加载时调用，获取可选的侵权审核人(审核人)员工列表，用于渲染筛选区 #Auditor 下拉框。无请求参数；响应为审核人数组，前端用 art-template 模板 contentTemplate5 遍历 obj 渲染 option，取 employeeId 作为 value、employeeName 作为显示文本。 | `mbs prm erpsoldout-verifier` | - |
| 下架任务审核前关联SKU查询：平台商品下架页点击某下架任务“审核通过”链接时调用：传任务ID，返回该任务待审核的SKU列表(listbefore，左栏)与系统关联出的SKU列表(listAfter，右栏)，前端用 art-template(contentTemplate7) 渲染双栏勾选框，供审核人勾选后调用 passAudit 通过审核。 | `mbs prm erpsoldout-befor-verifier-sold-out` | `id` |
| 查询下架任务创建人列表：平台商品下架页加载时调用，拉取“创建人”筛选下拉框的可选项列表，用于按创建人过滤下架任务。无任何请求参数；返回创建人(员工)集合，每项含员工ID与员工姓名，前端用 art-template 渲染为 #Founder 下拉框的 <option>。 | `mbs prm erpsoldout-find-creater-sold-out` | - |
| 查询钓鱼词提交人(创建人)列表：钓鱼词库(report/phishingwords.vue)页面初始化时调用，返回所有钓鱼词的提交人(创建人)姓名列表，用于顶部搜索区"请选择提交人"下拉框(Searchoption.submitBy)的可选项。无任何请求参数。 | `mbs prm erpsoldout-find-phishing-words-creater` | - |
| 获取新增下架平台(及当前创建人)：平台商品下架(PlatformCommodityShelf)页面初始化及点击“提交下架SKU”时调用：无入参，返回当前可选的下架平台列表(平台ID/平台名称)，同时返回当前操作人(创建人)信息；前端取 obj[0].employeeName 作为创建人显示、用 contentTemplate6 渲染下架平台下拉框。 | `mbs prm erpsoldout-find-platform-of-add` | - |
| 查询平台列表(下架平台下拉)：平台商品下架页面初始化时调用，无入参，返回全部平台列表(平台ID+平台名称)，用于渲染「请选择平台」下拉框(#platformName)的选项。 | `mbs prm erpsoldout-find-platform-sold-out` | - |
| 下架SKU待审核数量查询：开发员工作台(仪表盘)统计当前登录员工「下架SKU待审核」的商品数量，返回数量值并随返回的员工ID拼接跳转链接(跳转下架商品上架页 status=4)。定时器每 5 分钟刷新一次。 | `mbs prm erpsoldout-find-sold-out-num` | - |
| 查询售罄(清仓滞销)商品数量：根据用户(员工)ID统计其名下售罄/清仓(soldOut)商品的数量，返回单个数量值，前端用于 Dashboard 首页 #findSoldOutProductNum 徽标展示，并据返回的员工ID拼接「平台商品详情(status=0)」跳转链接。 | `mbs prm erpsoldout-find-sold-out-product-num` | `userId` |
| 查询下架原因列表：进入平台商品下架明细页时调用，获取全部「下架原因」枚举列表，用于渲染顶部筛选区 #Reason 下拉框（contentTemplate4）。无请求参数，响应为下架原因字符串数组。 | `mbs prm erpsoldout-find-sold-out-reason` | - |
| 下架任务列表查询：平台商品下架任务分页查询：按 SKU、创建人、平台、创建时间区间、下架原因、任务状态等条件分页查询下架任务列表，返回任务编号、状态、平台、下架原因、下架总量/成功/失败数、关联 SKU、创建人/审核人/创建时间/完成时间等字段。 | `mbs prm erpsoldout-find-sold-out-task` | `currPage` |
| 获取下架审核人列表：平台商品下架页面初始化时调用，用于获取“下架审核人”下拉框的数据源。无入参，返回审核人(员工)列表，前端用 art-template 模板 contentTemplate5 渲染为 #frameReviewer 下拉选项(value=员工ID，文本=员工姓名)。 | `mbs prm erpsoldout-find-sold-out-verifier` | - |
| 平台在线商品(下架任务)列表查询：平台商品下架管理页列表查询：按平台、店铺、SKU(多值)、操作状态、下架原因等条件分页查询在线商品/下架任务记录，返回分页列表(含店铺、标题、SKU、库存、销量、操作状态、执行信息等)。 | `mbs prm erpsoldout-on-line-product-sold-out` | `currPage` |
| 刊登模板分页查询：根据 ERP SPU 与平台类型(platformType)分页查询该商品在指定平台下已存在的刊登模板列表；前端取返回列表首条记录的 id，用于刊登模板下拉跳转到对应平台的编辑页(回填模板id)。 | `mbs prm product-auto-listing-service-get-listing-template-page` | `erpSpu`, `platformType` |
| 获取SPU预设场景咒语(提示词)：根据SPU编号查询该商品在AI文字生成图片/场景定制功能下预设的场景列表，每个场景包含一组方案变体(提示词/咒语)。前端在图片库AI生成弹窗中据此渲染预设场景卡片、场景下拉、方案变体标签与指令描述输入框。 | `mbs prm yypms-spu-name` | `spuName` |
| 商品分类列表查询(级联)：按分类层级与父级分类ID查询商品分类列表，用于 SPU 在线报表页一级/二级分类级联下拉。空 id 查一级分类；传一级分类 sequenceid 查其二级分类。URL 末段 /1/ 为固定层级标识，父级分类 id 拼接其后。axios.post 无请求体，参数全部在 URL 路径上。 | `mbs prm pms-id` | `id`, `level` |

## 命令详情

- [erpsoldout-get-all-site.md](erpsoldout-get-all-site.md)
- [erpsoldout-id-get-pantent-country-by-id1.md](erpsoldout-id-get-pantent-country-by-id1.md)
- [erpsoldout-id-get-pantent-country-by-id.md](erpsoldout-id-get-pantent-country-by-id.md)
- [erpsoldout-get-pantent-country.md](erpsoldout-get-pantent-country.md)
- [erpsoldout-get-site.md](erpsoldout-get-site.md)
- [product-auto-listing-service-platform-type-enum.md](product-auto-listing-service-platform-type-enum.md)
- [yypms-shop-name.md](yypms-shop-name.md)
- [yypms-spu.md](yypms-spu.md)
- [yypms-id-get-developer-approval-by-id.md](yypms-id-get-developer-approval-by-id.md)
- [yypms-sequenceid.md](yypms-sequenceid.md)
- [yypms-id-get-condition-required-info-v3.md](yypms-id-get-condition-required-info-v3.md)
- [yypms-pms-id.md](yypms-pms-id.md)
- [erp-publish-get-small-shop-by-big-shop.md](erp-publish-get-small-shop-by-big-shop.md)
- [erp-publish-list-have-published-shop-joom-product-publish.md](erp-publish-list-have-published-shop-joom-product-publish.md)
- [erp-publish-list-product-by-listing-joom-product-publish.md](erp-publish-list-product-by-listing-joom-product-publish.md)
- [erp-publish-list-un-publish-shop.md](erp-publish-list-un-publish-shop.md)
- [erp-publish-forbid-sku-list.md](erp-publish-forbid-sku-list.md)
- [erp-publish-get-publish-detail-info.md](erp-publish-get-publish-detail-info.md)
- [erp-publish-list-have-published-shop-product-publish.md](erp-publish-list-have-published-shop-product-publish.md)
- [erp-publish-list-product-by-listing-product-publish.md](erp-publish-list-product-by-listing-product-publish.md)
- [erp-publish-list-publish-shop-product-publish.md](erp-publish-list-publish-shop-product-publish.md)
- [erp-publish-find-publish-detail-by-shopname-shopee-product-controller.md](erp-publish-find-publish-detail-by-shopname-shopee-product-controller.md)
- [erp-publish-find-publish-shop-shopee-product-controller.md](erp-publish-find-publish-shop-shopee-product-controller.md)
- [erp-publish-find-shopee-autopublish-spu.md](erp-publish-find-shopee-autopublish-spu.md)
- [erp-publish-list-publish-shop-smt-product-publish.md](erp-publish-list-publish-shop-smt-product-publish.md)
- [erp-publish-list-relisting-details.md](erp-publish-list-relisting-details.md)
- [erp-publish-list-relisting-results.md](erp-publish-list-relisting-results.md)
- [erp-publish-get-price-channel-by-site.md](erp-publish-get-price-channel-by-site.md)
- [erp-publish-find-publish-detail-by-shopname-tiktok-product-controller.md](erp-publish-find-publish-detail-by-shopname-tiktok-product-controller.md)
- [erp-publish-find-publish-shop-tiktok-product-controller.md](erp-publish-find-publish-shop-tiktok-product-controller.md)
- [erp-publish-find-shop-param-by-shopname.md](erp-publish-find-shop-param-by-shopname.md)
- [erp-publish-find-tiktok-autopublish-spu.md](erp-publish-find-tiktok-autopublish-spu.md)
- [erp-publish-fin-tiktok-first-category.md](erp-publish-fin-tiktok-first-category.md)
- [erpsoldout-befor-verifier-infringing.md](erpsoldout-befor-verifier-infringing.md)
- [erpsoldout-category.md](erpsoldout-category.md)
- [erpsoldout-check-is-batch.md](erpsoldout-check-is-batch.md)
- [erpsoldout-emp-id.md](erpsoldout-emp-id.md)
- [erpsoldout-find-creater-infringing.md](erpsoldout-find-creater-infringing.md)
- [erpsoldout-findinfringing.md](erpsoldout-findinfringing.md)
- [erpsoldout-find-infring-num.md](erpsoldout-find-infring-num.md)
- [erpsoldout-find-infring-product-num.md](erpsoldout-find-infring-product-num.md)
- [erpsoldout-find-platform-infringing.md](erpsoldout-find-platform-infringing.md)
- [erpsoldout-find-shop.md](erpsoldout-find-shop.md)
- [erpsoldout-get-examine-team-authority.md](erpsoldout-get-examine-team-authority.md)
- [erpsoldout-get-info-submit.md](erpsoldout-get-info-submit.md)
- [erpsoldout-get-infringing-sku-info.md](erpsoldout-get-infringing-sku-info.md)
- [erpsoldout-get-pms-infringed-words.md](erpsoldout-get-pms-infringed-words.md)
- [erpsoldout-get-pms-phishing-words-list.md](erpsoldout-get-pms-phishing-words-list.md)
- [erpsoldout-get-pms-phishing-words-log-list.md](erpsoldout-get-pms-phishing-words-log-list.md)
- [erpsoldout-get-pms-phishing-words.md](erpsoldout-get-pms-phishing-words.md)
- [erpsoldout-on-line-product-infringing.md](erpsoldout-on-line-product-infringing.md)
- [erpsoldout-sould-out-sku-list.md](erpsoldout-sould-out-sku-list.md)
- [erpsoldout-submit.md](erpsoldout-submit.md)
- [erpsoldout-info.md](erpsoldout-info.md)
- [erpsoldout-verifier.md](erpsoldout-verifier.md)
- [erpsoldout-befor-verifier-sold-out.md](erpsoldout-befor-verifier-sold-out.md)
- [erpsoldout-find-creater-sold-out.md](erpsoldout-find-creater-sold-out.md)
- [erpsoldout-find-phishing-words-creater.md](erpsoldout-find-phishing-words-creater.md)
- [erpsoldout-find-platform-of-add.md](erpsoldout-find-platform-of-add.md)
- [erpsoldout-find-platform-sold-out.md](erpsoldout-find-platform-sold-out.md)
- [erpsoldout-find-sold-out-num.md](erpsoldout-find-sold-out-num.md)
- [erpsoldout-find-sold-out-product-num.md](erpsoldout-find-sold-out-product-num.md)
- [erpsoldout-find-sold-out-reason.md](erpsoldout-find-sold-out-reason.md)
- [erpsoldout-find-sold-out-task.md](erpsoldout-find-sold-out-task.md)
- [erpsoldout-find-sold-out-verifier.md](erpsoldout-find-sold-out-verifier.md)
- [erpsoldout-on-line-product-sold-out.md](erpsoldout-on-line-product-sold-out.md)
- [product-auto-listing-service-get-listing-template-page.md](product-auto-listing-service-get-listing-template-page.md)
- [yypms-spu-name.md](yypms-spu-name.md)
- [pms-id.md](pms-id.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
