function letterCount(sir, litera) {

  let textMic = sir.toLowerCase();
  let literaMica = litera.toLowerCase();

  let numar = 0;

  for (let i = 0; i < textMic.length; i++) {

    if (textMic[i] === literaMica) {

     numar = numar + 1;
    }
  }

  return numar;
}

console.log(letterCount("Imi place programarea", "a"));
console.log(letterCount("Vreau sa lucrez în IT", "r"));
