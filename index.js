let choice = ["rock", "paper", "scissors"];

let cpu = () => {
    let cChoice = choice[Math.floor((Math.random())*choice.length)];
    return cChoice;
};

let player = (pChoice) => {
    if (pChoice !== null) {
        return pChoice;
    } else {
        return pChoice = "nothing";
    }
};

let playCount = 0;
let pScore = 0;
let cScore = 0;
let drawCounter = 0;

let reset = () => {
    playCount = 0;
    pScore = 0;
    cScore = 0;
    drawCounter = 0;

    let pScoreTrack = document.getElementById('pScore');
    pScoreTrack.innerHTML = `Your Score: ${pScore}`;

    let drawTrack = document.getElementById('drawCounter');
    drawTrack.innerHTML = `Draws: ${drawCounter}`;

    let cScoreTrack = document.getElementById('cScore');
    cScoreTrack.innerHTML = `My Score: ${cScore}`;
    
    document.querySelectorAll(".removables").forEach(e => e.parentNode.removeChild(e));
}

let scoreTracker = (status) => {
    for (playCount; playCount < 5; playCount++) {
        if (status === "tie") {
            drawCounter = drawCounter + 1;
        } else if (status === 'win') {
            pScore = pScore + 1;
        } else {
            cScore = cScore + 1;
        };

        let pScoreTrack = document.getElementById('pScore');
        pScoreTrack.innerHTML = `Your Score: ${pScore}`;

        let drawTrack = document.getElementById('drawCounter');
        drawTrack.innerHTML = `Draws: ${drawCounter}`;

        let cScoreTrack = document.getElementById('cScore');
        cScoreTrack.innerHTML = `My Score: ${cScore}`;

        if (playCount < 4) {
            playCount = playCount + 1;
            return 
        } else  if (playCount === 4) {
            let announcement = document.createElement('h2');
            announcement.setAttribute('class', 'removables');
            let plsReset = document.createElement('p');
            plsReset.setAttribute('class', 'removables')
            plsReset.textContent = "please press restart";

            announcement.setAttribute('id', 'announcement')
            if (pScore > cScore) {
                announcement.textContent = "You've bested the odds of Javascript's RNG, Congratulations!"
            } else if (pScore < cScore){
                announcement.textContent = "Your luck is no match against Javascript's RNG"
            } else {
                announcement.textContent = "Ah, It's a Draw! Wanna have another go?"
            };
            
            let scoreDiv = document.getElementById('scoreboard');
            scoreDiv.appendChild(announcement);
            scoreDiv.appendChild(plsReset);
            return
        };
    };    
};

let setAnnouncer = (status) => {
    if (status === "tie") {
        //adds a tie image to set-status div
    } else if (status === "win") {
        //adds a success image to set-status div
    } else {
        //adds a failure image to set-status div
    }
}

let game = (pChoice) => {
    let p = player(pChoice);
    let c = cpu();

    console.log(`You chose ${p}!`);
    console.log(`I choose ${c}!`);

    let pWin = p === choice[0] && c === choice[2] ||
                p === choice[1] && c === choice[0] ||
                p === choice[2] && c === choice[1] ? true : false;

    let tie = p === c;

    if (tie) {
        scoreTracker('tie');
        //setAnnouncer('tie');
        return
    } else if (pWin) {
        scoreTracker('win');
        //setAnnouncer('win');
        return
    } else {
        scoreTracker('lose');
        //setAnnouncer('lose');
        return
    }; 
    
    if (tie) {
        return alert(`Its a Tie! We both chose ${p}`)
    } else if (pWin) {
        return alert(`You win! ${p} beats ${c}!`)
    } else {
        return alert(`You lose! ${c} beats ${p}`)
    }; 
};

