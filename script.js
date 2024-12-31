function rollDice() {
    const diceFaces = ["I", "★", "D", "•", "C", "◆"];
    const results = [];
    for (let i = 1; i <= 3; i++) {
        const randomFace = Math.floor(Math.random() * 6);
        const dice = document.getElementById(`dice${i}`);
        const inner = dice.querySelector('.dice-inner');
        inner.style.transform = `rotateX(${randomFace * 60}deg)`;
        results.push(diceFaces[randomFace]);
    }
    document.getElementById('results').textContent = `Results: ${results.join(' ')}`;
}

document.getElementById('rollDice').addEventListener('click', rollDice);
