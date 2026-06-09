/*const botao = document.getElementsByClassName('btn')[0];
botao.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});*/

/*const botao = document.getElementsByClassName("btn")[0];
const texto = botao.querySelector("strong");

botao.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    texto.innerHTML = "LIGHT";
  } 
  else {
    texto.innerHTML = "DARK";
  }
});
*/


/*const botao = document.getElementsByClassName("btn")[0];

let tempo;

botao.addEventListener("mouseenter", () => {
  tempo = setTimeout(() => {
    popup.style.display = "block";
  }, 1000);
});

botao.addEventListener("mouseleave", () => {
  clearTimeout(tempo);
  popup.style.display = "none";
});*/

const botao = document.querySelector(".btn");

let tempoInativo;

botao.addEventListener("mouseenter", () => {
  iniciarTimer();
});

botao.addEventListener("mousemove", () => {
  resetarTimer();
});

botao.addEventListener("mouseleave", () => {
  clearTimeout(tempoInativo);
  botao.classList.remove("idle");
});

function iniciarTimer() {
  tempoInativo = setTimeout(() => {
    botao.classList.add("idle");
  }, 1); // 2 segundos parado
}

function resetarTimer() {
  clearTimeout(tempoInativo);
  botao.classList.remove("idle");
  iniciarTimer();
}