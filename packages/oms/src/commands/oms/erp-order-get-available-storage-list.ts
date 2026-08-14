// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderGetAvailableStorageList extends MBSCommand {
  static description = '获取可用仓库列表：获取当前用户可用的仓库分组列表，用于商品(SPU)管理页“关联仓库”弹窗的仓库选项渲染。返回按仓库分组类型(直发仓/中转仓/海外仓)划分的分组，每个分组内含具体仓库列表(仓库ID、仓库名称、仓库类型)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderGetAvailableStorageList)

    const data = await this.client.get('/erpOrder/erpOrder/orderNew/getAvailableStorageList', { params: {} })
    this.output(data)
  }
}
