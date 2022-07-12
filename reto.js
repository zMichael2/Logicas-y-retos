// Convierte Celsius a Fahrenheit
// La fórmula para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicado por 9/5, más 32.
// Se te da una variable celsius que representa una temperatura en Celsius. Utiliza la variable fahrenheit
// ya definida y asígnale la temperatura Fahrenheit equivalente a la temperatura Celsius dada. Utiliza la fórmula 
// mencionada anteriormente para ayudarte a convertir la temperatura Celsius a Fahrenheit.

function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * (9/5))+ 32
    return fahrenheit;
  }
  
  convertToF(30);
  console.log(convertToF(-10))

// Invierte una cadena
// Invierte la cadena proporcionada.
// Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.
// Tu resultado debe ser una cadena.
  
  function reverseString(str) {
    let arr = str.split('')
    arr.reverse();
    str = arr.join('');
    return str;
  }
  
  reverseString("hello");
  
  console.log(reverseString("hello"))

//Factoriza un número
//Devuelve el factorial del entero proporcionado.
//Si el número entero es representado con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n. 
//Los factoriales suelen representarse con la abreviatura n!  
//Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120
//Sólo se proporcionarán a la función los enteros mayores o iguales a cero.

  function factorialize(num) {
    if (num === 0) {
      return num = 1
    } else {
     return factorialize (num - 1) * num;
     }
  }
  
  factorialize(5);
  
  console.log(factorialize(5));

//Encuentra la palabra más larga en una cadena
//Devuelve la longitud de la palabra más larga en la oración proporcionada.

//Tu respuesta debe ser un número.

  function findLongestWordLength(str) {
    let arr = str.split(' ');
    let mayor = [];
    for (let i=0; i<arr.length; i++) { 
        mayor.push(arr[i].length)
    }
     return Math.max(...mayor);
    }
    
    findLongestWordLength("The quick brown fox jumped over the lazy dog");
    
    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))