// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureFindIssueInfo extends MBSCommand {
  static description = '纠纷详情查询：根据纠纷ID与买家登录ID查询单条纠纷(issue)的完整详情：纠纷原因/状态/倒计时、买家方案与卖家(我的)方案、卖方上传证据、关联订单信息与产品信息，供纠纷详情页渲染并支持后续“拒绝并新增方案”“上传证据”等操作。'

  static flags = {
    issueid: Flags.string({ description: '纠纷ID(待查询纠纷的唯一标识,来源URL查询参数issueid)', required: true }),
    buyerloginid: Flags.string({ description: '买家登录ID(发起纠纷的买家账号标识,来源URL查询参数buyerloginid)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureFindIssueInfo)

    const data = await this.client.post('/erpManufacture/erpManufacture/issueInfo/findIssueInfo', { "issueid": flags.issueid, "buyerloginid": flags.buyerloginid })
    this.output(data)
  }
}
