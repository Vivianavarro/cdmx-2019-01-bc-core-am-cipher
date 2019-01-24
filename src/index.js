let botone = document.getElementById("cifrar");

botone.addEventListener("click", () => {
  const desplazamiento = document.getElementById("offsetsaltos").value;
  const mensajeUsuario = document.getElementById("datosPersonales").value;
  let ciframiento = window.cipher.encode(desplazamiento, mensajeUsuario);
  document.getElementById("codigo").innerHTML = ciframiento;
})

let botono = document.getElementById("descifrar");

botono.addEventListener("click", () => {
  const desplazamientoV = document.getElementById("offsetsaltos").value;
  const mensajeUsuarioV = document.getElementById("datosPersonales").value;
  let desciframiento = window.cipher.decode(desplazamientoV, mensajeUsuarioV);
  document.getElementById("codigo").innerHTML = desciframiento;
})
