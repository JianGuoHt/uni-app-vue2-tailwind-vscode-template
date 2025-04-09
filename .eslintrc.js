const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts', '.tsx'] },
    },
  },
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'no-undef': 'off',
      },
    },

    {
      files: ['**/*.md/*.js', '**/*.md/*.ts'],
      rules: {
        'no-console': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    // prettier
    'prettier/prettier': 'error',

    // import
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/no-named-as-default-member': 'off',

    // simple-import-sort
    'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',

    // ts
    '@typescript-eslint/no-explicit-any': 'off',

    // vue
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': 'off',
  },
});
