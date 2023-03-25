broj = document.querySelector("input");
dugme = document.querySelector(".submit");
pogodak = document.querySelector("h4");
rndm = Math.round(Math.random() * 20);
play = document.querySelector(".ponovo");
console.log(rndm);
function playagain() {
  rndm = Math.round(Math.random() * 20);
  console.log(rndm);
  play.style.display = "none";
}
function submit() {
  br = broj.value;
  //   if (br > 20) {
  //     document.querySelector("h4").innerHTML = "uneti broj je veci od 20";
  //   }
  if (br < 1) {
    pogodak.innerHTML = "uneti broj je manji od 1";
  } else if (br > rndm) {
    pogodak.innerHTML = "manje";
    var brojac = 0;
  } else if (br < rndm) {
    pogodak.innerHTML = "vise";
  } else if (br == rndm) {
    pogodak.innerHTML = "pogodili ste  broj";
    play.style.display = "inline";
  }
}
