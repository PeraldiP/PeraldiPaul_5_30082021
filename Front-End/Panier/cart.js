let listCart = getFavorites();
let total = 0;
for (let productCart of listCart){
    document.getElementById("product--cart").innerHTML+=`<div class="cart-product">  
                                                            <button class="cross" data-id="${productCart[0].id}"><i class="fas fa-times"></i></button>
                                                            <h2>${productCart[0].name}</h2>                                                                
                                                            <p class="one-product__price">${productCart[0].price}€</p>
                                                            <p class="quantity-product">Quantité : ${productCart[1]}</p>                                                     
                                                        </div>`;
                                                        
                                                        let number=parseFloat(productCart[0].price);
                                                        let qty =parseFloat(productCart[1]);
                                                        total += number*qty;
}

document.getElementById('price').innerHTML=total;

document.querySelectorAll(".cross").forEach(cross => {
    console.log(cross);
    cross.addEventListener("click", function () {
        deleteFavorites(this.dataset.id);  
        setTimeout("location.reload(true);", 500);
    });
});