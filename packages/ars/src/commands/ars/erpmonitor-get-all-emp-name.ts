// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class ArsErpmonitorGetAllEmpName extends MBSCommand {
  static description = '查询市场部所有在职人员：查询市场部(department_id=54)全部在职(status=1)员工姓名列表，用于页面「市场部在职人员」下拉/看板渲染。后端SQL：select employee_name from hr_employee where department_id =54 and status =1。前端调用函数已标注@deprecated。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(ArsErpmonitorGetAllEmpName)

    const data = await this.client.post('/erpmonitor/erpmonitor/hotProductMonitor/getAllEmpName', {})
    this.output(data)
  }
}
