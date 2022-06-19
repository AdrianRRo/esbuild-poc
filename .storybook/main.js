module.exports = {
  "stories": [
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-turbo-build",
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
           modules: true,
        }
      }
    }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  typescript: {
    reactDocgen: false
  }
}