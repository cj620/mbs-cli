// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class OmsErpMobileSubmitInfringingInfo extends MBSCommand {
  static description = '提交侵权信息：移动端「提交侵权」页提交侵权处理：勾选自动移除图片/自动移除关键词/自动下架，填写侵权SKU、侵权关键词、勾选侵权平台、填写描述（不少于6字），提交后端执行侵权处理。提交前二次确认；侵权平台、描述为必填校验。'

  static flags = {
    replacePicture: Flags.string({ description: '自动移除图片。来源复选框 #replacePicture：勾选(checked)=0，未勾选=1' }),
    replaceInfringingWord: Flags.string({ description: '自动移除关键词。来源复选框 #InfringingWord：勾选(checked)=0，未勾选=1' }),
    soldOut: Flags.string({ description: '自动下架。来源复选框 #soldOut：勾选(checked)=0，未勾选=1' }),
    skus: Flags.string({ description: '侵权SKU，多个以英文逗号分隔。来源文本域 #skus（与侵权关键词至少填一个）' }),
    infringingWord: Flags.string({ description: '侵权关键词，英文、多个以逗号分隔（用于移除标题包含词，不写中文）。来源文本域 #infringingWord（与侵权SKU至少填一个）' }),
    platformIds: Flags.string({ description: '侵权平台ID集合，多个以英文逗号拼接。来源 .platform 元素 value（勾选 name=checkbox2 复选框的 platformId join 而成）。为空中断提交', required: true }),
    description: Flags.string({ description: '侵权描述/原因来源。来源文本域 #description，长度需 ≥ 6 字符，否则中断提交', required: true }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(OmsErpMobileSubmitInfringingInfo)

    const data = await this.client.post('/erpMobile/erpMobile/infringing/submitInfringingInfo', { "replacePicture": flags.replacePicture, "replaceInfringingWord": flags.replaceInfringingWord, "soldOut": flags.soldOut, "skus": flags.skus, "infringingWord": flags.infringingWord, "platformIds": flags.platformIds, "description": flags.description })
    this.output(data)
  }
}
