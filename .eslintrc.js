module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['prettier', 'vue', '@typescript-eslint/eslint-plugin'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off'
  },
  extends: ['standard', 'plugin:vue/essential', 'plugin:prettier/recommended']
}
