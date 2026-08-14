// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorAllListingSpu extends MBSCommand {
  static description = '本周新刊登·全部SPU列表查询：“在线商品监控-本周新刊登”标签页触发。以 thisWeek=1 一次性拉取本周新刊登的全部SPU列表（不分页），成功回调将返回的 obj 数组整体写入隐藏域 #weekPub，用于“全部listing”导出与全选场景。列表分页展示由同源接口 allListing?thisWeek=1 负责（渲染 pubContentTemplate）。'

  static flags = {
    thisWeek: Flags.string({ description: '是否只取本周新刊登。源码硬编码为 1（1=本周新刊登）；来源：代码常量(非页面控件)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorAllListingSpu)

    const data = await this.client.post('/erpmonitor/erpmonitor/managerHotProduct/allListingSpu', {}, { params: { "thisWeek": flags.thisWeek } })
    this.output(data)
  }
}
