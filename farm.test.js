const {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
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

describe("testing getTotalProfit", () => {
    const haricot = {
        name: "haricot",
        salePrice: 3,
        yield: 4,
    };
    const tomato = {
        name: "tomato",
        salePrice: 2,
        yield: 5,
    };
    const rhubarb = {
        name: "rhubarb",
        salePrice: 2.5,
        yield: 5,
    };
    const input = [
        {crop: haricot, numCrops: 15},
        {crop: tomato, numCrops: 10},
        {crop: rhubarb, numCrops: 12}
    ];
    test("get total profit for multiple crops", () => {
        expect(getTotalProfit(input)).toBe(393);
    });
});