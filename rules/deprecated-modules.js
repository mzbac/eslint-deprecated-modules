"use strict";
const deprecateModules = {
  'guid': {
    alternativeModule: 'uuid'
  }
};

module.exports = {
  meta: {
    docs: {
      description: 'deprecate some module',
      category: 'Best Practices',
      recommended: true,
    },
  },
  create(context) {
    const imports = context.options[0] || deprecateModules;
    return {
      ImportDeclaration(node) {
        const imp = imports[node.source.value];
        if (!imp) {
          return;
        }
        let errorMsg = `Module ${node.source.value} is deprecated.`;
        if (imp.alternativeModule) {
          errorMsg += ` Use ${imp.alternativeModule} instead`;
        }
        context.report({ node, message: errorMsg });
      },
      CallExpression(node) {
        if (node.callee.name !== 'require' || !node.arguments.length) {
          return;
        }
        const requireArg = node.arguments[0];
        if (requireArg.type !== 'Literal') {
          return;
        }
        const imp = imports[requireArg.value];

        if (!imp) {
          return;
        }

        let errorMsg = `Module ${requireArg.value} is deprecated.`;

        if (imp.alternativeModule) {
          errorMsg += ` Use ${imp.alternativeModule} instead`;
        }
        context.report({ node, message: errorMsg });
      }
    };
  }
};
