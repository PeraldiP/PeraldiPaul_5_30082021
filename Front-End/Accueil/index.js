fetch("http://localhost:3000/api/cameras")
    .then( data => data.json())
    .catch(error => {
        let productContainer = document.getElementById("products");
        productContainer.innerHTML= `Une erreur est survenue, veuillez vérifier si le serveur local a bien été lancé sur le port 3000.`;
        productContainer.style.textAlign = "center";
        productContainer.style.padding = "20vh 0";
    })
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
    