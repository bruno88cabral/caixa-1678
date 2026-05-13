const contaBancaria = {
  nome: "bruno",
  tipo: "corrente",
  saldo: 2000,
  numero: "1099-8",
};

contaBancaria.agencia = "0202";
contaBancaria.numero = "1199-8";
delete contaBancaria.nome;
console.log(contaBancaria);
