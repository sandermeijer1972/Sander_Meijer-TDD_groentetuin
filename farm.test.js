const {
    getCostsForCrop,
} = require("./farm.js");

describe("testing getCostsForCrop", () => {
    const input = {     
        numCrops: 80,
    };
    test("get costs for crop", () => {
        expect(getCostsForCrop(input)).toBe(80);
    });
});
