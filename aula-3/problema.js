// Precisamos descobrir quais alunos passaram de ano sendo que a média para ser aprovado é 6.0.
// Pedro n1: 6.0, n2: 8.0, n3: 5.5
// Tiago  n1: 3.0, n2: 9.0, n3: 8.0
// João   n1: 8.0, n2: 7.0, n3: 5.0
// Lucas n1: 2.0, n2: 8.0, n3: 7.0

const mediaParaPassar = 6;

function calcularMedia(notas) {
  var media = (notas[0] + notas[1] + notas[2]) / 3;

  return media;
}

function verificarAprovacao(notas) {
  const media = calcularMedia(notas);

  if (media >= mediaParaPassar) {
    return "aprovado";
  } else {
    return "recuperação";
  }
}

const resultadoPedro = verificarAprovacao([6, 8, 5.5]);
const resultadoJoao = verificarAprovacao([3, 8, 5.5]);
const resultadoTiago = verificarAprovacao([2, 10, 5.5]);

console.log(resultadoTiago);
