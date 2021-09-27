//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

let ingNumero = parseInt(prompt("Ingresar Numero 1 o 999"));

for (let numero = 1; numero <= 5; numero++) {
    let resultado = ingNumero + numero ;
    alert("El numero ingresado :" + ingNumero + " mas "+ numero + " da como resultado "+ resultado);

    if (resultado > 1000) {
        alert("el resultado " + resultado + " es mayor a mil - SALIR");
        break;
    }
} 

//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”. 
//---



//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.


let palabra =prompt("ingrese una palabra ");
let cantRepet= parseInt(prompt("Ingrese la cantidad de veces que desea ver la palabra"));

for (let i= 1; i <= cantRepet; i++) {
      
    alert("Hola :" + palabra );

}  


//Realizar un programa que imprima 4 términos de la serie 11 - 22 - 33 - 44, . (No se ingresan valores por teclado).

termino = 0
while (termino <= 33) {
    alert(termino = termino + 11);

        
} 


//Mostrar los múltiplos de un numero hasta el valor 100. 

let multiplo = parseInt(prompt("ingres un numero para ver su multiplo"))

inicioMultiplo = 1

while (inicioMultiplo <= 100000) {
    alert(resultado = multiplo * inicioMultiplo++ );

    if (resultado > 100){

        alert("aqui termino el ejercicio");
        break;
    }

}      


//Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. HOUSE TABLE DOG CAT

let palabra2 = prompt("ingrese una de las siguientes palabras CASA MESA  PERRO  GATO - o ESC para salir")

while(palabra2 !=  "ESC"){
    switch (palabra2){
        case "CASA":
            alert("en ingles es HOUSE");
            break;
        case "MESA":
            alert("en ingles es TABLE");
            break;     
        case "PERRO":
            alert("en ingles es DOG");
            break;   
        case "GATO":
            alert("en ingles es CAT");
            break;    
        default:
            alert("ingrese una palabra valida");
            break;  
        }

        palabra2 = prompt("Ingresar una de las siguientes palabras CASA MESA  PERRO  GATO -  o ESC para salir");

}

//Ingresa un numero

let numero3 = parseInt(prompt("ingrese un numero o 0 para salir"))

while (numero3 != 0) {

    alert(numero3 + 1 +" es mayor");
        
    numero3 = parseInt(prompt("ingrese un numero"));
    
}