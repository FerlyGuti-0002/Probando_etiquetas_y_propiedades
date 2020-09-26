//alert('Hola Mundo!!!');
//document.getElementById('encabezado').innerHTML = "Bienvenido a este curso";

//Variables
var miVariable = 10;
let miOtraVariable = "Hola";
const pi = 3.1415;

//Reasignacion
miVariable = 20;
miOtraVariable = "Bienvenido";

let mi_arreglo = [1,2,"Ferly",true];
console.log(mi_arreglo[2]);

//Variables
alert('Hola Mundo');
var num1 = 5, num2 = 2;
let total = 0; 

total = num1 - num2;
console.log("La suma es", total);

//Operadores de asignación
let suma = 5+2; //7
suma += 2; //suma = suma + 2 = 9
console.log("Suma : " + suma);
suma -= 2; // 7
console.log(`Resta: ${suma}`);
suma *= 3; // 21
console.log('Multiplicacion: ', suma);

//Condicionales
let edad = prompt("Ingrese su edad");
if(edad > 18)
{
    console.log('Mayor de edad');
}else{
    console.log('Menor de edad');
}

//Operador ternario
let precio = 10.5;
let dia = "Lunes";

dia === "Martes" ? precio-=1.5 : precio+=1.5;
console.log("El precio es: " + precio); 

//Funciones
function lanzarCohete()
{
    return 'BOOM';
}

let lanzando = lanzarCohete();
console.log(lanzando);

let saludo = function () {
    console.log('Hola');
}
saludo();

//funciones flecha en ES6   
const multiplicar = (a,b) => a*b;
console.log(multiplicar(2,4));

const Saludar = () => {
    console.log('Hola Bienvenido');
}
Saludar();

//Funciones de orden superior
const esPar = (n) => {
    return n % 2 == 0;
}

let imprimirMensaje = (funcionPar, num) => {
    const esNumPar = funcionPar(num);
    console.log(`El numero ${num} es par: ${esNumPar}`);
}
imprimirMensaje(esPar,5);

//Matrices
const numeros = [1,2,7,8];

if(numeros.length == 5){
numeros.push(6);//Agrega al final
console.log(numeros);
} else {
numeros.pop();//Saca del fijal
console.log(numeros);//1,2,7

}

//bucle while
let i = 0;
while(i<10)
{
    console.log("El numero: ", i);
    i++;
}

//bucle do while
let k =0;
do{
    console.log("El numero: ", k);
    k++; 
}while(k < 10);

//bucle for
for(let j = 1; j<=10; j++){
    console.log("La variable ",j);
}

//Objetos
const persona = {
    nombre: 'Juan',
    edad: 12
}
console.log(persona.edad);