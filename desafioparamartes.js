alert("Para pagar ofrecemos 6 o 12 cuotas si interes o 18 cuotas con 15% de interes");

let calcular = prompt ("¿Quieres calcular el monto por cuotas? si/no");

while (calcular == "si"){

    let valorDelProducto = parseInt(prompt ("Ingrese el precio del producto"));
    let cuotas = parseInt(prompt("Ingresa el numero de cuotas"));

    calcularCuotas(valorDelProducto, cuotas);


function calcularCuotas(valorDelProducto, cuotas, resultado) {
    switch (cuotas){
        case 6:
            resultado = valorDelProducto/cuotas;
            break;
        case 12:
            resultado = valorDelProducto/cuotas;
            break;
        case 18:
            resultado = (valorDelProducto/cuotas) * 1.15;
            break;
        default:
            alert("Los valores ingresados no son correctos")
    }
    return alert("El precio por cuotas que debe abonar es de " + " " + resultado);

    
}
calcular = prompt("¿Desdea realizar nuevamente la operación? si/no");

while(calcular == "no"){
    alert("No podemos ayudarlo con otra cosa por ahora");
    alert("Gracias por utilizar nuestra plataforma");
    break;
}
}

 



