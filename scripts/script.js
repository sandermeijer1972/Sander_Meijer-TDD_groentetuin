const fillButton = document.getElementById("vulbutton");
const line = document.getElementById("lijn");
const fieldArea = document.getElementById("vakken");
const factorArea = document.getElementById("factors");
const mathButton = document.getElementById("rekenbutton");
const resultArea = document.getElementById("result");
const resetArea = document.getElementById("reset");
const crops = [];
const Factors = [];

addCultivations = function(array) {
    for (let area=1; area <= 10; area++) {
        const newLi = document.createElement('li');
        const newP = document.createElement('p');
        newP.classList.add("veld");
        newP.innerText = ("veld " + area);
        newLi.appendChild(newP);
        const newDivCult = document.createElement('div');
        newDivCult.classList.add("teelt");
        const newLabelCult = document.createElement('label');
        newLabelCult.for = ("veld" + area);
        newLabelCult.innerText = "Selecteer je teelt: ";
        newDivCult.appendChild(newLabelCult);
        const newSelect = document.createElement('select');
        newSelect.id = ("veld" + area);        
        newSelect.name = "groente";
        newSelect.classList.add("selecteer");
        array.forEach(groente => {
            newOption = document.createElement('option');
            newOption.value = groente.eng;
            newOption.innerText = groente.nl;
            newSelect.appendChild(newOption);
        });
        newDivCult.appendChild(newSelect);
        newLi.appendChild(newDivCult);
        const newDivNumber = document.createElement('div');
        newDivNumber.classList.add("plantaantal");
        const newLabelNumber = document.createElement('label');
        newLabelNumber.for = ("aantal" + area);
        newLabelNumber.innerText = "Aantal planten: ";
        newDivNumber.appendChild(newLabelNumber);
        const newInput = document.createElement('input');
        newInput.type = "number";
        newInput.id = ("aantal" + area);
        newInput.size = 3;
        newInput.min = 0;
        newInput.max = 100;
        newDivNumber.appendChild(newInput);
        newLi.appendChild(newDivNumber);
        fieldArea.appendChild(newLi);
    };
};

addFactors = function(array) {
    const newH2 = document.createElement('h2');
    newH2.innerText = "vul hier je omgevings-factoren in:";
    factorArea.appendChild(newH2);
    const newUl = document.createElement('ul');
    array.forEach(factor => {
        const newLi = document.createElement('li');
        const newImg = document.createElement('img');
        newImg.src = ("./images/" + factor.img);
        newLi.appendChild(newImg);
        const newSelect = document.createElement('select');
        newSelect.id = factor.eng;
        newSelect.name = factor.nl;
        const newOption0 = document.createElement('option');
        newOption0.value = "normal";
        newOption0.innerText = "normaal";
        newSelect.appendChild(newOption0);
        const newOption1 = document.createElement('option');
        newOption1.value = factor.value1_eng;
        newOption1.innerText = factor.value1_nl;
        newSelect.appendChild(newOption1);
        const newOption2 = document.createElement('option');
        newOption2.value = factor.value2_eng;
        newOption2.innerText = factor.value2_nl;
        newSelect.appendChild(newOption2);
        const newOption3 = document.createElement('option');
        newOption3.value = factor.value3_eng;
        newOption3.innerText = factor.value3_nl;
        newSelect.appendChild(newOption3);
        newLi.appendChild(newSelect);
        newUl.appendChild(newLi);      
    });
    factorArea.appendChild(newUl);
};

const makeButton = function() {
    const newButton = document.createElement('button');
    newButton.id = "bereken";
    newButton.innerText = "bereken de verwachte opbrengst";
    mathButton.appendChild(newButton);
    const calcButton = document.getElementById("bereken");
    calcButton.addEventListener("click", () => calculateProfit());
};

const fillFields = () => {
    fillButton.innerHTML = '';
    line.classList.add("lijn");
    addCultivations(groentes);
    factorArea.classList.add("factors");
    addFactors(omgevingsFactoren);
    makeButton();
};

fillButton.addEventListener("click", fillFields);

