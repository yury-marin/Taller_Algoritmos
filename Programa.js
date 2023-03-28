//Taller

/*
1. Definir dos variables, asignarle los valores y utilizando desiciones imprimir en consola la que tenga el menor valor
2. Definir tres variables, asignarle valores y utilizando desiciones imprimir en consola la tenga mayor valor.
 */

//1.
let a = 6;
let b = 12;
let c = 25;

if (a<b){
    console.log ("La variable con menor valor es a:" +  a);
}

if (a>b && a>c){
    console.log ("La variable con mayor valor es a:" + a);
}else if (b>a && b>c) {
    console.log ("La variable con mayor valor es b:" + b);
}else{
    console.log ("La variable con mayor valor es c:" + c);
}


//TEMA DE CLASE
//console.log("HOLA MUNDO");

//let a = 34;
//let b= 9;

//console.log (a);

//JS es un lenguaje notipado : no define el tipo de dato de una variable 

//operaciones de comparacion (se usan para condiciones)
//en JS es primero > y luego = .... >= o <=,

/*
 == igual para comparar, = (asignacion), no igual (!=), === (exactamente igual, esto compara el valor metido y tambien el 
    TIPO de dato). Las operaciones de comparacion devuelven un valor de tipo booleano
*/

//Casting automatico: conversion automatica del tipo de datos

//Operaciomes logicas : tablas de verdad....AND, OR. Sirven para comparacion 
/*
AND = &&
OR = ||
JS Se ejecuta secuencialmente: linea por linea, pero podemos romper esa sencuencialidad con sentencias de desicion
Sentencias de desicion
1- if (verificamos una condicion y se ejecuta lo que esta entre corchetes if (condicion){})
2- if, else (si se cumple la condicion ejecutar lo que esta en {}, si no hacer lo que esta en los otros {}
    if (condicion){} else {}
*/ 