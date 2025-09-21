function getTextOfWeekIndexDay(n) {

    switch (n) {
        case 1: 
            zi = "Luni";
            break;
        case 2:
            zi = "Marti";
            break;
        case 3:
            zi = "Miercuri";
            break;
        case 4:
            zi = "Joi";
            break;
        case 5:
            zi = "Vineri";
            break;
        case 6:
            zi = "Sambata";
            break;
        case 7:
            zi = "Duminica";
            break;
    }

    return zi;
}



const a = 1;
console.log("a = " + a);
console.log("zi = " + getTextOfWeekIndexDay(a));

const b = 5;
console.log("b = " + b);
console.log("zi = " + getTextOfWeekIndexDay(b));