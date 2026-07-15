// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetStandardProductUnit extends MBSCommand {
  static description = '获取标准商品单元(SPU详情)：SPU详情页打开时按 SPU 编号加载该 SPU 的标准商品单元信息：中文/英文标题、英文关键词、英文描述、开发性质、分类、禁售平台、侵权与禁售站点、专利国家、中英文申报名、品牌、采购链接、可公开店铺、视频/动图链接、竞品链接、公司归属等，用于详情页头部渲染及编辑SPU模态框回填。'

  static flags = {
    spu: Flags.string({ description: 'SPU编号(URL查询参数,来源:当前详情页地址栏 SPU 参数,经 GetQueryString(\'SPU\') 取得)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetStandardProductUnit)

    const data = await this.client.post('/erpProduct/erpProduct/productDetails/getStandardProductUnit', { "spu": flags.spu })
    this.output(data)
  }
}
