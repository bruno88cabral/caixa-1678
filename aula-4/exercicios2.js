// ### 4. Buscando a palavra mais repitida no texto.

// Cria um algoritmo que diz qual a palavra mais repetida dentro da seguinte texto:

const texto =
  "Ut interdum tellus sit amet arcu viverra facilisis. Mauris diam magna, condimentum ac justo nec, rhoncus iaculis odio. Sed tincidunt lacus ut risus laoreet sagittis. Curabitur tristique egestas libero, nec vulputate ligula pellentesque auctor. Mauris vitae est lacinia, condimentum felis eget, consequat eros. Proin tempor ligula felis, sit amet malesuada purus viverra sit amet. Nunc lobortis porta est a mattis. Curabitur congue tincidunt velit eu placerat. Aliquam sed urna pretium, laoreet ante nec, ultrices eros. Sed ullamcorper elit id dolor congue fringilla. Aenean fringilla sed risus ac consequat. Mauris turpis leo, volutpat eget varius sit amet, fermentum id lectus. Nunc quis gravida neque. Nulla eleifend risus diam, ut dictum mauris lobortis ut. Donec vitae nisi ullamcorper turpis accumsan malesuada a id mauris.Vestibulum aliquet tellus id purus consequat, eget vehicula erat porttitor. In hac habitasse platea dictumst. Nunc semper faucibus enim sit amet tristique. Quisque egestas, massa luctus laoreet porttitor, eros lorem semper enim, sed mattis turpis justo ut est. Proin ac elit tincidunt, lacinia est nec, ultrices purus. Quisque sem dui, commodo a dui consectetur, posuere accumsan orci. Maecenas luctus, nibh ac molestie ornare, mi odio placerat metus, vitae ornare lorem lectus a erat. Maecenas imperdiet, dui nec tincidunt sollicitudin, orci velit efficitur tortor, id interdum odio nibh nec sapien.";

// console.log(texto);

const listDePalavras = texto.split(" ");
const contagemMap = new Map();

for (let palavra of listDePalavras) {
  if (contagemMap.has(palavra)) {
    contagemMap.set(palavra, contagemMap.get(palavra) + 1);
  } else {
    contagemMap.set(palavra, 1);
  }
}

console.log(contagemMap);
