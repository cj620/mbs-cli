// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetOtherCategories extends MBSCommand {
  static description = '按名称查询子类目(其他类目)：「设置类目」弹窗中，根据输入的类目名称关键字 name 模糊匹配并返回可选的子类目(其他类目)列表，结果赋值给前端 settypeapp 的 sonMenulist，用于子类目选择。name 为空时前端直接 return 不发起请求。'

  static flags = {
    name: Flags.string({ description: '类目名称关键字(子类目名称模糊匹配关键字)。来源 getson(val) 入参 val；val 为空时前端直接 return 不请求', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetOtherCategories)

    const data = await this.client.get('/erpProduct/erpProduct/stockProduct/getOtherCategories', { params: { "name": flags.name } })
    this.output(data)
  }
}
