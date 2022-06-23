const esbuild = require('esbuild');
const {sassPlugin, postcssModules} = require('esbuild-sass-plugin');
const { getBuildConfig } = require('./build-config');

esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  format: 'cjs',
  outfile: 'dist/cjs/index.js',
  minify: true,
  sourcemap: true,
  plugins: [
    sassPlugin({
      type: 'styles',
      transform: postcssModules({})
    })
  ]
})
  .then(() => console.log('Build for commonJs done'))
  .catch(() => process.exit(1));

esbuild.build(getBuildConfig())
  .then(() => console.log('Build for ESM done'))
  .catch(() => process.exit(1));