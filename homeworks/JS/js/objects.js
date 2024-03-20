import errorName from "./error-name.js";
import errorNumber from "./error-number.js";

const objects = () => {
  /* Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом: */

  const car = {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2020,
    averageSpeed: 100,
    fuelTankCapacity: 50,
    fuelConsumption: 6.5,
    drivers: [],
    // - Метод, який виводить на екран інформацію про автомобіль:
    displayInfo: function () {
      console.log(`manufacturer: ${this.manufacturer}`);
      console.log(`model: ${this.model}`);
      console.log(`year: ${this.year}`);
      console.log(`average speed: ${this.averageSpeed} km/h`);
      console.log(`fuel tank capacity: ${this.fuelTankCapacity} liters`);
      console.log(`fuel consumption: ${this.fuelConsumption} liters/100km`);
      console.log(`drivers: ${this.drivers.join(", ")}`);
    },
    // - Додавання ім’я водія у список:
    addDriver: function (driverName) {
      if (errorName(driverName)) return "incorrect name";

      this.drivers.push(driverName);
    },
    // - Перевірка водія на наявність його ім’я у списку:
    checkDriver: function (driverName) {
      if (errorName(driverName)) return "incorrect name";

      return this.drivers.includes(driverName);
    },
    // - Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину:
    calculateTrip(distance) {
      let totalTime = distance / this.averageSpeed;
      let totalFuel = (distance / 100) * this.fuelConsumption;

      // Adding break time every 4 hours
      const breakTime = Math.floor(totalTime / 4);
      totalTime += breakTime;

      // Adding fuel for idling during breaks
      const fuelForBreaks = breakTime * this.fuelConsumption;
      totalFuel += fuelForBreaks;

      return `Total time of a trip - ${totalTime} hours, total fuel consumption - ${totalFuel} litres in a distance of ${distance} km.`;
    },
  };

  car.displayInfo();
  car.addDriver("John Smith");
  console.log(car.drivers);
  console.log(car.checkDriver("John Smith"));
  console.log(car.checkDriver("Alice Cooper"));
  console.log(car.calculateTrip(500));
  console.log("");

  /*   Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом.
  Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин. */

  const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    // Display time
    displayTime: function () {
      if (
        errorNumber(this.hours) ||
        errorNumber(this.minutes) ||
        errorNumber(this.seconds)
      )
        return "incorrect input";

      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    },

    // Add seconds
    addSeconds: function (seconds) {
      if (errorNumber(seconds)) return "incorrect input";

      this.seconds += seconds;
      this.adjustTime();
    },

    // Add minutes
    addMinutes: function (minutes) {
      if (errorNumber(minutes)) return "incorrect input";

      this.minutes += minutes;
      this.adjustTime();
    },

    // Add hours
    addHours: function (hours) {
      if (errorNumber(hours)) return "incorrect input";

      this.hours += hours;
      this.adjustTime();
    },

    // Correct time reflection
    adjustTime: function () {
      while (this.seconds >= 60) {
        this.seconds -= 60;
        this.minutes += 1;
      }
      while (this.minutes >= 60) {
        this.minutes -= 60;
        this.hours += 1;
      }
      while (this.hours >= 24) {
        this.hours -= 24;
      }
    },
  };

  time.hours = 20;
  time.minutes = 59;
  time.seconds = 45;

  time.displayTime();

  time.addSeconds(30);
  time.displayTime();

  time.addMinutes(75);
  time.displayTime();

  time.addHours(2);
  time.displayTime();

  console.log("");

  //   Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
  // Складання 2-х об'єктів-дробів.
  // Віднімання 2-х об'єктів-дробів.
  // Множення 2-х об'єктів-дробів.
  // Ділення 2-х об'єктів-дробів.
  // Скорочення об'єкта-дробу.

  const fractionOperations = {
    // finding the greatest common divisor
    gcd: function (a, b) {
      return b === 0 ? a : fractionOperations.gcd(b, a % b);
    },

    // fractional reduction
    simplifyFraction: function (numerator, denominator) {
      const divisor = fractionOperations.gcd(numerator, denominator);
      return [numerator / divisor, denominator / divisor];
    },
  };

  const Fraction = {
    numerator: 0,
    denominator: 1,

    // adding fractions
    add: function (otherFraction) {
      const newNumerator =
        this.numerator * otherFraction.denominator +
        otherFraction.numerator * this.denominator;
      const newDenominator = this.denominator * otherFraction.denominator;
      return fractionOperations.simplifyFraction(newNumerator, newDenominator);
    },

    // subtracting fractions
    subtract: function (otherFraction) {
      const newNumerator =
        this.numerator * otherFraction.denominator -
        otherFraction.numerator * this.denominator;
      const newDenominator = this.denominator * otherFraction.denominator;
      return fractionOperations.simplifyFraction(newNumerator, newDenominator);
    },

    // multiplication of fractions
    multiply: function (otherFraction) {
      const newNumerator = this.numerator * otherFraction.numerator;
      const newDenominator = this.denominator * otherFraction.denominator;
      return fractionOperations.simplifyFraction(newNumerator, newDenominator);
    },

    // division of fractions
    divide: function (otherFraction) {
      const newNumerator = this.numerator * otherFraction.denominator;
      const newDenominator = this.denominator * otherFraction.numerator;
      return fractionOperations.simplifyFraction(newNumerator, newDenominator);
    },
  };
  // creation an objects for operations
  const fraction1 = Object.create(Fraction);
  fraction1.numerator = 1;
  fraction1.denominator = 2;

  const fraction2 = Object.create(Fraction);
  fraction2.numerator = 3;
  fraction2.denominator = 4;

  const fraction3 = Object.create(Fraction);
  fraction3.numerator = 2;
  fraction3.denominator = 8;

  console.log(
    `Adding: ${fraction1.numerator}/${fraction1.denominator} + ${fraction2.numerator}/${fraction2.denominator} =`,
    fraction1.add(fraction2).join("/")
  );
  console.log(
    `Subtraction: ${fraction1.numerator}/${fraction1.denominator} - ${fraction2.numerator}/${fraction2.denominator} =`,
    fraction1.subtract(fraction2).join("/")
  );
  console.log(
    `Multiplication: ${fraction1.numerator}/${fraction1.denominator} x ${fraction2.numerator}/${fraction2.denominator} =`,
    fraction1.multiply(fraction2).join("/")
  );
  console.log(
    `Division: ${fraction1.numerator}/${fraction1.denominator} / ${fraction2.numerator}/${fraction2.denominator} =`,
    fraction1.divide(fraction2).join("/")
  );
  console.log(
    `Reduction: ${fraction3.numerator}/${fraction3.denominator} =`,
    fractionOperations
      .simplifyFraction(fraction3.numerator, fraction3.denominator)
      .join("/")
  );
};

export default objects;
