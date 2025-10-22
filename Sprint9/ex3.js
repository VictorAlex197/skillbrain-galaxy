const carti = [

  { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: true },

  { titlu: "Harry Potter", autor: "J.K. Rowling", esteCitita: false },

  { titlu: "Ion", autor: "Liviu Rebreanu", esteCitita: true }

];

function afiseazaCarti(listaCarti) {

  for (let i = 0; i < listaCarti.length; i++) {

    const carte = listaCarti[i];
    
    console.log(`${carte.titlu} de ${carte.autor}`);
    
    if (carte.esteCitita) {

      console.log(`Ai citit deja "${carte.titlu}" de ${carte.autor}`);

    } 
    
    else {

      console.log(`Trebuie să citești "${carte.titlu}" de ${carte.autor}`);
      
    }
  }
}

afiseazaCarti(carti);