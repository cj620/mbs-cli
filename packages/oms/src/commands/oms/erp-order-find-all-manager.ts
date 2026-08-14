// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindAllManager extends MBSCommand {
  static description = '查询全部店长列表：Wish推广(ProductBoost)报表"按照listing查看"页面初始化时调用，无入参，返回全部店长(店铺负责人)列表，用于渲染顶部"请选择店长"下拉框(#Shopowner)；选中后再联动查询其名下店铺。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindAllManager)

    const data = await this.client.get('/erpOrder/erpOrder/wishProductBoost/findAllManager', { params: {} })
    this.output(data)
  }
}
