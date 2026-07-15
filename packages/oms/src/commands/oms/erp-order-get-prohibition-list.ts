// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetProhibitionList extends MBSCommand {
  static description = '禁售清单查询：销售报表-禁售清单分页查询：按是否禁售、是否违规、平台、禁售政策(二级类目)、侵权产品等条件筛选，返回各平台禁限售政策行(一级/二级政策、触发产品、去重SPU数量、禁售状态、不违规备注及对应SPU图片列表)。'

  static flags = {
    platform: Flags.string({ description: '平台名称(按平台过滤，传 PLATFORMNAME 文本，初始值空串)' }),
    twoCategory: Flags.string({ description: '禁售政策(二级禁限售政策名称，初始值空串)' }),
    triggerProduct: Flags.string({ description: '侵权/触发产品名称(可手动创建输入，初始值空串)' }),
    isWeiGui: Flags.string({ description: '是否违规。1=违规;2=不违规(初始 null，clearable)' }),
    lockupStatus: Flags.string({ description: '是否禁售。1=禁售;2=不禁售(初始空串，clearable)' }),
    page: Flags.string({ description: '当前页码(默认1，分页切换时传入)', required: true }),
    pageSize: Flags.string({ description: '每页条数(固定 50)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetProhibitionList)

    const data = await this.client.post('/erpOrder/erpOrder/saleReport/getProhibitionList', { "platform": flags.platform, "twoCategory": flags.twoCategory, "triggerProduct": flags.triggerProduct, "isWeiGui": flags.isWeiGui, "lockupStatus": flags.lockupStatus, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
