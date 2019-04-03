module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  plugins: ['react', 'prettier'],
  rules: {
    "prettier/prettier": "error",
    
  },
  extends: [
    'prettier',
    "prettier/react"
  ]



}