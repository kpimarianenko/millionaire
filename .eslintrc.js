module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
  ],
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'linebreak-style': 0,
    'react/prop-types': 0,
    'object-curly-newline': 0,
  },
};
