// ### 2. Percorrendo a lista de contato

// Crie um laço de repetição que percorra toda a lista de contatos e mostre uma frase contento Nome, Telefone, Endereço e data de nascimento, exemplo:

// Bonus: Utilizar template string

const listaContatos = [
  {
    nome: "Ana Beatriz Oliveira",
    telefone: "(11) 98765-4321",
    endereco: { rua: "Avenida Paulista", numero: 1578, bairro: "Bela Vista" },
    dataNascimento: "1992-05-14",
  },
  {
    nome: "Carlos Eduardo Santos",
    telefone: "(21) 99888-7766",
    endereco: { rua: "Rua das Laranjeiras", numero: 42, bairro: "Laranjeiras" },
    dataNascimento: "1985-10-22",
  },
  {
    nome: "Mariana Costa",
    telefone: "(31) 99123-0099",
    endereco: { rua: "Rua da Bahia", numero: 101, bairro: "Lourdes" },
    dataNascimento: "1998-03-05",
  },
  {
    nome: "Ricardo Pereira",
    telefone: "(41) 98444-5566",
    endereco: { rua: "Rua XV de Novembro", numero: 2050, bairro: "Centro" },
    dataNascimento: "1979-12-12",
  },
  {
    nome: "Juliana Mendes",
    telefone: "(11) 97654-3210",
    endereco: { rua: "Rua Augusta", numero: 900, bairro: "Consolação" },
    dataNascimento: "1990-07-25",
  },
  {
    nome: "Fernando Rocha",
    telefone: "(51) 98111-2233",
    endereco: {
      rua: "Rua dos Andradas",
      numero: 550,
      bairro: "Centro Histórico",
    },
    dataNascimento: "1988-11-30",
  },
  {
    nome: "Beatriz Souza",
    telefone: "(61) 99222-3344",
    endereco: { rua: "SQS 305", numero: 10, bairro: "Asa Sul" },
    dataNascimento: "1995-01-15",
  },
  {
    nome: "Lucas Martins",
    telefone: "(71) 98777-6655",
    endereco: { rua: "Avenida Oceanica", numero: 200, bairro: "Ondina" },
    dataNascimento: "2000-09-08",
  },
  {
    nome: "Camila Fernandes",
    telefone: "(81) 99666-5544",
    endereco: { rua: "Rua da Aurora", numero: 450, bairro: "Boa Vista" },
    dataNascimento: "1993-04-20",
  },
  {
    nome: "Gabriel Lima",
    telefone: "(19) 98222-1100",
    endereco: {
      rua: "Rua Barão de Itapura",
      numero: 1200,
      bairro: "Guanabara",
    },
    dataNascimento: "1982-06-18",
  },
  {
    nome: "Larissa Machado",
    telefone: "(48) 99111-8899",
    endereco: { rua: "Rua Bocaiúva", numero: 30, bairro: "Centro" },
    dataNascimento: "1997-08-02",
  },
  {
    nome: "Bruno Alves",
    telefone: "(11) 95555-4433",
    endereco: { rua: "Alameda Santos", numero: 222, bairro: "Jardim Paulista" },
    dataNascimento: "1986-02-28",
  },
];

for (let i = 0; i < listaContatos.length; i++) {
  const item = listaContatos[i];
  const nome = item.nome;
  const data = item.dataNascimento;
  const telefone = item.telefone;

  console.log(`${nome}, telefone ${telefone}`);
}
