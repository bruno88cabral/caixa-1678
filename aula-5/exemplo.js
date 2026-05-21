const form = document.querySelector("form");
const ulElement = document.querySelector("ul");
const section = document.querySelector("section");
const search = document.querySelector("#search");
const initialState = {
  contacts: [],
};

const handleContactData = () => {
  const localStorageContacts = localStorage.getItem("contacts");
  const localStorageContactsParsed = localStorageContacts
    ? JSON.parse(localStorageContacts)
    : initialState;

  return localStorageContactsParsed.contacts;
};

const contacts = handleContactData();

const createCard = (contact) => {
  section.innerHTML += `
        <div class="card">
            <h3>${contact.nome}</h3>
            <p>idade: ${contact.idade}</p>
            <p>telefone: ${contact.telefone}</p>
            <p>data: ${contact.data}</p>
            <img src=${contact.imagem} width="240" />
        </div>
    `;
};

const addContact = () => {
  contacts.forEach(createCard);
};

window.addEventListener("DOMContentLoaded", addContact);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputName = document.querySelector("#nome");
  const inputIdade = document.querySelector("#idade");
  const inputTelefone = document.querySelector("#telefone");
  const inputData = document.querySelector("#data");
  const inputImage = document.querySelector("#imagem");

  const contact = {
    nome: inputName.value,
    idade: inputIdade.value,
    telefone: inputTelefone.value,
    data: inputData.value,
    imagem: inputImage.value,
  };

  contacts?.push(contact);

  const storageStringify = JSON.stringify({
    contacts,
  });

  localStorage.setItem("contacts", storageStringify);

  createCard(contact);
});

search.addEventListener("keyup", (event) => {
  contacts.filter((contact) => {
    return contact.nome.includes(event.target.value);
  });
});
