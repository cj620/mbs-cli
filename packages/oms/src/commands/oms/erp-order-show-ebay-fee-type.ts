// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderShowEbayFeeType extends MBSCommand {
  static description = '查询Ebay账户费用类型：Ebay账单明细页面加载时(freeName())调用，按账单标识 billStr 与店铺 shopId 查询该账单下出现的全部费用类型(entryType)集合，返回字符串数组用于渲染顶部\'费用类型\'筛选下拉框(#freeType)的选项。'

  static flags = {
    billStr: Flags.string({ description: '账单标识/账单字符串，来源：页面URL查询参数 GetQueryString(\'billStr\')，用于定位目标Ebay账单', required: true }),
    shopId: Flags.string({ description: '店铺ID，来源：页面URL查询参数 GetQueryString(\'shopId\')，用于限定店铺范围', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderShowEbayFeeType)

    const data = await this.client.post('/erpOrder/erpOrder/ebayAccountFee/showEbayFeeType', {}, { params: { "billStr": flags.billStr, "shopId": flags.shopId } })
    this.output(data)
  }
}
