

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!!'), 2000)
        : reject(new Error('Error!'));
    });
}

// async y await son los que definene que sea asincrona la funcion 

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('hello');
}

//aqui sucede la llamada de la funcion, es similar al equals main...

console.log('before');
anotherFn();
console.log('After')

//en terminal te llega Before-After-Async!!-Hello
//Esto por que primero imprimes before...
//llamas a la funcion...se imprime AAsync y despues la funcion dice que tiene que esperar 2 segundos
//el codigo no se detiene y va a after
//pasan los 2 seg se termina de ejcutar la funcion y se imprime el hello
