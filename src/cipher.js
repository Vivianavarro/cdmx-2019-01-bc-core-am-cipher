window.cipher = {
  encode: (desplazamiento, mensajeUsuario) => {
    let infoCifrada = ""
    for (let i = 0; i < mensajeUsuario.length; i++) {
      let mensajeMayuscula = mensajeUsuario.toUpperCase();
      let mensaje2 = (mensajeMayuscula.charCodeAt(i) - 65 + parseInt(desplazamiento)) % 26 + 65;
      let resultado = String.fromCharCode(mensaje2);
      infoCifrada += resultado;
    }
    return infoCifrada;
  },

  decode: (desplazamiento, mensajeUsuario) => {
    let infoDecifrada = "";
    for (let i = 0; i < mensajeUsuario.length; i++) {

      let textoDecifrada = (mensajeUsuario.charCodeAt(i) + 65 - parseInt(desplazamiento)) % 26 + 65;

      let resultado = String.fromCharCode(textoDecifrada);

      infoDecifrada += resultado;
    }
    return infoDecifrada;
  }
};
