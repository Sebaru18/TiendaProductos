
document.addEventListener("DOMContentLoaded", function() {

     //Campos del front


     var nombreProducto = document.getElementById("nombre");
     var precioProducto = document.getElementById("precio");
     var descripcion = document.getElementById("descripcion");
     var campoID = document.getElementById("id");
     var infoMostrada = document.getElementById("infoMostrada");


    var botonCargar = document.getElementById("cargarInfo");
    var botonGuardar = document.getElementById("guardarInfo");


     //Action listeners para los botones
     botonCargar.addEventListener("click", function() {
        funcion1();
     });

     botonGuardar.addEventListener("click", function() {
        funcion2();
     });

 });


     function funcion1(){
        console.log("Metodo1 get by id")
         // Obtiene el valor del campo de texto

         let id = $("#id").val();
         console.log(id)
         // Realizar el llamado Ajax con jQuery
         $.ajax({
             type: "GET",
             url: "/api/product/get-by-id", // URL del método
             data: { "id": id }, // Envía el valor del campo de texto como parámetro
             success: function (response) {
                console.log("Sep, encontré algo")
                console.log(response.nombre)

             },
             error: function () {
                 alert("No se pudo obtener el producto");
             }
         });

     }

     function funcion2() {
             console.log("Metodo 2 guardar el producto")
          let nombreProducto=$("#nombreProducto").val();
          let precioProducto=$("#precioProducto").val();
          let descripcion=$("#descripcion").val();

            console.log(nombreProducto)
            console.log(precioProducto)
            console.log(descripcion)

            //Construyo el producto con los campos necesarios.
            var producto = {
                "nombre": nombreProducto,
                "precio": precioProducto,
                "descripcion": descripcion
            };
            console
             $.ajax({

                 type: "POST",
                 url: "/api/product/save", // URL del método
                 contentType: "application/json",
                 data:  JSON.stringify(producto), // Envía el valor del campo de texto como parámetro
                 success: function (response) {

                     alert("Producto guardado exitosamente");
                 },
                 error: function () {
                     alert("No se pudo guardar el producto");
                 }
             });

     }
