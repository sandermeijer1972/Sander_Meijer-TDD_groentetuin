const {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
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
        factors: {
            sun: {
                low: -20,
                medium: 0,
                high: 30,
            },
        },
    };
    const crops = {
        crop: strawberry,
        numCrops: 20,
    };
    test("get Revenue for crop", () => {
        expect(getRevenueForCrop(crops)).toBe(240);
    });

    test("get Revenue for crop with sunfactor high", () => {
        const environmentFactors = {
            sun: "high",
        };
        expect(getRevenueForCrop(crops, environmentFactors)).toBe(312);
    });
});

describe("testing getProfitForCrop", () => {
    const carrot = {
        name: "carrot",
        salePrice: 0.80,
        yield: 4,
        factors: {
            rain: {
                low: 40,
                medium: 10,
                high: -30,
            },
            soil: {
                peat: 40,
                sand: -30,
                clay: -10,
            },
        },
    };
    const crops = {
        crop: carrot,
        numCrops: 50,
    };
    test("get Profit for crop", () => {
        expect(getProfitForCrop(crops)).toBe(110);
    });

    test("get Profit for Crop with rainfactor high on sandy soil", () => {
        const environmentFactors = {
            rain: "high",
            soil: "sand",
        };
        expect(getProfitForCrop(crops, environmentFactors)).toBe(28.4);
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

describe("testing getYieldForCrop", () => {

    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });

    test("get yield for crop with factor sun low and factor rain high", () => {
        const lettuce = {
            name: "lettuce",
            yield: 2,
            factors: {
                sun: {
                    low: -40,
                    medium: 10,
                    high: 50,
                },
                rain: {
                    low: 30,
                    medium: 0,
                    high: -40,
                },
            },
        };
        const environmentFactors = {
            sun: "low",
            rain: "high",
        };
        const crops = {
            crop: lettuce,
            numCrops: 20,
        };
        expect(getYieldForCrop(crops, environmentFactors)).toBe(14.40);
    });

    test("test yield for crop with factor wind low, factor rain low and factor soil sand", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                wind: {
                    low: 50,
                    medium: 10,
                    high: -20,
                },
                rain: {
                    low: 40,
                    medium: 0,
                    high: -40,
                },
                soil: {
                    peat: 40,
                    sand: -20,
                    clay: -10,
                },
            },
        };
        const environmentFactors = {
            wind: "low",
            rain: "low",
            soil: "sand",
        };
        const crops = {
            crop: corn,
            numCrops: 150,
        };
        expect(getYieldForCrop(crops, environmentFactors)).toBe(756);
    });
});

describe("testing getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });

    test("Calculate total yield with multiple crops and sunfactor high", () => {
        const avocado = {
            name: "avocado",
            yield: 3,
            factors: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 50,
                },                
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factors: {
                sun: {
                    low: -20,
                    medium: 10,
                    high: 40,
                },
            },
        };
        const environmentFactors = {
            sun: "high",
        }
        const crops = [
            {crop: avocado, numCrops: 5},
            {crop: pumpkin, numCrops: 3},
        ];
        expect(getTotalYield({ crops }, environmentFactors)).toBe(39.3);
    });

    test("Calculate total yield with multiple crops and multiple environmentfactors", () => {
        const lettuce = {
            name: "lettuce",
            yield: 2,
            factors: {
                sun: {
                    low: -40,
                    medium: 10,
                    high: 50,
                },                
                rain: {
                    low: 30,
                    medium: 0,
                    high: -40,
                },
            },
        };
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                wind: {
                    low: 50,
                    medium: 10,
                    high: -20,
                },
                rain: {
                    low: 40,
                    medium: 0,
                    high: -40,
                },
                soil: {
                    peat: 40,
                    sand: -20,
                    clay: -10,
                },
            },
        };
        const environmentFactors = {
            sun: "high",
            wind: "low",
            rain: "low",
            soil: "peat",
        };
        const crops = [
            {crop: lettuce, numCrops: 25},
            {crop: corn, numCrops: 50},
        ];
        expect(getTotalYield({ crops }, environmentFactors)).toBe(538.5);
    });
});