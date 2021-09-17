// 'use strict';

let correctAnswers = 0;
let userName = '';
function guessAboutMe() {
    let questions = ['Please, answer by a yes or no. Do I have a B.S in IT?', 'Please answer by a yes or no. I interned at Yale Health?', 'Please, answer by a yes or no. Did I ever work at a restaurant?', 'Please answer by a yes or no. Am I studying to become Full-Stack Dev?', 'Please answer by a yes or no. Do I like Soccer?']
    let rightAnswers = ["YES", "YES", "YES", "YES", "YES"]
    let validResponse = ["YES", "Y"]

    userName = prompt('What is your name?');
    alert('Hi, ' + userName + " welcome to my About Me website!");

    let school = prompt(questions[0]);
    if (school.toUpperCase() == validResponse[0] || school.toUpperCase() == validResponse[1]) {
        alert('You got that right!');
        correctAnswers++;
        //console.log('You got that right, I have B.S in IT!');
    } else {
        alert('Sorry, I do have a B.S in IT');
    }

    let intern = prompt(questions[1]);
    if (intern.toUpperCase() == validResponse[0] || intern.toUpperCase() == validResponse[1]) {
        alert('You got that right!');
        correctAnswers++;
        //console.log('You got that right, I interned at Yale Health!');
    } else {
        alert('Sorry, I did intern at Yale');
    }

    let restaurant = prompt(questions[2]);
    if (restaurant.toUpperCase() == validResponse[0] || restaurant.toUpperCase() == validResponse[1]) {
        alert('You got that right!');
        correctAnswers++;
        //console.log('You got that right, I worked at a restaurant!');
    } else {
        alert('Sorry, I did work at a restaurant');
    }

    let major = prompt(questions[3]);
    if (major.toUpperCase() == validResponse[0] || major.toUpperCase() == validResponse[1]) {
        alert('You got that right!');
        correctAnswers++;
        //console.log('You got that right, I am studying to become Full-Stack!');
    } else {
        alert('Sorry, I am actually studying to become a Full-Stack Dev');
    }

    let interest = prompt(questions[4]);
    if (interest.toUpperCase() == validResponse[0] || interest.toUpperCase() == validResponse[1]) {
        alert('You got that right!');
        correctAnswers++;
        //console.log('You got that right, I love soccer!');
    } else {
        alert('Sorry, I actually do like soccer');
    }
}
guessAboutMe()


//guessing number
function guessTheNumber() {

    let numOfGuess = 4;
    let number = Math.floor(Math.random() * 100) + 1;
    console.log(number);
    for (let attempt = 1; attempt <= numOfGuess; attempt++) {
        let guess = prompt("Guess a number 1 to 100.");

        if (guess == number) {
            alert("Good job, your guess is correct!");
            correctAnswers++;
            break;

        } else if (guess < number) {
            alert('Your guess is too low. You have ' + (numOfGuess - attempt) + ' attempts left, guess again!');


        } else if (guess > number) {
            alert('Your guess is too high. You have ' + (numOfGuess - attempt) + ' attempts left, guess again!');

        }
        if (attempt == numOfGuess) {
            alert('Sorry, you run out of attempts!');
            break;
        }
        console.log(numOfGuess);
    }
}
guessTheNumber();

// guessing my top ten countries
function multiQuestions() {
    let topTenCountires = ['Turkey', 'Morocco', 'Spain', 'Thailand', 'Italy', 'Sweden', 'Peru', 'China', 'Pakistan', 'Jordan'];

    let guesses = 0;
    while (guesses < 6) {
        let yourGuess = prompt('You have 6 attempts to guess my top ten countries. Please, enter a country name');
        // create a for loop based on the answers. If the guess is within the array break.
        // make guesses var = 6 to break the while loop.
        for (let i = 0; i < topTenCountires.length - 1; i++) {
            if (yourGuess.toLowerCase() == topTenCountires[i].toLowerCase()) {
                alert('You got that right! ' + yourGuess + ' Is one of my top countries to visit');
                correctAnswers++;
                guesses = 10;
                break;
            }
        }
        guesses++;
        // }

        //console.log(guesses);
    }

    if (guesses == 6) {
        console.log('Sorry, you run out of attempts. Below are the correct answers.');
        for (let country = 0; country < topTenCountires.length; country++) {
            alert(topTenCountires[country]);
            // console.log(topTenCountires[country]);
        }
    }
}
multiQuestions();
//console.log(correctAnswers);
console.log(userName + ', thank you for taking the time and asnwering the questions. You scored ' + correctAnswers + ' out of 7 questions');

alert(userName + ', thank you for taking the time and asnwering the questions. You scored ' + correctAnswers + ' out of 7 questions');
