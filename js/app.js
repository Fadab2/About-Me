// 'use strict';
let correctAnswers = 0;
let userName = prompt('What is your name?');
alert('Hi, ' + userName + " welcome to my About Me website!");

let school = prompt('Please, answer by a yes or no. Do I have a B.S in IT?');
if (school.toUpperCase() == 'YES' || school.toUpperCase() == 'Y') {
    alert('You got that right!');
    correctAnswers++;
    //console.log('You got that right, I have B.S in IT!');
} else {
    alert('Sorry, I do have a B.S in IT');
}

let intern = prompt('Please answer by a yes or no. I interned at Yale Health?');
if (intern.toUpperCase() == 'YES' || intern.toUpperCase() == 'Y') {
    alert('You got that right!');
    correctAnswers++;
    //console.log('You got that right, I interned at Yale Health!');
} else {
    alert('Sorry, I did intern at Yale');
}

let restaurant = prompt('Please, answer by a yes or no. Did I ever work at a restaurant?');
if (restaurant.toUpperCase() == 'YES' || restaurant.toUpperCase() == 'Y') {
    alert('You got that right!');
    correctAnswers++;
    //console.log('You got that right, I worked at a restaurant!');
} else {
    alert('Sorry, I did work at a restaurant');
}

let major = prompt('Please answer by a yes or no. Am I studying to become Full-Stack Dev?');
if (major.toUpperCase() == 'YES' || major.toUpperCase() == 'Y') {
    alert('You got that right!');
    correctAnswers++;
    //console.log('You got that right, I am studying to become Full-Stack!');
} else {
    alert('Sorry, I am actually studying to become a Full-Stack Dev');
}

let interest = prompt('Please answer by a yes or no. Do I like Soccer?');
if (interest.toUpperCase() == 'YES' || interest.toUpperCase() == 'Y') {
    alert('You got that right!');
    correctAnswers++;
    //console.log('You got that right, I love soccer!');
} else {
    alert('Sorry, I actually do like soccer');
}

//guessing number
let guess = prompt("Guess a number 1 to 100. You have 4 attempts to guess the number!");
let numOfGuess = 4;
let number = Math.floor(Math.random() * 100) + 1;
console.log(number);
for (let attempt = 1; attempt <= numOfGuess; attempt++) {

    if (guess == number) {
        alert("Good job, your guess is correct!");
        correctAnswers++;
        break;

    } else if (guess < number) {
        alert('Your guess is too low. You have ' + (numOfGuess - attempt) + ' attempts left, guess again!');
        guess = prompt('Guess a number 1 to 100. you have ');

    } else if (guess > number) {
        alert('Your guess is too high. You have ' + (numOfGuess - attempt) + ' attempts left, guess again!');
        guess = prompt('Guess a number 1 to 100. you have ');
    }

    else {
        alert('Sorry, you run out of attempts!');
        break;
    }
    console.log(numOfGuess);
}


// guessing my top ten countries
let topTenCountires = ['Turkey', 'Morocco', 'Spain', 'Thailand', 'Italy', 'Sweden', 'Peru', 'China', 'Pakistan', 'Jordan'];


let guesses = 0;
while (guesses < 6) {
    let yourGuess = prompt('You have 6 attempts to guess my top ten countries. Please, enter a country name');
    // create a for loop based on the answers. If the guess is within the array break.
    // make guesses var = 6 to break the while loop.
    for (let i = 0; i < topTenCountires.length - 1; i++) {
        if (yourGuess.toLowerCase() == topTenCountires[i].toLowerCase()) {
            console.log('You got that right! ' + yourGuess + ' Is one of my top countries to visit');
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

//console.log(correctAnswers);
console.log(userName + ', thank you for taking the time and asnwering the questions. You scored ' + correctAnswers + ' out of 7 questions');

alert(userName + ', thank you for taking the time and asnwering the questions. You scored ' + correctAnswers + ' out of 7 questions');
