const deleteAnyProp = (obiect, proprietateaStearsa) => {

    const copie = {...obiect} ;

    delete copie[proprietateaStearsa] ;

    return copie;

}

console.log(deleteAnyProp({ a : 1 , b : 2 }, "b"))