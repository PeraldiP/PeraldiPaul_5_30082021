/**
 * Gestion des favoris, enregistrement d'un article en favoris, retrait d'un article des favoris et récupération de la liste des favoris
 */

 function addFavorites(productAdd){
    let flag = 0;
    let listFavorites = getFavorites();
    if (listFavorites.length == 0){
        listFavorites.push([productAdd,1]);
    }
    else{
        for (let oneFavorite of listFavorites){
            if(oneFavorite[0].id == productAdd.id){
                flag = 1;
                oneFavorite[1]+=1;
            }
        }
        if(flag==0){
            listFavorites.push([productAdd,1]);                
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

function deleteFavorites(articleId){
    let listFavorites = getFavorites();
    for(let i = 0; i < listFavorites.length; i++){
        if(listFavorites[i][0].id===articleId){
            listFavorites.splice(i,1);
        }
    }
    saveFavorites(listFavorites);
}