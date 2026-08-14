// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ 2b24bbadfad4ce84aa520620923e3ca8ede96624f5d48fb303d1dc3fa41d84df
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimErpProductGetEmpByDepList extends MBSCommand {
  static description = '获取部门员工列表(提问人下拉)：进入商品咨询(留言)页面时自动调用，返回当前部门下的员工(提问人)姓名列表，前端用 art-template 渲染成"提问人"下拉框(#productName)的 <option> 选项。请求无任何业务参数(部门由后端依据登录态/默认部门判定)。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PimErpProductGetEmpByDepList)

    const data = await this.client.post('/erpProduct/erpProduct/product/getEmpByDepList', {})
    this.output(data)
  }
}
