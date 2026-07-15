// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopeeUnlistConfirm extends MBSCommand {
  static description = 'Shopee批量下架任务列表查询：Shopee批量下架页面：按店铺、创建时间区间、在线编号、SPU、下架状态分页查询下架任务列表，返回任务行及总数、总页数。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称（多选店铺，多值逗号拼接；未选择传空字符串）' }),
    beginTime: Flags.string({ description: '创建时间-起始（任务生成时间）' }),
    endTime: Flags.string({ description: '创建时间-结束' }),
    onlineNo: Flags.string({ description: '在线编号（模糊查询，去除首尾空格）' }),
    spu: Flags.string({ description: 'SPU编号（模糊查询，去除首尾空格）' }),
    status: Flags.string({ description: '下架状态。空=全部;0=等待下架;1=下架中;2=下架成功;3=下架失败' }),
    currentPage: Flags.string({ description: '当前页码（仅分页回调翻页时传，首次查询不传）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopeeUnlistConfirm)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeUnlistController/findShopeeUnlistConfirm', { "shopName": flags.shopName, "beginTime": flags.beginTime, "endTime": flags.endTime, "onlineNo": flags.onlineNo, "spu": flags.spu, "status": flags.status, "currentPage": flags.currentPage })
    this.output(data)
  }
}
