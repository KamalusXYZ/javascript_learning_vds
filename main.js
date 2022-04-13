"use strict"
// Déclarer des variables
let m = 5;
//Déclaration multiples
let a = 1,
    b = 2,
    c
// camelCase
let tauxDeTVA = 0.20;
tauxDeTVA = "20%"
// Littéraux numériques
let x = -123.456;
x = 12e3 // 12000 12 x 10puissance3
x = 0x7B; // 11 + 7*16 = 123 (en hexadecimal, il faut commencer par 0x)
// Littéraux chaînes
let s = "Toto";
s = `j'aime "mon" toto`;
console.log(`La TVA est à ${tauxDeTVA}`)
// Les constantes, redefinissions impossible.
const PI = 3.14;

let n;
console.log(typeof 2);
console.log(typeof "2");
console.log(typeof true);
console.log(typeof false);
console.log(typeof n)