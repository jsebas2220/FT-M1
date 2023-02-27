'use strict';

// Con while

/*
1. Inicializamos dos variables: decimal para realizar un seguimiento del equivalente decimal del número binario y base para realizar un seguimiento de la potencia actual de 2 con la que estamos trabajando (empezando con 2^0 = 1).
2. Usamos un bucle while para procesar cada dígito del número binario de derecha a izquierda. Continuamos el bucle mientras num sea mayor que 0.
3. Dentro del bucle, usamos el operador de módulo (%) para extraer el último dígito de num, que será 0 o 1. Sumamos este dígito multiplicado por base a decimal.
4. Luego dividimos num por 10 (usando Math.floor para redondear hacia abajo al entero más cercano) para eliminar el último dígito de num.
5. Finalmente, multiplicamos la base por 2 para prepararnos para el siguiente dígito.
*/

function BinarioADecimal(num) {
   let decimal = 0; 
   let base = 1;

  while (num > 0) {            
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    decimal += lastDigit * base;
    base *= 2;
  }
  
  return decimal;
}

/*
con for 

function binarioADecimal(binario) {
  let decimal = 0;
  let longitud = binario.length;
  
  for (let i = 0; i < longitud; i++) {
    let digito = Number(binario[i]);
    let potencia = longitud - 1 - i;
    decimal += digito * Math.pow(2, potencia);
  }
  
  return decimal;
}
*/

/*****************************************************/

/*
1. Inicializamos una variable binaria a una cadena vacía. Esta variable eventualmente tendrá la representación binaria del número decimal.
2. We use a while loop to repeatedly divide num by 2 and append the remainder to the front of binary. We continue the loop as long as num is greater than 0.
3. Inside the loop, we use the modulus operator (%) to compute the remainder when num is divided by 2. This remainder will be either 0 or 1, and we append it to the front of binary using string concatenation.
4. Luego dividimos num por 2 (usando Math.floor para redondear hacia abajo al entero más cercano) para prepararnos para la siguiente iteración del ciclo.
5.Una vez que finaliza el ciclo, binary contiene la representación binaria del número decimal y lo devolvemos como una cadena
*/
function DecimalABinario(num) {
   let binary = "";
  
  while (num > 0) {
    let remainder = num % 2;
    binary = remainder + binary;
    num = Math.floor(num / 2);
  }
  
  return binary;
}


/***************************************
 ** OTRA FORMA **************************
 ****************************************/

 /**
  * function BinarioADecimal(num){
  return parseInt(num, 2)
}

console.log(BinarioADecimal(110011))


function BinarioADecimal(num){
  return num.toString(2)
}
console.log(BinarioADecimal(51))
*/





module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
