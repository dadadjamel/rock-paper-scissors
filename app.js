const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const instroScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener('click', () => {
            instroScreen.classList.add("fadeOut");
            match.classList.add('fadeIn');
        });
    };

    const playmatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });

        const computeroptions = ['rock', 'paper', 'scissors'];

        options.forEach((option) => {
            option.addEventListener('click', function () {
                const computernumber = Math.floor(Math.random() * 3);
                const computerchoice = computeroptions[computernumber];

                setTimeout(() => {

                    compareHands(this.textContent, computerchoice);

                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerchoice}.png`;

                },2000);


                playerHand.style.animation = "shakeplayer 2s ease";
                computerHand.style.animation = "shakecomputer 2s ease";

            });
        });

    };

    updatescore = () => {
        const playerscore = document.querySelector('.player-score p');
        const computerscore = document.querySelector('.computer-score p');

        playerscore.textContent = pScore;
        computerscore.textContent = cScore;
    }

    const compareHands = (playerchoice, computerchoice) => {
        const winner = document.querySelector('.winner');

        if (playerchoice === computerchoice) {
            winner.textContent = 'its a tie';
            return;
        }
        if (playerchoice === 'rock') {
            if (computerchoice === 'scissors') {
                winner.textContent = 'player wins';
                pScore++;
                updatescore();
                return;
            } else {
                winner.textContent = 'computer wins';
                cScore++;
                updatescore();

                return;
            }

        }
        if (playerchoice === 'paper') {
            if (computerchoice === 'scissors') {
                winner.textContent = 'computer wins';
                cScore++;
                updatescore();

                return;
            } else {
                winner.textContent = 'player wins';
                pScore++;
                updatescore();

                return;
            }

        }
        if (playerchoice === 'scissors') {
            if (computerchoice === 'rock') {
                winner.textContent = 'computer wins';
                cScore++;
                updatescore();

                return;
            } else {
                winner.textContent = 'player wins';
                pScore++;
                updatescore();

                return;
            }

        }
    }




    startGame();
    playmatch();
};

game();