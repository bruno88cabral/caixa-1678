const listaDeAlunos = ["pedro", "tiago", "joão"];
const notasDoPedro = [7, 8, 9, 3, 4, 6, 7];

console.log(listaDeAlunos);

const newLegth = listaDeAlunos.push("Maria", "José", "Jesus");
console.log(listaDeAlunos);
console.log(newLegth);

const itemPop = listaDeAlunos.pop();
console.log(listaDeAlunos);

listaDeAlunos.unshift("marcos");
console.log(listaDeAlunos);

const temMaria = listaDeAlunos.includes("José");
console.log(temMaria);
