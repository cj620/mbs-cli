// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetOneTwoCategories extends MBSCommand {
  static description = '查询侵权词listing一/二级类别：商品库存中心按类别名称模糊查询商品一/二级类目列表，供侵权授权申请弹框中“侵权词listing类别”多选下拉框渲染选项。name 传空表示拉取全部类别。'

  static flags = {
    name: Flags.string({ description: '类别名称(模糊查询关键字)；前端调用处固定传空字符串，实际查询全部一/二级类别' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetOneTwoCategories)

    const data = await this.client.get('/erpProduct/erpProduct/stockProduct/getOneTwoCategories', { params: { "name": flags.name } })
    this.output(data)
  }
}
