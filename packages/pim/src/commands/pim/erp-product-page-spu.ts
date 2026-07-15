// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductPageSpu extends MBSCommand {
  static description = '图片转文本侵权检测SPU分页查询：按SPU/图片链接/文本/类目/侵权词/钓鱼词/开发员/美工/审核员/查询时间区间等条件，分页查询图片转文本侵权/钓鱼词检测结果列表，返回每条SPU的图片、文本、类目、侵权词、钓鱼词、相关人员及检测时间。'

  static flags = {
    spu: Flags.string({ description: 'SPU编号列表(输入框按空格 split；空则传 []) (comma-separated)' }),
    imageUrl: Flags.string({ description: '图片链接列表(输入框按空格 split；空则传 []) (comma-separated)' }),
    text: Flags.string({ description: '文本(按文本内容检索)' }),
    category1: Flags.string({ description: '一级类目名(类目级联 levelname1)' }),
    category2: Flags.string({ description: '二级类目名(类目级联 levelname2)' }),
    category3: Flags.string({ description: '三级类目名(类目级联 levelname3)' }),
    category4: Flags.string({ description: '四级类目名(类目级联 levelname4；levelnum==4 时取类目 name)' }),
    tortWord: Flags.string({ description: '侵权词' }),
    fishingWord: Flags.string({ description: '钓鱼词' }),
    isWord: Flags.string({ description: '是否含词标记(初始 \'\'，无直接控件)(待人工确认)' }),
    toTextStartDate: Flags.string({ description: '查询(转文本)时间-起始(timmer[0]，YYYY-MM-DD)' }),
    toTextEndDate: Flags.string({ description: '查询(转文本)时间-结束(timmer[1]，YYYY-MM-DD)' }),
    isTortWord: Flags.string({ description: '是否含有侵权词(0=否,1=是；初始 null)' }),
    isFishingWord: Flags.string({ description: '是否含有钓鱼词(0=否,1=是；默认 1)' }),
    total: Flags.string({ description: '分页总数(来自 page 对象，初始 0)' }),
    currentPage: Flags.string({ description: '当前页码(默认 1)' }),
    pageSize: Flags.string({ description: '每页条数(固定 100)' }),
    developer: Flags.string({ description: '开发员(下拉选择)' }),
    artists: Flags.string({ description: '美工(下拉选择)' }),
    auditor: Flags.string({ description: '审核员(下拉选择)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductPageSpu)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/image-to-text/spu/page', { "spu": toArray(flags.spu, 'string'), "imageUrl": toArray(flags.imageUrl, 'string'), "text": flags.text, "category1": flags.category1, "category2": flags.category2, "category3": flags.category3, "category4": flags.category4, "tortWord": flags.tortWord, "fishingWord": flags.fishingWord, "isWord": flags.isWord, "toTextStartDate": flags.toTextStartDate, "toTextEndDate": flags.toTextEndDate, "isTortWord": flags.isTortWord, "isFishingWord": flags.isFishingWord, "total": flags.total, "currentPage": flags.currentPage, "pageSize": flags.pageSize, "developer": flags.developer, "artists": flags.artists, "auditor": flags.auditor })
    this.output(data)
  }
}
