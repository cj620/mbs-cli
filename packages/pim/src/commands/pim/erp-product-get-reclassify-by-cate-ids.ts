// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetReclassifyByCateIds extends MBSCommand {
  static description = '按父类目分页查询子类目(重新分类)：SPU列表页"重新分类"弹窗中，根据所选父目录(一级类目)分页查询其下子类目列表；支持按子类目名称关键词搜索。返回子类目(sequenceid+name)列表及分页信息(总条数、总页数)，前端渲染为可勾选的子类目复选框列表。'

  static flags = {
    primaryCateId: Flags.string({ description: '父级(一级)类目ID列表，多选时以英文逗号拼接；来源父目录多选下拉 #content3 的值(.val().join(","))，未选时传空字符串' }),
    currpage: Flags.string({ description: '当前页码；分页加载取 baseDate.currpage，关键词搜索取 baseDate.searchPage，分页回调时为 api.getCurrent()，每页固定100条', required: true }),
    keyWords: Flags.string({ description: '子类目名称搜索关键词；来源搜索输入框 #keyWordsName(searchReclassify)，分页加载 getReclassify 中固定传空字符串' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetReclassifyByCateIds)

    const data = await this.client.post('/erpProduct/erpProduct/product/getReclassifyByCateIds', { "primaryCateId": flags.primaryCateId, "currpage": flags.currpage, "keyWords": flags.keyWords })
    this.output(data)
  }
}
