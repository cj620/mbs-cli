// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmYypmsSequenceid extends MBSCommand {
  static description = '类目自定义刊登属性(颜色/尺码)查询：海外仓即时开发页选定产品分类(类目最后一级)后，按该类目序号ID查询其自定义刊登属性，返回可用的刊登颜色与刊登尺码候选列表，用于款式表格中刊登颜色/刊登尺码输入框的自动补全。'

  static flags = {}

  static args = {
    sequenceid: Args.string({ required: true, description: '商品分类(类目)最后一级序号ID，RESTful路径变量；来源 category-select 组件 changeValueList 回调的 valueList[0].sequenceid' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(PrmYypmsSequenceid)

    const data = await this.client.get(`/yypms/pms/product/getCategoryAttributeListCustomize/${args.sequenceid}`, { params: {} })
    this.output(data)
  }
}
