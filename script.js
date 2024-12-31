const diceFaces = ["I", "★", "D", "•", "C", "◆"];
let rollCount = 0;

function rollDice() {
    rollCount++;
    const results = [];
    for (let i = 1; i <= 3; i++) {
        const randomFace = Math.floor(Math.random() * 6);
        const dice = document.getElementById(`dice${i}`);
        const inner = dice.querySelector('.dice-inner');
        const rotations = rollCount === 1 ? 360 : 360 * rollCount;

        // Rotate the dice
        inner.style.transform = `rotateX(${rotations}deg) rotateY(${randomFace * 60}deg)`;
        results.push(diceFaces[randomFace]);
    }

    // Update results
    const currentPlayer = "Ivan"; // Example: dynamic later
    const scoreText = `${currentPlayer} sacó ${results.join(" ")}`;
    document.getElementById('results').textContent = scoreText;

    const otherScores = `Alexis recibe 1, Denn recibe 1, La Casa recibe 1`;
    document.getElementById('scores').textContent = otherScores;
}

document.getElementById('rollDice').addEventListener('click', rollDice);
