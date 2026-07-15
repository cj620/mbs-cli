// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindSoldOutVerifier extends MBSCommand {
  static description = '获取下架审核人列表：平台商品下架页面初始化时调用，用于获取“下架审核人”下拉框的数据源。无入参，返回审核人(员工)列表，前端用 art-template 模板 contentTemplate5 渲染为 #frameReviewer 下拉选项(value=员工ID，文本=员工姓名)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindSoldOutVerifier)

    const data = await this.client.post('/erpsoldout/erpsoldout/soldOut/findSoldOutVerifier', {})
    this.output(data)
  }
}
