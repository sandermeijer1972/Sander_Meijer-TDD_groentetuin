const costsForOnePlant = 1;

const getCostsForCrop = (input) => {    
    const totalCosts = input.numCrops * costsForOnePlant;
    console.log("totale kosten voor een crop: ", totalCosts);
    return totalCosts;
};

const getRevenueForCrop = (input, factor) => {
    const revenueForOnePlant = input.crop.salePrice * getYieldForPlant(input.crop, factor);
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
    if (!input.factors.sun) {
        sun = 1;
    } else {
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
        };
    };    
    if (!input.factors.wind) {
        wind = 1;
    } else {
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
        };
    };  
    if (!input.factors.rain) {
        rain = 1;
    } else {
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
        };
    };  
    if (!input.factors.soil) {
        soil = 1;
    } else {
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
        };
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

const getTotalYield = (input, factor) => {
    console.log(typeof(input));
    console.log(Object.entries(input));
    console.log(Object.keys(input));
    console.log(Object.values(input)[0]);   
    const yieldPerCrop = input.crops.map((crop) => getYieldForCrop(crop, factor));
    const totalYield = yieldPerCrop.reduce((acc, cur) => acc + cur);
    return parseFloat(totalYield.toFixed(2));  
};

module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
};