const fillButton = document.getElementById("vulbutton");
const line = document.getElementById("lijn");
const fieldArea = document.getElementById("vakken");
const factorArea = document.getElementById("factors");
const mathButton = document.getElementById("rekenbutton");
const resultArea = document.getElementById("result");

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

makeButton = function() {
    const newButton = document.createElement('button');
    newButton.id = "bereken";
    newButton.innerText = "bereken de verwachte opbrengst";
    mathButton.appendChild(newButton);
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