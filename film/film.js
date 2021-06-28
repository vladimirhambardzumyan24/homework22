fetch("https://ghibliapi.herokuapp.com/films")
  .then(function (films) {
    return films.json();
  })
  .then(function (films) {
    console.log(films);
    const wrapper = document.querySelector(".wrapper");
    films.forEach((film) => {
      const item = `
        <div class="container">
          <div class="all">
            <label for="title">Title :</label>
            <span name="title" class="title all-span">${film.title}</span>
          </div>
          <div class="all">
            <label for="description">Description :</label>
            <div name="description" class="description all-span">${film.description}</div>
          </div>
          <div class="all">
            <label for="director">Director :</label>
            <span name="director" class="director all-span">${film.director}</span>
          </div>
          <div class="all">
            <span name="producer">Producer :</span>
            <label for="producer" class="producer all-span">${film.producer}</label>
          </div>
          <div class="all">
            <label for="date-release">Release Date :</label>
            <span name="date-release" class="date-release all-span">${film.release_date}</span>
          </div>
        </div>
      `;
      wrapper.insertAdjacentHTML("beforeend", item);
    });
  });
