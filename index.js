let choice = ["rock", "paper", "scissors"];

let form = document.getElementById('form');

let cpu = () => {
    let cChoice = choice[Math.floor((Math.random())*choice.length)];
    return cChoice;
};

let player = () => {
    let pChoice = ; //find out how to get the html input value
    if (pChoice !== null) {
        return pChoice
    } else {
        return pChoice = "nothing"
    }
};

let game = () => {
    let p = player();
    let c = cpu();

    console.log(`You chose ${p}!`);
    console.log(`I choose ${c}!`);

    let pWin = p === choice[0] && c === choice[2] ||
                p === choice[1] && c === choice[0] ||
                p === choice[2] && c === choice[1] ? true : false;
    
    let pLose = p === choice[2] && c === choice[0] ||
                p === choice[0] && c === choice[1] ||
                p === choice[1] && c === choice[2] ? true : false;

    let tie = p === c;

    if (p !== null) {
        if (pWin) {
            return alert(`You win! ${p} beats ${c}!`)
        } else if (pLose) {
            return alert(`I win! ${c} beats ${p}`)
        } else if (tie) {
            return alert(`Its a Tie! We both chose ${p}`)
        } else if (p === "") {
            return alert("I'm sorry, but it seems that you forgot to choose, therfore I win!")
        } else if (p !== "nothing") {
            return alert(`I'm sorry, but I don't think ${p} is an option`)
        } else if (p === "nothing") {
            return alert("Aww, Don't you wanna play?")
        };
    } else if (p === null) {
        return alert("Aww, Don't you wanna play?")
    }; 
};


