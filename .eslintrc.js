module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    browser: true,
  },
  extends: 'eslint:recommended',
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
  },
}
