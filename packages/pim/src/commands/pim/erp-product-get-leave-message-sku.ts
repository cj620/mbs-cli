// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetLeaveMessageSku extends MBSCommand {
  static description = '获取SKU留言列表：商品详情「全部留言」页加载指定SKU的留言列表：按SKU(及SPU)查询全部留言，返回每条留言的留言人/时间/内容/头像、附带的图片与文件附件，以及该留言下的子留言(回复)。'

  static flags = {
    sku: Flags.string({ description: 'SKU编号(核心查询键，查询该SKU的留言)；来源页面URL参数 SKU', required: true }),
    spu: Flags.string({ description: 'SPU编号；来源页面URL参数 SPU，本页常为空' }),
    isAll: Flags.string({ description: '是否查看全部留言，前端固定传 1(1=全部)' }),
    isSystem: Flags.string({ description: '留言系统/类型标识，前端固定传 3' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetLeaveMessageSku)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getLeaveMessageSku', {}, { params: { "sku": flags.sku, "spu": flags.spu, "isAll": flags.isAll, "isSystem": flags.isSystem } })
    this.output(data)
  }
}
