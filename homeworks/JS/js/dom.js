const dom = () => {
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
};

export default dom;
