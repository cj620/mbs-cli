import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const workflow = readFileSync(new URL('../.github/workflows/release.yml', import.meta.url), 'utf8')

assert.match(
  workflow,
  /pnpm deploy --filter @mb-it-org\/cli --legacy \${{\s*runner\.temp\s*}}\/mbs-deploy/,
  'release workflow must create a pnpm deploy bundle for @mb-it-org/cli before npm publish'
)

assert.match(
  workflow,
  /fs\.cpSync\(src,\s*dest,\s*\{\s*recursive:\s*true,\s*dereference:\s*true\s*\}\)/,
  'release workflow must dereference workspace symlinks when copying packages into .ws'
)

assert.match(
  workflow,
  /rewriteWorkspaceRefs\(wsPkg,\s*workspaceFileRefs\)/,
  'release workflow must rewrite workspace:* references inside copied .ws package manifests'
)

assert.match(
  workflow,
  /registry-url:\s*'https:\/\/registry\.npmjs\.org'/,
  'release workflow must configure the npm registry before publishing'
)

assert.match(
  workflow,
  /NODE_AUTH_TOKEN:\s*\${{\s*secrets\.NPM_TOKEN\s*}}/,
  'release workflow must publish with the repository NPM_TOKEN secret'
)

assert.match(
  workflow,
  /npm publish(?:\s+--access public)?/,
  'release workflow must publish @mb-it-org/cli to npm'
)

assert.match(
  workflow,
  /- name: Validate npm bundle installability/,
  'release workflow must validate the npm bundle before publishing'
)

assert.match(
  workflow,
  /working-directory:\s*\${{\s*runner\.temp\s*}}\/mbs-deploy/,
  'release workflow must publish from the processed deploy bundle rather than packages/cli'
)

assert.doesNotMatch(
  workflow,
  /- name: Publish @mb-it-org\/cli to npm[\s\S]*working-directory:\s*packages\/cli/,
  'release workflow must not publish directly from packages/cli'
)

assert.match(
  workflow,
  /npm pack/,
  'release workflow must create an npm tarball from the processed bundle before publishing'
)

assert.match(
  workflow,
  /npm install --global .*PACK_FILE/,
  'release workflow must simulate installing the packed tarball before publishing'
)

assert.match(
  workflow,
  /"\$TEST_PREFIX\/bin\/mbs"\s+skills path/,
  'release workflow must verify the installed npm tarball exposes `mbs skills path`'
)

assert.match(
  workflow,
  /"\$TEST_PREFIX\/bin\/mbs"\s+skills show/,
  'release workflow must verify the installed npm tarball exposes `mbs skills show`'
)

assert.doesNotMatch(
  workflow,
  /cp -r skills\/ \$\{\{\s*runner\.temp\s*\}\}\/mbs-deploy\/skills\//,
  'release workflow must not recursively copy skills/ into an existing skills/ target because that creates skills/skills in the npm tarball'
)

assert.match(
  workflow,
  /publish bundle must remove pnpm-lock\.yaml before npm publish/,
  'release workflow must fail fast if pnpm-lock.yaml survives into the publish bundle'
)

assert.match(
  workflow,
  /bundledDependencies/,
  'release workflow must convert internal workspace packages into bundled dependencies for npm publish'
)

assert.match(
  workflow,
  /node .*scripts\/prune-optional-platform-deps\.cjs \./,
  'release workflow must prune unsupported optional dependencies before generating npm shrinkwrap'
)

assert.match(
  workflow,
  /node .*scripts\/materialize-bundled-workspace-deps\.cjs \./,
  'release workflow must materialize bundled workspace dependencies before npm publish'
)

assert.match(
  workflow,
  /node .*scripts\/materialize-bundled-workspace-deps\.cjs \.[\s\S]*rm -f npm-shrinkwrap\.json package-lock\.json[\s\S]*npm shrinkwrap --ignore-scripts/,
  'release workflow must regenerate npm shrinkwrap after materializing bundled workspace dependencies so bundled links stop pointing at .ws'
)

assert.doesNotMatch(
  workflow,
  /oclif pack tarballs|actions\/upload-artifact|actions\/download-artifact|softprops\/action-gh-release|files:\s*dist\/\*\.tar\.gz/,
  'release workflow must not package or upload installer artifacts'
)

