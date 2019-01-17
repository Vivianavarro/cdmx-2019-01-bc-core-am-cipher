//Eventos //
let botone= document.getElementById("cifrar");

botone.addEventListener("click", () => {
const desplazamiento = document.getElementById("offsetsaltos").value;
const mensajeUsuario = document.getElementById("datosPersonales").value;
let ciframiento= window.cipher.encode(desplazamiento, mensajeUsuario);
document.getElementById("codigo").innerHTML = ciframiento;
})