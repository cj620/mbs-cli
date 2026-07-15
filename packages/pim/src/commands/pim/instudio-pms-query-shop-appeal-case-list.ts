// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryShopAppealCaseList extends MBSCommand {
  static description = '查询店铺申诉列表：查询店铺申诉列表'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    platformId: Flags.integer({ description: '平台id' }),
    erpCode: Flags.integer({ description: '马帮代号' }),
    erpCodeCn: Flags.string({ description: '马帮代号(中文)' }),
    salesPerson: Flags.integer({ description: '销售' }),
    salesPersonCn: Flags.string({ description: '销售(中文)' }),
    shopStatus: Flags.integer({ description: '店铺状态' }),
    freezeReason: Flags.integer({ description: '冻结原因' }),
    dockingChannel: Flags.integer({ description: '对接渠道' }),
    rmbAmount: Flags.string({ description: '总押款(人民币）' }),
    appealFee: Flags.string({ description: '申诉费用' }),
    dockingAppealTime: Flags.string({ description: '对接申诉时间' }),
    caseRecoveryTime: Flags.string({ description: 'case恢复时间' }),
    progresChannel: Flags.string({ description: '申诉进度及渠道反馈' }),
    createBy: Flags.string({ description: '创建人' }),
    createTime: Flags.string({ description: '创建时间' }),
    updateBy: Flags.string({ description: '修改人' }),
    updateTime: Flags.string({ description: '修改时间' }),
    deleteBy: Flags.string({ description: '修改人' }),
    deleteTime: Flags.string({ description: '修改时间' }),
    shopAppealStatus: Flags.integer({ description: '店铺状态' }),
    index: Flags.integer({ description: '页数' }),
    page: Flags.integer({ description: '每页展示多少条' }),
    orderBy: Flags.integer({ description: '排序方式,0:倒序 1:升序' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryShopAppealCaseList)

    const data = await this.client.post('/yypms/pms/infringement/queryShopAppealCaseList', { "id": flags.id, "platformId": flags.platformId, "erpCode": flags.erpCode, "erpCodeCn": flags.erpCodeCn, "salesPerson": flags.salesPerson, "salesPersonCn": flags.salesPersonCn, "shopStatus": flags.shopStatus, "freezeReason": flags.freezeReason, "dockingChannel": flags.dockingChannel, "rmbAmount": flags.rmbAmount, "appealFee": flags.appealFee, "dockingAppealTime": flags.dockingAppealTime, "caseRecoveryTime": flags.caseRecoveryTime, "progresChannel": flags.progresChannel, "createBy": flags.createBy, "createTime": flags.createTime, "updateBy": flags.updateBy, "updateTime": flags.updateTime, "deleteBy": flags.deleteBy, "deleteTime": flags.deleteTime, "shopAppealStatus": flags.shopAppealStatus, "index": flags.index, "page": flags.page, "orderBy": flags.orderBy })
    this.output(data)
  }
}
