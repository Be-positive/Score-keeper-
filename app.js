const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}
const resetButton = document.querySelector('#reset');
const winScorePoint = document.querySelector('#playto');
let winningScore = 5;
let isGameOver = false;

function updateScores(player1, player2) {
    if (!isGameOver) {
        player1.score += 1;
        if (player1.score === winningScore) {
            isGameOver = true;
            player1.display.classList.add('has-text-success');
            player2.display.classList.add('has-text-danger');
            player1.button.disabled = true;
            player2.button.disabled = true;
        }
        player1.display.textContent = player1.score;
    }
}
p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

winScorePoint.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
//Bulma - CSS Framework, like Botstr do not need to use Jquery or Popper JS for using js, more easy to use