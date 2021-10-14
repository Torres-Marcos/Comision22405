class Usuario {

    constructorUsuario (mail, contraseña) {

        this.mail = mail;
        this.contraseña = contraseña;
    }
}

const arrayUsuario = [];
arrayUsuario.push(new Usuario ("marcos", "torres"));

let user = document.getElementById("mail").value;
let pass = document.getElementById("contraseña").value;

let boton = document.getElementById("botonIng")


function validar () { 
    if (user  === arrayUsuario.mail && pass  === arrayUsuario.contraseña) {
        
        document.getElementById("ingresar").textContent = "Usted ha ingresado correctamente"
        document.getElementById("ingresar").style.color = "black"
        document.getElementById("ingresar").style.fontSize = "45px";

        } else {
           document.getElementById("ingresar").textContent = "La Contraseña/mail ingresado es incorrecto" 
           document.getElementById("ingresar").style.color = "red"
           document.getElementById("ingresar").style.fontSize = "35px";

        }

    }

        boton.onclick = () =>{

            validar()
    }  




      


