// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmPurchaseCoreServiceGet extends MBSCommand {
  static description = '今日工作统计查询(下单/跟单任务汇总)：采购“提交今日工作”弹窗数据源：GET 拉取当日下单任务(按采购员的总任务量/完成量/付款完成量)与跟单任务(按组别的任务类型明细及合计)统计，前端将 followUpTask 对象按键遍历转成 [{label,value}] 后渲染到弹窗左右两张表格。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmPurchaseCoreServiceGet)

    const data = await this.client.get('/gateway/purchase-core-service/report/today/work/get', { params: {} })
    this.output(data)
  }
}
