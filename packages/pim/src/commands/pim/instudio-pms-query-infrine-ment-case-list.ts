// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryInfrineMentCaseList extends MBSCommand {
  static description = '侵权case列表查询：侵权case列表查询'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    caseNumber: Flags.string({ description: '案件号' }),
    brand: Flags.string({ description: '品牌' }),
    sku: Flags.string({ description: 'sku' }),
    frozenAmount: Flags.string({ description: '冻结金额（美金)' }),
    settlementAmount: Flags.string({ description: '和解金额（美金）' }),
    lawyerFee: Flags.string({ description: '律师费（美金）' }),
    receiptRatio: Flags.string({ description: '回款比例' }),
    receiptRatioPercent: Flags.string({ description: '回款比例(百分)' }),
    currentState: Flags.integer({ description: '目前状态' }),
    currentStateCN: Flags.string({ description: '案件进程' }),
    skuPublicationTime: Flags.string({ description: 'SKU刊登时间' }),
    prosecutionTime: Flags.string({ description: '起诉时间' }),
    freezingTime: Flags.string({ description: '冻结时间' }),
    absentDay: Flags.string({ description: '缺席日' }),
    plaintiffLawFirm: Flags.string({ description: '原告律所' }),
    defendantLawyer: Flags.string({ description: '被告律师' }),
    casePriority: Flags.string({ description: '案件优先级' }),
    caseProgress: Flags.integer({ description: '案件进程' }),
    caseProgressCN: Flags.string({ description: '案件进程' }),
    createBy: Flags.string({ description: '创建人' }),
    createTime: Flags.string({ description: '创建时间,格式化(yyyy-MM-dd) GMT+8:防止前端时间少8小时' }),
    updateBy: Flags.string({ description: '修改人' }),
    updateTime: Flags.string({ description: '修改时间,格式化(yyyy-MM-dd) GMT+8:防止前端时间少8小时' }),
    deleteBy: Flags.string({ description: '删除人' }),
    deleteTime: Flags.string({ description: '删除时间,格式化(yyyy-MM-dd) GMT+8:防止前端时间少8小时' }),
    caseStatus: Flags.integer({ description: '案件状态,记录是否删除 0表示当前数据正常,1表示删除' }),
    caseNumberOrSku: Flags.string({ description: '查询条件,侵权列表使用,案件或者sku' }),
    checkInTime: Flags.string({ description: '//查询条件,侵权列表使用,登记时间' }),
    index: Flags.integer({ description: '页数' }),
    page: Flags.integer({ description: '每页展示多少条' }),
    orderBy: Flags.integer({ description: '排序方式,0:倒序 1:升序' }),
    platFormCount: Flags.integer({ description: '涉及的店铺数量' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryInfrineMentCaseList)

    const data = await this.client.post('/yypms/pms/infringement/queryInfrineMentCaseList', { "id": flags.id, "caseNumber": flags.caseNumber, "brand": flags.brand, "sku": flags.sku, "frozenAmount": flags.frozenAmount, "settlementAmount": flags.settlementAmount, "lawyerFee": flags.lawyerFee, "receiptRatio": flags.receiptRatio, "receiptRatioPercent": flags.receiptRatioPercent, "currentState": flags.currentState, "currentStateCN": flags.currentStateCN, "skuPublicationTime": flags.skuPublicationTime, "prosecutionTime": flags.prosecutionTime, "freezingTime": flags.freezingTime, "absentDay": flags.absentDay, "plaintiffLawFirm": flags.plaintiffLawFirm, "defendantLawyer": flags.defendantLawyer, "casePriority": flags.casePriority, "caseProgress": flags.caseProgress, "caseProgressCN": flags.caseProgressCN, "createBy": flags.createBy, "createTime": flags.createTime, "updateBy": flags.updateBy, "updateTime": flags.updateTime, "deleteBy": flags.deleteBy, "deleteTime": flags.deleteTime, "caseStatus": flags.caseStatus, "caseNumberOrSku": flags.caseNumberOrSku, "checkInTime": flags.checkInTime, "index": flags.index, "page": flags.page, "orderBy": flags.orderBy, "platFormCount": flags.platFormCount })
    this.output(data)
  }
}
