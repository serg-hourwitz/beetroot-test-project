import errorNumber from "./error-number.js";

const functions = () => {
  // Напиши всі можливі варіанти створення функцій.
  function myFunction() {}

  const myFunction1 = function () {};

  const myFunction2 = () => {};

  // Створи функцію, яка буде виводити кількість переданих їй аргументів.

  const getArgumentsAmount = (...args) => {
    console.log(`Function 'getArgumentsAmount' get ${args.length} arguments.`);
  };

  getArgumentsAmount(1, 2);
  getArgumentsAmount(1, 2, 3);
  getArgumentsAmount(1, -1, "!!!", []);

  /* Напиши функцію, яка приймає 2 числа і повертає :
      -1, якщо перше число менше, ніж друге; 
      1 - якщо перше число більше, ніж друге; 
      0 - якщо числа рівні.*/

  const getMoreLessEqual = (a, b) => {
    if (errorNumber(a) || errorNumber(b)) {
      return "incorrect input";
    }

    if (a < b) return `-1 because ${a} < ${b}`;
    else if (a > b) return `1 because ${a} > ${b}`;
    else return `0 because ${a} = ${b}`;
  };
  console.log(getMoreLessEqual(2, 2));
  console.log(getMoreLessEqual(2, 4));
  console.log(getMoreLessEqual(5, 4));

  // Напиши функцію, яка обчислює факторіал переданого їй числа.

  function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1);
  }

  const result = factorial(5);
  console.log("5! = ", result);

  /* Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/

  const getOneNumber = (a, b, c) => {
    if (errorNumber(a) || errorNumber(b) || errorNumber(c)) {
      return "incorrect input";
    }

    let res = String(a) + b + c;

    return +res;
  };

  console.log(getOneNumber(1, 4, 9));

  /*Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/

  const getRectangularArea = (a, b) => {
    if (a <= 0 || b <= 0) return "uncorrected input, parameters must be > 0";
    if (errorNumber(a) || errorNumber(b)) return "uncorrected input";

    if (b !== undefined) return "Square area = " + a * b;
    else return "Rectangular area = " + a * a;
  };

  console.log(getRectangularArea(4, 5));
  console.log(getRectangularArea(4));
  console.log(getRectangularArea(-1, -1));
  console.log(getRectangularArea(2, 0));

  /* Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/

  const isPerfectNumber = (num) => {
    if (errorNumber(num) || num <= 0) return "incorrect input";

    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }

    return sum === num;
  };

  console.log(isPerfectNumber(28));
  console.log(isPerfectNumber(6));
  console.log(isPerfectNumber(135));
  console.log(isPerfectNumber(-6));
  console.log(isPerfectNumber(0));

  /* Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим. */

  const perfectNumbersInRange = (min, max) => {
    if (errorNumber(min) || errorNumber(max)) return "incorrect input";

    const perfectNumbers = [];
    for (let i = min; i <= max; i++) {
      if (isPerfectNumber(i)) {
        perfectNumbers.push(i);
      }
    }

    return `Perfect numbers in a range between ${min} & ${max} are: ${perfectNumbers}.`;
  };

  console.log(perfectNumbersInRange(1, 1000));
};

export default functions;
