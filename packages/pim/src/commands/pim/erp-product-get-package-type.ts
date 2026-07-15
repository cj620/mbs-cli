// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPackageType extends MBSCommand {
  static description = '获取包装方式下拉选项：SKU 详情页初始化时调用，拉取全部包装方式字典项（ID + 名称），渲染到 #packageType 下拉框。无任何请求参数，返回包装方式列表，前端用 art-template 遍历生成 <option>；packageTypeId == 0 的项作为占位项并置为 disabled。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPackageType)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getPackageType', {})
    this.output(data)
  }
}
