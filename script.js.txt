document.addEventListener("DOMContentLoaded", function() {
    const boutonsAjout = document.querySelectorAll(".ajouter-panier");

    boutonsAjout.forEach(bouton => {
        bouton.addEventListener("click", function() {
            alert("Produit ajouté au panier !");
        });
    });
});
