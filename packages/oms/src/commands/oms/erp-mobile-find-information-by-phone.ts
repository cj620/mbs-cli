// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileFindInformationByPhone extends MBSCommand {
  static description = '根据手机号查询供应商报价资料：移动端「货源报价录入」页，手机号输入框失焦(onblur)时按手机号查询该供应商已有的报价资料(联系人/旺旺号/质量/供货类型/供应商地址/报价规格/店铺链接/备注/商品图片等)，并通过 art-template 模板 infosTemplate 渲染回填表单。'

  static flags = {
    phone: Flags.string({ description: '供应商手机号；取自「手机号」输入框 #phone 的值，作为唯一查询条件', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileFindInformationByPhone)

    const data = await this.client.post('/erpMobile/erpMobile/shoeController/findInformationByPhone', { "phone": flags.phone })
    this.output(data)
  }
}
