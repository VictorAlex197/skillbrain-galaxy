function tellFortune1(n, z, y, x) {
    return "Vei fi un " + x +" în " + y + ", căsătorit cu " + z + " și vei avea "+ n +" copii.";
}

const tellFortune2 = (n, z, y, x) => `Vei fi un ${x} în ${y}, căsătorit cu ${z} și vei avea ${n} copii.`;

console.log(tellFortune1(3, "Emanuel", "Italia", "Programator"));