const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const images = [
  "caipirinha.webp",
  "crispin-glover-as-mr-world-in-american-gods.jpg",
  "RickAndMorty.jpg",
  "thanos-avengers-infinity-war.jpg",
  "the-boys-homelander.jpg",
];

/* Declaring the alternative text for each image file */
const textAltImg = {
  "caipirinha.webp": "Caipirinha",
  "crispin-glover-as-mr-world-in-american-gods.jpg":
    "Crispin Glover as Mr. World in American Gods",
  "RickAndMorty.jpg": "Rick and Morty",
  "thanos-avengers-infinity-war.jpg": "Thanos as Avengers in Infinity War",
  "the-boys-homelander.jpg": "The Boys Homelander",
};

/* Looping through images */
for (const image of images) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${image}`);
  newImage.setAttribute("alt", textAltImg[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");

  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
