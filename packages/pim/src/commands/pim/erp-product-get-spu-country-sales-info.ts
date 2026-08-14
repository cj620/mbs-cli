// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSpuCountrySalesInfo extends MBSCommand {
  static description = 'SPU国家销量信息查询（国家15天销量）：按 SPU 查询该商品近15天分国家的销量数据，前端用 ECharts 横向柱状图渲染「国家15天销量(单)」。返回为国家销量数组(country/countrySale)，按销量倒序展示；返回 obj 为 null 时隐藏图表容器 #contury12，并把 res.obj 写入 sessionStorage.resObjOne。'

  static flags = {
    spu: Flags.string({ description: '商品SPU编号。取自页面 URL 的 SPU 参数(GetQueryString(\'SPU\'))，以 ?spu= 拼接到接口 URL', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSpuCountrySalesInfo)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getSpuCountrySalesInfo', {}, { params: { "spu": flags.spu } })
    this.output(data)
  }
}
