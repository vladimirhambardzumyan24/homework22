fetch("https://restcountries.eu/rest/v2/all")
  .then(function (countries) {
    return countries.json();
  })
  .then(function (countries) {
    countries.forEach((country) => {
      createCountries(country);
    });
  });

function createCountries(country) {
  let li = document.createElement("li");
  let countName = document.createElement("h3");
  let countPage = document.createElement("a");
  let img = document.createElement("img");
  let src = country.flag;
  let href = `https://en.wikipedia.org/wiki/${country.name}`;
  document.querySelector(".ul").appendChild(li);
  li.appendChild(countPage);
  countPage.href = href;
  countPage.appendChild(countName);
  countName.textContent = country.name;
  li.appendChild(img);
  img.src = src;
  img.style = "width:50px";
}

let search = document
  .querySelector(".count-name")
  .addEventListener("input", (item) => {
    if (item.target.value == "") {
    }
    fetch(`https://restcountries.eu/rest/v2/name/${item.target.value}`)
      .then(function (countries) {
        return countries.json();
      })
      .then(function (countries) {
        console.log(countries);
        const ul = document.querySelector(".ul");
        ul.innerHTML = "";
        countries.forEach((country) => {
          createCountries(country);
        });
      });
  });
