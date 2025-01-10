//En este codigo puedes iterar los yiel segun las veces que imprimas el constant g

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen(); 
console.log(g.next().value);   //next me permite iterar lo que haya en g
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {    //En esta funcion podemos iterar arrays, osea textos
    for (let value of array) { //por cada array haz que valga un value
        yield value           //aqui decimos que cada valor del array se tome como un yiel
    }
}

const it = iterate(['oscar', 'omar', 'chaparro', 'luci']);
console.log(it.next().value);  //si  no tiene un .value te retorna el estado
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);