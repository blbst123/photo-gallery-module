module.exports = {
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 6
  },
  rules: {
    'no-console': 'warn',
    'comma-dangle': 'off',
    "prefer-const": 'warn',
    'no-plusplus': 'off',
    'no-unused-vars': [
      'warn',
      {
        'vars': 'local',
        'args': 'none'
      }
    ]
  },
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "jest": true
  }
}
