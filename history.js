const result = document.querySelector(".result");
const btnDel = document.querySelector(".btn_del");

const searchFilms = JSON.parse(localStorage.getItem('searchFilm')) || [];
console.log(searchFilms);
for(let searchFilm of searchFilms){
    const searchHtml = `
        <li>     
            <div class="search__film">
  <p class="search__film-title">Название фильма: ${searchFilm.name}</p>
</li>
    `;
    result.insertAdjacentHTML('afterbegin', searchHtml)
}

btnDel.addEventListener('click', () => {
    result.innerHTML = ''
    localStorage.removeItem("searchFilm");
})
