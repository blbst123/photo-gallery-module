module.exports = {
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 6
  },
  rules: {
    'no-console': 'warn',
    'comma-dangle': 'off',
    'prefer-const': 'warn',
    'no-plusplus': 'off',
    'func-names': 'off',
    'no-unused-vars': [
      'warn',
      {
        'vars': 'local',
        'args': 'none'
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 0,
    "object-curly-newline": 0
  },
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "jest": true
  }
}
