const isDivisibleBy = (n, divisor) => n % divisor === 0;

const isDivisibleByTen = n => isDivisibleBy(n, 10);

const a = 100;
console.log("a = " + a);
console.log("a este divizibil cu 10? ", isDivisibleByTen(a));

const b = 23;
console.log("b = " + b);
const rez2 = isDivisibleByTen(b);
console.log("b este divizibl cu 10? ", rez2);

function esteDivizibilCuZece(a) {
    if (a % 10 === 0) {
        return true;
    }

    return false;
}