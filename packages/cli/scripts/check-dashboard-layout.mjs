import { createServer } from 'node:http'
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { dirname, extname, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const cliRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dashboardRoot = resolve(cliRoot, '../../skills/references/dashboard/assets/commerce-dashboard')
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
}

const browserCandidates = [
  process.env.MBS_BROWSER_EXECUTABLE,
  process.env['ProgramFiles(x86)'] && `${process.env['ProgramFiles(x86)']}\\Microsoft\\Edge\\Application\\msedge.exe`,
  process.env.ProgramFiles && `${process.env.ProgramFiles}\\Microsoft\\Edge\\Application\\msedge.exe`,
  process.env.ProgramFiles && `${process.env.ProgramFiles}\\Google\\Chrome\\Application\\chrome.exe`,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean)
const executablePath = browserCandidates.find((candidate) => existsSync(candidate))

if (!executablePath) {
  throw new Error('No Chromium browser found. Set MBS_BROWSER_EXECUTABLE to an Edge, Chrome, or Chromium executable.')
}

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url || '/', 'http://127.0.0.1').pathname)
    const relativePath = pathname === '/' ? 'index.html' : pathname.slice(1)
    const target = resolve(dashboardRoot, relativePath)
    const allowedPrefix = `${dashboardRoot}${sep}`.toLowerCase()
    if (target.toLowerCase() !== dashboardRoot.toLowerCase() && !target.toLowerCase().startsWith(allowedPrefix)) {
      response.writeHead(403).end('Forbidden')
      return
    }
    const content = await readFile(target)
    response.writeHead(200, { 'Content-Type': mimeTypes[extname(target)] || 'application/octet-stream' }).end(content)
  } catch {
    response.writeHead(404).end('Not found')
  }
})

await new Promise((resolveListen) => server.listen(0, '127.0.0.1', resolveListen))
const address = server.address()
const pageUrl = `http://127.0.0.1:${address.port}`
const browser = await chromium.launch({ executablePath, headless: true })
const viewports = [
  { width: 1920, height: 1080 },
  { width: 1440, height: 900 },
  { width: 1366, height: 768 },
  { width: 1280, height: 720 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
]
const results = []

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport })
    const errors = []
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text())
    })
    page.on('pageerror', (error) => errors.push(error.message))
    await page.goto(pageUrl, { waitUntil: 'networkidle' })
    const layout = await page.evaluate(() => {
      const rect = (selector) => {
        const element = document.querySelector(selector)
        if (!element) return null
        const box = element.getBoundingClientRect()
        return { bottom: box.bottom, left: box.left, right: box.right, top: box.top }
      }
      return {
        bodyHeight: document.body.scrollHeight,
        bodyWidth: document.body.scrollWidth,
        centerColumn: rect('.column-center'),
        hero: rect('.hero-panel'),
        leftColumn: rect('.column-left'),
        primary: rect('.primary-kpi'),
        unit: rect('#primary-unit'),
        value: rect('#primary-value'),
        viewportHeight: window.innerHeight,
        viewportWidth: window.innerWidth,
      }
    })
    const violations = [...errors.map((error) => `browser-error:${error}`)]
    if (viewport.width >= 1181 && layout.bodyHeight > layout.viewportHeight + 1) {
      violations.push(`vertical-scroll:${layout.bodyHeight - layout.viewportHeight}px`)
    }
    if (layout.bodyWidth > layout.viewportWidth + 1) {
      violations.push(`horizontal-scroll:${layout.bodyWidth - layout.viewportWidth}px`)
    }
    if (!layout.hero || !layout.primary || !layout.unit || !layout.value) {
      violations.push('missing-kpi-element')
    } else {
      if (layout.primary.bottom > layout.hero.bottom + 1) violations.push('primary-overflows-hero')
      if (layout.unit.bottom > layout.primary.bottom + 1) violations.push('unit-overflows-primary')
      if (layout.unit.bottom > layout.hero.bottom + 1) violations.push('unit-overflows-hero')
    }
    if (viewport.width <= 760 && layout.centerColumn?.top > layout.leftColumn?.top) {
      violations.push('mobile-core-content-not-first')
    }
    results.push({ viewport: `${viewport.width}x${viewport.height}`, violations })
    await page.close()
  }
} finally {
  await browser.close()
  await new Promise((resolveClose, rejectClose) => server.close((error) => error ? rejectClose(error) : resolveClose()))
}

console.table(results.map((result) => ({
  viewport: result.viewport,
  status: result.violations.length === 0 ? 'PASS' : 'FAIL',
  violations: result.violations.join(', '),
})))

if (results.some((result) => result.violations.length > 0)) process.exitCode = 1
