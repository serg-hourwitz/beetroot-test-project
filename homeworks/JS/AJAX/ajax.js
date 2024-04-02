import { getById } from './helpers/get.js';

const getMovieInfo = () => {
  const DOMForm = getById('search-form');
  const DOMSearchInput = getById('search-input');
  const DOMTypeSelect = getById('type-select');

  if (!DOMForm) {
    throw new Error('no form!');
  }
  if (!DOMSearchInput) {
    throw new Error('no input!');
  }
  if (!DOMTypeSelect) {
    throw new Error('no select!');
  }

  DOMForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = DOMSearchInput.value;
    const type = DOMTypeSelect.value;
    searchMovies(searchTerm, type);
  });

  const searchMovies = (searchTerm, type, page = 1) => {
    const apiKey = '5f873eb1';
    const url = buildSearchUrl(apiKey, searchTerm, type, page);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          throw new Error('no data response!');
        }
        if (data.Response === 'True') {
          displayMovies(data.Search);
          return displayPagination(data.totalResults, page, searchTerm, type);
        }
      })
      .catch((error) => alert('Error fetching movies:', error))
      .finally(() => {
        alert('Fetch movie details completed');
      });
  };

  const buildSearchUrl = (apiKey, searchTerm, type, page) => {
    return `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}&type=${type}&page=${page}`;
  };

  const displayMovies = (movies) => {
    const moviesList = document.createElement('div');
    moviesList.textContent = '';
    document.body.appendChild(moviesList);

    movies.forEach((movie) => {
      const movieItem = document.createElement('div');
      movieItem.textContent = `${movie.Title}`;
      moviesList.appendChild(movieItem);

      const movieDetailButton = document.createElement('button');
      movieDetailButton.setAttribute('type', 'button');
      movieDetailButton.setAttribute('data-id', `${movie.imdbID}`);
      movieDetailButton.textContent = 'DETAILS';
      movieDetailButton.classList.add('detailsButton');
      movieItem.appendChild(movieDetailButton);
      moviesList.appendChild(movieItem);
    });
  };

  const displayPagination = (totalResults, currentPage, searchTerm, type) => {
    const totalPages = Math.ceil(totalResults / 10);
    const pagination = document.createElement('div');
    pagination.textContent = '';

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;
      if (i === currentPage) {
        pageButton.disabled = true;
      }
      pageButton.addEventListener('click', () => {
        searchMovies(searchTerm, type, i);
      });
      pagination.appendChild(pageButton);
    }
  };
  const moviesList = document.createElement('div');

  moviesList.addEventListener('click', (event) => {
    if (event.target.classList.contains('detailsButton')) {
      const movieId = event.target.getAttribute('data-id');
      fetchMovieDetails(movieId);
    }
  });

  const fetchMovieDetails = (movieId) => {
    const apiKey = '5f873eb1';
    const url = buildMovieUrl(apiKey, movieId);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          throw new Error('no data response!');
        }
        displayMovieDetails(data);
      })
      .catch((error) => alert('Error fetching movie details:', error))
      .finally(() => {
        alert('Fetch movie details completed');
      });
  };

  const buildMovieUrl = (apiKey, movieId) => {
    return `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;
  };

  const displayMovieDetails = (movie) => {
    const movieDetails = document.createElement('div');
    document.body.appendChild(movieDetails);

    const movieTitle = document.createElement('h2');
    movieTitle.textContent = `${movie.Title}`;
    movieDetails.appendChild(movieTitle);

    const moviePlot = document.createElement('p');
    moviePlot.textContent = `${movie.Plot}`;
    movieDetails.appendChild(moviePlot);

    const movieReleased = document.createElement('p');
    movieReleased.textContent = `Released: ${movie.Released}`;
    movieDetails.appendChild(movieReleased);

    const movieRuntime = document.createElement('p');
    movieRuntime.textContent = `Runtime: ${movie.Runtime}`;
    movieDetails.appendChild(movieRuntime);

    const movieGenre = document.createElement('p');
    movieGenre.textContent = `Genre: ${movie.Genre}`;
    movieDetails.appendChild(movieGenre);

    const moviePoster = document.createElement('img');
    moviePoster.setAttribute('src', `${movie.Poster}`);
    moviePoster.setAttribute('alt', `${movie.Title}`);
    movieDetails.appendChild(moviePoster);
  };
};

getMovieInfo();
