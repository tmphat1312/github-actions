const NEXT_FILE_CONVENTIONS =[
  'default',
  'error',
  'layout',
  'page',
  'loading',
  'not-found',
  'template',
]

module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/vitest'),
    require.resolve('@vercel/style-guide/eslint/playwright-test'),
    require.resolve('eslint-config-prettier'),
  ],
  overrides: [
    {
      files: [
        `./src/app/**/{${NEXT_FILE_CONVENTIONS.join()}}.{js,jsx}`,
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
