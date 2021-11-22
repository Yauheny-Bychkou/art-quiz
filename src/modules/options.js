"use strict";
const options = () => {
  class Options {
    constructor() {
      this.range = document.querySelector(".options-wrap__range");
      this.button = document.querySelector(".options-wrap__btn");
      this.buttonRepeat = document.querySelector(".options-wrap__btn--repeat");
      this.select = document.querySelector(".options-wrap__select");
    }
    init() {
      let gameTimer;
      let gameTime = localStorage.getItem("gameTime") ? JSON.parse(localStorage.getItem("gameTime")) : [];
      let timer = localStorage.getItem("gameTimer") ? JSON.parse(localStorage.getItem("gameTimer")) : [];
      let gameSelect = localStorage.getItem("gameSelect") ? JSON.parse(localStorage.getItem("gameSelect")) : [];
      if (gameSelect === "0") {
        this.select.value = "0";
      } else if (gameSelect === "5") {
        this.select.value = "5";
      } else if (gameSelect === "10") {
        this.select.value = "10";
      } else if (gameSelect === "15") {
        this.select.value = "15";
      } else if (gameSelect === "20") {
        this.select.value = "20";
      } else if (gameSelect === "25") {
        this.select.value = "25";
      } else if (gameSelect === "30") {
        this.select.value = "30";
      }
      if (gameTime === []) {
        this.range.value = 0;
      } else if (gameTime !== []) {
        this.range.value = gameTime;
      }
      if (timer === "off") {
        this.button.classList.add("none");
        this.buttonRepeat.classList.remove("none");
        this.select.classList.remove("none");
      } else if (timer === "on") {
        this.button.classList.remove("none");
        this.buttonRepeat.classList.add("none");
        this.select.classList.add("none");
      }
      this.range.addEventListener("input", () => {
        localStorage.setItem("gameTime", JSON.stringify(this.range.value));
      });
      document.addEventListener("click", (event) => {
        let target = event.target;
        if (target.classList.contains("options-wrap__btn")) {
          gameTimer = "off";
          localStorage.setItem("gameTimer", JSON.stringify(gameTimer));
        } else if (target.classList.contains("options-wrap__btn--repeat")) {
          gameTimer = "on";
          localStorage.setItem("gameTimer", JSON.stringify(gameTimer));
        } else if (target.classList.contains("options-wrap__svg") && this.range.value > 0) {
          this.range.value = 0;
          localStorage.setItem("gameTime", JSON.stringify(this.range.value));
        } else if (target.classList.contains("options-wrap__svg") && this.range.value === "0") {
          this.range.value = 100;
          localStorage.setItem("gameTime", JSON.stringify(this.range.value));
        }
      });
      this.button.addEventListener("click", () => {
        gameTime = "on";
      });
      this.select.addEventListener("input", () => {
        localStorage.setItem("gameSelect", JSON.stringify(this.select.value));
      });
    }
  }
  const main = new Options();
  main.init();
};
export default options;
