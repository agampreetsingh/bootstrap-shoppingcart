//console.log(productList.find(product=> product.id === "Product_1").Description);

function getProductListHTML(){
    let productListDom = '';
    
    productList.forEach(product=>{
        productListDom += '<div class = "col ">'+
        '<div class="card isolated-card"><center>'+
            '<img src="'+product.productImage+'" class="card-img-top" alt="Product Name">'+
            '<div class="card-body">'+
              '<h5 class="card-title">'+product.name+'</h5>'+
              '<p class="card-text">'+product.Description+'</p>'+
              '<hr><h6 class="card-title">Rs. '+product.price+'</h6><hr>'+
              '<a id='+product.id+' href="#" class="btn btn-primary">Add to Cart</a></center>'+
            '</div>'+
          '</div>'+
        '</div>'
    
    })
        return productListDom;
}

document.getElementById("all_products").innerHTML=getProductListHTML();