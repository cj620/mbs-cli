// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductPageQuery extends MBSCommand {
  static description = '修改日志分页查询(海外仓类型展示权限)：海外仓类型展示权限弹窗(iframe)加载时调用，分页查询该权限设置的修改日志(操作时间/操作人/操作内容)，结果渲染到「修改日志」Tab 的时间轴中。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码，函数默认值=1(getUpdateHistory(currentPage = 1)，单位：页)', required: true }),
    pageSize: Flags.string({ description: '每页条数，固定传 100(单位：条)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductPageQuery)

    const data = await this.client.post('/erpProduct/erpProduct/product/query/page', { "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
