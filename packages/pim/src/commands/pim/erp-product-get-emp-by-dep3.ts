// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetEmpByDep3 extends MBSCommand {
  static description = '按部门获取开发员(员工)列表：进入「独立站产品报表」页面时调用，按当前登录用户所在部门返回开发员(员工)姓名列表，用于填充页面顶部“开发员”筛选下拉框(#deveplover)。该接口为无参 GET 请求。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetEmpByDep3)

    const data = await this.client.get('/erpProduct/erpProduct/product/getEmpByDep3', { params: {} })
    this.output(data)
  }
}
