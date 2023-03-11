// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.
const person = {
  Ime: "Eldin",
  Prezime: "Hasanovic",
  Godine: 16,
};
function punoletnost(godine) {
  const promise = new Promise((resolve, reject) => {
    if (godine > 17) {
      resolve("VI ste punoletni");
    } else {
      reject(godine);
    }
  });

  promise
    .then((message) => console.log(message))
    .catch((message) => console.log(message));
}
console.log(punoletnost(person.Godine));
