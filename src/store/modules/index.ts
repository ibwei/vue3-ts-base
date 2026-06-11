// https://vuex.vuejs.org/en/modules.html

const files = require.context('.', true, /\.ts$/)
const modules: any = {}

const ensureRootModule = (name: string) => {
  if (!modules[name]) {
    modules[name] = {
      namespaced: true
    }
  }
  return modules[name]
}

const ensureChildModule = (rootName: string, childName: string) => {
  const rootModule = ensureRootModule(rootName)
  if (!rootModule.modules) {
    rootModule.modules = {}
  }
  if (!rootModule.modules[childName]) {
    rootModule.modules[childName] = {
      namespaced: true
    }
  }
  return rootModule.modules[childName]
}

files.keys().forEach(key => {
  if (key === './index.ts') return
  const path = key.replace(/(\.\/|\.ts)/g, '')
  const parts = path.split('/')
  const imported = parts[parts.length - 1]

  if (parts.length === 2) {
    const module = ensureRootModule(parts[0])
    module[imported] = files(key).default
    return
  }

  if (parts[1] === 'modules') {
    const module = ensureChildModule(parts[0], parts[2])
    module[imported] = files(key).default
  }
})

export default modules
