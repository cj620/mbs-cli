import { Command, Flags } from '@oclif/core'
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  renameSync,
  rmSync,
} from 'node:fs'
import { homedir } from 'node:os'
import { basename, dirname, join, resolve } from 'node:path'

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

/**
 * Replaces one agent's MBS skill directory without retaining stale endpoint files.
 *
 * <p>The source is copied to a sibling staging directory first. An existing
 * destination is renamed to a temporary backup and restored if activation
 * fails. The destination must be named exactly `mbs`, which prevents callers
 * from using this helper as a general recursive replacement primitive.</p>
 *
 * @param sourceDir Bundled skill directory containing a root `SKILL.md`.
 * @param destination Exact agent skill destination ending in `/mbs`.
 * @throws Error when paths are invalid or staging, activation, cleanup, or rollback fails.
 */
export function replaceSkillDirectory(sourceDir: string, destination: string): void {
  const resolvedSource = resolve(sourceDir)
  const resolvedDestination = resolve(destination)
  if (basename(resolvedDestination) !== 'mbs' || !existsSync(join(resolvedSource, 'SKILL.md'))) {
    throw new Error('Invalid MBS skill source or destination')
  }

  const parent = dirname(resolvedDestination)
  mkdirSync(parent, { recursive: true })
  const staging = mkdtempSync(join(parent, '.mbs-install-'))
  const backup = join(parent, `.mbs-backup-${process.pid}-${Date.now()}`)
  let previousMoved = false
  try {
    cpSync(resolvedSource, staging, { recursive: true, force: true })
    if (!existsSync(join(staging, 'SKILL.md'))) {
      throw new Error('Staged MBS skill is incomplete')
    }
    if (existsSync(resolvedDestination)) {
      renameSync(resolvedDestination, backup)
      previousMoved = true
    }
    renameSync(staging, resolvedDestination)
    if (previousMoved) rmSync(backup, { recursive: true, force: true })
  } catch (error) {
    if (existsSync(staging)) rmSync(staging, { recursive: true, force: true })
    if (!existsSync(resolvedDestination) && previousMoved && existsSync(backup)) {
      renameSync(backup, resolvedDestination)
    }
    throw error
  }
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

  /**
   * Installs the bundled domain-only MBS skill into each selected agent.
   *
   * <p>Dry-run reports destinations without writing. A real install uses
   * {@link replaceSkillDirectory} so files removed from a newer bundle cannot
   * survive from an older installation. Failures produce the existing
   * structured CLI error and leave the previous directory restored when
   * activation did not complete.</p>
   */
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
        replaceSkillDirectory(sourceDir, install.destination)
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
