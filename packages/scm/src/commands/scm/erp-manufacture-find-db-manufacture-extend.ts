// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ScmErpManufactureFindDbManufactureExtend extends MBSCommand {
  static description = '供应商扩展信息(详情)查询：供应商信息详情页加载入口：依据 URL 上的 sequenceid(供应商序号ID) 查询单个供应商的扩展信息，返回数组 obj(取首元素 obj[0])，包含基本信息、采购信息、定做信息、经营信息、详情描述、交易信用记录、采购评价(发货时长/涨跌价采购单)等数十项字段，供详情页渲染与编辑回填。'

  static flags = {
    sequenceid: Flags.string({ description: '供应商序号ID(主键)。取自浏览器 URL 查询串 GetQueryString(\'sequenceid\')，仅当存在该参数时才发起查询', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(ScmErpManufactureFindDbManufactureExtend)

    const data = await this.client.post('/erpManufacture/erpManufacture/manufactureExtendController/findDbManufactureExtend', { "sequenceid": flags.sequenceid })
    this.output(data)
  }
}
