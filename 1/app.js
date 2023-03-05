// Osnovni principi oop
// Enkapsulacija je princip skrivanja informacija i funkcionalnosti objekta i pruzanje jednotavnog i jasnog interfejsa
// za rad sa tim objektom

// Nasledjivanje (inheritance) nam omogucava kreiranje novih klasa na osnovu postojecih samim tim se
// nasledjuju funkcionalnosti postojecih klasa

// Polimorfizam nam omogucava koristenje istog koda za rad sa razlicitim tipovima objekata

// Apstrakcija nam omogucava da izolujemo i identifikujemo bitne karakteristike objekta a da zanemarimo manje bitne

// class Person {
//   #ime;
//   #prezime;
//   constructor(ime, prezime, brgodina) {
//     this.#ime = ime;
//     this.#prezime = prezime;
//     this.godine = brgodina;
//   }
//   getInfo() {
//     console.log(`${this.#ime} ${this.#prezime} ima ${this.godine} godina`);
//   }
//   // get za prikazivanje privatnih podataka iz klase
//   get fullName() {
//     console.log(`${this.#ime} ${this.#prezime} ${this.godine}`);
//   }
//   // set za menjanje privatnih podataka iz klase
//   set changeName(newName) {
//     this.#ime = newName;
//   }
// }
// const person1 = new Person("Hatidza", "Mahmutovic", 17);
// console.log(person1);
// console.log(person1.fullName);
// person1.changeName = "Hakala";
// console.log(person1.fullName);

class Oblik {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  povrsina() {
    return 0;
  }
}
class Pravougaonik extends Oblik {
  constructor(x, y, a, b) {
    super(x, y);
    this.a = a;
    this.b = b;
  }
  povrsina() {
    return this.a * this.b;
  }
}
class Krug extends Oblik {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }
  povrsina() {
    return Math.PI * this.r ** 2;
  }
}
const pravougaonik1 = new Pravougaonik(0, 0, 4, 6);
const krug1 = new Krug(0, 0, 2);
// console.log(pravougaonik1);
// console.log(pravougaonik1.povrsina());
// console.log(krug1.povrsina());

// Polimorfna funkcija koju mozemo koristiti za razlicite tipove objekata

function izracunajPovrsinu(oblik) {
  return oblik.povrsina();
}
console.log(izracunajPovrsinu(krug1));
