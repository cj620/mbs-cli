// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetClearanceRewardRepoer extends MBSCommand {
  static description = '清仓任务榜(奖金报表)查询：清仓任务榜页面加载/展开/收起时调用，返回各清仓项目及其下属销售的清仓任务量、在线Listing量、当前清仓量、完成进度、剩余清仓量、销售额、成本与奖金等汇总数据。前端按项目分组渲染，saleList默认取前5条，展开时取全部。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetClearanceRewardRepoer)

    const data = await this.client.post('/erpOrder/erpOrder/clearanceReward/getClearanceRewardRepoer', {})
    this.output(data)
  }
}
