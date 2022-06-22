const {sassPlugin, postcssModules} = require('esbuild-sass-plugin')
const getBuildConfig = (isServe) => ({
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'esm',
  outfile: `${isServe ? 'public' : 'dist'}/esm/index.js`,
  minify: true,
  sourcemap: true,
  plugins: [
    sassPlugin({
      type: "styles",
      transform: postcssModules({})
    })
  ]
});

module.exports = {
  getBuildConfig
}