<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# pms - 技术中台服务域（包括open-ai、oss、翻译等公共服务）

通过 `mbs pms` 命令查询技术中台服务域（包括open-ai、oss、翻译等公共服务）数据。

## 数据来源

- Service: `-`

## 适用场景

技术中台

## 意图匹配

关键词：open-ai / oss / translation

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 字体特效(边框)样式列表查询：拉取字体特效/边框样式集合(Strapi collection)。前端右侧属性面板展示样式缩略图，点击后把样式配置(json:填充/描边/阴影等)应用到画布文本对象。请求为Strapi标准查询参数(populate展开缩略图、pagination分页)，响应为Strapi列表结构，经前端拦截器拍平后使用。 | `mbs pms aieditor-fontborders` | - |
| 会员码列表查询：查询当前登录用户已绑定/生效的 VIP 会员码列表，用于个人中心页展示 VIP 会员信息（会员类型、生效起止时间）。无请求参数，依赖请求头 Authorization: Bearer <token> 标识用户身份；返回结果落到页面 vipList 并渲染为会员信息描述列表。 | `mbs pms app-apihost-query-all` | - |
| 上次登录信息查询：客服工作台首页加载时查询当前登录用户的“上次登录信息”，用于在页面顶部弹出安全提醒条（不同 loginType 对应 成功/警告/危险 三种样式），5 秒后自动收起。 | `mbs pms erpaccount-last-logininfo` | - |
| 销售拜访卡-获取提醒消息：客服/销售工作台首页加载时拉取当前登录用户的提醒消息，返回提醒类型(color)与提醒文案(msg)，前端据 color 值以橙色警告条或绿色奖杯成功条的样式渲染到页面顶部 #getRemindMsg 区域，展示 5 秒后自动上滑隐藏。 | `mbs pms erp-order-get-remind-msg` | - |
| 东南亚战况播报(DeskRank)查询：客服工作台首页(customerservice.html)加载完成后自动调用，拉取东南亚X月战况播报排行榜数据：按销售平台列出店长、入围店铺毛利率、发货毛利率、总积分/奖金等，渲染到#DeskRank表格；同时用content更新更新时间。GET请求，无查询参数。 | `mbs pms erp-order-get-track-by-track-dny` | - |
| 销售员KPI(等级)查询：客服/销售工作台首页看板：按员工ID查询该销售员的销售额排名、销售额、毛利排名、毛利率、共事天数等 KPI 指标，用于渲染销售名片的排名与当前/上期业绩。 | `mbs pms yyecm-getsaleskpi` | `employeeId`, `callback` |
| 按SPU查询SKU信息(拍照延迟子表)：在「拍照延迟30天」任务列表中，点击某一行(SPU)的展开图标时，按该 SPU 查询其下所有 SKU 的明细(图片、SKU、SKU名称、仓位、库存数量)，渲染为子表格；库存≤0 时前端追加“(缺货)”标识。 | `mbs pms erp-task-get-sku-info-by-spu` | `spu` |
| 今日必做清零按钮显隐判断：客服工作台首页判断「保存今日清零结果」按钮是否显示：后端据当前登录人当日是否满足清零条件返回 obj=0/1，前端据此 show/hide 按钮。页面加载调用一次并每 30 秒轮询。 | `mbs pms erp-order-show-button` | - |
| 待处理侵权商品数量查询：工作台(customerservice)首页顶部统计卡片，按员工查询其名下「待处理侵权」商品数量。页面初始化及切换组员时各调用一次，返回数量填入 #findInfringProductNum，并用返回的员工ID拼接侵权明细页链接。 | `mbs pms erpsoldout-find-infring-product-num` | `userId` |
| IP异常登录报表查询：按时间区间分页查询员工登录 IP 异常信息，返回按员工聚合的异常记录（员工、登录IP、异常IP、异常登录详情列表、创建时间、备注）及分页汇总（总条数/总页数）。前端「IP异常报表」页面据此渲染，每页固定20条。 | `mbs pms erp-log-find-log-exception-information` | `currentPage` |
| 开发今日必做-查看今日清零结果：开发工作台「今日必做」清零弹窗：点击清零/保存按钮时调用，查询当前开发员各类必做任务（重量异常、产品投诉、复审被拒、售后问题、采购异常、拍照、推荐品等）的应完成数量，渲染到 mustDoTemplate 弹窗表格；实际完成数由前端从页面各 span 补写后随 saveTodayResult 保存。 | `mbs pms erp-task-check-today-result` | - |
| 拍照延迟任务列表查询：首页/看板"拍照延迟"面板分页查询：按完成状态与当前页码，返回拍照/作图任务列表（含SPU、任务类型、拍照耗时、拍摄备注、采购/物流、库存状态、创建人/时间、任务起止时间、拍照状态等）及分页信息(总数、总页数)，前端以art-template渲染成列表并分页。 | `mbs pms erp-task-find-photograph-mission` | `finishStatus`, `currentPage` |
| 开发必做清零明细查询(人事部/组员维度)：按时间区间与组员维度分页查询开发必做各类任务的应完成/未完成明细：涵盖重量异常、产品投诉、售后问题、采购异常、拍照、质检二套图、复审被拒、推荐品共8类任务的应完成与未完成量，以及手动清零时间。 | `mbs pms erp-task-get-clear-details2` | `startTime`, `endTime`, `page`, `pageSize` |
| 开发必做事项清零明细查询：查询当前登录人（非人事部/总经办视角）的开发必做事项每日清零明细，返回按日期排列的重量异常、产品投诉、售后问题、采购异常、拍照、质检二套图、复审被拒、推荐品等各类事项的应完成/未完成数量及手动清零时间。当 content 为大酋长时额外展示组员(开发员)列。本接口无请求体参数。 | `mbs pms erp-task-get-clear-details` | - |
| 拍照/作图延迟任务列表查询：首页看板「拍照(延迟)」标签页分页查询：固定按 checkStatus=2 拉取拍照延迟(type=1)与作图延迟(type=2)两类任务，返回任务列表(含SPU/采购单/物流跟踪/完成状态/库存/创建人/任务起止时间等)及总数、总页数，前端用 art-template delayTemplate 渲染表格。 | `mbs pms erp-task-get-delay-task` | `checkStatus`, `page`, `pageSize` |
| 获取商品英文描述(getEnglishDescRipiton)：质检详情弹窗打开时（老维度质检任务），按 SPU 拉取该商品的英文产品描述文本；前端取返回体的 desc 字段，若非空再调用 AI 翻译接口翻成中文，填入‘产品描述’文本域。SPU 作为 URL 路径变量传递，无请求体。 | `mbs pms erp-task-spu` | `spu` |
| 销量下降(爆款监控)列表查询：首页"开发必做"面板中"销量下降"页签的分页查询：按复核/处理状态(checkStatus)分页拉取销量持续下降的 SPU 任务列表，返回 SPU 编号、产品名、日销量、库存、毛利率、开发员、任务推送/截止日期、处理备注等字段，用于渲染 #salesDownTemplate 表格。 | `mbs pms erp-task-get-explosion` | `page`, `pageSize` |
| 违规产品列表查询：已完成商品看板"违规产品"页签的分页列表查询：按当前页码/每页条数、审核状态(待处理/已完成)及角色(经理·总监/普通)拉取违规(被举报)商品列表，返回商品信息、开发人/创建人、销量(7/30/90)、毛利率/退款率、举报类型/原因/图片、处理结果等字段，供 productsTemplate 渲染。 | `mbs pms erp-task-get-product-illegal` | `page`, `pageSize` |
| 刊登评价任务详情查询：根据任务ID查询「刊登评价」任务详情：返回任务处理状态/系统检查结果/截止时间/创建人等任务头信息，以及待评价的商品(listing)列表(图片、链接、商品ID、发布时间、评价状态等)，供任务细节页渲染倒计时、任务状态与商品评价入口。 | `mbs pms erp-task-find-listing-review-task` | `id` |
| 获取评价任务四/五天时间Tab信息：listing评价列表页(evaluationList.html)加载时调用，返回顶部若干个时间Tab（今天/昨天/前天/更早/精华等）的标题、任务数量与时间(区间)。前端据此渲染各Tab文案与徽标数字，并用第1个Tab的时间(TIMES)自动触发 reviewListingList 查询当日评价列表。 | `mbs pms erp-task-get-four-day-time` | - |
| 我也要点评-Listing评价详情查询(按操作人)：“我也要点评”场景(flag=2)下，按 listingId 查询当前操作人对该 listing 的评价详情，回显标题/图片/价格/属性/促销/维护/好评 7 项评分、综合评定、评价正文与需改进内容，并据 evaluateTime 判断是否显示“保存草稿”按钮。 | `mbs pms erp-task-get-review-listing-detail-by-oper` | `listingId` |
| listing评价任务列表查询：listing评价任务列表查询：按平台、时间段(今天/昨天/前天/更早/精华/自定义区间)、类型、分组人员等条件查询已创建的 listing 评价任务，返回 listing 卡片列表(主图/标题/链接/图标/点赞数/评论数)供页面各 tab 与排行榜下钻渲染。 | `mbs pms erp-task-review-listing-list` | - |
| 提交/保存 Listing 评价（writeReviewListingDetail）：提交或暂存一条 Listing 打造质量评价：七项 1~5 星评分(标题/图片/价格/属性/促销/维护频次(核心卖点)/好评维护(颜色/尺码))、综合评定下拉、listing亮点(content)与需要改进(listingMerit)两段富文本；按 draftType 区分保存草稿与提交评价，按场景传 sequenceid/listingId。 | `mbs pms erp-task-write-review-listing-detail` | `sequenceid` |
| SPU刊登报表明细查询：按 SPU编号/开发员/提交售卖时间/品牌或推荐人/出单量区间 分页查询 SPU 刊登报表明细，返回每个 SPU 在 eBay、wish、amazon、aliexpress、joom、mail.ru、zoodmall、shopee、其他 共9个平台的实际刊登量、放弃刊登量、出单量，以及平台标记完成量、放弃刊登量、出单量等汇总字段。 | `mbs pms erp-task-find-spu-publish-detail` | `currentPage` |
| 订阅类目候选查询：任务细节页“订阅类目”弹窗打开前，加载全部可订阅类目名称列表，用于填充 #findCategory 的 chosen 多选下拉框的候选项；返回值为类目名称字符串数组，每个元素同时作为 option 的 value 与显示文本。 | `mbs pms erp-task-find-category` | - |
| 人员(方向)下拉列表查询：任务统计报表页初始化时调用，用于拉取「人员/方向(direction)」下拉选择框的可选项列表。接口无请求参数，返回一个字符串数组，前端通过 contentTemplate2 模板 v-for 渲染为 #direction 下拉框的 option 选项。 | `mbs pms erp-task-find-direction` | - |
| 分派任务者统计查询：任务管理（我收到的任务）页面右侧「分派任务者」栏统计：按日期区间、处理结果、任务分类类型统计各分派人（任务创建人）名下的任务数量，返回分派人头像、账号及任务数，用于渲染分派人列表。 | `mbs pms erp-task-find-dispatch-clerk` | `type` |
| 我收到的任务列表查询：任务管理页「我收到的任务」分页查询：按日期区间、处理结果筛选，返回任务卡片列表（含分类、已读状态、标题、内容、创建人、处理结果、倒计时截止时间等），并驱动分页与倒计时渲染。 | `mbs pms erp-task-find-task` | `currentPage`, `type` |
| 任务留言列表查询：任务/投诉详情页底部「物流任务 留言」模块的留言列表查询：按任务标识(spu)拉取该任务下全部留言及其子留言(回复)，用于渲染留言时间线（头像、留言人、时间、内容、关联SKU、嵌套回复）。 | `mbs pms erp-task-get-leave-message` | `spu`, `isAll`, `isSystem` |
| 获取AI精修(翻译编辑器)链接：图库右键"AI精修"时调用，向蜂鸟桥接服务请求翻译/精修编辑器访问链接(url)，请求体为空，用户身份通过请求头 customer_id(来源 localStorage userid) 传递；前端拿到 data.url 后作为编辑器 iframe 的 src 打开。 | `mbs pms fengniao-bridge-service-translate-editor` | - |
| 获取单条录制详情：录制回放(recordplay)插件在页面加载时先调用 /RecordController/ListRecordings 取得录制列表，再对列表中每条录制按 recordingId 调用本接口获取该条录制的完整内容（录制名、录制ID、事件列表），随后经 convertFromJson 转换并渲染为录制树、绑定回放触发事件。 | `mbs pms record-controller-get-recording` | `recordingId` |
| 录制回放-列出全部录制：Axure 原型「录制/回放(recordplay)」插件在页面加载事件(load.page_notes)中调用，用于拉取当前已保存的全部操作录制列表；前端遍历返回的 recordingList，逐条以其 recordingId 再调用 /RecordController/GetRecording 拉取录制详情并渲染到录制树中。 | `mbs pms record-controller-list-recordings` | - |
| 通知公告分页查询：站内通知公告分页查询。页面加载后调用，拉取当前用户的通知列表（默认只查未读），前端取列表第一条 records[0].id，再调用 getById 拉取详情并弹窗提醒。 | `mbs pms center-message-service-query-notice-page` | `currentPage`, `pageSize`, `readStatus` |
| 公告通知-标记已读：用户在首页公告弹窗中点击「确认已读」按钮时调用，按公告ID将当前公告标记为已读；以 GET 方式携带 noticeId 查询参数请求，前端调用后仅关闭弹窗、不消费返回体。 | `mbs pms center-message-service-read` | `noticeId` |
| 获取eBay未回复邮件提醒：拉取当前登录客服/员工需要处理的 eBay 未回复邮件汇总，按邮件主题聚合返回每个主题下的未回复邮件数量，前端在仪表盘右侧以 ElNotification 弹窗提醒；data 为空对象时不弹窗。配套确认已读按钮调用 removeEbayMailNotice。 | `mbs pms crm-web-service-get-ebay-mail-notice` | - |
| Temu 供应商销售管理-仓库(备货)库存列表查询：Temu 商家后台备货/库存分页列表查询：按店铺(mallid 头)、是否缺货、调价近N天、最大剩余库存数分页拉取 SKC 明细，返回缺货/售罄/即将售罄等汇总统计及每个 SKC 的 SKU 数量明细、多仓库存信息、价格与备货建议。 | `mbs pms mms-venom-list-warehouse` | `isLack`, `priceAdjustRecentDays`, `maxRemanentInventoryNum`, `pageNo`, `pageSize` |

