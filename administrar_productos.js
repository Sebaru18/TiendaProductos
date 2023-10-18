document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar elementos del DOM
    const cajonCantidad = document.querySelector('.cajonCantidad');
    const cajon2 = document.querySelector('.cajon2');
    const cajon3 = document.querySelector('.cajon3');
    const cajon4 = document.querySelector('.cajon4');
    const mostrarBtn = document.querySelector('.mostrar');
    const masBtn = document.querySelector('.mas');
    const menosBtn = document.querySelector('.menos');

    // Agregar un evento al botón "Mostrar Producto"
    mostrarBtn.querySelector('button').addEventListener('click', function() {
        const cantidad = cajonCantidad.value;
        const nombre = cajon2.textContent;
        const precio = cajon3.textContent;
        const descripcion = cajon4.textContent;

        // Puedes hacer lo que quieras con los valores, por ejemplo, mostrarlos en la consola
        console.log(`Cantidad: ${cantidad}, Nombre: ${nombre}, Precio: ${precio}, Descripción: ${descripcion}`);
    });

    // Agregar eventos a los botones "+" y "-"
    masBtn.querySelector('button').addEventListener('click', function() {
        // Incrementar la cantidad o realizar otra acción
    });

    menosBtn.querySelector('button').addEventListener('click', function() {
        // Decrementar la cantidad o realizar otra acción
    });
});
