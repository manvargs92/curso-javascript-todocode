//Comentario de una sola línea

/*Comentario
de
verias
líneas */

/*En JS hay 3 tipos de variables:
- var
- let
- const
, y cada una de ellas pueden ser utilizadas en una situación diferente y para distintas cuestiones */

/*En JS sí hay diferentes tipos de datos, pero como JS no es un lenguaje fuertemente tipado no es necesario especificar
el tipo de dato cuando se declaran las variables:
- Numéricos:
    - Number
    - BigInt
- String
- Booleans
- Null
- Undefined */

//Declarar una variable con var
var nombreVariable;

//Declarar una variable con let, se tiliza únicamenta dentro de una estructura o bloque de código en particular, por ejemplo, dentro de {}
let nombreLet;

//Declaración de constantes, su valor no cambia, se mantiene constante y siempre deben se estar inicializadas
const nombreConstante = 0;

//Asignación de variables
var nombre = "Manuel";
var apellido = "Vargas";
var edad = "30"; //estring
var presenteONo = true;
var estatura = 1.70;

//Visualizar en consola con console.log
console.log("Nombre: " + nombre + " " + typeof nombre);//typeof visualizar el tipo de dato de la variable
console.log("Apellido: " + apellido + " " + typeof apellido)
console.log("Edad: " + edad + " " + typeof edad);
console.log("Presente: " + presenteONo + " " + typeof presenteONo);
console.log("Estatura: " + estatura + " " + typeof estatura);

//Concatenación
alert("Hola, mundo, con JavaScript " + nombre);

