// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileBeforVerifier extends MBSCommand {
  static description = '侵权审核SKU预校验(审核前查询)：移动端侵权下架审核页打开时，根据侵权记录 id 查询该侵权单下「待审核SKU(listbefore)」与「关联出的SKU(listAfter)」两组列表，分别渲染到审核页两块卡片，供用户勾选后审核通过。'

  static flags = {
    id: Flags.string({ description: '侵权审核记录ID。URL查询参数，来源 GetQueryString(\'id\') 读取当前页面 URL 的 id，用于定位待审核的侵权单。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileBeforVerifier)

    const data = await this.client.post('/erpMobile/erpMobile/infringing/beforVerifier', {}, { params: { "id": flags.id } })
    this.output(data)
  }
}
