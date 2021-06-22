const {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
} = require("./farm.js");

const {avocado, beetroot, carrot, cauliflower, cucumber, endive, grain, haricot, lettuce, potato, pumpkin, radish, 
   rhubarb, spinach, strawberry, tomato} = require("./vegetables.js");

//STEP 1 : GET COSTS FOR CROP

describe("testing getCostsForCrop", () => {
    
    test("get costs for crop", () => {
        const crops = {     
            numCrops: 80,
        };
        expect(getCostsForCrop(crops)).toBe(80);
    });
});


//STEP 2 : GET REVENUE FOR CROP

describe("testing getRevenueForCrop", () => {
        
    test("get Revenue for crop", () => {
        const crops = {
            crop: strawberry,
            numCrops: 20,
        };        
        expect(getRevenueForCrop(crops)).toBe(240);
    });

//STEP 11 : GET REVENUE FOR CROP, WITH ENVIRONMENTFACTOR    

    test("get Revenue for crop with sunfactor high", () => {
        const crops = {
            crop: strawberry,
            numCrops: 20,
        };        
        const environmentFactors = {
            sun: "high",
        };
        expect(getRevenueForCrop(crops, environmentFactors)).toBe(312);
    });
});


//STEP 3 : GET PROFIT FOR CROP

describe("testing getProfitForCrop", () => {
    
    test("get Profit for crop", () => {
        const crops = {
            crop: carrot,
            numCrops: 50,
        };
        expect(getProfitForCrop(crops)).toBe(110);
    });

//STEP 12 : GET PROFIT FOR CROP, WITH ENVIRONMENTFACTOR

    test("get Profit for Crop with rainfactor high on sandy soil", () => {
        const crops = {
            crop: carrot,
            numCrops: 50,
        };
        const environmentFactors = {
            rain: "high",
            soil: "sand",
        };
        expect(getProfitForCrop(crops, environmentFactors)).toBe(28.4);
    });
});


//STEP 4 : GET TOTAL PROFIT

describe("testing getTotalProfit", () => {
    
    test("get total profit for multiple crops", () => {
        const crops = [
            {crop: haricot, numCrops: 15},
            {crop: tomato, numCrops: 10},
            {crop: rhubarb, numCrops: 12}
        ];
        expect(getTotalProfit(crops)).toBe(393);
    });

//STEP 13 : GET TOTAL PROFIT, WITH ENVIRONMENTFACTOR

});


//STEP 5 : GET YIELD FOR PLANT

describe("testing getYieldForPlant", () => {
    
    test("Get yield for plant with no environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };
        expect(getYieldForPlant(corn)).toBe(30);
    });

    test("get yield for plant with factor sun high", () => {
        const environmentFactors = {
            sun: "high",
        };
        expect(getYieldForPlant(cucumber, environmentFactors)).toBe(22.5);
    });
    
    test("get yield for plant with factor sun low and factor wind medium", () => {
        const environmentFactors = {
            sun: "low",
            wind: "medium",
        };
        expect(getYieldForPlant(avocado, environmentFactors)).toBe(1.68);
    });

    test("get yield for plant with factor sun medium, factor rain high and factor soil clay", () => {
        const environmentFactors = {
            sun: "medium",
            rain: "high",
            soil: "clay",
        };
        expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(2.38);
    });
});


//STEP 9 : GET YIELD FOR CROP

describe("testing getYieldForCrop", () => {

    test("Get yield for crop, simple", () => {        
        const input = {
            crop: grain,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });

    test("get yield for crop with factor sun low and factor rain high", () => {
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
        const environmentFactors = {
            wind: "low",
            rain: "low",
            soil: "sand",
        };
        const crops = {
            crop: grain,
            numCrops: 150,
        };
        expect(getYieldForCrop(crops, environmentFactors)).toBe(756);
    });
});


//STEP 10 : GET TOTAL YIELD, MULTIPLE CROPS

describe("testing getTotalYield", () => {

    test("Calculate total yield with multiple crops", () => {        
        const crops = [
            { crop: grain, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {        
        const crops = [{ crop: grain, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });

    test("Calculate total yield with multiple crops and sunfactor high", () => {        
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
        const environmentFactors = {
            sun: "high",
            wind: "low",
            rain: "low",
            soil: "peat",
        };
        const crops = [
            {crop: lettuce, numCrops: 25},
            {crop: grain, numCrops: 50},
        ];
        expect(getTotalYield({ crops }, environmentFactors)).toBe(538.5);
    });
});