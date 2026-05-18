// ### 4. Buscando a palavra mais repitida no texto.

// Cria um algoritmo que diz qual a palavra mais repetida dentro da seguinte texto:

const texto =
  "end ut. Curabitur ut erat consectetur, ornare turpis id, hendrerit orci. Quisque consequat non ex ut volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam sit amet orci fringilla, faucibus ipsum ac, lacinia diam. Fusce dictum ultricies dui sit amet ultrices.Donec vel ipsum convallis neque lacinia aliquet ac eget sem. In eu sapien mollis, vestibulum elit sit amet, sagittis nunc. Vivamus sit amet consectetur justo. Quisque ac tellus accumsan metus semper hendrerit sollicitudin finibus ex. Phasellus tempor non orci convallis posuere. Nulla cursus elit dolor, sit amet pellentesque eros eleifend non. Duis facilisis est ut egestas pellentesque. Maecenas bibendum suscipit dolor. Etiam in gravida felis. Nulla non felis ipsum. Nam sed dictum arcu, sed bibendum orci. Aenean vel hendrerit nunc, sit amet mattis felis. Nam mollis mollis odio egestas dictum. Nam semper scelerisque ex eu vehicula. Ut ac orci ac ligula interdum tincidunt eget vitae ligula. Sed pharetra lectus eget ultricies laoreet. In vitae ante placerat, tristique urna a, pellentesque augue. Quisque tempus metus ut lorem tincidunt, quis ultricies augue convallis. Quisque eget consectetur ex. Pellentesque imperdiet elit a neque placerat hendrerit. Nunc et nisi eget arcu tincidunt iaculis nec a sem. Duis tortor odio, semper vel velit vestibulum, congue scelerisque enim. Fusce risus est, euismod nec euismod non, tincidunt in augue. Nulla mattis augue orci, nec gravida turpis semper vel. Maecenas fringilla nisl ac odio blandit, vitae dignissim arcu porttitor. Vivamus vitae laoreet sem. Suspendisse potenti. Curabitur blandit metus odio, quis gravida tortor placerat sit amet. Pellentesque aliquam hendrerit sapien vitae porta. Morbi vestibulum sit amet orci ut tempor. Nulla luctus porttitor nisl at viverra. Nunc bibendum augue a odio sagittis, sed tempus lorem scelerisque. Aliquam gravida feugiat augue sed sagittis. Fusce in dignissim dui. Nunc lobortis neque ex, eget gravida ante scelerisque nec. Nunc lacinia est at purus cursus venenatis. Sed sed sagittis nisi. Phasellus eget semper mi. Ut aliquet aliquam orci in pretium. Donec at nisl metus. Integer risus tortor, faucibus maximus maximus sit amet, maximus a erat. "
    .replaceAll(",", "")
    .replaceAll(".", "");

// console.log(texto);

const listDePalavras = texto.split(" ");
const contagemMap = new Map();
let maisRepetido = {
  key: "",
  value: 0,
};

for (let palavra of listDePalavras) {
  if (contagemMap.has(palavra)) {
    contagemMap.set(palavra, contagemMap.get(palavra) + 1);
  } else {
    contagemMap.set(palavra, 1);
  }
}

console.log(contagemMap);

for (const [key, value] of contagemMap.entries()) {
  if (value > maisRepetido.value) {
    maisRepetido.key = key;
    maisRepetido.value = value;
  }
}

console.log({ maisRepetido });
