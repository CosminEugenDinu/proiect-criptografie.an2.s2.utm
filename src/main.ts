import assert from "assert/strict";
import Cezar from "./cezar";
import Polialfa from "./polialfa";
import Substitutie from "./substitutie";

let mesaj: string;
let criptat: string;
let decriptat: string;
let cezar: Cezar;
let parola: string;
let substitutie: Substitutie;
let polialfa: Polialfa;

// ========= CEZAR ===========================================
// cheie = 7
cezar = new Cezar(7);
mesaj = "CRIPTOGRAFIE";

// testare mesaj criptat
criptat = cezar.cripteaza(mesaj);
assert.strictEqual(criptat, "JYPWAVNYHMPL");

// testare mesaj decriptat
decriptat = cezar.decripteaza(criptat);
assert.strictEqual(decriptat, mesaj);

// rulare exercitiul 1
// Sa se cifreze mesajul
// "EXISTA O NISA DE SECURITATE IN COMUNICAREA WIRELESS"
// utilizand algoritmul Cezar cu cheia k=11.
cezar = new Cezar(11);
mesaj = "EXISTA O NISA DE SECURITATE IN COMUNICAREA WIRELESS";
criptat = cezar.cripteaza(mesaj);
decriptat = cezar.decripteaza(criptat);

console.log("=".repeat(70));
console.log("Exercitiul 1 - Cezar");
console.log("Cheie:           ", 11);
console.log("Mesaj:           ", mesaj);
console.log("Mesaj criptat:   ", criptat);
console.log("Mesaj decriptat: ", decriptat);
console.log("=".repeat(70));
// ===========================================================

// ========= SUBSTITUIRE =====================================
mesaj = "IN CRIPTOGRAFIE NICI O REGULA NU ESTE ABSOLUTA";
parola = "TESTARESISTEM";
substitutie = new Substitutie(parola);

// testare alfabet cifrare
const alfaCifr = Substitutie.alfabetCifrare(parola);
assert.strictEqual(alfaCifr, "TESARIMBCDFGHJKLNOPQUVWXYZ");

// testare alfabet cifrare permutat
const alfaCifrPerm = Substitutie.permutaAlfabet(alfaCifr);
assert.strictEqual(alfaCifrPerm, "ZYXWVUQPONLKJHGFDCBMIRASET");

// testare mesaj criptat
criptat = substitutie.cripteaza(mesaj);
assert.strictEqual(criptat, "OHDXCOFMGQCZUOVDHOXODGDCVQIKZDHIDVBMVDZYBGKIMZ");

// testare mesaj decriptat
decriptat = substitutie.decripteaza(criptat);
assert.strictEqual(decriptat, mesaj);


// Sa se construiasca alfabetul de cifrare cu parola
// "SISCRIPTARE"
// Iar apoi sa se cifreze mesajul
// "EXISTA O NISA DE SECURITATE IN COMUNICAREA WIRELESS"
parola = "SISCRIPTARE";
substitutie = new Substitutie(parola);
mesaj = "EXISTA O NISA DE SECURITATE IN COMUNICAREA WIRELESS";
const alfaCript = Substitutie.alfabetCifrare(parola)
const alfaCriptPerm = Substitutie.permutaAlfabet(alfaCript)
criptat = substitutie.cripteaza(mesaj);
decriptat = substitutie.decripteaza(criptat);

console.log("=".repeat(70));
console.log("Exercitiul 2 - Substitutie");
console.log("Parola:          ", parola);
console.log("Mesaj:           ", mesaj);
console.log("Alfabet cifrat:  ", alfaCript);
console.log("Alfa cifrat perm:", alfaCriptPerm);
console.log("Mesaj criptat:   ", criptat);
console.log("Mesaj decriptat: ", decriptat);
console.log("=".repeat(70));
// ===========================================================

// ========= POLIALFABETIC ===================================
mesaj = "";
parola = "";
polialfa = new Polialfa(parola);

// testare mesaj criptat
criptat = polialfa.cripteaza(mesaj);
assert.strictEqual(criptat, "");

// testare mesaj decriptat
decriptat = polialfa.decripteaza(criptat);
assert.strictEqual(decriptat, mesaj);

parola = "";
polialfa = new Polialfa(parola);
mesaj = "";
criptat = polialfa.cripteaza(mesaj);
decriptat = polialfa.decripteaza(criptat);

console.log("=".repeat(70));
console.log("Exercitiul 3 - Polialfabetic");
console.log("Parola:          ", parola);
console.log("Mesaj:           ", mesaj);
console.log("Mesaj criptat:   ", criptat);
console.log("Mesaj decriptat: ", decriptat);
console.log("=".repeat(70));
// ===========================================================
