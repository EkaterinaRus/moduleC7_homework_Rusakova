import { reverseString } from "../../utils/reverseString.js";

describe("test reverseString", () => {
    it('should reverse string', () => {
        expect(reverseString("abc")).toBe("cba");
    }),
    it('should reverse string', () => {
        expect(reverseString("123")).toBe("321");
    }),
    it('should reverse string', () => {
        expect(reverseString("123")).toBe("123");
    });
});
