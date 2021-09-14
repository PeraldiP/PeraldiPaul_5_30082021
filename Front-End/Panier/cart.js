let listCart = getFavorites();
let total = 0;
// Affichage de chaque article dans le panier et calcul du prix total.
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

// Suppression d'un article dans le panier par l'utilisateur lors du clic sur la croix.
document.querySelectorAll(".cross").forEach(cross => {
    cross.addEventListener("click", function () {
        deleteFavorites(this.dataset.id);  
        setTimeout("location.reload(true);", 500);
    });
});

// On récupère les inputs depuis le DOM.
const submit = document.querySelector(".submit");
let inputName = document.querySelector("#name");
let inputLastName = document.querySelector("#lastname");
let inputAdress = document.querySelector("#adress");
let inputCity = document.querySelector("#city");
let inputPostal = document.querySelector("#postal");
let inputMail = document.querySelector("#mail");
let erreur = document.querySelector(".erreur");

// Lors d'un clic, si l'un des champs n'est pas rempli, on affiche une erreur, on empêche l'envoi du formulaire. On vérifie aussi que le numéro est un nombre, sinon même chose.
submit.addEventListener("click", (e) => {
  if (
    !inputName.value ||
    !inputLastName.value ||
    !inputPostal.value ||
    !inputCity.value ||
    !inputAdress.value ||
    !inputMail.value
  ) {
    erreur.innerHTML = "Vous devez renseigner tous les champs !";
    e.preventDefault();
  } else {
    // Si le formulaire est valide, le tableau productsBought contiendra un tableau d'objet qui sont les produits acheté, et order contiendra ce tableau ainsi que l'objet qui contient les infos de l'acheteur
    let productsBought = [];
    for (let cart of listCart) {
      productsBought.push(cart[0].id);
    }
    
    console.log(productsBought);
    const order = {
      contact: {
        firstName: inputName.value,
        lastName: inputLastName.value,
        city: inputCity.value,
        address: inputAdress.value,
        email: inputMail.value,
      },
      products: [productsBought],
    };

    // -------  Envoi de la requête POST au back-end --------
    // Préparation du prix formaté pour l'afficher sur la prochaine page
    let priceConfirmation = document.querySelector("#price").innerText;

    // Envoie de la requête avec l'en-tête. On changera de page avec un localStorage qui ne contiendra plus que l'order id et le prix.
    fetch("http://localhost:3000/api/cameras/order",{
      method: "POST",
      headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json' 
    },
      body: JSON.stringify(order)
    })
    .then((response) => response.json())
    .then((data) => {
      localStorage.clear();
      localStorage.setItem("orderId", data.orderId);
      localStorage.setItem("total", priceConfirmation);

      //  On peut commenter cette ligne pour vérifier le statut 201 de la requête fetch. Le fait de préciser la destination du lien ici et non dans la balise <a> du HTML permet d'avoir le temps de placer les éléments comme l'orderId dans le localStorage avant le changement de page.
      document.location.href = "../Confirmation/confirmation.html";
    })
    .catch((err) => {
      alert("Il y a eu une erreur : " + err);
    });
  }
});
