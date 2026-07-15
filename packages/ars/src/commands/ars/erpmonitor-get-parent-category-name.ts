// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetParentCategoryName extends MBSCommand {
  static description = '调价/不调价分类(父类目名称)查询：亚马逊价格调整页面初始化时调用：拉取父级类目名称列表，分别渲染到「不调价分类(adjustNoTemplate)」与「调价分类(adjustDoTemplate)」两个复选框下拉中，供生成提价商品信息时选择。无请求参数，响应为类目名称字符串数组。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetParentCategoryName)

    const data = await this.client.post('/erpmonitor/erpmonitor/amaoznRevisepriceConfirm/getParentCategoryName', {})
    this.output(data)
  }
}
