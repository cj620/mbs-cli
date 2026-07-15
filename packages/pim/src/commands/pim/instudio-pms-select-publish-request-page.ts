// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsSelectPublishRequestPage extends MBSCommand {
  static description = '美客多单品刊登列表查询：美客多单品刊登列表查询'

  static flags = {
    page: Flags.integer({ description: '页码（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    spuList: Flags.string({ description: 'spu (comma-separated)' }),
    status: Flags.integer({ description: '刊登状态' }),
    createUser: Flags.string({ description: '创建人' }),
    groupCode: Flags.string({ description: '店铺分组编码' }),
    siteCode: Flags.string({ description: '站点' }),
    groupCodeList: Flags.string({ description: '店铺 (comma-separated)' }),
    shopManagerList: Flags.string({ description: '店铺负责人 (comma-separated)' }),
    startDate: Flags.string({ description: '创建时间查询的开始时间' }),
    endDate: Flags.string({ description: '创建时间查询的结束时间' }),
    addOrCopyType: Flags.integer({ description: '0-新增，1-复制' }),
    clipTaskStatus: Flags.integer({ description: '视频上传任务状态：0-待上传，1-成功，2-失败，3-部分成功，4-取消。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsSelectPublishRequestPage)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/mercadolibre/selectPublishRequestPage', { "page": flags.page, "pageSize": flags.pageSize, "spuList": toArray(flags.spuList, 'string'), "status": flags.status, "createUser": flags.createUser, "groupCode": flags.groupCode, "siteCode": flags.siteCode, "groupCodeList": toArray(flags.groupCodeList, 'string'), "shopManagerList": toArray(flags.shopManagerList, 'string'), "startDate": flags.startDate, "endDate": flags.endDate, "addOrCopyType": flags.addOrCopyType, "clipTaskStatus": flags.clipTaskStatus })
    this.output(data)
  }
}