const makeArrayCrops = function() {
    const field1 = document.getElementById("veld1");
    const number1 = document.getElementById("aantal1");    
    const crop1 = checkCrop(field1.value, parseInt(number1.value));    
    crops.push(crop1);
    const field2 = document.getElementById("veld2");
    const number2 = document.getElementById("aantal2");    
    const crop2 = checkCrop(field2.value, parseInt(number2.value));    
    crops.push(crop2);
    const field3 = document.getElementById("veld3");
    const number3 = document.getElementById("aantal3");    
    const crop3 = checkCrop(field3.value, parseInt(number3.value));    
    crops.push(crop3);
    const field4 = document.getElementById("veld4");
    const number4 = document.getElementById("aantal4");    
    const crop4 = checkCrop(field4.value, parseInt(number4.value));    
    crops.push(crop4);
    const field5 = document.getElementById("veld5");
    const number5 = document.getElementById("aantal5");    
    const crop5 = checkCrop(field5.value, parseInt(number5.value));    
    crops.push(crop5);
    const field6 = document.getElementById("veld6");
    const number6 = document.getElementById("aantal6");    
    const crop6 = checkCrop(field6.value, parseInt(number6.value));    
    crops.push(crop6);
    const field7 = document.getElementById("veld7");
    const number7 = document.getElementById("aantal7");    
    const crop7 = checkCrop(field7.value, parseInt(number7.value));    
    crops.push(crop7);
    const field8 = document.getElementById("veld8");
    const number8 = document.getElementById("aantal8");    
    const crop8 = checkCrop(field8.value, parseInt(number8.value));    
    crops.push(crop8);
    const field9 = document.getElementById("veld9");
    const number9 = document.getElementById("aantal9");    
    const crop9 = checkCrop(field9.value, parseInt(number9.value));    
    crops.push(crop9);
    const field10 = document.getElementById("veld10");
    const number10 = document.getElementById("aantal10");    
    const crop10 = checkCrop(field10.value, parseInt(number10.value));    
    crops.push(crop10);
    console.log(crops);
};

const makeArrayFactors = function() {
    const sunFactor = document.getElementById("sun");
    const windFactor = document.getElementById("wind");
    const rainFactor = document.getElementById("rain");
    const soilFactor = document.getElementById("soil");
    const environmentFactors = {sun: sunFactor.value, wind: windFactor.value, rain: rainFactor.value, soil: soilFactor.value};
    console.log(environmentFactors);
    Factors.push(environmentFactors);
    console.log(Factors);
};

const addResult = () => {
    resultArea.innerHTML = '';
    const newDivCosts = document.createElement('div');
    newDivCosts.classList.add("geld");
    const newPCosts = document.createElement('p');
    newPCosts.innerText = "kosten: ";
    newDivCosts.appendChild(newPCosts);
    const newPAmount = document.createElement('p');
    newPAmount.innerText = ("€ " + getTotalCosts(crops));
    newDivCosts.appendChild(newPAmount);
    resultArea.appendChild(newDivCosts);
    const newDivWeight = document.createElement('div');
    newDivWeight.classList.add("geld");
    const newPYield = document.createElement('p');
    newPYield.innerText = "opbrengst: ";
    newDivWeight.appendChild(newPYield);
    const newPKilo = document.createElement('p');
    newPKilo.innerText = (getYieldForGarden(crops, Factors[Factors.length - 1]) + " kilo");
    newDivWeight.appendChild(newPKilo);
    resultArea.appendChild(newDivWeight);
    const newDivProfit = document.createElement('div');
    newDivProfit.classList.add("geld");
    const newPEstimate = document.createElement('p');
    newPEstimate.innerText = "geschatte winst";
    newDivProfit.appendChild(newPEstimate);
    const newPProfit = document.createElement('p');
    newPProfit.innerText = ("€ " + Math.round(getTotalProfit(crops, Factors[Factors.length - 1])));
    newDivProfit.appendChild(newPProfit);
    resultArea.appendChild(newDivProfit);
};

const makeNewButton = function() {
    mathButton.innerHTML = ''
    const newButton = document.createElement('button');
    newButton.id = "bereken";
    newButton.innerText = "bereken de verwachte opbrengst met andere omgevingsfactoren";
    mathButton.appendChild(newButton);
    const calcButton = document.getElementById("bereken");
    calcButton.addEventListener("click", () => calculateNewProfit());
};

const refreshPage = () => {
    location.reload();
};

const makeResetButton = function() {
    const newButton = document.createElement('button');
    newButton.id = "resetButton";
    newButton.innerText = "reset je tuin";
    resetArea.appendChild(newButton);
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", refreshPage);
};

const calculateProfit = () => {
    makeArrayCrops();
    makeArrayFactors();
    addResult();
    makeNewButton();
    makeResetButton();
};

const calculateNewProfit = () => {
    makeArrayFactors();
    addResult();
};