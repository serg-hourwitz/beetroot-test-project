// 0.1 + 0.2
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const sumToFixed = (0.1 + 0.2).toFixed(1);
console.log(`Mathematically corrected result of 0.1 + 0.2 is ${sumToFixed}.`);

// '1' + 2
// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
const str = '1';
const num = 2;

const sumToNumber = +str + num;

console.log(
  `Mathematically corrected result of '${str}' + ${num} is ${sumToNumber}.`
);

// files amount
// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const flashMemoryVolume = +prompt('Enter your flash memory volume in Hb');

let result = Math.floor(flashMemoryVolume / 0.82);

console.log(
  `Flash memory volume ${flashMemoryVolume}Hb contains ${result} file(s) by 820Mb.`
);

// chocolate & change
// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const walletAmount = parseFloat(
  prompt('Enter your total amount of money in EURO:')
);
const chocolatePrice = parseFloat(prompt('Enter a price of one chocolate'));

let chocolatesBought = Math.floor(walletAmount / chocolatePrice);
let change = walletAmount - chocolatesBought * chocolatePrice;

if (
  !isNaN(walletAmount) &&
  walletAmount > 0 &&
  !isNaN(chocolatePrice) &&
  chocolatePrice > 0 &&
  walletAmount >= chocolatePrice
) {
  if (change !== 0) {
    console.log(
      `You can buy ${chocolatesBought} chocolates at a price ${chocolatePrice} EURO for ${walletAmount} and get ${change} EURO change to help Ukraine.`
    );
  }
  if (change === 0) {
    console.log(
      `You can buy ${chocolatesBought} chocolates at a price ${chocolatePrice} for ${walletAmount} without a change.`
    );
  }
} else {
  console.log('Please enter the correct numbers !');
}

// reversed number
// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

// method#1

const threeDigitNumber_1 = prompt('Enter three-digit number#1:');

if (
  threeDigitNumber_1 !== null &&
  !isNaN(threeDigitNumber_1) &&
  threeDigitNumber_1.length === 3 &&
  threeDigitNumber_1 !== ''
) {
  const digit_1 = Math.floor(threeDigitNumber_1 / 100);
  const digit_2 = Math.floor((threeDigitNumber_1 % 100) / 10);
  const digit_3 = threeDigitNumber_1 % 10;

  const reversedNumber = digit_3 * 100 + digit_2 * 10 + digit_1;

  console.log(`Reversed number of ${threeDigitNumber_1} is ${reversedNumber}.`);
} else {
  console.log("Please enter the correct numbers !");
}

// method#2

const threeDigitNumber_2 = prompt('Enter three-digit number#2:');

if (
  threeDigitNumber_1 !== null &&
  !isNaN(threeDigitNumber_2) &&
  threeDigitNumber_2.length === 3 
) {
  const reversedNumber = threeDigitNumber_2.split("").reverse().join("");

  console.log(`Reversed number of ${threeDigitNumber_2} is ${reversedNumber}.`);
} else {
  console.log("Please, enter correct data !");
}

// the amount of accrued interest
// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

const amountOfDeposit = Math.floor(
  +prompt('Enter the amount of the USD deposit in the bank:')
).toFixed(2);
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
  console.log('Please enter the correct numbers !');
}
