// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopeeDisabledConfirm extends MBSCommand {
  static description = 'Shopee待删除商品确认列表查询：Shopee批量删除页面列表查询：按店铺、创建时间区间、在线编号、SPU、删除状态分页查询待删除/删除中/已删除的Shopee商品（listing）任务，返回总数与行记录列表（商品图、SKU/SPU、店铺/负责人、商品ID、在线编号、近30天销量、创建人/时间、删除状态、刊登/删除时间）。'

  static flags = {
    shopName: Flags.string({ description: '店铺（#shopName 多选下拉，多选逗号拼接，未选传空字符串）' }),
    beginTime: Flags.string({ description: '创建时间-起始（#beginTime，yyyy-MM-dd）' }),
    endTime: Flags.string({ description: '创建时间-结束（#endTimes，yyyy-MM-dd）' }),
    onlineNo: Flags.string({ description: '在线编号（模糊查询，#onlineNo，去首尾空格）' }),
    spu: Flags.string({ description: 'SPU编号（#onSpu，去首尾空格）' }),
    status: Flags.string({ description: '删除状态（#soldStatus）。空=全部;0=等待删除;1=删除中;2=删除成功;3=删除失败（自动删除场景固定0）' }),
    currentPage: Flags.string({ description: '当前页码（pageInfo.currentPage，初始1）', required: true }),
    pageSize: Flags.string({ description: '每页条数（pageInfo.pageSize，初始200，可选10/100/200/500）', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopeeDisabledConfirm)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductController/findShopeeDisabledConfirm', { "shopName": flags.shopName, "beginTime": flags.beginTime, "endTime": flags.endTime, "onlineNo": flags.onlineNo, "spu": flags.spu, "status": flags.status, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
