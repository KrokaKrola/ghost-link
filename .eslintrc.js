module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["next", "next/core-web-vitals", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
