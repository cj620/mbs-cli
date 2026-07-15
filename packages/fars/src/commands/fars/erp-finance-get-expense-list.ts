// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceGetExpenseList extends MBSCommand {
  static description = '凭证来源(费用名称)列表查询：日记账凭证页面初始化时调用，拉取全部凭证来源/费用名称列表，用于渲染顶部筛选区 #expenseName(凭证来源)下拉选项。前端用原生 fetch 发起，无请求参数；返回结果生成 <option>，仅取每项 name(或字符串元素本身)作为下拉值与显示文本。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceGetExpenseList)

    const data = await this.client.get('/erpFinance/erpFinance/financeAccountMoveLine/getExpenseList', { params: {} })
    this.output(data)
  }
}
