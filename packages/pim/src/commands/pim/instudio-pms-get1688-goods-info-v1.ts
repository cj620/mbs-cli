// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGet1688GoodsInfoV1 extends MBSCommand {
  static description = '在公共类中放入一个字符串属性用来存储每一调用需要的accesstoken：在公共类中放入一个字符串属性用来存储每一调用需要的accesstoken'

  static flags = {
    missionId: Flags.string({ description: 'MissionID（字段名推断,语义待核实）' }),
    goodsUrl: Flags.string({ description: '货品URL（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGet1688GoodsInfoV1)

    const data = await this.client.post('/yypms/pms/developerMission/get1688GoodsInfoV1', { "missionId": flags.missionId, "goodsUrl": flags.goodsUrl })
    this.output(data)
  }
}
