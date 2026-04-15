import { Command, Flags } from '@oclif/core'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

export default class SkillsShow extends Command {
  static description = 'Show skill documentation content'

  static examples = ['mbs skills show', 'mbs skills show --file references/global.md']

  static flags = {
    file: Flags.string({
      description: 'Relative path within skills/ directory',
      default: 'SKILL.md',
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(SkillsShow)
    const filePath = join(this.config.root, 'skills', flags.file)
    if (!existsSync(filePath)) {
      this.log(
        JSON.stringify({
          ok: false,
          error: {
            type: 'api',
            message: `File not found: ${flags.file}`,
            hint: 'Run mbs skills path to locate the skills directory and browse available files',
          },
        }),
      )
      this.exit(1)
    }

    const content = readFileSync(filePath, 'utf8')
    this.log(JSON.stringify({ ok: true, data: { file: flags.file, content } }))
  }
}
