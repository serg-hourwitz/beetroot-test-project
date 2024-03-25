const dom = () => {
  const createPlayList = () => {
    const title = document.getElementById("playlist-title");
    title.classList.add("playlist-title");
    const DOMList = document.getElementById("js-list");
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

    if (DOMList) {
      playList.forEach((item) => {
        {
          const li = document.createElement("li");
          li.classList.add("list-item");
          li.innerText = `author: ${item.author}, \n song: "${item.song}"`;
          DOMList.appendChild(li);
        }
      });
    }
  };
  createPlayList();
};

export default dom;
