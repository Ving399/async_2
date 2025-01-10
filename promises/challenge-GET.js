import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'; //aqui creamos la variable de la url del API

//aqui creamos la funcion fetch que hara las solicitudes, el urlApi nosotros lo podemos variar
function fetchData(urlApi) {
    return fetch(urlApi);
};

//Aqui usamos la funcion que creamos arriba, aqui urlApi = `${API}/products`
//entonces le decimos que hacer con esa url que trajo
//la pasamos a json y la impimimos
//si hay error lo cachamos con catch

// fetchData(`${API}/products`)
// .then(response => response.json())
// .then(products => {
//     console.log(products);
// })
// .catch(error => console.log(error));

fetchData(`${API}/products`)  //traeme productos
    .then(response => response.json())  //pasa esos productos a json
    .then(products =>{
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`) //de esos productos dame el indice 1 de sus ids
    })
    .then(response => response.json())
    .then(products =>{
        console.log(products.title);
        return fetchData(`${API}/categories/${products.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('finally'));