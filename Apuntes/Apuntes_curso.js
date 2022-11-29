/*============
    Variables
=============*/
// var let const

var nombre='juan';
console.log(nombre)

var primerNombre="juan";// camelcase
var primer_nombre="juan";//underscore
var PrimerNombre="juan";//pascal case
var primernombre="juan";

//let
/* Let no permite redefinir nuevamente la misma variable*/
var nombre='juan';
var nombre='juan';

let nombre2='juan';
nombre2='juan';

//conts
const poducto="camisa";

let  mensaje;
//escapar comillas
mensaje='y entonces dije \'buen curso\'';

let aprendiendo ="Aprendiendo",
    tecnologia  ="JavaScript";

    //Backtist
    console.log(`${aprendiendo} ${tecnologia}`);

    //VIDEO 8 y 9

    mensaje='Aprendiendo javascript, css,html paras ser frontend';

    //console.log(mensaje.indexOf('javascript'));
    //console.log(mensaje.substring(0,11));
    //console.log(mensaje.slice(-2));
    //console.log(mensaje.split(' '));
    console.log(mensaje.repeat(10));


/*=========================================
Numeros en javascript operadores aritmeticos
=========================================*/

const numero1=30;
const numero2=20;
const numero3=-3;


let resultado;

//suma
resultado = numero1+numero2;
//Resta
resultado = numero1-numero2;
//Multiplicacion
resultado = numero1*numero2;
//Division
resultado = numero1/numero2;
//Modulo
resultado = numero1%numero2;
//Con objetos
//Pi
resultado = Math.PI;
//Redondeo
resultado = Math.round(2.5);// Redondeo equitativo
resultado = Math.ceil(2.5);// Redondeo hacia arriba
resultado = Math.floor(2.5);// Redondeo hacia abajo
//Raiz cuadrada
resultado = Math.sqrt(144);
//Numero absoluto
resultado = Math.abs(numero3);
//Potencia
resultado = Math.pow(8,3);
//Minimo
resultado = Math.min(8,6,14,80,30,10,8,8,3);
//Maximo
resultado = Math.max(8,6,14,80,30,10,8,8,3);
//Aleatorio
resultado =Math.random();
// Realizando primero  la suma y depsues la multiplicación
resultado = (10+20)*5; 
//Aplicando el 20% de descuento pero  primero  realizando  la suma
resultado = (10+20+20+10+10) *.20; 
//Incremento
let puntaje=30;
//Incremento despues de llamar la variable
puntaje++;
//Incremento antes de llamar la variables
++puntaje;
//Decremento despues de llamar la variable
puntaje--;
//Decremento antes de llamar la variables
--puntaje;
//Incremento o decremento por x valor
puntaje+=50;
puntaje-=50;


/*=================
   Tipos de datos
==================*/

let valor;
valor ="cadena de  texto";
valor='20';
//boleanos
valor=true;
//null
valor=null;
//symbol
valor=Symbol('simbolo');
//Arreglo
valor=[1,2,3,4,5];
//Objeto
valor={
    nombre:'Jonathan',
    profesion:'desarrollador web'
}
//Fecha
valor= new Date();

//console.log(typeof(valor));


/*=============================
  Convertir strings  a numeros
==============================*/

//console.log(typeof(Number('50')))
//console.log(typeof(parseInt('50')))  

let dato
dato =Number("20");
dato =Number("20.10931");
dato =Number(true);
dato =Number(false);
dato =Number(null);
dato =Number(undefined);
dato =Number('Hola mundo');
dato =Number(Number[1,2,3,4,5]);

//parseFloat y parseInt
dato =parseInt('100');
dato =parseFloat('100');
dato =parseFloat('100.2030');
dato =parseFloat('100.5101');

//toFixed deja un numero fijo sin decimales  y tambien con los decimales que le coloquemos

dato='103264.65465454654445'
dato=parseFloat((dato)).toFixed();

console.log(dato)

/*====================================
  Convertir  de un numero a un string
              video 16
======================================*/

const nombre4 ='juan'.length;

let  codPostal;
codPostal=String(codPostal).length;


/* Template literals */

//version antigua

const producto1='Pizza',
      precio1 =30,
      producto2="Hamburguesa",
      precio2=40;

let html;

/*
html='<ul>'+
      '<li>Orden:'+ producto1 + '</li>'+
      '<li>Precio:'+ precio1 + '</li>'+
      '<li>Orden:'+ producto2 + '</li>'+
      '<li>Precio:'+ precio2 + '</li>'+
      '<li>Total:'+ (precio1+precio2) + '</li>'+
      '</ul>';

      console.log(html)



*/

