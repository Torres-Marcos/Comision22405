//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert

let numeroIngresado = prompt ("Ingrese un numero");

if (parseInt(numeroIngresado) > 1000){
    alert ("El numero "+ numeroIngresado +" es mayor a mil");
} else{
    alert ("El numero "+ numeroIngresado +" es menor a mil");
}

//Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

let palabraIngresada = prompt ("Ingrese la palabra Hola");

if (palabraIngresada.toUpperCase() == "HOLA"){
    alert ("la palabra ingresada " + palabraIngresada + " es correcta");
} else {
    alert ("la palabra ingresada " + palabraIngresada + " es distinta de hola");
}

//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

let num = prompt("Ingrese un numero entre 10 y 50");

if (parseInt(num) > 10 && parseInt(num) < 50){
    alert ("el numero ingresado " + num + " Esta entre 10 y 50");
    }else{
        alert ("el numero ingresado " + num + " Es incorrecto");
    }
