<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# oms - 订单系统

通过 `mbs oms` 命令查询订单系统数据。

## 数据来源

- Service: `-`

## 适用场景

订单

## 意图匹配

关键词：订单

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 查询当前登录管理员信息(getDbSysadmin)：从 HttpSession(sysloginadmin) 取出当前登录管理员实体 DbSysadmin 并整体返回。移动端页面初始化时调用，用于获取当前用户的部门、职位、平台、店铺管理权限等信息；前端将整个返回对象存入 localStorage.userInfo，并据 depart(部门) 控制页面跳转与展示。直接返回实体，未包装 CommonResponse。 | `mbs oms erp-mobile-get-db-sysadmin` | - |
| 订单操作日志查询：根据订单ID查询该订单的全部操作日志记录，返回操作人、操作时间、操作描述的列表；前端在订单详情页“操作日志”模块中，将列表前10条渲染到 OperTemplate1，第10条之后渲染到 OperTemplate2(点击查看更多展开)。 | `mbs oms erp-mobile-get-order-log-by-order-id` | `orderId` |
| 根据操作员获取岗位ID：移动端订单详情页加载时调用，无入参，返回当前登录操作员对应的岗位ID。前端取响应体 obj 字段赋给 window.positionId，供作废订单等操作校验。 | `mbs oms erp-mobile-get-position-id-by-oper` | - |
| 开发趋势图-榜单与汇总查询：按日期+开发员+类目查询当日/上一日交易额、热销类目榜、组员排行榜、店铺贡献榜、销售贡献榜。 | `mbs oms erp-mobile-get-developer-info-by-datetime` | `datetime` |
| 按平台查询大酋长(负责人)列表：销售趋势图搜索页(移动端)：选择平台后，按平台ID查询该平台对应的「大酋长」负责人列表，渲染为可多选的复选框供筛选。页面初始化时以空 platformId 调用一次拉取默认列表。 | `mbs oms erp-mobile-findbigchief-by-login` | - |
| 获取开发大酋长(含小酋长)名单：移动端开发数据搜索页加载时调用，返回当前可筛选的“大酋长”与“小酋长”开发负责人姓名列表，用于渲染“大酋长”分组的复选框筛选项。无任何请求参数。 | `mbs oms erp-mobile-get-developer-big-chief` | - |
| 获取组长下属开发组员列表：移动端马帮ERP「开发搜索」页面加载时调用，返回当前登录组长名下的开发组员(姓名)列表，用于"组员"筛选区渲染可勾选的复选框。GET 请求，无业务请求参数(身份由会话/Cookie 识别)。 | `mbs oms erp-mobile-get-developer-team-member-by-leader` | - |
| 组长店铺列表查询(getLeaderShop2)：移动端销售趋势"搜索"页：在用户勾选平台或组员后触发，按所选组员员工姓名与平台ID查询该范围下可选的店铺列表，渲染为店铺勾选框。 | `mbs oms erp-mobile-get-leader-shop2-sale-trend-chart` | - |
| 平台列表查询：移动端销售趋势图「搜索」页加载时调用，获取当前登录用户可见的平台列表，用于渲染「平台」多选框（art-template getPlatformTemplate）。选中某平台后会以其 PLATFORMID 触发「大酋长」接口 findbigchiefByLogin。 | `mbs oms erp-mobile-get-platform-list` | - |
| 获取大类(一级类目)列表：移动端「开发搜索」页面初始化时调用，拉取“大类(一级类目)”候选列表，用于渲染大类多选复选框。无任何请求参数，返回大类的 id/name 列表，前端用 id 作为复选框 value、name 作为复选框标签。 | `mbs oms erp-mobile-get-primary-category` | - |
| 获取组长名下团队组员列表：移动端马帮ERP「销售搜索」页面初始化时调用，根据当前登录人(组长)身份返回其名下可选的团队组员列表，用于渲染"组员"多选筛选项。前端无入参，由后端依据登录态识别组长并返回组员集合。 | `mbs oms erp-mobile-get-team-member-by-leader-sale-trend-chart` | - |
| 借用运单号-国家列表查询：借用运单号(Vova借单)页面加载时调用，获取可借用运单号的国家列表，用于目的国家选择/展示。前端在页面初始化 countryList() 中以 GET 无参方式请求，成功后通过 art-template 模板 countryListTemplate 渲染。 | `mbs oms erp-order-country-list` | - |
| 开发员名片信息查询：仪表盘加载时查询当前登录开发员的名片信息：返回开发员基本信息(姓名/职位/头像/品类/工龄)及8项考核指标(销售额、30天开发量、动销率、爆旺比例、滞销比例、单SKU产出、累积侵权量、30天发货毛利率)的实际值/排名/进度区间。obj为空则判定为非开发员(展示管理者卡片)。 | `mbs oms erp-order-get-developer-card-info` | - |
| SMT广告报表-周期(周)列表查询：SMT(速卖通)广告报表页加载时获取可选「周期(周)」下拉列表，并据 isSelect 标记默认选中的当前周；前端用于初始化周期多选框及默认筛选周。 | `mbs oms erp-order-find-smt-ad-campaign-weeks` | - |
| 获取平台(回填默认排除平台)：借用运单号(Vova)页面加载时，根据浏览器 localStorage 中缓存的 platformId 调用本接口，取回当前用户对应的平台标识，用于回填页面顶部“排除平台”下拉框的默认选中值。 | `mbs oms erp-order-get-platform` | `platformId` |
| 获取可用仓库列表：获取当前用户可用的仓库分组列表，用于商品(SPU)管理页“关联仓库”弹窗的仓库选项渲染。返回按仓库分组类型(直发仓/中转仓/海外仓)划分的分组，每个分组内含具体仓库列表(仓库ID、仓库名称、仓库类型)。 | `mbs oms erp-order-get-available-storage-list` | - |
| 获取当前用户职位ID：订单详情页点击“作废订单”时调用，获取当前登录操作员的职位(岗位)ID(positionId)。前端取返回 obj 作为 positionId，若为空则提示“职位id丢失”并中断作废流程；非空时随订单作废表单一并提交至 /eshop/order.do?method=cancelOrder。 | `mbs oms erp-order-get-position-id` | - |
| 发货仓库列表查询：获取全部发货仓库列表，用于订单列表页"发货仓库"筛选下拉框的渲染；前端拿到数组后将"上海仓库""东莞仓库"置顶排序，并在部分场景按仓库类型(storagetype)过滤。 | `mbs oms erp-order-get-storage-list` | - |
| 获取大酋长列表：手动刊登相关数据统计页初始化时调用，获取「大酋长」下拉选择框的数据源。返回大酋长（团队负责人）列表，每项含 id 与 name，前端用 art-template 渲染为 #bigChief 下拉框的 option（value=id，文本=name）。选中后联动 getTeamMemberByLeader 拉取组员。 | `mbs oms erp-order-0-1` | `p1`, `p2` |
| 大酋长列表查询：大酋长发布统计报表页面初始化时加载"大酋长"下拉选择框的数据源：无业务请求参数，返回全部大酋长(id+name)列表，前端据此渲染下拉框并缓存名称数组，随后触发统计接口调用。 | `mbs oms erp-order-1` | - |
| 获取大酋长列表：进入 Lazada 优惠券看板页面时调用，按平台加载“大酋长”（团队负责人）下拉选项列表，用于填充顶部 #shopManager 多选下拉框。URL 路径中第一段固定为 1，第二段为平台ID（页面内固定为 18=Lazada）。 | `mbs oms erp-order-platform-id-1` | `platformId`, `seg1` |
| 获取大酋长(销售战报)列表：进入“产品刊登分析(开发覆盖率)”页面时加载“大酋长”下拉框数据源。页面 ready 时调用，返回大酋长(销售主管/区域负责人)列表，渲染为 #bigChief 下拉的 option，其 id 作为选中值、name 作为显示文本与 peoanme 属性。 | `mbs oms erp-order-0-2` | `p1`, `p2` |
| 获取销售大酋长列表(getBigChief2)：平台流量监控/看板页面进入或切换平台时，按「订单状态 + 平台ID」两个路径参数查询销售大酋长(店铺管理者)列表，用于填充页面顶部「-大酋长-」多选下拉(#shopManager)。返回数组，每项含大酋长 id 与 name。 | `mbs oms erp-order-platform-id-order-status` | `orderStatus`, `platformId` |
| 获取组长/平台对应店铺列表：客服消息报表页店铺多选下拉的数据源接口，返回当前组长/平台/组员可见的店铺列表。注：示例页面中本 URL 已被注释并由 /erpReport/erpReport/message/getShop 取代，按任务指定方法 GET 文档化，注释态/未引用字段标注待人工确认。 | `mbs oms erp-order-get-leader-shop2-sale-report` | - |
| 平台列表查询：销售业绩目标页面在“批量设置店铺目标”弹窗中调用，拉取平台下拉列表（平台ID+平台名称），用于渲染 #platform 平台选择下拉框。GET 无入参。 | `mbs oms erp-order-get-platform-list` | - |
| 销售报表-站点下拉列表查询：订单时间/发货时间业绩报表页面的站点多选下拉数据源。根据已选所属平台的平台ID列表，查询该平台下的站点集合，用于渲染 #getSiteList 站点多选下拉框。 | `mbs oms erp-order-get-site-list-sale-report` | - |
| 触发产品(禁限售触发产品)下拉列表查询：产品问题投诉页(taskComplaint2.html)在 created 生命周期调用 getgoodslist()，无参 GET 拉取“触发产品”候选名称列表，赋值给 goodslist，用于“平台限售”场景下“触发产品”下拉框(支持 allow-create 手动输入)的候选项。返回值 obj 为字符串数组(简明、准确、含特征的产品名称，如：除藻粉、激光逗猫棒)。 | `mbs oms erp-order-trigger-product` | - |
| 启元市场部头部年度/月度目标展示数据查询：加载启元市场部月目标页面头部展示数据：年度目标及完成情况（实际/目标毛利额、完成率、预计完成率提点档位）、各月毛利额目标列表（目标/实际/完成率），并返回当年各月时间段记录（down）。前端据 headStatus 切换单一汇总视图与多平台下拉切换视图。 | `mbs oms erp-order-get-head-down-show-data-sales-amount-target` | `currentTime`, `departmentId` |
| 市场部月目标-头部目标展示数据查询：进入「市场部月目标」看板时调用，返回页面头部展示所需数据：年度目标及完成情况(yearHead)、各月毛利额目标(monthHead)、当年各月目标时间段列表(down)、头部展示模式(headStatus)及默认选中的年度头(maxyearHead)。headStatus 决定 yearHead/monthHead 的结构形态。 | `mbs oms erp-order-get-head-down-show-data-sales-profit-target` | `currentTime`, `departmentId` |
| 销售名片·东南亚/赛道战况播报查询：首页战况播报模块查询。基础路径 /erpOrder/erpOrder/saleVistingCard/，含两种 GET 形态：getTrackByTrackDny(东南亚战况，无入参) 与 {type}/getTrackByTrack(指定赛道战况，赛道经路径参数 type 传入)。返回 obj 列表(平台/团队/销售额/毛利率/增量/奖金等)及 content 更新文案，前端用 art-template 渲染战况播报表格。 | `mbs oms erp-order-sale-visting-card` | - |
| 类目昨日开发/经营表现查询：销售看板右侧「类目昨日表现」卡片数据源：按类目返回昨日发货销售额、发货订单量、发货毛利率、订单缺货率、按时发货率及各项环比涨跌幅，前端遍历渲染为类目表现卡片列表。GET 无入参，由当前登录态(会话/Cookie)确定数据范围。 | `mbs oms erp-order-get-category-develop-info` | - |
| 销售名片-获取提醒消息：业务员仪表盘(salesman2.html)首屏加载时调用，获取当前登录业务员的提醒消息(销售名片提醒)。返回提醒类型(color)与提醒文本(msg)，前端据 color 渲染为黄色警告或绿色成功提示条，15 秒后自动收起。 | `mbs oms erp-order-get-remind-msg` | - |
| 销售人均发货毛利额增长排行榜查询：大屏「人均发货毛利额增长榜」榜单数据查询：按页码/每页条数分页（路径参数），按榜单类型 type 取数，返回排行榜列表（名次、小组人数、姓名、人均毛利额增长、预测月业绩、毛利率、预估奖金）及总页数，前端用 art-template 模板渲染表格并定时轮询滚动。 | `mbs oms erp-order-page-size` | `page`, `pageSize`, `type` |
| 店铺昨日销售表现查询：销售看板（销售名片页）右侧 店铺昨日表现 卡片数据源。页面加载时无参 GET 调用，返回当前用户可见店铺列表，每个店铺含昨日销售额、订单量、在线量、动销率、缺货率、按时发货率、退款金额及各自的环比涨跌幅，由 #ShopSaleTemplate 循环渲染。 | `mbs oms erp-order-get-shop-sale-info` | - |
| 获取系统管理员默认平台：双屏销售大屏(doubleinfo2)初始化时调用。无入参，返回当前登录用户(系统管理员)的默认平台ID。前端在未通过URL指定 platformid 时，用返回的 obj 作为平台下拉框(#platformList)的默认选中值，随后触发 search() 按该平台刷新看板。 | `mbs oms erp-order-get-sysadmin` | - |
| 东南亚战况播报(各赛道排名查询)：首页仪表盘(common.html)加载时调用，拉取「东南亚X月战况播报」榜单：按销售平台返回店长/员工的奖金、入围店铺毛利率明细、毛利率、总积分等，渲染到 #DeskRank 表格；同时返回播报更新时间(content)写入 #updateTime。无任何请求入参。 | `mbs oms erp-order-get-track-by-track-dny` | - |
| 店铺客服考核(平台店铺评估)查询：店铺业绩列表(chakanShop)中鼠标悬浮店铺名时触发，按店铺名查询该店铺在所属平台(Shopee/Lazada/ebay)的客服考核/店铺评估明细，返回评估项数组(obj)。前端按 platform 套用不同模板(shopeeTemplate/lazadaTemplate/ebayTemplate)渲染，code=500 时直接展示 desc 文案。 | `mbs oms erp-order-customer-service-assess-shop` | `shopName` |
| 客户经理列表查询：获取店铺业绩(客户服务管理)页面"请选择客户经理"下拉框的全部客户经理(客服经理)名称列表。页面加载时由 getcustomerServiceMgr() 调用，遍历 data.obj(字符串数组)逐项 <option> 填充 #custService 选择器，该值后续作为 shopAchievementsList/downloadShopAchievementsList 的 customerServiceMgr 查询条件。 | `mbs oms erp-order-customer-service-mgr` | - |
| 店铺业绩-年月下拉列表查询：获取店铺业绩可选的「年月」列表，用于仪表盘必发/必修改 SPU 页顶部时间筛选下拉框(#yearMonth、#n_month)的初始化。无入参，返回字符串数组(每项为一个年月值)，前端逐项渲染为 <option>，value 与文本同为该年月值，并在首部追加「选择时间」空项。 | `mbs oms erp-order-get-year-month` | - |
| 根据店铺ID获取店长：在“事业部人员毛利方差图”页面，店铺下拉框选中某店铺后触发，按店铺ID（拼接到URL路径末尾）查询该店铺对应的店长，前端取返回 obj.SHOPMANAGER 回填店长筛选项并重新加载方差数据。 | `mbs oms erp-order-shop-id` | `shopId` |
| 查询全部店长列表：Wish推广(ProductBoost)报表"按照listing查看"页面初始化时调用，无入参，返回全部店长(店铺负责人)列表，用于渲染顶部"请选择店长"下拉框(#Shopowner)；选中后再联动查询其名下店铺。 | `mbs oms erp-order-find-all-manager` | - |
| 查询全部店铺(店铺下拉)：PB广告费报表(按店铺查看)页面初始化时拉取全部店铺列表，用于渲染「请选择店铺」下拉框。GET 请求，无任何入参；响应 obj 为店铺数组，前端通过 art-template 模板 contentTemplate2 遍历，仅取 shopname 作为 option 的 value 与文本。 | `mbs oms erp-order-find-allshop` | - |
| 按店铺负责人查询店铺(findshopByManger)：PB广告费报表页：根据已选「店铺负责人」联动查询其名下店铺列表，结果渲染到「请选择店铺」下拉(#shopName)。由 #shopManger 选择框 onchange 触发的 findshopByManger() 发起；GET 请求，shopmanager 作为查询字符串传入。 | `mbs oms erp-order-findshop-by-manger` | - |
| 组员店铺列表查询(getLeaderShop2)：订单查询(爆款)页"店铺"下拉数据源：根据所选大酋长(经理)、组员、平台及店铺名模糊关键字，查询并返回对应的可选店铺列表(店铺ID+店铺名)，渲染为店铺多选复选框。平台/组员选择变化或店铺名输入时自动触发。 | `mbs oms erp-mobile-get-leader-shop2-hot-product-listing` | - |
| 热销商品-在线刊登详情查询：移动端「在线详情」页加载时调用，按父SPU(商品)ID与店铺ID查询该刊登商品的在线详情：标题/主图/店铺/刊登人/发布时间/30天销量，以及各SKU的属性、净重、在线售价/运费、在线库存、马帮库存、调价/改库存状态等，用于详情卡片渲染。 | `mbs oms erp-mobile-get-listing-detail-info` | `parentSPUId`, `shopId` |
| 商品在线详情-销售单列表查询：移动端马帮ERP「在线详情」页根据商品ID(SPU)与平台ID查询该商品对应的销售单(订单)列表，返回订单号、状态、售价/数量、总收入/总毛利、国家、成交账号、下单时间等，前端按前10条/其余两段渲染。 | `mbs oms erp-mobile-get-listing-order-by-item-id` | - |
| 刊登商品近一月销量趋势查询：移动端「商品在线详情」页销量趋势图（echarts）数据来源接口：按商品(itemId/parentSPUId)与平台(platformId)查询该刊登商品近一个月内逐日的销量数据，返回销售时间(saleTime)与销量(saleNum)序列，前端据此绘制销量趋势折线图。 | `mbs oms erp-mobile-get-listing-order-in-month` | - |
| 刊登/上架修改操作日志查询：根据商品(父SPU)ID查询该商品的刊登/上架修改操作日志列表，返回操作人、操作时间、修改结果与描述，用于在线商品详情页"操作日志"模块展示（前端拆分为前10条与其余两段渲染）。 | `mbs oms erp-mobile-get-modify-listing-log-by-item-id` | `parentSPUId` |
| 平台信息列表查询：订单移动端搜索页加载时调用，获取当前登录人可见的平台列表，用于渲染「平台」多选(单选)筛选项。选中后驱动经理(大酋长)、组员、店铺等级联下拉的数据加载。 | `mbs oms erp-mobile-get-platform-info-hot-product-listing` | - |
| 在线商品SKU信息查询（按商品ID）：移动端「在线」商品列表中点击某商品行的展开箭头时调用，按商品ID(parentSPUId/itemId)与店铺ID(shopId)查询该商品下全部SKU的售价、币种、运费、在线库存、马帮库存及调价/调库存状态，并据部门(department)判断是否展示调价/调库存入口。 | `mbs oms erp-mobile-get-sku-info-by-item-id` | `parentSPUId`, `shopId` |
| 根据大酋长(经理)查询组员列表：订单移动端搜索页中，选中某个大酋长(经理)后，按该经理的员工ID查询其下属团队组员列表，用于渲染「组员」多选框；选中组员后会进一步触发店铺列表查询(getLeaderShop2)。 | `mbs oms erp-mobile-get-team-member-by-leader-hot-product-listing` | - |
| 在线商品(SPU)列表查询(带店铺)：移动端"在线"页热卖商品列表分页查询：按关键词(店铺名/商品ID)、时间区间、价格区间、缺货标记、平台、大区主管、团队成员、店铺等条件筛选，返回在线商品(SPU)列表及销量、单量、毛利率、备货天数、TikTok佣金率等字段；用于首屏 search() 与加载更多 getMore()。 | `mbs oms erp-mobile-hot-product-with-shop` | `pageSize`, `currPage` |
| 侵权审核SKU预校验(审核前查询)：移动端侵权下架审核页打开时，根据侵权记录 id 查询该侵权单下「待审核SKU(listbefore)」与「关联出的SKU(listAfter)」两组列表，分别渲染到审核页两块卡片，供用户勾选后审核通过。 | `mbs oms erp-mobile-befor-verifier` | `id` |
| 侵权SKU审核(审核通过)：移动端侵权审核页：用户在「待审核SKU」与「关联出的SKU」两个列表中勾选 SKU 后，点击「审核通过已选择的SKU」提交，把所选侵权 SKU 及其关联 SKU 以审核状态=2(通过)提交给后端完成侵权审核处理。 | `mbs oms erp-mobile-examine-infringing-info` | `id`, `verifyStatus` |
| 商品侵权信息查询：移动端马帮ERP「商品侵权信息」页面分页查询：按关键词(spu/sku/侵权关键字)与审核状态筛选，返回按侵权平台分组的侵权提交记录及其下侵权明细列表，支持加载更多分页。 | `mbs oms erp-mobile-find-infringing-info` | `currPage` |
| 查看线上(侵权)商品列表查询：移动端马帮ERP「查看线上商品」页：按商品ID与关键词(sku/店铺)分页查询线上侵权商品列表，返回商品标题、SKU、侵权关键词及移除状态、店铺、刊登时间等，支持「加载更多」分页。 | `mbs oms erp-mobile-find-on-line-product` | `currPage` |
| 侵权平台信息查询：移动端马帮ERP“提交侵权”页面加载时调用，获取可选的侵权平台列表，用于渲染“侵权平台”复选框（前4个直接展示，第5个及以后归入“更多平台”折叠区）。本接口不需要任何请求参数。 | `mbs oms erp-mobile-get-platform-info-infringing` | - |
| 提交侵权信息：移动端「提交侵权」页提交侵权处理：勾选自动移除图片/自动移除关键词/自动下架，填写侵权SKU、侵权关键词、勾选侵权平台、填写描述（不少于6字），提交后端执行侵权处理。提交前二次确认；侵权平台、描述为必填校验。 | `mbs oms erp-mobile-submit-infringing-info` | `platformIds`, `description` |
| 订单详情查询：移动端订单详情页加载接口：根据订单ID(orderid)查询单个订单的完整详情，返回订单状态/属性/物流、客户信息、SKU商品明细列表、金额(毛利/实收/运费/平台交易费)及店铺/时间等信息，供详情页渲染。 | `mbs oms erp-mobile-find-order-details` | `orderid` |
| 今日订单概况查询：移动端「我的桌面」首页按订单时间查询当天的订单概况：返回今日订单数/销售额/退款单、总待发货/待发销售额、今日退款金额、今日新增缺货单、总缺货单量/缺货销售额、利润、毛利率、缺货率等汇总指标，以及当前用户头像。 | `mbs oms erp-mobile-find-order-today` | `ordertimestr` |
| 订单列表查询（移动端正常/缺货订单）：移动端订单列表分页查询：按店长、店铺类型、订单类型标志(正常/缺货)与模糊关键字(订单ID/交易ID/卖家ID/SKU)分页拉取订单列表，返回订单行及正常/缺货数量汇总，并下发当前用户头像。 | `mbs oms erp-mobile-find-order` | `currentPage`, `flag` |
| 按店铺名称查询店铺列表：移动端「按店铺搜索」页面：根据店铺名称关键词(shopName，以 URL 查询参数传递)模糊查询当前用户可见的店铺列表，返回店铺集合(店铺ID + 店铺名称)，前端用 art-template 渲染列表并跳转到对应店铺订单列表页。页面首次加载与上拉加载更多均调用本接口。 | `mbs oms erp-mobile-find-shop2` | - |
| 店铺名称列表查询：订单详情页加载时调用，查询当前用户可见的店铺列表，用于渲染左侧导航「店铺」子菜单（每项可跳转到对应店铺的订单列表）。无请求参数，返回店铺ID与店铺名称。 | `mbs oms erp-mobile-find-shop` | - |
| 物流方式列表查询：移动端「修改物流」页面进入时自动调用，查询可选的物流方式（快递类型）列表，用于渲染单选列表供用户选择并修改订单物流方式。无请求参数，返回物流方式数组（含ID与名称）。 | `mbs oms erp-mobile-get-express-type-list` | - |
| 货源报价详情查询(按ID)：移动端「货源报价录入」页进入时，根据货源记录ID与开发任务ID查询该货源的报价资料详情（联系人/手机/旺旺/质量/供货类型/供应商地址/报价规格/店铺链接/备注/商品图片），用于回显表单及图片列表。 | `mbs oms erp-mobile-find-develop-mission-extend-by-id` | `id`, `missionid` |
| 开发任务(货源)分页列表查询：移动端马帮ERP「未找到货源/已找到货源」页面的开发任务分页列表查询：按是否已找到货源标志 isGoodSupply 分页拉取开发任务，返回任务列表(商品标题、售价、放弃状态/原因等)、总页数及当前用户头像，前端用 art-template(#nosupplyTemplate) 渲染并支持加载更多分页。 | `mbs oms erp-mobile-find-develop-mission-extend` | `isGoodSupply`, `currentPage` |
| 根据手机号查询供应商报价资料：移动端「货源报价录入」页，手机号输入框失焦(onblur)时按手机号查询该供应商已有的报价资料(联系人/旺旺号/质量/供货类型/供应商地址/报价规格/店铺链接/备注/商品图片等)，并通过 art-template 模板 infosTemplate 渲染回填表单。 | `mbs oms erp-mobile-find-information-by-phone` | `phone` |
| 供应商列表查询(含名下SKU订单)：移动端「供应商管理」页面，根据供应商名称关键词分页查询供应商列表，每个供应商下挂其相关 SKU 的商品(图片/名称/SKU/总笔数/总金额)，并返回当前用户头像地址。支持「加载更多」翻页。 | `mbs oms erp-mobile-find-manufacture` | `currentPage` |
| 获取差评任务详情：根据订单编号(orderId)与任务状态(status)查询该订单下差评任务的商品(SKU)明细列表，返回SKU图片/标题/itemId/销量级别/商品状态/售价/原始币种售价/币种/数量/总售价/评价类别/评价内容等字段，用于差评处理页(待处理/已处理/已结案)点击订单行展开时渲染下级明细表。 | `mbs oms erp-order-get-bad-comment-task-detail` | `orderId`, `status` |
| 差评任务列表查询：客户评价(差评)处理列表分页查询：按订单编号、店铺/店长/客服/站点、店铺等级、回复状态、评价时间、回复次数、排序方式等条件，分 status(待处理/已处理/成功删除) 查询差评任务列表，返回订单、店铺、评价及回复时间等字段，供 customerRating 页面三个 Tab 渲染。 | `mbs oms erp-order-get-bad-comment-task-list` | `page`, `pageSize`, `status` |
| 差评任务清理详情查询：客服服务详情页「评价」Tab 加载时调用，按店铺×时间维度统计各店铺收到的差评数与剩余回复数，并标记是否「忘清」(未清理)，渲染为多列统计表格。页面 ready 时无参直接调用。 | `mbs oms erp-order-get-clear-detail` | - |
| 可借用运单号查询：按排除平台、发货时间区间、交运时间区间、货运渠道、邮寄类型、目的国家等条件，分页查询可借用的运单号列表，返回运单号、国内运单号、发货时间、收件地址及渠道类型。 | `mbs oms erp-order-get-borrow-express` | `platform`, `contury`, `channel`, `pageNum` |
| 清仓任务榜(奖金报表)查询：清仓任务榜页面加载/展开/收起时调用，返回各清仓项目及其下属销售的清仓任务量、在线Listing量、当前清仓量、完成进度、剩余清仓量、销售额、成本与奖金等汇总数据。前端按项目分组渲染，saleList默认取前5条，展开时取全部。 | `mbs oms erp-order-get-clearance-reward-repoer` | - |
| 定制SKU订单列表查询：仪表盘「定制sku」面板分页查询定制订单列表：按确认状态(未确认/已确认/已下单/所有)、店长、店铺过滤，返回订单+SKU+定制内容(文字/图片1/2/3)+采购发货等行数据及总条数，供 Element Plus 表格渲染与批量确认。 | `mbs oms erp-order-get-custom-sku-order-list` | `page`, `pageSize` |
| 开发员覆盖率-按店长查询(第二级下钻)：产品刊登分析-开发覆盖率页面，点击大酋长(第一级)行展开时调用，按所选大酋长/组员(开发员)及该组员 employeeId，查询其名下各店长(shopManager)维度的刊登/覆盖率/SPU汇总/销售额占比等数据，返回店长列表用于二级表格渲染。 | `mbs oms erp-order-get-developer-info-by-shop-manager` | `bigChief`, `employeeId` |
| 开发员店铺刊登覆盖率明细查询（按店铺）：产品刊登分析报表第三级钻取：在选定大酋长+组员(开发员)、并指定店长(employeeId)后，查询该店长名下各店铺的刊登覆盖明细，返回店铺在线listing、开发员刊登数、总/新品覆盖率、SPU汇总及占比、近30天销售额占比等汇总字段。 | `mbs oms erp-order-get-developer-info-by-shop` | `employeeId` |
| 开发大酋长报表查询：「开发大酋长报表」页面按周(本周/上周/上上周)查询开发员开发与业绩报表：返回开发员(含组员明细 reportList)的开发表现、业绩表现、工作表现、质量表现等多维指标及一行汇总(sum)。 | `mbs oms erp-order-get-develop-repoer` | `times`, `status` |
| 获取近三周时间区间(开发大酋长报表)：开发大酋长报表页面加载时自动调用，返回本周、上周、上上周三个时间标记(times)。前端将三者分别存入 sessionStorage(devthisweek/devlastweek/devbeforeweek)，作为后续 getDevelopRepoer 接口的 times 入参。本接口无请求参数(空请求体)。 | `mbs oms erp-order-get-three-week-time` | - |
| 速卖通广告-按平台查询全部店长(店长下拉)：速卖通(SMT)广告花费看板顶部「请选择店长」下拉框的数据源。前端在页面 onMounted 时调用，按平台ID(固定 platformId=10)查询该平台下的全部店长名称列表，返回字符串数组直接填充店长下拉选项。 | `mbs oms erp-order-find-all-manager-platform` | `platformId` |
| 查询平台全部店铺（findAllshopPlatform）：SMT（速卖通）广告报表页初始化时调用，按平台ID查询该平台下的全部店铺列表，用于「请选择店铺」下拉框选项渲染。当前页面固定传 platformId=10。 | `mbs oms erp-order-find-allshop-platform` | `platformId` |
| SMT广告报表-广告活动绩效查询：速卖通(SMT)广告报表页查询：按店铺/人员维度，结合周期、店长、店铺、排序方式等条件分页查询广告活动绩效，返回曝光、点击、下单、毛利、广告费、ACOS、ROI、PB占比等汇总指标列表。 | `mbs oms erp-order-find-smt-ad-campaign-performance-campaign` | `groupBy`, `orderField`, `orderSort`, `pageSize`, `page` |
| Ebay账户费用账单明细查询：按账单标识(billStr)、店铺、费用类型分页查询某 Ebay 账单下的费用明细，返回明细列表(店铺、账户、费用类型、毛/净明细、增值税率、人民币金额、汇率、itemid、商品标题等)及分页信息(总页数、总条数)。 | `mbs oms erp-order-show-ebay-bill-detail` | `billStr`, `shopId` |
| eBay账期(账单周期)列表查询：eBay账户费用对账页面初始化时调用，查询当前可选的eBay账单账期(账单周期)列表。返回值为账期字符串数组，前端用于渲染“选择账期”下拉框选项，并默认选中第一个账期后触发账单明细查询(search())。 | `mbs oms erp-order-show-ebay-bills` | - |
| eBay账期账单费用查询：eBay对账页面按账期(billStr)+店铺(shopId)分页查询账单费用列表，返回各店铺该账期的币种、新增费用、折扣和退款及其人民币折算金额，并返回总条数与总页数供前端分页。 | `mbs oms erp-order-show-ebay-bill` | `billStr` |
| 查询Ebay账户费用类型：Ebay账单明细页面加载时(freeName())调用，按账单标识 billStr 与店铺 shopId 查询该账单下出现的全部费用类型(entryType)集合，返回字符串数组用于渲染顶部'费用类型'筛选下拉框(#freeType)的选项。 | `mbs oms erp-order-show-ebay-fee-type` | `billStr`, `shopId` |
| eBay店铺账期-查询店铺下拉列表：eBay 账期费用报表页(ebayRecking)进入时调用，查询当前登录用户可见的 eBay 店铺列表，用于渲染「店铺名」下拉框。POST 无请求体；返回 obj 为店铺数组，每项含 shopId 与 shopName。 | `mbs oms erp-order-show-ebay-shops` | - |
| eBay Case 案件任务列表查询：eBay 个案(Case)任务看板列表查询：按案件状态(待处理/已处理/已结案)分页拉取案件任务，支持按客户ID、店铺、店长、站点、客服筛选，返回案件列表及分页汇总。 | `mbs oms erp-order-get-ebay-case-task-list` | `page`, `pageSize`, `status` |
| eBay Case/Return升级清理详情查询：客服工作台详情页「case/return升级」页签数据查询：按店铺/组员维度返回各时间段(表头)收到的 case/return 升级数与未处理升级数，并标记是否「忘清」。页面加载时无参调用，结果渲染到 #contentTemplate2。 | `mbs oms erp-order-get-ebay-case-task-clear-detail` | - |
| 获取客服人员名称列表：eBay Case 退货任务管理页面初始化时调用，返回客服人员名称列表，用于渲染「客服」筛选下拉框选项。页面加载即自动触发，无请求参数。 | `mbs oms erp-order-get-manager-people-name` | - |
| 获取负责店长(店长下拉)列表：eBay Case 任务看板筛选区「店长」下拉框的数据源接口。页面加载时无参 POST 调用，返回当前用户可见的负责店长(销售员)名称数组，前端用 art-template 渲染为 option 列表填充 #shopSalers 下拉框。 | `mbs oms erp-order-get-responsible-shop-saler` | - |
| 查询负责店铺列表：查询当前登录用户所负责（有权限）的店铺名称列表，用于 eBay 个案任务页顶部「请选择店铺」下拉框的选项填充。页面 ready 时由 getResponsibleShops() 自动调用一次，无请求参数。 | `mbs oms erp-order-get-responsible-shop` | - |
| eBay个案-站点下拉列表查询：eBay升级个案（case）处理页面初始化时调用，获取当前用户可见的站点列表，用于填充顶部「请选择站点」下拉框（#siteLists），作为案件列表查询的筛选条件之一。无请求参数，返回站点字符串数组。 | `mbs oms erp-order-get-site-list-ebay-case-task` | - |
| eBay店铺SPK发货比例(周报)查询：按店铺/店铺负责人/国家及周次维度，分页查询 eBay 店铺一周(周日~周六)每天的「符合SPK考核范围订单数 / 客户自选SPK订单数 / 自选并匹配SPK订单数 / 符合且自选且匹配SPK订单数」，并返回考核范围内实际发SPK比例与自选SPK实际发SPK比例；支持上一周/下一周翻页。 | `mbs oms erp-order-ebay-shop-spk-order` | `page` |
| 获取eBay店铺/店长/国家下拉数据：eBay店铺SPK发货比例报表页初始化时调用，一次性返回当前用户可见的店铺列表、店铺负责人(店长)列表、国家列表，用于填充页面顶部「--店铺--」「--店铺负责人--」「--国家--」三个多选下拉框。 | `mbs oms erp-order-get-ebay-oper-shop` | - |
| 借用订单日志查询：按订单时间区间、平邮/挂号类型、订单编号、借用运单号、借用物流方式、国家等条件，分页查询订单的借用运单操作日志列表，返回总条数/总页数及每条日志的订单、借用运单、操作人等信息。 | `mbs oms erp-order-borrow-order-log-fm` | `currPage`, `pageSize` |
| 借用订单日志查询：按订单时间区间、物流类型(平邮/挂号)、订单编号、借用运单号、借用物流方式、国家等条件分页查询借用订单操作日志，返回订单基本信息、借用运单信息及操作人/操作时间/描述。 | `mbs oms erp-order-borrow-order-log` | `currPage`, `pageSize` |
| 查询可借用运单号(延迟订单)：根据输入的交易单号(可多个逗号分隔,一次最多500个)查询延迟订单及其可借用的运单号(最多三个候选),返回订单基础信息、延迟天数、渠道、国家及每个候选运单号的快递类型/原运费/原店铺/原订单号,供前端选择并'提前上网'借用。 | `mbs oms erp-order-find-delay-order` | `tradeIdStr` |
| 工厂集市延迟订单-可借用运单号查询：根据输入的一批交易单号（逗号分隔，最多500个）查询工厂集市延迟订单，返回每个订单的基本信息及最多三组可借用运单号候选（含运单号、物流方式、原运费、原店铺、原订单号），供前端选择并提前上网。 | `mbs oms erp-order-find-factory-market-delay-order` | `tradeIdStr` |
| 获取缓存运单(借用单号)信息：在“借用Vova运单号”页面，前端无参 POST 请求该接口，获取后端缓存的运单号集合及外部/内部调用耗时；desc/innerdesc/url 均为逗号拼接字符串，前端 split(',') 后通过 art-template 渲染并显示接口用时/内部用时。 | `mbs oms erp-order-get-cache-express` | - |
| Vova延迟订单查询：按订单时间区间与店铺分页查询 Vova 订单列表（含借用运单/借用物流等信息），用于页面表格渲染与分页。页面加载即自动调用一次。 | `mbs oms erp-order-vovafind-delay-order` | `currPage`, `pageSize` |
| FBA费用导入记录查询：财务报表-FBA费用导入记录分页查询：按页码分页拉取FBA费用导入记录列表，返回店铺、费用产生时间、费用类型、站点、导入状态、结果描述、创建人/创建时间及源文件地址等信息，供前端表格渲染与分页展示。 | `mbs oms erp-order-find-fbafee-import` | `page`, `pageSize` |
| 按平台查询店铺列表：根据平台ID查询该平台下的店铺名称列表，用于「亚马逊费项导入」弹窗中店铺下拉框(#shopNames)的数据填充。页面加载时(findShoplist())固定按平台ID=2(亚马逊)查询。 | `mbs oms erp-order-find-shop-by-pt` | `platformid` |
| 7天内超过20单的产品个数(独立优化师周报)：按优化师(erpName)和时间区间，分页查询该优化师近7天内出单量超过20单的产品(SPU)列表，返回 SPU 图片/编号/产品名/属性/出单量/开发员/创建时间，并附总条数与总页数用于分页。 | `mbs oms erp-order-find-over-twenty-pro-week` | `beginTime`, `endTime`, `erpName`, `currentPage`, `pageSize` |
| 独立站优化师报表-按业务员查询测款数量明细：独立站优化师(投放)报表：按业务员名称(erpName)与时间区间(beginTime/endTime)查询该业务员的测款 SPU 广告投放明细列表，返回每个测款 SPU 的广告费用、转化价值、ROI、触达、频次、订单数、CPR/CPC/CTR/CPM、点击等投放指标，以及总条数。 | `mbs oms erp-order-get-details-by-erp-name` | `beginTime`, `endTime`, `erpName` |
| 独立站优化师报表-优化师明细查询：独立站(独立优化师)投放报表明细查询：按 SPU + 时间区间查询各优化师的广告费用、转化价值、ROI、订单数、触达/频次/CPR/CPC/CTR/点击等投放效果指标，返回合计与优化师明细列表用于报表渲染。 | `mbs oms erp-order-get-optimizer-details` | - |
| 获取HRBP列表：新人(待审核/历史审核人员)列表页初始化时调用，获取全部 HRBP(人力资源业务伙伴)名称集合，用于填充页面顶部「请选择HRBP」筛选下拉框(#hrbp)的选项。无请求参数。 | `mbs oms erp-order-get-hr` | - |
| 营销新人成绩单-业绩/店铺状态明细查询：营销新人成绩单详情页「业绩明细」与「店铺状态明细」两块表格的数据来源。按员工姓名查询该新人各入职阶段的刊登/出单/动销/毛利/销售额等业绩汇总，以及各时间节点的店铺数量/黑马/健康/疲软/等级变化等店铺状态汇总，返回按阶段排列的明细列表。 | `mbs oms erp-order-get-market-newcomer-transcript-detail` | `employeeName` |
| 市场新人成绩单(Summary)查询：营销/市场新人成绩单页面加载时调用：以员工姓名为入参，返回该新人的基本信息(头像/姓名/入职/指导人/HRBP/简介)、新人summary六大指标(日均销售额、毛利率、手动刊登量、手动动销率、新品出单比、新手刊listing产出，含本人值与平台平均值)、大酋长评语、总经办意见以及转正第一/第二阶段自然月。 | `mbs oms erp-order-get-market-newcomer-transcript` | `employeeName` |
| 新人成绩单-态度(出勤)明细查询：营销新人成绩单详情页「态度」板块数据查询：按员工姓名查询新人的出勤态度明细，返回个人与大酋长组平均两行数据，含应出勤工时、实际工时、事假、其它假、迟到、秒闪、缺卡、旷工等出勤考核指标，用于渲染态度表格。 | `mbs oms erp-order-get-new-comer-attitude` | `employeeName` |
| 新人助力结果查询：按员工姓名查询新人转正助力结果，返回方案一/方案二两套助力评估数据（第一阶段、第二阶段、转正述职评分、完成目标档位、提前转正天数），用于在"新人助力结果"表格中渲染。 | `mbs oms erp-order-get-new-comer-help-result` | `employeeName` |
| 新人成绩单-新人列表查询：新人成绩单审核页面的新人列表分页查询：按审核人员类型(待审核/历史审核)、人员类型(销售/开发)、HRBP、审核状态、组员(员工姓名)等条件分页查询新人列表，返回新人头像、姓名、入职时间、指导人、HRBP、成绩单描述、部门、审核状态等字段，并附带分页汇总信息。 | `mbs oms erp-order-get-newcomer-list` | `currentPage` |
| 新人培训考核查询：营销新人成绩单详情页「培训考核」板块数据查询：按员工姓名查询该新人应参加/已参加的培训课题及各项考试结果，返回培训考核记录列表，前端渲染到「培训考核」表格(content5)。 | `mbs oms erp-order-get-new-comer-train-examin` | `employeeName` |
| 新人试用期获得奖项查询：新人成绩单页面「试用期间获得奖项」模块数据查询：按员工姓名查询该新人在试用期间获得的奖项列表，返回奖项名称集合，前端逐条渲染序号与奖项名称。 | `mbs oms erp-order-get-new-comer-winaward` | `employeeName` |
| 产品新人成绩单查询：根据员工姓名查询产品新人试用期成绩单：返回新人summary（头像、姓名、入职、指导人、HRBP、简介）及业绩明细（开发量SPU、动销率、百元动销率、新品销售额、日均销售额、发货毛利率及各自我司产品部平均值），并返回大酋长评语、总经办意见。 | `mbs oms erp-order-get-product-newcomer-transcript` | `employeeName` |
| 新人成绩单-产品开发明细查询：新人成绩单详情页第二块数据查询：按员工姓名查询其各接手时间段(平均/0-15天…61-75天)的产品开发量、营销率、销量及增长、以及各时间节点(第0/30/60/75天)的SPU爆款/旺款/平款/滞款占比、供应商占比、侵权误导处罚、降本数量等明细，前端用 contentTemplate3~6 渲染 4 张明细表。 | `mbs oms erp-order-get-pro-newcomer-transcript-det` | `employeeName` |
| 新人转正结果考核目标查询(getResultTargetInfo)：营销新人成绩单「新人转正目标」模块——结果考核数据查询：按员工姓名查询该新人「结果考核」表格(考核店铺、转正目标、提前转正目标、实际完成销售额)及第一/第二阶段日常任务完成率，用于渲染结果考核行并回填两阶段完成率。 | `mbs oms erp-order-get-result-target-info` | `employeeName` |
| 新人转正目标-第一阶段店铺下拉列表查询：新人营销成绩单详情页「新人转正目标」第一阶段(入职次个自然月)考核店铺下拉框的数据源接口：按员工姓名查询其第一阶段可选/已选店铺名称列表，前端用 art-template 渲染为 #shopSelect7_1 下拉选项(ySelect 多选)。 | `mbs oms erp-order-get-shop-select1` | `employeeName` |
| 新人转正第二阶段考核店铺下拉查询：营销新人成绩单详情页“新人转正目标 - 第二阶段”考核店铺下拉框(#shopSelect7_2)的数据源。按员工(新人)姓名查询其可选店铺名称列表，前端用 art-template 渲染成 <option>，并初始化 ySelect 多选下拉。 | `mbs oms erp-order-get-shop-select2` | `employeeName` |
| 新人成绩单-店铺下拉查询：为「新人成绩单(营销新人详情)」页面的店铺多选下拉框提供数据源：无入参，返回当前可选店铺列表(店铺ID + 店铺名称)，前端用 art-template 渲染为带「全选」的复选框列表。 | `mbs oms erp-order-get-shop-select` | - |
| 新人转正阶段考核信息查询：新人转正成绩单详情页中，按员工+阶段(第一阶段/第二阶段)+店铺查询该阶段考核指标：手动刊登量、订单量、店铺发货运营毛利率、月目标完成档位，结果回填到对应阶段表格行。 | `mbs oms erp-order-get-stage-info` | `employeeName`, `status` |
| 失败订单查询：按订单下载/导入时间区间分页查询导入 ODO 系统失败的订单列表，返回失败订单的订单号、错误信息、下载时间、导入时间及分页汇总信息（总数、总页数）。 | `mbs oms erp-order-query-fail-order` | `currPage` |
| 失败采购单查询：按时间区间分页查询导入 odo 系统失败的采购单列表，返回采购单批次号、错误信息、采购时间、导入时间，并返回总记录数与总页数供前端分页。 | `mbs oms erp-order-query-fail-purchase` | `currPage` |
| 待采购汇总(按供应商/货运方式)查询：进入待采购汇总页或勾选/取消「不生成采购单」复选框时调用，依据 sessionStorage 中的订单ID集合查询缺货SKU，按供应商(manufacture)与货运方式(expresstype)两个维度返回缺货SKU件数、缺货订单量等汇总数据，并返回汇总提示文案。 | `mbs oms erp-order-get-order-group` | `orderids`, `flag` |
| 待发货订单查询：待发货订单列表分页查询：按订单状态(必选)、SKU、供应商、平台/店铺、货运方式、订单时间区间、是否缺货等条件筛选，返回订单列表及总数、总页数。 | `mbs oms erp-order-search-order` | `status`, `page`, `pageSize`, `alertflag` |
| 转直邮发货-按海外仓订单SKU获取直邮SKU：订单详情页点击「转直邮发货」时调用：以当前订单未删除(flag!=3)商品列表为入参(每项含 sku/storage/orderId)，请求后端返回转直邮的 SKU 列表(res.data.obj)，写入 basedata.zhiyouSKUList 并在「转直邮发货设置」弹窗中展示「修改前SKU」，供录入「修改后SKU」后确认转单。 | `mbs oms erp-order-director-sku-by-hwc-order-sku` | `requestBody` |
| 查询快递方式(物流方式)列表：订单详情页加载时根据物流类型 logisticsType 查询可选的快递方式(物流方式)列表，结果存入 basedata.expresstypelist 供物流信息下拉选择；保存物流/基本信息时按 ID 匹配 expresstypeid 取 NAME 作为快递方式名称回传。 | `mbs oms erp-order-find-expresstype` | - |
| 查询自定义订单类型(下拉数据源)：订单详情页点击编辑时，加载「自定义类型」下拉框的可选项列表。返回全部自定义订单类型(ID+名称)，前端用 art-template 渲染为 select#findOrderType 的 option，并以当前订单的 ordertypeid 回显选中项。 | `mbs oms erp-order-find-order-type` | - |
| 高级搜索-采购员下拉列表查询：订单列表页打开时调用，加载「高级搜索」中「采购员」筛选下拉框(#buyer)的全部可选项；返回当前用户可见的采购员名称列表，前端用 buyerTemplate 渲染为 option。所选采购员名称随订单列表查询(orderList)以 buyer 参数回传后端。 | `mbs oms erp-order-get-buyer` | - |
| 订单SKU(商品)明细列表查询(getDbsellInfo)：订单详情页根据订单ID(orderid)查询该订单下的全部商品(SKU)明细行，返回 obj.list 数组，含每行 SKU 的产品信息、价格(售价/成本)、订购数量、库存/在途/缺货、仓库仓位、收入金额、状态/侵权/折扣等字段；前端据此渲染商品明细表并计算订单总成本(totalCost = Σ ordernum × costprice)。 | `mbs oms erp-order-get-dbsell-info` | `orderid` |
| 订单评价(反馈)查询：订单详情页加载时根据订单号查询该订单的客户评价(反馈)列表，返回好评/中评/差评类型、评价内容、评价时间及星期，前端渲染于「订单评价」卡片。 | `mbs oms erp-order-get-feed-back` | `orderid` |
| 历史订单列表查询：订单详情页据当前订单的客户ID(customerid)查询该客户的历史订单列表，返回每条历史订单的商品图、SKU、产品名、下单时间、订单编号、店铺、状态、国家邮编、订单金额、货运单号/方式、邮寄地址等，用于「历史订单」区块表格展示。 | `mbs oms erp-order-get-historylist` | `orderid`, `customerid` |
| 订单SKU标签/装箱单标签信息查询：订单详情页根据订单ID与标签类型(sku标签/装箱单标签)，查询该订单已上传的标签信息列表，用于在装运信息区渲染标签内容及删除入口。业务参数以URL查询串传递，无JSON请求体。 | `mbs oms erp-order-get-hwcorder-delivery-info` | `orderid`, `labeltype` |
| 订单货件(海外仓发货)信息查询：订单详情页加载时按订单号查询该订单的海外仓货件/发货信息(货件店铺、货件编号、发货实重、真实运费、仓库类型)，渲染到货件信息区并回填仓库类型，随后联动加载SKU标签/装箱单标签。 | `mbs oms erp-order-get-hwcorder-shipment-info` | `orderid` |
| 获取订单最新操作日志：进入订单详情页时调用，根据订单ID查询并返回该订单的最近一条操作日志（已是后端拼接好的文本/HTML片段），前端直接渲染到详情页头部 #lastOrderLog 区域展示。 | `mbs oms erp-order-get-last-order-log` | `orderid` |
| 订单留言查询：订单详情页加载时，根据订单号查询该订单的「订单留言」列表，返回每条留言的内容、操作人、操作时间，前端用 art-template 渲染到「订单留言」区域。 | `mbs oms erp-order-get-leave-message` | `orderid` |
| 订单留言列表查询：订单详情页加载该订单客户的站内信/留言列表。以客户ID(sender)与订单操作时间(opertime)为条件，返回该客户对应的留言记录(创建时间、星期、序号ID、留言主题)，前端在客户留言卡片中循环渲染，点击留言主题可跳转留言详情页。 | `mbs oms erp-order-get-messagelist` | `sender`, `opertime` |
| 高级搜索-开发员下拉数据查询：订单列表页「高级搜索」弹窗中，初始化「开发员」(#selloper)下拉框选项。返回当前用户可选的开发员(销售开发员)名称列表；前端用 art-template selloperTemplate 遍历 obj 渲染为 option，并对 #selloper 启用 select2。无任何请求参数。 | `mbs oms erp-order-get-oper3` | - |
| 订单物流轨迹查询：根据订单ID查询该订单的物流轨迹（物流跟踪节点）列表，用于订单详情页点击「物流轨迹」时以时间线（el-timeline）形式展示每个轨迹节点的时间与描述文本。 | `mbs oms erp-order-get-order-logistics` | `orderid` |
| 订单操作日志分页查询：订单详情页右侧操作日志时间轴分页查询：按订单号查询该订单的操作日志，返回当前页码、总页数及日志列表(操作员、部门、日志描述、操作时间、星期)。前端按相邻同一操作员(oper)合并分组渲染。 | `mbs oms erp-order-get-order-log` | `orderid`, `page`, `pageSize` |
| 订单退款记录查询：订单详情页加载时，根据订单ID查询该订单的全部退款记录（退款申请单列表），渲染至「退款」卡片表格；返回为空则隐藏该模块。 | `mbs oms erp-order-get-order-refund` | `orderid` |
| 包材(包装材料)下拉列表查询：订单详情页编辑时加载“包材(包装材料)”下拉框的可选项列表。无请求参数，POST 空 body；返回全部包材选项(ID/NAME)，前端用 art-template 渲染为 option 并用 select2 美化，同时把当前订单的 packagingid 设为选中值。 | `mbs oms erp-order-getpackaging` | - |
| 当前登录人业绩信息查询：订单列表页加载时调用，获取当前登录人头像及当月业绩汇总(营业额、总毛利额、总毛利率)，渲染到页面左上角用户信息区(.user-head)。无请求参数。 | `mbs oms erp-order-get-person-info` | - |
| 订单SKU采购信息查询：订单详情页订单状态条「采购中」图标鼠标移上(onmouseover)时触发，弹出「采购中」模态框，按订单ID查询该订单下各SKU的采购单信息(SKU、采购批次/组ID、备注、采购状态)，渲染到 skuInfosTemplate 列表。 | `mbs oms erp-order-get-sku-purchase-info` | `orderid` |
| 校验当前用户对指定订单的查看权限：订单详情页加载时调用：除部门=66且用户名=罗梦娅外，所有用户进入详情页都会以 orderid 调用本接口校验是否有该订单的查看权限；返回 obj==0 表示无权限，前端清空订单数据并提示“无法查询订单”，否则继续加载订单详情。 | `mbs oms erp-order-has-order-authority` | `orderid` |
| 订单是否可编辑权限校验(hasOrderEditAuthority)：订单详情页加载完成后调用，校验当前登录用户对该订单是否拥有编辑/操作权限。返回 obj==1 表示有权限(展示编辑相关按钮)，否则隐藏 #draw、.draw 等操作区并将 orderdata 置空。 | `mbs oms erp-order-has-order-edit-authority` | `orderid` |
| 订单详情查询：马帮ERP订单详情页主数据加载接口：依据订单ID返回单个订单的全量信息(状态/标志位、买家资料、收货地址、Paypal地址、物流详情、支付账号、费用核算、毛利等)，结果赋给 orderdata 渲染整页。 | `mbs oms erp-order-order-details` | `orderid` |
| 订单列表查询：订单中心列表多维度分页查询：按店铺/平台/订单状态/货运方式/自定义流程/关键词/时间区间/开发员/采购员/店长/经理/客服/销量级别/重量·价格·毛利·毛利率·剩余备货天数区间/退款/最晚到货等数十项条件,配合左侧标签(tab 0~11)分页返回订单及其商品明细(dbSellList)。 | `mbs oms erp-order-order-list` | `page`, `pageSize` |
| 订单属性(订单来源)下拉数据查询：订单列表页初始化时调用，加载"订单属性/订单来源"下拉选择框的全部可选项。请求无入参，返回字符串数组 obj，前端通过 art-template ordersourceTemplate 渲染为 <select id="ordersource"> 的 <option>，所选值后续作为 ordersource 参数提交到订单列表查询接口 /erpOrder/erpOrder/orderNew/orderList。 | `mbs oms erp-order-ordersource` | - |
| 订单状态下拉项查询：查询订单状态枚举列表，用于订单列表页左上“订单状态”筛选下拉框（#orderStatus）的初始化渲染。无请求参数，返回订单状态字符串数组，前端逐项渲染为 <option>，选中值作为 search() 提交的 status 字段。 | `mbs oms erp-order-order-status` | - |
| 订单类型列表查询：获取全部订单类型名称列表，用于订单列表页顶部筛选区 #ordertype 下拉框选项渲染。前端页面加载时(IIFE)调用一次，返回的字符串数组逐项渲染为 <option>，选中值随订单列表查询(orderList)以 ordertype 参数提交。 | `mbs oms erp-order-order-type-list` | - |
| 平台下拉列表查询：订单列表页初始化时加载所有平台，用于填充顶部筛选区"平台"下拉框(#platformList)。无入参，返回平台集合(序号ID + 平台名称)，前端通过 art-template 渲染为 <option>。 | `mbs oms erp-order-platform-list` | - |
| 订单查询条件(筛选项)下拉数据查询：订单列表页初始化时拉取“查询条件(filtertype)”下拉框的可选项列表，返回 key(提交值)/values(中文显示文案)，用于渲染 #queryConditions 选择器；用户选中后其 key 作为 filtertype 提交给订单列表查询接口。 | `mbs oms erp-order-query-conditions` | - |
| 店铺(FBA)列表查询：订单详情页进入「修改」编辑态时调用，拉取当前可选店铺列表，用于渲染所属店铺下拉框(select2)。接口无请求参数，返回店铺名称集合。 | `mbs oms erp-order-shop-fba-list` | - |
| 左侧店铺信息查询（shopInfo）：订单列表页左侧 Top100 店铺列表查询：按维度(待发量/今日单量)返回当前用户可见店铺集合，含店铺名称、所属平台ID、对应单量；前端用于渲染左侧店铺树并支持点击店铺过滤订单。 | `mbs oms erp-order-shop-info` | `orderType` |
| 海外仓SKU仓位查询：订单详情页「转海外仓」弹窗中，选择海外仓类型后，按订单未删除明细行(flag!=3)批量提交 sku/海外仓类型/订单号，查询并返回各 SKU 对应的海外仓 SKU(hwcSku)等信息，渲染「修改前SKU/修改后SKU」对照表。 | `mbs oms erp-order-sku-warehouse-list` | `root` |
| 月度店销报表-发货时间业绩查询(findDeliverChineseRoseShop)：月度店销报表「发货时间业绩」维度查询：按人员类别、平台、品类、客户经理、组织架构(总监/经理/主管/店长)、店铺、月份、统计类型、公司、海外仓、店龄等条件筛选，返回 ECharts 折线图系列(series/x)、表头(title)与店铺明细行列表(saleReportList，含发货小计/利润/毛利率/运营毛利率/订单量/退款金额/平台费/站内推广费等分时段汇总)。 | `mbs oms erp-order-find-deliver-chinese-rose-shop` | - |
| 人员发货时间业绩报表查询：按发货时间维度统计人员（大酋长/组员）销售业绩，支持平台、品类、组员、大酋长、月份、统计类型等多维筛选；返回 ECharts 折线图序列（series + x 轴）、表头标题对象（title）及报表行列表（saleReportList），用于发货时间业绩页表格与图表渲染。 | `mbs oms erp-order-find-deliver-chinese-rose` | `employeeType` |
| 月度店销报表(按订单时间)查询：月度店销报表页订单时间业绩维度查询：按平台、品类、客户经理、店铺、组员/大酋长/总监/主管、运营状态、月份、统计指标、公司、海外仓类型、店龄区间等筛选，返回echarts折线序列、动态时间表头及报表行数据。 | `mbs oms erp-order-find-order-chinese-rose-shop` | `employeeType` |
| 人销售报表(订单时间业绩)曲线查询：按订单时间维度统计人员/团队销售业绩：依据人员类别、平台、品类、大酋长、组员、月份、指标类型等条件查询，返回 ECharts 曲线数据(x轴/series)、表头(title)及报表明细列表(saleReportList，含收入小计/利润/毛利率/订单量/退款金额/平台费/站内推广费/单包裹利润等分时段指标)。 | `mbs oms erp-order-find-order-chinese-rose` | `employeeType` |
| 大类名称下拉列表查询：大类(月)报表页初始化时调用，获取全部商品「大类名称」枚举列表，用于渲染页头 #categoryName 大类下拉框选项（首项固定为「请选择大类」）。无请求参数，响应 obj 为大类名称字符串数组。 | `mbs oms erp-order-get-category-name` | - |
| 开发经理PK赛数据查询：大屏「经理擂台」PK 播报数据查询：按指定日期(默认昨天)与平台拉取各部门经理的爆款SKU数量、百元动销率及其排名榜单，前端 Element-Plus 表格滚动播报，超过21条滚动后跳转开发员榜单页。 | `mbs oms erp-order-get-develop-manager-pk-match` | `time`, `platform` |
| 开发员PK榜单查询：开发员PK大屏数据查询：按指定日期与平台，返回各开发员的爆款SKU数量、百元动销率、新品销售额及对应排名，用于 developer.html 全屏轮播榜单展示。 | `mbs oms erp-order-get-develop-pk-match` | `time`, `platform` |
| 二级部门销售PK榜(总监)查询：销售PK大屏播报：按平台与日期查询各二级部门(及负责人/总监)的上月销售额、当月销售额、预计当月销售额、预计增长额、排名与预估输赢，渲染于 Element-Plus 表格大屏轮播。 | `mbs oms erp-order-get-director-sales-pkmatch` | `time`, `platform` |
| 二级部门经理销售PK榜单查询：实景大屏「业绩PK」播报页：按平台(aliexpress)与数据日期查询各二级部门经理的销售额PK榜单，返回上月/本月/预计本月/预计增长销售额及排名，前端以 el-table 渲染，前3名展示奖杯。 | `mbs oms erp-order-get-manager-sales-pk-match` | `time`, `platform` |
| 各产品部门PK赛战报查询：产品部门新品PK赛大屏战报：查询各部门(队伍)新品销售额、订单销售额预估增长率、发货毛利额预估增长率及各项排名，按队伍逐行返回用于大屏 el-table 滚动播报展示。 | `mbs oms erp-order-get-productdepartment-pkmatch` | `time` |
| 店长销售PK赛榜单查询：大屏轮播看板按平台查询店长销售额PK赛榜单：传入统计日期(time，前端取昨日 yyyyMMdd)与平台(platform)，返回各二/三级部门、店长在指定平台的上月/本月/预计本月/预计增长销售额及平台排名、公司排名，用于大屏自动滚动轮播展示。 | `mbs oms erp-order-get-shopowner-sales-pk-match` | `time`, `platform` |
| 平台绩效月报-获取各月度统计起始时间：平台绩效月报页面初始化调用，返回近7个月（本月、上月、上上月、上三月~上六月）的统计起始时间数组obj，前端逐个写入sessionStorage并作为后续findPlatformPerformance的starttime入参。请求体为空（data被注释）。 | `mbs oms erp-order-find-month-platform-performance` | - |
| 平台绩效月报查询：平台绩效月报页面按月查询各电商平台绩效数据：传入起始月份(starttime)、平台(platformid)、类型(type=2)，返回 obj.data 各平台行（本月/上月各项数据反馈、月度涨幅、近30天数据、毛利率等）与 obj.sum 汇总行，以及最后更新日期 obj.time。本月/上月/上上月/上三~六月各 Tab 均调用本接口，仅 starttime 不同。 | `mbs oms erp-order-find-platform-performance` | `starttime`, `type` |
| 平台绩效周报-周时间点查询：平台绩效周报页面加载时调用，返回本周、上周、上上周三个周起始时间点；前端分别存入 sessionStorage(thisweek/lastweek/beforeweek) 作为后续 findPlatformPerformance 的 starttime 入参，并用于页面起止日期展示。前端未提交任何请求体参数。 | `mbs oms erp-order-find-week-platform-performance` | - |
| 限价(低毛利)订单导出：订单中心「限价」页签的订单导出接口：以与列表查询(findLowProfitOrder)相同的筛选条件(店长、店铺、任务类型、平台、推送时间区间、处理状态)拉取低毛利/限价订单，以 Excel(.xls) 二进制流返回供前端下载。导出全部走 limitedPriceExportall()，导出选中走 limitedPriceExportchek()(追加 orderids)。 | `mbs oms erp-order-export-low-profit-order` | - |
| 派送失败订单导出：订单看板「派送失败」标签页的导出功能：按店长、店铺、平台筛选条件（导出全部）或勾选的订单 orderids（导出选中）导出派送失败订单，后端以二进制流（Excel）返回，前端用 blob 下载为「派送失败{时间戳}.xls」。 | `mbs oms erp-order-export-send-failed-order` | - |
| 自动创建(自建商品)订单明细查询：在「自动创建/自建商品订单」列表中点击某一行的展开图标时，按订单ID(orderId)查询该订单下的商品明细行(图片、标题、SKU、等级、价格、库存、在途、毛利等)，结果渲染到子表 buildContentTemplate2。 | `mbs oms erp-order-find-auto-create-order-item` | `orderId` |
| 自动创建(自建)订单列表查询：订单看板「自动创建/自建订单」Tab的分页列表查询：按店长、店铺过滤，分页返回自建订单列表（订单编号、状态、店铺/客户、原币与RMB金额、国家、下单与拉单时间、运费、交易单号、是否低利润、备注等）。参数以URL查询串传递，无请求体。 | `mbs oms erp-order-find-auto-create-order` | - |
| 补差大订单-商品明细查询(第二层)：在订单管理“补差大”页签的订单列表中，点击某条订单的展开图标时触发；以该订单 orderId 为入参，POST 查询该订单下的补差商品明细行(图片/标题/SKU/销量/等级/单价/补差金额/库存等)，渲染到二级明细表格。 | `mbs oms erp-order-find-bucha-order-order-item` | `orderId` |
| 补差大订单列表查询：订单看板「补差大」标签页的分页列表查询：按店铺、店长筛选，分页返回亏损补差较大的订单列表（含订单号、SKU、金额、亏损额、国家、物流方式、下单/建单时间等），用于补差大订单的处理（解除禁止/作废/标记已完成）。 | `mbs oms erp-order-find-bucha-order` | `currPage` |
| 查询物流类型(渠道)下拉列表：查询数据库中全部物流类型(物流渠道)，用于「物流延迟」筛选区 #expressType 下拉框的数据源；前端在页面加载时调用 getExpressTypeList()，把返回的 obj 数组渲染为 <option>，option 的 value 取 expressTypeId、显示文本取 expressType，并初始化 select2。 | `mbs oms erp-order-find-db-expresstype` | - |
| 缺货禁售订单明细查询：根据订单ID(orderId)查询该订单下缺货/禁售商品明细列表，返回每个商品的图片、标题、SKU、销量、售卖等级、单价、币种原价、库存/在途、成本价等，前端在表格中渲染并计算毛利与毛利率。 | `mbs oms erp-order-find-defict-ban-order-item` | `orderId` |
| 亏损禁止发货订单列表查询：销售融合订单-亏损禁止发货订单分页列表查询：按店长、店铺筛选，分页返回因亏损被禁止发货的订单列表，并返回总数与总页数用于分页。参数以URL Query String传递，无请求体。 | `mbs oms erp-order-find-defict-ban-order` | - |
| 自建商品订单详情查询：在自建商品订单列表中点击某行展开时，按 orderId 查询该分销订单下的全部商品明细行，返回图片/标题/SKU/售卖等级/单价/销量/库存/在途/成本等字段，渲染到子表 buildContentTemplate2。 | `mbs oms erp-order-find-distribution-order-item` | `orderId` |
| 分销订单(自建商品订单)列表查询：采购桌面「自建商品」标签页的分销订单分页列表查询：按店铺、店长筛选并分页拉取分销订单，返回订单总数、总页数及订单行（订单号、状态、分销平台、店铺、币种/金额、客户国家、下单/建单时间、运费、交易号等），由 art-template buildContentTemplate 渲染表格。 | `mbs oms erp-order-find-distribution-order` | - |
| 到期订单明细查询：在「到期订单」列表展开某行时，按 orderId 查询该订单下的商品明细行，返回商品图片、销量、产品等级、单价、币种、原价、库存/在途、成本价等字段，前端用 art-template dutoTemplate2 渲染子表并计算毛利额与毛利率。 | `mbs oms erp-order-find-expire-order-item` | `orderId` |
| 到期订单列表查询：订单管理「到期订单」页签查询：按店铺、店长、延迟天数区间筛选备货到期/临期订单，分页返回订单列表（含状态、店铺、金额、备货时长、国家、物流、运费等）及总数/总页数。 | `mbs oms erp-order-find-expire-order` | - |
| 侵权商品订单明细查询：在「侵权或禁售」订单列表中点击某条订单行展开时，按订单ID查询该订单下的商品明细(订单项)列表，返回每个订单项的图片、标题、SKU、产品等级、单价、销量、库存/在途、币种/原价、开发员、利润计算所需成本及侵权平台，渲染到子表格 tortContentTemplate2。 | `mbs oms erp-order-find-infriging-order-item` | `orderId` |
| 侵权商品订单查询：查询命中侵权(已标注侵权但线上仍出单)的订单列表，按店铺、店长筛选并分页返回侵权订单及其侵权SKU、订单金额、状态、店铺等信息，供仪表盘“侵权或禁售”页签展示与后续作废/换图下架/标记处理。 | `mbs oms erp-order-find-infriging-order` | - |
| 订单物流轨迹查询(按订单ID)：在"投递失败订单"列表行操作菜单点击"查看轨迹"时调用，按订单编号 orderId 查询该订单的物流轨迹明细，返回一组(时间+状态描述)记录，前端拼接为多行文本后 alert 展示，无数据时提示"无"。 | `mbs oms erp-order-find-logistics-by-order-id` | `orderId` |
| 低利润(限价)订单列表查询：仪表盘「限价订单」(低利润订单)页签的分页列表查询：按店长、店铺、任务类型、平台、推送时间区间、处理状态等条件筛选低利润/限价订单，返回订单列表及金额、国家、时间、运费、交易单号、订单备注、是否低利润等字段，前端用 art-template 渲染表格。 | `mbs oms erp-order-find-low-profit-order` | - |
| 清仓停产暂售缺货订单列表查询：成品仪表盘(finishedGoods)「清停暂售缺货」页签的分页列表查询：按当前页码 currPageStr 分页拉取因清仓/停产/暂售导致缺货的待处理订单，返回总条数、总页数及订单行列表，用于 notprodContentTemplate 渲染表格。 | `mbs oms erp-order-find-no-inventory-order-forkf` | `currPageStr` |
| 清仓停产(无货)订单列表查询：仪表盘订单中心“清停暂收/清仓停产”页签：按店铺、店长筛选，分页查询马帮内清仓停产不再采购但线上仍出单的“无货”订单，返回订单列表(订单编号、状态、延迟天数、店铺、客户、金额、时间、运费、交易单号、备注等)及总条数/总页数。 | `mbs oms erp-order-find-no-inventory-order-new` | - |
| 其他禁止订单明细查询：在“其他禁止”订单列表中点击某行展开时，按 orderId 查询该订单下的商品明细(SKU 行)，返回图片/标题/SKU/产品等级/单价/销量/库存/在途/原价/开发员/成本价等字段，前端用 art-template otherContentTemplate2 渲染子表并现算利润额与利润率。 | `mbs oms erp-order-find-other-ban-order-item` | `orderId` |
| 其他禁止订单分页查询：订单监控看板「其他禁止」标签页的列表查询：按店铺、店长筛选并分页拉取“其他原因被禁止发货”的订单，返回订单总数、总页数及订单行，前端用 art-template otherContentTemplate 渲染表格。 | `mbs oms erp-order-find-other-ban-order` | - |
| 查询其他侵权listing信息：根据侵权 SKU 列表查询其它平台上的侵权 listing 信息，返回侵权商品的图片、标题、店铺、商品ID、SKU、售价、30天销量、浏览量、收藏量等，用于「侵权listing信息」页面表格展示。 | `mbs oms erp-order-find-other-infringement` | `infrigingSkus` |
| 退款(退货)订单明细查询：在「退包订单」列表中点击订单展开时，按 orderId 查询该订单下的退款明细行(SKU级)，返回明细数组并渲染到子表(returnContentTemplate2)，展示图片/标题/SKU/产品等级/售价/数量/库存/在途/原价/开发员及前端计算的毛利与毛利率。 | `mbs oms erp-order-find-refund-order-item` | `orderId` |
| 退包(退款)订单列表查询：仪表盘「退包订单」页签的列表查询：按店铺(shopid)、店长(shopManager)、页码(currPage)过滤，返回退款/退包订单分页列表，并返回 total/pages 供分页。参数以 URL Query 传递，无请求体。 | `mbs oms erp-order-find-refund-order` | - |
| 发货失败订单-商品明细查询：在“发货失败订单”面板中展开某一订单行时，按 orderId 查询该订单下的全部商品(SKU行)明细，返回图片、标题、SKU、产品等级、售价、销量、库存/在途、原价、开发员、成本价等字段，前端据此计算并展示毛利与毛利率。 | `mbs oms erp-order-find-send-failed-order-item` | `orderId` |
| 发货失败订单列表查询：销售融合订单中心-发货失败订单页签的分页列表查询：按店长、店铺、平台筛选，返回发货失败订单分页列表（订单编号、状态、店铺/客户、金额、国家、时间、运费、交易单号、备注等），并返回总条数与总页数供前端分页。 | `mbs oms erp-order-find-send-failed-order` | - |
| 缺货订单查询(按负责人)：仪表盘「清仓停产/15天缺货订单」列表分页查询：按当前登录负责人(principal)拉取其名下缺货订单，返回订单列表(订单号、状态、延迟天数、店铺、客户、金额、时间、运费、交易单号、备注)及总条数/总页数。首屏不带分页参数(默认首页)，翻页回调带 currPage。 | `mbs oms erp-order-find-shortage-order-by-principal` | - |
| 投递失败订单-缺货商品明细查询：客户评价(差评)页「投递失败订单」Tab中，点击某一行的展开图标时，按订单号(orderId)查询该订单下的商品明细列表(图片/标题/SKU/数量/销量级别/单价/库存/在途/成本等)，用于渲染子表格并计算商品毛利与毛利率。 | `mbs oms erp-order-find-shortage-order-item` | `orderId` |
| 缺货订单数量查询：移动端「必做清零」页面进入时(selgetSure()链式回调第7个)调用，查询当前用户「清仓停产缺货 / >=10天延迟」类待办订单数量，返回 obj.total 填充页面计数块 .odernum7。该接口无请求体，仅依赖登录态按当前用户统计。 | `mbs oms erp-order-find-shortage-order` | - |
| SMT半托管退款订单明细查询：SMT(速卖通)半托管退款订单列表中，点击某交易订单行展开时，按交易订单ID查询该订单下的退款商品明细行（图片/标题/SKU/产品等级/单价/销量/库存在途/币种原价/开发员/成本毛利等），用于渲染展开子表。 | `mbs oms erp-order-find-smt-ban-tuo-refund-order-item` | `tradeOrderId` |
| 投递失败(物流轨迹异常)订单列表查询：客户评价(差评)管理页「投递失败订单」标签页的分页列表查询：按店铺、店长、异常类型(固定4)、查询类型(固定"客服")等条件，查询物流投递失败/轨迹异常的订单，返回订单列表及分页信息。 | `mbs oms erp-order-find-track-exception-order` | - |
| 今日必做清零按钮是否显示：管理者驾驶舱(看板)加载后，查询当前登录人是否具备「今日必做清零」按钮显示权限/条件，返回 1 显示、0 隐藏，用于控制页面 .getsure(保存今日清零结果按钮及提示语)的显隐。 | `mbs oms erp-order-show-button` | - |
| 站内推广费/费项差异核对 导出：差异核对页 findDifference 点击导出，以当前查询条件 params 为请求体，导出指定费项类型的订单/批次费项差异明细 Excel；请求体复用 localStorage params（由 dailyorderTimeReport.html 写入）并追加 oneDay/type/pageSize；响应为二进制 Excel 文件流。 | `mbs oms erp-order-export-insite-free` | `type`, `pageSize` |
| 销售报表-差异费项明细查询(findDifference2)：日订单时段报表中点击某日某费项差异数字时弹窗调用，按上级报表筛选条件 + 单日日期(oneDay) + 费项类型(type) 分页查询该费项的逐订单/批次差异明细，返回订单号、店铺、店长、对应费项金额、费项说明与插入时间。 | `mbs oms erp-order-find-difference2` | `pageSize`, `page` |
| 销售报表-罚款差异明细查询：日销售报表费用差异下钻：平台含Wish(16)且费用类型为罚款时，按报表搜索条件+指定日期分页查询罚款明细。 | `mbs oms erp-order-find-difference-fine` | `platformIds`, `oneDay`, `type`, `pageSize`, `page` |
| eBay账单差异明细查询：日销售报表-成本明细下钻：根据上级报表查询条件(平台/站点/品类/人员/店铺)+账单日期oneDay+费用类型type，分页查询某日各订单的费用差异明细(订单号、店铺、店长、交易单号、付款交易费及原始金额、币种、费用类型、费用说明、账单时间)。 | `mbs oms erp-order-find-difference-for-ebay` | `oneDay`, `type`, `pageSize`, `page` |
| SMT联盟费差异明细查询：日销报表「站内推广费」明细钻取页：当平台为 SpeedMaster/SMT(platformIds=10/138) 且员工类型≠4 时跳转本页，按单日(oneDay)分页查询联盟费差异明细，返回交易单号、店铺、币种、联盟费、汇率、店长、费用时间等列。 | `mbs oms erp-order-find-difference-for-smt` | `pageSize`, `page` |
| Lazada刊登费差异(站内费用)列表查询：查询Lazada刊登费差异(站内RMB费用)对账列表：按费用时间区间分页查询，返回订单/交易编号、店铺、店长、站内RMB费用、费用时间等明细及总条数、总页数，用于差异费用核对展示。 | `mbs oms erp-order-find-difference-lazada-publish-fee` | `pageSize`, `page` |
| 销售报表-差异费用明细查询(findDifference)：日订单时效/销售报表中点击某日某类费用金额时，按上一页报表查询条件(localStorage params)+当日日期 oneDay+费用类型 type 分页查询该费用对应的订单/批次费用明细列表。 | `mbs oms erp-order-find-difference` | `oneDay`, `type`, `pageSize`, `page` |
| 销售报表-月份(账期)列表查询：月度销售报表页(monthReport.html)初始化时调用,返回月份(账期)描述列表 obj。obj[0]=本月、obj[1]=上月、obj[2]=上上月(写入 sessionStorage 作为后续报表查询 descr 入参);obj 从第4个元素起(obj.splice(3))为前十二个月可选项,渲染进 #otherMonthSelect 下拉框。接口本身不传任何请求参数。 | `mbs oms erp-order-find-month-sale-report` | - |
| 销售周报-获取周次销售报表描述(findWeek)：销售周报(销售大屏)页面初始化时调用，无入参，返回本周/上周/上上周三个销售报表描述(descr)的数组，前端分别存入 sessionStorage 的 thisweek/lastweek/beforeweek，供后续 findSaleChiefReportNew 等接口作为 descr 查询条件。 | `mbs oms erp-order-find-week-sale-report` | - |
| 某日补差运费(getAddShippingfeeByOneDay)明细查询：查询某一天(oneDay)的订单补差运费明细：以上一页传入的报表筛选条件(URL params)为基础，叠加统计日 oneDay、分页参数，分页返回订单编号、店铺号、补差运费、店长等明细行，并返回总页数用于分页。 | `mbs oms erp-order-get-add-shippingfee-by-one-day` | `pageSize`, `page` |
| 获取大酋长(店长负责人)列表：销售业绩报表(订单时间业绩/发货时间业绩)页面，按人员类别、所属平台、公司维度查询可选的“大酋长”(店长/团队负责人)列表，用于渲染顶部“大酋长”多选下拉框，选中后联动获取组员、店铺并触发业绩查询。 | `mbs oms erp-order-get-big-chief2` | `employeeType` |
| 大酋长(销售主管/Leader)列表查询：根据员工类型获取“大酋长”(销售主管/Leader)列表，用于页面顶部“请选择大酋长”下拉选择框(ySelect)的选项渲染；返回 id/name 列表供后续按 Leader 查询组员等使用。 | `mbs oms erp-order-get-big-chief3` | `employeeType` |
| 获取公司(地区)信息：FBA产品利润分析表页面加载时调用，获取当前用户可见的公司(地区)列表，用于渲染顶部“请选择地区”多选下拉框(#selectCity)。该接口无请求体参数，success 回调取 data.obj 数组，按 companyId/shortName 渲染为 <option>。 | `mbs oms erp-order-get-company-info` | - |
| 押款金额查询：按所属平台、店铺、结束月份查询对应账期的押款金额，返回的押款金额写入发货时间业绩报表的“押款金额”列（.amountNum）展示。 | `mbs oms erp-order-get-deposit` | - |
| 员工销售报表站点统计查询：月销售主管报表中，鼠标悬浮到某员工行时按需查询该员工在指定月份、指定平台下各站点的新刊登量、总在线量与新品比例，渲染到悬浮下拉框中。第一层(getEmpSaleRepSite)与第二层(getEmpSaleRepSite2)均调用本接口，入参与出参一致。 | `mbs oms erp-order-get-emp-sale-rep-site` | `empName`, `descr`, `isChief`, `platformId` |
| 预估运费明细查询：销售报表-预估运费明细分页查询：根据父页面透传的查询条件(params)、统计日期(currentdate)与页码(page)，分页返回订单的预估运费明细列表(订单号/店铺号/预估运费/店长/时间)及总条数、总页数。 | `mbs oms erp-order-get-estimated-freight-detail` | `currentdate`, `page` |
| 按日期查询店铺罚款明细：销售日报(dailySalesReport)中“罚款”金额单元格下钻：携带日报查询条件(参数取自 sessionStorage 的 params)加上所点击行的日期 oneDay，查询当日各交易单的罚款明细列表，渲染为交易单号/罚款日期/店铺/罚款金额/店铺负责人表格。 | `mbs oms erp-order-get-finefee-by-date` | `oneDay` |
| 客单价报表查询(国家/品类)：销售客单价报表：按时间区间、平台、排序及总监/经理/店长/店铺/国家/品类/邮寄方式等筛选，查询各客单价分组的收入、支出、订单数量、利润与毛利率明细行及合计行；前端用于渲染明细表格与收入/利润柱状图。 | `mbs oms erp-order-get-ke-dan-price-info` | - |
| 平台看店铺(getLeaderShop3)：根据平台、组员、大酋长、客服经理查询登录人可见的店铺列表，用于页面店铺下拉框联动渲染；后端按部门与管辖范围过滤并补写店铺级别/暂停/客户经理信息。 | `mbs oms erp-order-get-leader-shop3` | - |
| 店长/店铺列表查询(getLeaderShop4New)：在「订单时间业绩/发货时间业绩」报表页中，根据所属平台、组员、大酋长(店长)、客服经理、公司等条件查询符合条件的店铺清单，用于店铺勾选弹框/店铺下拉的数据渲染。 | `mbs oms erp-order-get-leader-shop4-new` | - |
| 根据平台/大酋长/组员查询店铺列表(getLeaderShop4)：销售报表筛选区联动接口：用户选择平台(可叠加大酋长、组员)后，后端返回对应可选店铺名称列表，前端用于渲染 #shoptypeid 店铺下拉框的 <option>。 | `mbs oms erp-order-get-leader-shop4` | - |
| 店长店铺列表查询(getLeaderShopNew5)：销售报表(saleReport)模块：根据大区长、客服经理、店长(员工)、平台、关键词、运营状态等条件查询店长名下的店铺列表，返回店铺数组(SHOPID/SHOPNAME)，用于「店铺」多选下拉(el-select)的选项渲染与远程搜索。 | `mbs oms erp-order-get-leader-shop-new5` | `page` |
| 禁售清单查询：销售报表-禁售清单分页查询：按是否禁售、是否违规、平台、禁售政策(二级类目)、侵权产品等条件筛选，返回各平台禁限售政策行(一级/二级政策、触发产品、去重SPU数量、禁售状态、不违规备注及对应SPU图片列表)。 | `mbs oms erp-order-get-prohibition-list` | `page`, `pageSize` |
| 退包(退货报表)按日期查询：退货报表页(马帮ERP)按日期统计退包数据：接收上级页面通过 URL params 透传的筛选条件 JSON，叠加单日标记、分页参数后分页查询，返回订单退包列表(订单编号/店铺/店长/退包收入/订单金额)及分页汇总。 | `mbs oms erp-order-get-runturn-pkgby-date` | `pageSize`, `page` |
| 销售报表-按店铺查询站点刊登统计(getSaleRepSite)：销售月报表第三层（店铺维度）查询：根据店铺名称与月份描述，查询该店铺各站点的新刊登量、总在线量、新品比例，用于月报表悬浮下拉框中展示站点刊登统计明细。 | `mbs oms erp-order-get-sale-rep-site` | `shopName`, `descr` |
| 按店长查询团队成员(店长列表)：库存看板/必刊登「优化建议」筛选区，根据平台筛选条件查询团队成员(店长)列表，用于渲染店长下拉选择器(el-select)。Vue 组件 #shopvue 初始化及平台变更时调用，返回列表渲染为店长下拉项。 | `mbs oms erp-order-get-team-member-by-leader-new` | - |
| 根据大酋长获取组员列表：平台流量看板/商品流量看板页面，选择大酋长(销售主管)下拉后联动调用，根据所选大酋长ID集合查询其名下组员(员工)列表，用于填充组员多选下拉框。请求体为大酋长ID的JSON数组(非对象)，响应obj为组员数组，前端仅取employee_name作为下拉项的value与文本。 | `mbs oms erp-order-get-team-member-by-leader` | `root` |
| 平台禁限售政策列表查询：在「产品问题投诉」页面，当问题类型为“平台限售”且选择平台后，按平台名称查询该平台对应的禁限售（禁售）政策列表，返回字符串数组用于「禁售政策」下拉框选项。 | `mbs oms erp-order-no-sale-platform` | `platformName` |
| 亚马逊平台费账单明细查询：销售业绩报表中点击某日「平台费」(发货时间业绩 + 平台=Amazon)下钻，按账单日期分页查询亚马逊平台费账单明细，返回店铺/币种/费用金额/费用类型/订单号/SKU/出账时间等明细行及总条数。 | `mbs oms erp-order-show-amz-bill-detail` | `platformIds`, `currentdate`, `page` |
| 某一天eBay账单明细查询：日销报表下钻：根据父页面筛选条件(员工类型/时间区间/平台/分类/店铺/员工/大主管)+指定某一天(currentdate)，分页查询该日 eBay 账单明细，并返回总条数与总页数供前端分页与展示。 | `mbs oms erp-order-show-one-day-ebay-bill-detail` | `page` |
| 市场部月度毛利额目标列表查询：按部门与时间区间查询市场部（人员维度）月度毛利额目标完成情况，返回人员/部门列表（本月/上月/下月/年度的目标额、完成率、环比、销售额/毛利率/毛利额）及一行汇总 sum；列表为树形懒加载首层数据。 | `mbs oms erp-order-get-amount-target-list` | `departmentId`, `startTime`, `endTime` |
| 市场部月度毛利目标列表查询：市场部月目标页面按部门与时间区间查询各负责人(部门/团队)月度毛利额目标完成情况列表，返回本月/上月/下月/年度累计等字段及汇总(sum)行；前端以懒加载树表展示，可下钻经理与店铺。 | `mbs oms erp-order-get-profit-target-list` | `departmentId`, `startTime`, `endTime` |
| 销售日刊登报表-获取全部刊登数量(上上周)：销售日刊登报表顶层查询：按周次标记(weekTag)返回各销售员一周每天新刊登listing数量、个人汇总数量及全员每日合计数量，并通过 flag 标识是否可向下钻取。weekTag=100 对应上上周页签。 | `mbs oms erp-order-get-all-publish-number` | `weekTag` |
| 销售日报-经理店铺数据查询(getManagerShop)：销售目标/销售日报页面中，按员工(经理)下钻查询其名下各店铺的本周/上周/上上周发布(刊登)数量数据。点击表格行展开图标时触发，传入员工ID、员工姓名及周标识，返回该员工下各店铺(weekList)及每店铺逐日数量(week)，由 art-template 渲染到店铺明细行。 | `mbs oms erp-order-get-manager-shop` | `employeeId`, `employeeName`, `weekTag` |
| 月度业绩目标首页查询：月业绩目标页首屏加载：按 targetType=2（月）与 week（月偏移量）查询当前层级（level 1/2/3）下各销售/主管的本月业绩目标、环比涨跌、实际销售额/毛利率/毛利额、完成率，以及上月、下月目标等数据，并返回历史目标时段（timeSlot）列表用于切换查看。 | `mbs oms erp-order-get-product-target-first` | `targetType`, `week` |
| 业绩目标-按商品(开发员/大组长)月度目标查询：进入“新增业绩目标”页面时加载业绩目标数据：返回本人(大组长)目标行集合 bigChief、组员目标行集合 sales(含“汇总”行)、是否可编辑档标识 isLast、以及可切换查看的历史目标时段 timeSlot。每行包含本月实际完成、本月目标三档、下月目标三档。week=0 时为本月并可编辑下月目标，week>0 时查看对应历史时段(只读)。入参均为 URL Query，无请求体。 | `mbs oms erp-order-get-product-target` | `targetType`, `week` |
| 月度销售业绩目标首页查询：月业绩目标看板首页加载：按 targetType=2(月) 与时间槽 week 查询当前层级(店铺/姓名)的本月/上月/下月业绩目标、实际销售额、毛利率、毛利额、完成率、环比涨跌、订单量等，返回可逐级下钻的 sales 列表及历史时间槽 timeSlot。 | `mbs oms erp-order-get-sales-target-first` | `targetType`, `week` |
| 月业绩目标-店铺/组员下钻查询：月业绩目标页面点击行前的展开箭头时，按店长/平台下钻查询其下级（店铺或组员）的月业绩目标、环比涨跌、本月/上月实际销售额、毛利率、毛利额、实际完成率及下月目标等明细，结果渲染为子表格。targetType 固定为 2（月目标）。 | `mbs oms erp-order-get-sales-target-shop` | `targetType` |
| 业绩目标(大酋长/月)查询：大酋长业绩目标页加载/切换时段时调用：按 targetType=4（大酋长口径）、week（时段下标）拉取业绩目标数据，返回组员目标(bigChief)、店铺/汇总目标(sales)、可选历史时段(timeSlot)及 isLast 是否当前月标记，前端用 art-template(contentTemplate) 渲染本月/下月各三档目标表。 | `mbs oms erp-order-get-sales-target` | `targetType`, `week` |
| 销售目标-下级主管(酋长)业绩数量查询：销售日报页面，点击展开某员工行时，按 employeeId+weekTag 查询其下级主管(酋长)的本周/上周/上上周业绩数量明细(weekList)，用于渲染下钻子表。请求参数全部以 URL query 传递(weekTag: 001本周/010上周/100上上周)。 | `mbs oms erp-order-get-sub-manager-number` | `employeeId`, `weekTag` |
| 月度商品销量(周/月)统计查询：业绩目标(月)看板顶部卡片数据查询：返回所选时段的年度已完成销售额及按周/月维度的销量目标完成列表(实际/目标 形式)，供 contentTemplate2 模板渲染「{year}年已完成 / 月业绩目标」区块。 | `mbs oms erp-order-get-week-month-product-sales-volume` | `targetType`, `month` |
| 月业绩目标销量(已完成)统计查询：月业绩看板头部卡片数据查询：返回当前用户/部门本年度已完成销售额(万)及「月业绩目标」列表(各周/月时段销量，格式 目标/实际)，渲染于页面顶部卡片 #contentTemplate2。由月业绩首屏 getSalesTargetFirst() 成功回调内联调用。 | `mbs oms erp-order-get-week-month-sales-volume` | `targetType` |
| 新品出单产品明细查询：看板店铺(seebeeDevelopmentShop)新品出单产品明细分页查询：按店铺管理员/店铺名称/自建-继承状态/时间区间/类型筛选，分页返回商品图片、SPU、产品名、商品属性、出单量、创建时间等明细行，并返回总条数与总页数用于分页。 | `mbs oms erp-order-find-product-details` | `currentPage`, `pageSize` |
| SeeBee平台开发报表-店铺首层列表查询：SeeBee平台开发报表首层数据查询：按开始/结束时间筛选，返回店长(店铺管理者)维度的店铺汇总报表行，含订单量、订单销售额、发货毛利额、新品/老品出单量与销售额、总产品数、爆B以上产品数及爆款率(均含搜索时间范围内与不受时间限制两套口径)。 | `mbs oms erp-order-first-list` | `beginTime`, `endTime` |
| 人员任务报表-账号Campaign统计查询：按时间区间与排序方式统计各业务员(ERP用户)的广告投放业绩：返回每个人的 campaigns 数量、消耗金额、转化价值、单量、ROI、周出单≥10 的 campaigns 数量、出单比例、点击、转化率等汇总指标，用于报表页表格渲染。 | `mbs oms erp-order-get-account-campaign-stat` | - |
| SeeBee平台开发-店铺下钻(二级)列表查询：SeeBee平台开发报表中，点击某店铺管理员(开发员)行展开后触发，按 店铺管理员+店铺状态+起止时间 查询该管理员名下各店铺的开发明细（订单量/销售额/毛利/新老品出单量与销售额/总产品数/爆B以上产品数/爆款率），返回明细列表渲染为子表格。 | `mbs oms erp-order-second-list` | `shopManager`, `status`, `beginTime`, `endTime` |
| 店长名下店铺下拉查询(getLeaderShop2)：订单看板页中，选择销售负责人(店长)下拉后，根据所选店长(employeeList)联动查询其名下店铺列表，渲染到各 Tab 的店铺(shopName1~shopName10)下拉框。请求体还固定携带空的 bigChiefList(大酋长列表)与 platformId(平台ID列表)两个数组占位参数。 | `mbs oms erp-order-get-leader-shop2-shop-achievements` | - |
| 大酋长/组员店铺列表查询(getLeaderShop)：店铺业绩页的「店铺」下拉联动接口：根据所选平台、大酋长(组长)、组员(员工)，查询其名下可选店铺集合，用于填充 #shop 多选下拉。平台/大酋长/组员任一为空时传空数组。 | `mbs oms erp-order-get-leader-shop` | - |
| 店铺站点列表查询(getShopSite)：获取「店铺站点」下拉列表数据。页面加载时(password())无条件调用，返回当前可选的店铺站点字符串数组，用于渲染 #password(店铺站点)下拉选择框；用户选中后作为店铺业绩列表查询/导出的 password 过滤条件。 | `mbs oms erp-order-get-shop-site` | - |
| 店铺业绩列表查询：店铺业绩(店铺成绩)分页列表查询：按平台、月份、店铺、组员、大酋长、店铺站点、店铺类型、店铺等级、运营状态、店铺属性、店铺标签、店龄区间、客户经理、资质状态、跟卖状态等条件筛选，支持排序字段与升降序，返回店铺业绩列表及总数、总页数。 | `mbs oms erp-order-shop-achievements-list` | `page`, `pageSize` |
| 店铺登录地址获取：订单详情页点击面包屑店铺名称时，按店铺名(路径变量)查询该店铺后台免登录地址；成功(code=200)则 window.open(obj) 打开店铺地址，失败则 ElMessage.warning(desc) 提示。无请求体。 | `mbs oms erp-order-shopname` | `shopname` |
| 大酋长上新统计查询：上新发布统计-按大酋长统计：按所选月份(date)与大酋长(bigChief/allChief)统计每位大酋长的毛利额、运营毛利率、销售额、在线量、总上新量、上新/在线占比，以及美国/英国/德国/澳大利亚/加拿大/法国/爱尔兰/意大利/奥地利/西班牙 10 个站点的上新量与占比。 | `mbs oms erp-order-find-sta-publish-big-chief` | `date` |
| 按人员统计上新发布报表查询：上新发布统计报表（按人员）：按所选月份(日期)与可选大酋长，分页查询各销售人员在美国/英国/德国/澳大利亚/加拿大/法国/爱尔兰/意大利/奥地利/西班牙等站点的上新量与占比，并汇总毛利额、运营毛利率、销售额、在线量。 | `mbs oms erp-order-find-sta-publish-emp` | `date`, `currentPage`, `pageSize` |
| 刊登统计-按店铺统计查询：刊登统计报表「按照店铺统计」页签的列表查询：按统计月份(date)及站点、大酋长、店铺负责人、店铺等筛选条件分页查询各店铺的销售额、上新量、在线量、上新占比、剩余刊登数量、剩余销售额、卖家等级等汇总指标。 | `mbs oms erp-order-find-sta-publish-shop` | `date`, `currentPage`, `pageSize` |
| 站点周期上新统计查询：刊登统计-按站点统计：传入某一日期(date)，返回各站点在四个统计周期(周期标题由 title 给出)下的销售额、周期上新量、在线量、周期上新占比，前端按站点行渲染统计表格。 | `mbs oms erp-order-find-sta-publish-site` | `date` |
| 总监下拉列表查询：依据人员类别+公司+所属平台查询团队总监(leader)下拉列表，用于自定义客单价报表页『所有总监』多选下拉的数据源，返回总监 id/name 列表。 | `mbs oms erp-order-leader-drop-down` | - |
| 主管(小经理)下拉列表查询：人销售报表页面顶部筛选区的「主管」下拉框数据源。根据所选人员类别(订单/发货时间业绩)、公司、平台、总监、经理等上级条件，联动查询其下属主管(小经理)列表，返回 {id,name} 数组供 el-select 渲染主管选项。 | `mbs oms erp-order-little-manager-drop-down` | - |
| 经理下拉列表查询：自定义报表(客单价分析)页头部“所有经理”下拉框的数据源接口。根据人员类别、公司、平台及已选总监(leaders)联动查询其下属经理列表，返回 {id,name} 列表用于 el-select 渲染。 | `mbs oms erp-order-manager-drop-down` | - |
| 店铺下拉列表查询：根据平台、总监/经理/店长、客户经理、运营状态、海外仓、店铺排名、店铺名称关键字等条件分页查询店铺下拉列表；后端会把入参的总监/经理/主管换算成店长再过滤，并按登录人名下组员限定数据范围。 | `mbs oms erp-order-shop-drop-down` | - |
| 店长下拉列表查询：按总监/经理/主管、公司、平台等条件查询店长(店铺销售负责人 sale_leader)下拉选项列表，后端将总监/经理/主管转换为名下店长并按公司/平台/登录人组员过滤后去重返回，供前端店长下拉控件使用。 | `mbs oms erp-order-shop-manager-drop-down` | - |
| 团队人员下拉(按集团公司)查询：按集团公司ID(groupCompanyId)、员工类型、公司/平台/组长等条件查询团队成员(员工)下拉列表。前端在创建海外仓SKU弹窗 onMounted 时分别以 groupCompanyId=1 与 groupCompanyId=33 各调一次，把返回数组分别缓存到 companyUserMap[1] / companyUserMap[33]，用于开发员(developer1/developer2)下拉选择，选项展示与取值均为成员姓名 name。 | `mbs oms erp-order-team-number-drop-down1` | `employeeType`, `companyIds`, `groupCompanyId` |
| 根据人员获取下面组员的店铺(店铺下拉)：团队下拉组件数据源：根据店长(shopManagers)与平台(platform/平台名称)筛选在营店铺，返回店铺ID与店铺名称列表，供前端“店铺”下拉选择器渲染 label/value。 | `mbs oms erp-order-team-number-drop-down4` | - |
| 团队人员(下拉)查询：按员工类型/公司/平台/组长/主管等条件查询团队人员名单，返回人员对象数组。前端在刊登检测(type=checkPublish)模式下，用其 name 字段填充创建人下拉框(createdBy)的可选项。 | `mbs oms erp-order-team-number-drop-down` | - |
| 物流国家统计列表查询：物流跟进看板（任务跟进页）按国家维度统计查询：依据国家、物流类型、统计时间区间与排序方式，返回各国家的跟进次数、发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款数/退款率及各平台（wish/ebay/amz/smt/joom/其他）发货单量。 | `mbs oms erp-order-find-logistics-country` | - |
| 物流货运渠道(三级)统计查询：物流跟进看板(taskFollow)第三层下钻接口：在「国家→货运类型」展开后，按所选国家、货运类型及统计时间区间、排序方式，返回该货运类型下各具体货运渠道(物流商)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款订单数/退款率以及 wish/ebay/amazon/aliexpress/joom/其他 各平台单量；同时回传上层员工头像、跟进描述与跟进总次数用于头部展示。 | `mbs oms erp-order-find-logistics-express-name` | - |
| 物流类型(第二层)统计查询：物流跟进看板中，点击第一层「国家」行展开时按所选国家+物流类型+统计时间区间+排序方式查询该国家下各物流类型(expressType)的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比、退款数/退款率及各平台(wish/ebay/amz/smt/joom/其他)分布，并返回跟进次数、最后联系时间、跟进描述等跟单信息，用于渲染第二层(tbodyTwoTemplate)列表。 | `mbs oms erp-order-find-logistics-express-type` | `country` |
| 物流跟进记录查询：物流跟进日志看板查询：按国家、类型、物流商及操作时间区间分页查询物流商跟进记录，返回跟进编号、跟进人/时间、国家/类型、物流商类型/物流商、跟进内容、聊天图片、价格附件、下一步跟进计划与下一次联系日期等列表数据。 | `mbs oms erp-order-find-logistics-follow-log` | `currentPage`, `pageSize` |
| 物流商下拉列表查询：物流跟进日志页加载时调用，无入参，返回全部物流商名称列表，用于填充“请选择物流商”下拉框。返回的 obj 数组每一项既作为 option 的 value 又作为显示文本。 | `mbs oms erp-order-find-logistics-providers` | - |
| 物流跟进-国家下拉查询：物流跟进日志页面初始化时调用，拉取可选「国家」清单，用于顶部「请选择国家」下拉框(#country)的渲染。无请求参数，直接返回国家名称字符串数组。 | `mbs oms erp-order-find-track-country` | - |
| 物流跟进-运输类型(下拉)查询：物流跟进日志(logView)页面初始化时调用，无入参，返回全部"类型"(运输/快递类型)字符串列表，前端用 art-template(#expressTypeTemplate) 渲染为类型下拉框选项（既作 option 的 value 又作显示文本）。 | `mbs oms erp-order-find-track-express-type` | - |
| Wish罚款账单列表查询：按发生时间区间(dateFromStr~dateToStr)分页查询各店铺的Wish平台罚款账单汇总，返回店铺名、罚款类型、罚款金额(美元/人民币)列表及分页信息；前端以 art-template(#contentTemplate) 渲染表格。 | `mbs oms erp-order-show-wish-fine-bills` | `dateFromStr`, `dateToStr`, `currPage` |
| Wish罚款明细查询：按时间区间、店铺名、罚款类型分页查询 Wish 平台罚款明细列表，返回总条数、总页数及每条罚款记录(店铺、交易/订单ID、延迟天数、发生时间、罚款/扣减金额(美元/人民币)、是否撤销、罚款类型与状态)。 | `mbs oms erp-order-show-wish-fine-detail` | `currPage` |
| SPU的PB(Product Boost)费用明细查询：根据SPU及时间区间，查询该SPU在各店铺的Wish Product Boost(PB)推广活动费用明细，返回活动基本信息、GMV、预算、消耗、曝光与曝光费等字段；前端在末尾追加一行汇总行后渲染表格。 | `mbs oms erp-order-find-pbfeeof-spu` | `spu`, `startTime`, `endTime` |
| 店铺ProductBoost(PB)推广费报表查询：根据店铺ID与活动时间区间，查询该店铺下 Wish ProductBoost(商品推广)各活动的费用报表：返回活动基础信息、GMV/PB GMV、活动最大预算、广告总消耗与期间消耗、曝光费/报名费/曝光数等明细；前端对 totalCampaignSpend、incrementFee 做合计生成汇总行并以 art-template 渲染表格。 | `mbs oms erp-order-find-pbreportof-shop` | `startTime`, `endTime`, `shopId` |
| 按SPU查询商品推广(PB)费用统计：按交易时间区间与排序条件，分页查询各 SPU 的销售收入(总/新品/老品)、订单数、订单毛利额、广告费(总/新品/老品)、广告销售额(总/新品/老品)、广告占比(ACOS)、PB占比与 ROI 等统计指标，用于 PB费用-按SPU查看 报表页渲染。 | `mbs oms erp-order-find-wish-pbfee-by-spu` | `startTime`, `endTime`, `field`, `order`, `currPage`, `pageSize` |
| WishPB商品翻页(前/后45天)趋势查询：WishPB(Product Boost)推广趋势图的翻页查询：在 listingChart 页面点击「前45天 searchChart('0')」/「后45天 searchChart('1')」时，按 productId + 基准日期 date + 选中指标 selectOption + 方向 days 拉取折线趋势数据(x 轴日期 + series 多指标系列)，并回写新的基准日期用于继续翻页。 | `mbs oms erp-order-find-wish-pbof-itemid-every-next-or-last` | `productId`, `date`, `days` |
| Wish产品PB活动明细-前/后45天翻页查询：PB(Product Boost)推广趋势页点击「前45天/后45天」翻页时，按产品ID、基准日期、方向(前/后)查询该时间段内的PB推广活动明细列表(活动名/起止时间/关键字/订单数/活动状态/花费)，渲染到下方明细表格。 | `mbs oms erp-order-find-wish-pbof-itemid-every-table-next-or-last` | `productId`, `date`, `days` |
| Wish产品PB活动每日明细表查询：根据产品ID与时间区间(默认前45天至昨天)，查询该Wish产品在 Product Boost(PB)推广中每日的活动明细列表，含活动名称、起止时间、关键字、订单数、活动状态、花费，用于刊登趋势图(listingChart)下方明细表渲染。 | `mbs oms erp-order-find-wish-pbof-itemid-every-table` | `startTime`, `endTime` |
| Wish商品Boost每日PB趋势查询：根据产品ID与起止日期，查询该产品 Wish ProductBoost(PB) 推广在前45天时间窗内每日的趋势数据，返回 echarts 折线图所需的 X 轴日期分类与多条系列(总费用/总计费流量/ERP总成交额/ERP总单量)，并回传当前定位日期(desc)用于前/后45天翻页。 | `mbs oms erp-order-find-wish-pbof-itemid-every` | `productId`, `startTime`, `endTime` |
| Wish按listing查询PB投放报表(findWishPBOfItemid)：Wish平台Product Boost(广告/推广)按 listing 维度的分页统计查询：依据交易时间区间、店长、店铺、产品ID等条件，按指定字段排序，返回每个 listing 的广告费(总/新品/老品)、广告销售额、ACOS、PB占比、刊登时间、要价、CPM、费用流量、订单成交、店铺店长、ERP成交额单量等汇总指标列表。 | `mbs oms erp-order-find-wish-pbof-itemid` | `startTime`, `endTime`, `currPage`, `pageSize` |
| PB（广告）按人员维度统计查询：按交易时间区间，统计每个运营人员（店铺管理员）的销售收入（总/新品/老品）、销售订单数、毛利额、广告费（总/新品/老品）、广告销售额（总/新品/老品）、广告占比、PB占比、毛利率、ROI 等指标，按所选字段升/降序分页返回人员汇总列表。 | `mbs oms erp-order-find-wish-pbof-manager` | `startTime`, `endTime`, `field`, `order`, `currPage`, `pageSize` |
| 按投放计划查询 Wish ProductBoost 推广效果：Wish ProductBoost(产品推广)报表「按照投放计划查看」维度的分页查询：按交易时间区间、店长、店铺、活动名称、活动状态等条件筛选，按指定字段升/降序排序，返回投放计划(活动)列表及其活动花费、订单数、ERP总成交额/总单量等汇总字段。 | `mbs oms erp-order-find-wish-pbof-plan` | `startTime`, `endTime`, `currPage`, `pageSize` |
| 某日在线投放计划(活动)查询：Wish商品Boost(PB)趋势图中点击某一天的数据点时，按商品ID与日期查询当天正在进行的投放活动(Campaign)列表，弹窗展示活动名称、起止时间、关键字、订单数、活动状态、花费等明细；返回空数组时提示“此时间无投放计划在进行”。 | `mbs oms erp-order-get-campaign-online` | `productId`, `date` |
| Wish推广(店长维度)活动查询：按店长(店铺经理)与时间区间查询其名下店铺的 Wish 商品推广(Product Boost)活动列表，返回各活动的店铺、活动ID/名称、起止时间、状态、成交额(GMV)、最大预算与期间消耗等；前端汇总各活动期间消耗(incrementFee)合计展示。 | `mbs oms erp-order-query-wish-pbby-manager` | `shopmanager`, `startTime`, `endTime` |
| 事业部人员毛利方差图查询：按月份、平台、总监、经理、店长等条件，查询事业部各店长的毛利方差数据，返回每个店长的实际毛利/人均毛利/总毛利及入职、平台、经理等信息，前端用 ECharts 渲染柱状图(实际毛利)+折线(平均值)。 | `mbs oms erp-order-get-profit-variance` | `targetStartTime` |
| 校验订单取消资格(checkCancelEligibility)：订单详情页点击「取消订单」时调用：根据订单ID校验该订单是否满足取消条件，并返回可选的取消理由列表(cancelReasonList)，用于取消订单弹窗中的「取消理由」下拉。code!=200 时弹出 message 错误提示并中断。 | `mbs oms crm-web-service-check-cancel-eligibility` | `orderId` |
| 月度店销报表导出：导出「月度店销报表」。按人员类别(订单时间业绩/发货时间业绩)、平台、品类、客户经理、总监/大酋长/组员、店铺、年月、展示指标类型、公司、海外仓类型、店龄区间等条件，导出 Excel(.xls) 文件流；无数据或异常时返回 JSON 提示。 | `mbs oms erp-order-export-chinese-roses` | `employeeType` |

## 命令详情

- [erp-mobile-get-db-sysadmin.md](erp-mobile-get-db-sysadmin.md)
- [erp-mobile-get-order-log-by-order-id.md](erp-mobile-get-order-log-by-order-id.md)
- [erp-mobile-get-position-id-by-oper.md](erp-mobile-get-position-id-by-oper.md)
- [erp-mobile-get-developer-info-by-datetime.md](erp-mobile-get-developer-info-by-datetime.md)
- [erp-mobile-findbigchief-by-login.md](erp-mobile-findbigchief-by-login.md)
- [erp-mobile-get-developer-big-chief.md](erp-mobile-get-developer-big-chief.md)
- [erp-mobile-get-developer-team-member-by-leader.md](erp-mobile-get-developer-team-member-by-leader.md)
- [erp-mobile-get-leader-shop2-sale-trend-chart.md](erp-mobile-get-leader-shop2-sale-trend-chart.md)
- [erp-mobile-get-platform-list.md](erp-mobile-get-platform-list.md)
- [erp-mobile-get-primary-category.md](erp-mobile-get-primary-category.md)
- [erp-mobile-get-team-member-by-leader-sale-trend-chart.md](erp-mobile-get-team-member-by-leader-sale-trend-chart.md)
- [erp-order-country-list.md](erp-order-country-list.md)
- [erp-order-get-developer-card-info.md](erp-order-get-developer-card-info.md)
- [erp-order-find-smt-ad-campaign-weeks.md](erp-order-find-smt-ad-campaign-weeks.md)
- [erp-order-get-platform.md](erp-order-get-platform.md)
- [erp-order-get-available-storage-list.md](erp-order-get-available-storage-list.md)
- [erp-order-get-position-id.md](erp-order-get-position-id.md)
- [erp-order-get-storage-list.md](erp-order-get-storage-list.md)
- [erp-order-0-1.md](erp-order-0-1.md)
- [erp-order-1.md](erp-order-1.md)
- [erp-order-platform-id-1.md](erp-order-platform-id-1.md)
- [erp-order-0-2.md](erp-order-0-2.md)
- [erp-order-platform-id-order-status.md](erp-order-platform-id-order-status.md)
- [erp-order-get-leader-shop2-sale-report.md](erp-order-get-leader-shop2-sale-report.md)
- [erp-order-get-platform-list.md](erp-order-get-platform-list.md)
- [erp-order-get-site-list-sale-report.md](erp-order-get-site-list-sale-report.md)
- [erp-order-trigger-product.md](erp-order-trigger-product.md)
- [erp-order-get-head-down-show-data-sales-amount-target.md](erp-order-get-head-down-show-data-sales-amount-target.md)
- [erp-order-get-head-down-show-data-sales-profit-target.md](erp-order-get-head-down-show-data-sales-profit-target.md)
- [erp-order-sale-visting-card.md](erp-order-sale-visting-card.md)
- [erp-order-get-category-develop-info.md](erp-order-get-category-develop-info.md)
- [erp-order-get-remind-msg.md](erp-order-get-remind-msg.md)
- [erp-order-page-size.md](erp-order-page-size.md)
- [erp-order-get-shop-sale-info.md](erp-order-get-shop-sale-info.md)
- [erp-order-get-sysadmin.md](erp-order-get-sysadmin.md)
- [erp-order-get-track-by-track-dny.md](erp-order-get-track-by-track-dny.md)
- [erp-order-customer-service-assess-shop.md](erp-order-customer-service-assess-shop.md)
- [erp-order-customer-service-mgr.md](erp-order-customer-service-mgr.md)
- [erp-order-get-year-month.md](erp-order-get-year-month.md)
- [erp-order-shop-id.md](erp-order-shop-id.md)
- [erp-order-find-all-manager.md](erp-order-find-all-manager.md)
- [erp-order-find-allshop.md](erp-order-find-allshop.md)
- [erp-order-findshop-by-manger.md](erp-order-findshop-by-manger.md)
- [erp-mobile-get-leader-shop2-hot-product-listing.md](erp-mobile-get-leader-shop2-hot-product-listing.md)
- [erp-mobile-get-listing-detail-info.md](erp-mobile-get-listing-detail-info.md)
- [erp-mobile-get-listing-order-by-item-id.md](erp-mobile-get-listing-order-by-item-id.md)
- [erp-mobile-get-listing-order-in-month.md](erp-mobile-get-listing-order-in-month.md)
- [erp-mobile-get-modify-listing-log-by-item-id.md](erp-mobile-get-modify-listing-log-by-item-id.md)
- [erp-mobile-get-platform-info-hot-product-listing.md](erp-mobile-get-platform-info-hot-product-listing.md)
- [erp-mobile-get-sku-info-by-item-id.md](erp-mobile-get-sku-info-by-item-id.md)
- [erp-mobile-get-team-member-by-leader-hot-product-listing.md](erp-mobile-get-team-member-by-leader-hot-product-listing.md)
- [erp-mobile-hot-product-with-shop.md](erp-mobile-hot-product-with-shop.md)
- [erp-mobile-befor-verifier.md](erp-mobile-befor-verifier.md)
- [erp-mobile-examine-infringing-info.md](erp-mobile-examine-infringing-info.md)
- [erp-mobile-find-infringing-info.md](erp-mobile-find-infringing-info.md)
- [erp-mobile-find-on-line-product.md](erp-mobile-find-on-line-product.md)
- [erp-mobile-get-platform-info-infringing.md](erp-mobile-get-platform-info-infringing.md)
- [erp-mobile-submit-infringing-info.md](erp-mobile-submit-infringing-info.md)
- [erp-mobile-find-order-details.md](erp-mobile-find-order-details.md)
- [erp-mobile-find-order-today.md](erp-mobile-find-order-today.md)
- [erp-mobile-find-order.md](erp-mobile-find-order.md)
- [erp-mobile-find-shop2.md](erp-mobile-find-shop2.md)
- [erp-mobile-find-shop.md](erp-mobile-find-shop.md)
- [erp-mobile-get-express-type-list.md](erp-mobile-get-express-type-list.md)
- [erp-mobile-find-develop-mission-extend-by-id.md](erp-mobile-find-develop-mission-extend-by-id.md)
- [erp-mobile-find-develop-mission-extend.md](erp-mobile-find-develop-mission-extend.md)
- [erp-mobile-find-information-by-phone.md](erp-mobile-find-information-by-phone.md)
- [erp-mobile-find-manufacture.md](erp-mobile-find-manufacture.md)
- [erp-order-get-bad-comment-task-detail.md](erp-order-get-bad-comment-task-detail.md)
- [erp-order-get-bad-comment-task-list.md](erp-order-get-bad-comment-task-list.md)
- [erp-order-get-clear-detail.md](erp-order-get-clear-detail.md)
- [erp-order-get-borrow-express.md](erp-order-get-borrow-express.md)
- [erp-order-get-clearance-reward-repoer.md](erp-order-get-clearance-reward-repoer.md)
- [erp-order-get-custom-sku-order-list.md](erp-order-get-custom-sku-order-list.md)
- [erp-order-get-developer-info-by-shop-manager.md](erp-order-get-developer-info-by-shop-manager.md)
- [erp-order-get-developer-info-by-shop.md](erp-order-get-developer-info-by-shop.md)
- [erp-order-get-develop-repoer.md](erp-order-get-develop-repoer.md)
- [erp-order-get-three-week-time.md](erp-order-get-three-week-time.md)
- [erp-order-find-all-manager-platform.md](erp-order-find-all-manager-platform.md)
- [erp-order-find-allshop-platform.md](erp-order-find-allshop-platform.md)
- [erp-order-find-smt-ad-campaign-performance-campaign.md](erp-order-find-smt-ad-campaign-performance-campaign.md)
- [erp-order-show-ebay-bill-detail.md](erp-order-show-ebay-bill-detail.md)
- [erp-order-show-ebay-bills.md](erp-order-show-ebay-bills.md)
- [erp-order-show-ebay-bill.md](erp-order-show-ebay-bill.md)
- [erp-order-show-ebay-fee-type.md](erp-order-show-ebay-fee-type.md)
- [erp-order-show-ebay-shops.md](erp-order-show-ebay-shops.md)
- [erp-order-get-ebay-case-task-list.md](erp-order-get-ebay-case-task-list.md)
- [erp-order-get-ebay-case-task-clear-detail.md](erp-order-get-ebay-case-task-clear-detail.md)
- [erp-order-get-manager-people-name.md](erp-order-get-manager-people-name.md)
- [erp-order-get-responsible-shop-saler.md](erp-order-get-responsible-shop-saler.md)
- [erp-order-get-responsible-shop.md](erp-order-get-responsible-shop.md)
- [erp-order-get-site-list-ebay-case-task.md](erp-order-get-site-list-ebay-case-task.md)
- [erp-order-ebay-shop-spk-order.md](erp-order-ebay-shop-spk-order.md)
- [erp-order-get-ebay-oper-shop.md](erp-order-get-ebay-oper-shop.md)
- [erp-order-borrow-order-log-fm.md](erp-order-borrow-order-log-fm.md)
- [erp-order-borrow-order-log.md](erp-order-borrow-order-log.md)
- [erp-order-find-delay-order.md](erp-order-find-delay-order.md)
- [erp-order-find-factory-market-delay-order.md](erp-order-find-factory-market-delay-order.md)
- [erp-order-get-cache-express.md](erp-order-get-cache-express.md)
- [erp-order-vovafind-delay-order.md](erp-order-vovafind-delay-order.md)
- [erp-order-find-fbafee-import.md](erp-order-find-fbafee-import.md)
- [erp-order-find-shop-by-pt.md](erp-order-find-shop-by-pt.md)
- [erp-order-find-over-twenty-pro-week.md](erp-order-find-over-twenty-pro-week.md)
- [erp-order-get-details-by-erp-name.md](erp-order-get-details-by-erp-name.md)
- [erp-order-get-optimizer-details.md](erp-order-get-optimizer-details.md)
- [erp-order-get-hr.md](erp-order-get-hr.md)
- [erp-order-get-market-newcomer-transcript-detail.md](erp-order-get-market-newcomer-transcript-detail.md)
- [erp-order-get-market-newcomer-transcript.md](erp-order-get-market-newcomer-transcript.md)
- [erp-order-get-new-comer-attitude.md](erp-order-get-new-comer-attitude.md)
- [erp-order-get-new-comer-help-result.md](erp-order-get-new-comer-help-result.md)
- [erp-order-get-newcomer-list.md](erp-order-get-newcomer-list.md)
- [erp-order-get-new-comer-train-examin.md](erp-order-get-new-comer-train-examin.md)
- [erp-order-get-new-comer-winaward.md](erp-order-get-new-comer-winaward.md)
- [erp-order-get-product-newcomer-transcript.md](erp-order-get-product-newcomer-transcript.md)
- [erp-order-get-pro-newcomer-transcript-det.md](erp-order-get-pro-newcomer-transcript-det.md)
- [erp-order-get-result-target-info.md](erp-order-get-result-target-info.md)
- [erp-order-get-shop-select1.md](erp-order-get-shop-select1.md)
- [erp-order-get-shop-select2.md](erp-order-get-shop-select2.md)
- [erp-order-get-shop-select.md](erp-order-get-shop-select.md)
- [erp-order-get-stage-info.md](erp-order-get-stage-info.md)
- [erp-order-query-fail-order.md](erp-order-query-fail-order.md)
- [erp-order-query-fail-purchase.md](erp-order-query-fail-purchase.md)
- [erp-order-get-order-group.md](erp-order-get-order-group.md)
- [erp-order-search-order.md](erp-order-search-order.md)
- [erp-order-director-sku-by-hwc-order-sku.md](erp-order-director-sku-by-hwc-order-sku.md)
- [erp-order-find-expresstype.md](erp-order-find-expresstype.md)
- [erp-order-find-order-type.md](erp-order-find-order-type.md)
- [erp-order-get-buyer.md](erp-order-get-buyer.md)
- [erp-order-get-dbsell-info.md](erp-order-get-dbsell-info.md)
- [erp-order-get-feed-back.md](erp-order-get-feed-back.md)
- [erp-order-get-historylist.md](erp-order-get-historylist.md)
- [erp-order-get-hwcorder-delivery-info.md](erp-order-get-hwcorder-delivery-info.md)
- [erp-order-get-hwcorder-shipment-info.md](erp-order-get-hwcorder-shipment-info.md)
- [erp-order-get-last-order-log.md](erp-order-get-last-order-log.md)
- [erp-order-get-leave-message.md](erp-order-get-leave-message.md)
- [erp-order-get-messagelist.md](erp-order-get-messagelist.md)
- [erp-order-get-oper3.md](erp-order-get-oper3.md)
- [erp-order-get-order-logistics.md](erp-order-get-order-logistics.md)
- [erp-order-get-order-log.md](erp-order-get-order-log.md)
- [erp-order-get-order-refund.md](erp-order-get-order-refund.md)
- [erp-order-getpackaging.md](erp-order-getpackaging.md)
- [erp-order-get-person-info.md](erp-order-get-person-info.md)
- [erp-order-get-sku-purchase-info.md](erp-order-get-sku-purchase-info.md)
- [erp-order-has-order-authority.md](erp-order-has-order-authority.md)
- [erp-order-has-order-edit-authority.md](erp-order-has-order-edit-authority.md)
- [erp-order-order-details.md](erp-order-order-details.md)
- [erp-order-order-list.md](erp-order-order-list.md)
- [erp-order-ordersource.md](erp-order-ordersource.md)
- [erp-order-order-status.md](erp-order-order-status.md)
- [erp-order-order-type-list.md](erp-order-order-type-list.md)
- [erp-order-platform-list.md](erp-order-platform-list.md)
- [erp-order-query-conditions.md](erp-order-query-conditions.md)
- [erp-order-shop-fba-list.md](erp-order-shop-fba-list.md)
- [erp-order-shop-info.md](erp-order-shop-info.md)
- [erp-order-sku-warehouse-list.md](erp-order-sku-warehouse-list.md)
- [erp-order-find-deliver-chinese-rose-shop.md](erp-order-find-deliver-chinese-rose-shop.md)
- [erp-order-find-deliver-chinese-rose.md](erp-order-find-deliver-chinese-rose.md)
- [erp-order-find-order-chinese-rose-shop.md](erp-order-find-order-chinese-rose-shop.md)
- [erp-order-find-order-chinese-rose.md](erp-order-find-order-chinese-rose.md)
- [erp-order-get-category-name.md](erp-order-get-category-name.md)
- [erp-order-get-develop-manager-pk-match.md](erp-order-get-develop-manager-pk-match.md)
- [erp-order-get-develop-pk-match.md](erp-order-get-develop-pk-match.md)
- [erp-order-get-director-sales-pkmatch.md](erp-order-get-director-sales-pkmatch.md)
- [erp-order-get-manager-sales-pk-match.md](erp-order-get-manager-sales-pk-match.md)
- [erp-order-get-productdepartment-pkmatch.md](erp-order-get-productdepartment-pkmatch.md)
- [erp-order-get-shopowner-sales-pk-match.md](erp-order-get-shopowner-sales-pk-match.md)
- [erp-order-find-month-platform-performance.md](erp-order-find-month-platform-performance.md)
- [erp-order-find-platform-performance.md](erp-order-find-platform-performance.md)
- [erp-order-find-week-platform-performance.md](erp-order-find-week-platform-performance.md)
- [erp-order-export-low-profit-order.md](erp-order-export-low-profit-order.md)
- [erp-order-export-send-failed-order.md](erp-order-export-send-failed-order.md)
- [erp-order-find-auto-create-order-item.md](erp-order-find-auto-create-order-item.md)
- [erp-order-find-auto-create-order.md](erp-order-find-auto-create-order.md)
- [erp-order-find-bucha-order-order-item.md](erp-order-find-bucha-order-order-item.md)
- [erp-order-find-bucha-order.md](erp-order-find-bucha-order.md)
- [erp-order-find-db-expresstype.md](erp-order-find-db-expresstype.md)
- [erp-order-find-defict-ban-order-item.md](erp-order-find-defict-ban-order-item.md)
- [erp-order-find-defict-ban-order.md](erp-order-find-defict-ban-order.md)
- [erp-order-find-distribution-order-item.md](erp-order-find-distribution-order-item.md)
- [erp-order-find-distribution-order.md](erp-order-find-distribution-order.md)
- [erp-order-find-expire-order-item.md](erp-order-find-expire-order-item.md)
- [erp-order-find-expire-order.md](erp-order-find-expire-order.md)
- [erp-order-find-infriging-order-item.md](erp-order-find-infriging-order-item.md)
- [erp-order-find-infriging-order.md](erp-order-find-infriging-order.md)
- [erp-order-find-logistics-by-order-id.md](erp-order-find-logistics-by-order-id.md)
- [erp-order-find-low-profit-order.md](erp-order-find-low-profit-order.md)
- [erp-order-find-no-inventory-order-forkf.md](erp-order-find-no-inventory-order-forkf.md)
- [erp-order-find-no-inventory-order-new.md](erp-order-find-no-inventory-order-new.md)
- [erp-order-find-other-ban-order-item.md](erp-order-find-other-ban-order-item.md)
- [erp-order-find-other-ban-order.md](erp-order-find-other-ban-order.md)
- [erp-order-find-other-infringement.md](erp-order-find-other-infringement.md)
- [erp-order-find-refund-order-item.md](erp-order-find-refund-order-item.md)
- [erp-order-find-refund-order.md](erp-order-find-refund-order.md)
- [erp-order-find-send-failed-order-item.md](erp-order-find-send-failed-order-item.md)
- [erp-order-find-send-failed-order.md](erp-order-find-send-failed-order.md)
- [erp-order-find-shortage-order-by-principal.md](erp-order-find-shortage-order-by-principal.md)
- [erp-order-find-shortage-order-item.md](erp-order-find-shortage-order-item.md)
- [erp-order-find-shortage-order.md](erp-order-find-shortage-order.md)
- [erp-order-find-smt-ban-tuo-refund-order-item.md](erp-order-find-smt-ban-tuo-refund-order-item.md)
- [erp-order-find-track-exception-order.md](erp-order-find-track-exception-order.md)
- [erp-order-show-button.md](erp-order-show-button.md)
- [erp-order-export-insite-free.md](erp-order-export-insite-free.md)
- [erp-order-find-difference2.md](erp-order-find-difference2.md)
- [erp-order-find-difference-fine.md](erp-order-find-difference-fine.md)
- [erp-order-find-difference-for-ebay.md](erp-order-find-difference-for-ebay.md)
- [erp-order-find-difference-for-smt.md](erp-order-find-difference-for-smt.md)
- [erp-order-find-difference-lazada-publish-fee.md](erp-order-find-difference-lazada-publish-fee.md)
- [erp-order-find-difference.md](erp-order-find-difference.md)
- [erp-order-find-month-sale-report.md](erp-order-find-month-sale-report.md)
- [erp-order-find-week-sale-report.md](erp-order-find-week-sale-report.md)
- [erp-order-get-add-shippingfee-by-one-day.md](erp-order-get-add-shippingfee-by-one-day.md)
- [erp-order-get-big-chief2.md](erp-order-get-big-chief2.md)
- [erp-order-get-big-chief3.md](erp-order-get-big-chief3.md)
- [erp-order-get-company-info.md](erp-order-get-company-info.md)
- [erp-order-get-deposit.md](erp-order-get-deposit.md)
- [erp-order-get-emp-sale-rep-site.md](erp-order-get-emp-sale-rep-site.md)
- [erp-order-get-estimated-freight-detail.md](erp-order-get-estimated-freight-detail.md)
- [erp-order-get-finefee-by-date.md](erp-order-get-finefee-by-date.md)
- [erp-order-get-ke-dan-price-info.md](erp-order-get-ke-dan-price-info.md)
- [erp-order-get-leader-shop3.md](erp-order-get-leader-shop3.md)
- [erp-order-get-leader-shop4-new.md](erp-order-get-leader-shop4-new.md)
- [erp-order-get-leader-shop4.md](erp-order-get-leader-shop4.md)
- [erp-order-get-leader-shop-new5.md](erp-order-get-leader-shop-new5.md)
- [erp-order-get-prohibition-list.md](erp-order-get-prohibition-list.md)
- [erp-order-get-runturn-pkgby-date.md](erp-order-get-runturn-pkgby-date.md)
- [erp-order-get-sale-rep-site.md](erp-order-get-sale-rep-site.md)
- [erp-order-get-team-member-by-leader-new.md](erp-order-get-team-member-by-leader-new.md)
- [erp-order-get-team-member-by-leader.md](erp-order-get-team-member-by-leader.md)
- [erp-order-no-sale-platform.md](erp-order-no-sale-platform.md)
- [erp-order-show-amz-bill-detail.md](erp-order-show-amz-bill-detail.md)
- [erp-order-show-one-day-ebay-bill-detail.md](erp-order-show-one-day-ebay-bill-detail.md)
- [erp-order-get-amount-target-list.md](erp-order-get-amount-target-list.md)
- [erp-order-get-profit-target-list.md](erp-order-get-profit-target-list.md)
- [erp-order-get-all-publish-number.md](erp-order-get-all-publish-number.md)
- [erp-order-get-manager-shop.md](erp-order-get-manager-shop.md)
- [erp-order-get-product-target-first.md](erp-order-get-product-target-first.md)
- [erp-order-get-product-target.md](erp-order-get-product-target.md)
- [erp-order-get-sales-target-first.md](erp-order-get-sales-target-first.md)
- [erp-order-get-sales-target-shop.md](erp-order-get-sales-target-shop.md)
- [erp-order-get-sales-target.md](erp-order-get-sales-target.md)
- [erp-order-get-sub-manager-number.md](erp-order-get-sub-manager-number.md)
- [erp-order-get-week-month-product-sales-volume.md](erp-order-get-week-month-product-sales-volume.md)
- [erp-order-get-week-month-sales-volume.md](erp-order-get-week-month-sales-volume.md)
- [erp-order-find-product-details.md](erp-order-find-product-details.md)
- [erp-order-first-list.md](erp-order-first-list.md)
- [erp-order-get-account-campaign-stat.md](erp-order-get-account-campaign-stat.md)
- [erp-order-second-list.md](erp-order-second-list.md)
- [erp-order-get-leader-shop2-shop-achievements.md](erp-order-get-leader-shop2-shop-achievements.md)
- [erp-order-get-leader-shop.md](erp-order-get-leader-shop.md)
- [erp-order-get-shop-site.md](erp-order-get-shop-site.md)
- [erp-order-shop-achievements-list.md](erp-order-shop-achievements-list.md)
- [erp-order-shopname.md](erp-order-shopname.md)
- [erp-order-find-sta-publish-big-chief.md](erp-order-find-sta-publish-big-chief.md)
- [erp-order-find-sta-publish-emp.md](erp-order-find-sta-publish-emp.md)
- [erp-order-find-sta-publish-shop.md](erp-order-find-sta-publish-shop.md)
- [erp-order-find-sta-publish-site.md](erp-order-find-sta-publish-site.md)
- [erp-order-leader-drop-down.md](erp-order-leader-drop-down.md)
- [erp-order-little-manager-drop-down.md](erp-order-little-manager-drop-down.md)
- [erp-order-manager-drop-down.md](erp-order-manager-drop-down.md)
- [erp-order-shop-drop-down.md](erp-order-shop-drop-down.md)
- [erp-order-shop-manager-drop-down.md](erp-order-shop-manager-drop-down.md)
- [erp-order-team-number-drop-down1.md](erp-order-team-number-drop-down1.md)
- [erp-order-team-number-drop-down4.md](erp-order-team-number-drop-down4.md)
- [erp-order-team-number-drop-down.md](erp-order-team-number-drop-down.md)
- [erp-order-find-logistics-country.md](erp-order-find-logistics-country.md)
- [erp-order-find-logistics-express-name.md](erp-order-find-logistics-express-name.md)
- [erp-order-find-logistics-express-type.md](erp-order-find-logistics-express-type.md)
- [erp-order-find-logistics-follow-log.md](erp-order-find-logistics-follow-log.md)
- [erp-order-find-logistics-providers.md](erp-order-find-logistics-providers.md)
- [erp-order-find-track-country.md](erp-order-find-track-country.md)
- [erp-order-find-track-express-type.md](erp-order-find-track-express-type.md)
- [erp-order-show-wish-fine-bills.md](erp-order-show-wish-fine-bills.md)
- [erp-order-show-wish-fine-detail.md](erp-order-show-wish-fine-detail.md)
- [erp-order-find-pbfeeof-spu.md](erp-order-find-pbfeeof-spu.md)
- [erp-order-find-pbreportof-shop.md](erp-order-find-pbreportof-shop.md)
- [erp-order-find-wish-pbfee-by-spu.md](erp-order-find-wish-pbfee-by-spu.md)
- [erp-order-find-wish-pbof-itemid-every-next-or-last.md](erp-order-find-wish-pbof-itemid-every-next-or-last.md)
- [erp-order-find-wish-pbof-itemid-every-table-next-or-last.md](erp-order-find-wish-pbof-itemid-every-table-next-or-last.md)
- [erp-order-find-wish-pbof-itemid-every-table.md](erp-order-find-wish-pbof-itemid-every-table.md)
- [erp-order-find-wish-pbof-itemid-every.md](erp-order-find-wish-pbof-itemid-every.md)
- [erp-order-find-wish-pbof-itemid.md](erp-order-find-wish-pbof-itemid.md)
- [erp-order-find-wish-pbof-manager.md](erp-order-find-wish-pbof-manager.md)
- [erp-order-find-wish-pbof-plan.md](erp-order-find-wish-pbof-plan.md)
- [erp-order-get-campaign-online.md](erp-order-get-campaign-online.md)
- [erp-order-query-wish-pbby-manager.md](erp-order-query-wish-pbby-manager.md)
- [erp-order-get-profit-variance.md](erp-order-get-profit-variance.md)
- [crm-web-service-check-cancel-eligibility.md](crm-web-service-check-cancel-eligibility.md)
- [erp-order-export-chinese-roses.md](erp-order-export-chinese-roses.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
