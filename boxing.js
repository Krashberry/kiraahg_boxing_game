let player1 = {
  name: "Player 1",
  health: 100,
}
let player2 = {
    name: "Player 1",
    health: 100,
}
var currentPlayer = `player1`

function generateDamage() {
  return Math.floor(Math.random() * 10) + 1; // Damage ranges from 1 to 10
  }

  function applyDamage(opponent, damage) {
    if (/* FILL CONDITIONAL HERE */) {
    console.log(`${currentPlayer.name} lands a basic hit on ${opponent.name}!`);
    } else if (/* FILL CONDITIONAL HERE */) {
    console.log(`${currentPlayer.name} lands a critical hit on ${opponent.name}!`);
    } else {
    console.log(`${currentPlayer.name} lands a KNOCKOUT on ${opponent.name}!🥊`);
    }
    opponent.health -= damage;
    if (opponent.health < 0 || /* FILL CONDITIONAL HERE */) {
    // Ensure health doesn't go below 0 and automatic KO
    opponent.health = 0;
    }
    console.log(`${opponent.name}'s health is now ${opponent.health}.`);
    }
    