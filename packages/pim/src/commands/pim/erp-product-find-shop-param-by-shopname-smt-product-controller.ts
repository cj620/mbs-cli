// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopParamByShopnameSmtProductController extends MBSCommand {
  static description = '根据店铺名查询店铺自动刊登参数(回显)：SMT自动刊登设置弹窗回显：根据店铺名(shopname)查询该店铺已保存的自动刊登配置(类目、批量折扣、毛利率/促销折扣率上下限、刊登间隔/时段、库存、JIT、水印、自动开关、安全承诺等)，用于弹窗各表单控件回显。'

  static flags = {
    shopname: Flags.string({ description: '店铺名称。来源：触发元素 data-shop($(obj).data(\'shop\'))，以 URL Query 参数拼接', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopParamByShopnameSmtProductController)

    const data = await this.client.post('/erpProduct/erpProduct/smtProductController/findShopParamByShopname', {}, { params: { "shopname": flags.shopname } })
    this.output(data)
  }
}
