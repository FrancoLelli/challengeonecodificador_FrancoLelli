function encriptar() {
  const divsImgs = document.querySelectorAll('.img');
  const divValores = document.querySelector('.div-valores');

  divsImgs.forEach(img => {
    img.style.display = 'none'
  })
  
  divValores.style.display = 'flex'

  let texto = document.getElementById("texto").value.toLowerCase();
  let result = document.getElementById("resultado")

  let encriptado = texto.replace(/e/g, "enter");
  encriptado = encriptado.replace(/i/g, "imes");
  encriptado = encriptado.replace(/a/g, "ai");
  encriptado = encriptado.replace(/o/g, "ober");
  encriptado = encriptado.replace(/u/g, "ufat");
 
   result.innerHTML = encriptado;
}

function desencriptar() {
  const divsImgs = document.querySelectorAll('.img');
  const divValores = document.querySelector('.div-valores');

  divsImgs.forEach(img => {
    img.style.display = 'none'
  })
  
  divValores.style.display = 'flex'

  
  let texto = document.getElementById("texto").value.toLowerCase();
  let result = document.getElementById("resultado")

  let desencriptado = texto.replace(/enter/g, "e");
  desencriptado = desencriptado.replace(/imes/g, "i");
  desencriptado = desencriptado.replace(/ai/g, "a");
  desencriptado = desencriptado.replace(/ober/g, "o");
  desencriptado = desencriptado.replace(/ufat/g, "u");
  
  result.innerHTML = desencriptado;
}

function copiar() {
  let resultado = document.getElementById("resultado");
  navigator.clipboard.writeText(resultado.textContent)
  alert('Texto copiado!')
} 
