// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderFindStaPublishShop extends MBSCommand {
  static description = '刊登统计-按店铺统计查询：刊登统计报表「按照店铺统计」页签的列表查询：按统计月份(date)及站点、大酋长、店铺负责人、店铺等筛选条件分页查询各店铺的销售额、上新量、在线量、上新占比、剩余刊登数量、剩余销售额、卖家等级等汇总指标。'

  static flags = {
    date: Flags.string({ description: '统计时间(月份)，取自日期控件 #date(type=date)。为空时前端校验拦截不发请求', required: true }),
    site: Flags.string({ description: '站点，取自站点下拉 #site 选中项文本；未选(文本为"站点")时传空串' }),
    bigChief: Flags.string({ description: '大酋长，取自 #bigChief 选中项文本；文本含"]"时截取最后一个"]"之后内容；未选(文本为"大酋长")时传空串' }),
    shopManager: Flags.string({ description: '店铺负责人(组员)，取自店铺负责人下拉 #saleLeader 的 value(员工姓名 employee_name)' }),
    shopName: Flags.string({ description: '店铺名称，取自店铺下拉 #shopName 选中项文本；未选(文本为"店铺")时传空串' }),
    currentPage: Flags.string({ description: '当前页码；首次查询固定为1，翻页时为分页组件 api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数，固定 50', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderFindStaPublishShop)

    const data = await this.client.post('/erpOrder/erpOrder/statisticsPublish/findStaPublishShop', { "date": flags.date, "site": flags.site, "bigChief": flags.bigChief, "shopManager": flags.shopManager, "shopName": flags.shopName, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
