const arrays = () => {
  /* Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.       Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.*/

  let shoppingList = [
    { name: "Milk", amount: 1, hasBought: false, price: 25 },
    { name: "Bread", amount: 2, hasBought: true, price: 10 },
    { name: "Apples", amount: 5, hasBought: false, price: 5 },
    { name: "Eggs", amount: 12, hasBought: true, price: 20 },
  ];

  function showShoppingList() {
    console.log("Shopping List:");

    let sortedShoppingList = shoppingList.sort(
      (a, b) => b.hasBought - a.hasBought
    );

    sortedShoppingList.forEach((item) => {
      let status = item.hasBought ? "has bought" : "has not bought";
      console.log(
        `${item.name} - ${item.amount} шт. - ${status} - ${
          item.price * item.amount
        } грн.`
      );
    });
  }

  function purchaseOfProduct(name) {
    let hasFound = false;
    shoppingList.forEach((item) => {
      if (item.name === name) {
        item.hasBought = true;
        hasFound = true;
      }
    });
    if (!hasFound) {
      console.log(`Product "${name}" not found in the shopping list.`);
    } else {
      console.log(`Product "${name}" marked as purchased.`);
    }
  }

  showShoppingList();
  purchaseOfProduct("Apples");
  purchaseOfProduct("Milk");
  purchaseOfProduct("Eggs");
  purchaseOfProduct("Bread");
  purchaseOfProduct("Beer");

  /*Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.*/
}

export default arrays;