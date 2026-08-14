// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsGetSmtRelatedMarketingInfo extends MBSCommand {
  static description = '查询速卖通Related营销信息：查询速卖通Related营销信息(源码无注释,按方法名推断)'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    templateName: Flags.string({ description: '模板名称（字段名推断,语义待核实）' }),
    templateInfo: Flags.string({ description: '模板信息（字段名推断,语义待核实）' }),
    createBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    updateBy: Flags.string({ description: '更新人（字段名推断,语义待核实）' }),
    url: Flags.string({ description: 'URL（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsGetSmtRelatedMarketingInfo)

    const data = await this.client.post('/yypms/pms/smtSinglepublishController/getSmtRelatedMarketingInfo', { "id": flags.id, "templateName": flags.templateName, "templateInfo": flags.templateInfo, "createBy": flags.createBy, "updateBy": flags.updateBy, "url": flags.url })
    this.output(data)
  }
}
