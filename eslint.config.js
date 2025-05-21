import eslintConfig from '@antfu/eslint-config'

// Docs for managing the config: https://github.com/antfu/eslint-config
// When adding something here, run 'npx eslint' and if it prompts to install additional dependencies, do so.
export default eslintConfig({
  type: 'app',
  ignores: ['!**/.server', '!**/.client'],
  react: true,
  formatters: {
    css: 'prettier',
  },
})
