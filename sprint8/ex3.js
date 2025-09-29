function inverseazaSir(arr) {
  let inversat = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    inversat.push(arr[i]);
  }
  return inversat;
}

let sir1 = [1, -5, 20, -34, 16, 29, 36, -4];
console.log(inverseazaSir(sir1));