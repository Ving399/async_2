function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

setTimeout(function () {
    console.log('hola js');
}, 5000)

function saludo(name) {
    console.log(`Hola ${name}`);
}

setTimeout(saludo, 4000, 'oscar');