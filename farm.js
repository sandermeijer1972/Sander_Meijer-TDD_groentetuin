const costsForOnePlant = 1;

const getCostsForCrop = (input) => {    
    const totalCosts = input.numCrops * costsForOnePlant;
    console.log(totalCosts);
    return totalCosts;
};

const getRevenueForCrop = (input) => {
    const revenueForOnePlant = input.crop.salePrice * input.crop.yield;
    const revenueForCrop = revenueForOnePlant * input.numCrops;
    console.log(revenueForCrop);
    return revenueForCrop;
};

const getProfitForCrop = (input) => {
    const profitForCrop = getRevenueForCrop(input) - getCostsForCrop(input);
    console.log(profitForCrop);
    return profitForCrop;    
};

const getTotalProfit = (input) => {
    const profitPerCrop = input.map((crop) => getProfitForCrop(crop));
    console.log(profitPerCrop);
    const totalProfit = profitPerCrop.reduce((acc, cur) => acc + cur);
    console.log(totalProfit);
    return totalProfit;
};

module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
};