module.exports = {
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 6
  },
  rules: {
    'no-console': 'warn',
    'comma-dangle': 'warn',
    "prefer-const": 'warn',
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


/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor


module.exports = {
  extends: './node_modules/eslint-config-hackreactor/index.js'
};
*/