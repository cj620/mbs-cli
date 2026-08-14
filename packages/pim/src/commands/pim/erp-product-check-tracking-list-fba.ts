// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductCheckTrackingListFba extends MBSCommand {
  static description = 'FBA货件校验（checkTrackingListFba）：在出库进度/状态报表页的FBA出库校验弹窗中，输入FBA货件编号、头程运费、包裹称重(kg)、实际发货时间、店铺后点击校验，对货件做出库校验，返回该货件下每个FNSKU的马帮商品编号、本次出库量、重量、头程运费及异常信息列表(含捆绑商品标记)，结果用于 saveTrackingListFba 保存。'

  static flags = {
    groupId: Flags.string({ description: 'FBA货件编号(来源输入框#groupId,占位示例FBA15JDVJ1VX,校验后回显于#fbacode)', required: true }),
    headFreight: Flags.string({ description: '头程运费(RMB)(来源输入框#headFreight)' }),
    weight: Flags.string({ description: '包裹称重。前端输入单位为kg(#weight);有值时Number(值)*1000转为克(g)上送,为空时上送空串' }),
    shopId: Flags.string({ description: '店铺ID(来源隐藏域#shopid,由店铺勾选shopinptVal()写入data-id)' }),
    shopName: Flags.string({ description: '店铺名称(来源#shopList输入框,支持多店铺空格分隔)' }),
    expressTime: Flags.string({ description: '实际发货时间(日期,来源日期控件#expressTime,格式yyyy-MM-dd)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductCheckTrackingListFba)

    const data = await this.client.post('/erpProduct/erpProduct/fbaProduct/checkTrackingListFba', { "groupId": flags.groupId, "headFreight": flags.headFreight, "weight": flags.weight, "shopId": flags.shopId, "shopName": flags.shopName, "expressTime": flags.expressTime })
    this.output(data)
  }
}
