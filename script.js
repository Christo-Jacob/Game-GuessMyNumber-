let secertnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".score").textContent = score;
function message(message) {
   document.querySelector(".message").textContent = message;
}

let guess = document.querySelector(".guess").value;
document.querySelector(".check").addEventListener("click", function () {
   let guess = Number(document.querySelector(".guess").value);
   if (!guess) {
      message("⛔ NO Number");
   } else if (guess === secertnumber) {
      message("🎊 Corect Number");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secertnumber;
      if (highscore < score) {
         highscore = score;
         document.querySelector(".highscore").textContent = highscore;
      }
   } else if (score > 1) {
      guess > secertnumber ? message("📈 TO High") : message("📉 TO Low");
      score--;
      document.querySelector(".score").textContent = score;
   } else {
      message("🥴 You Lost");
      document.querySelector(".score").textContent = 0;
   }
   //  else if (guess > secertnumber) {
   //    if (score > 1) {
   //       document.querySelector(".message").textContent = "📈 TO High";
   //       score--;
   //       document.querySelector(".score").textContent = score;
   //    } else {
   //       document.querySelector(".message").textContent = "🥴 You Lost";
   //       document.querySelector(".score").textContent = 0;
   //    }
   // } else if (guess < secertnumber) {
   //    if (score > 1) {
   //       document.querySelector(".message").textContent = "📉 TO Low";
   //       score--;
   //       document.querySelector(".score").textContent = score;
   //    } else {
   //       document.querySelector(".message").textContent = "🥴 You Lost";
   //       document.querySelector(".score").textContent = 0;
   //    }
   // }
});

document.querySelector(".again").addEventListener("click", function () {
   document.querySelector(".score").textContent = 20;
   score = 20;
   secertnumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector(".number").textContent = secertnumber;
   document.querySelector(".guess").value = "";
   message(" Start guessing...");
   document.querySelector(".number").style.width = "15rem";
   document.querySelector(".number").textContent = "?";
   document.querySelector("body").style.backgroundColor = "#222";
   document.querySelector(".highscore").textContent = highscore;
});
