// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutOnLineProductSoldOut extends MBSCommand {
  static description = '平台在线商品(下架任务)列表查询：平台商品下架管理页列表查询：按平台、店铺、SKU(多值)、操作状态、下架原因等条件分页查询在线商品/下架任务记录，返回分页列表(含店铺、标题、SKU、库存、销量、操作状态、执行信息等)。'

  static flags = {
    platformId: Flags.string({ description: '平台ID(来源平台下拉框 #platformName，由 findPlatform 接口填充 value=platformId)' }),
    id: Flags.string({ description: '记录ID(来源URL查询参数 id，GetQueryString(\'id\'))' }),
    skuList: Flags.string({ description: 'SKU列表(来源输入框 #duoSKU，代码以 , 分割为数组；占位提示为空格分割,待人工确认实际分隔符) (comma-separated)' }),
    employeeId: Flags.string({ description: '员工ID(来源URL查询参数 employeeId，GetQueryString(\'employeeId\'))' }),
    shopId: Flags.string({ description: '店铺ID(来源店铺下拉框 #shopId，由 findShop 接口填充 value=shopId)' }),
    soldOutReason: Flags.string({ description: '下架原因(来源下拉框 #Reason，由 findSoldOutReason 接口填充)' }),
    soldOutStatus: Flags.string({ description: '操作状态(来源下拉框 #soldOutStatus)。0=等待下架;1=正在下架;2=下架失败;3=下架成功;4=正在下架' }),
    currPage: Flags.string({ description: '当前页码(首次固定为1，翻页取分页控件 api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutOnLineProductSoldOut)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpsoldout/erpsoldout/soldOut/onLineProduct', { "platformId": flags.platformId, "id": flags.id, "skuList": toArray(flags.skuList, 'string'), "employeeId": flags.employeeId, "shopId": flags.shopId, "soldOutReason": flags.soldOutReason, "soldOutStatus": flags.soldOutStatus, "currPage": flags.currPage })
    this.output(data)
  }
}
