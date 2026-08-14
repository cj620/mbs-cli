// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetSpuImages extends MBSCommand {
  static description = '获取SPU图片列表：在新增SPU页面，按SPU编号查询该SPU下已存在的全部商品图片，返回图片URL与图片记录ID列表，前端渲染为图片墙；新增/删除图片及组装属性成功后回调刷新。'

  static flags = {
    spu: Flags.string({ description: 'SPU编号。来源输入控件 #SPU($("#SPU").val())，作为查询该SPU全部图片的唯一条件', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetSpuImages)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getSpuImages', {}, { params: { "spu": flags.spu } })
    this.output(data)
  }
}
