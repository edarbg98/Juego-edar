const parado = document.getElementById("parado");
const izquierda = document.getElementById("izquierda");
const derecha = document.getElementById("derecha");
const nombre = document.getElementById("nombre");
const jugador = document.getElementById("jugador");
const juego = document.querySelector(".juego");

let posicion = 0;

function obtenerLimite() {
    return Math.max(0, juego.clientWidth - 100);
}

function ajustarPosicionInicial() {
    posicion = Math.round(obtenerLimite() / 2);
    parado.style.left = posicion + "px";
}

function moverIzquierda() {
    posicion = Math.max(0, posicion - 15);
    parado.style.left = posicion + "px";
    parado.src = "izquierda.png";

    setTimeout(() => {
        parado.src = "parado.png";
    }, 1000);
}

function moverDerecha() {
    posicion = Math.min(obtenerLimite(), posicion + 15);
    parado.style.left = posicion + "px";
    parado.src = "derecha.png";

    setTimeout(() => {
        parado.src = "parado.png";
    }, 1000);
}

izquierda.addEventListener("click", moverIzquierda);
izquierda.addEventListener("touchstart", moverIzquierda);

derecha.addEventListener("click", moverDerecha);
derecha.addEventListener("touchstart", moverDerecha);

jugador.addEventListener("input", function() {
    let nombreActual = jugador.value;
    nombre.textContent = nombreActual;
});

window.addEventListener("resize", ajustarPosicionInicial);
ajustarPosicionInicial();