const media = 7.5;

switch (media) {
  case 1:
  case 2:
    console.log("aluno nivel E");
    break;
  case 3:
  case 4:
    console.log("aluno nivel D");
    break;
  case 5:
  case 6:
    console.log("aluno nivel C");
    break;
  case 7:
  case 8:
    console.log("aluno nivel B");
    break;
  case 9:
  case 10:
    console.log("aluno nivel A");
    break;

  default:
    console.log("média incompativel");
}

if (media === 1 || media === 2) {
  console.log("aluno nivel E");
} else if (media === 3 || media === 4) {
  console.log("aluno nivel D");
} else if (media === 5 || media === 6) {
  console.log("aluno nivel C");
} else if (media === 7 || media === 8) {
  console.log("aluno nivel B");
} else if (media === 9 || media === 10) {
  console.log("aluno nivel A");
} else {
  console.log("média incompativel");
}
