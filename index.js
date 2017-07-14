module.exports = {
  extends: [
    './rules/deprecated-modules',
  ].map(require.resolve),
  rules: {}
};