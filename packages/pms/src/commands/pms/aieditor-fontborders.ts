// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PmsAieditorFontborders extends MBSCommand {
  static description = '字体特效(边框)样式列表查询：拉取字体特效/边框样式集合(Strapi collection)。前端右侧属性面板展示样式缩略图，点击后把样式配置(json:填充/描边/阴影等)应用到画布文本对象。请求为Strapi标准查询参数(populate展开缩略图、pagination分页)，响应为Strapi列表结构，经前端拦截器拍平后使用。'

  static flags = {
    populateImg: Flags.string({ description: 'populate 子项，取值 \'*\'，展开缩略图媒体字段 img 的全部属性(url/formats)' }),
    paginationPage: Flags.string({ description: '页码，字体特效面板固定1；find()携带pageSize入参时框架回退为1' }),
    paginationPageSize: Flags.string({ description: '每页条数，字体特效面板取100；find(data,pageSize)携带第二参时框架回退为50' }),
    pageNum: Flags.string({ description: '顶层页码(仅新客户端冗余传参，固定1)' }),
    pageSize: Flags.string({ description: '顶层每页条数(仅新客户端冗余顶层传参，固定50/组件100，与pagination.pageSize并存)' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PmsAieditorFontborders)

    const data = await this.client.get('/api/fontborders', { params: {} })
    this.output(data)
  }
}
