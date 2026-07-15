// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpReportGetSiteByType extends MBSCommand {
  static description = '按站点查询账单表头解析规则(getSiteByType)：amazonBill 文件上传解析页「设置解析规则」弹窗中，选择站点后按站点查询该站点已配置的账单表头解析规则。返回以费项类型名称为键、对应账单表头列名候选列表为值的 Map，前端 for...in 遍历生成解析规则表格。'

  static flags = {
    site: Flags.string({ description: '站点(Amazon 站点标识)。查询串拼接到 URL 末尾；来源：设置解析规则弹窗站点下拉 el-select(v-model=site,@change=getsitedetail)，候选来自 getSite 接口。枚举随站点数据动态返回(待人工确认)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpReportGetSiteByType)

    const data = await this.client.get('/erpReport/erpReport/amazonHeaderRecord/getSiteByType', { params: { "site": flags.site } })
    this.output(data)
  }
}
