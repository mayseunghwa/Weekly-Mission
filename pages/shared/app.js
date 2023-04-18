import Footer from "/components/Footer.js";
import Header from "/components/Header.js";
import Search from "/components/Search.js";
import Card from "/components/Card.js";
import { getElem } from "/hooks/getElement.js";

(function () {
  const cardContainer = getElem(document, "main .contents .card-container");
  const cardContainerInner = getElem(cardContainer, ".inner");

  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      for (let i = 0; i < 9; i++) {
        cardContainerInner.append(new Card(i + 1));
      }
    });
  };
  init();
})();
