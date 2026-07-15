// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureCustomerTaskList extends MBSCommand {
  static description = '客户跟进日志列表查询：客户详情页加载/刷新「跟进日志」区块：按客户ID查询该客户全部跟进日志(线索)列表，含每条跟进的跟进人、状态、内容、下一步计划，以及该跟进下的回复(taskList)子列表，前端用 art-template taskListTemplate 渲染。'

  static flags = {
    customer: Flags.string({ description: '客户ID。来源：浏览器URL sequenceid 参数(GetQueryString("sequenceid"))，无对应输入控件', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureCustomerTaskList)

    const data = await this.client.post('/erpManufacture/erpManufacture/customer/customerTaskList', { "customer": flags.customer })
    this.output(data)
  }
}
