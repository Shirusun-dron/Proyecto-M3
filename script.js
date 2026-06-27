const numero1 = parseInt(prompt("ingrese un numero"))
const numero2 = parseInt(prompt("ingrese otro un numero"))

let operacion = prompt(`
    Opciones disponibles:
    1- Suma
    2- Divisiòn
    3- Resta
    4- Multiplicaciòn
    
    Ingresa un numero:
    `)

switch (operacion){
    case "1": alert(`${numero1} + ${numero2} = ${numero1 + numero2}`); break;
    case "2":
        if (numero2 == 0)
         alert("No se puede dividir por cero");
        else
         alert(`${numero1} / ${numero2} = ${numero1 / numero2}`); 
        break;
    case "3": alert(`${numero1} - ${numero2} = ${numero1 - numero2}`); break;
    case "4": alert(`${numero1} * ${numero2} = ${numero1 * numero2}`); break;
    default:
        alert ("opciòn no encontrada")
    }