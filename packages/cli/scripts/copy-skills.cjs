const { cpSync, rmSync, existsSync } = require('fs')
const { join } = require('path')

const src = join(__dirname, '../../../skills')
const dest = join(__dirname, '../skills')

if (!existsSync(src)) {
  console.error(`skills/ not found at ${src}`)
  process.exit(1)
}

if (existsSync(dest)) rmSync(dest, { recursive: true, force: true })
cpSync(src, dest, { recursive: true })
console.log(`skills/ copied to ${dest}`)
