// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductSmtFailPropGetForWrite extends MBSCommand {
  static description = '刊登失败属性回写值查询：在「SMT自动刊登-刊登失败编辑」弹窗中，根据 uniqueId(刊登记录/itemId) 查询该商品此前已写入的失败属性回写值列表，前端把每个属性的 id,en 拼接后回填到对应下拉框 #selectValue{i}，实现编辑回显。'

  static flags = {
    uniqueId: Flags.string({ description: '刊登记录唯一标识(itemId/uniqueId)，URL query 拼接 ?uniqueId=，来源列表行 data-uniqueid', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductSmtFailPropGetForWrite)

    const data = await this.client.post('/erpProduct/erpProduct/smtProductController/smtFailPropGetForWrite', {}, { params: { "uniqueId": flags.uniqueId } })
    this.output(data)
  }
}
