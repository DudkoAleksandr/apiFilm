const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const resultSearch = document.querySelector(".cards__film");
const btnAddFilm = document.querySelector(".card__film-btnadd");

const favoritFilms = JSON.parse(localStorage.getItem("favorites")) || [];
const allFilms = JSON.parse(localStorage.getItem("allFilms")) || [];
// const searchFilms = JSON.parse(localStorage.getItem("searchFilm")) || [];
console.log(allFilms);

if (allFilms.length === 0) {
  resultSearch.innerHTML = "";
  resultSearch.innerHTML = "Найдите фильм";
} else {
  render(allFilms[allFilms.length - 1]);
}

btn.addEventListener("click", () => {
  searchFilm();
  // searchFilms.push({
  //   name: search.value,
  //   year: allFilm.Year,
  // });
  // localStorage.setItem("searchFilm", JSON.stringify(searchFilms));
});

async function searchFilm() {
  const link = await fetch(
    `https://www.omdbapi.com/?apikey=7ed27bc&t=${search.value}`,
  );
  const result = await link.json();
  if (result.Response === "False") {
    alert("Фильм не найден");
  } else {
    allFilms.push(result);
    localStorage.setItem("allFilms", JSON.stringify(allFilms));
    resultSearch.innerHTML = "";
    let lastIndex = allFilms.length - 1;
    render(allFilms[lastIndex]);
  }
}

function render(result) {
  let photo = result.Poster;
  if (photo === "N/A") {
    photo = "./no_image.gif";
  }
  const filmHtml = `
  <div class="card__film">
  <img class="card__film-img" src="${photo}" alt=""><br>
  <p class="card__film-title">Название фильма: ${result.Title}</p>
  <p class="card__film-year">Год производста: ${result.Year}</p>
  <p class="card__film-genre">Жанр фильма: ${result.Genre}</p>
  <p class="card__film-rate">Рейтинг: ${result.Rated === "N/A" ? "Нет рейтинга" : result.Rated}</p>
  <button class="card__film-btnadd">Добавить в избранное</button>
  </div
  `;
  resultSearch.insertAdjacentHTML("afterbegin", filmHtml);
  const btnAddFilm = document.querySelector(".card__film-btnadd");
  btnAddFilm.addEventListener("click", () => {
    favoritFilms.push({
      id: crypto.randomUUID(),
      name: `${result.Title}`,
      year: `${result.Year}`,
    });
    localStorage.setItem("favorites", JSON.stringify(favoritFilms));
  });
}
