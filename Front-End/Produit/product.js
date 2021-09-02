var urlProduct = document.location.href;
var url = new URL(urlProduct);
var idProduct = url.searchParams.get("id");
var urlPage ="http://localhost:3000/api/cameras/"+idProduct;
fetch(urlPage)
    .then( data => data.json())
    .then( jsonArticleId => {
        let article = new Article(jsonArticleId);
        document.getElementById("product--one").innerHTML=`<div class="one-product">        
                                                    <h2>${article.name}</h2> 
                                                    <div class="one-product__description">                                                               
                                                        <img class="one-product__image" src="${article.imageUrl}">
                                                        <div class="one-product__text">
                                                            <p class=""><span>Description :</span> ${article.description}</p>
                                                            <div>
                                                                <label for="lense-select" class="one-product__lense-select">Choix de la lentille :</label>
                                                                <select name="lense" lass="one-product__lense-select__choice">
                                                                    <option value="">--Choississez la taille de la lentille--</option>
                                                                    <option value="${article.lenses[0]}">${article.lenses[0]}</option>
                                                                    <option value="${article.lenses[1]}">${article.lenses[1]}</option>
                                                                </select>
                                                            </div>    
                                                            <p class="one-product__price"><span>Prix :</span> ${article.getFormatedNumber()}€</p>
                                                        </div>
                                                    </div>
                                                    <input class="one-product__add-cart" type="button" value="Ajout au Panier">
                                                </div>`;
        
        document.querySelector(".one-product__add-cart").addEventListener("click",function(){
            addFavorites(idProduct);
        });
                                                                                        
    }); 


