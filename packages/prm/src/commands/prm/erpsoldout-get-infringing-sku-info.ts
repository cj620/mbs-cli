// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutGetInfringingSkuInfo extends MBSCommand {
  static description = '侵权SKU(画廊)信息查询：侵权监控画廊页(gallery.html)加载/换一批/切换大类时调用：按大类(parentCategoryId)查询已提交侵权信息的SKU列表，返回该大类下SKU数量徽标(content)与SKU卡片列表(obj，含图片、SPU、侵权描述、提交人与提交时间)，用于art-template渲染商品画廊。'

  static flags = {
    parentCategoryId: Flags.string({ description: '大类(父级分类)ID。来源顶部大类导航 li[data-value](value.sequenceid)；点「所有」或初始化时传空串表示全部大类' }),
    isFirst: Flags.string({ description: '是否首次/普通加载标记。\'1\'=首次加载或切换大类；\'\'(空串)=点击「换一批」刷新一批' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutGetInfringingSkuInfo)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/getInfringingSkuInfo', { "parentCategoryId": flags.parentCategoryId, "isFirst": flags.isFirst })
    this.output(data)
  }
}
