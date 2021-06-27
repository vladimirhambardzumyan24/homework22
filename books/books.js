document.querySelector(".search-but").addEventListener("click", () => {
  const numFound = document.querySelector(".num-found");
  const ul = document.querySelector(".title");
  const authorName = document.querySelector(".author-name");
  const firstYear = document.querySelector(".first-year");
  const subject = document.querySelector(".subject");
  thisBook();
  numFound.innerHTML = "";
  ul.innerHTML = "";
  authorName.innerHTML = "";
  firstYear.innerHTML = "";
  subject.innerHTML = "";
});

function thisBook() {
  let value = document.querySelector(".book-name").value;
  value = value.split(" ").join("+");
  console.log(value);
  fetch(`http://openlibrary.org/search.json?q=${value}`)
    .then(function (books) {
      return books.json();
    })
    .then(function (books) {
      console.log(books);
      let numFound = document.querySelector(".num-found");
      numFound.textContent = "numFound: " + books.numFound;
      let ul = document.querySelector(".title");
      ul.textContent = "Title";
      books.docs.forEach((el) => {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = el.title;
      });

      let authorName = document.querySelector(".author-name");
      authorName.textContent = "Author Name";
      books.docs.forEach((el) => {
        if (el.author_name !== undefined) {
          el.author_name.forEach((element) => {
            let li = document.createElement("li");
            authorName.appendChild(li);
            li.textContent = element;
          });
        }
      });

      let firstYear = document.querySelector(".first-year");
      firstYear.textContent = "First publish year";
      books.docs.forEach((el) => {
        let li = document.createElement("li");
        firstYear.appendChild(li);
        li.textContent = el.first_publish_year;
      });

      let subjectt = document.querySelector(".subject");
      subjectt.textContent = "Subject (only first 5 items)";
      books.docs.forEach((el) => {
        if (el.subject !== undefined) {
          for (let i = 0; i < 5; i++) {
            if (el.subject[i] !== undefined) {
              let li = document.createElement("li");
              subjectt.appendChild(li);
              li.textContent = el.subject[i];
            }
          }
        }
      });
    });
}
