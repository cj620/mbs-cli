// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindShopByPt extends MBSCommand {
  static description = '按平台查询店铺列表：根据平台ID查询该平台下的店铺名称列表，用于「亚马逊费项导入」弹窗中店铺下拉框(#shopNames)的数据填充。页面加载时(findShoplist())固定按平台ID=2(亚马逊)查询。'

  static flags = {
    platformid: Flags.string({ description: '平台ID。代码固定传 \'2\'（=亚马逊平台），用于筛选该平台下的店铺。来源：代码内常量(无页面控件)。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindShopByPt)

    const data = await this.client.post('/erpOrder/erpOrder/fbaReport/findShopByPt', { "platformid": flags.platformid })
    this.output(data)
  }
}
