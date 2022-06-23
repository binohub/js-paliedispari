const parolaUtente = prompt("inserisci una parola");
parolaScritta(parolaUtente);

let userEvenOrOdd = prompt("pari o dispari?").toLowerCase();
console.log(`hai scelto ${userEvenOrOdd}`);
while (userEvenOrOdd != "pari" && userEvenOrOdd != "dispari") {
    userEvenOrOdd = prompt("GENTILMENTE... ho detto: pari o dispari??").toLowerCase();
}
let userNumber = parseInt(prompt("gioca il tuo numero, ricorda da 1 a 5"));
while (isNaN(userNumber) || (userNumber < 1 || userNumber > 5)) {
    userNumber = parseInt(prompt("da 1 a 5 ho detto :D"));
}

isEvenOrOdd(userEvenOrOdd, userNumber); 

// ! calcola il quadrato del numero uno e del numero due
// function calcQuadrato(numberOne, numberTwo) {
//         console.log(numberOne * numberOne);
//         console.log(numberTwo * numberTwo);
//     }

// calcQuadrato(2, 5)
// ! stampa la parola scritta(parola), leggendola al contrario capisci se è palindroma 
function parolaScritta(parola){
    parola = parola.toLowerCase();
    let parolaInvertita = "";
    console.log(parola);
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInvertita += parola.charAt(i); 
    }
    console.log(parolaInvertita);
    if (parolaInvertita === parola) {
        console.log("è palindroma!");
        return true;
    } else {
        console.log("non è palindroma");}
        return false;
}
// ! se pari(numero) stampa true sennò false
function isEven(number){
    if(number % 2 === 0){
    return true;
    }
    return false;
}
// ! even or odd
function isEvenOrOdd(EvenOrOdd, Number){
    const botNumber = Math.floor(Math.random() * 5) + 1;
    let risultato = "";
    console.log(`il bot ha giocato ${botNumber}`);
    console.log(`tu hai giocato ${Number}`);
    const somma = botNumber + Number;
    console.log(`la somma è di ${somma}`);

    if (somma % 2 === 0) {
        risultato = "pari";
        console.log(risultato);
    }else if (somma % 2 === 1) {
        risultato = "dispari";
        console.log(risultato);
    }else{
        console.log("inserisci un NUMERO valido");
    }

    if (EvenOrOdd === risultato){
        console.log("hai vinto!");
    } else{
        console.log("hai perso!");
    }
}