## 命令详情

- [aieditor-fontborders.md](aieditor-fontborders.md)
- [app-apihost-query-all.md](app-apihost-query-all.md)
- [erpaccount-last-logininfo.md](erpaccount-last-logininfo.md)
- [erp-order-get-remind-msg.md](erp-order-get-remind-msg.md)
- [erp-order-get-track-by-track-dny.md](erp-order-get-track-by-track-dny.md)
- [yyecm-getsaleskpi.md](yyecm-getsaleskpi.md)
- [erp-task-get-sku-info-by-spu.md](erp-task-get-sku-info-by-spu.md)
- [erp-order-show-button.md](erp-order-show-button.md)
- [erpsoldout-find-infring-product-num.md](erpsoldout-find-infring-product-num.md)
- [erp-log-find-log-exception-information.md](erp-log-find-log-exception-information.md)
- [erp-task-check-today-result.md](erp-task-check-today-result.md)
- [erp-task-find-photograph-mission.md](erp-task-find-photograph-mission.md)
- [erp-task-get-clear-details2.md](erp-task-get-clear-details2.md)
- [erp-task-get-clear-details.md](erp-task-get-clear-details.md)
- [erp-task-get-delay-task.md](erp-task-get-delay-task.md)
- [erp-task-spu.md](erp-task-spu.md)
- [erp-task-get-explosion.md](erp-task-get-explosion.md)
- [erp-task-get-product-illegal.md](erp-task-get-product-illegal.md)
- [erp-task-find-listing-review-task.md](erp-task-find-listing-review-task.md)
- [erp-task-get-four-day-time.md](erp-task-get-four-day-time.md)
- [erp-task-get-review-listing-detail-by-oper.md](erp-task-get-review-listing-detail-by-oper.md)
- [erp-task-review-listing-list.md](erp-task-review-listing-list.md)
- [erp-task-write-review-listing-detail.md](erp-task-write-review-listing-detail.md)
- [erp-task-find-spu-publish-detail.md](erp-task-find-spu-publish-detail.md)
- [erp-task-find-category.md](erp-task-find-category.md)
- [erp-task-find-direction.md](erp-task-find-direction.md)
- [erp-task-find-dispatch-clerk.md](erp-task-find-dispatch-clerk.md)
- [erp-task-find-task.md](erp-task-find-task.md)
- [erp-task-get-leave-message.md](erp-task-get-leave-message.md)
- [fengniao-bridge-service-translate-editor.md](fengniao-bridge-service-translate-editor.md)
- [record-controller-get-recording.md](record-controller-get-recording.md)
- [record-controller-list-recordings.md](record-controller-list-recordings.md)
- [center-message-service-query-notice-page.md](center-message-service-query-notice-page.md)
- [center-message-service-read.md](center-message-service-read.md)
- [crm-web-service-get-ebay-mail-notice.md](crm-web-service-get-ebay-mail-notice.md)
- [mms-venom-list-warehouse.md](mms-venom-list-warehouse.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
