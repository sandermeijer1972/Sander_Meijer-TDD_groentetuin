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
    switch(factor.sun) {
        case "low":
            const sun = (100 + input.factors.sun.low)/100;
            break;
        case "medium":
            const sun = (100 + input.factors.sun.medium)/100;
            break;
        case "high":
            const sun = (100 + input.factors.sun.high)/100;
            break;
        default:
            const sun = 1;
    };
    switch(factor.wind) {
        case "low":
            const wind = (100 + input.factors.wind.low)/100;
            break;
        case "medium":
            const wind = (100 + input.factors.wind.medium)/100;
            break;
        case "high":
            const wind = (100 + input.factors.wind.high)/100;
            break;
        default:
            const wind = 1;
    };
    const yieldPerPlant = input.yield * sun * wind;
    console.log("yield per plant: ", yieldPerPlant);
    return yieldPerPlant;
};

module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlant,
};