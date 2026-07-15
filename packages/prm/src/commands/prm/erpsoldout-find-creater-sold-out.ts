// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindCreaterSoldOut extends MBSCommand {
  static description = '查询下架任务创建人列表：平台商品下架页加载时调用，拉取“创建人”筛选下拉框的可选项列表，用于按创建人过滤下架任务。无任何请求参数；返回创建人(员工)集合，每项含员工ID与员工姓名，前端用 art-template 渲染为 #Founder 下拉框的 <option>。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindCreaterSoldOut)

    const data = await this.client.post('/erpsoldout/erpsoldout/soldOut/findCreater', {})
    this.output(data)
  }
}
