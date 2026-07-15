// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetReclassify extends MBSCommand {
  static description = '获取子分类(店长)列表：移动端搜索页"店长"下拉的联动查询接口：当用户在"平台(父目录)"复选框中勾选某一项时，以该项的 sequenceid 作为 primaryCateId，查询其下属的子分类(店长)列表，用于渲染"店长"复选框组，并把每项的 sequenceid 收集到 childAll 作为默认子目录候选。'

  static flags = {
    primaryCateId: Flags.string({ description: '父级分类ID（平台/父目录的 sequenceid），来源平台复选框 getPrimarys 的选中值，经 URL Query 传递', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetReclassify)

    const data = await this.client.post('/erpProduct/erpProduct/product/getReclassify', {}, { params: { "primaryCateId": flags.primaryCateId } })
    this.output(data)
  }
}
