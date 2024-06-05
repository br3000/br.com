window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var nav = document.querySelector("nav");

    // Calculez une valeur d'opacité en fonction de la position de défilement
    var opacity = Math.min(1, scrollPosition / 1000);

    // Appliquez l'opacité à la navigation
    nav.style.opacity = opacity;

    // Ajoutez ou supprimez la classe "black" en fonction de la position de défilement
    if (scrollPosition > 350) {
        nav.classList.add("black");
    } else {
        nav.classList.remove("black");
    }
});

window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var image1 = document.getElementById("B");
    var image2 = document.getElementById("R");

    
    var separation = scrollPosition / 5; 

    
    image1.style.transform = "translateX(-" + separation + "px)";
    image2.style.transform = "translateX(" + separation + "px)";
});