
function mostrar(){
    let art1 = 10;
    let art2 = 20;
    let art3 = 30;

    let cant1 = document.getElementById("cant1").value;
    let cant2 = document.getElementById("cant2").value;
    let cant3 = document.getElementById("cant3").value;

    let res1 = art1 * cant1;
    let res2 = art2 * cant2;
    let res3 = art3 * cant3;

    alert("Usted Lleva Articulo1 : "+ cant1 + " unidades " + " Total $ " + parseInt(res1)+ "\n" + "Usted Lleva Articulo2 : "+  cant2 + " unidades " +" Total $ " + parseInt(res2)+ "\n" + "Usted Lleva Articulo3 : " + cant3 + " unidades " + " Total $ " +parseInt(res3)+ "\n" + "Total : $" + (res1 + res2 + res3)) ;


   }