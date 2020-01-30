import wenyan from '..'

export default ({
  input: '圖靈機.wy',
  output: {
    file: 'dist/turing.js',
    format: 'cjs',
  },
  plugins: [
    wenyan({
      strict: true,
    }),
  ],
})