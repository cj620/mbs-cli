// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetCity extends MBSCommand {
  static description = '货源城市下拉选项查询：进入SPU管理筛选器时初始化加载「货源城市」下拉框选项，返回全部货源城市(含类型+城市名)列表，供前端 city 多选筛选控件渲染。无任何请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetCity)

    const data = await this.client.post('/erpProduct/erpProduct/product/getCity', {})
    this.output(data)
  }
}
