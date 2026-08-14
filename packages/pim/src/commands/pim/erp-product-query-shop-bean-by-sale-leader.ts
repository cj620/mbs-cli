// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductQueryShopBeanBySaleLeader extends MBSCommand {
  static description = '按店铺负责人查询店铺列表(queryShopBeanBySaleLeader)：Lazada relisting 列表页中，当用户在“店铺负责人”下拉框选择某负责人时触发，按所选负责人的员工ID查询其名下店铺集合，返回店铺列表用于渲染“店铺”下拉框。负责人为空表示查询全部。'

  static flags = {
    employeeId: Flags.string({ description: '店铺负责人对应的员工ID，取自页面下拉框 #employeeId 选中值(employee_id)，可为空字符串表示未筛选' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductQueryShopBeanBySaleLeader)

    const data = await this.client.post('/erpProduct/erpProduct/productPublish/queryShopBeanBySaleLeader', { "employeeId": flags.employeeId })
    this.output(data)
  }
}
