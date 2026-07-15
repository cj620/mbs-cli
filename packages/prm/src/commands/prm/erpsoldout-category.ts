// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PrmErpsoldoutCategory extends MBSCommand {
  static description = '侵权下架-分类(一级分类)下拉查询：侵权下架SKU列表页加载时调用，获取「一级分类」下拉选择框的可选分类列表（返回分类名称数组），用于渲染 #category 下拉框的 <option>。无请求参数。'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(PrmErpsoldoutCategory)

    const data = await this.client.post('/erpsoldout/erpsoldout/infringing/category', {})
    this.output(data)
  }
}
