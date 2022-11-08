module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-types': 0,
    eqeqeq: 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'react-hooks/rules-of-hooks': 0,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
  globals: {
    est: true,
    eastmoney: true,
  },
};
