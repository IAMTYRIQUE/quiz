let player = '';
let score = 0;
window.addEventListener('load', function() {
    player = prompt('What is your name?');
});

const question = document.querySelector('h1');
const button = document.querySelector('button');

class Ques {
    constructor(ques, option1, option2, option3, option4) {
        this.ques = ques;
        this.option = {
            option1,
            option2,
            option3,
            option4
        };
    }   
}

let second = new Ques('Which is the largest continent?', 'Austrailia', 'South America', 'Africa', 'Asia');
let third = new Ques('Which is the longest country?', 'Indonesia', 'China', 'Chile', 'Greece');
let fourth = new Ques('Which is the richest country?', 'Qatar', 'United Staes of America', 'England', 'France');
let fifth = new Ques('Which is the smallest continent?', 'Austrailia', 'Europe', 'Africa', 'Asia');

button.addEventListener('click', function() {
    
    if (question.textContent === 'Which is the largest country?') {
        if (document.getElementById('option1').checked) {
            score++;
        }
        question.textContent = second.ques;
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`option${i}`).value = second['option'][`option${i}`].toLowerCase();
            document.getElementById(`option${i}`).name = 'largestContinent';
            document.getElementById(`label${i}`).textContent = second['option'][`option${i}`];
            document.getElementById(`option${i}`).checked = false;
        }
    } else if (question.textContent === second.ques) {
        if (document.getElementById('option4').checked) {
            score++;
        }
        question.textContent = third.ques;
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`option${i}`).value = third['option'][`option${i}`].toLowerCase();
            document.getElementById(`option${i}`).name = 'longestCountry';
            document.getElementById(`label${i}`).textContent = third['option'][`option${i}`];
            document.getElementById(`option${i}`).checked = false;
        }
    } else if (question.textContent === third.ques) {
        if (document.getElementById('option3').checked) {
            score++;
        }
        question.textContent = fourth.ques;
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`option${i}`).value = fourth['option'][`option${i}`].toLowerCase();
            document.getElementById(`option${i}`).name = 'richestCountry';
            document.getElementById(`label${i}`).textContent = fourth['option'][`option${i}`];
            document.getElementById(`option${i}`).checked = false;
        }
    } else if (question.textContent === fourth.ques) {
        if (document.getElementById('option1').checked) {
            score++;
        }
        question.textContent = fifth.ques;
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`option${i}`).value = fifth['option'][`option${i}`].toLowerCase();
            document.getElementById(`option${i}`).name = 'smallestContinent';
            document.getElementById(`label${i}`).textContent = fifth['option'][`option${i}`];
            document.getElementById(`option${i}`).checked = false;
        }
        button.textContent = 'Submit';
    } else if (question.textContent === fifth.ques && button.textContent === 'Submit') {
        if (document.getElementById('option1').checked) {
            score++;
        }
        
        if (player === '') {
            player = 'Player';
        }

        if (score >= 4 ) {
            alert(`Congratulations ${player}! Your score is ${score}/5`);
        } else if (score === 3){
            alert(`Fair Try ${player}, your score is ${score}/5`);
        } else if (score < 3) {
            alert(`Better luck next time ${player}, your score is ${score}/5`);
        } else {
            alert(`Sigh! Did not want to play ${player}?`)
        }

        location.reload();
    }
});