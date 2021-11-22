"use strict";
const blitz = () => {
  class Blitz {
    constructor() {
      this.blitzBlock = document.querySelector(".blitz");
      this.blitzResult = document.querySelector(".blitz-result");
      this.count = 0;
    }
    init() {
      this.createQuestions();
      this.showNavigate();
      this.showContent();
      this.startQuiz();
      this.showCount(0);
      this.showResult();
      this.updatePage();
    }
    createQuestions() {
      const getRandomInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      let arrQuestions = [
        getRandomInRange(0, 10),
        getRandomInRange(11, 21),
        getRandomInRange(22, 33),
        getRandomInRange(34, 45),
        getRandomInRange(46, 57),
        getRandomInRange(58, 69),
        getRandomInRange(70, 81),
        getRandomInRange(82, 93),
        getRandomInRange(104, 115),
        getRandomInRange(116, 127),
      ];
      localStorage.setItem("blitz", JSON.stringify(arrQuestions));
    }
    showNavigate() {
      document.addEventListener("click", (event) => {
        let target = event.target;
        if (target.classList.contains("main-wrap__other")) {
          this.blitzBlock.style.display = "flex";
          document.querySelector(".overlay-preloader").classList.remove("none");
          document.querySelector(".animate-four").classList.remove("none");
          setInterval(() => {
            document.querySelector(".animate-four").classList.add("none");
            document.querySelector(".overlay-preloader").classList.add("none");
          }, 2000);
        }
      });
    }
    showContent() {
      this.blitzBlock.insertAdjacentHTML(
        "beforeend",
        `
        <div class="taimer center">
          <input class="taimer-input" type="text" disabled/>
        </div>
        <button class="blitz-button button">На главную</button>
        <div class="blitz-game center">
          <h3 class="blitz-game__title">Эту картину написал <span class="blitz-game__span">Иван Репин</span>?</h3>
          <div class="blitz-game__image">
            <img class="blitz-game__img" src="" alt="picture">
          </div>
          <div class="blitz-game__buttons">
            <button class="blitz-game__button blitz-game__button--yes button">Да</button>
            <button class="blitz-game__button blitz-game__button--no button">Нет </button>
          </div>
        </div>
        `
      );
    }
    showResult() {
      this.blitzResult.insertAdjacentHTML(
        "beforeend",
        `
        <button class="blitz-button button">На главную</button>
        <div class="blitz-result center">
          <div class="blitz-result">
            <h3 class="blitz-result__text">Игра окончена!</h3>
            <h4 class="blitz-result__true">Правильных ответов: <input class="blitz-result__span--true" type="text" disabled /></h4>
            <h4 class="blitz-result__true">Не правильных ответов: <input class="blitz-result__span--false" type="text" disabled /></h4>
          </div>
        </div>
        `
      );
    }
    async startQuiz() {
      try {
        const url = "./picture.json";
        let data = await this.fetchData(url);
        localStorage.setItem("all", JSON.stringify(data));
        document.querySelector(".main-wrap__other").addEventListener("click", () => {
          this.showGame();
        });
      } catch (error) {
        alert(error);
      }
    }
    async fetchData(url) {
      const response = await fetch(url);
      const result = await response.json();

      return result;
    }
    showGame() {
      let timer = localStorage.getItem("timer") ? JSON.parse(localStorage.getItem("timer")) : [];
      let value;
      let valueTrue;
      let valueFalse;
      let countTrue = 0;
      let countFalse = 0;
      document.querySelector(".blitz-result__span--true").value = countTrue;
      document.querySelector(".blitz-result__span--false").value = countFalse;
      setInterval(() => {
        timer--;
        document.querySelector(".taimer-input").value = timer;
        if (timer === 0) {
          document.querySelector(".blitz-game").style.display = "none";
          document.querySelector(".blitz-result").style.display = "flex";
        }
      }, 1000);
      document.addEventListener("click", (event) => {
        let target = event.target;
        if (target.classList.contains("blitz-game__button--yes")) {
          if (this.count === 0) {
            document.querySelector(".taimer").style.backgroundColor = "green";
            value = document.querySelector(".taimer-input").value;
            value = +value + 2;
            valueTrue = document.querySelector(".blitz-result__span--true").value;
            valueTrue = +valueTrue + 1;
            valueTrue = document.querySelector(".blitz-result__span--true").value = valueTrue;
            document.querySelector(".taimer-input").value = value;
          } else if (this.count === 1) {
            document.querySelector(".taimer").style.backgroundColor = "red";
            valueFalse = document.querySelector(".blitz-result__span--false").value;
            valueFalse = +valueFalse + 1;
            document.querySelector(".blitz-result__span--false").value = valueFalse;
          } else if (this.count === 2) {
            document.querySelector(".taimer").style.backgroundColor = "green";
            value = document.querySelector(".taimer-input").value;
            value = +value + 2;
            valueTrue = document.querySelector(".blitz-result__span--true").value;
            valueTrue = +valueTrue + 1;
            valueTrue = document.querySelector(".blitz-result__span--true").value = valueTrue;
            document.querySelector(".taimer-input").value = value;
          } else if (this.count === 3) {
            document.querySelector(".taimer").style.backgroundColor = "red";
            valueFalse = document.querySelector(".blitz-result__span--false").value;
            valueFalse = +valueFalse + 1;
            document.querySelector(".blitz-result__span--false").value = valueFalse;
          } else if (this.count === 4) {
            document.querySelector(".taimer").style.backgroundColor = "green";
            value = document.querySelector(".taimer-input").value;
            value = +value + 2;
            valueTrue = document.querySelector(".blitz-result__span--true").value;
            valueTrue = +valueTrue + 1;
            valueTrue = document.querySelector(".blitz-result__span--true").value = valueTrue;
            document.querySelector(".taimer-input").value = value;
          } else if (this.count === 5) {
            document.querySelector(".taimer").style.backgroundColor = "red";
            valueFalse = document.querySelector(".blitz-result__span--false").value;
            valueFalse = +valueFalse + 1;
            document.querySelector(".blitz-result__span--false").value = valueFalse;
          } else if (this.count === 6) {
            document.querySelector(".taimer").style.backgroundColor = "green";
            value = document.querySelector(".taimer-input").value;
            value = +value + 2;
            valueTrue = document.querySelector(".blitz-result__span--true").value;
            valueTrue = +valueTrue + 1;
            valueTrue = document.querySelector(".blitz-result__span--true").value = valueTrue;
            document.querySelector(".taimer-input").value = value;
          } else if (this.count === 7) {
            document.querySelector(".taimer").style.backgroundColor = "red";
            valueFalse = document.querySelector(".blitz-result__span--false").value;
            valueFalse = +valueFalse + 1;
            document.querySelector(".blitz-result__span--false").value = valueFalse;
          } else if (this.count === 8) {
            document.querySelector(".taimer").style.backgroundColor = "green";
            value = document.querySelector(".taimer-input").value;
            value = +value + 2;
            valueTrue = document.querySelector(".blitz-result__span--true").value;
            valueTrue = +valueTrue + 1;
            valueTrue = document.querySelector(".blitz-result__span--true").value = valueTrue;
            document.querySelector(".taimer-input").value = value;
          } else if (this.count === 9) {
            document.querySelector(".taimer").style.backgroundColor = "red";
            valueFalse = document.querySelector(".blitz-result__span--false").value;
            valueFalse = +valueFalse + 1;
            document.querySelector(".blitz-result__span--false").value = valueFalse;
          } else if (this.count === 10) {
            document.querySelector(".blitz-game").style.display = "none";
            document.querySelector(".blitz-result").style.display = "flex";
          }
          this.count++;
          this.showCount(this.count);
        } else if (target.classList.contains("blitz-game__button--no")) {
          if (this.count === 0) {
            document.querySelector(".taimer").style.backgroundColor = "red";
            valueFalse = document.querySelector(".blitz-result__span--false").value;
            valueFalse = +valueFalse + 1;
            document.querySelector(".blitz-result__span--false").value = valueFalse;
          } else if (this.count === 1) {
            document.querySelector(".taimer").style.backgroundColor = "green";
            value = document.querySelector(".taimer-input").value;
            value = +value + 2;
            valueTrue = document.querySelector(".blitz-result__span--true").value;
            valueTrue = +valueTrue + 1;
            valueTrue = document.querySelector(".blitz-result__span--true").value = valueTrue;
            document.querySelector(".taimer-input").value = value;
          } else if (this.count === 2) {
            document.querySelector(".taimer").style.backgroundColor = "red";
            valueFalse = document.querySelector(".blitz-result__span--false").value;
            valueFalse = +valueFalse + 1;
            document.querySelector(".blitz-result__span--false").value = valueFalse;
          } else if (this.count === 3) {
            document.querySelector(".taimer").style.backgroundColor = "green";
            value = document.querySelector(".taimer-input").value;
            value = +value + 2;
            valueTrue = document.querySelector(".blitz-result__span--true").value;
            valueTrue = +valueTrue + 1;
            valueTrue = document.querySelector(".blitz-result__span--true").value = valueTrue;
            document.querySelector(".taimer-input").value = value;
          } else if (this.count === 4) {
            document.querySelector(".taimer").style.backgroundColor = "red";
            valueFalse = document.querySelector(".blitz-result__span--false").value;
            valueFalse = +valueFalse + 1;
            document.querySelector(".blitz-result__span--false").value = valueFalse;
          } else if (this.count === 5) {
            document.querySelector(".taimer").style.backgroundColor = "green";
            value = document.querySelector(".taimer-input").value;
            value = +value + 2;
            valueTrue = document.querySelector(".blitz-result__span--true").value;
            valueTrue = +valueTrue + 1;
            valueTrue = document.querySelector(".blitz-result__span--true").value = valueTrue;
            document.querySelector(".taimer-input").value = value;
          } else if (this.count === 6) {
            document.querySelector(".taimer").style.backgroundColor = "red";
            valueFalse = document.querySelector(".blitz-result__span--false").value;
            valueFalse = +valueFalse + 1;
            document.querySelector(".blitz-result__span--false").value = valueFalse;
          } else if (this.count === 7) {
            document.querySelector(".taimer").style.backgroundColor = "green";
            value = document.querySelector(".taimer-input").value;
            value = +value + 2;
            valueTrue = document.querySelector(".blitz-result__span--true").value;
            valueTrue = +valueTrue + 1;
            valueTrue = document.querySelector(".blitz-result__span--true").value = valueTrue;
            document.querySelector(".taimer-input").value = value;
          } else if (this.count === 8) {
            document.querySelector(".taimer").style.backgroundColor = "red";
            valueFalse = document.querySelector(".blitz-result__span--false").value;
            valueFalse = +valueFalse + 1;
            document.querySelector(".blitz-result__span--false").value = valueFalse;
          } else if (this.count === 9) {
            document.querySelector(".taimer").style.backgroundColor = "green";
            value = document.querySelector(".taimer-input").value;
            value = +value + 2;
            valueTrue = document.querySelector(".blitz-result__span--true").value;
            valueTrue = +valueTrue + 1;
            valueTrue = document.querySelector(".blitz-result__span--true").value = valueTrue;
            document.querySelector(".taimer-input").value = value;
          } else if (this.count === 10) {
            document.querySelector(".blitz-game").style.display = "none";
            document.querySelector(".blitz-result").style.display = "flex";
          }

          this.count++;
          this.showCount(this.count);
        }
      });
    }
    showCount(count) {
      const getRandomInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      let all = localStorage.getItem("all") ? JSON.parse(localStorage.getItem("all")) : [];
      let arrBlitz = localStorage.getItem("blitz") ? JSON.parse(localStorage.getItem("blitz")) : [];

      if (count === 0) {
        document.querySelector(".blitz-game__span").innerHTML = all[arrBlitz[count]].author;
        document
          .querySelector(".blitz-game__img")
          .setAttribute(
            "src",
            `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${arrBlitz[count]}.jpg?raw=true`
          );
      } else if (count === 1) {
        document.querySelector(".blitz-game__span").innerHTML = all[getRandomInRange(120, 130)].author;
        document
          .querySelector(".blitz-game__img")
          .setAttribute(
            "src",
            `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${arrBlitz[count]}.jpg?raw=true`
          );
      } else if (count === 2) {
        document.querySelector(".blitz-game__span").innerHTML = all[arrBlitz[count]].author;
        document
          .querySelector(".blitz-game__img")
          .setAttribute(
            "src",
            `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${arrBlitz[count]}.jpg?raw=true`
          );
      } else if (count === 3) {
        document.querySelector(".blitz-game__span").innerHTML = all[getRandomInRange(131, 142)].author;
        document
          .querySelector(".blitz-game__img")
          .setAttribute(
            "src",
            `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${arrBlitz[count]}.jpg?raw=true`
          );
      } else if (count === 4) {
        document.querySelector(".blitz-game__span").innerHTML = all[arrBlitz[count]].author;
        document
          .querySelector(".blitz-game__img")
          .setAttribute(
            "src",
            `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${arrBlitz[count]}.jpg?raw=true`
          );
      } else if (count === 5) {
        document.querySelector(".blitz-game__span").innerHTML = all[getRandomInRange(143, 154)].author;
        document
          .querySelector(".blitz-game__img")
          .setAttribute(
            "src",
            `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${arrBlitz[count]}.jpg?raw=true`
          );
      } else if (count === 6) {
        document.querySelector(".blitz-game__span").innerHTML = all[arrBlitz[count]].author;
        document
          .querySelector(".blitz-game__img")
          .setAttribute(
            "src",
            `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${arrBlitz[count]}.jpg?raw=true`
          );
      } else if (count === 7) {
        document.querySelector(".blitz-game__span").innerHTML = all[getRandomInRange(155, 166)].author;
        document
          .querySelector(".blitz-game__img")
          .setAttribute(
            "src",
            `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${arrBlitz[count]}.jpg?raw=true`
          );
      } else if (count === 8) {
        document.querySelector(".blitz-game__span").innerHTML = all[arrBlitz[count]].author;
        document
          .querySelector(".blitz-game__img")
          .setAttribute(
            "src",
            `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${arrBlitz[count]}.jpg?raw=true`
          );
      } else if (count === 9) {
        document.querySelector(".blitz-game__span").innerHTML = all[getRandomInRange(167, 178)].author;
        document
          .querySelector(".blitz-game__img")
          .setAttribute(
            "src",
            `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${arrBlitz[count]}.jpg?raw=true`
          );
      }
    }
    updatePage() {
      document.querySelectorAll(".blitz-button").forEach((item) => {
        item.addEventListener("click", () => {
          window.location.reload();
        });
      });
    }
  }
  const main = new Blitz();
  main.init();
};
export default blitz;
