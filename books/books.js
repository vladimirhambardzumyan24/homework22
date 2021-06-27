let page = 1;
document.querySelector(".search-but").addEventListener("click", () => {
  const numFound = document.querySelector(".num-found");
  const ul = document.querySelector(".title");
  const authorName = document.querySelector(".author-name");
  const firstYear = document.querySelector(".first-year");
  const subject = document.querySelector(".subject");
  thisBook(1);
  numFound.innerHTML = "";
  ul.innerHTML = "";
  authorName.innerHTML = "";
  firstYear.innerHTML = "";
  subject.innerHTML = "";
});

document.querySelector(".next-but").addEventListener("click", () => {
  const numFound = document.querySelector(".num-found");
  const ul = document.querySelector(".title");
  const authorName = document.querySelector(".author-name");
  const firstYear = document.querySelector(".first-year");
  const subject = document.querySelector(".subject");
  numFound.innerHTML = "";
  ul.innerHTML = "";
  authorName.innerHTML = "";
  firstYear.innerHTML = "";
  subject.innerHTML = "";
  thisBook(++page);
});

document.querySelector(".back-but").addEventListener("click", () => {
  const numFound = document.querySelector(".num-found");
  const ul = document.querySelector(".title");
  const authorName = document.querySelector(".author-name");
  const firstYear = document.querySelector(".first-year");
  const subject = document.querySelector(".subject");
  thisBook(--page);
  numFound.innerHTML = "";
  ul.innerHTML = "";
  authorName.innerHTML = "";
  firstYear.innerHTML = "";
  subject.innerHTML = "";
});

function thisBook(page) {
  let value = document.querySelector(".book-name").value;
  value = value.split(" ").join("+");
  console.log(value);
  fetch(`http://openlibrary.org/search.json?q=${value}&page=${page}`)
    .then(function (books) {
      return books.json();
    })
    .then(function (books) {
      console.log(books);
      var pageCount = Math.ceil(books.numFound / 100);
      let numFound = document.querySelector(".num-found");
      numFound.textContent = "Page: " + page;
      let thisPage = document.querySelector(".page");
      thisPage.textContent = "numFound: " + books.numFound;
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
