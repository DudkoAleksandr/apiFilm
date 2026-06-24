const result = document.querySelector(".result");

const favoritFilms = JSON.parse(localStorage.getItem("favorites"));
for (let favoritFilm of favoritFilms) {
  const filmHtml = `
  <li>
  <p class="favorite__film-title">Название фильма: ${favoritFilm.name}</p>
  <p class="favorite__film-year">Год производста: ${favoritFilm.year}</p>
  <button class="btn__del">Удалить</button>
  </li>
    `;
  result.insertAdjacentHTML('afterbegin', filmHtml)

  const btnDel = document.querySelectorAll(".btn__del");
  for(const btn of btnDel){
    btn.id = crypto.randomUUID()
    console.log(btn)
  }

}

