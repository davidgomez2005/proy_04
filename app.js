//Paquete importado
require('colors');

// referencia el modulo math a traves de la constante math  
const math = require('./modules/math.js')

console.clear();
console.log(math);

const main = async() => {
        console.log('**************************************'.green);
        console.log('*   '.green,'Funciones matematicas'.bgGreen,
                    '   *'.green);
        console.log('*********************************\n'.green);
        console.log('*********************************'.cyan);
        console.log('*                               *'.cyan);
    
        console.log(math.add(5,3));
        console.log(math.substract(5,3));
        console.log(math.multiply(5,3));
        console.log(math.divide(5,3));
        
        
    console.log('*****************************' .red);
    console.log('*  '.red, 'Funciones Matematicas'.green,
                '  *'.red);
    console.log('*****************************\n'.red);

var lineas = '*****************************'.green
var linea1 = '*'.green
var linea2 = '*                           *'.green

var numero1 = Math.floor(Math.random() * 10) + 1;
var numero2 = Math.floor(Math.random() * 10) + 1;

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

console.log(lineas);
console.log('* '.green, 'NUMEROS GENERADO: '.cyan + numero1 + 
         ", " + numero2, ' *'.green);
console.log(linea2);
console.log(linea1 + "  Suma ".magenta + '('.magenta, numero1,
          '+'.magenta,numero2,')= '.magenta +  suma, '     *'.green);
console.log(linea1 + "  Resta ".magenta + '('.magenta, numero1,
        '-'.magenta,numero2,')= '.magenta + resta, '        *'.green);
console.log(linea1 + "  Multiplicación ".magenta + '('.magenta, 
        numero1, '*'.magenta,numero2,')= '.magenta + multiplicacion, ' *'.green);
console.log(linea1 + "  División ".magenta+ '('.magenta, numero1,
         '/'.magenta,numero2,')= '.magenta + division, '    *'.green);
console.log(linea2);
console.log(lineas);

}

main();
