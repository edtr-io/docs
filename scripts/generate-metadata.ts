import * as fs from 'fs'
import * as path from 'path'
import * as util from 'util'

const readDir = util.promisify(fs.readdir)
const stat = util.promisify(fs.stat)
const writeFile = util.promisify(fs.writeFile)

exec().catch(e => {
  process.exit(1)
})

async function exec() {
  const root = path.join(__dirname, '..')
  const items = await readDir(root)
  await Promise.all(items.map(item => handleItem(item)))

  async function handleItem(item: string) {
    const p = path.join(root, item)
    const s = await stat(p)
    if (item.startsWith('v') && s.isDirectory()) {
      return handleVersion(item)
    }
  }

  async function handleVersion(version: string) {
    await generateDocsMetadata(version)
    await generateApiMetadata(version)
  }

  async function generateDocsMetadata(version: string) {
    const docsDir = path.join(root, version, 'docs')
    const files = await readDir(docsDir)

    const items = {}
    files.forEach(f => {
      if (f === 'metadata.json') return
      const id = f
        .replace('.mdx', '')
        .split('-')
        .slice(1)
        .join('-')
      items[id] = f
    })

    await writeFile(
      path.join(docsDir, 'metadata.json'),
      JSON.stringify({ items, sidebar: [] }, null, 2),
      { encoding: 'utf-8' }
    )
  }

  async function generateApiMetadata(version: string) {
    const apiDir = path.join(root, version, 'api')
    const files = await readDir(apiDir)

    const items = {}
    const sidebar = []
    files.forEach(f => {
      if (f === 'metadata.json') return
      const id = f
        .replace('.md', '')
        .split('.')
        .join('/')
      items[id] = f

      if (!id.includes('/') && !id.startsWith('internal__') && id) {
        sidebar.push({
          id,
          name: id === 'index' ? 'API Reference' : `@edtr-io/${id}`
        })
      }
    })

    await writeFile(
      path.join(apiDir, 'metadata.json'),
      JSON.stringify({ items, sidebar: getSidebar() }, null, 2),
      { encoding: 'utf-8' }
    )

    function getSidebar() {
      const top = sidebar.filter(item => item.id === 'index')
      const others = sidebar.filter(item => item.id !== 'index')
      const corePackages = others
        .filter(item => !item.id.startsWith('plugin-'))
        .sort()
      const plugins = others
        .filter(item => item.id.startsWith('plugin-'))
        .sort()
      return [...top, ...corePackages, ...plugins]
    }
  }
}
