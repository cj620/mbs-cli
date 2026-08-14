// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsErpTaskGetDelayTask extends MBSCommand {
  static description = '拍照/作图延迟任务列表查询：首页看板「拍照(延迟)」标签页分页查询：固定按 checkStatus=2 拉取拍照延迟(type=1)与作图延迟(type=2)两类任务，返回任务列表(含SPU/采购单/物流跟踪/完成状态/库存/创建人/任务起止时间等)及总数、总页数，前端用 art-template delayTemplate 渲染表格。'

  static flags = {
    checkStatus: Flags.string({ description: '审核/查询状态，前端固定传 2（拍照延迟场景）', required: true }),
    page: Flags.string({ description: '当前页码，首次查询=1，翻页取 api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数，前端固定传 10', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsErpTaskGetDelayTask)

    const data = await this.client.post('/erpTask/erpTask/developMustDo/getDelayTask', { "checkStatus": flags.checkStatus, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
