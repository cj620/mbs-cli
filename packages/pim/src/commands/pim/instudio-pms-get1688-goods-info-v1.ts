// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
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
