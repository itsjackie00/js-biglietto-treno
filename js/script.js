/*
Il programma dovrà chiedere all'utente il numero di chilometri che 
vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

//alert('funziona ?');

//user desired km 
let km = parseInt(prompt('Inserisci il numero di Chilometri che vuoi percorrere: '));
console.log(km);

//user age
let age = parseInt(prompt("Inserisci l'eta del passeggero: "));
console.log(age);

//ticket price
let price = km * 0.21;
console.log(price);

//discount
if (age < 18) {        //sconto 20% minorenni
    price *= 0.8;    
}else if (age >= 65){      //sconto 40% per over 65
    price *= 0.6;
}

//format price in two decimals
let priceFormattato = price.toFixed(2);
console.log(priceFormattato);

//message on webpage
document.getElementById('price').innerHTML = `
Il prezzo del biglietto è: ${priceFormattato} €
`
