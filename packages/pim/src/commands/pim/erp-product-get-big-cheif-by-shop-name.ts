// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetBigCheifByShopName extends MBSCommand {
  static description = '根据店铺名称查询店长与销售大酋长：产品问题投诉页选择店铺后(getshopleader)，按店铺名称查询该店铺的销售大酋长与店长，回填到“销售大酋长”“店长”只读输入框。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称(v-model=shopName，值为店铺下拉项 SHOPNAME；为空时提示“店铺未选择”，来源控件：店铺 el-select)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetBigCheifByShopName)

    const data = await this.client.get('/erpProduct/erpProduct/infringement/getBigCheifByShopName', { params: { "shopName": flags.shopName } })
    this.output(data)
  }
}
