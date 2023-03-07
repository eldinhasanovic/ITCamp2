// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Nije moguce deliti sa nulom");
//     }
//     console.log(a / b);
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     console.log("Kraj funkcije");
//   }
// }
// divide(4, 0);

// setTimeout(() => {
//   console.log("hakala");
// }, 1000);
// const cizburger = new Promise((resolve, reject) => {
//   const response = 100;
//   if (response >= 200 && response < 300) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// cizburger
//   .then(() => console.log("Dobio sam cizburger   "))
//   .catch(() => console.log("Nestalo cizburgera"))
//   .finally(() => console.log("Porudzbina je gotova"));

const print = new Promise((resolve, reject) => {
  const response = 100;
  if (response >= 200 && response < 300) {
    resolve([1, 2, 3, 4, 5]);
  } else {
    reject("propalo");
  }
});
print
  .then((niz) => {
    console.log(niz);
  })
  .catch((message) => {
    console.log(message);
  })
  .finally(() => {
    console.log("izvrseno");
  });
const niz = [1, 2, 3, 4, 5];
const niz2 = niz.filter(funkcija);
function funkcija(br) {
  if (br % 2 == 0) {
    return br;
  }
}
console.log(niz2);
