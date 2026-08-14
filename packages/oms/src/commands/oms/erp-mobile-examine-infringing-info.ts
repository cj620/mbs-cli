// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileExamineInfringingInfo extends MBSCommand {
  static description = '侵权SKU审核(审核通过)：移动端侵权审核页：用户在「待审核SKU」与「关联出的SKU」两个列表中勾选 SKU 后，点击「审核通过已选择的SKU」提交，把所选侵权 SKU 及其关联 SKU 以审核状态=2(通过)提交给后端完成侵权审核处理。'

  static flags = {
    id: Flags.string({ description: '侵权单ID。来源：浏览器地址栏 query 参数 GetQueryString(\'id\')。', required: true }),
    verifyStatus: Flags.string({ description: '审核状态。前端固定传 "2"（2=审核通过）。', required: true }),
    skus: Flags.string({ description: '待审核侵权SKU集合。来源：「待审核SKU」列表勾选复选框(name=checkbox)的 value(即 v.sku)，多选逗号拼接，存于 .audited 元素 value 属性。可为空字符串。' }),
    unionSkus: Flags.string({ description: '关联出的SKU集合。来源：「关联出的SKU」列表勾选复选框(name=checkbox2)的 value(即 value.sku)，多选逗号拼接，存于 .Relation 元素 value 属性。可为空字符串。' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileExamineInfringingInfo)

    const data = await this.client.post('/erpMobile/erpMobile/infringing/examineInfringingInfo', { "id": flags.id, "verifyStatus": flags.verifyStatus, "skus": flags.skus, "unionSkus": flags.unionSkus })
    this.output(data)
  }
}
