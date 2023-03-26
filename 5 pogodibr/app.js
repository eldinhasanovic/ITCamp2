broj = document.querySelector("input");
dugme = document.querySelector(".submit");
pogodak = document.querySelector(".h4");
rndm = Math.round(Math.random() * 20);
score = document.querySelector(".brojac");
play = document.querySelector(".ponovo");
skor = document.querySelector(".hs");
console.log(rndm);

function submit() {
  br = broj.value;
  broj.value = "";
  if (br > 20) {
    pogodak.innerHTML = "uneti broj je veci od 20";
  } else if (br < 0) {
    pogodak.innerHTML = "uneti broj je manji od 1";
  } else if (br > rndm) {
    pogodak.innerHTML = "manje";
  } else if (br < rndm) {
    pogodak.innerHTML = "vise";
  } else if (br == rndm) {
    pogodak.innerHTML = "pogodili ste  broj";
    play.style.display = "inline";
    if (score.innerHTML > skor.innerHTML) {
      skor.innerHTML = score.innerHTML;
    }
  }
  // else if (br == 21) {
  //     pogodak.innerHTML = "niste uneli broj";
  //   }
}
var count = 0;
dugme.addEventListener("click", function () {
  count++;
  score.innerHTML = 20 - count;
});
function playagain() {
  rndm = Math.round(Math.random() * 20);
  console.log(rndm);
  play.style.display = "none";
  score.innerHTML = 20;
  pogodak.innerHTML = "prvo unesite broj";
}
// broj.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementsByClassName("submit").click();
//   }
// });
