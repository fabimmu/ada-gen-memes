const panel = document.querySelector("#panel");
const panel1 = document.querySelector("#sidebar1");
const panel2 = document.querySelector("#sidebar2");
//Que el boton de IMG abra el sidebar
const bImg = document.querySelector("#b-img");
bImg.addEventListener("click", () => {
  panel.classList.remove("ocultar");
  panel1.classList.remove("ocultar");
  panel2.classList.add("ocultar");
});
//Que el boton de TXT abra el sidebar
const bTxt = document.querySelector("#b-txt");
bTxt.addEventListener("click", () => {
  panel.classList.remove("ocultar");
  panel1.classList.add("ocultar");
  panel2.classList.remove("ocultar");
});
//DARK AND LIGHT
const body = document.querySelector("body");
const btnModo = document.querySelector("#btnModo");
btnModo.addEventListener("click", () => {
  if (body.className == "light") {
    body.className = "dark";
    btnModo.textContent = "Modo Claro";
  } else if (body.className == "dark") {
    body.className = "light";
    btnModo.textContent = "Modo Oscuro";
  }
});
/*CERRAR*/
const bClose = document.querySelector("#close-panel");
bClose.addEventListener("click", () => {
  panel.classList.add("ocultar");
});
/*********************IMAGEN************************* */
//Llamado de IMG con el input URL

let urlImg = document.getElementById("url-img"); /*input*/
let memeImg = document.getElementById("meme-url"); /*img*/

urlImg.addEventListener("input", function () {
  memeImg.src = this.value;
});
/*BOTON DESCARGA*/
let descarga = document.getElementById("btnDescarga");
descarga.addEventListener("click", () => {
  domtoimage.toBlob(document.querySelector(".gen-box")).then(function (blob) {
    window.saveAs(blob, "my-node.png");
  });
});

//BARRAS DE FILTROS
const updateFiltro = () => {
  memeImg.style.filter = `brightness(${brillo.value}) 
  opacity(${opacidad.value}) 
  contrast(${contraste.value}%) blur(${desenfoque.value}px)  grayscale(${grises.value}%) sepia(${sepia.value}%) invert(${negativo.value}) saturate(${saturado.value}%) hue-rotate(${hue.value}deg)`;
};

const brillo = document.querySelector("#brillo");
brillo.addEventListener("change", updateFiltro);
const opacidad = document.querySelector("#opacidad");
opacidad.addEventListener("change", updateFiltro);
const contraste = document.querySelector("#contraste");
contraste.addEventListener("change", updateFiltro);
const desenfoque = document.querySelector("#desenfoque");
desenfoque.addEventListener("change", updateFiltro);
const grises = document.querySelector("#grises");
grises.addEventListener("change", updateFiltro);
const sepia = document.querySelector("#sepia");
sepia.addEventListener("change", updateFiltro);
const hue = document.querySelector("#hue");
hue.addEventListener("change", updateFiltro);
const saturado = document.querySelector("#saturado");
saturado.addEventListener("change", updateFiltro);
const negativo = document.querySelector("#negativo");
negativo.addEventListener("change", updateFiltro);

const bReset = document.querySelector("#resetFilter");
const resetFiltro = () => {
  brillo.value = 1;
  opacidad.value = 1;
  contraste.value = 100;
  desenfoque.value = 0;
  grises.value = 0;
  sepia.value = 0;
  hue.value = 0;
  saturado.value = 100;
  negativo.value = 0;
  updateFiltro();
};
bReset.addEventListener("click", resetFiltro);

/*Font Configurations*/
var changeFontStyle = function (font) {
  document.getElementById("output-text").style.fontFamily = font.value;
};
