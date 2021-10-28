let imagenProducto = document.getElementById("producto");

function Mostrar (){

    imagenProducto.onmouseover = () => {
        document.getElementById("verPrecio").textContent = "Este Producto Sale $ 20"
        document.getElementById("verPrecio").classList.add('forma')
    
    }

}

function Ocultar (){

    imagenProducto.onmouseout = () => {
        document.getElementById("verPrecio").textContent = "***************"
        document.getElementById("verPrecio").classList.add('forma2')
    
    }

}

    Mostrar()

    Ocultar()

    //**************************/

    
    let user = document.getElementById("mail").value;
    let pass = document.getElementById("contraseña").value;
    
    let boton = document.getElementById("botonIng")

    let enter1 = document.getElementById("contraseña")

    //enter1.onkeyup   = () => {console.log("keyUp")};
    //input2.onkeydown = () => {console.log("keyDown")};

    

   function validar () { 
        if (user  === "marcos" && pass  === "torres") {
            
            document.getElementById("ingresar").textContent = "Usted ha ingresado correctamente"
            document.getElementById("ingresar").style.color = "black"
            document.getElementById("ingresar").style.fontSize = "45px";
    
            } else if (user  != "marcos" && pass  != "torres") {
               document.getElementById("ingresar").textContent = "La Contraseña/mail ingresado es incorrecto" 
               document.getElementById("ingresar").style.color = "red"
               document.getElementById("ingresar").style.fontSize = "35px";
    
            }
    
        }
    
            boton.onclick = () =>{    
                validar()
            } 

           





