const random = Math.floor(Math.random() * 10) + 1;
const submit = document.getElementById("submit");
const chancesText = document.getElementById("chances");

// ✅ chances outside event listener
let chances = 10;

submit.addEventListener('click', () => {
  const input = parseInt(document.querySelector("#textbox").value);

  if (input > 10 || isNaN(input)) {
    alert("Please enter a valid number (1–10)");
  } else if (input === random) {
    alert("🎉 You win!");
    chancesText.innerHTML = "You guessed it right!";
    // stop the game
  } else {
    chances--; // reduce chances
    if (chances > 0) {
      alert("❌ Wrong guess, try again.");
      chancesText.innerHTML = `You have ${chances} chances left.`;
    } else {
      alert("😢 GAME OVER, no chances left.");
      chancesText.innerHTML = `The number was ${random}`;
    
    }
  }
});
