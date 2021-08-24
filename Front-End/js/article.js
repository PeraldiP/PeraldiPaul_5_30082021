class Article {
    constructor(jsonArticle){
        jsonArticle && Object.assign(this, jsonArticle);
    }
    getFormatedNumber(article){
        let numberPrice = this.price*0.01;
        return numberPrice.toFixed(2);
    }
}