// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsListDeveloppool extends MBSCommand {
  static description = '产品开发池列表：产品开发池列表'

  static flags = {
    platformId: Flags.integer({ description: '平台Id' }),
    categoryId: Flags.string({ description: '分类Id' }),
    platformFirstCategoryId: Flags.string({ description: '平台一级分类Id' }),
    platformSecondCategoryId: Flags.string({ description: '平台二级分类Id' }),
    status: Flags.integer({ description: '分配状态：未映射分类(0)，未分配(1)，已分配(2)，已放弃(3)' }),
    statusList: Flags.string({ description: '多状态查询时使用 (comma-separated)' }),
    timeType: Flags.integer({ description: '时间类型：1=刊登时间 2=放弃时间' }),
    timeStart: Flags.string({ description: '开始时间' }),
    timeEnd: Flags.string({ description: '结束时间' }),
    priceStart: Flags.string({ description: '开始价格' }),
    priceEnd: Flags.string({ description: '结束价格' }),
    userId: Flags.string({ description: '当前用户ID' }),
    tags: Flags.string({ description: '标签（表:注释）' }),
    tagList: Flags.string({ description: '标签（表:注释）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsListDeveloppool)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/developpool/list', { "tags": flags.tags, "tagList": flags.tagList }, { params: { "platformId": flags.platformId, "categoryId": flags.categoryId, "platformFirstCategoryId": flags.platformFirstCategoryId, "platformSecondCategoryId": flags.platformSecondCategoryId, "status": flags.status, "statusList": toArray(flags.statusList, 'integer'), "timeType": flags.timeType, "timeStart": flags.timeStart, "timeEnd": flags.timeEnd, "priceStart": flags.priceStart, "priceEnd": flags.priceEnd, "userId": flags.userId } })
    this.output(data)
  }
}
