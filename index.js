module.exports = {
  extends: [
    './rules/disallow-alert',
  ].map(require.resolve),
  rules: {}
};