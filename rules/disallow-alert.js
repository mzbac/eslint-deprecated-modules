module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of alert',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [
      {
        type: 'object',
        properties: {
          allowedMethods: {
            type: 'array',
            items: {
              enum: ['log', 'info', 'warn', 'error', 'dir'],
            },
            minItems: 1,
            uniqueItems: true,
          },
        },
      },
    ],
  },
  create(context) {
    const config = context.options[0] || {};
    const allowedMethods = config.allowedMethods || [];
    console.log(allowedMethods);
    return {
      CallExpression(node) {
        if (node.callee.name === 'alert') {
          context.report({
            node,
            message: 'Using alert is not allowed',
          })
        }
      },
    }
  },
};