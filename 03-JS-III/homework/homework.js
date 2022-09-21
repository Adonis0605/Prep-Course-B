// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:   
   /*  var tarea =[1,2,3,4,5,6,7,8,9,10]
  var suma = tarea.reduce(function(acc,elemento){
    return acc+elemento;});
    return suma; */
    /* 
    este ejemplo sirve para cuando no hay parametros y es mas simple
    var acumulador=0;
    for (var i=1; i<11; i++){
      acumulador = acumulador + i;
    }
    return acumulador;*/
    var acumulador =0;
    var i=1;
    while(i<11){
      acumulador = acumulador +i;
      i++;
    }
    return acumulador;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var par= [];
  for(var i=0; i<array.length; i++){
   if(array[i] % 2 === 0){
    par.push(array[i])
   }
  } 
  return par;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:

/*   array.map(function(valor){
    return valor ** 2
  });   */
  /* return array.map(function(valor){
    return valor ** 2
  });  */
  var final = array.map(function(valor){
    return valor ** 2
  });
  return final;  
  
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:

  /* var acumulador = 0;
  for (var i=0; i< array.length; i++){
    acumulador = acumulador + array[i];
  }
  return acumulador; */

  /* return array.reduce(function(acumulador, valor){
    return acumulador + valor
  }); */
  var elemento = array.reduce(function(acumulador, valor){
    return acumulador + valor
  });
  return elemento;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
