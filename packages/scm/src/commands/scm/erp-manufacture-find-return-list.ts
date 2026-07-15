// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureFindReturnList extends MBSCommand {
  static description = '退换货情况下拉框查询：查询「退换货情况」下拉枚举列表。后端从 ReturnEnum 枚举构造 code/desc 列表返回，前端用作 SPU 列表筛选区「退换货情况」多选下拉框的选项数据源（item.code 作 value、item.desc 作 label）。无请求参数，仅校验登录会话。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureFindReturnList)

    const data = await this.client.post('/erpManufacture/erpManufacture/manufactureExtendController/findReturnList', {})
    this.output(data)
  }
}
