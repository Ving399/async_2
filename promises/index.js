// una promesa tiene 3 estados, pendiente , cumplido o rechasada
// se contruye con la palabra reservada con una funcion con dos funciones dentro las cuales son aceptada o denegada
// resolve y reject

const promise = new Promise(function(resolve, reject){
    resolve('hey');
})

const cows = 20;
const countCows = new Promise(function(resolve, reject){
    if(cows > 10) {
        resolve(`Si te alcanza, hay ${cows} en la granja`);
    } else {
        reject("no hay vacas suficientes");
    }
});

countCows.then((result) => {
   console.log(result) 
}).catch((error) =>{
    console.log(error);
}).finally(() => console.log('finally'));