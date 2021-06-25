document.querySelector(".dogs").addEventListener("change", () => {
  const div = document.querySelector(".dog-img");
  div.innerHTML = "";
  dogBreeds();
});

function dogBreeds() {
  let value = document
    .querySelector(".dogs")
    .options.item(document.querySelector(".dogs").selectedIndex)
    .text.toLowerCase();
  console.log(value);
  fetch(`https://dog.ceo/api/breed/${value}/images`)
    .then(function (dog) {
      return dog.json();
    })
    .then(function (dog) {
      console.log(dog);
      dog.message.forEach((breeds) => {
        const div = document.querySelector(".dog-img");
        let img = document.createElement("img");
        div.appendChild(img);
        let src = breeds;
        img.src = src;
        img.style = "width:100px";
        img.style = "height:100px";
      });
    })
    .catch(function (e) {
      alert("Not Result");
    });
}
