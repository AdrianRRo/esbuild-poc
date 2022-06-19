const esbuild = require("esbuild");
const { transform } = require("esbuild");
const sassPlugin = require('esbuild-sass-plugin');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'cjs',
  outfile: 'dist/cjs/index.js',
  minify: true,
  sourcemap: true,
  plugins: [
    sassPlugin.default({
      type: "css-text",
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);
        return css;
      }
    })
  ]
})
.then(() => console.log('Build for commonJs done'))
.catch(() => process.exit(1))

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'esm',
  outfile: 'dist/esm/index.js',
  minify: true,
  sourcemap: true,
  plugins: [
    sassPlugin.default({
      type: "css-text",
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);
        return css;
      }
    })
  ]
})
.then(() => console.log('Build for ESM done'))
.catch(() => process.exit(1))