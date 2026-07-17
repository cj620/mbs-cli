import { existsSync, readFileSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../../../..')
const dashboardRoot = resolve(repoRoot, 'skills/references/dashboard')

const read = (relativePath: string): string =>
  readFileSync(resolve(repoRoot, relativePath), 'utf8')

describe('dashboard skill bundle', () => {
  it('registers dashboard intents separately from database queries', () => {
    const router = read('skills/SKILL.md')
    const manifest = JSON.parse(read('skills/manifest.json')) as {
      modules: Array<{ keywords: string[]; name: string; skill: string }>
    }
    const dashboard = manifest.modules.find((module) => module.name === 'dashboard')
    const database = manifest.modules.find((module) => module.name === 'database')

    expect(router).toContain('references/dashboard/SKILL.md')
    expect(router).toContain('数据分析 / 数据分析展示')
    expect(dashboard?.skill).toBe('references/dashboard/SKILL.md')
    expect(dashboard?.keywords).toContain('数据分析')
    expect(dashboard?.keywords).toContain('专题分析页')
    expect(database?.keywords).not.toContain('数据分析')
  })

  it('defines the three delivery modes and compact Python analysis', () => {
    const skill = read('skills/references/dashboard/SKILL.md')

    expect(skill).toContain('| 数据分析结果 |')
    expect(skill).toContain('一次性专题分析页')
    expect(skill).toContain('长期固定看板')
    expect(skill).toContain('Python')
    expect(skill).toContain('MBS CLI')
    expect(skill).toContain('assets/commerce-dashboard')
    expect(skill).toContain('仅用于公司内部')
  })

  it('bundles a local, responsive dashboard with explicit UI states', () => {
    const index = read('skills/references/dashboard/assets/commerce-dashboard/index.html')
    const app = read('skills/references/dashboard/assets/commerce-dashboard/app.js')
    const styles = read('skills/references/dashboard/assets/commerce-dashboard/styles.css')
    const data = read('skills/references/dashboard/assets/commerce-dashboard/data.js')

    expect(index).toContain('name="viewport"')
    expect(index).toContain('./vendor/echarts.min.js')
    expect(index.toLowerCase()).not.toContain('jquery')
    expect(index.toLowerCase()).not.toContain('http-equiv="refresh"')
    expect(index).toContain('id="loading"')
    expect(index).toContain('id="error-panel"')
    expect(index).toContain('empty-state')
    expect(app).toContain('window.loadMbsDashboardData')
    expect(styles).toContain('@media')
    expect(data).toContain('示例数据')

    expect(styles).not.toContain('./images/bg.jpg')
    expect(styles).toContain('./images/head_bg.png')
    expect(read('skills/references/dashboard/assets/commerce-dashboard/THIRD_PARTY_NOTICES.md')).toContain(
      'Apache ECharts 4.0.4',
    )

    for (const asset of [
      'images/head_bg.png',
      'vendor/echarts.min.js',
      'vendor/ECHARTS-LICENSE.txt',
    ]) {
      const assetPath = resolve(dashboardRoot, 'assets/commerce-dashboard', asset)
      expect(existsSync(assetPath)).toBe(true)
      expect(statSync(assetPath).size).toBeGreaterThan(0)
    }
  })
})
