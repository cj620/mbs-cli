// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetDeveloperInfoByShop extends MBSCommand {
  static description = '开发员店铺刊登覆盖率明细查询（按店铺）：产品刊登分析报表第三级钻取：在选定大酋长+组员(开发员)、并指定店长(employeeId)后，查询该店长名下各店铺的刊登覆盖明细，返回店铺在线listing、开发员刊登数、总/新品覆盖率、SPU汇总及占比、近30天销售额占比等汇总字段。'

  static flags = {
    bigChief: Flags.string({ description: '大酋长(名称)数组,仅含1个元素;取选中项peoanme属性,未选时为空字符串 (comma-separated)' }),
    developer: Flags.string({ description: '组员/开发员(员工姓名)集合,来自#commodity多选(employee_name) (comma-separated)' }),
    employeeId: Flags.string({ description: '店长(员工)ID,第三级钻取定位的店长;由被点击行thead[data-sid]转字符串传入', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetDeveloperInfoByShop)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpOrder/erpOrder/developerTarget/getDeveloperInfoByShop', { "bigChief": toArray(flags.bigChief, 'string'), "developer": toArray(flags.developer, 'string'), "employeeId": flags.employeeId })
    this.output(data)
  }
}
