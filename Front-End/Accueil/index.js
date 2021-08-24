fetch("http://localhost:3000/api/cameras")
    .then( data => data.json())
    .then( jsonListArticle => {
        for(let jsonArticle of jsonListArticle){
             let article = new Article(jsonArticle);
             document.getElementById("selection").innerHTML+=`<a href="../Produit/product.html?id=${article._id}" class="products" data-id="${article._id}">        
                                                                <h2 class="products__title">${article.name}</h2>
                                                                <img class="products__image" src="${article.imageUrl}">
                                                                <p class="products__price">${article.getFormatedNumber()}€</p>
                                                            </a>`;
        }
    });