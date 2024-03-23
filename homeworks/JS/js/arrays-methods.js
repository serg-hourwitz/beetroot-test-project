const arraysMethods = () => {
  /* Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і придбаний він чи ні, ціну за одиницю товару, sum. Написати кілька функцій для роботи з таким масивом:

*/

  let shoppingList = [
    {
      name: "milk",
      quantity: 1,
      isBought: false,
      price: 25,
      sum: 25,
    },
    {
      name: "bread",
      quantity: 2,
      isBought: true,
      price: 10,
      sum: 20,
    },
    {
      name: "fruits",
      quantity: 3,
      isBought: true,
      price: 5,
      sum: 15,
    },
  ];

  // Виведення інформації про кожен товар у списку покупок

  console.log("Shopping List:");
  shoppingList.forEach((item) => {
    console.log(`name: ${item.name}`);
    console.log(`quantity: ${item.quantity}`);
    console.log(`isBought: ${item.isBought ? true : false}`);
    console.log(`price per unit: ${item.price}`);
    console.log(`sum: ${item.sum}`);
    console.log("-----------------------");
  });

  // Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

  const showShoppingList = (shoppingList) => {
    console.log("Not purchased products:");
    shoppingList
      .filter((item) => !item.isBought)
      .forEach((item) => console.log(item));
    console.log("Purchased products:");
    shoppingList
      .filter((item) => item.isBought)
      .forEach((item) => console.log(item));

    console.log("-----------------------");
  };

  showShoppingList(shoppingList);
  //- Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

  const markAsPurchased = (productName) => {
    shoppingList.forEach((item) => {
      if (productName === item.name && item.isBought !== true) {
        console.log(item.name + " is purchased.");
      } else if (productName === item.name && item.isBought === true) {
        console.log(item.name + " is purchased soon.");
      }
    });
  };

  markAsPurchased("bread");
  markAsPurchased("milk");
  markAsPurchased("fruits");
  console.log("-----------------------");
  /* - Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
  .*/

  const deleteProduct = (productNameToDelete) => {
    if (shoppingList.length > 0) {
      shoppingList = shoppingList.filter(
        (item) => item.name !== productNameToDelete
      );
      console.log(
        `Shopping list after deleting of ${productNameToDelete}:`,
        shoppingList
      );
    } else {
      console.log("Your shopping list is empty!");
    }
  };
  // deleteProduct("bread");
  deleteProduct("milk");
  deleteProduct("fruits");
  deleteProduct();
  console.log("-----------------------");

  const checkDeletedProducts = (productName) => {
    shoppingList.forEach((item) => {
      item.name === productName
        ? console.log(shoppingList.includes(item))
        : console.log(false);
    });
  };
  checkDeletedProducts("bread");
  checkDeletedProducts("fruits");
  console.log("-----------------------");

  /*- Додавання покупки до списку. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24*/

  const addToShoppingList = (productName, quantity, price) => {
    let found = false;

    shoppingList.forEach((item) => {
      if (item.name === productName) {
        item.quantity += quantity;
        item.sum = item.quantity * item.price;
        found = true;
      }

      if (!found) {
        let newProduct = {
          name: productName,
          quantity: quantity,
          price: price,
          isBought: false,
          sum: quantity * price,
        };
        shoppingList.push(newProduct);
      }
    });
    console.log(shoppingList);
  };

  addToShoppingList("butter", 2, 54);
  addToShoppingList("bread", 1, 16);
  console.log("-----------------------");

  // Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.//

  let totalCount = 0;

  const countTotal = () => {
    shoppingList.forEach((item) => totalCount += item.sum);
    return totalCount;
  };

  console.log('Total value of shopping list is: ' + countTotal());

  // Підрахунок суми всіх (не) придбаних продуктів.

  function calculatePurchasedTotal(purchased) {
    let total = 0;

    shoppingList.forEach((item) => {
      if (item.isBought === purchased) {
        total += item.sum;
      }
    });

    return total;
  }
  console.log('total sum of purchased products is ' + calculatePurchasedTotal(true));
  console.log(
    "total sum of not purchased products is " + calculatePurchasedTotal(false)
  );

  /*Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)*/

  function sortProductsByTotal(ascending) {

    shoppingList.sort((a, b) => {
      if (ascending) {
        return a.sum - b.sum;
      } else {
        return b.sum - a.sum;
      }
    });

    return shoppingList;
  }

  console.log(sortProductsByTotal(true));
  console.log(sortProductsByTotal(false));
};

export default arraysMethods;
