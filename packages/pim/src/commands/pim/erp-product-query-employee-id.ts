// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductQueryEmployeeId extends MBSCommand {
  static description = '查询下属管理员ID(刊登人)：eBay批量刊登页用于获取当前登录用户的下属员工/管理员ID集合，结果写入 sessionStorage(subManngerIds) 供后续 search() 刊登列表查询作为数据权限过滤条件。请求体为空(无入参)，身份信息由登录态(Cookie/Session)隐式传递。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductQueryEmployeeId)

    const data = await this.client.post('/erpProduct/erpProduct/productPublish/queryEmployeeId', {})
    this.output(data)
  }
}
