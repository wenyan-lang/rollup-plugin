import wenyan from '..'

export default ({
  input: 'src/序.wy',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    wenyan({
      strict: true,
    }),
  ],
})