// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindbigchiefByLogin extends MBSCommand {
  static description = '按平台查询大酋长(负责人)列表：销售趋势图搜索页(移动端)：选择平台后，按平台ID查询该平台对应的「大酋长」负责人列表，渲染为可多选的复选框供筛选。页面初始化时以空 platformId 调用一次拉取默认列表。'

  static flags = {
    platformId: Flags.string({ description: '平台ID。来源于「平台」复选框 .Platform 选中项的 value(即响应 PLATFORMID)；页面初始化时传空字符串拉取默认列表。URL 查询参数拼接传递' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindbigchiefByLogin)

    const data = await this.client.get('/erpMobile/erpMobile/saleTrendChart/findbigchiefByLogin', { params: { "platformId": flags.platformId } })
    this.output(data)
  }
}
