// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindSoldOutProductNum extends MBSCommand {
  static description = '查询售罄(清仓滞销)商品数量：根据用户(员工)ID统计其名下售罄/清仓(soldOut)商品的数量，返回单个数量值，前端用于 Dashboard 首页 #findSoldOutProductNum 徽标展示，并据返回的员工ID拼接「平台商品详情(status=0)」跳转链接。'

  static flags = {
    userId: Flags.string({ description: '用户(员工)ID，URL 查询参数。来源 data.obj.user_info.yyemployeeId 或下拉框选中项 data-value(store_num)', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindSoldOutProductNum)

    const data = await this.client.post('/erpsoldout/erpsoldout/soldOut/findSoldOutProductNum', {}, { params: { "userId": flags.userId } })
    this.output(data)
  }
}
