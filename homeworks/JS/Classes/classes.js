/* Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

поле, що зберігає радіус кола;
Продемонструй роботу властивостей і методів.*/

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

// get-властивість, яке повертає радіус кола;
  get radius() {
    return this._radius;
  }

// set-властивість, що встановлює радіус кола;
  set radius(radius) {
    this._radius = radius;
  }

// get-властивість, яке повертає діаметр кола;
  get diameter() {
    return 2 * this._radius;
  }

// метод, що обчислює площу кола;
  area() {
    return Math.PI * Math.pow(this._radius, 2);
  }

// метод, що обчислює довжину кола.
  circumference() {
    return 2 * Math.PI * this._radius;
  }
}

// Приклад використання
const myCircle = new Circle(5);

console.log('Радіус кола:', myCircle.radius);
console.log('Діаметр кола:', myCircle.diameter);
console.log('Площа кола:', myCircle.area());
console.log('Довжина кола:', myCircle.circumference());

// Зміна радіусу
myCircle.radius = 7;
console.log('Новий радіус кола:', myCircle.radius);
console.log('Новий діаметр кола:', myCircle.diameter);
console.log('Нова площа кола:', myCircle.area());
console.log('Нова довжина кола:', myCircle.circumference());
console.log('___________________________________________________________________________________');

/*  Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

Продемонструй роботу написаних методів.*/

class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }

  write(text) {
    let writtenText = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && this.inkLevel > 0) {
        writtenText += text[i];
        this.inkLevel -= 0.5;
      } else if (text[i] === ' ') {
        writtenText += ' ';
      }
    }
    console.log(`Написано: ${writtenText}`);
  }
}

class RefillableMarker extends Marker {
  refill(inkAmount) {
    this.inkLevel += inkAmount;
    console.log(
      `Маркер перезаправлено. Поточний рівень чорнила: ${this.inkLevel}%`
    );
  }
}

// Приклад використання звичайного маркера
const marker1 = new Marker('black', 50);
console.log('color: ', marker1.color);
marker1.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
console.log(`Рівень чорнила після написання: ${marker1.inkLevel}%`);

// Приклад використання перезаправлюваного маркера
const refillableMarker = new RefillableMarker('blue', 30);
console.log('color: ', refillableMarker.color);
refillableMarker.write(
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(`Рівень чорнила після написання: ${refillableMarker.inkLevel}%`);

refillableMarker.refill(70);
console.log(
  `Після перезаправлення рівень чорнила: ${refillableMarker.inkLevel}%`
);
console.log(
  '___________________________________________________________________________________'
);



/* Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().*/

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employeeArray) {
    this.employeeArray = employeeArray;
  }

  getHtml() {
    const table = document.createElement('table');
    document.body.appendChild(table);
    
    let tableHtml =
      "<table border='1'><tr><th>Ім'я</th><th>Посада</th><th>Зарплата</th></tr>";
    this.employeeArray.forEach((employee) => {
      tableHtml += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`;
    });
    tableHtml += '</table>';
    return tableHtml;
  }
}

// Створення масиву працівників банку
const bankEmployees = [
  new Employee('Іван Петришин', 'Менеджер', 30000),
  new Employee('Марія Сидоренко', 'Касир', 25000),
  new Employee('Олексій Іванів', 'Фінансовий аналітик', 40000),
];

// Створення об'єкту класу EmpTable
const empTable = new EmpTable(bankEmployees);

// Виведення на екран результату роботи методу getHtml()
console.log(empTable.getHtml());

