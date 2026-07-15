// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutFindCreaterInfringing extends MBSCommand {
  static description = '获取提交人(创建人)下拉列表：商品侵权列表页初始化时调用，拉取提交人/创建人候选员工列表，渲染 #Founder 下拉框。前端 findCreater() 通过 $.ajax POST 调用，无请求参数，成功后用 art-template 模板 contentTemplate2 渲染。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutFindCreaterInfringing)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/findCreater', {})
    this.output(data)
  }
}
