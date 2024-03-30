const dom = () => {
  // Створити сторінку, що показує нумерований список пісень
  const createPlayList = () => {
    const DOMList = document.getElementById("js-list");
    DOMList.classList.add("js-list");

    if (DOMList && DOMList.classList.contains("js-list")) {
      const addItemToList = (author, song) => {
        const li = document.createElement("li");
        li.classList.add("list-item");

        const spanAuthor = document.createElement("span");
        const spanSong = document.createElement("span");

        spanAuthor.innerText = `author: ${author}`;
        spanSong.innerText = `song: ${song}`;

        spanAuthor.classList.add("author");
        spanSong.classList.add("song");

        li.appendChild(spanAuthor);
        li.appendChild(spanSong);

        DOMList.appendChild(li);
      };

      const playList = [
        {
          author: "LED ZEPPELIN",

          song: "STAIRWAY TO HEAVEN",
        },

        {
          author: "QUEEN",

          song: "BOHEMIAN RHAPSODY",
        },

        {
          author: "LYNYRD SKYNYRD",

          song: "FREE BIRD",
        },

        {
          author: "DEEP PURPLE",

          song: "SMOKE ON THE WATER",
        },

        {
          author: "JIMI HENDRIX",

          song: "ALL ALONG THE WATCHTOWER",
        },

        {
          author: "AC/DC",

          song: "BACK IN BLACK",
        },

        {
          author: "QUEEN",

          song: "WE WILL ROCK YOU",
        },

        {
          author: "METALLICA",

          song: "ENTER SANDMAN",
        },
      ];

      if (Array.isArray(playList)) {
        playList.forEach((item) => {
          // Перевірка кожного елементу на об'єкт з властивостями author та song
          if (typeof item === "object" && "author" in item && "song" in item) {
            addItemToList(item.author, item.song);
          } else {
            console.error("Invalid playlist item:", item);
          }
        });
      } else {
        console.error("Playlist is not an array:", playList);
      }
    } else {
      console.error(
        "Playlist DOM element not found or doesn't have required class"
      );
    }
  };

  createPlayList();

  // Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

  // Створення та стилізація елементів
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal");
  modalContainer.style.cssText = `margin-top: 50px; margin-bottom: 50px`;

  const openButton = document.createElement("button");
  openButton.setAttribute("type", "button");
  openButton.setAttribute("id", "open");
  openButton.textContent = "OPEN";

  const modalWindow = document.createElement("div");
  modalWindow.setAttribute("id", "mwindow");
  modalWindow.classList.add("mwindow");
  modalWindow.hidden = true;

  modalWindow.style.cssText = `width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto;`;

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  const closeButton = document.createElement("button");
  closeButton.setAttribute("type", "button");
  closeButton.setAttribute("id", "close");
  closeButton.textContent = "CLOSE";

  // Додавання елементів до DOM
  modalWindow.appendChild(paragraph);
  modalWindow.appendChild(closeButton);

  modalContainer.appendChild(openButton);
  modalContainer.appendChild(modalWindow);

  document.body.appendChild(modalContainer);

  // перевірки

  const modalContainerExists = document.body.contains(modalContainer);
  const openButtonExists = document.body.contains(openButton);
  const modalWindowExists = document.body.contains(modalWindow);
  const closeButtonExists = document.body.contains(closeButton);

  if (
    modalContainerExists &&
    openButtonExists &&
    modalWindowExists &&
    closeButtonExists &&
    modalWindow.hidden
  ) {
    // функція для відкривання/закривання вікна

    const operateModal = () => {
      openButton.addEventListener("click", () => (modalWindow.hidden = false));
      closeButton.addEventListener("click", () => (modalWindow.hidden = true));
    };
    operateModal();
  }

  // Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

  /*ДЛЯ СТАНДАРТНОГО СВІТЛОФОРА*/

  // Створення та стилізація елементів
  const title = document.createElement("h2");
  title.style.cssText = `text-align: center;
  margin-bottom: 50px`;
  title.textContent = "Traffic lights";

  const trafficLights = document.createElement("div");
  trafficLights.classList.add("traffic-lights");
  trafficLights.style.cssText = `width: 150px;
    height: 400px;
    background-color: #333;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 50px;
    padding: 20px;`;

  const lightStyles = `width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #111;`;

  const red = document.createElement("div");
  red.style.cssText = lightStyles;

  const yellow = document.createElement("div");
  yellow.style.cssText = lightStyles;

  const green = document.createElement("div");
  green.style.cssText = lightStyles;

  const triggerButton = document.createElement("button");
  triggerButton.setAttribute("type", "button");
  triggerButton.setAttribute("id", "trigger");
  triggerButton.textContent = "TRIGGER";

  // Додавання елементів до DOM
  document.body.appendChild(title);

  trafficLights.appendChild(red);
  trafficLights.appendChild(yellow);
  trafficLights.appendChild(green);

  trafficLights.appendChild(triggerButton);

  document.body.appendChild(trafficLights);

  // перевірки

  const titleExists = document.body.contains(title);
  const trafficLightsExists = document.body.contains(trafficLights);
  const redExists = document.body.contains(red);
  const yellowExists = document.body.contains(yellow);
  const greenExists = document.body.contains(green);
  const triggerButtonExists = document.body.contains(triggerButton);

  if (
    titleExists &&
    trafficLightsExists &&
    redExists &&
    yellowExists &&
    greenExists &&
    triggerButtonExists
  ) {
    triggerButton.addEventListener("click", () => {
      // Перевірка поточного кольору і перемикання на наступний
      if (red.style.backgroundColor === "red") {
        red.style.backgroundColor = "";
        yellow.style.backgroundColor = "yellow";
      } else if (yellow.style.backgroundColor === "yellow") {
        yellow.style.backgroundColor = "";
        green.style.backgroundColor = "green";
      } else if (green.style.backgroundColor === "green") {
        green.style.backgroundColor = "";
        red.style.backgroundColor = "red";
      } else {
        // Якщо жоден з кольорів не встановлений, встановлюємо червоний за замовчуванням
        red.style.backgroundColor = "red";
      }
    });
  }

  /*ДЛЯ ДОВІЛЬНОЇ КІЛЬКОСТІ*/

  const lightBox = document.querySelector(".lightbox");

  const lights = document.querySelectorAll(".light");
  console.log(lights);

  const trigger = document.getElementById("trigger-light-btn");

  // перевірка
  const lightBoxExists = document.body.contains(lightBox);
  const triggerExists = document.body.contains(trigger);

  if (lightBoxExists && triggerExists && lights.length > 0) {
    let currentIndex = 0;

    // Створення обробника подій для кнопки
    trigger.addEventListener("click", () => {
      // Зняття класу active з усіх світлових елементів
      lights.forEach((light) => {
        light.classList.remove("active");
      });

      // Додавання класу active до наступного світлового елемента
      lights[currentIndex].classList.add("active");

      // Інкрементуємо індекс, але перевіряємо, чи не вийшли за межі масиву
      currentIndex++;
      if (currentIndex >= lights.length) {
        currentIndex = 0;
      }
    });
  }
};

export default dom;
