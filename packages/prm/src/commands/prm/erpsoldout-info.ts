// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutInfo extends MBSCommand {
  static description = '提交侵权(下架授权)信息：商品侵权页“提交侵权信息”弹框点击确认后，提交侵权SKU、侵权关键词、侵权图片、侵权平台/站点、移除范围(类别/标题关键字)及自动移除图片/自动下架/自动移除关键词等处理选项，由后端登记侵权信息并按选项执行下架/移除处理。'

  static flags = {
    platformIds: Flags.string({ description: '侵权平台ID集合(多个逗号拼接)。来源 #QUplatform(el-select platform)；选“七大平台”时展开为 1,2,16,10,85,97,108' }),
    skus: Flags.string({ description: '侵权的SKU(多个逗号分割)。来源输入框 #QUSKU' }),
    infringingWords: Flags.string({ description: '侵权关键词(英文，多个逗号分割，用于移除标题中包含的词)。来源 #QUGjc' }),
    description: Flags.string({ description: '侵权描述(详细侵权原因及信息来源；前端校验字符长度须≥20，中文按2计)。来源文本域 #QUMS', required: true }),
    infringingImages: Flags.string({ description: '侵权图片文件名集合(逗号拼接)。取自 .img-cont img 各图片 src 的文件名部分' }),
    removePicture: Flags.string({ description: '自动移除图片标记。来源复选框 #removePicture，0=勾选(自动移除图片)，1=未勾选' }),
    soldOut: Flags.string({ description: '自动下架标记。来源复选框 #soldOut，0=勾选(自动下架)，1=未勾选' }),
    replaceInfringingWord: Flags.string({ description: '自动移除关键词标记。来源复选框 #replaceInfringingWord，0=勾选(自动移除关键词)，1=未勾选' }),
    categoryOfInfiringingWord: Flags.string({ description: '侵权词listing类别(可多选，逗号拼接 CATEGORYNAME)。来源多选框 #categoryWord' }),
    keyWordOfInfringingWord: Flags.string({ description: '侵权词listing标题关键字(英文，多个逗号分割)。来源 #keyWord' }),
    sites: Flags.string({ description: '站点列表(对象数组)。来源站点选择器 #site-selector(el-select site)，元素为 getAllSite 返回项 (comma-separated)' }),
    includingFor: Flags.string({ description: '是否包含“for”标记。来源复选框 #includingFor，取其 value(默认 "0")(待人工确认其业务取值含义)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutInfo)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/upload/info', { "platformIds": flags.platformIds, "skus": flags.skus, "infringingWords": flags.infringingWords, "description": flags.description, "infringingImages": flags.infringingImages, "removePicture": flags.removePicture, "soldOut": flags.soldOut, "replaceInfringingWord": flags.replaceInfringingWord, "categoryOfInfiringingWord": flags.categoryOfInfiringingWord, "keyWordOfInfringingWord": flags.keyWordOfInfringingWord, "sites": toArray(flags.sites, 'unknown'), "includingFor": flags.includingFor })
    this.output(data)
  }
}
