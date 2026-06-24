const result = document.querySelector(".result");

const favoritFilms = JSON.parse(localStorage.getItem("favorites"));
for (let favoritFilm of favoritFilms) {
  const filmHtml = `
 <div class="favorite__film">
  <p class="favorite__film-title">Название фильма: ${favoritFilm.name}</p>
  <p class="favorite__film-year">Год производста: ${favoritFilm.year}</p>
    `;
  result.insertAdjacentHTML('afterbegin', filmHtml)
  console.log(favoritFilm);
}
