let good = JSON.parse(localStorage.getItem
  ('good')) || {
        Wins: 0,
        Losses: 0,
        Tie: 0
    };

    updateScoreElement();

function pickComputerMove() {

const randomNumber = Math.random()

if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock'
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper'
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors'
}
console.log(computerMove)

return computerMove
}

let isAutoPlaying = false
let intervalId;

//const autoPlay = () => {

//}
function autoPlay() {
    if (!isAutoPlaying) {
        intervalId =  setInterval(() => {
            const playerMove = pickComputerMove()
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    }else {
        clearInterval(intervalId);
        isAutoPlaying = false
    }
    
}

document.querySelector('.js-rock-button')
.addEventListener('click', () => {
    playGame('rock')
})

document.querySelector('.js-paper-button')
.addEventListener('click', () => {
    playGame('paper')
})

document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
    playGame('scissors')
})

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock')
    } else if (event.key === 'p') {
        playGame('paper')
    } else if (event.key === 's') {
        playGame('scissors')
    } else if (event.key === 'a') {
        autoPlay()
    }
})

    function playGame(playerMove) {
        const computerMove = pickComputerMove()
        
        let result = '';
        
        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose'
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Tie'
        }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win'
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose'
        }

        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie'
        } else if (computerMove === 'paper') {
            result = 'You lose'
        } else if (computerMove === 'scissors') {
            result = 'You win'
        }
        }

        if (result === 'You win') {
            good.Wins += 1
        } else if (result === 'You lose') {
            good.Losses += 1
        } else if (result === 'Tie') {
            good.Tie += 1
        }

        localStorage.setItem('good', JSON.stringify(good));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = ` You <img src="images/${playerMove}-emoji.png" 
            class="move-icon">
            <img src="images/${computerMove}-emoji.png"
            class="move-icon">
            Computer `;

       
    }

    function updateScoreElement() {
        document.querySelector('.js-good')
         .innerHTML = ` Wins: ${good.Wins}, Losses: ${good.Losses}, Tie: ${good.Tie}`
    }