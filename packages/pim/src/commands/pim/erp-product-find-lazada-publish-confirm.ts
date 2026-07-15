// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindLazadaPublishConfirm extends MBSCommand {
  static description = 'Lazada批量改标题-修改确认列表查询：Lazada批量修改标题页面查询修改任务列表：支持按站点、刊登店铺、修改状态、修改人、SPU/SKU模糊关键词筛选，分页返回修改任务行（原标题/新标题/店铺/站点/SKU/itemID/状态/创建与修改人时间）。descr 区分修改中（空）与修改完毕（修改完成）两个 Tab。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码。首次查询固定为1；分页回调中取 api.getCurrent()', required: true }),
    descr: Flags.string({ description: '查询类型标识。\'\'=修改中Tab(search)；\'修改完成\'=修改完毕Tab(search2)' }),
    shopname: Flags.string({ description: '刊登店铺。下拉单选值(#shopName，选项由 findManageShop 填充)' }),
    site: Flags.string({ description: '站点。枚举：PH/SG/MY/TH/ID/VN(#employeeList)' }),
    status: Flags.string({ description: '修改状态。0=等待修改;1=修改中;2=修改成功;3=修改失败(#status)' }),
    updateby: Flags.string({ description: '修改人。下拉单选值(#modifier，选项由 findManageEmployeeNames 填充)' }),
    fuzzySearch: Flags.string({ description: 'SPU/SKU 模糊搜索关键词(修改中=#spus1，修改完毕=#spus2)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindLazadaPublishConfirm)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaExportController/findLazadaPublishConfirm', { "currentPage": flags.currentPage, "descr": flags.descr, "shopname": flags.shopname, "site": flags.site, "status": flags.status, "updateby": flags.updateby, "fuzzySearch": flags.fuzzySearch })
    this.output(data)
  }
}
