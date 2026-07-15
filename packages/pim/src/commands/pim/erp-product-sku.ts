// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductSku extends MBSCommand {
  static description = '获取速卖通(SMT)托管内容选项：SKU详情页“申请备货/上架”弹窗中，选择速卖通(smt1/aliexpress)平台时，根据当前 SKU 拉取该平台可选的托管内容选项列表(返回字符串数组)，前端用于渲染“适用内容”下拉选项(value 与 label 同值)。'

  static flags = {}

  static args = {
    sKU: Args.string({ required: true, description: '商品SKU编号(路径变量,拼接于 URL 末尾 /getSmtTuoGuan/{SKU});来源:当前页面地址栏查询参数 SKU,经 GetQueryString(\'SKU\') 取得' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PimErpProductSku)

    const data = await this.client.get(`/erpProduct/erpProduct/product/getSmtTuoGuan/${args.sKU}`, { params: {} })
    this.output(data)
  }
}
