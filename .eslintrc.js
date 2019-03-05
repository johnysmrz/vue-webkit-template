module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  "globals": {
    "expect": true
  },
  extends: [
    'plugin:vue/recommended',
    'standard',
    'google'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": ["error", 4, {
      "MemberExpression": 1,
      "flatTernaryExpressions": true,
    }],
    'arrow-parens': ["warn", "as-needed"],
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/html-self-closing': "off",
    'vue/this-in-template': ['error', 'never'],
    'vue/order-in-components': ['error', {}],
    'vue/max-attributes-per-line': ['error', {
      "singleline": 3,
      "multiline": {
        "max": 2,
        "allowFirstLine": true
      }
    }],
    "max-len": ["warn", {"code": 120, "ignoreComments": false}]
  }
}
