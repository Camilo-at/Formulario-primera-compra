const mostrarParte2Button = document.querySelector("#mostrarParte2");
const parte1 = document.querySelector(".primera-compra-content-parte-1");
const parte2 = document.querySelector(".primera-compra-overlay-content-parte2");

mostrarParte2Button.addEventListener("click", () => {
    parte1.classList.add("mostrar-parte2");
    parte2.style.transform = "translateX(0%)"
    parte2.style.opacity = "1"
})