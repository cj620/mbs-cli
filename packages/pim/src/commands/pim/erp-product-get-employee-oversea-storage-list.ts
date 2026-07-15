// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetEmployeeOverseaStorageList extends MBSCommand {
  static description = '查询员工海外仓库存仓库列表：获取当前登录员工可见的海外仓（仓库）列表，用于「海外仓库存流水/盘点日志」页面的「海外仓类型」「出入库仓库」两个下拉框数据源。前端拿到列表后按 storageType==4 过滤出海外仓类型供「海外仓类型」下拉使用，全量列表供「出入库仓库」下拉使用。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetEmployeeOverseaStorageList)

    const data = await this.client.get('/erpProduct/erpProduct/storage/getEmployeeOverseaStorageList', { params: {} })
    this.output(data)
  }
}
