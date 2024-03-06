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

//chiedere al user il kilometro 
let km = parseInt(prompt('Inserisci il numero di Chilometri che vuoi percorrere: '));
console.log(km);

//chiedere l'età del user
let age = parseInt(prompt("Inserisci l'eta del passeggero: "));
console.log(age);

//calcolo prezzo biglietto
let price = km * 0.21;
console.log(price);

