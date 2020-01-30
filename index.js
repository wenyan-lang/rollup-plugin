const { createFilter } = require('@rollup/pluginutils')
const { compile } = require('@wenyanlang/core')

const ext = /\.wy$/i
const defaultConfig = {
  logCallback: () => 0,
}

module.exports = function myPlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'wenyan',
    transform(code, id) {
      if (!ext.test(id)) return
      if (!filter(id)) return

      return {
        code: compile(code, {
          ...defaultConfig,
          ...options,
        }),
        map: {
          mappings: '', // TODO:
        }
      }
    }
  }
}