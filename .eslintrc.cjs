module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  ignorePatterns: ['.next/', 'node_modules/', 'coverage/', 'dist/', 'out/', 'next-env.d.ts'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  overrides: [
    {
      files: ['src/tests/**/*.{ts,tsx}', 'tests/**/*.{ts,tsx}', '**/*.test.{ts,tsx}', 'vitest.config.ts'],
      env: {
        browser: true,
        node: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
