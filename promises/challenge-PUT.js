import fetch from 'node-fetch';  //importas fetch
const API = 'https://api.escuelajs.co/api/v1' //designas la api que usaras


//ESTA FUNCION USA FETCH PARA TRANSFORMAR EL LLAMADO A UN POST
//O SEA TAL CUAL ESTAS DEFINIENDO TU FUNCION PARA HACER UN POST
function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'corse',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
}

// DATA ES LO QUE VAS A ENVIAR POR POST
const data = {

        "title": "Traje de manzana de ving actualizada segunda vez",
        "price": 10,
        "description": "A description",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]
}

const idext = 176;

//AQUI ESTAS RECIBIENDO LA PROMESA POST, RECUERDA QUE DATA ES LO QUE ENVIAS

postData(`${API}/products/${idext}`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));