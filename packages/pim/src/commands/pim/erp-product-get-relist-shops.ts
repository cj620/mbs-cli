// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetRelistShops extends MBSCommand {
  static description = '获取可重新刊登(Relist)店铺列表：Shopee 刊登页“编辑/搜索店铺”弹窗中，按店铺名称关键词分页查询可用于重新刊登的店铺列表，返回店铺名称及其开启/关闭状态，并支持分页与状态切换。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称搜索关键词，多店铺逗号分隔；取自弹窗输入框 .searchShops 的值并 $.trim 去空格' }),
    currentPage: Flags.string({ description: '当前页码；初始/搜索固定为 1，分页回调取 api.getCurrent()', required: true }),
    pageSize: Flags.string({ description: '每页条数；前端固定传 10', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetRelistShops)

    const data = await this.client.post('/erpProduct/erpProduct/shopeeProductPublish/getRelistShops', { "shopName": flags.shopName, "currentPage": flags.currentPage, "pageSize": flags.pageSize })
    this.output(data)
  }
}
