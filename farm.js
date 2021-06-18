const costsForOnePlant = 1;

const getCostsForCrop = (input) => {    
    const totalCosts = input.numCrops * costsForOnePlant;
    console.log("totale kosten voor een crop: ", totalCosts);
    return totalCosts;
};

const getRevenueForCrop = (input) => {
    const revenueForOnePlant = input.crop.salePrice * input.crop.yield;
    const revenueForCrop = revenueForOnePlant * input.numCrops;
    console.log("opbrengst van een crop: ", revenueForCrop);
    return revenueForCrop;
};

const getProfitForCrop = (input) => {
    const profitForCrop = getRevenueForCrop(input) - getCostsForCrop(input);
    console.log("winst voor een crop: ", profitForCrop);
    return profitForCrop;    
};

const getTotalProfit = (input) => {
    const profitPerCrop = input.map((crop) => getProfitForCrop(crop));
    console.log("winst per crop: ", profitPerCrop);
    const totalProfit = profitPerCrop.reduce((acc, cur) => acc + cur);
    console.log("totale winst van alle crops: ", totalProfit);
    return totalProfit;
};

const getYieldForPlant = (input, factor) => {
    if (!factor) {
        return input.yield;
    };   
    let sun;
    let wind;
    let rain;
    let soil;    
    switch(factor.sun) {
        case "low":
            sun = (100 + input.factors.sun.low)/100;
            break;
        case "medium":
            sun = (100 + input.factors.sun.medium)/100;
            break;
        case "high":
            sun = (100 + input.factors.sun.high)/100;
            break;
        default:
            sun = 1;
    };    
    switch(factor.wind) {
        case "low":
            wind = (100 + input.factors.wind.low)/100;
            break;
        case "medium":
            wind = (100 + input.factors.wind.medium)/100;
            break;
        case "high":
            wind = (100 + input.factors.wind.high)/100;
            break;
        default:
            wind = 1;
    };
    switch(factor.rain) {
        case "low":
            rain = (100 + input.factors.rain.low)/100;
            break;
        case "medium":
            rain = (100 + input.factors.rain.medium)/100;
            break;
        case "high":
            rain = (100 + input.factors.rain.high)/100;
            break;
        default:
            rain = 1;
    };
    switch(factor.soil) {
        case "peat":
            soil = (100 + input.factors.soil.peat)/100;
            break;
        case "sand":
            soil = (100 + input.factors.soil.sand)/100;
            break;
        case "clay":
            soil = (100 + input.factors.soil.clay)/100;
            break;
        default:
            soil = 1;
    };
    console.log("sun, wind, rain and soil: ", sun, wind, rain, soil);
    const yieldPerPlant = input.yield * sun * wind * rain * soil;
    console.log("yield per plant: ", yieldPerPlant);
    return parseFloat(yieldPerPlant.toFixed(2));
};

const getYieldForCrop = (input, factor) => {
    const yieldPerPlant = getYieldForPlant(input.crop, factor);
    const yieldPerCrop = yieldPerPlant * input.numCrops;
    return parseFloat(yieldPerCrop.toFixed(2));
};

module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlant,
    getYieldForCrop,
};