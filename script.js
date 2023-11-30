function calcularNivel() {
  let nome = document.getElementById("idName").value;
  let quantidadeXP = parseInt(document.getElementById("idXP").value);
  let nivel = "";

  switch (true) {
    case quantidadeXP <= 1000:
      nivel = "Ferro";
      break;

    case quantidadeXP >= 1001 && quantidadeXP <= 2000:
      nivel = "Bronze";
      break;

    case quantidadeXP >= 2001 && quantidadeXP <= 6000:
      nivel = "Prata";
      break;

    case quantidadeXP >= 6001 && quantidadeXP <= 7000:
      nivel = "Ouro";
      break;

    case quantidadeXP >= 7001 && quantidadeXP <= 8000:
      nivel = "Platina";
      break;

    case quantidadeXP >= 8001 && quantidadeXP <= 9000:
      nivel = "Ascendente";
      break;

    case quantidadeXP >= 9001 && quantidadeXP <= 10000:
      nivel = "Imortal";
      break;

    case quantidadeXP >= 10001:
      nivel = "Radiante";
      break;
  }

  document.getElementById("resultadoNivel").textContent =
    "O Héroi " + nome + " esta no nível " + nivel;
}
