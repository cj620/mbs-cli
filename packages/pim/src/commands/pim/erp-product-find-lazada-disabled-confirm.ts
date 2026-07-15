// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindLazadaDisabledConfirm extends MBSCommand {
  static description = 'Lazada下架确认列表查询：Lazada批量下架管理页的下架任务列表查询：按店铺、创建时间区间、在线编号、SPU、下架状态分页筛选，返回下架任务列表(商品图/SKU/SPU/店铺/负责人/在线编号/近30天销量/创建人/创建时间/下架状态/刊登时间/下架时间/失败原因)及总数、总页数。'

  static flags = {
    shopName: Flags.string({ description: '店铺名称(多选店铺逗号拼接，来源 #shopvalues2；未选则传空串)' }),
    beginTime: Flags.string({ description: '创建(任务生成)时间-起始，来源日期控件 #beginTime' }),
    endTime: Flags.string({ description: '创建(任务生成)时间-结束，来源日期控件 #endTimes' }),
    onlineNo: Flags.string({ description: '在线编号(模糊查询)，来源 #onlineNo，前端去除首尾空格' }),
    spu: Flags.string({ description: 'SPU编号，来源 #onSpu，前端去除首尾空格' }),
    status: Flags.string({ description: '下架状态(来源 #soldStatus)。空=全部;0=等待下架;1=下架中;2=下架成功;3=下架失败' }),
    currentPage: Flags.string({ description: '当前页码(仅分页回调 findTaskReport 传，取自分页组件 api.getCurrent()；搜索首次不传，后端默认第1页)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindLazadaDisabledConfirm)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaExportController/findLazadaDisabledConfirm', { "shopName": flags.shopName, "beginTime": flags.beginTime, "endTime": flags.endTime, "onlineNo": flags.onlineNo, "spu": flags.spu, "status": flags.status, "currentPage": flags.currentPage })
    this.output(data)
  }
}
