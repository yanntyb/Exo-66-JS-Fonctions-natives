let operande = 10;

let entier = document.getElementById("entier");
let flottant = document.getElementById("flottant");
let nonnumerique = document.getElementById("non-numerique");
let trunc = document.getElementById("trunc");
let phrase = document.getElementById("replace");

entier.innerHTML *= operande;
flottant.innerHTML = parseFloat((operande * flottant.innerHTML) + parseInt(entier.innerHTML));

if(isNaN(nonnumerique.innerHTML)){
    nonnumerique.innerHTML = 0
}

document.getElementById("random").innerHTML = Math.random()*100
trunc.innerHTML = Math.trunc(trunc.innerHTML)
phrase.innerHTML = phrase.innerHTML.replace("world","yann tyburczy")