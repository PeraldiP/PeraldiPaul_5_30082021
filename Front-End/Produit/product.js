// Récupération de l'id du produit sélectionné dans l'URL
var urlParam =  new URLSearchParams(window.location.search);
var idParam = urlParam.get('id');

fetch(`http://localhost:3000/api/cameras/${idParam}`)
    .then( data => data.json())
    // Affichage de l'ereur si l'API ne fonctionne pas correctement.
    .catch(error => {
        let productContainer = document.getElementById("product--one");
        productContainer.innerHTML= `Une erreur est survenue, veuillez vérifier si le serveur local a bien été lancé sur le port 3000.`;
        productContainer.style.textAlign = "center";
        productContainer.style.padding = "35vh 0";
    })
    // Affichage des données de la base de données sur la page d'accueil
    .then( jsonArticleId => {
        let article = new Article(jsonArticleId);
        document.getElementById("product--one").innerHTML=`<div class="one-product">        
                                                    <h2 class="one-product__name" src">${article.name}</h2> 
                                                    <div class="one-product__description">                                                               
                                                        <img class="one-product__image" src="${article.imageUrl}">
                                                        <div class="one-product__text">
                                                            <p class=""><span>Description :</span> ${article.description}</p>
                                                            <div>
                                                                <label for="lense-select" class="one-product__lense-select">Choix de la lentille :</label>
                                                                <select name="lense" class="one-product__lense-select__choice">
                                                                    <option value="">--Choississez la taille de la lentille--</option>
                                                                </select>
                                                            </div>    
                                                            <p class="one-product__price"><span>Prix :</span> ${article.getFormatedNumber()} €</p>
                                                        </div>
                                                    </div>
                                                    <input class="one-product__add-cart" type="button" value="Ajout au Panier">
                                                </div>`;
                                                
        // Création de l'emplacement pour la personnalisation d'un article
        let selecteur = '';
        for (let lense of article.lenses) {
            selecteur += `<option value="${lense}">${lense}</option>`;
        }
        document.querySelector('.one-product__lense-select__choice').innerHTML+= selecteur

        //Ajout du produit à la localStorage lors du clic sur le bouton "Ajout au Panier"
        document.querySelector(".one-product__add-cart").addEventListener("click",function(){
            let productAdd = {
                name : article.name,
                price :article.getFormatedNumber(),
                id : idParam,
            };
            addFavorites(productAdd);
            alert("L'article a été ajouté à votre panier");
        });
                                                                                        
    });