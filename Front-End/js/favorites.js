/**
 * Gestion des favoris, enregistrement d'un article en favoris, retrait d'un article des favoris et récupération de la liste des favoris
 */

 function addFavorites(articleId){
    let flag = 0;
    let listFavorites = getFavorites();
    if (listFavorites.length == 0){
        listFavorites.push(articleId);
    }
    else{
        for (let oneFavorite of listFavorites){
            if(oneFavorite == articleId){
                flag = 1;
            }
        }
        if(flag==0){
            listFavorites.push(articleId); 
        }
    }  
    saveFavorites(listFavorites);
}

function getFavorites(){
    let listFavorites = localStorage.getItem("listFavorites");
    if(listFavorites == null){
        return [];
    }else{
        return JSON.parse(listFavorites);
    }
}

function saveFavorites(listFavorites){
    localStorage.setItem("listFavorites",JSON.stringify(listFavorites));
}