// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSkuPackageInfo extends MBSCommand {
  static description = 'SKU包装信息列表查询：查询SKU包装测量任务列表：按状态(全部/未完成/已完成)、SKU、提交人、开发组长、开发员、完成时间区间分页筛选，返回SKU原始/现/包装尺寸重量、开发员、仓库、提交/完成信息、图片及任务状态。'

  static flags = {
    status: Flags.string({ description: '任务状态。0=全部;1=未完成;2=已完成(默认2)' }),
    skus: Flags.string({ description: 'SKU(支持多个,英文逗号分割)' }),
    developers: Flags.string({ description: '开发员(姓名数组,多选);选了开发组长但未选开发员时自动填入该组长下全部开发员姓名 (comma-separated)' }),
    currentPage: Flags.string({ description: '当前页码(默认1)' }),
    pageSize: Flags.string({ description: '每页条数(可选50/100/150/200,默认50)' }),
    createOpers: Flags.string({ description: '提交人(姓名数组,多选) (comma-separated)' }),
    completeStartTime: Flags.string({ description: '完成时间-起始(YYYY-MM-DD),取自完成时间区间第一项' }),
    completeEndTime: Flags.string({ description: '完成时间-结束(YYYY-MM-DD),取自完成时间区间第二项' }),
    managers: Flags.string({ description: '开发组长(组长ID数组,多选) (comma-separated)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSkuPackageInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/skuPackage/getSkuPackageInfo', { "status": flags.status, "skus": flags.skus, "developers": toArray(flags.developers, 'string'), "currentPage": flags.currentPage, "pageSize": flags.pageSize, "createOpers": toArray(flags.createOpers, 'string'), "completeStartTime": flags.completeStartTime, "completeEndTime": flags.completeEndTime, "managers": toArray(flags.managers, 'string') })
    this.output(data)
  }
}
