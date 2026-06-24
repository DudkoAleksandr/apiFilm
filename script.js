const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const resultSearch = document.querySelector(".cards__film");
const btnAddFilm = document.querySelector(".card__film-btnadd");

const favoritFilms = [];
const allFilms = [];
const searchFilms = []

btn.addEventListener("click", () => {
  searchFilm();
  searchFilms.push({
    name: search.value
  })
  localStorage.setItem('searchFilm', JSON.stringify(searchFilms))
});

async function searchFilm() {
  const link = await fetch(
    `http://www.omdbapi.com/?apikey=7ed27bc&t=${search.value}`,
  );
  const result = await link.json();
  if (result.Response === "False") {
    alert("Фильм не найден");
  } else {
    allFilms.push(result);
    resultSearch.innerHTML = "";
    let lastIndex = allFilms.length - 1;
    render(allFilms[lastIndex]);
    // console.log(allFilms[lastIndex]);
    // console.log(allFilms);
  }
}

function render(result) {
  const filmHtml = `
  <div class="card__film">
  <img class="card__film-img" src="${result.Poster}" alt=""><br>
  <p class="card__film-title">Название фильма: ${result.Title}</p>
  <p class="card__film-year">Год производста: ${result.Year}</p>
  <p class="card__film-genre">Жанр фильма: ${result.Genre}</p>
  <button class="card__film-btnadd">Добавить в избранное</button>
  </div
  `;
  resultSearch.insertAdjacentHTML("afterbegin", filmHtml);
  const btnAddFilm = document.querySelector(".card__film-btnadd");
  btnAddFilm.addEventListener("click", () => {
    favoritFilms.push({
      name: `${result.Title}`,
      year: `${result.Year}`,
    });
    localStorage.setItem('favorites', JSON.stringify(favoritFilms))
    // console.log(favoritFilms);
  });
}
