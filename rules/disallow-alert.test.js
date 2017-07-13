const { RuleTester } = require('eslint');
const rule = require('./disallow-alert');

const ruleTester = new RuleTester();
ruleTester.run('no-alert', rule, {
  valid: [
    'foo.alert()',
    'balert()',
    'alerts()',
    `var x = alert`,
    { code: 'console.warn()', options: [{ name: 'test', use: 'test1' }] },
  ],
  invalid: [
    {
      code: `alert()`,
      errors: [
        {
          message: 'Using alert is not allowed',
          type: 'CallExpression',
        },
      ],
    },
  ],
});