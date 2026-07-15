// AUTO-GENERATED FROM audit manifest. DO NOT EDIT.
// Source: manifests/mbs-api-manifest.json
// Manifest: 2026-05-20T00:00:00+08:00 @ bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484
import { Flags } from '@oclif/core'
import { MBSCommand } from '@mb-it-org/shared'

export default class PimInstudioPmsQueryTag extends MBSCommand {
  static description = '查询：package com.instudio.pms.controller;'

  static flags = {
    name: Flags.string({ description: '名称（字段名推断,语义待核实）' }),
    index: Flags.string({ description: '索引（字段名推断,语义待核实）', required: true }),
    oper: Flags.string({ description: '操作（字段名推断,语义待核实）', required: true }),
    tagType: Flags.string({ description: '标签类型（字段名推断,语义待核实）' }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(PimInstudioPmsQueryTag)

    const data = await this.client.post('/yypms/pms/tag/query', {}, { params: { "name": flags.name, "index": flags.index, "oper": flags.oper, "tag_type": flags.tagType } })
    this.output(data)
  }
}
