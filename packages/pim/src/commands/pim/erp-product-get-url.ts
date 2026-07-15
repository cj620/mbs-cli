// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetUrl extends MBSCommand {
  static description = '获取SPU立刻刊登/编辑跳转地址：库存看板（必刊登/推荐刊登列表）点击「立刻刊登」时调用，依据 SPU、必修改记录序号ID、平台ID 获取后端生成的刊登/编辑页面跳转URL；成功后前端 window.open 新窗口打开 obj 返回的地址。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号。来源：触发按钮 $(obj).data(\'spu\')（data-spu）', required: true }),
    sequenceid: Flags.string({ description: '必修改/刊登记录序号ID。来源：触发按钮 $(obj).data(\'sqid\')（data-sqid）', required: true }),
    ptid: Flags.string({ description: '平台ID（reserve 预留平台标识）。来源：触发按钮 $(obj).data(\'res\')（data-res）', required: true }),
    flag: Flags.string({ description: '业务标志位，该调用处固定传 2（立刻刊登场景）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetUrl)

    const data = await this.client.post('/erpProduct/erpProduct/stockProduct/getUrl', {}, { params: { "spu": flags.spu, "sequenceid": flags.sequenceid, "ptid": flags.ptid, "flag": flags.flag } })
    this.output(data)
  }
}
