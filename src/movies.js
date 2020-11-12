const textInput = document.getElementById('keyword');

const fetchMovies = (keyword) => {
  const ul = document.getElementById('results');

  fetch(`http://www.omdbapi.com/?apikey=adf1f2d7&s=${keyword}`)
    .then(response => response.json())
    .then((data) => {
      ul.innerHTML = '';

      data.Search.forEach((movieObject) => {
        const li = `<li class="list-inline-item">
            <img src="${movieObject.Poster}" alt="">
            <p>${movieObject.Title}</p>
          </li>`

        ul.insertAdjacentHTML('beforeend', li);
      })
    })
}

const fetchResults = (event) => {
  event.preventDefault();
  fetchMovies(textInput.value);
}


export { fetchMovies, fetchResults }
