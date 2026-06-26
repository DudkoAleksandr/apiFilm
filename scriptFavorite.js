const result = document.querySelector(".result");

const favoritFilms = JSON.parse(localStorage.getItem("favorites"));

function render() {
  result.innerHTML = "";
  for (let favoritFilm of favoritFilms) {
    const filmHtml = `
  <li>
  <p class="favorite__film-title">Название фильма: ${favoritFilm.name}</p>
  <p class="favorite__film-year">Год производста: ${favoritFilm.year}</p>
  <button class="btn__del" data-id=${favoritFilm.id}>Удалить</button>
  </li>
    `;
    result.insertAdjacentHTML("beforeend", filmHtml);
  }
  delFilm();
}
render();

function delFilm() {
  const btnDel = document.querySelectorAll(".btn__del");
  for (let delBtn of btnDel) {
    delBtn.addEventListener("click", () => {
      console.log(1211);
      for (let i = 0; i < favoritFilms.length; i++) {
        if (favoritFilms[i].id == idFilmBtn) {
          favoritFilms.splice(i, 1);
          localStorage.setItem("favorites", JSON.stringify(favoritFilms));
          render();
          console.log(i, favoritFilms);
        }
      }
    });
    const idFilmBtn = delBtn.dataset.id;
  }
}
delFilm();
