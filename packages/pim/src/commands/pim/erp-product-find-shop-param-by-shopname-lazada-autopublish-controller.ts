// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopParamByShopnameLazadaAutopublishController extends MBSCommand {
  static description = '按店铺名查询店铺自动刊登参数：在 Lazada 自动刊登页面点击某店铺设置/编辑时调用，依据店铺名(shopname)查询该店铺已保存的自动刊登参数(分类、利润率、降价率、库存、包邮、刊登时间/间隔、是否重点店铺、是否最低价限制、是否自动、是否信任及创建信息)，用于回显到刊登参数弹窗 #pubModal。'

  static flags = {
    shopname: Flags.string({ description: '店铺名称。来源店铺列表项 data-shop({{v.shopname}})，经 $(obj).data(\'shop\') 拼接到 URL Query', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopParamByShopnameLazadaAutopublishController)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaAutopublishController/findShopParamByShopname', {}, { params: { "shopname": flags.shopname } })
    this.output(data)
  }
}
