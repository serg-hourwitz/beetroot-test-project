const loopConditions = () => {
  // Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

  const userAge = +prompt("How old r U ?", 0);

  if (userAge && userAge >= 0) {
    console.log("Enter correct number !");
  } else {
    switch (true) {
      case userAge >= 0 && userAge <= 11:
        console.log("U r a kid.");
        break;

      case userAge >= 12 && userAge <= 17:
        console.log("U r a teenager.");
        break;

      case userAge >= 18 && userAge <= 59:
        console.log("U r an adult.");
        break;

      default:
        console.log("U r a pensioner.");
    }
  }

  // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

  const userNumber = Number("Enter a number from 0 to 9:", 0);

  if (
    userNumber === "" ||
    userNumber === null ||
    userNumber < 0 ||
    userNumber > 9 ||
    isNaN(userNumber)
  ) {
    console.log("Enter correct number !");
  } else {
    console.log(")!@#$%^&*("[userNumber]);
  }

  // Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

  // Variables for saving statistics
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  let evenCount = 0;
  let oddCount = 0;

  // Array to store the entered numbers
  let numbers = [];

  // Switch to limit the input to 10 numbers
  let count = 0;
  let times = 10;

  while ((count < 10, times > 0)) {
    const input = parseInt(prompt(`Please enter a number ${times} times:`));
    numbers.push(input);

    if (isNaN(input)) {
      console.log("Please enter correct number !");
    }

    if (input > 0) {
      positiveCount++;
    } else if (input < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }

    if (input % 2 === 0 && input !== 0) {
      evenCount++;
    } else if (input !== 0) {
      oddCount++;
    }
    times--;
    count++;
  }

  console.log("The number of positive numbers:", positiveCount);
  console.log("Number of negative numbers:", negativeCount);
  console.log("Number of zeros:", zeroCount);
  console.log("Number of even numbers (except zero):", evenCount);
  console.log("Number of odd numbers:", oddCount);

  // Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Variable to store the day of the week index
  let currentIndex = 0;

  do {
    // Display of the current day of the week and user query
    const userInput = confirm(
      `${daysOfWeek[currentIndex]}. Do U want to see next day ?`
    );

    // If the user clicked "Cancel", exit the loop
    if (!userInput) {
      break;
    }

    // Increments the index for the next day of the week, ensuring cyclicality
    currentIndex = (currentIndex + 1) % daysOfWeek.length;
  } while (true);

  // Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

  // Initial number range
  let min = 0;
  let max = 100;
  let guess;

  const userNum = parseInt(prompt("Please guess a number from 0 to 100:", 0));

  // цикл гри
  while (true) {
    // a new number among the known range
    guess = Math.floor((min + max) / 2);

    let userInp = prompt(
      `Your number > ${guess}, < ${guess}, or = ${guess}? Enter '>', '<', or '='.`
    );

    if (userInp === ">") {
      min = guess + 1;
    } else if (userInp === "<") {
      max = guess - 1;
    } else if (userInp === "=") {
      alert(`Great! I guessed your number ${guess}!`);
      break;
    } else {
      alert("Please enter '>' or '<' or '='.");
    }

    if (!userNum) {
      break;
    }
  }

  // Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
  console.log("");
  console.log("multiplication table:");
  console.log("");

  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("");
  }

  // Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також переступний рік.

  const isLeapYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  let day = parseInt(prompt("Enter a day:"));
  let month = parseInt(prompt("Enter a month(from 1 to 12):"));
  let year = parseInt(prompt("Enter a year:"));

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12
  ) {
    console.log("Incorrect data entered.");
  } else {
    let nextDay, nextMonth, nextYear;

    let lastDayOfMonth = new Date(year, month, 0).getDate();

    if (day === lastDayOfMonth) {
      if (month === 12) {
        nextDay = 1;
        nextMonth = 1;
        nextYear = year + 1;
      } else {
        nextDay = 1;
        nextMonth = month + 1;
        nextYear = year;
      }
    } else {
      nextDay = day + 1;
      nextMonth = month;
      nextYear = year;
    }

    console.log(
      `The next date after the specified date: ${nextDay}.${nextMonth}.${nextYear}`
    );
  }
}

export default loopConditions;