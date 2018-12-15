const { assert } = require("chai");
const createPluginTestHelper = require("babel-plugin-test-helper");

const isEqual = createPluginTestHelper(require("../"));


describe("transform-enum-literal tests", () => {
    it("", () => {
        const input = `
            export default ({
                A,
                B,
            });
        `;
        const output = `
            export default {
                A: Symbol("A"),
                B: Symbol("B")
            };
        `;

        assert.isTrue(isEqual(input, output));
    });
});
