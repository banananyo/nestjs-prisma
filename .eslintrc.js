module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:typescript-sort-keys/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    // project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'simple-import-sort',
    'typescript-sort-keys',
    'exlint-plugin-tsdoc'
  ],
  rules: {
    '@typescript-eslint/no-parameter-properties': [
      'warn',
      {
        'allows': [
          'private readonly',
          'protected readonly'
        ]
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    'simple-import-sort/imports': 1,
    'jest/expect-expect': [
      'warn',
      {
        'assertFunctionNames': [
          'expect',
          'request.*.expect'
        ]
      }
    ],'tsdoc/syntax': 'warn'
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
 
};
