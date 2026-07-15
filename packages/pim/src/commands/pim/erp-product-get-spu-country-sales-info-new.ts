// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSpuCountrySalesInfoNew extends MBSCommand {
  static description = 'SPU国家30天销量查询(New)：按SPU与月份偏移量查询该SPU近30天分国家的销量，返回各国家及其销量列表，前端用于"国家30天销量(单)"横向条形图(echarts)展示。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号。来源：页面URL查询参数，经 GetQueryString(\'spu\') 读取。', required: true }),
    month: Flags.string({ description: '月份偏移量。0=当前月；点击上一月自增、下一月自减。来源：页面全局变量 month(初始0)。单位：月。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSpuCountrySalesInfoNew)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getSpuCountrySalesInfoNew', { "spu": flags.spu, "month": flags.month })
    this.output(data)
  }
}
