console.log("Je suis vivante");


/* 
Operador: 
Elemento que nos permite realizar una operación entre dos o más elementos.

- Operadores aritmeticos (+, -, *, /).
- Operadores de asignación (=) asignación
- Operadores logicos (&&, ||, !).
- Operadores de comparacación (<, >, <=, >=, ==, ===)

*/

/*Operadores aritmeticos 
Son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor numerico unico. Corresponden a operaciones matematicas.
    

//suma (+): Se utiliza para sumar dos números.
let resultado1 = 5 + 3; //resultado contendrá el valor 8

//Resta (-): Se utiliza para restar un número de otro
let resultado2 = 10 - 4 //resultado contendrá el valor 6

//Multiplicación (*): Se utiliza para multiplicar dos números
let resultado3 = 6 * 3 // Resultado contendrá el valor 18

//División (/): Se utiliza para dividir un número por otro. La división por cero produce un valor especial llamado "Infinity" (infinito).
let resultado4 = 15 / 3; //resultado contendrá el valor 5

//Modulo (%): Se utiliza para obtener el resto de una división entre dos números.
let resultado5 = 10 % 3; //resultado contendrá el valor 1 (el resto de 10 dividido por 3) 

//Incremento (++): Se utiliza para aumentar en 1 el valor de una variable. 
let numero1 = 5;
numero1++;
//Ahora número contendrá el valor 6

//Decremento (--): Se utiliza para disminuir en 1 el valor de una variable.+
let numero2 = 8;
numero2--; //ahora el numero contendrpa el valor 7


//Doble igual -  igualdad abstracta
5 == "5" // true; ya que JavaScript convierte la cadena "5" a un numero antes de la comparación.

//Triple igual -  Igualdad estricta
5 === "5" //false, porque no son del mismo tipo y los tipos también difieren.

/////////////////////////////////////////////////////////////////////////////////////////////////////////


let celcius = 30;
let fahrenheit = (celcius*1.8) + 32;
console.log( celcius + " grados Celcius  equivale a " + fahrenheit + " grados fahrenheit ");

////////////////////////////////////////////////////////////////////////////////////////////////////////

    Suma (+) 
    Resta (-) 
    Multiplicacion (*)   
    División (/)  
    Residuo o Modulo(%)
    
    Exponenciacion (**)
    Incremento (++)
    Decremento (--)
*/




//Variables
let numero1 = 10;
let numero2 = 2;
let numero3 = "5";

//Operaciones
suma = numero1 + numero2; //12
resta = numero1 - numero2; //8
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2;
exponenciacion = 10 ** 2; //es obsoleto porque ya hay un metodo para esto.

//Impresion del valor con incremento
console.log("Valor del numero 1 antes del incremento: ", numero1);

//NOTA: Cuando usamos incrementos el valor se reasigna (suma y reasigna en la misma operacion)
incremento = numero1++; //11
decremento = numero2--; //1

//Forma extensa de un incremento
numero1 = numero1 + 1;

//Incremento de 10 en 10
numero1 += 10; //20 - suma y reasigna al mismo tiempo



//Impresiones en pantalla
console.log("Suma de 10 + 2 ", suma);
console.log("Resta de 10 - 2 ", resta);

console.log("Valor del numero 1 despues del incremento: ", numero1);


/*Operadores de comparacion

Operadores que nos permiten comparar dos datos, y al hacerlo obtendremos un valor booleano (true o false)

- mayor que (>)
- menor que (<)
- mayor o igual que (>=)
- menor o igual que (<=)
- igual (==)
- estrictamente igual (===)
- no es igual (!=)
- no es estrictamente igual (!==)



Igual (==)
Sirve para comparar que dos valores sean iguales

*/

let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13";

//13 == "13" //true
//13 === "13" // false
//23 > 12 true
//23 < 12 false



let edad = 31;
let saldo = 0;

if (edadFelipe >= 18){
    console.log("Puedes ir a la pachanga");
} else {
    console.log("Te quedas en casa");
}

//Dos negaciones es una afirmación
// !Vamos a comer (No vamos a comer)
// !no me gusta Java (no no me gusta java)

/* 
Operadores de asignacion

Son los operadores  que se utilizan para asignar un valor a una variable. Se usa el operador =

let edad = 31;
let saldo = 0;

*/


/*  
Operadores logicos

Nos devuelven un resultado a partir de que se cumpla o no una condicion, el resultado es booleano (true o false)

- AND &&: Sirve para determinar si dos expresiones son verdaderas. Si ambas son verdaderas el resultado es verdadero. Si alguna de ellas es falsa, todo el resultado es falso. Si ambas son falsas, todo es falso.

*/

let tengoUnCrush = true;
let miCrushMeQuiere = true;

let estoyFeliz = true;

if(tengoUnCrush && miCrushMeQuiere) {
    console.log("Estoy feliz");
} else {
    console.log("Haganse a un lado que me quiero automorir");
}


/* 
 - OR ||: Sirve para determinar si dos expresiones son falsas. Si cualquiera de las dos expresiones es verdadera, todo es verdadero. Si las dos son falsas, todo es falso.
*/

let hayChilaquilesVerdes = false;
let hayCarneEnSuJugo = true;
 if(hayChilaquilesVerdes || hayCarneEnSuJugo){
    console.log("Fatima desayuna chido");
 } else {
    console.log ("Fatima no desayuna chido");
 }


 /* 
 NOT (!): Regresa lo contrario de lo que evaluamos
 */


 //Este codigo esta incompleto, puede ocasionr errores (explicaion de anidacion de operadores logicos)
let escenario1 = (edadFelipe >= 18 && saldoFelipe = !0);
let escenario2 = (edadFelipe >= 18 && amigosQueInviten = true);

 if(escenario1 || escenario2){

 }



