const result = document.querySelector(".result");
const btnDel = document.querySelector(".btn_del");
const selectSearch = document.querySelector(".search__years");

let searchFilms = JSON.parse(localStorage.getItem("allFilms")) || [];
console.log(searchFilms);
for (let searchFilm of searchFilms) {
  const searchHtml = `
        <li>     
            <div class="search__film">
  <p class="search__film-title">Название фильма: ${searchFilm.Title}</p>
</li>
    `;
  result.insertAdjacentHTML("afterbegin", searchHtml);
}

btnDel.addEventListener("click", () => {
  result.innerHTML = "";
  searchFilms = [];
  // localStorage.removeItem("allFilms");
});

selectSearch.addEventListener("change", () => {
  for (let film of searchFilms) {
    // console.log(film.Year);
    if (selectSearch.value === film.Year) {
      console.log(film.Title);
    } else if (selectSearch.value === "all-films") {
      console.log(film.Title);
    }
  }
});

// const searchFilms = JSON.parse(localStorage.getItem("searchFilm")) || [];
// console.log(searchFilms);
// for (let searchFilm of searchFilms) {
//   const searchHtml = `
//         <li>
//             <div class="search__film">
//   <p class="search__film-title">Название фильма: ${searchFilm.name}</p>
// </li>
//     `;
//   result.insertAdjacentHTML("afterbegin", searchHtml);
// }

// btnDel.addEventListener("click", () => {
//   result.innerHTML = "";
//   localStorage.removeItem("searchFilm");
// });

// selectSearch.addEventListener("change", () => {
//   if (selectSearch.value == 1998) {
//     for (let searchFilm of searchFilms) {
//       console.log(searchFilm);
//     }
//   }
// });
