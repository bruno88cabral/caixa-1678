// function Log() {
//   return;
//   console.log("log da aula 2");
// }

// Log();

// var message1 = Log();

// console.log(message1);

// function Exemplo() {
//   return "Aula 2";
// }

// var message = Exemplo();

// console.log(Exemplo());

// const teste = function () {
//   console.log("testando aula 2");
// };
// teste();

// const testeAula2 = () => {};

// function CalculaMediaPedro() {
//   var n1 = 8;
//   var n2 = 1;
//   var n3 = 10;

//   var media = (n1 + n2 + n3) / 3;

//   return "a media do pedro é: " + media;
// }

// const mediaDoPedro = CalculaMediaPedro();
// console.log(mediaDoPedro);

// function log(message) {
//   console.log(message);
// }

// log("aula 2 ta muito dificil");

// var name;
// console.log(name);

calcularMediaDaTurma();

function calcularMedia(nome, n1, n2, n3) {
  var media = (n1 + n2 + n3) / 3;

  return `A média do ${nome} é: ${media}`;
}

const calcularMediaDaTurma = () => {
  console.log(calcularMedia("tiago", 4, 5, 6));
  console.log(calcularMedia("joao", 10, 9, 8));
  console.log(calcularMedia("pedro", 6, 3, 1));

  return "que aula doida";
};
