// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductExportHwcList extends MBSCommand {
  static description = '真实海外仓跟踪单-导出：「真实海外仓跟踪单」页面的导出接口。以与列表查询(trackingListHwcList)完全相同的筛选条件异步生成 Excel 导出文件。前端 myAxios.post(..., {download: true}) 触发浏览器下载并提示\'已创建下载\'。响应为 Excel 文件流，下表 response 为导出文件数据列(与列表行字段同源)。'

  static flags = {
    page: Flags.string({ description: '当前页码，导出时固定传 1', required: true }),
    dateType: Flags.string({ description: '时间类型(枚举)。1=创建时间;2=更新时间。来源下拉 #dateType' }),
    startDate: Flags.string({ description: '起始时间(按 dateType 对应创建/更新时间，yyyy-MM-dd)。来源日期控件 #startDate' }),
    endDate: Flags.string({ description: '结束时间(yyyy-MM-dd)。来源日期控件 #endDate' }),
    groupId: Flags.string({ description: '货件编号。来源输入框 #groupId' }),
    chiefList: Flags.string({ description: '酋长(leader)ID列表，字符串数组。取 #bigChif 值按逗号拆分(控件已注释，实际传空数组) (comma-separated)' }),
    operList: Flags.string({ description: '店长(组员)列表，字符串数组。取 #shopmanger 值按逗号拆分(控件已注释，实际传空数组) (comma-separated)' }),
    fbaStatus: Flags.string({ description: '货件状态列表，字符串数组。取 #fbaStatus 值按逗号拆分。枚举:运输中/上架中/已上架/已取消 (comma-separated)' }),
    shopIds: Flags.string({ description: '海外仓店铺ID列表，字符串数组。取 #shopContent 值按逗号拆分(选项来自 getHwcList 的 shopId/shopName) (comma-separated)' }),
    sku: Flags.string({ description: 'SKU。来源输入框 #sku' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductExportHwcList)

    const toArray = (value: string | undefined, itemType = 'string'): unknown[] | undefined => {
      if (value === undefined) return undefined
      const items = value.split(',').map((item) => item.trim()).filter(Boolean)
      if (itemType === 'integer' || itemType === 'number') return items.map((item) => Number(item))
      return items
    }

    const data = await this.client.post('/erpProduct/erpProduct/hwcProduct/exportHwcList', { "page": flags.page, "dateType": flags.dateType, "startDate": flags.startDate, "endDate": flags.endDate, "groupId": flags.groupId, "chiefList": toArray(flags.chiefList, 'string'), "operList": toArray(flags.operList, 'string'), "fbaStatus": toArray(flags.fbaStatus, 'string'), "shopIds": toArray(flags.shopIds, 'string'), "sku": flags.sku })
    this.output(data)
  }
}
