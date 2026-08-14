// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindSmtDisabledConfirm extends MBSCommand {
  static description = 'SMT批量下架-下架确认列表查询：SMT(速卖通)批量下架页的列表分页查询：按店铺、创建时间区间、在线编号、SPU、下架状态、销量类型筛选，返回待下架/下架中/已下架的商品列表(含图片、店铺、负责人、商品ID、在线编号、销量、创建信息、下架状态/时间等)及分页汇总。'

  static flags = {
    currentPage: Flags.string({ description: '当前页码(来源分页控件 api.getCurrent()；仅分页回调传，首次搜索不传)' }),
    shopName: Flags.string({ description: '店铺名称(店铺多选 #shopvalues2 逗号拼接；未选则传空串=全部店铺)' }),
    beginTime: Flags.string({ description: '创建(任务生成)时间-起始(日期 #beginTime，YYYY-MM-DD)' }),
    endTime: Flags.string({ description: '创建(任务生成)时间-结束(日期 #endTimes，YYYY-MM-DD)' }),
    onlineNo: Flags.string({ description: '在线编号(模糊查询，文本 #onlineNo，前端去首尾空格)' }),
    spu: Flags.string({ description: 'SPU编号(文本 #onSpu，前端去首尾空格)' }),
    status: Flags.string({ description: '下架状态(下拉 #soldStatus)。空=全部;0=等待下架;1=下架中;2=下架成功;3=下架失败' }),
    type: Flags.string({ description: '销量筛选类型(下拉 #type；仅 search() 传，分页回调不传)。空=全部;0=近30天销量为0;2=近90天订单量为0' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindSmtDisabledConfirm)

    const data = await this.client.post('/erpProduct/erpProduct/smtExportController/findSmtDisabledConfirm', { "currentPage": flags.currentPage, "shopName": flags.shopName, "beginTime": flags.beginTime, "endTime": flags.endTime, "onlineNo": flags.onlineNo, "spu": flags.spu, "status": flags.status, "type": flags.type })
    this.output(data)
  }
}
