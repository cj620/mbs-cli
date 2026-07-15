// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureGetManufactureRiskAssess extends MBSCommand {
  static description = '供应商风险评估列表查询：供应商风险评估页面分页列表查询：通过 assessStatus 区分“待评估供应商”与“历史评估供应商”两个 Tab，keyword 在两个 Tab 下含义不同（待评估=是否仅看需进一步检查；历史=通过/未通过），返回供应商基础信息、评估内容与评估结果汇总，前端用 art-template 模板渲染列表卡片。'

  static flags = {
    pageSize: Flags.string({ description: '每页条数。来源控件：#mangPage（经 Number 转换）。枚举：50/100/200。单位：条/页', required: true }),
    page: Flags.string({ description: '当前页码，固定从1开始；翻页取自分页控件 api.getCurrent()', required: true }),
    assessStatus: Flags.string({ description: '评估状态(区分Tab)。0=待评估供应商(search固定\'0\');1=历史评估供应商(search1固定\'1\')', required: true }),
    keyword: Flags.string({ description: '关键词/筛选标记,含义随Tab不同：待评估Tab(复选框.getstep)1=仅看需进一步检查/空=全部;历史评估Tab(单选goot)1=通过/0=未通过。默认空串' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureGetManufactureRiskAssess)

    const data = await this.client.post('/erpManufacture/erpManufacture/manufactureExtendController/getManufactureRiskAssess', {}, { params: { "pageSize": flags.pageSize, "page": flags.page, "assessStatus": flags.assessStatus, "keyword": flags.keyword } })
    this.output(data)
  }
}