//ctrl+shif+u+60 ``

html =`
       <ul> 
       <li>Orden:  ${producto1} </li>
       <li>Precio: ${precio1}   </li>
       <li>Orden:  ${producto2} </li>
       <li>Precio: ${precio2}   </li>
       <li>Total:  ${total(precio1,precio2)}   </li>
       </ul> 
      `;

      function total(precio1,precio2){
        return precio1+precio2;
      }

      document.getElementById('app').innerHTML=html;



      /*=======================
            Arreglos video 18
      =========================*/

    //Declarar un array
  const numeros=[10,20,30,40,50];
  const meses = new Array('Enero','Febrero','marzo','abril');
 
  // Añadir al final de  un arreglo
  meses[4]='mayo';
  meses.push('junio');

  //Añadir al inicio del arreglo
  meses.unshift('Mes 0');    

  //Eliminar el ultimo elemento de un arreglo
  meses.pop();

  //Eliminar el primer elemento de un arreglo
  meses.shift();

  //Eliminar un elemento de un arreglo personalizado
  meses.splice(2,1);//elimina el 2do elemento del arreglo solo elemento eliminamos
  
  //Revertir el orden del arreglo 
  meses.reverse(); 

  //Coprobar  si es un array
   console.log(Array.isArray(meses));

   //Unir un arreglo con otro
   let arreglo1 = [1,2,3],
       arreglo2 = [9,8,7];

   arreglo1.concat(arreglo2); 



  //Ordenar un arreglo alfabeticamnete y numericamente y alfanumericamente
  const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja'];
  frutas.sort(); 

  //console.log(frutas);

 //Ordenar numeros

  arreglo1=[332,331,5,8,9,7,4,6,3,9,8,5,25,5,90,66,];

  //arreglo1.sort();//Orden solo por el primer digito
  
  arreglo1.sort(function(x,y){
    return x-y;
  });
 

  console.log(arreglo1);

/* Los arreglos declarados como constantes se
pueden cambiar su valor o agregar nuevos pero no se pueden declarar nuevamente*/

    const num =[1,2,3];

      num[0]=4;
      num.push(5);



  /*=================
        Objetos
  ==================*/

// llave : valor
  const persona={
     nombre: 'Miguel',
     apellido:'Martinez',
     profesion:'diseñador grafico',
     email:'correo@gmail.com',
     edad:30,
     musica: ['Trance','Rock','Grunge'],
     hogar:{
       ciudad:'guadalajara',
       pais: 'mexico'
     },
     fechaCumple: function(){
       return new Date().getFullYear()-this.edad;
     }
  }
//acceder a arrays en objetos
//console.log(persona.musica[1]);

//acceder a otro objeto dentro de un objeto 
console.log(persona.fechaCumple()) 
      

//Arreglos de objetos

const autos =[
  {modelo:'Mustang', motor:6.0},
  {modelo:'Camaro', motor:6.1},
  {modelo:'Challenger', motor:6.3},
];

for (let i = 0; i < autos.length; i++) {
  console.log(`${autos[i].modelo} ${autos[i].motor}`);
  
}
//Si se puede modicar los valores cuando se accede de una forma individual un objeto igual que los ded un arreglo
// Lo que no se puedehacer es reasignar la constante

autos[0].modelo= 'audi';
//console.log(autos[0].modelo)

//video 23


/*=================
      Funciones 
===================*/


function saludar(name ='Visitante'){//forma nueva
  //if(typeof name === 'undefined'){ name='Visitante'} forma vieja
  return `Hola ${name}`;
}

let saludo;
saludo=saludar();

//console.log(saludo)

function sumar(a,b){
return a+b;
}

let suma;
suma=sumar(5,15);

//console.log(suma)

//function expression
const suma2 = function(a = 3,b = 4){
  return a+b;
}
//console.log(suma2(1,2));


const saludar2 = function(name = "Visitante", age = 20, job = 'desarrollador web' ){
  return `Hola, tienes ${age}, profesion ${job} y te llamas ${name}`;
};
//console.log(saludar2('Jonathan',22,'Desarrollador web'));


// Funciones IIFE
(function(tecnologia){
//console.log(`Aprendiendo ${tecnologia}`)  
})('JavaScript');

// Metodos de propiedad
//  funcion dentrode un objeto


const musica ={
reproducir: function(id){
console.log(`Reproduciendo canción ${id}`)
},
pausar:function(){
  console.log(`Pause a la música`)
} 
}

//Los metodos tambien pueden crearse o guardarse fuera del objeto


