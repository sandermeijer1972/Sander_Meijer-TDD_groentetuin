const avocado = {
    name: "avocado",
    salePrice: 3,
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

const beetroot = {
    name: "beetroot",
    salePrice: 2.2,
    yield: 2,
    factors: {
        sun: {
            low: -20,
            medium: 0,
            high: 20,
        },
        rain: {
            low: 30,
            medium: 10,
            high: -20,
        },
        soil: {
            peat: 30,
            sand: -10,
            clay: -20,
        },
    },
};

const carrot = {
    name: "carrot",
    salePrice: 0.8,
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

const cauliflower = {
    name: "cauliflower",
    salePrice: 2,
    yield: 1.5,
    factors: {
        sun: {
            low: 30,
            medium: 20,
            high: -10,
        },
        rain: {
            low: 30,
            medium: 10,
            high: -20,
        },
    },
};

const cucumber = {
    name: "cucumber",
    salePrice: 0.8,
    yield: 15,
    factors: {
        sun: {
            low: -40,
            medium: 0,
            high: 50,
        },
        soil: {
            peat: 20,
            sand: 20,
            clay: -20,
        },
    },
};

const endive = {
    name: "endive",
    salePrice: 3,
    yield: 1.5,
    factors: {
        sun: {
            low: 30,
            medium: 10,
            high: -20,
        },
        rain: {
            low: -20,
            medium: 10,
            high: 30,
        },
        soil: {
            peat: -50,
            sand: 10,
            clay: 30,
        },
    },
};

const grain = {
    name: "grain",
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

const haricot = {
    name: "haricot",
    salePrice: 3,
    yield: 4,
    factors: {
        sun: {
            low: -20,
            medium: 10,
            high: 40,
        },
        wind: {
            low: 40,
            medium: 10,
            high: -20,
        },
        rain: {
            low: 20,
            medium: 0,
            high: -20,
        },
        soil: {
            peat: 50,
            sand: 10,
            clay: -30,
        },
    },
};

const lettuce = {
    name: "lettuce",
    salePrice: 1,
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

const potato = {
    name: "potato",
    salePrice: 1.3,
    yield: 4,
    factors: {
        sun: {
            low: -20,
            medium: 0,
            high: 20,
        },
        rain: {
            low: 30,
            medium: 20,
            high: -20,
        },
        soil: {
            peat: 10,
            sand: 20,
            clay: -20,
        },
    },
};

const pumpkin = {
    name: "pumpkin",
    salePrice: 3,
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

const radish = {
    name: "radish",
    salePrice: 2,
    yield: 2,
    factors: {
        sun: {
            low: -10,
            medium: 10,
            high: 40,
        },
        wind: {
            low: 50,
            medium: 20,
            high: -30,
        },
        soil: {
            peat: 10,
            sand: -20,
            clay: 30,
        },
    },
};

const rhubarb = {
    name: "rhubarb",
    salePrice: 2.5,
    yield: 5,
    factors: {
        sun: {
            low: 20,
            medium: 0,
            high: -30,
        },
        wind: {
            low: -30,
            medium: 10,
            high: 40,
        },
    },
};

const spinach = {
    name: "spinach",
    salePrice: 1.2,
    yield: 1.5,
    factor: {
        wind: {
            low: -20,
            medium: 10,
            high: 40,
        },
        soil: {
            peat: 20,
            sand: -20,
            clay: 40,
        },
    },
};

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
        soil: {
            peat: 30,
            sand: -20,
            clay: 20,
        },
    },
};

const tomato = {
    name: "tomato",
    salePrice: 2,
    yield: 5,
    factors: {
        sun: {
            low: -20,
            medium: 20,
            high: 50,
        },
        soil: {
            peat: 50,
            sand: 20,
            clay: -20,
        },
    },
};

module.exports = {avocado, beetroot, carrot, cauliflower, cucumber, endive, grain, haricot, lettuce, potato, pumpkin, radish, 
    rhubarb, spinach, strawberry, tomato};