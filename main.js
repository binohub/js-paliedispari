parolaScritta(prompt("inserisci una parola"));

















































// ! calcola il quadrato del numero uno e del numero due
// function calcQuadrato(numberOne, numberTwo) {
//         console.log(numberOne * numberOne);
//         console.log(numberTwo * numberTwo);
//     }

// calcQuadrato(2, 5)
// ! stampa la parola scritta(parola), leggendola al contrario capisci se è palindroma 
function parolaScritta(parola){
    let parolaInvertita = "";
    console.log(parola);
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInvertita += parola[i]; 
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