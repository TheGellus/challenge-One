// var textInput = document.querySelector("#input-texto");
// var outInput = document.querySelector("#output");


// function criptografar(){

//   var texto = textInput.value;

//   var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")


//   document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
//   '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
// }

// function descriptografar(){

//     var texto = textInput.value;

//     var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

//     document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
//     '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
// }

// function copiar() {
//     var textoCop = document.getElementById('input-texto');

//     textoCop.select();
//     document.execCommand('copy');
//     alert("Texto copiado");
// }

const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptado) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    };
  };

  return stringEncriptado;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    };
  };

  return stringDesencriptado;
}