assert.match(
  workflow,
  /rm -f pnpm-lock\.yaml/,
  'release workflow must remove pnpm-lock.yaml so oclif re-installs from npm shrinkwrap instead of pnpm workspace links'
)

assert.match(
  workflow,
  /pkg\.dependencies\?\.playwright/,
  'release workflow must reject publish manifests that still ship playwright as a production dependency'
)

assert.match(
  workflow,
  /pkg\.dependencies\?\.\['playwright-core'\]/,
  'release workflow must require playwright-core in the publish manifest'
)

assert.match(
  workflow,
  /npm-shrinkwrap\.json must not include playwright as a production dependency/,
  'release workflow must reject shrinkwraps that still contain playwright'
)

assert.doesNotMatch(
  workflow,
  /- name: Validate npm bundle installability[\s\S]*shrinkwrap still contains bundled workspace link entries/,
  'release workflow must not reject bundled workspace link entries before the materialize step rewrites node_modules and regenerates shrinkwrap'
)

assert.match(
  workflow,
  /npm view @mb-it-org\/cli version --json/,
  'release workflow must check the published version for @mb-it-org/cli before publishing'
)

assert.doesNotMatch(
  workflow,
  /@mbs\/cli/,
  'release workflow should not keep publishing or checking deprecated legacy package names'
)

assert.match(
  workflow,
  /- name: Publish @mb-it-org\/cli to npm[\s\S]*- name: Notify DingTalk release/,
  'release workflow must notify DingTalk only after npm publish succeeds'
)

assert.match(
  workflow,
  /- name: Notify DingTalk release[\s\S]*continue-on-error:\s*true/,
  'DingTalk notification must not fail the release workflow'
)

assert.match(
  workflow,
  /- name: Notify DingTalk release[\s\S]*timeout-minutes:\s*1/,
  'DingTalk notification must not hang the release workflow'
)

assert.match(
  workflow,
  /DINGTALK_WEBHOOK:\s*\${{\s*secrets\.DINGTALK_WEBHOOK\s*}}/,
  'DingTalk notification must read the webhook from a GitHub secret'
)

assert.match(
  workflow,
  /DINGTALK_SECRET:\s*\${{\s*secrets\.DINGTALK_SECRET\s*}}/,
  'DingTalk notification must read the signing secret from a GitHub secret'
)

assert.match(
  workflow,
  /DingTalk notification skipped: DINGTALK_WEBHOOK or DINGTALK_SECRET is not configured/,
  'DingTalk notification must skip cleanly when notification secrets are missing'
)

assert.match(
  workflow,
  /msgtype:\s*'markdown'/,
  'DingTalk notification must send a Markdown message'
)

const dingTalkNotificationStep = workflow.match(/- name: Notify DingTalk release[\s\S]*$/)?.[0] || ''

assert.match(
  dingTalkNotificationStep,
  /const version = process\.env\.GITHUB_REF_NAME \|\| 'unknown'/,
  'DingTalk notification title must use the release tag as the published version'
)

assert.match(
  dingTalkNotificationStep,
  /const title = `MBS-CLI \$\{version\} \\u5df2\\u53d1\\u5e03`/,
  'DingTalk notification title must include the MBS-CLI version and published wording'
)

assert.match(
  dingTalkNotificationStep,
  /`### \$\{title\}`/,
  'DingTalk notification must include a visible Markdown title in the message body'
)

assert.match(
  dingTalkNotificationStep,
  /\*\*\$\{releaseTimeLabel\}\*\*\\uff1a\$\{releaseTime\}/,
  'DingTalk notification must include the release time label without relying on non-ASCII runtime source'
)

assert.match(
  dingTalkNotificationStep,
  /\*\*\$\{updatePromptLabel\}\*\*\\uff1a\$\{updatePrompt\}/,
  'DingTalk notification must render the update prompt label as Markdown'
)

assert.match(
  dingTalkNotificationStep,
  /\\u5e2e\\u6211\\u628ambs\\u66f4\\u65b0\\u5230\\u6700\\u65b0/,
  'DingTalk notification must tell users what prompt to use without relying on non-ASCII runtime source'
)

assert.match(
  dingTalkNotificationStep,
  /\\u5b89\\u88c5\\u63d0\\u793a\\u8bcd[\s\S]*https:\/\/github\.com\/cj620\/mbs-cli\/blob\/master\/README\.md/,
  'DingTalk notification must include the README URL in plain text for copying'
)

