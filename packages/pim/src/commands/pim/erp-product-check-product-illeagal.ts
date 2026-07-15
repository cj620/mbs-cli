// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductCheckProductIlleagal extends MBSCommand {
  static description = '违规产品审核：违规产品登记表(registrationForm)「违规产品」页签中，总经办点击行内[审核]弹出审核模态框，选择审核结果(通过/驳回)并填写备注后提交。后端按 sequenceid 标记该违规记录审核状态与备注，仅返回 code/desc，前端据 code 弹窗提示并刷新列表。'

  static flags = {
    sequenceid: Flags.string({ description: '违规产品记录序号ID(审核对象主键)。来源：列表行 value.sequenceid 经 getCheckModal 写入隐藏域 #sequenceid', required: true }),
    checkstatus: Flags.string({ description: '审核结果状态。1=通过;0=驳回。来源控件:下拉框 #checkstatus;为空 alert‘请选择’阻止提交', required: true }),
    checkremark: Flags.string({ description: '审核备注/意见。来源控件:文本域 #checkremarks。checkstatus==0(驳回)时必填,checkstatus==1(通过)时可空' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductCheckProductIlleagal)

    const data = await this.client.post('/erpProduct/erpProduct/product/checkProductIlleagal', { "sequenceid": flags.sequenceid, "checkstatus": flags.checkstatus, "checkremark": flags.checkremark })
    this.output(data)
  }
}
