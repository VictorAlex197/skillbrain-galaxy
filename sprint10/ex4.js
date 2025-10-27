function addNumber(...numere) {

  let suma = 0;

  for (let i = 0; i < numere.length; i++) {
    suma = suma + numere[i];
  }

  return suma;
}

console.log(addNumber(1, 2, 3));
console.log(addNumber(1, 2, 3, 4, 5));
console.log(addNumber(10, 20, 30, 40));