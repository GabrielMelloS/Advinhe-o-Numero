var max = 10;
var tentativas = 5;
var fim = false;

var objetivo = Math.floor(Math.random() * (max + 1));

function getElement(id) {
  return document.getElementById(id);
}

function changeRatio(value, oldMin, oldMax, newMin, newMax) {
  return ((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin;
}

function Chutar() {
  if (!fim) {
    let dica_atual = getElement("dica_atual");
    let resultado = getElement("resultado");

    let guess = parseInt(getElement("valor").value);
    guess = isNaN(guess) ? 0 : guess;

    if (guess < 0 || guess > max) {
      resultado.innerHTML = "Insira um valor até 10!!";
      return;
    } else {
      let percent = (1 - Math.abs(guess - objetivo) / max) * 100;
      dica_atual.style.width = percent + "%";
      getElement("porcentagem").innerHTML = percent.toFixed(2) + "%";

      if (guess == objetivo) {
        fim = true;
        resultado.style.color = "white";
        resultado.innerHTML =
          "🎉PARABÉNS, VOCÊ ACERTOU EM " + (10 - tentativas) + " TENTATIVAS🎉";
      } else {
        tentativas--;
        resultado.innerHTML = "FALTAM " + tentativas + " TENTATIVAS.";
        if (tentativas == 1);
      }
      if (tentativas < 1) {
        resultado.innerHTML =
          "Você não acertou 😔. <br>O numero certo era: " +
          objetivo +
          "<br>Porém um novo número foi gerado, tente até acertar😀 ";
        objetivo = parseInt(Math.random() * 11);
        tentativas = 5;
      }
    }
  }
}