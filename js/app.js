'use strict';

let userName = prompt('What is your name?');
alert('Hi, ' + userName + " welcome to my About Me website!");

let school = prompt('Please, answer by a yes or no. Do I have a B.S in IT?');
if (school.toUpperCase() == 'YES' || school.toUpperCase() == 'Y') {
    alert('You got that right!');
    console.log('You got that right, I have B.S in IT!');
} else {
    alert('Sorry, I do have a B.S in IT');
}

let intern = prompt('Please answer by a yes or no. I interned at Yale Health?');
if (intern.toUpperCase() == 'YES' || intern.toUpperCase() == 'Y') {
    alert('You got that right!');
    console.log('You got that right, I interned at Yale Health!');
} else {
    alert('Sorry, I did intern at Yale');
}

let restaurant = prompt('Please, answer by a yes or no. Did I ever work at a restaurant?');
if (restaurant.toUpperCase() == 'YES' || restaurant.toUpperCase() == 'Y') {
    alert('You got that right!');
    console.log('You got that right, I worked at a restaurant!');
} else {
    alert('Sorry, I did work at a restaurant');
}

let major = prompt('Please answer by a yes or no. Am I studying to become Full-Stack Dev?');
if (major.toUpperCase() == 'YES' || major.toUpperCase() == 'Y') {
    alert('You got that right!');
    console.log('You got that right, I am studying to become Full-Stack!');
} else {
    alert('Sorry, I am actually studying to become a Full-Stack Dev');
}

let interest = prompt('Please answer by a yes or no. Do I like Soccer?');
if (interest.toUpperCase() == 'YES' || interest.toUpperCase() == 'Y') {
    alert('You got that right!');
    console.log('You got that right!');
    console.log('You got that right, I love soccer!');
} else {
    alert('Sorry, I actually do like soccer');
}

alert(userName + ', thank you for taking the time and asnwering the questions!');
