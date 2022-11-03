


function validacion(){
    /* ENTRADA DE DATOS */
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('email').value;
    var unidades = document.getElementById('unidades').value;  

    console.log("Enviando Forms");
 
    if(nombre == null || nombre==''){
        alert("Debes ingresar un nombre");
        return false;
    } else if(unidades == null){
        alert("Debes ingresar una cantidad");
        return false;
    } else if (unidades % 1 != 0){
        alert ("Desbes de ingresar un número entero");
        return false;
    }else if (unidades<=0 || unidades>=101){
        alert("Debes ingresar una cantidad valida (De 1 a 100)");
        return false;
    } else if(nombre == "" || correo == "" || unidades == ""){
            alert("Completar todos los campos porfavor.");
            return false;
    } else{


        document.getElementById('nombreC').innerHTML = 'Nombre: ' + nombre;
        document.getElementById('correo').innerHTML = 'Correo: ' + correo;

        /* PROCESOS DE CALCULOS :D */
    
        /*Variables*/
        const precio = 2.50;
        const iva = 0.13;
        var subtotal = 0;
        var subtotalIva =0;
        var total = 0;
    
        /*---PROCESOS---*/
    
        /*Conseguimos el precio total sin aplicacion de iva*/
    
        subtotal = unidades*precio;
        document.getElementById('subtotal').innerHTML = 'Subtotal: $' + subtotal.toFixed(2);;
    
        /*Conseguimos la cantidad del anumento por el iva */
    
        subtotalIva = iva*subtotal;
        document.getElementById('iva').innerHTML = 'Iva: $' + subtotalIva.toFixed(2);;
    
        /*Calculamos el total a pagar por la cantidad de cafes*/
    
        total = subtotal + subtotalIva;
        document.getElementById('total').innerHTML = 'Total a pagar: $' + total.toFixed(2);

    }
}