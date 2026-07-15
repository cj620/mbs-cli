// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListEzBuyPublish extends MBSCommand {
  static description = 'Ezbuy刊登列表查询：Ezbuy刊登页列表分页查询。按店铺、刊登人、刊登状态、刊登时间区间筛选，返回刊登记录列表（含 SPU、标题、分类、店铺、刊登人、状态、生成/刊登时间及子 SKU 明细）。同一接口被「刊登中」(search) 与「刊登完毕」(search2) 两个 Tab 复用。'

  static flags = {
    shopName: Flags.string({ description: '店铺名（来源控件 #shopName 下拉，值为店铺名称字符串；空字符串表示全部店铺）' }),
    employeeId: Flags.string({ description: '刊登人ID（来源控件 #employeeList 下拉，值为 employee_id；空字符串表示全部刊登人）' }),
    status: Flags.string({ description: '刊登状态。刊登中Tab 固定传 \'刊登中\'；刊登完毕Tab 取自 #status 下拉，枚举：刊登完毕(默认/全部)、刊登成功、刊登失败' }),
    publishTimeStart: Flags.string({ description: '刊登开始时间（来源控件 #time1，date 格式 yyyy-MM-dd；仅刊登完毕 search2 传递）' }),
    publishTimeEnd: Flags.string({ description: '刊登结束时间（来源控件 #time2，date 格式 yyyy-MM-dd；仅刊登完毕 search2 传递）' }),
    currentPage: Flags.string({ description: '当前页码。首次查询固定为 1，分页回调取 api.getCurrent()（每页 200 条）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListEzBuyPublish)

    const data = await this.client.post('/erpProduct/erpProduct/ezBuyProductPublish/listEzBuyPublish', { "shopName": flags.shopName, "employeeId": flags.employeeId, "status": flags.status, "publishTimeStart": flags.publishTimeStart, "publishTimeEnd": flags.publishTimeEnd, "currentPage": flags.currentPage })
    this.output(data)
  }
}
