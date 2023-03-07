class Kurs {
  ime;
  duzina;
  cena;
  constructor(ime, duzina, cena) {
    this.ime = ime;
    this.duzina = duzina;
    this.cena = cena;
  }
  mesec() {
    return "Mesecna cena ovog kursa je " + this.cena / this.duzina;
  }
  opis() {
    return `Kurs ${this.ime} traje ${this.duzina} mjeseca/i i kosta ${this.cena}$`;
  }
}
class PracticalCourse extends Kurs {
  numOfExercises;
  constructor(ime, duzina, cena, numOfExercises) {
    super(ime, duzina, cena);
    this.numOfExercises = numOfExercises;
  }
}
class TheoreticalCourse extends Kurs {
  constructor(ime, duzina, cena) {
    super(ime, duzina, cena);
  }
  publish() {
    return "published";
  }
}
const kurs1 = new Kurs("Dizajn", 3, 150);
const kurs2 = new Kurs("ITCamp", 9, 350);
console.log(kurs1.mesec());
console.log(kurs2.opis());
const kurs3 = new PracticalCourse("Prakticni kurs", 1, 100, 12);
const kurs4 = new TheoreticalCourse("Teorijski kurs", 4, 200);
console.log(kurs3);
console.log(kurs4.publish());
