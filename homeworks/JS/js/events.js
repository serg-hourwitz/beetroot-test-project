const events = () => {
  // Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

  // Функція для заміни div на textarea
  function switchToTextarea() {
    const contentDiv = document.getElementById("content");
    if (!contentDiv) {
      throw new Error("немає тега div!");
    }
    const text = contentDiv.innerText.trim(); // Отримання тексту без пробілів
    // Створення елементу textarea та встановлення тексту
    const textarea = document.createElement("textarea");
    textarea.textContent = text;

    // Заміна div на textarea
    contentDiv.parentNode.replaceChild(textarea, contentDiv);

    // Фокусування на textarea
    textarea.focus();
  }

  // Функція для заміни textarea на div
  function switchToDiv() {
    const textarea = document.querySelector("textarea");
    if (!textarea) {
      throw new Error("немає тега textarea!");
    }
    const text = textarea.value;

    // Створення елементу div та встановлення тексту
    const contentDiv = document.createElement("div");
    contentDiv.textContent = text;

    // Заміна textarea на div
    textarea.parentNode.replaceChild(contentDiv, textarea);
  }

  // Відслідковування натискання Ctrl + E та Ctrl + S
  window.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "e") {
      event.preventDefault(); // Вимкнення поведінки за замовчуванням
      switchToTextarea(); // Перемикання на textarea
    } else if (event.ctrlKey && event.key === "s") {
      event.preventDefault(); // Вимкнення поведінки за замовчуванням
      switchToDiv(); // Перемикання на div
    }
  });

  //  Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

  document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll("#myTable th");

    headers.forEach(function (header, index) {
      header.addEventListener("click", function () {
        sortTable(index);
      });
    });
  });

  function sortTable(columnIndex) {
    const table = document.getElementById("myTable");
    if (!table) {
      throw new Error('немає таблиці!');
    }
    const rows = Array.from(table.rows).slice(1); // Видаляємо перший рядок (заголовок)

    rows.sort((rowA, rowB) => {
      let valueA = rowA.cells[columnIndex].textContent;
      let valueB = rowB.cells[columnIndex].textContent;

      // Перевірка, чи значення є числом
      if (!isNaN(valueA) && !isNaN(valueB)) {
        return Number(valueA) - Number(valueB);
      } else {
        return valueA.localeCompare(valueB);
      }
    });

    // Видаляємо всі рядки з таблиці
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }

    // Додаємо відсортовані рядки назад у таблицю
    rows.forEach((row) => {
      table.appendChild(row);
    });
  }

  //  Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

  // Отримуємо елемент блоку та його маркер розміру
  const resizeable = document.getElementById("resizeable");
  if (!resizeable) {
    throw new Error ('відсутній блок тексту!')ж
  }
  const resizeHandle = document.createElement("div");
  resizeHandle.className = "resize-handle";
  resizeable.appendChild(resizeHandle);

  // Обробник події при натисканні на маркер розміру
  resizeHandle.addEventListener("mousedown", function (event) {
    event.preventDefault(); // Вимкнення стандартної обробки події
    const initialWidth = resizeable.offsetWidth;
    const initialHeight = resizeable.offsetHeight;
    const initialX = event.clientX;
    const initialY = event.clientY;

    // Функція для переміщення маркера розміру
    function resize(event) {
      const dx = event.clientX - initialX;
      const dy = event.clientY - initialY;
      resizeable.style.width = initialWidth + dx + "px";
      resizeable.style.height = initialHeight + dy + "px";
    }

    // Додаємо обробник події для переміщення маркера розміру
    function stopResize() {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResize);
    }

    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  });
};

events();
