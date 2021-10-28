class User {

    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass
    }
}

const marcos = new User("marcos@gmail.com", "torres")

let boton = document.getElementById("botonIng")

const confirmacionDeAcceso = () => {

    let nombreM = document.getElementById("mailAdmin").value;
    let passM = document.getElementById("contraseñaAdmin").value;    

         if (nombreM === marcos.nombre && passM === marcos.pass) {
            
            window.location.href = "administrador.html"        

           }
            
         else  {
            document.getElementById("loginError").textContent = "La Contraseña/mail ingresado es incorrecto" ; 
        }
 }
    
 
    boton.onclick = () =>{    
     confirmacionDeAcceso()
} 


