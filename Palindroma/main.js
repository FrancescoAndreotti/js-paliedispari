let parola = prompt("Inserisci una parola");
parola = parola.toLowerCase();

let parolaInversa = parola.split("").reverse().join("");


if (parola === parolaInversa) {
    alert("La parola inserita è palindroma");
} else {
    alert("La parola inserita non è palindroma");
}

