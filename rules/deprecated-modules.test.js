const { RuleTester } = require('eslint');
const rule = require('./deprecated-modules');

const ruleTester = new RuleTester();
ruleTester.run('deprecated-modules', rule, {
  valid: [
    {
      code: 'import uuid from "uuid"',
      parser: 'babel-eslint',
      parserOptions: {
        sourceType: "module",
      }
    },
    'require()',
  ],
  invalid: [
    {
      code: 'import guid from "guid"',
      parser: 'babel-eslint',
      parserOptions: {
        sourceType: "module",
      },
      errors: [
        {
          message: 'Module guid is deprecated. Use uuid instead',
        },
      ],
    },
    {
      code: 'require("guid")',
      parser: 'babel-eslint',
      errors: [
        {
          message: 'Module guid is deprecated. Use uuid instead',
        },
      ],
    }
  ],
});