/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier"],
  ignorePatterns: ['node_modules', 'dist'],
  parserOptions: {
    babelOptions: {
      presets: [],
    },
  },
};
