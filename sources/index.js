import { Deck } from "./librairy/entities/Deck.js";
import { Cards } from "./librairy/entities/Cards.js";
import { Game } from "./librairy/entities/Game.js";

const startGameElement = document.getElementById("btn-start");
const drawCardElement = document.getElementById("btn-draw");
const stopGameElement = document.getElementById("btn-stop");
const statusIconElements = document
  .getElementById("status-icon")
  .contentDocument.getElementsByClassName("svg-color");

const DeckObject = new Deck();
const CardObject = new Cards(DeckObject);
const GameObject = new Game(CardObject);

startGameElement.addEventListener("click", GameObject.startGame);
drawCardElement.addEventListener("click", GameObject.drawCard);
stopGameElement.addEventListener("click", GameObject.stopGame);

document.addEventListener("keypress", async (event) => {
  switch (event.key) {
    case "d":
      if (GameObject.inProgress) GameObject.drawCard();
      break;
    case "c":
      //TO DO
      break;
    case "n":
      if (GameObject.inProgress)
        // && (ability to restart after the first draw)
        GameObject.startGame();
      break;
    case "s":
      if (GameObject.inProgress) GameObject.stopGame();
      break;
  }
});

window.addEventListener("online", () => {
  statusIconElements[1].style.fill = "green";
  statusIconElements[0].style.stroke = "green";
});

window.addEventListener("offline", () => {
  statusIconElements[1].style.fill = "red";
  statusIconElements[0].style.stroke = "red";
});
