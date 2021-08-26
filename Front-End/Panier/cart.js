let listCart = localStorage.getItem("listFavorites");
let listCartJSON = JSON.parse(listCart);
for (let productCart of listCartJSON){
    fetch("http://localhost:3000/api/cameras/"+productCart)
        .then( data => data.json())
        .then( jsonArticleId => {
            let article = new Article(jsonArticleId);
            document.getElementById("product--cart").innerHTML+=`<div class="cart-product">  
                                                                    <i class="fas fa-times"></i>
                                                                    <h2>${article.name}</h2>                                                                
                                                                    <img class="one-product__image" src="${article.imageUrl}"> 
                                                                    <p class="one-product__price">${article.getFormatedNumber()}€</p>
                                                                    <p class="quantity-product">1</p>                                                     
                                                                </div>`;
                                                                                            
    }); 
}
