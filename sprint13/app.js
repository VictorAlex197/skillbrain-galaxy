class Masina {
    constructor(marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }

    get proprietati() {
        return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
    }
}

function mainMasini() {

  const masina1 = new Masina("VOLVO", "XC-60", "Negru", 234000);
  const masina2 = new Masina("Mazda", "CX-5", "Verde", 111000);
  const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", 20000);


  console.log(masina1.proprietati);
  console.log(masina2.proprietati);
  console.log(masina3.proprietati);
}

mainMasini();

class MasinaDeCurse extends Masina {

  constructor(marca, model, culoare, kilometraj) {

    super(marca, model, culoare, kilometraj);
  }

  participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) {
      console.log(`Am castigat locul ${pozitiaInCampionat}`);
    } else {
      console.log("Nu am castigat niciun premiu");
    }
  }
}

function mainMasiniDeCurse() {

  const curse1 = new MasinaDeCurse("Toyota", "Supra", "Rosu", 50000);
  const curse2 = new MasinaDeCurse("Ferrari", "F8", "Galben", 10000);

  curse1.participaLaCampionat(2);

  curse2.participaLaCampionat(0);

  console.log(curse1.proprietati);
  console.log(curse2.proprietati);
}

mainMasiniDeCurse();