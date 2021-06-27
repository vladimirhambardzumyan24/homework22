fetch(
  "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
)
  .then(function (film) {
    return film.json();
  })
  .then(function (film) {
    console.log(film);
    let title = document.querySelector(".title");
    title.textContent = film.title;
    let description = document.querySelector(".description");
    description.textContent = film.description;
    let director = document.querySelector(".director");
    director.textContent = film.director;
    let producer = document.querySelector(".producer");
    producer.textContent = film.producer;
    let dateRelease = document.querySelector(".date-release");
    dateRelease.textContent = film.release_date;
  });
