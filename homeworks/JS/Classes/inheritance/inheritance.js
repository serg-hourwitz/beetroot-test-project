/* Реалізуй клас User. Під час створення екземпляру на базі цього класу, обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin або user). У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле, яке введено некоректно. У класі User повинні бути такі компоненти:

getName
getRole
login
logout
сhangeName
changePassword 

У класі Admin повинні бути такі компоненти:

addUser
removeUser
changeUserRole
getAllUsers
removeAllUsers */

class User {
  constructor(name, role) {
    if (role !== 'admin' && role !== 'user') {
      alert('Роль повинна бути "admin" або "user"');
      return;
    }
    this.name = name;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    console.log(`${this.name} увійшов в систему.`);
  }

  logout() {
    console.log(`${this.name} вийшов з системи.`);
  }

  changeName(newName) {
    this.name = newName;
    console.log(`Ім'я користувача змінено на ${newName}.`);
  }

  changePassword(newPassword) {
    console.log(`Пароль користувача ${this.name} змінено на ${newPassword}.`);
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(name, role) {
    const newUser = new User(name, role);
    if (newUser.name && newUser.role) {
      this.users.push(newUser);
      console.log(`Користувач ${name} доданий.`);
    }
  }

  removeUser(userName) {
    this.users = this.users.filter((user) => user.name !== userName);
    console.log(`Користувач ${userName} видалений.`);
  }

  changeUserRole(userName, newRole) {
    const user = this.users.find((user) => user.name === userName);
    if (user) {
      user.role = newRole;
      console.log(`Роль користувача ${userName} змінена на ${newRole}.`);
    } else {
      console.log(`Користувача ${userName} не знайдено.`);
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
    console.log('Всі користувачі видалені.');
  }
}

// Приклад використання
const admin = new Admin('Admin');

admin.addUser('Petro', 'user');
admin.addUser('Ivan', 'admin');
console.log(admin.getAllUsers());

admin.changeUserRole('Petro', 'admin');
console.log(admin.getAllUsers());

admin.removeUser('Ivan');
console.log(admin.getAllUsers());

admin.removeAllUsers();
console.log(admin.getAllUsers());

console.log('________________________________________________');
