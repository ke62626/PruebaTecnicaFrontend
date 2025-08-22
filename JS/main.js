
// 1.  Dentro del archivo main.js crear una función para responder al evento click del botón con el texto Load Products que se encuentra en products.html
    // linea 196   <button class="btn btn-primary my-2" id="btnLoadProducts">Load Products</button>
    // agregar un id al boton para usarlo en la funcion y la constante 

addEventListener("click");


// 2.  Dicho evento debe realizar una llamada a la siguiente API : https://api.escuelajs.co/api/v1/products

const URLmain = "https://fakestoreapi.com/products/";
const btnLoadProducts = document.getElementById("btnLoadProducts");
// 3.  Se debe utilizar la función fetch y recibir los productos como respuesta utilizando los primeros 41 productos para crear cards como las que ya se encuentran dentro de la página products.html



// 4.   Se debe mostrar la primera imagen del producto, título, descripción (recortada a 100 caracteres) y precio.


// 5.  Cada card contiene un botón view que debe mostrar un modal de bootstrap con la descripción completa, también debe incluir las imágenes 2 y 3 (si existen), así como el nombre de la categoría a la que pertenece.


function cargarProductos() {

  fetch("")
   //funcion flecha? para decirle que hacer
      
    }
   

cargarProductos();

