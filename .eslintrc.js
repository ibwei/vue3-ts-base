module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['prettier', 'vue', '@typescript-eslint/eslint-plugin'],
  rules: {
    'prettier/prettier': 'error'
  },
  extends: ['standard', 'plugin:vue/essential', 'plugin:prettier/recommended']
}
