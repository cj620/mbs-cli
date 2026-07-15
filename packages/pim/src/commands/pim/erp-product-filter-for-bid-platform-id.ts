// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductFilterForBidPlatformId extends MBSCommand {
  static description = '过滤禁售平台下拉选项查询：SPU列表（商品管理）高级筛选区「过滤禁售」多选下拉框的数据源接口。页面初始化时无参调用，返回可供过滤的禁售平台选项列表（value 值 + 名称），用于渲染 el-select 多选项；用户选中的 value 集合最终以 forbidPlatformIdList 参数提交到 SPU 列表查询接口。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductFilterForBidPlatformId)

    const data = await this.client.post('/erpProduct/erpProduct/product/filterForBidPlatformId', {})
    this.output(data)
  }
}
