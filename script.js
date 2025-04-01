// Effet de défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animation sur les boutons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert("Ajouté au panier !");
    });
});
