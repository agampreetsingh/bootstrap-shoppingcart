let cart = [];
let cartCountDomId = "number_of_cart_items";

// We need a funciton that takes product Id. I am planning to save an object in the cart in the form: {productId:1, quantity:12}
function saveItemToCart(productId, productButtonDomId){

    //Validation First: check if the product id is valid. though we don't need to, but lets just add it so that we can use the code somewhere else too.
    if(isProductIdValid(productId)){
       addToCart(productId, productButtonDomId);
    }
}

function changeCartCountOnPage(){
    document.getElementById(cartCountDomId).innerHTML = cart.length;
}

function disableAddButtonForProduct(productButtonDomId){
    let button = document.getElementById(productButtonDomId);
    button.disabled = true;  
    button.innerText = "Product Added In cart"
}

function isProductIdValid(productId){
    var index = productList.findIndex(product => product.id === productId);
    if(index === -1){
        return false;
    }
    else{
        return true;
    }
}

function increaseQuanity(productId){
    cart.find(cartItem => {
        if(cartItem.productId === productId){
            cartItem.quantity = cartItem.quantity + 1;
            return cartItem;
        }
    });
}

function addToCart(productId, productButtonDomId){
    cart.push({productId:productId, quantity:1})   
    disableAddButtonForProduct(productButtonDomId);
    changeCartCountOnPage();
}