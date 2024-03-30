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
  modalContainer.style.marginBottom = "50px";

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
};

export default dom;
