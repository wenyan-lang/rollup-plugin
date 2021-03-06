# wenyan-rollup-plugin

Rollup.js plugin for wenyan-lang

## Install

```bash
npm i -D @wenyan/rollup-plugin @wenyan/core
```

## Rollup Config

```js
import wenyan from '@wenyan/rollup-plugin'

export default ({
  input: '圖靈機.wy',
  output: {
    file: 'dist/turing.js',
    format: 'cjs',
  },
  plugins: [
    wenyan({
      // options of wenyan.compile
      strict: true,
      romanizeIdentifiers: 'pinyin',
      // ...etc
    }),
  ],
})
```

The options field well passed to the wenyan `compile` function. Check [this doc](https://github.com/wenyan-lang/wenyan/wiki/Compiler-API#compiler-options) for details.

You can also check out the [examples](./examples).

## TODO

- [ ] A code name
- [ ] Unit tests