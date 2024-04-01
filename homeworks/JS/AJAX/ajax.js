document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const typeSelect = document.getElementById("typeSelect");
  const moviesList = document.getElementById("moviesList");
  const pagination = document.getElementById("pagination");
  const movieDetails = document.getElementById("movieDetails");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value;
    const type = typeSelect.value;
    searchMovies(searchTerm, type);
  });

  function searchMovies(searchTerm, type, page = 1) {
    const apiKey = "5f873eb1"; // Вставте сюди ваш ключ API OMDB
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&type=${type}&page=${page}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          displayMovies(data.Search);
          displayPagination(data.totalResults, page, searchTerm, type);
        } else {
          moviesList.innerHTML = "<p>Movie not found!</p>";
          pagination.innerHTML = "";
        }
      })
      .catch((error) => console.log("Error fetching movies:", error));
  }

  function displayMovies(movies) {
    moviesList.innerHTML = "";
    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.innerHTML = `<p>${movie.Title}</p>
                                  <button class="detailsButton" data-id="${movie.imdbID}">Details</button>`;
      moviesList.appendChild(movieItem);
    });
  }

  function displayPagination(totalResults, currentPage, searchTerm, type) {
    const totalPages = Math.ceil(totalResults / 10); // 10 movies per page
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      if (i === currentPage) {
        pageButton.disabled = true;
      }
      pageButton.addEventListener("click", function () {
        searchMovies(searchTerm, type, i);
      });
      pagination.appendChild(pageButton);
    }
  }

  moviesList.addEventListener("click", function (event) {
    if (event.target.classList.contains("detailsButton")) {
      const movieId = event.target.getAttribute("data-id");
      fetchMovieDetails(movieId);
    }
  });

  function fetchMovieDetails(movieId) {
    const apiKey = "5f873eb1"; // Вставте сюди ваш ключ API OMDB
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayMovieDetails(data);
      })
      .catch((error) => console.log("Error fetching movie details:", error));
  }

  function displayMovieDetails(movie) {
    movieDetails.innerHTML = `
            <h2>${movie.Title}</h2>
            <p>${movie.Plot}</p>
            <p>Released: ${movie.Released}</p>
            <p>Runtime: ${movie.Runtime}</p>
            <p>Genre: ${movie.Genre}</p>
            <img src="${movie.Poster}" alt="${movie.Title} poster">
        `;
  }
});
