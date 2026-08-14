// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrder1 extends MBSCommand {
  static description = '大酋长列表查询：大酋长发布统计报表页面初始化时加载"大酋长"下拉选择框的数据源：无业务请求参数，返回全部大酋长(id+name)列表，前端据此渲染下拉框并缓存名称数组，随后触发统计接口调用。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrder1)

    const data = await this.client.get('/erpOrder/erpOrder/saleReport/getBigChief2/1/1', { params: {} })
    this.output(data)
  }
}
