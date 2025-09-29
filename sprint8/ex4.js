function numarVocale(text) {
  const vocale = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (vocale.includes(text[i])) {
      count++;
    }
  }
  return count;
}

const functionTest = "string de test";
console.log(numarVocale(functionTest));