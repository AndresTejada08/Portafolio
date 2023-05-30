// Define la función para encriptar el texto
function encriptar(texto, clave) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      let codigo = texto.charCodeAt(i);
      if (codigo >= 65 && codigo <= 90) {
        // Si el caracter es una letra mayúscula
        resultado += String.fromCharCode(((codigo - 65 + clave) % 26) + 65);
      } else if (codigo >= 97 && codigo <= 122) {
        // Si el caracter es una letra minúscula
        resultado += String.fromCharCode(((codigo - 97 + clave) % 26) + 97);
      } else {
        // Si el caracter no es una letra (como un espacio en blanco)
        resultado += texto.charAt(i);
      }
    }
    return resultado;
  }
  
  // Ejemplo de uso
  let textoOriginal = "Hola mundo!";
  let clave = 3;
  let textoEncriptado = encriptar(textoOriginal, clave);
  console.log(textoEncriptado); // "Krod pxqgr!"
  
  // Define la función para desencriptar el texto
  function desencriptar(texto, clave) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      let codigo = texto.charCodeAt(i);
      if (codigo >= 65 && codigo <= 90) {
        // Si el caracter es una letra mayúscula
        resultado += String.fromCharCode(((codigo - 65 - clave + 26) % 26) + 65);
      } else if (codigo >= 97 && codigo <= 122) {
        // Si el caracter es una letra minúscula
        resultado += String.fromCharCode(((codigo - 97 - clave + 26) % 26) + 97);
      } else {
        // Si el caracter no es una letra (como un espacio en blanco)
        resultado += texto.charAt(i);
      }
    }
    return resultado;
  }
  
  // Ejemplo de uso
  let textoDesencriptado = desencriptar(textoEncriptado, clave);
  console.log(textoDesencriptado); // "Hola mundo!"