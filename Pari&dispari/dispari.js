/* Assegnare ad una variabile pari o dispari */
// Assegnare ad una variabile num Utente
// Funzione numero casuale
// Funzione somma pari o dispari e stampare vincitore
const btnSubmit = document.querySelector("#btn-submit");
const pariODispari = document.querySelector("[name='pari-o-dispari']");
const numUtente = document.querySelector("[name='number']");


btnSubmit.addEventListener("click", function () {
    const pOD = pariODispari.value;
    const number = numUtente.value;
    console.log(pOD, number);
});
