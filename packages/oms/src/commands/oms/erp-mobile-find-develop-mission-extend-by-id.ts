// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindDevelopMissionExtendById extends MBSCommand {
  static description = '货源报价详情查询(按ID)：移动端「货源报价录入」页进入时，根据货源记录ID与开发任务ID查询该货源的报价资料详情（联系人/手机/旺旺/质量/供货类型/供应商地址/报价规格/店铺链接/备注/商品图片），用于回显表单及图片列表。'

  static flags = {
    id: Flags.string({ description: '货源/报价记录ID（来源：URL参数 id，GetQueryString(\'id\')）', required: true }),
    missionid: Flags.string({ description: '开发任务ID（来源：URL参数 missionid，GetQueryString(\'missionid\')；请求字段名为 missionid）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindDevelopMissionExtendById)

    const data = await this.client.post('/erpMobile/erpMobile/shoeController/findDevelopMissionExtendById', { "id": flags.id, "missionid": flags.missionid })
    this.output(data)
  }
}
