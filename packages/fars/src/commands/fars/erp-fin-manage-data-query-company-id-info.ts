// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class FarsErpFinManageDataQueryCompanyIdInfo extends MBSCommand {
  static description = '公司ID信息查询：查询当前用户可见的全部公司列表（公司ID + 公司名称），前端模块首次加载时无参 POST 拉取并缓存为响应式 companyList，供各对账/明细页面将 companyId 翻译为公司名称（getComName）及作为公司下拉选项数据源。接口直接返回公司对象数组，无 code/obj 包装。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(FarsErpFinManageDataQueryCompanyIdInfo)

    const data = await this.client.post('/erpFinManageData/erpFinManageData/finance/queryCompanyIdInfo', {})
    this.output(data)
  }
}