assert.doesNotMatch(
  dingTalkNotificationStep,
  /\[README\.md\]\(\$\{readmeUrl\}\)/,
  'DingTalk notification must not hide the README URL behind link text'
)

assert.match(
  dingTalkNotificationStep,
  /\\u66f4\\u65b0\\u65e5\\u5fd7[\s\S]*https:\/\/github\.com\/cj620\/mbs-cli\/commits\/master\//,
  'DingTalk notification must include the requested changelog link'
)

assert.match(
  dingTalkNotificationStep,
  /\\u6765\\u81ea[\s\S]*GitHub Release \\u5de5\\u4f5c\\u6d41/,
  'DingTalk notification must include a concise source footer'
)

assert.doesNotMatch(
  dingTalkNotificationStep,
  /`> \$\{sourceLabel\}/,
  'DingTalk notification must avoid blockquote footers'
)

assert.doesNotMatch(
  dingTalkNotificationStep,
  /包名|仓库|提交|最新版本|升级方式|查看当前版本|如暂时|packageUrl|runUrl|GITHUB_REPOSITORY|GITHUB_SHA|GITHUB_RUN_ID|RELEASE_VERSION/,
  'DingTalk notification must not expose unnecessary release details to business users'
)

const cliPackage = readFileSync(new URL('../packages/cli/package.json', import.meta.url), 'utf8')
const cliGitignore = readFileSync(new URL('../packages/cli/.gitignore', import.meta.url), 'utf8')
const orgPackage = readFileSync(new URL('../packages/org/package.json', import.meta.url), 'utf8')
const sharedPackage = readFileSync(new URL('../packages/shared/package.json', import.meta.url), 'utf8')

assert.match(
  cliPackage,
  /"publishConfig":\s*\{[\s\S]*"access":\s*"public"/,
  'packages/cli/package.json must declare public npm publish access'
)

assert.match(
  cliPackage,
  /"name":\s*"@mb-it-org\/cli"/,
  'packages/cli/package.json must publish the @mb-it-org/cli package name'
)

assert.doesNotMatch(
  cliPackage,
  /"playwright":\s*"/,
  'packages/cli/package.json must not keep playwright as a production dependency'
)

assert.match(
  cliPackage,
  /"playwright-core":\s*"/,
  'packages/cli/package.json must use playwright-core as the production browser automation dependency'
)

assert.match(
  cliPackage,
  /"files":\s*\[[\s\S]*"skills"/,
  'packages/cli/package.json must publish the bundled skills docs directory so `mbs skills show` works after npm install'
)

assert.match(
  cliGitignore,
  /^\/skills\/$/m,
  'packages/cli/.gitignore must ignore only the built top-level skills directory'
)

assert.doesNotMatch(
  cliGitignore,
  /^skills\/$/m,
  'packages/cli/.gitignore must not ignore every nested skills/ directory because that hides src/commands/skills'
)

assert.match(
  cliPackage,
  /"@mb-it-org\/org":\s*"workspace:\*"/,
  'packages/cli/package.json must depend on the renamed @mb-it-org/org workspace package'
)

assert.match(
  cliPackage,
  /"@mb-it-org\/shared":\s*"workspace:\*"/,
  'packages/cli/package.json must depend on the renamed @mb-it-org/shared workspace package'
)

assert.match(
  cliPackage,
  /"plugins":\s*\[[\s\S]*"@mb-it-org\/org"/,
  'packages/cli/package.json must reference the renamed @mb-it-org/org oclif plugin'
)

assert.match(
  orgPackage,
  /"name":\s*"@mb-it-org\/org"/,
  'packages/org/package.json must rename the workspace package to @mb-it-org/org'
)

assert.match(
  orgPackage,
  /"@mb-it-org\/shared":\s*"workspace:\*"/,
  'packages/org/package.json must depend on the renamed @mb-it-org/shared workspace package'
)

assert.match(
  orgPackage,
  /"files":\s*\[/,
  'packages/org/package.json must declare a files array so oclif can generate the plugin manifest during npm publish'
)

assert.match(
  sharedPackage,
  /"name":\s*"@mb-it-org\/shared"/,
  'packages/shared/package.json must rename the workspace package to @mb-it-org/shared'
)

console.log('release workflow preserves deploy bundle and publishes @mb-it-org/cli to npm')
