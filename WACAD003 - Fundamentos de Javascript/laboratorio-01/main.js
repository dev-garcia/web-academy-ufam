// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText =
  "Estava fazendo 34 graus lá fora, então :insertx: decidiu usar a arma de portal. Eles acabaram em :inserty:, onde :insertz:. Morty viu tudo, mas não ficou surpreso — :insertx: pesa 50 quilos, e estava um dia muito quente.";

const insertX = ["Rick", "Morty", "Sr. Meeseeks"];
const insertY = [
  "a Cidadela dos Ricks",
  "uma dimensão alternativa",
  "Blips and Chitz",
];
const insertZ = [
  "acidentalmente criou um clone",
  "causou uma fenda no espaço-tempo",
  "se transformou em um picles",
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Morty", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(136 / 6.35)} stone`;
    const temperature = `${Math.round(((94 - 32) * 5) / 9)} centigrade`;
    newStory = newStory.replaceAll("34 graus", temperature);
    newStory = newStory.replaceAll("50 quilos", weight);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
