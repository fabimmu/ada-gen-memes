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
/*BOTON DESCARGA*/
let descarga = document.getElementById("btnDescarga");
descarga.addEventListener("click", () => {
  domtoimage.toBlob(document.querySelector(".gen-box")).then(function (blob) {
    window.saveAs(blob, "my-node.png");
  });
});
/*********************IMAGEN************************* */
//Llamado de IMG con el input URL

let urlImg = document.getElementById("url-img"); /*input*/
let memeImg = document.getElementById("meme-url"); /*img*/

urlImg.addEventListener("input", function () {
  memeImg.src = this.value;
});
//FONDO de la IMG
const cFondo = document.getElementById("fondo-img");
cFondo.addEventListener("input", () => {
  let color = cFondo.value;
  memeImg.style.backgroundColor = color;
});
/*
var updateMode = function (blendType) {
  memeImg.classList.add("blen-options");
  document.getElementById("input-blend").style.backgroundBlendMode =
    blendType.value;
};
const updateMode = () => {
  memeImg.style.backgroundBlendMode = blendType.value;
};
const blendType = document.getElementById("input-blend");
blendType.addEventListener("change", updateMode);*/

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
/*RESET IMG FILTER*/
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
//TEXTOS
const inTxtSup = document.getElementById("sup-text");
const inTxtInf = document.getElementById("inf-text");
const TxtSup = document.getElementById("top-text");
const TxtInf = document.getElementById("bottom-text");

inTxtSup.addEventListener("input", () => {
  TxtSup.innerHTML = inTxtSup.value;
});
inTxtInf.addEventListener("input", () => {
  TxtInf.innerHTML = inTxtInf.value;
});
const SupCheck = document.getElementById("sup-check");
const InfCheck = document.getElementById("inf-check");
SupCheck.addEventListener("input", () => {
  if (SupCheck.checked) {
    inTxtSup.disabled = true;
    TxtSup.textContent = "";
  } else {
    inTxtSup.disabled = false;
  }
});
InfCheck.addEventListener("input", () => {
  if (InfCheck.checked) {
    inTxtInf.disabled = true;
    TxtInf.textContent = "";
  } else {
    inTxtInf.disabled = false;
  }
});
//FUENTES
const changeFontFam = document.getElementById("input-font");
changeFontFam.addEventListener("input", () => {
  TxtSup.style.fontFamily = changeFontFam.value;
  TxtInf.style.fontFamily = changeFontFam.value;
});
//TAMANIO FUENTE
const changeFontSize = document.getElementById("font-size");
changeFontSize.addEventListener("input", () => {
  TxtSup.style.fontSize = `${changeFontSize.value}px`;
  TxtInf.style.fontSize = `${changeFontSize.value}px`;
});
//POSICION TEXTO (NO FUNCIONA)
const btnPosL = document.querySelector("btn-text-left");
btnPosL.addEventListener("click", () => {
  TxtSup.style.textAlign = `left`;
  TxtInf.style.textAlign = `left`;
});
const btnPosC = document.querySelector("btn-text-center");
btnPosC.addEventListener("click", () => {
  TxtSup.style.textAlign = "center";
  TxtInf.style.textAlign = "center";
});
const btnPosR = document.querySelector("btn-text-right");
btnPosR.addEventListener("click", () => {
  TxtSup.style.textAlign = "right";
  TxtInf.style.textAlign = "right";
});
//COLOR Y FONDO
const fontColor = document.getElementById("text-color");
fontColor.addEventListener("input", () => {
  TxtSup.style.color = fontColor.value;
  TxtInf.style.color = fontColor.value;
});
