fetch("http://localhost:3000/api/cameras")
    .then( data => data.json())
    // Affichage de l'ereur si l'API ne fonctionne pas correctement.
    .catch(error => {
        let productContainer = document.getElementById("products");
        productContainer.innerHTML= `Une erreur est survenue, veuillez vérifier si le serveur local a bien été lancé sur le port 3000.`;
        productContainer.style.textAlign = "center";
        productContainer.style.padding = "20vh 0";
    })
    // Affichage des données de la base de données sur la page d'accueil
    .then( jsonListArticle => {
        for(let jsonArticle of jsonListArticle){
             let article = new Article(jsonArticle);
             document.getElementById("selection").innerHTML+=`<a href="../Produit/product.html?id=${article._id}" class="product">        
                                                                <h2 class="product__title">${article.name}</h2>
                                                                <img class="product__image" src="${article.imageUrl}">
                                                                <p class="product__price">${article.getFormatedNumber()}€</p>
                                                            </a>`;
        }
    });    