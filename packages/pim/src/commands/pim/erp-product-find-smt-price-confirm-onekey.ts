// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindSmtPriceConfirmOnekey extends MBSCommand {
  static description = '速卖通一键提价-调价结果分页查询：速卖通(SMT)一键提价模块「调价完毕」页签的分页列表查询：按页签(columnHead)、提交人、状态、店铺、提交时间区间、商品ID(itemid)/运费模板ID(freightid)等条件分页查询调价任务结果，返回SPU行及其下挂的SKU调价明细。'

  static flags = {
    pageSize: Flags.string({ description: '每页条数（固定 100，来源 baseData.pageSize）', required: true }),
    columnHead: Flags.string({ description: '列头/页签标识（取自 sessionStorage(\'tab\')，本页固定「调价完毕」）', required: true }),
    submitBy: Flags.string({ description: '提交人（来源输入框 #submitBy）' }),
    status: Flags.string({ description: '调价状态（来源下拉 #status；行内 1=重置价格成功、2=重置价格失败）' }),
    shopname: Flags.string({ description: '店铺名称（来源店铺下拉 #selshops）' }),
    starttime: Flags.string({ description: '提交起始时间（来源 #starttime，自动拼接 \' 00:00:00\'；有值才传）' }),
    endtime: Flags.string({ description: '提交结束时间（来源 #endtime，自动拼接 \' 23:59:59\'；有值才传）' }),
    itemid: Flags.string({ description: '商品ID（速卖通 itemid，来源 #ids；当类型选择 #seleID=1 时传）' }),
    freightid: Flags.string({ description: '运费模板ID（来源 #ids；当类型选择 #seleID=2 时传）' }),
    currentPage: Flags.string({ description: '当前页码（仅分页回调 findTaskReport2 中传入，来源 api.getCurrent()；首查不传，后端默认第1页）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindSmtPriceConfirmOnekey)

    const data = await this.client.post('/erpProduct/erpProduct/smtProductController/findSmtPriceConfirmOnekey', { "pageSize": flags.pageSize, "columnHead": flags.columnHead, "submitBy": flags.submitBy, "status": flags.status, "shopname": flags.shopname, "starttime": flags.starttime, "endtime": flags.endtime, "itemid": flags.itemid, "freightid": flags.freightid, "currentPage": flags.currentPage })
    this.output(data)
  }
}
