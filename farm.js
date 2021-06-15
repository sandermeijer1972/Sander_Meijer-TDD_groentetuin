const costsForOnePlant = 1;

const getCostsForCrop = (input) => {    
    const totalCosts = input.numCrops * costsForOnePlant;
    console.log(totalCosts);
    return totalCosts;
};

const getRevenueForCrop = (input) => {
    const revenueOfOnePlant = input.crop.salePrice * input.crop.yield;
    const revenueForCrop = revenueOfOnePlant * input.numCrops;
    console.log(revenueForCrop);
    return revenueForCrop;
};

module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
};