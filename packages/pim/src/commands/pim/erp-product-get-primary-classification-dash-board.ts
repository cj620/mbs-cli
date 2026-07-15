// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetPrimaryClassificationDashBoard extends MBSCommand {
  static description = '一级品类(看板品类下拉)查询：首页综合看板(common.html「销量趋势图」筛选区)加载时调用，拉取全部一级品类(分类)列表，用于渲染「品类」多选下拉框(#ulId3 / #platform3)。无请求参数，返回品类名称数组，前端仅取每项 name。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetPrimaryClassificationDashBoard)

    const data = await this.client.post('/erpProduct/erpProduct/product/getPrimaryClassificationDashBoard', {})
    this.output(data)
  }
}
