// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutOnLineProductInfringing extends MBSCommand {
  static description = '侵权在线商品列表查询：侵权商品详情页的在线商品分页查询：按 SKU、平台、店铺、开发员、关键词移除状态、图片移除/更换状态、商品(下架)状态、时间等条件分页查询平台在线侵权商品列表，返回商品信息、店铺、侵权关键词/商品/图片三类侵权信息列表及 SKU 列表。'

  static flags = {
    skuList: Flags.string({ description: 'SKU列表(#duoSKU 按空格拆分) (comma-separated)' }),
    employeeId: Flags.string({ description: '员工ID(来源URL employeeId)' }),
    productStatus: Flags.string({ description: '商品(下架)状态。1=已在售;0=已下架;2=已删除;3=等待下架;4=下架中;5=下架失败(#infringingProductStatus, 为空取URL productStatus)' }),
    dateTime: Flags.string({ description: '时间筛选(来源URL dateTime)' }),
    infringingSubmitId: Flags.string({ description: '侵权提交ID(来源URL id)' }),
    platformId: Flags.string({ description: '平台ID(#platformName)' }),
    shopId: Flags.string({ description: '店铺ID(#shopId)' }),
    skuDeveloper: Flags.string({ description: 'SKU开发员(#skuDeveloper)' }),
    imageIsRemove: Flags.string({ description: '图片是否移除。0=已移除;1=未移除;2=等待移除(#imageRemoveStatus)' }),
    imageIsReplace: Flags.string({ description: '图片是否更换。1=美工待处理;2=图片已处理未更换;3=平台已更换;4=更换失败;5=正在更换(#imageReplaceStatus)' }),
    dashboard: Flags.string({ description: '仪表盘来源标记(来源URL dashboard; 点击搜索时传空)' }),
    wordStatus: Flags.string({ description: '关键词移除状态。0=已移除;1=未移除;2=等待移除;3=正在移除;4=失败(#wordRemoveStatus)' }),
    imageReplaceStatus: Flags.string({ description: '图片更换状态(同 #imageReplaceStatus 控件, 枚举同 imageIsReplace)' }),
    currPage: Flags.string({ description: '当前页码(首查固定1; 分页取 api.getCurrent())', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutOnLineProductInfringing)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/onLineProduct', { "skuList": toArray(flags.skuList, 'string'), "employeeId": flags.employeeId, "productStatus": flags.productStatus, "dateTime": flags.dateTime, "infringingSubmitId": flags.infringingSubmitId, "platformId": flags.platformId, "shopId": flags.shopId, "skuDeveloper": flags.skuDeveloper, "imageIsRemove": flags.imageIsRemove, "imageIsReplace": flags.imageIsReplace, "dashboard": flags.dashboard, "wordStatus": flags.wordStatus, "imageReplaceStatus": flags.imageReplaceStatus, "currPage": flags.currPage })
    this.output(data)
  }
}
