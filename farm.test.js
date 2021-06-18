const {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlant,
} = require("./farm.js");

describe("testing getCostsForCrop", () => {
    const crops = {     
        numCrops: 80,
    };
    test("get costs for crop", () => {
        expect(getCostsForCrop(crops)).toBe(80);
    });
});

describe("testing getRevenueForCrop", () => {
    const strawberry = {
        name: "strawberry",
        salePrice: 4,
        yield: 3,
    };
    const crops = {
        crop: strawberry,
        numCrops: 20,
    };
    test("get Revenue for crop", () => {
        expect(getRevenueForCrop(crops)).toBe(240);
    });
});

describe("testing getProfitForCrop", () => {
    const carrot = {
        name: "carrot",
        salePrice: 0.80,
        yield: 4,
    };
    const crops = {
        crop: carrot,
        numCrops: 50,
    };
    test("get Profit for crop", () => {
        expect(getProfitForCrop(crops)).toBe(110);
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
    const crops = [
        {crop: haricot, numCrops: 15},
        {crop: tomato, numCrops: 10},
        {crop: rhubarb, numCrops: 12}
    ];
    test("get total profit for multiple crops", () => {
        expect(getTotalProfit(crops)).toBe(393);
    });
});

describe("testing getYieldForPlant", () => {
    
    test("Get yield for plant with no environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };
        expect(getYieldForPlant(corn)).toBe(30);
    });

    test("get yield for plant with factor sun high", () => {
        const cucumber = {
            name: "cucumber",
            yield: 15,
            factors: {
                sun: {
                    low: -40,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const environmentFactors = {
            sun: "high",
        };
        expect(getYieldForPlant(cucumber, environmentFactors)).toBe(22.5);
    });
    
    test("get yield for plant with factor sun low and factor wind medium", () => {
        const avocado = {
            name: "avocado",
            yield: 3,
            factors: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -30,
                    high: -60,
                },
            },
        };
        const environmentFactors = {
            sun: "low",
            wind: "medium",
        };
        expect(getYieldForPlant(avocado, environmentFactors)).toBe(1.68);
    });

    test("get yield for plant with factor sun medium, factor rain high and factor soil clay", () => {
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -20,
                    medium: 10,
                    high: 40,
                },
                rain: {
                    low: 30,
                    medium: 0,
                    high: -40,
                },
                soil: {
                    peat: 50,
                    sand: -30,
                    clay: -10,
                },
            },
        };
        const environmentFactors = {
            sun: "medium",
            rain: "high",
            soil: "clay",
        };
        expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(2.38);
    });
});
