$("document").ready(function(){
    getProducts();
});
function saveProduct(){
    let nombre=$("#product-name").val();
    let desc=$("#product-desc").val();
    let price=$("#product-price").val();

    let data={
        name:nombre,
        description:desc,
        price:price
    };


    $.ajax({
        dataType: 'json',
        data:JSON.stringify(data),
        url:"api/product/save",
        type:'POST',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
            $("#product-name").val("");
            $("#product-desc").val("");
            $("#product-price").val("");
            getProducts();
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });


}

function getProducts(){
    $.ajax({
        dataType: 'json',
        url:"api/product/all",
        type:'GET',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
            let m="";
            for(let i=0;i<response.length;i++){
                m+=response[i].id+") "+response[i].name+"     "+response[i].description+"  $"+response[i].price+"<br>";
            }
            $("#resultados").html(m);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });


}
