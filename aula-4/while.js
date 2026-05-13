let index = 0;
let toggle = "on";

while (toggle === "on") {
  console.log(index);

  index++;

  if (index >= 5) {
    toggle = "off";
  }
}
