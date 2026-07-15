// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductQuerymustRefreshChangeImageInfo extends MBSCommand {
  static description = '查询换图结果信息：在"今日必修改"列表中点击某SPU行，按 SPU 查询该商品在各店铺的"必修改/换图"处理结果，返回各店铺待修改项明细（店铺名、原因），前端以弹窗表格展示。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号。来源：列表选中行对象 objs.id；无选中行时传空字符串', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductQuerymustRefreshChangeImageInfo)

    const data = await this.client.post('/erpProduct/erpProduct/pushProduct/querymustRefreshChangeImageInfo', { "spu": flags.spu })
    this.output(data)
  }
}
