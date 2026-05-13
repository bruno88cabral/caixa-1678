// if (valor1 < valor2) {
//   console.log("opa entrou no if");
// } else {
//   console.log("opa entrou no else");
// }

// const message = condicao ? "condicao verdadeira" : "condicao falsa";
// console.log(message);

// const valor1 = 1;
// const valor2 = 12;

// const condicao = valor1 < valor2;

// console.log(condicao);

// const media = 6;
// const mediaParaPassar = 6;

// console.log(media >= mediaParaPassar);

// const modulo = 7 % 2;
// const mediaEhPar = modulo === 0;

// console.log(mediaEhPar);

// == (igual a)
// === (estritamente igual a)
// !== (diferente a)

// > (maior que)
// < (menor que)
// >= (maior ou igual que)
// <= (menos ou igual que)
const imc = 22;

if (imc > 18.5 && imc < 24.9) {
  return "Peso normal";
} else if (imc > 25 && imc < 29.9) {
  return "Sobrepeso";
}
