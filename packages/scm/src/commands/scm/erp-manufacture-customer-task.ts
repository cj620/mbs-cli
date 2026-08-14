// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureCustomerTask extends MBSCommand {
  static description = '客户跟进线索(任务)详情查询：客户详情页跟进线索(跟进任务)数据获取接口。不传 id 时仅返回当前跟进人(createBy)与跟进时间(createDate)用于新增弹窗回填；传 id 时按跟进任务主键回查该条跟进线索完整内容用于编辑弹窗回填。'

  static flags = {
    id: Flags.string({ description: '跟进线索(跟进任务)主键ID(列表行 sequenceid)，经 URL query 传入；新增前置取数时不传' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureCustomerTask)

    const data = await this.client.post('/erpManufacture/erpManufacture/customer/customerTask', {}, { params: { "id": flags.id } })
    this.output(data)
  }
}
