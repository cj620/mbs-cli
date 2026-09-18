import { Flags } from '@oclif/core'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { MBSCommand } from '@mb-it-org/shared'
import { loadPlan } from '../../plan-store.js'
import { executeExportTask } from '../../export-task.js'
import {
  createExportTask,
  fingerprintPlan,
  findIncompleteTasks,
  loadExportTask,
  type ExportTaskCheckpoint,
} from '../../task-store.js'
import { DEFAULT_MAX_RETRIES, DEFAULT_RETRY_BASE_MS, MAX_RETRIES } from '../../retry.js'

export default class ExportRun extends MBSCommand {
  static description = 'Execute a saved export plan and write rows to an .xlsx file. Run `mbs export plan` first.'

  static examples = [
    'mbs export run --plan plan_abc123',
    'mbs export run --plan plan_abc123 --out ./orders.xlsx --sheet Orders',
    'mbs export run --plan plan_abc123 --task export_0123456789abcdef --resume',
    'mbs export run --plan plan_abc123 --task export_0123456789abcdef --restart',
  ]

  static flags = {
    plan: Flags.string({ required: true, description: 'Plan id returned by `mbs export plan`' }),
    out: Flags.string({ description: 'Output .xlsx path (default: tmp dir)' }),
    sheet: Flags.string({ description: 'Sheet name for a new/restarted task (default: Sheet1)' }),
    task: Flags.string({ description: 'Existing export task id used with --resume or --restart' }),
    resume: Flags.boolean({ description: 'Continue an existing task from its last durable checkpoint' }),
    restart: Flags.boolean({ description: 'Create a new full task while preserving the previous task evidence' }),
    'max-retries': Flags.integer({
      description: `Transient retries after the first attempt (default ${DEFAULT_MAX_RETRIES}, max ${MAX_RETRIES})`,
    }),
    'retry-base-ms': Flags.integer({
      description: `Initial exponential-backoff delay in milliseconds (default ${DEFAULT_RETRY_BASE_MS})`,
    }),
  }

  /**
   * Resolves an explicit new/resume/restart decision, announces durable task files, and runs the export.
   *
   * @returns Promise resolved after local result metadata is emitted.
   * @throws Error For ambiguous recovery choices, task/plan mismatches, invalid retry bounds, or execution failures.
   */
  async run(): Promise<void> {
    const { flags } = await this.parse(ExportRun)
    if (flags.resume && flags.restart) throw new Error('--resume and --restart are mutually exclusive')
    if (flags.resume && !flags.task) throw new Error('--resume requires --task <taskId>')
    if (flags.resume && (
      flags.out
      || flags.sheet
      || flags['max-retries'] !== undefined
      || flags['retry-base-ms'] !== undefined
    )) {
      throw new Error('--resume reuses the saved output and retry policy; do not pass --out, --sheet, --max-retries, or --retry-base-ms')
    }
    if (flags.task && !flags.resume && !flags.restart) {
      throw new Error('--task must be used with either --resume or --restart')
    }

    const existingTask = flags.task ? loadExportTask(flags.task) : undefined
    if (existingTask && existingTask.planId !== flags.plan) {
      throw new Error(`Export task ${existingTask.taskId} belongs to plan ${existingTask.planId}, not ${flags.plan}`)
    }
    const plan = loadPlan(flags.plan, { allowExpired: flags.resume })
    const task = flags.resume
      ? existingTask as ExportTaskCheckpoint
      : this.createNewTask(flags, plan, existingTask)
    const startedAt = Date.now()

    this.logToStderr(JSON.stringify({
      event: flags.resume ? 'task_resuming' : 'task_initialized',
      taskId: task.taskId,
      logFile: task.logFile,
      checkpointFile: task.checkpointFile,
      stagingFile: task.stagingFile,
      outputFile: task.outputFile,
      maxRetries: task.maxRetries,
      retryBaseMs: task.retryBaseMs,
    }))

    const result = await executeExportTask({
      client: this.client,
      plan,
      task,
      resume: flags.resume,
      onEvent: (event) => this.logToStderr(JSON.stringify(event)),
    })

    this.output({
      planId: plan.id,
      taskId: result.task.taskId,
      file: result.filePath,
      rows: result.rows,
      columns: plan.columns.length,
      logFile: result.task.logFile,
      checkpointFile: result.task.checkpointFile,
      durationMs: Date.now() - startedAt,
    })
  }

  /**
   * Creates a new task only after checking for an unfinished predecessor and validating retry bounds.
   *
   * @param flags Parsed run flags.
   * @param plan Confirmed immutable export plan.
   * @param restartFrom Optional predecessor explicitly named with `--restart`.
   * @returns Fully initialized task whose durable paths already exist.
   */
  private createNewTask(
    flags: Record<string, unknown>,
    plan: ReturnType<typeof loadPlan>,
    restartFrom?: ExportTaskCheckpoint,
  ): ExportTaskCheckpoint {
    if (!flags.restart) {
      const incomplete = findIncompleteTasks(plan.id)
      if (incomplete.length > 0) {
        const candidate = incomplete[0] as ExportTaskCheckpoint
        throw new Error(
          `Unfinished export task ${candidate.taskId} has ${candidate.rowsStaged} durable rows. `
          + `Choose: mbs export run --plan ${plan.id} --task ${candidate.taskId} --resume `
          + `or mbs export run --plan ${plan.id} --task ${candidate.taskId} --restart.`,
        )
      }
    }
    const maxRetries = typeof flags['max-retries'] === 'number'
      ? flags['max-retries']
      : DEFAULT_MAX_RETRIES
    const retryBaseMs = typeof flags['retry-base-ms'] === 'number'
      ? flags['retry-base-ms']
      : DEFAULT_RETRY_BASE_MS
    if (!Number.isInteger(maxRetries) || maxRetries < 0 || maxRetries > MAX_RETRIES) {
      throw new Error(`--max-retries must be an integer between 0 and ${MAX_RETRIES}`)
    }
    if (!Number.isInteger(retryBaseMs) || retryBaseMs < 0 || retryBaseMs > 60_000) {
      throw new Error('--retry-base-ms must be an integer between 0 and 60000')
    }
    const outPath = typeof flags.out === 'string'
      ? flags.out
      : join(tmpdir(), `mbs-export-${plan.id}-${Date.now()}.xlsx`)
    const sheetName = typeof flags.sheet === 'string' ? flags.sheet : restartFrom?.sheetName ?? 'Sheet1'
    return createExportTask({
      planId: plan.id,
      planFingerprint: fingerprintPlan(plan),
      outputFile: outPath,
      sheetName,
      maxRetries,
      retryBaseMs,
    })
  }
}
