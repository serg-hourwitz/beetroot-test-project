const arrays = () => {
  /* Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.       Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.*/

  // Функція для отримання списку покупок через prompt

  // Функція для запису продукту в localStorage
  function addProductToList() {
    let productName = prompt("Введіть назву продукту:");
    let quantity = parseInt(prompt("Введіть кількість:"));
    let price = parseFloat(prompt("Введіть ціну за одиницю товару:"));
    let purchased = confirm("Чи куплений цей продукт?");

    let product = {
      name: productName,
      quantity: quantity,
      price: price,
      purchased: purchased,
      total: quantity * price,
    };

    let productList = JSON.parse(localStorage.getItem("productList")) || [];
    productList.push(product);
    localStorage.setItem("productList", JSON.stringify(productList));
  }

  // Функція для відмітки продукту як купленого
  function markProductAsPurchased(productName) {
    let productList = JSON.parse(localStorage.getItem("productList")) || [];
    productList.forEach((product) => {
      if (product.name === productName) {
        product.purchased = true;
      }
    });
    localStorage.setItem("productList", JSON.stringify(productList));
  }

  // Функція для видалення продукту зі списку
  function removeProductFromList(productName) {
    let productList = JSON.parse(localStorage.getItem("productList")) || [];
    let updatedList = productList.filter(
      (product) => product.name !== productName
    );
    localStorage.setItem("productList", JSON.stringify(updatedList));
  }

  // Функція для додавання покупки в список або збільшення кількості та оновлення суми
  function addOrUpdateProduct(productName, quantity, price) {
    let productList = JSON.parse(localStorage.getItem("productList")) || [];
    let found = false;

    productList.forEach((product) => {
      if (product.name === productName) {
        product.quantity += quantity;
        product.total = product.quantity * product.price;
        found = true;
      }
    });

    if (!found) {
      let newProduct = {
        name: productName,
        quantity: quantity,
        price: price,
        purchased: false,
        total: quantity * price,
      };
      productList.push(newProduct);
    }

    localStorage.setItem("productList", JSON.stringify(productList));
  }

  // Функція для підрахунку загальної суми всіх продуктів
  function calculateTotal() {
    let productList = JSON.parse(localStorage.getItem("productList")) || [];
    let total = 0;

    productList.forEach((product) => {
      total += product.total;
    });

    return total;
  }

  // Функція для підрахунку суми всіх (не) придбаних продуктів
  function calculatePurchasedTotal(purchased) {
    let productList = JSON.parse(localStorage.getItem("productList")) || [];
    let total = 0;

    productList.forEach((product) => {
      if (product.purchased === purchased) {
        total += product.total;
      }
    });

    return total;
  }

  // Функція для сортування продуктів за сумою (від більшого до меншого або від меншого до більшого)
  function sortProductsByTotal(ascending) {
    let productList = JSON.parse(localStorage.getItem("productList")) || [];

    productList.sort((a, b) => {
      if (ascending) {
        return a.total - b.total;
      } else {
        return b.total - a.total;
      }
    });

    return productList;
  }

  // Виклик функції для додавання продукту до списку через prompt
  addProductToList();

  // Приклад використання функцій
  markProductAsPurchased("milk");
  removeProductFromList("fruits");
  addOrUpdateProduct("eggs", 6, 2); // Якщо продукт уже існує, кількість і сума будуть оновлені

  console.log("Весь список:");
  // console.log(JSON.parse(localStorage.getItem("productList")));
  JSON.parse(localStorage.getItem("productList")).forEach(item => console.log(item));

  console.log("Загальна сума всіх продуктів:", calculateTotal());
  console.log("Сума придбаних продуктів:", calculatePurchasedTotal(true));
  console.log("Сума не придбаних продуктів:", calculatePurchasedTotal(false));

  console.log(
    "Список продуктів відсортований за сумою (від меншого до більшого):"
  );
  console.log(sortProductsByTotal(false));
  

  /*Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.*/
};

export default arrays;