musica.borrar=function(id){
    console.log(`Borrando la canción con el id ${id}`)
}

musica.reproducir(30);
musica.pausar();
musica.borrar(2);


/* Errores try catch */
try {
  algo(); // función indefinida pararia la ejecucion del codigo
} catch (error) {
  console.log(error);
}finally{
  console.log('No le importa ejecuta dde todos modos')
}


function obtenerClientes(){
  console.log('Descargando ....');

  setTimeout(function(){
      console.log('Completo')
  },3000)  
}

//obtenerClientes();

/* Fechas */

//En javascript existe un objeto llamado Date

const date = new Date();

//Fecha en especifico

let navidad2017 =new Date('12-25-2017');

//Distintos metodos 

//Mes
let fechas;
fechas = date.getMonth();
//Dia
fechas = date.getDate();
fechas = date.getDay();
//Obtener el año
fechas = date.getFullYear();
//Minutos
fechas = date.getMinutes();
//Hora
fechas = date.getHours();
// Milisegundos desde 1970
fechas = date.getTime();

//Modificar el valor
fechas = date.setFullYear(2019);
fechas = date.getFullYear();




console.log(fechas)


/*==========
    Foreach
  ==========*/


const pendientes = ['Tarea','Comer','Proyecto', 'Aprender','Javascript'];

  pendientes.forEach(function(pendiente, index){ // valor y indice
      console.log(`${index} : ${pendiente}`);
  });


  //Map para recorrer un carrito de objetos

  const carrito = [
    {id: 1, producto: 'libro' },
    {id: 2, producto: 'Camisa' },
    {id: 3, producto: 'Guitara' },
    {id: 4, producto: 'Disco' }
  ];

  const nombreProducto = carrito.map(function(carrito){
    return carrito.producto; 
  });

  console.log(nombreProducto);


  const automovil = {
    modelo: 'Camaro',
    motor:  6.1,
    anio: 1969,
    marca: 'chevrolet'

  }

  for(let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`)
  }



  //Iteradores de javascript

const ciudades = ['Londres','New york','Madrid', 'Paris'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map();
datos.set('nombre','Juan');
datos.set('profesion','desarrolador web');
console.log(datos);
/*
console.log(ciudades);
console.log(ordenes);
console.log(datos);
*/

//Entries iterador
//El metodo entries me devuelve la llave y el valor
for (const entrada of ciudades.entries()) {
  console.log(entrada)
  
}
// Por defecto nos devuelve los valores
for (const entrada of ciudades) {
  console.log(entrada)
  
}

//Entries para las ordenes
for (const entrada of ordenes.entries()) {
  console.log(entrada)
  
}

//Entries para el map
for (const entrada of datos.entries()) {
  console.log(entrada);
}
//El metodo keys nos devolvera la llave
for (const entrada of datos.keys()) {
  console.log(entrada);
}

// Iteradores para string

const sms = 'Aprendiendo javascript';

for(let i=0; i<sms.length; i++){
  console.log(sms[i]);
}

for (const letra of mensaje) {
    console.log(letra);
}


const enlaces = document.getElementsByTagName('a');

for(let enlace of enlaces){
  console.log(enlace.href);
}


//window object
//Tambien pertenece al objeto  window object sin necesidad de colocar el  global window.console.log() o window.prompt()
//console.log();
//prompt();
//confirm();


let altura,ancho;

altura = window.outerHeight;//toda la ventana incluida la interfaz del navegador
anchura = window.outerWidth;


altura = window.innerHeight;//solo la ventana sin la interfas y demas elementos
anchura = window.innerWidth;

//console.log(altura);
//console.log(anchura);


//Ubicación

let ubicacion;

//toma el dato de la url http://127.0.0.1:5500/?s=busqueda
ubicacion = window.location.search;
//window.location.href ="#";



/* Navigator */

ubicacion = window.navigator;
ubicacion = window.navigator.appName;
ubicacion = window.navigator.appVersion;
ubicacion = window.navigator.userAgent;

ubicacion = window.navigator.language;// idioma en que el usuario tiene su computadora

console.log(ubicacion);

//scope


var a = 'a';
let b = 'b';
const c = 'c';

//scope de la funcion 
function funcionScope(){

  var a = 'a';
  let b = 'b';
  const c = 'c';
  console.log('FUNCION '+a,b,c);
}
funcionScope();

//scope de bloque de codigo
if(true){
  var a = 'AA';
  let b = 'BB';
  const c = 'CC';
  console.log('BLOQUE: ' + a,b,c);
}


