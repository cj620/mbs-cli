// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderTriggerProduct extends MBSCommand {
  static description = '触发产品(禁限售触发产品)下拉列表查询：产品问题投诉页(taskComplaint2.html)在 created 生命周期调用 getgoodslist()，无参 GET 拉取“触发产品”候选名称列表，赋值给 goodslist，用于“平台限售”场景下“触发产品”下拉框(支持 allow-create 手动输入)的候选项。返回值 obj 为字符串数组(简明、准确、含特征的产品名称，如：除藻粉、激光逗猫棒)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpOrderTriggerProduct)

    const data = await this.client.get('/erpOrder/erpOrder/saleReport/triggerProduct', { params: {} })
    this.output(data)
  }
}
