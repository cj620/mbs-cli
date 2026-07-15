// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinanceFinanceResPartnerList extends MBSCommand {
  static description = '辅助核算(合作伙伴)列表查询：日记账凭证创建/编辑时，点击「辅助核算」打开 #partnerModal 弹窗，按名称关键词分页查询合作伙伴(辅助核算)列表，供选择后回填到凭证的辅助核算字段。支持 name 关键词模糊搜索与 page/pageSize 分页。'

  static flags = {
    name: Flags.string({ description: '辅助核算名称搜索关键词。来源控件=辅助核算弹窗输入框 #partnerName；有值取输入值，否则固定传空字符串(不过滤)' }),
    page: Flags.string({ description: '当前页码。首次打开固定1；翻页时取分页组件 api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数，前端固定100', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinanceFinanceResPartnerList)

    const data = await this.client.post('/erpFinance/erpFinance/financeResPartner/financeResPartnerList', { "name": flags.name, "page": flags.page, "pageSize": flags.pageSize })
    this.output(data)
  }
}
