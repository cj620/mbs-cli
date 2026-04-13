import { Plugin } from '@oclif/core'

// Import all commands so they are included in the bundle
// import './<domain>/<action>.js'

export default class DomainPlugin extends Plugin {
  // Replace with the actual topic name, e.g. 'orders', 'procurement'
  static readonly topic = '<domain>'
  static readonly description = '<One-line description of what this skill covers>'

  async loadCommands(): Promise<void> {
    // Commands are auto-loaded via the glob pattern in package.json
  }
}
