function sumaSirului(a) {
  let suma = 0;
  for (let i = 0; i < a.length; i++) {
    suma += a[i];
  }
  return suma;
}

let sir1 = [1, -5, 20, -34, 16, 29, 36, -4];
let sir2 = [3.45, -2.68, 356, -75.96, 64, 19.28];

console.log("Suma sir1: " + sumaSirului(sir1));
console.log("Suma sir2: " + sumaSirului(sir2));