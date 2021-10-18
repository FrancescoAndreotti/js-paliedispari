/* Assegnare ad una variabile pari o dispari */
// Assegnare ad una variabile num Utente
// Funzione numero casuale
// Funzione somma pari o dispari e stampare vincitore
const btnSubmit = document.querySelector("#btn-submit");
const pariODispari = document.querySelector("[name='pari-o-dispari']");
const numUtente = document.querySelector("[name='number']");


btnSubmit.addEventListener("click", function () {

    const pOD = pariODispari.value;
    let num = numUtente.value;
    console.log(pOD, num);

    let numAi = Math.ceil(Math.random() * 5);
    console.log(numAi);
    num = parseInt(num);
    numAi = parseInt(numAi);
    const somma = num + numAi;
    console.log(somma);

    let oddOrEven = "";
    if (somma % 2 === 0) {
        oddOrEven = "pari";
    } else {
        oddOrEven = "dispari";
    }

    if (oddOrEven === pOD) {
        alert("Complimenti hai vinto!");
    } else {
        alert("Mi dispiace hai perso!");
    }
});
