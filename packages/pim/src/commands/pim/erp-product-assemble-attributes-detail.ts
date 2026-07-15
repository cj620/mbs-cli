// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductAssembleAttributesDetail extends MBSCommand {
  static description = '组装SKU属性明细（assembleAttributesDetail）：新增SPU页面根据颜色(color)与尺寸(size)做笛卡尔组合，由后端组装并返回该SPU下的SKU明细列表（含SKU编号、颜色-尺寸属性、产品中文名、图片等），前端渲染到SKU明细表格供继续补充供应商/尺寸/采购价后保存。'

  static flags = {
    infoDefined: Flags.string({ description: '自定义信息，前端固定传空字符串' }),
    number: Flags.string({ description: '数量/编号占位，前端固定传空字符串' }),
    color: Flags.string({ description: '颜色(多颜色英文逗号拼接，来源#colors，中文逗号自动转英文)' }),
    size: Flags.string({ description: '尺寸(多尺寸英文逗号拼接，来源#sizes，中文逗号自动转英文)' }),
    spu: Flags.string({ description: 'SPU编号(来源#SPU，为空则前端拦截)', required: true }),
    skuname: Flags.string({ description: 'SPU名称(来源#spuName，为空则前端拦截)', required: true }),
    generateType: Flags.string({ description: '生成类型，仅当#supplieType==\'3\'时追加并固定传3' }),
    oldSpu: Flags.string({ description: '被淘汰旧SPU编号，仅当#EliminationSpuVal有值时追加(淘汰SPU重开发场景)' }),
    type: Flags.string({ description: '业务类型，仅当#price5==\'1\'(FBA)时追加并固定传\'FBA\'' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductAssembleAttributesDetail)

    const data = await this.client.post('/erpProduct/erpProduct/attributeDetail/assembleAttributesDetail', { "infoDefined": flags.infoDefined, "number": flags.number, "color": flags.color, "size": flags.size, "spu": flags.spu, "skuname": flags.skuname, "generateType": flags.generateType, "oldSpu": flags.oldSpu, "type": flags.type })
    this.output(data)
  }
}
