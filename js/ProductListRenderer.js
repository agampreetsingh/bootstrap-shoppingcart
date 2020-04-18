//console.log(productList.find(product=> product.id === "Product_1").Description);

function getProductListHTML(){  // The function returns the needed HTML string which has to be used in the page where ever we need to place it
    let productListDom = '';    // This is a separate variable which will contain a String with the HTML that our browser can understand to render. 

    productList.forEach(product=>{
        productListDom += '<div class = "col ">'+
        '<div class="card isolated-card"><center>'+
            '<img src="'+product.productImage+'" class="card-img-top" alt="Product Name">'+
            '<div class="card-body">'+
              '<h5 class="card-title">'+product.name+'</h5>'+
              '<p class="card-text">'+product.Description+'</p>'+
              '<hr><h6 class="card-title">Rs. '+product.price+'</h6><hr>'+
              '<button id="'+product.id+'_button" href="#" class="btn btn-primary" onClick=saveItemToCart("'+product.id+'","'+product.id+'_button")>Add to Cart</button></center>'+
            '</div>'+
          '</div>'+
        '</div>'
    
    })
        return productListDom;
}

document.getElementById("all_products").innerHTML=getProductListHTML();