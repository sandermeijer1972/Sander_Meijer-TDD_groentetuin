const {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
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

describe("testing getProfitForCrop", () => {
    const carrot = {
        name: "carrot",
        salePrice: 0.80,
        yield: 4,
    };
    const input = {
        crop: carrot,
        numCrops: 50,
    };
    test("get Profit for crop", () => {
        expect(getProfitForCrop(input)).toBe(110);
    });
});