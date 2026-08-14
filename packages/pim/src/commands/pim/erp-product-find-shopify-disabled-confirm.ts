// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindShopifyDisabledConfirm extends MBSCommand {
  static description = 'Shopify下架确认任务列表查询：Shopify批量下架页面：按创建时间区间、店铺、下架状态、SKU/SPU编号分页查询已生成的下架确认任务列表；返回任务总数、总页数及任务行(含商品信息、店铺、负责人、销量、下架状态、刊登/下架时间等)，供页面 art-template 渲染表格并支持批量下架/删除。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称(多店铺时逗号拼接;未选则传空串)。来源:店铺多选下拉 #shopName(ySelect)' }),
    beginTime: Flags.string({ description: '创建时间-起始(任务生成时间起)。来源:日期框 #beginTime' }),
    endTime: Flags.string({ description: '创建时间-结束(任务生成时间止)。来源:日期框 #endTimes' }),
    onlineNo: Flags.string({ description: 'SKU编号(在线编号模糊搜索)。来源:输入框 #onlineNo,提交前去首尾空格' }),
    spu: Flags.string({ description: 'SPU编号(SPU搜索)。来源:输入框 #onSpu,提交前去首尾空格' }),
    status: Flags.string({ description: '下架状态。来源:下拉 #soldStatus。枚举:空=全部;0=等待下架;1=下架中;2=下架成功;3=下架失败' }),
    currentPage: Flags.string({ description: '当前页码(仅分页回调 findTaskReport 提交,取 api.getCurrent();首次 search() 不传)。每页固定200条' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindShopifyDisabledConfirm)

    const data = await this.client.post('/erpProduct/erpProduct/shopifyProductController/findShopifyDisabledConfirm', { "shopName": flags.shopName, "beginTime": flags.beginTime, "endTime": flags.endTime, "onlineNo": flags.onlineNo, "spu": flags.spu, "status": flags.status, "currentPage": flags.currentPage })
    this.output(data)
  }
}
