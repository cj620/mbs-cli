import { Command } from '@oclif/core'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

export default class SkillsPath extends Command {
  static description = 'Show skill documentation directory path'

  static examples = ['mbs skills path']

  async run(): Promise<void> {
    await this.parse(SkillsPath)
    const skillsDir = join(this.config.root, 'skills')
    if (!existsSync(skillsDir)) {
      this.log(
        JSON.stringify({
          ok: false,
          error: {
            type: 'api',
            message: 'Skills directory not found',
            hint: `Expected at ${skillsDir}. Try reinstalling: npm install -g @mb-it-org/cli`,
          },
        }),
      )
      this.exit(1)
    }

    this.log(JSON.stringify({ ok: true, data: { path: skillsDir } }))
  }
}
