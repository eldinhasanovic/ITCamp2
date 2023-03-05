class Kurs {
  ime;
  duzina;
  cena;
  constructor(ime, duzina, cena) {
    this.ime = ime;
    this.duzina = duzina;
    this.cena = cena;
  }
}
const kurs1 = new Kurs("Dizajn", "3 meseca", 150);
const kurs2 = new Kurs("ITCamp", "9 meseci", 350);
console.log(kurs1);
console.log(kurs2);
