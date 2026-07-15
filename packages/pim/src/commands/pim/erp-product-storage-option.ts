// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductStorageOption extends MBSCommand {
  static description = '发货仓库选项查询：获取SPU管理列表筛选器中「发货仓库」下拉框的选项列表。页面初始化时无参 GET 调用，返回值为发货仓库名称字符串数组，直接作为 el-select 的 label 与 value 渲染，供用户选择后以 storageNew 参数回传到 SPU 列表查询接口做过滤。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductStorageOption)

    const data = await this.client.get('/erpProduct/erpProduct/product/storageOption', { params: {} })
    this.output(data)
  }
}
