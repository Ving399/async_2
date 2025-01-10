import fetch from 'node-fetch';  // Importas fetch
const API = 'https://api.escuelajs.co/api/v1';  // Designas la API que usarás

// Esta función usa fetch para transformar el llamado a un DELETE
// O sea, defines tu función para hacer un DELETE
function deleteData(urlApi) {
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',  // Asegúrate de que esté bien escrito, es 'cors'
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

const idext = 176; //ID a eliminar

// Aquí estás llamando a la función deleteData con la URL del recurso que deseas eliminar
deleteData(`${API}/products/${idext}`)  // Asegúrate de poner el ID correcto del producto que deseas eliminar
    .then(response => {
        if (response.ok) {
            console.log('Producto eliminado exitosamente');
        } else {
            console.error('Error al eliminar el producto');
        }
    })
    .catch(error => console.error('Error:', error));
