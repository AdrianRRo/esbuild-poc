const esbuild = require("esbuild");
const { getBuildConfig } = require("./build-config");

esbuild
  .serve(
    {
      servedir: "public",
      port: 8000,
    },
    getBuildConfig(true)
  )
  .catch(() => process.exit());