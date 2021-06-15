const {
    getCostsForCrop,
    getRevenueForCrop,
} = require("./farm.js");

describe("testing getCostsForCrop", () => {
    const input = {     
        numCrops: 80,
    };
    test("get costs for crop", () => {
        expect(getCostsForCrop(input)).toBe(80);
    });
});

describe("testing getRevenueForCrop", () => {
    const strawberry = {
        name: "strawberry",
        salePrice: 4,
        yield: 3,
    };
    const input = {
        crop: strawberry,
        numCrops: 20,
    };
    test("get Revenue for crop", () => {
        expect(getRevenueForCrop(input)).toBe(240);
    });
});
