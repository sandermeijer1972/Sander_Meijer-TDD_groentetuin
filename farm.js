const getCostsForCrop = (input) => {
    const costsForOnePlant = 1;
    const totalCosts = input.numCrops * costsForOnePlant;
    console.log(totalCosts);
    return totalCosts;
};

module.exports = {
    getCostsForCrop,
};