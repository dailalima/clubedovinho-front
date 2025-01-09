let numero = 1;

const SELECT_DIA = document.getElementById('select-dia');
const SELECT_MES = document.getElementById('select-mes');
const SELECT_ANO = document.getElementById('select-ano');

const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

while (numero <= 31) {
    SELECT_DIA.innerHTML += `<option>${numero}</option>`;

    //numero = numero + 1;
    //numero += 1;
    numero++;
}

//---------- MES ------------
let mes = 1;

do {
    SELECT_MES.innerHTML += `<option>${mes}</option>`;
    mes++;
} while(mes <= 12);

//========= ANO ------------
for (let ano = 2025; ano >= 1950; ano--) {
    if (ano % 2 !== 0) { //é impar?
        SELECT_ANO.innerHTML += `<option>${ano}</option>`;
    }
}
