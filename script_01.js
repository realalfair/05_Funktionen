"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
console.log("Hallo Tobias!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN


ausgabeNamen();

function ausgabeNamen() {
    
    let firstName = "Tobias";
    console.log("Hallo " + firstName +"!"); 
}

// console.log(firstName);    // Fehler --> SCOPE!