import { Command, Flags } from '@oclif/core'
import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

type Target = 'auto' | 'claude' | 'codex'

type Platform = {
  name: 'claude' | 'codex'
  skillsDir: string
}

const PLATFORMS: Platform[] = [
  { name: 'claude', skillsDir: join(homedir(), '.claude', 'skills') },
  { name: 'codex', skillsDir: join(homedir(), '.codex', 'skills') },
]

function getPlatforms(target: Target): Platform[] {
  if (target === 'auto') {
    return PLATFORMS.filter((platform) => existsSync(join(platform.skillsDir, '..')))
  }

  return PLATFORMS.filter((platform) => platform.name === target)
}

export default class SkillsInstall extends Command {
  static description = 'Install bundled MBS skill docs into Claude Code or Codex'

  static examples = [
    'mbs skills install',
    'mbs skills install --target claude',
    'mbs skills install --target codex',
    'mbs skills install --dry-run',
  ]

  static flags = {
    target: Flags.string({
      description: 'Agent platform to install into',
      options: ['auto', 'claude', 'codex'],
      default: 'auto',
    }),
    'dry-run': Flags.boolean({
      description: 'Preview install destinations without writing files',
      default: false,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(SkillsInstall)
    const target = flags.target as Target
    const sourceDir = join(this.config.root, 'skills')

    if (!existsSync(join(sourceDir, 'SKILL.md'))) {
      this.log(
        JSON.stringify({
          ok: false,
          error: {
            type: 'api',
            message: 'Bundled skills directory not found',
            hint: `Expected ${join(sourceDir, 'SKILL.md')}. Try reinstalling @mb-it-org/cli.`,
          },
        }),
      )
      this.exit(1)
      return
    }

    const platforms = getPlatforms(target)
    if (platforms.length === 0) {
      this.log(
        JSON.stringify({
          ok: false,
          error: {
            type: 'validation',
            message: 'No supported agent platform detected',
            hint: 'Use --target claude or --target codex to create the target skill directory explicitly.',
          },
        }),
      )
      this.exit(1)
      return
    }

    const installs = platforms.map((platform) => ({
      platform: platform.name,
      destination: join(platform.skillsDir, 'mbs'),
      skillFile: join(platform.skillsDir, 'mbs', 'SKILL.md'),
    }))

    if (flags['dry-run']) {
      this.log(JSON.stringify({ ok: true, data: { source: sourceDir, installs } }))
      return
    }

    try {
      for (const install of installs) {
        mkdirSync(install.destination, { recursive: true })
        cpSync(sourceDir, install.destination, { recursive: true, force: true })
      }
    } catch (error) {
      this.log(
        JSON.stringify({
          ok: false,
          error: {
            type: 'api',
            message: error instanceof Error ? error.message : 'Failed to install skill files',
            hint: 'Check filesystem permissions and retry with --target claude or --target codex.',
          },
        }),
      )
      this.exit(1)
      return
    }

    this.log(JSON.stringify({ ok: true, data: { source: sourceDir, installs } }))
  }
}
