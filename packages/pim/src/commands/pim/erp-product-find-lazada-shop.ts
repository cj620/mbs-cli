// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFindLazadaShop extends MBSCommand {
  static description = '查询Lazada店铺列表：Lazada批量下架页面初始化时调用，无请求参数，返回当前用户可见的Lazada店铺名称列表（字符串数组），用于渲染顶部筛选店铺多选框与生成下架商品信息模态框店铺多选框。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFindLazadaShop)

    const data = await this.client.post('/erpProduct/erpProduct/lazadaExportController/findLazadaShop', {})
    this.output(data)
  }
}
