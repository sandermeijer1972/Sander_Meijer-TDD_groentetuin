const groentes = [
    {nl: "aardappel", eng: "potato"},
    {nl: "aardbei", eng: "strawberry"},
    {nl: "andijvie", eng: "endive"},
    {nl: "avocado", eng: "avocado"},
    {nl: "bloemkool", eng: "cauliflower"},
    {nl: "komkommer", eng: "cucumber"},
    {nl: "pompoen", eng: "pumpkin"},
    {nl: "rabarber", eng: "rhubarb"},
    {nl: "radijs", eng: "radish"},
    {nl: "rode biet", eng: "beetroot"},
    {nl: "sla", eng: "lettuce"},
    {nl: "snijboon", eng: "haricot"},
    {nl: "spinazie", eng: "spinach"},
    {nl: "tomaat", eng: "tomato"},
    {nl: "wortel", eng: "carrot"},    
];

const omgevingsFactoren = [
    {
        nl: "zon",
        eng: "sun",
        value1_nl: "weinig",
        value1_eng: "low",
        value2_nl: "medium",
        value2_eng: "medium",
        value3_nl: "veel",
        value3_eng: "high",
        img: "zon.png",
    },
    {
        nl: "wind",
        eng: "wind",
        value1_nl: "weinig",
        value1_eng: "low",
        value2_nl: "medium",
        value2_eng: "medium",
        value3_nl: "veel",
        value3_eng: "high",
        img: "wind.gif",
    },
    {
        nl: "regen",
        eng: "rain",
        value1_nl: "weinig",
        value1_eng: "low",
        value2_nl: "medium",
        value2_eng: "medium",
        value3_nl: "veel",
        value3_eng: "high",
        img: "regen.png",
    },
    {
        nl: "grond",
        eng: "soil",
        value1_nl: "veen",
        value1_eng: "peat",
        value2_nl: "zand",
        value2_eng: "sand",
        value3_nl: "klei",
        value3_eng: "clay",
        img: "grond.png",
    },
];

const checkCrop = function(str, num) {
    if (!num) {
        num = 0;
    };
    if (num > 100) {
        num = 100;
    };
    switch(str) {
        case "potato":
            return {crop: potato, numCrops: num};
            break;
        case "strawberry":
            return {crop: strawberry, numCrops: num};
            break;
        case "endive":
            return {crop: endive, numCrops: num};
            break;
        case "avocado":
            return {crop: avocado, numCrops: num};
            break;
        case "cauliflower":
            return {crop: cauliflower, numCrops: num};
            break;
        case "cucumber":
            return {crop: cucumber, numCrops: num};
            break;
        case "pumpkin":
            return {crop: pumpkin, numCrops: num};
            break;
        case "rhubarb":
            return {crop: rhubarb, numCrops: num};
            break;
        case "radish":
            return {crop: radish, numCrops: num};
            break;
        case "beetroot":
            return {crop: beetroot, numCrops: num};
            break;
        case "lettuce":
            return {crop: lettuce, numCrops: num};
            break;
        case "haricot":
            return {crop: haricot, numCrops: num};
            break;
        case "spinach":
            return {crop: spinach, numCrops: num};
            break;
        case "tomato":
            return {crop: tomato, numCrops: num};
            break;
        case "carrot":
            return {crop: carrot, numCrops: num};
            break;
    };
};