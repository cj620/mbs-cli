// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetHwcList extends MBSCommand {
  static description = '海外仓列表查询：获取当前用户可见的海外仓(HWC)列表。页面初始化 getHwclist() 调用，GET 无入参；返回海外仓数组，前端用 shopTemplate 渲染顶部\'请选择海外仓\'多选下拉(#shopContent,值=shopId)，用 shoplistTemplate 渲染新增跟踪单弹窗下拉(#shopList,值=shopId,shopName)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetHwcList)

    const data = await this.client.get('/erpProduct/erpProduct/hwcProduct/getHwcList', { params: {} })
    this.output(data)
  }
}
