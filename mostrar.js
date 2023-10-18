document.addEventListener('DOMContentLoaded', function() {
    // Asociando el evento click al botón "Mostrar Producto"
    document.querySelector('.mostrar button').addEventListener('click', function() {
        var cantidad = document.querySelector('.cajonCantidad').value;
        var id = document.querySelector('.cajon').textContent;
        var nombre = document.querySelector('.pppc4 input').value;
        var precio = document.querySelector('.cajon3').textContent;
        var descripcion = document.querySelector('.cajon4').textContent;
        
        console.log("Cantidad: " + cantidad);
        console.log("ID: " + id);
        console.log("Nombre: " + nombre);
        console.log("Precio: " + precio);
        console.log("Descripción: " + descripcion);
        
        // Aquí puedes realizar cualquier operación adicional con los datos recopilados.
    });
    
    // Asociando el evento click al botón "+"
    document.querySelector('.mas button').addEventListener('click', function() {
        var cantidad = parseInt(document.querySelector('.cajonCantidad').value);
        document.querySelector('.cajonCantidad').value = cantidad + 1;
    });
    
    // Asociando el evento click al botón "-"
    document.querySelector('.menos button').addEventListener('click', function() {
        var cantidad = parseInt(document.querySelector('.cajonCantidad').value);
        if (cantidad > 0) {
            document.querySelector('.cajonCantidad').value = cantidad - 1;
        }
    });
});


