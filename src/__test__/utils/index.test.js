//const multiply = require("./index.js")
import { multiply } from "../../utils/index.js";

// test('multiply 1 * 2 to equal 2', () => {
//   expect(multiply(1, 2)).toBe(2);
// });

xdescribe("test multiply", () => {
    it('multiply 1 * 2 to equal 2', () => {
        const result = multiply(1, 2);
        expect(result).toBe(2);
    }),
    it('multiply 1 * 3 to equal 3', () => {
        const result = multiply(1, 3);
        expect(result).toBe(3);
    });
});
