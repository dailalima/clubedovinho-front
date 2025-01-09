let numero = 1;

const SELECT_DIA = document.getElementById('select-dia');
const SELECT_MES = document.getElementById('select-mes');
const SELECT_ANO = document.getElementById('select-ano');

while (numero <= 31) {
    SELECT_DIA.innerHTML += `<option>${numero}</option>`;

    //numero = numero + 1;
    //numero += 1;
    numero++;
}

//---------- MES ------------
let mes = 1;

const meses = {
    1: "Janeiro",
    2: "Fevereiro",
    3: "Março",
    4: "Abril",
    5: "Maio",
    6: "Junho",
    7: "Julho",
    8: "Agosto",
    9: "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro"
};
 b
do {
    SELECT_MES.innerHTML += `<option>${meses[mes]}</option>`;
    mes++;
} while(mes <= 12);


//========= ANO ------------
for (let ano = 2025; ano >= 1950; ano--) {
    if (ano % 2 !== 0) { //é impar?
        SELECT_ANO.innerHTML += `<option>${ano}</option>`;
    }
}
