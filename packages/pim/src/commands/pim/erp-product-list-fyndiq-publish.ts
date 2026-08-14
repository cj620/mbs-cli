// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductListFyndiqPublish extends MBSCommand {
  static description = 'Fyndiq刊登列表查询：Fyndiq刊登管理页列表分页查询：按店铺、刊登人、刊登状态、刊登时间区间筛选，分页返回 SPU 行及其下挂 skuList 子表与退款信息。页面三个 Tab（等待刊登/刊登中/刊登完毕）及分页回调共用同一接口，仅入参不同。'

  static flags = {
    shopName: Flags.string({ description: '刊登店铺名（来源 #shopName 下拉，选项由 listFyndiqShop 填充；空串表示全部店铺）' }),
    employeeId: Flags.string({ description: '刊登人（来源 #employeeList 下拉的 value；当前页面该下拉已注释，多为空）' }),
    status: Flags.string({ description: '刊登状态（文本值）。等待刊登Tab固定传\'请刊登\'；刊登中Tab固定传\'刊登中\'；刊登完毕Tab取#status选择值：刊登完毕/刊登成功/部分成功/刊登失败' }),
    publishTimeStart: Flags.string({ description: '刊登开始时间（yyyy-MM-dd）。来源：刊登完毕Tab #time1 / 等待刊登Tab #time1-1；刊登中Tab不传' }),
    publishTimeEnd: Flags.string({ description: '刊登结束时间（yyyy-MM-dd）。来源：刊登完毕Tab #time2 / 等待刊登Tab #time2-2；刊登中Tab不传' }),
    currentPage: Flags.string({ description: '当前页码（从1开始，分页点击取 api.getCurrent()；每页固定200条）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductListFyndiqPublish)

    const data = await this.client.post('/erpProduct/erpProduct/fyndiqProductPublish/listFyndiqPublish', { "shopName": flags.shopName, "employeeId": flags.employeeId, "status": flags.status, "publishTimeStart": flags.publishTimeStart, "publishTimeEnd": flags.publishTimeEnd, "currentPage": flags.currentPage })
    this.output(data)
  }
}
