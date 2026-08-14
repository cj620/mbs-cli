// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutGetSite extends MBSCommand {
  static description = '根据平台查询站点列表(getSite)：在「提交钓鱼信息」弹窗中，用户选择「平台」(多选)后触发，根据所选平台ID集合查询其对应的站点(site)列表，用于「站点」下拉框的可选项渲染。'

  static flags = {
    platformIds: Flags.string({ description: '平台ID集合(多个以英文逗号拼接)。来源：弹窗「平台」多选下拉(addData.platformId，选项 selectOption.platformList，value=PLATFORMID，label=PLATFORMNAME)；为空则不发起请求。', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutGetSite)

    const data = await this.client.get('/erpsoldout/erpsoldout/infringing/getSite', { params: {} })
    this.output(data)
  }
}
