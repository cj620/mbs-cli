// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsFindSpuImport extends MBSCommand {
  static description = '查看导入商品记录：查看导入商品记录'

  static flags = {
    id: Flags.integer({ description: 'ID（字段名推断,语义待核实）' }),
    fileNameSrc: Flags.string({ description: '上传源文件名' }),
    fileNameNew: Flags.string({ description: '上传后文件名' }),
    status: Flags.integer({ description: '0:未导入1:导入中未解析2:导入中已解析3:部分成功4:导入成功5:导入失败' }),
    url1: Flags.string({ description: 'linux路径' }),
    url2: Flags.string({ description: '页面路径' }),
    descr: Flags.string({ description: '描述（字段名推断,语义待核实）' }),
    createBy: Flags.string({ description: '创建人（字段名推断,语义待核实）' }),
    createById: Flags.string({ description: '创建人ID（字段名推断,语义待核实）' }),
    createTime: Flags.string({ description: '创建时间（字段名推断,语义待核实）' }),
    finishTime: Flags.string({ description: '完成时间（字段名推断,语义待核实）' }),
    manageEmp: Flags.string({ description: '管理EMP（字段名推断,语义待核实） (comma-separated)' }),
    startIndex: Flags.integer({ description: '开始索引（字段名推断,语义待核实）' }),
    pageSize: Flags.integer({ description: '每页条数（字段名推断,语义待核实）' }),
    currentPage: Flags.integer({ description: '当前页码（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsFindSpuImport)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/yypms/pms/spu/findSpuImport', { "id": flags.id, "fileNameSrc": flags.fileNameSrc, "fileNameNew": flags.fileNameNew, "status": flags.status, "url1": flags.url1, "url2": flags.url2, "descr": flags.descr, "createBy": flags.createBy, "createById": flags.createById, "createTime": flags.createTime, "finishTime": flags.finishTime, "manageEmp": toArray(flags.manageEmp, 'string'), "startIndex": flags.startIndex, "pageSize": flags.pageSize, "currentPage": flags.currentPage })
    this.output(data)
  }
}
