const parado = document.getElementById("parado");
const izquierda = document.getElementById("izquierda");
const derecha = document.getElementById("derecha");
const nombre = document.getElementById("nombre");
const jugador = document.getElementById("jugador");

let posicion = 650;

izquierda.addEventListener("click", function(){
    posicion = Math.max(0, posicion - 15);

    parado.style.left = posicion + "px";

    parado.src = "izquierda.png";

    setTimeout(() => {
        parado.src = "parado.png"
    }, 1000);

});

derecha.addEventListener("click", function() {
    posicion = Math.min(1200, posicion + 15);

    parado.style.left = posicion + "px";

    parado.src = "derecha.png";

    setTimeout(() => {
        parado.src = "parado.png"
    }, 1000);
});

jugador.addEventListener("input", function() {
    let nombreActual = jugador.value;
    nombre.textContent = nombreActual;

    setTimeout(() => {
        jugador.remove = jugador;
    }, 3000);
});