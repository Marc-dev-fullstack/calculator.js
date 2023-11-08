/* window.addEventListener("DOMContentLoaded", function(event) {
    let buttonNumbers = document.querySelectorAll(".number");

    buttonNumbers.forEach(function(number) {
        number.addEventListener("click", function(e) {
            console.log(number.textContent);
        })
    })
}) */

/* Ce code JavaScript ajoute un gestionnaire d'événements à la fenêtre du navigateur qui écoute l'événement "DOMContentLoaded". Lorsque cet événement se produit, la fonction callback spécifiée est exécutée. Voici une explication ligne par ligne du code :

1. `window.addEventListener("DOMContentLoaded", function(event) {`: Cela ajoute un écouteur d'événements à l'objet global `window` pour l'événement "DOMContentLoaded". Cet événement se déclenche lorsque la page web a été entièrement chargée et le DOM (Document Object Model) est prêt à être manipulé.

2. `let buttonNumbers = document.querySelectorAll(".number");`: Cette ligne utilise la méthode `querySelectorAll` pour sélectionner tous les éléments du DOM qui ont la classe CSS "number". Elle stocke ces éléments dans la variable `buttonNumbers`. En d'autres termes, cela sélectionne tous les boutons avec la classe "number" sur la page.

3. `buttonNumbers.forEach(function(number) {`: Cela itère sur chaque élément trouvé dans la collection `buttonNumbers` à l'aide de la méthode `forEach`. Pour chaque bouton (élément HTML), la fonction callback spécifiée est exécutée.

4. `number.addEventListener("click", function(e) {`: Pour chaque bouton, cela ajoute un gestionnaire d'événements pour l'événement "click". Lorsque l'utilisateur clique sur l'un de ces boutons, la fonction callback est déclenchée.

5. `console.log(number.textContent);`: À l'intérieur de la fonction callback de l'événement "click", cette ligne imprime le contenu textuel de l'élément `number` dans la console. Plus précisément, cela affiche le texte contenu dans le bouton sur la console.

En résumé, ce code attend que la page web soit entièrement chargée, sélectionne tous les boutons avec la classe "number", puis ajoute un gestionnaire d'événements "click" à chacun de ces boutons. Lorsqu'un bouton est cliqué, le texte contenu dans ce bouton est affiché dans la console du navigateur. Cela peut être utile pour effectuer des actions en réponse aux clics sur des boutons spécifiques sur une page web. */


window.addEventListener("DOMContentLoaded", function(event) {

    let buttonNumbers = document.querySelectorAll(".number");
    let affichage = document.querySelector(".affichage");
    let clean = document.getElementById("clean");

    clean.addEventListener("click", function() {
        affichage.value = "";
    });

    buttonNumbers.forEach(function(number) {

        number.addEventListener("click", function(e) {
            let tampon = affichage.value;
            let endchar = tampon[tampon.length - 1];

            if (((endchar === "+") && (number.textContent === "+")) || ((endchar === "-") && (number.textContent === "-")) || ((endchar === "*") && (number.textContent === "*")) || ((endchar === "/") && (number.textContent === "/"))) {
                return;
            } else {
                affichage.value += number.textContent;
            }



        });
    });

});