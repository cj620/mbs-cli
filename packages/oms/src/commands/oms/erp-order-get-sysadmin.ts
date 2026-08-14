// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetSysadmin extends MBSCommand {
  static description = '获取系统管理员默认平台：双屏销售大屏(doubleinfo2)初始化时调用。无入参，返回当前登录用户(系统管理员)的默认平台ID。前端在未通过URL指定 platformid 时，用返回的 obj 作为平台下拉框(#platformList)的默认选中值，随后触发 search() 按该平台刷新看板。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetSysadmin)

    const data = await this.client.get('/erpOrder/erpOrder/saleVistingCard/getSysadmin', { params: {} })
    this.output(data)
  }
}
