// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetStoragebinflag extends MBSCommand {
  static description = '获取直邮类型(直邮仓)下拉选项：SPU(商品)管理列表页筛选条件区「直邮类型」下拉框的数据源接口。页面初始化时无参调用,返回可选直邮类型(直邮仓)名称字符串列表(如 TEMU仓、Shein仓 等),前端将其逐项渲染为下拉选项;用户所选值作为 storagebinflag 参与 SPU 列表查询过滤。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetStoragebinflag)

    const data = await this.client.get('/erpProduct/erpProduct/product/getStoragebinflag', { params: {} })
    this.output(data)
  }
}
