const { createFilter } = require('@rollup/pluginutils')
const { compile } = require('@wenyanlang/core')
const { dirname } = require('path')
const findUp = require('find-up')

const ext = /\.wy$/i
const defaultConfig = {
  logCallback: () => 0,
}

module.exports = function wenyan(options = {}) {
  const filter = createFilter(options.include, options.exclude)
  const importCache = {}

  return {
    name: 'wenyan',
    transform(code, id) {
      if (!ext.test(id)) return
      if (!filter(id)) return

      const compileOptions = {
        importCache,
        ...defaultConfig,
        ...options,
        entryFilepath: id,
      }

      compileOptions.importPaths = compileOptions.importPaths || []
      compileOptions.importPaths.push(
        findUp.sync('藏書樓', { type: "directory", cwd: dirname(id) })
      )

      return {
        code: compile(code, compileOptions),
        map: {
          mappings: '', // TODO:
        }
      }
    }
  }
}