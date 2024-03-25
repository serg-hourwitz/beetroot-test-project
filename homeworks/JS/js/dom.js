const dom = () => {
  const createPlayList = () => {
    const DOMTitle = document.getElementById("playlist-title");
    DOMTitle.classList.add("playlist-title");
    const DOMList = document.getElementById("js-list");
    DOMList.classList.add("js-list");

    if (DOMTitle) {
      setTimeout(() => {
        DOMTitle.style.color = "green";
      }, 3000);
    }

    if (DOMList) {
      const addItemToList = (author, song) => {
        const li = document.createElement("li");
        li.classList.add("list-item");

        const spanAuthor = document.createElement("span");
        const spanSong = document.createElement("span");

        spanAuthor.innerText = `author: ${author}`;
        spanSong.innerText = `song: ${song}`;

        spanAuthor.classList.add("author");
        spanSong.classList.add("song");

        setTimeout(() => {
          spanAuthor.style.color = "red";
        }, 3000);

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

      playList.forEach((item) => {
        addItemToList(item.author, item.song);
      });
    }
  };

  createPlayList();
};

export default dom;
