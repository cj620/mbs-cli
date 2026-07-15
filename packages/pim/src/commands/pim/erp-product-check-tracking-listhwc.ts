// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductCheckTrackingListhwc extends MBSCommand {
  static description = '海外仓跟踪单校验(新增前出库明细校验)：新增真实海外仓跟踪单弹窗点击校验时调用，按货件编号(groupId)与海外仓核验本次出库明细，返回每条FNSKU/马帮商品的出库量、重量、头程运费及异常信息；校验通过的obj被前端缓存供保存接口saveTrackingListHwc使用。'

  static flags = {
    groupId: Flags.string({ description: '货件编号(如:15JDVJ1VX)，校验主键。来源输入框 #groupId', required: true }),
    headFreight: Flags.string({ description: '头程运费(RMB)。来源输入框 #headFreight，原样字符串提交' }),
    weight: Flags.string({ description: '包裹称重。来源输入框 #weight(单位kg)，前端 Number(值)*1000 换算为克(g)后提交；为空时提交空字符串' }),
    shopId: Flags.string({ description: '海外仓ID。来源下拉 #shopList(选项value="shopId,shopName")取逗号第1段；未选传空字符串', required: true }),
    shopName: Flags.string({ description: '海外仓名称。来源下拉 #shopList 选项value逗号第2段；未选传空字符串' }),
    expressTime: Flags.string({ description: '实际发货时间(yyyy-MM-dd)。来源日期控件 #expressTime' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductCheckTrackingListhwc)

    const data = await this.client.post('/erpProduct/erpProduct/hwcProduct/checkTrackingListhwc', { "groupId": flags.groupId, "headFreight": flags.headFreight, "weight": flags.weight, "shopId": flags.shopId, "shopName": flags.shopName, "expressTime": flags.expressTime })
    this.output(data)
  }
}
