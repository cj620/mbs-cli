// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetDevelopList extends MBSCommand {
  static description = '开发员(负责经理/负责人)下拉列表查询：商品类目维护页面初始化时调用，返回可选的开发员/负责经理/负责人名称列表，用于「修改类目」「批量设置权限」「批量删除权限」弹窗中「负责经理」「负责人」下拉框的候选项。接口无入参。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetDevelopList)

    const data = await this.client.get('/erpProduct/erpProduct/categoryController/getDevelopList', { params: {} })
    this.output(data)
  }
}
