// 0.1 + 0.2

const sumToFixed = (0.1 + 0.2).toFixed(1);
console.log(`Mathematically corrected result of 0.1 + 0.2 is ${sumToFixed}.`);

// '1' + 2

const str = '1';
const num = 2;

const sumToNumber = +str + 2;

console.log(
  `Mathematically corrected result of '${str}' + ${num} is ${sumToNumber}.`
);

// files amount

const flashMemoryVolume = +prompt('Enter your flash memory volume in Hb');

let result = Math.floor(flashMemoryVolume / 0.82);

console.log(`Flash memory volume ${flashMemoryVolume}Hb contains ${result} file(s) by 820Mb.`);

// chocolate & change

const sumMoney = (+prompt('Enter your total amount of money in EURO:')).toFixed(2);
const priceChocolate = (+prompt('Enter a price of one chocolate')).toFixed(2);

let amountChocolates = Math.floor(sumMoney / priceChocolate);
let change = (sumMoney % priceChocolate).toFixed(2);

if (!isNaN(sumMoney) && sumMoney > 0 && (!isNaN(priceChocolate) && priceChocolate > 0)) {

  if (change !== 0) {
    console.log(
      `You can buy ${amountChocolates} chocolates at a price ${priceChocolate} EURO for ${sumMoney} and get ${change} EURO change to help Ukraine.`
    );
  } else {
    console.log(
      `You can buy ${amountChocolates} chocolates at a price ${priceChocolate} for ${sumMoney} without a change.`
    );
  }

} else {
  console.log('Please, enter correct data !');
}

// reversed number

  // method#1

const threeDigitNumber_1 = prompt('Enter three-digit number#1:');

if (!isNaN(threeDigitNumber_1) && threeDigitNumber_1.length === 3) {

  const digit_1 = Math.floor(threeDigitNumber_1 / 100);
  const digit_2 = Math.floor((threeDigitNumber_1 % 100) / 10);
  const digit_3 = threeDigitNumber_1 % 10;

  const reversedNumber = digit_3 * 100 + digit_2 * 10 + digit_1;

  console.log(`Reversed number of ${threeDigitNumber_1} is ${reversedNumber}.`);
} else {
  console.log('Please, enter correct data !');
}

  // method#2
  
const threeDigitNumber_2 = prompt('Enter three-digit number#2:');

if (!isNaN(threeDigitNumber_2) && threeDigitNumber_2.length === 3) {

  const reversedNumber = threeDigitNumber_2.split('').reverse().join('');

  console.log(`Reversed number of ${threeDigitNumber_2} is ${reversedNumber}.`);
} else {
  console.log('Please, enter correct data !');
}

// the amount of accrued interest

const amountOfDeposit = Math.floor(+prompt(
  'Enter the amount of the USD deposit in the bank:'
)).toFixed(2);
let termOfDepositMonths = 2;
let depositInterestRate = 0.05;

if (!isNaN(amountOfDeposit) && amountOfDeposit > 0) {

  const amountOfAccruedInterest = (
    (Math.floor(amountOfDeposit * depositInterestRate) / 12) *
    termOfDepositMonths
  ).toFixed(2);

  console.log(
    `Dear client! The amount of accrued interest on the your deposit in the amount ${amountOfDeposit} USD placed in our bank for a period of ${termOfDepositMonths} months at an annual interest rate ${
      depositInterestRate * 100
    }% is ${amountOfAccruedInterest} USD.`
  );

} else {
  console.log('Please, enter correct data !');
}
