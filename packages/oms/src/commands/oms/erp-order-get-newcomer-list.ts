// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetNewcomerList extends MBSCommand {
  static description = '新人成绩单-新人列表查询：新人成绩单审核页面的新人列表分页查询：按审核人员类型(待审核/历史审核)、人员类型(销售/开发)、HRBP、审核状态、组员(员工姓名)等条件分页查询新人列表，返回新人头像、姓名、入职时间、指导人、HRBP、成绩单描述、部门、审核状态等字段，并附带分页汇总信息。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码（search 首次固定为 1；分页回调取 api.getCurrent()）', required: true }),
    isReviewed: Flags.string({ description: '审核人员范围。0=待审核人员;1=历史审核人员(来源 #isReviewed)' }),
    type: Flags.string({ description: '人员类型。1=销售;2=开发;空=全部(来源 #peopleType)' }),
    hrbp: Flags.string({ description: 'HRBP(取值来自 getHr 接口动态选项,来源 #hrbp)' }),
    reviewStatus: Flags.string({ description: '审核状态。1=通过;2=不通过;3=转发领导审核;5=我需要审核;空=全部(来源 #reviewStatus)' }),
    employeeName: Flags.string({ description: '员工姓名(组员)。优先取 #groups 值;否则取已勾选大酋长带出的组员数组逗号拼接;均无则为 null' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetNewcomerList)

    const data = await this.client.post('/erpOrder/erpOrder/newComerTranscript/getNewcomerList', { "currentPage": flags.currentPage, "isReviewed": flags.isReviewed, "type": flags.type, "hrbp": flags.hrbp, "reviewStatus": flags.reviewStatus, "employeeName": flags.employeeName })
    this.output(data)
  }
}
