const result = document.querySelector(".result");

const searchFilms = JSON.parse(localStorage.getItem('searchFilm'));
for(let searchFilm of searchFilms){
    const searchHtml = `
      <div class="search__film">
  <p class="search__film-title">Название фильма: ${searchFilm.name}</p>
    `;
    result.insertAdjacentHTML('afterbegin', searchHtml)
}