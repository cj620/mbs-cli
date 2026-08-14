// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetAllMustPublishSpu extends MBSCommand {
  static description = '获取全部必刊登SPU(导出用)：按处理状态、店铺、平台、年月、类目、刊登人等筛选条件，查询满足条件的全部「必刊登SPU」编号集合。前端在商品导出页加载时调用，把返回的SPU编号列表逗号拼接后写入导出条件(spuStr)，实现按当前筛选条件批量选取SPU导出。'

  static flags = {
    status: Flags.string({ description: '必刊登处理状态。1=待刊登(必刊登);2=不刊登;3=已完成(来源 URL status / 看板 #handle 下拉)' }),
    shopId: Flags.string({ description: '店铺ID(来源 URL shopId / 看板 #shopnams)' }),
    platform: Flags.string({ description: '平台ID(来源 URL platform / 看板 #platformes 平台下拉)' }),
    yearMonth: Flags.string({ description: '年月(格式如 yyyy-MM,来源 URL yearMonth / 看板 #yearMonth 时间下拉)' }),
    categoryName: Flags.string({ description: '类目名称(已 decodeURI 解码,来源 URL categoryName / 看板 #categorySelect)' }),
    oper: Flags.string({ description: '刊登人/开发员(已 decodeURI 解码,来源 URL oper / 看板 #thePost)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetAllMustPublishSpu)

    const data = await this.client.post('/erpProduct/erpProduct/stockProduct/getAllMustPublishSpu', { "status": flags.status, "shopId": flags.shopId, "platform": flags.platform, "yearMonth": flags.yearMonth, "categoryName": flags.categoryName, "oper": flags.oper })
    this.output(data)
  }
}
