// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpOrderPlatformId1 extends MBSCommand {
  static description = '获取大酋长列表：进入 Lazada 优惠券看板页面时调用，按平台加载“大酋长”（团队负责人）下拉选项列表，用于填充顶部 #shopManager 多选下拉框。URL 路径中第一段固定为 1，第二段为平台ID（页面内固定为 18=Lazada）。'

  static flags = {
    seg1: Flags.string({ description: '路径第一段，源码中固定为常量 1（getBigChief2/1/）。具体业务含义（如类型/标识位）(待人工确认)', required: true }),
  }

  static args = {
    platformId: Args.string({ required: true, description: '平台ID，路径第二段。源码 var platformId = 18（18=Lazada 平台），来源：函数内固定赋值，非页面控件' }),
  }

  async run(): Promise<void> {
    const { args, flags } = await this.parse(OmsErpOrderPlatformId1)

    const data = await this.client.get(`/erpOrder/erpOrder/saleReport/getBigChief2/1/${args.platformId}`, { params: { "seg1": flags.seg1 } })
    this.output(data)
  }
}
