import not from "logical-not";


export default ({ types: t }) => {
    return {
        name: "transform-enum-literal",

        visitor: {
            ObjectExpression(path, { file: { code } }) {
                let { node, parentPath } = path;

                if (not(node.loc)) return;

                let { column, line } = node.loc.start;

                if (code.split("\n")[line - 1][column - 1] != "(") return;
                if (parentPath.isCallExpression()) return;

                let emunProperties = [];
                let { properties } = node;

                for (let i = 0, lim = properties.length; i < lim; i++) {
                    let property = properties[i];

                    if (not(t.isObjectProperty(property))) return;
                    if (not(property.shorthand)) return;

                    let { name } = property.key;
                    let symbol = t.callExpression(t.identifier("Symbol"), [t.stringLiteral(name)]);

                    emunProperties.push(t.objectProperty(t.identifier(name), symbol));
                }

                path.replaceWith(t.objectExpression(emunProperties));
                path.stop();
            },
        },
    };
};
