//objeto

// const conta = {
//   cliente: "Bruno",
//   saldo: 300,
//   tipo: "corrente",
//   calcularJuros: () => {},
//   dependentes: [
//     {
//       nome: "fracisco",
//       idade: 16,
//       cartao: true,
//       parenteco: "filhos",
//     },
//     {
//       nome: "ana",
//       idade: 40,
//       cartao: true,
//       parentesco: "esposa",
//     },
//   ],
// };

// console.log(conta.dependentes[0].idade);

// MAP

// const map = new Map();

// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);

// const first = map.get("a");
// console.log(first);
// console.log(map);

const classe = new Map();

classe.set("joao", [7, 9, 10]);
classe.set("pedro", [1, 5, 4]);

console.log(classe);
console.log(classe.has("pedro"));
