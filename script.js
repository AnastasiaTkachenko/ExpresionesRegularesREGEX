
console.log('Validar un IBAN')

/* Caso 1 - Validar que se informa con dos letras, y los números correspondientes. */

var pattern = /^\w{2}\d{22}$/;
var values = ['ES6600190020961234567890'];

values.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));  
});

/* Caso 2 - Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas. */

var pattern = /^\w{2}\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
var values = ['ES6600190020961234567890','ES66 0019 0020 9612 3456 7890'];

 values.forEach(value => {
  console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));  
});  

/* Caso 3 -  Vamos a extraer el código de páis y el dígito de control. */

var pattern = /(^\w{2}\d{2})\d{20}$/;
var values = ['ES6600190020961234567890'];

values.forEach(value => {
   console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));  
 });  

 console.log('Validar matrícula coche')

/*  Caso 1 - Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar.  */

var pattern = /^\d{4}\s?\S?\w{3}$/;
var values = ['2021 GMD','2345-GMD', '4532BDB', '0320-AAA'];

values.forEach(value => {
   console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));  
 });  

 /* Caso 2 - Vamos a extraer por un lado la parte numérica y por otro las letras. */

var pattern = /(^\d{4})\s?\S?(\w{3}$)/;
var values = ['2021 GMD','2345-GMD', '4532BDB', '0320-AAA'];

values.forEach(value => {
   console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));  
 });  

