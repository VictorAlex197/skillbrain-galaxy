const favRecipt = (titlu , portii , ingrediente) => {
    
    const recipt = {
        titlu: titlu,
        portii: portii,
        ingrediente: ingrediente
    }

    console.log("Titlu:", recipt.titlu);

    console.log("Portii:", recipt.portii);

    console.log("Ingrediente:", recipt.ingrediente);

    return recipt

}

favRecipt("Pizza", 3, ["sunca", "cas", "ketchup"])