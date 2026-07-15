// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportDownload extends MBSCommand {
  static description = 'TikTok活动(年度)列表导出：店铺热销商品监控页「TikTok活动导出」按钮触发，按当前选中店铺(店铺名称数组)导出 TikTok 年度活动 listing 列表为 Excel 文件。请求体直接为店铺名称字符串数组；响应为 .xlsx 二进制文件流，前端以 responseType=blob 接收并触发下载，默认文件名 tiktok.xlsx。'

  static flags = {
    shopNameList: Flags.string({ description: '请求体根节点，直接为店铺名称字符串数组(非对象包裹)。来源:页面「店铺」多选下拉(el-select v-model=shop)当前选中项;未选店铺时为空数组[] (comma-separated)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportDownload)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpReport/erpReport/tiktok/year/campaign/list/download', { "shopNameList": toArray(flags.shopNameList, 'string') })
    this.output(data)
  }
}
