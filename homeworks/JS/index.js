const greeting = alert('Hi, Arthur!');

const isAdult = confirm("Is your age > 18 ?");

// Name

const userName = prompt("What is your name ?");

console.log(`Hello, ${userName} !`);

// Age

const yearOfBirth = prompt("What is Your year of birth?");
const currentYear = 2024;
const age = currentYear - yearOfBirth;

console.log(`You are is ${age}.`);

// Perimeter

const length = prompt("What is a length of square side ?");
const perimeter = length * 4;

console.log(`Perimeter of square is ${perimeter} units.`);

// Square

const radius = prompt("What is a radius of a round ?");
const squareOfRound = Math.PI * radius ** 2;

console.log(`Square of a round is ${squareOfRound} square units.`);

// Speed

const cityStart = prompt("What is your city ?");
const cityFinish = prompt("What is a city of destination ?");
const distance = prompt(
  `What is a distance between ${cityStart} & ${cityFinish} in km?`
);
const time = prompt("How many hours do You plan to drive?");
const speed = distance / time;

console.log(
  `You have to drive with speed ${speed} km/h from ${cityStart} to ${cityFinish}.`
);

// Currency exchange

const usdAmount = prompt("How match dollars do You want to exchange ?");
const euroUsdRate = 0.902;
const euroAmount = usdAmount * euroUsdRate;

console.log(`Have ${euroAmount} EURO.`);
