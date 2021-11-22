"use strict";
import QuizPicture from "./quizPicture.js";
import QuizAuthor from "./quizAuthor.js";
const mainPage = () => {
  class Main {
    constructor() {
      this.painterBlock = document.querySelector(".painter");
      this.pictureBlock = document.querySelector(".picture");
      this.optionsBlock = document.querySelector(".options");
      this.painterType = document.querySelector(".painter-type");
      this.painterCateg = document.querySelector(".painter-wrap__categories");
      this.pictureCateg = document.querySelector(".picture-wrap__categories");
      this.painterResult = document.querySelector(".painter-result");
      this.pictureType = document.querySelector(".picture-type");
      this.pictureResult = document.querySelector(".picture-result");
      this.optionsSelect = document.querySelector(".options-wrap__select");
      this.body = document.querySelector("body");
      this.wrapPicture = document.querySelector(".picture-type__wrap");
      this.wrapPainter = document.querySelector(".painter-type__wrap");
      this.resultPicture = document.querySelector(".picture-result");
      this.resultPainter = document.querySelector(".painter-result");
    }
    init() {
      console.log(
        `Анимации: прелоадер на странице настроек,
         прелоадер на странице викторины картин,
         прелоадер на странице викторины писателей,
         прелоадер на странице блиц игры.
         Доп функционал: блиц игра на время.
         `
      );
      // localStorage.removeItem("updatePagePicture");
      // localStorage.removeItem("startQuizPainter");
      // localStorage.removeItem("startQuizPicture");
      this.showNavigate();
      // this.changeButtons();
      this.startQuiz();
      this.showPreloader();
      this.showPreloaderTwo();
      this.showPreloaderThree();
      this.showPreloaderFour();
      this.showModalPicture();
      this.showModalPainter();
      this.renderPicture();
      this.renderPainter();
      this.showResultPicture();
      this.showResultPainter();
      this.showInfoPicture();
      this.showInfoPainter();
      this.showFinallyRaundPainter();
      this.showFinallyRaundPicture();
      this.showTimerPicture();
      this.showTimerPainter();
    }
    showPreloader() {
      this.body.insertAdjacentHTML(
        "beforeend",
        ` 
        <div class="animate-one none"> 
          <div class="sk-rotating">
            <div class="sk-rotating-plane">
              <h3 class="sk-rotating-plane__text">ART QUIZ</h3>
            </div>
          </div>
        </div>
    
        <div class="overlay-preloader none"></div>
    `
      );
    }
    showPreloaderTwo() {
      this.body.insertAdjacentHTML(
        "beforeend",
        `<div class="animate-two none">
           <div class="sk-double-bounce-one">
            <div class="sk-child-one sk-double-bounce-1">
              <h3 class="sk-double-bounce-1__text">ART QUIZ</h3>
            </div>
            <div class="sk-child-one sk-double-bounce-2">
              <h3 class="sk-double-bounce-1__text">ART QUIZ</h3>
            </div>
          </div>
        </div>
       
      `
      );
    }
    showPreloaderThree() {
      this.body.insertAdjacentHTML(
        "beforeend",
        `<div class="animate-three none">
           <div class="sk-chasing-dots">
              <div class="sk-child sk-dot-1">
                <h3 class="sk-child__text">ART QUIZ</h3>
              </div>
              <div class="sk-child sk-dot-2">
                <h3 class="sk-child__text">ART QUIZ</h3>
              </div>
          </div>
        </div>
       
      `
      );
    }
    showPreloaderFour() {
      this.body.insertAdjacentHTML(
        "beforeend",
        `<div class="animate-four none">
           <div class="sk-wandering-cubes">
            <div class="sk-cube sk-cube-1"></div>
            <div class="sk-cube sk-cube-2"></div>
          </div>
        </div>
      `
      );
    }
    showModalPicture() {
      this.body.insertAdjacentHTML(
        "beforeend",
        `<div class="picture-modal">
        <img class="picture-modal__circle" src="" alt="circle">
        <div class="picture-modal__wrap">
          <img class="picture-modal__image" src="" alt="picture">
        </div>
        <h3 class="picture-modal__name"></h3>
        <h4 class="picture-modal__author"></h4>
        <h4 class="picture-modal__year"></h4>
        <button class="picture-modal__button button"></button>
        <button class="picture-modal__result button"></button>
      </div>
      <div class="overlay none"></div>
      `
      );
    }
    showModalPainter() {
      this.body.insertAdjacentHTML(
        "beforeend",
        `<div class="painter-modal">
        <img class="painter-modal__circle" src="" alt="circle">
        <div class="painter-modal__wrap">
          <img class="painter-modal__image" src="" alt="picture">
        </div>
        <h3 class="painter-modal__name"></h3>
        <h4 class="painter-modal__author"></h4>
        <h4 class="painter-modal__year"></h4>
        <button class="painter-modal__button button"></button>
        <button class="painter-modal__result button"></button>
      </div>
      <div class="overlay none"></div>
      `
      );
    }
    renderPicture() {
      this.wrapPicture.insertAdjacentHTML(
        "beforeend",
        `<div class="game-picture">
          <h3 class="game-picture__title">Кто автор этой картины?</h3>
        <div class="game-picture__timer none">
          <input class="game-picture__time" type="text" disabled value="25">
        </div>
        <img class="game-picture__img" src="" alt="picture">
        <div class="game-picture__dots">
          <div class="game-picture__dot"></div>
          <div class="game-picture__dot"></div>
          <div class="game-picture__dot"></div>
          <div class="game-picture__dot"></div>
          <div class="game-picture__dot"></div>
          <div class="game-picture__dot"></div>
          <div class="game-picture__dot"></div>
          <div class="game-picture__dot"></div>
          <div class="game-picture__dot"></div>
          <div class="game-picture__dot"></div>
        </div>
        <div class="game-picture__answers">
          <div class="game-picture__top">
             <button class="game-picture__answer game-picture__answer--4"></button>
             <button class="game-picture__answer game-picture__answer--1"></button>
          </div>
          <div class="game-picture__bottom">
            <button class="game-picture__answer game-picture__answer--2"></button>
            <button class="game-picture__answer game-picture__answer--3"></button>
          </div>
        </div>
      </div>`
      );
    }
    renderPainter() {
      this.wrapPainter.insertAdjacentHTML(
        "beforeend",
        `<div class="game-painter">
        <div class="game-painter__timer none">
          <input class="game-painter__time" type="text" disabled value="25">
        </div>
        <h3 class="game-painter__title">Какую из картин написал <span class="game-painter__author">Name</span>?</h3>
        <div class="game-painter__dots">
          <div class="game-painter__dot"></div>
          <div class="game-painter__dot"></div>
          <div class="game-painter__dot"></div>
          <div class="game-painter__dot"></div>
          <div class="game-painter__dot"></div>
          <div class="game-painter__dot"></div>
          <div class="game-painter__dot"></div>
          <div class="game-painter__dot"></div>
          <div class="game-painter__dot"></div>
          <div class="game-painter__dot"></div>
        </div>
        <div class="game-painter__answers">
          <div class="game-painter__top">
             <img class="game-painter__answer game-painter__answer--4" src="" alt="picture">
             <img class="game-painter__answer game-painter__answer--1" src="" alt="picture">
          </div>
          <div class="game-painter__bottom">
             <img class="game-painter__answer game-painter__answer--2" src="" alt="picture">
             <img class="game-painter__answer game-painter__answer--3" src="" alt="picture">
          </div>
        </div>
      </div>`
      );
    }
    showResultPicture() {
      this.resultPicture.insertAdjacentHTML(
        "beforeend",
        `
      
    <div class="picture-result__cards"> 

      <div class="picture-result__type"></div>

      <div class="picture-result__cont">
        <div class="picture-result__card">
          <div class="picture-result__overlay picture-result__overlay--one"></div>
          <img class="picture-result__img picture-result__img--one" src="" alt="picture">
        </div>
        <div class="picture-result__card">
          <div class="picture-result__overlay picture-result__overlay--two"></div>
          <img class="picture-result__img picture-result__img--two" src="" alt="picture">
        </div>
        <div class="picture-result__card">
          <div class="picture-result__overlay picture-result__overlay--three"></div>
          <img class="picture-result__img picture-result__img--three" src="" alt="picture">
        </div>
      </div>


      <div class="picture-result__cont">
        <div class="picture-result__card">
          <div class="picture-result__overlay picture-result__overlay--four"></div>
          <img class="picture-result__img picture-result__img--four" src="" alt="picture">
        </div>
        <div class="picture-result__card">
          <div class="picture-result__overlay picture-result__overlay--five"></div>
          <img class="picture-result__img picture-result__img--five" src="" alt="picture">
        </div>
        <div class="picture-result__card">
          <div class="picture-result__overlay picture-result__overlay--six"></div>
          <img class="picture-result__img picture-result__img--six" src="" alt="picture">
        </div>
      </div>
      <div class="picture-result__cont">
        <div class="picture-result__card">
          <div class="picture-result__overlay picture-result__overlay--seven"></div>
          <img class="picture-result__img picture-result__img--seven" src="" alt="picture">
        </div>
        <div class="picture-result__card">
          <div class="picture-result__overlay picture-result__overlay--eight"></div>
          <img class="picture-result__img picture-result__img--eight" src="" alt="picture">
        </div>
        <div class="picture-result__card">
          <div class="picture-result__overlay picture-result__overlay--nine"></div>
          <img class="picture-result__img picture-result__img--nine" src="" alt="picture">
        </div>
      </div>
      <div class="picture-result__cont">
        <div class="picture-result__card">
          <div class="picture-result__overlay picture-result__overlay--ten"></div>
          <img class="picture-result__img picture-result__img--ten" src="" alt="picture">
        </div>
      </div>
    </div>
    `
      );
    }
    showResultPainter() {
      this.resultPainter.insertAdjacentHTML(
        "beforeend",
        `
      
    <div class="painter-result__cards"> 

      <div class="painter-result__type"></div>

      <div class="painter-result__cont">
        <div class="painter-result__card">
          <div class="painter-result__overlay painter-result__overlay--one"></div>
          <img class="painter-result__img painter-result__img--one" src="" alt="picture">
        </div>
        <div class="painter-result__card">
          <div class="painter-result__overlay painter-result__overlay--two"></div>
          <img class="painter-result__img painter-result__img--two" src="" alt="picture">
        </div>
        <div class="painter-result__card">
          <div class="painter-result__overlay painter-result__overlay--three"></div>
          <img class="painter-result__img painter-result__img--three" src="" alt="picture">
        </div>
      </div>
      <div class="painter-result__cont">
        <div class="painter-result__card">
          <div class="painter-result__overlay painter-result__overlay--four"></div>
          <img class="painter-result__img painter-result__img--four" src="" alt="picture">
        </div>
        <div class="painter-result__card">
          <div class="painter-result__overlay painter-result__overlay--five"></div>
          <img class="painter-result__img painter-result__img--five" src="" alt="picture">
        </div>
        <div class="painter-result__card">
          <div class="painter-result__overlay painter-result__overlay--six"></div>
          <img class="painter-result__img painter-result__img--six" src="" alt="picture">
        </div>
      </div>
      <div class="painter-result__cont">
        <div class="painter-result__card">
          <div class="painter-result__overlay painter-result__overlay--seven"></div>
          <img class="painter-result__img painter-result__img--seven" src="" alt="picture">
        </div>
        <div class="painter-result__card">
          <div class="painter-result__overlay painter-result__overlay--eight"></div>
          <img class="painter-result__img painter-result__img--eight" src="" alt="picture">
        </div>
        <div class="painter-result__card">
          <div class="painter-result__overlay painter-result__overlay--nine"></div>
          <img class="painter-result__img painter-result__img--nine" src="" alt="picture">
        </div>
      </div>
      <div class="painter-result__cont">
        <div class="painter-result__card">
          <div class="painter-result__overlay painter-result__overlay--ten"></div>
          <img class="painter-result__img painter-result__img--ten" src="" alt="picture">
        </div>
      </div>
    </div>
    `
      );
    }
    showInfoPicture() {
      this.body.insertAdjacentHTML(
        "beforeend",
        `<div class="picture-info">
        <div class="picture-info__wrap">
          <img class="picture-info__image" src="" alt="picture">
        </div>
        <h3 class="picture-info__name"></h3>
        <h4 class="picture-info__author"></h4>
        <h4 class="picture-info__year"></h4>
        <button class="picture-info__button button">Закрыть</button>
      </div>
      `
      );
    }
    showInfoPainter() {
      this.body.insertAdjacentHTML(
        "beforeend",
        `<div class="painter-info">
        <div class="painter-info__wrap">
          <img class="painter-info__image" src="" alt="picture">
        </div>
        <h3 class="painter-info__name"></h3>
        <h4 class="painter-info__author"></h4>
        <h4 class="painter-info__year"></h4>
        <button class="painter-info__button button">Закрыть</button>
      </div>
      `
      );
    }
    showFinallyRaundPainter() {
      this.body.insertAdjacentHTML(
        "beforeend",
        `<div class="painter-final">
        <div class="painter-final__wrap">
          <img class="painter-final__image" src="img/final.svg" alt="Congratulations">
        </div>
        <h3 class="painter-final__title">Поздравляем!</h3>
        <h3 class="painter-info__counter">0/10</h3>
        <button class="painter-final__button button">Результат</button>
        <button class="painter-result__main button">Категории</button>
      </div>
      `
      );
    }
    showFinallyRaundPicture() {
      this.body.insertAdjacentHTML(
        "beforeend",
        `<div class="picture-final">
        <div class="picture-final__wrap">
          <img class="picture-final__image" src="img/final.svg" alt="Congratulations">
        </div>
        <h3 class="picture-info__title">Поздравляем!</h3>
        <h3 class="picture-final__counter">0/10</h3>
        <button class="picture-final__button button">Результат</button>
        <button class="picture-result__main button">Категории</button>
      </div>
      `
      );
    }
    showNavigate() {
      document.addEventListener("click", (event) => {
        let target = event.target;
        if (target.classList.contains("main-wrap__painter")) {
          document.querySelector(".main-wrap__painter").style.display = "none";
          document.querySelector(".main-wrap__painter--repeat").style.display = "initial";
          this.painterBlock.style.display = "flex";
        } else if (target.classList.contains("main-wrap__painter--repeat")) {
          this.painterBlock.style.display = "flex";
        } else if (target.classList.contains("painer-wrap__close")) {
          this.painterBlock.style.display = "none";
        } else if (target.classList.contains("main-wrap__picture")) {
          document.querySelector(".main-wrap__picture").style.display = "none";
          document.querySelector(".main-wrap__picture--repeat").style.display = "initial";
          this.pictureBlock.style.display = "flex";
        } else if (target.classList.contains("main-wrap__picture--repeat")) {
          this.pictureBlock.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__close")) {
          this.pictureBlock.style.display = "none";
        } else if (target.classList.contains("main-wrap__options")) {
          this.optionsBlock.style.display = "flex";
          document.querySelector(".overlay-preloader").classList.remove("none");
          document.querySelector(".animate-three").classList.remove("none");
          setInterval(() => {
            document.querySelector(".animate-three").classList.add("none");
            document.querySelector(".overlay-preloader").classList.add("none");
          }, 2000);
        } else if (target.classList.contains("options-wrap__close")) {
          this.optionsBlock.style.display = "none";
        } else if (target.classList.contains("options-wrap__btn") && this.optionsSelect.classList.contains("none")) {
          document.querySelector(".options-wrap__btn").classList.add("none");
          document.querySelector(".options-wrap__btn--repeat").classList.remove("none");
          this.optionsSelect.classList.remove("none");
        } else if (
          target.classList.contains("options-wrap__btn--repeat") &&
          !this.optionsSelect.classList.contains("none")
        ) {
          document.querySelector(".options-wrap__btn").classList.remove("none");
          document.querySelector(".options-wrap__btn--repeat").classList.add("none");
          this.optionsSelect.classList.add("none");
        } else if (target.classList.contains("painter-wrap__one")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__two")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__three")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__four")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__five")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__six")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__seven")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__eight")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__nine")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__ten")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__eleven")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__twelve")) {
          this.painterCateg.style.display = "none";
          this.painterType.style.display = "flex";
        } else if (target.classList.contains("painter-wrap__close")) {
          this.painterBlock.style.display = "none";
        } else if (target.classList.contains("picture-wrap__one")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__two")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__three")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__four")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__five")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__six")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__seven")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__eight")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__nine")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__ten")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__eleven")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        } else if (target.classList.contains("picture-wrap__twelve")) {
          this.pictureCateg.style.display = "none";
          this.pictureType.style.display = "flex";
        }
      });
    }

    async startQuiz() {
      try {
        const url = "./picture.json";
        let data = await this.fetchData(url);
        this.updatePagePicture(data);
        this.updatePagePainter(data);
      } catch (error) {
        alert(error);
      }
    }
    async fetchData(url) {
      const response = await fetch(url);
      const result = await response.json();

      return result;
    }
    updatePagePainter(data) {
      let typePaintOne = localStorage.getItem("typeOneAuthor") ? JSON.parse(localStorage.getItem("typeOneAuthor")) : [];

      let typePaintTwo = localStorage.getItem("typeTwoAuthor") ? JSON.parse(localStorage.getItem("typeTwoAuthor")) : [];
      let typePaintThree = localStorage.getItem("typeThreeAuthor")
        ? JSON.parse(localStorage.getItem("typeThreeAuthor"))
        : [];
      let typePaintFour = localStorage.getItem("typeFourAuthor")
        ? JSON.parse(localStorage.getItem("typeFourAuthor"))
        : [];
      let typePaintFive = localStorage.getItem("typeFiveAuthor")
        ? JSON.parse(localStorage.getItem("typeFiveAuthor"))
        : [];
      let typePaintSix = localStorage.getItem("typeSixAuthor") ? JSON.parse(localStorage.getItem("typeSixAuthor")) : [];
      let typePaintSeven = localStorage.getItem("typeSevenAuthor")
        ? JSON.parse(localStorage.getItem("typeSevenAuthor"))
        : [];
      let typePaintEight = localStorage.getItem("typeEightAuthor")
        ? JSON.parse(localStorage.getItem("typeEightAuthor"))
        : [];
      let typePaintNine = localStorage.getItem("typeNineAuthor")
        ? JSON.parse(localStorage.getItem("typeNineAuthor"))
        : [];
      let typePaintTen = localStorage.getItem("typeTenAuthor") ? JSON.parse(localStorage.getItem("typeTenAuthor")) : [];
      let typePaintEleven = localStorage.getItem("typeElevenAuthor")
        ? JSON.parse(localStorage.getItem("typeElevenAuthor"))
        : [];
      let typePaintTwelve = localStorage.getItem("typeTwelveAuthor")
        ? JSON.parse(localStorage.getItem("typeTwelveAuthor"))
        : [];
      let trueSpanOneAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let trueSpanTwoAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let trueSpanThreeAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let trueSpanFourAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let trueSpanFiveAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let trueSpanSixAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let trueSpanSevenAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let trueSpanEightAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let trueSpanNineAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let trueSpanTenAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let trueSpanElevenAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let trueSpanTwelveAuthor = localStorage.getItem("trueSpanOneAuthor")
        ? JSON.parse(localStorage.getItem("trueSpanOneAuthor"))
        : [];
      let arr = [
        typePaintOne,
        typePaintTwo,
        typePaintThree,
        typePaintFour,
        typePaintFive,
        typePaintSix,
        typePaintSeven,
        typePaintEight,
        typePaintNine,
        typePaintTen,
        typePaintEleven,
        typePaintTwelve,
      ];
      let restartRaundOnePainter = localStorage.getItem("restartRaundOnePainter")
        ? JSON.parse(localStorage.getItem("restartRaundOnePainter"))
        : [];
      let restartRaundTwoPainter = localStorage.getItem("restartRaundTwoPainter")
        ? JSON.parse(localStorage.getItem("restartRaundTwoPainter"))
        : [];
      let restartRaundThreePainter = localStorage.getItem("restartRaundThreePainter")
        ? JSON.parse(localStorage.getItem("restartRaundThreePainter"))
        : [];
      let restartRaundFourPainter = localStorage.getItem("restartRaundFourPainter")
        ? JSON.parse(localStorage.getItem("restartRaundFourPainter"))
        : [];
      let restartRaundFivePainter = localStorage.getItem("restartRaundFivePainter")
        ? JSON.parse(localStorage.getItem("restartRaundFivePainter"))
        : [];
      let restartRaundSixPainter = localStorage.getItem("restartRaundSixPainter")
        ? JSON.parse(localStorage.getItem("restartRaundSixPainter"))
        : [];
      let restartRaundSevenPainter = localStorage.getItem("restartRaundSevenPainter")
        ? JSON.parse(localStorage.getItem("restartRaundSevenPainter"))
        : [];
      let restartRaundEightPainter = localStorage.getItem("restartRaundEightPainter")
        ? JSON.parse(localStorage.getItem("restartRaundEightPainter"))
        : [];
      let restartRaundNinePainter = localStorage.getItem("restartRaundNinePainter")
        ? JSON.parse(localStorage.getItem("restartRaundNinePainter"))
        : [];
      let restartRaundTenPainter = localStorage.getItem("restartRaundTenPainter")
        ? JSON.parse(localStorage.getItem("restartRaundTenPainter"))
        : [];
      let restartRaundElevenPainter = localStorage.getItem("restartRaundElevenPainter")
        ? JSON.parse(localStorage.getItem("restartRaundElevenPainter"))
        : [];
      let restartRaundTwelvePainter = localStorage.getItem("restartRaundTwelvePainter")
        ? JSON.parse(localStorage.getItem("restartRaundTwelvePainter"))
        : [];
      let updPage = localStorage.getItem("updatePagePainter")
        ? JSON.parse(localStorage.getItem("updatePagePainter"))
        : [];
      if (updPage === "on") {
        this.painterBlock.style.display = "flex";
        const quizPicture = new QuizAuthor(data, arr);
        quizPicture.init();
      }
      if (restartRaundOnePainter === "on") {
        document.querySelector(".painter-wrap__span--one").classList.remove("none");
        document.querySelector(".painter-wrap__one").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__one").style.border = "1px solid red";
        document.querySelector(".painter-wrap__one").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--one").classList.remove("none");
        document.querySelector(".painter-wrap__span--one").innerHTML = `${trueSpanOneAuthor}/10`;
      }
      if (restartRaundTwoPainter === "on") {
        document.querySelector(".painter-wrap__span--two").classList.remove("none");
        document.querySelector(".painter-wrap__two").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__two").style.border = "1px solid red";
        document.querySelector(".painter-wrap__two").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--two").classList.remove("none");
        document.querySelector(".painter-wrap__span--two").innerHTML = `${trueSpanTwoAuthor}/10`;
      }
      if (restartRaundThreePainter === "on") {
        document.querySelector(".painter-wrap__span--three").classList.remove("none");
        document.querySelector(".painter-wrap__three").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__three").style.border = "1px solid red";
        document.querySelector(".painter-wrap__three").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--three").classList.remove("none");
        document.querySelector(".painter-wrap__span--three").innerHTML = `${trueSpanThreeAuthor}/10`;
      }
      if (restartRaundFourPainter === "on") {
        document.querySelector(".painter-wrap__span--four").classList.remove("none");
        document.querySelector(".painter-wrap__four").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__four").style.border = "1px solid red";
        document.querySelector(".painter-wrap__four").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--four").classList.remove("none");
        document.querySelector(".painter-wrap__span--four").innerHTML = `${trueSpanFourAuthor}/10`;
      }
      if (restartRaundFivePainter === "on") {
        document.querySelector(".painter-wrap__span--five").classList.remove("none");
        document.querySelector(".painter-wrap__five").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__five").style.border = "1px solid red";
        document.querySelector(".painter-wrap__five").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--five").classList.remove("none");
        document.querySelector(".painter-wrap__span--five").innerHTML = `${trueSpanFiveAuthor}/10`;
      }
      if (restartRaundSixPainter === "on") {
        document.querySelector(".painter-wrap__span--six").classList.remove("none");
        document.querySelector(".painter-wrap__six").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__six").style.border = "1px solid red";
        document.querySelector(".painter-wrap__six").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--six").classList.remove("none");
        document.querySelector(".painter-wrap__span--six").innerHTML = `${trueSpanSixAuthor}/10`;
      }
      if (restartRaundSevenPainter === "on") {
        document.querySelector(".painter-wrap__span--seven").classList.remove("none");
        document.querySelector(".painter-wrap__seven").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__seven").style.border = "1px solid red";
        document.querySelector(".painter-wrap__seven").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--seven").classList.remove("none");
        document.querySelector(".painter-wrap__span--seven").innerHTML = `${trueSpanSevenAuthor}/10`;
      }
      if (restartRaundEightPainter === "on") {
        document.querySelector(".painter-wrap__span--eight").classList.remove("none");
        document.querySelector(".painter-wrap__eight").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__eight").style.border = "1px solid red";
        document.querySelector(".painter-wrap__eight").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--eight").classList.remove("none");
        document.querySelector(".painter-wrap__span--eight").innerHTML = `${trueSpanEightAuthor}/10`;
      }
      if (restartRaundNinePainter === "on") {
        document.querySelector(".painter-wrap__span--nine").classList.remove("none");
        document.querySelector(".painter-wrap__nine").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__nine").style.border = "1px solid red";
        document.querySelector(".painter-wrap__nine").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--nine").classList.remove("none");
        document.querySelector(".painter-wrap__span--nine").innerHTML = `${trueSpanNineAuthor}/10`;
      }
      if (restartRaundTenPainter === "on") {
        document.querySelector(".painter-wrap__span--ten").classList.remove("none");
        document.querySelector(".painter-wrap__ten").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__ten").style.border = "1px solid red";
        document.querySelector(".painter-wrap__ten").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--ten").classList.remove("none");
        document.querySelector(".painter-wrap__span-ten").innerHTML = `${trueSpanTenAuthor}/10`;
      }
      if (restartRaundElevenPainter === "on") {
        document.querySelector(".painter-wrap__span--eleven").classList.remove("none");
        document.querySelector(".painter-wrap__eleven").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__eleven").style.border = "1px solid red";
        document.querySelector(".painter-wrap__eleven").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--eleven").classList.remove("none");
        document.querySelector(".painter-wrap__span--eleven").innerHTML = `${trueSpanElevenAuthor}/10`;
      }
      if (restartRaundTwelvePainter === "on") {
        document.querySelector(".painter-wrap__span--twelve").classList.remove("none");
        document.querySelector(".painter-wrap__twelve").style.backgroundColor = "#C0C0C0";
        document.querySelector(".painter-wrap__twelve").style.border = "1px solid red";
        document.querySelector(".painter-wrap__twelve").style.color = "yellow";
        document.querySelector(".painter-wrap__btn--twelve").classList.remove("none");
        document.querySelector(".painter-wrap__span--twelve").innerHTML = `${trueSpanTwelveAuthor}/10`;
      }
    }
    updatePagePicture(data) {
      let typePictOne = localStorage.getItem("typeOnePicture")
        ? JSON.parse(localStorage.getItem("typeOnePicture"))
        : [];

      let typePictTwo = localStorage.getItem("typeTwoPicture")
        ? JSON.parse(localStorage.getItem("typeTwoPicture"))
        : [];
      let typePictThree = localStorage.getItem("typeThreePicture")
        ? JSON.parse(localStorage.getItem("typeThreePicture"))
        : [];
      let typePictFour = localStorage.getItem("typeFourPicture")
        ? JSON.parse(localStorage.getItem("typeFourPicture"))
        : [];
      let typePictFive = localStorage.getItem("typeFivePicture")
        ? JSON.parse(localStorage.getItem("typeFivePicture"))
        : [];
      let typePictSix = localStorage.getItem("typeSixPicture")
        ? JSON.parse(localStorage.getItem("typeSixPicture"))
        : [];
      let typePictSeven = localStorage.getItem("typeSevenPicture")
        ? JSON.parse(localStorage.getItem("typeSevenPicture"))
        : [];
      let typePictEight = localStorage.getItem("typeEightPicture")
        ? JSON.parse(localStorage.getItem("typeEightPicture"))
        : [];
      let typePictNine = localStorage.getItem("typeNinePicture")
        ? JSON.parse(localStorage.getItem("typeNinePicture"))
        : [];
      let typePictTen = localStorage.getItem("typeTenPicture")
        ? JSON.parse(localStorage.getItem("typeTenPicture"))
        : [];
      let typePictEleven = localStorage.getItem("typeElevenPicture")
        ? JSON.parse(localStorage.getItem("typeElevenPicture"))
        : [];
      let typePictTwelve = localStorage.getItem("typeTwelvePicture")
        ? JSON.parse(localStorage.getItem("typeTwelvePicture"))
        : [];

      let arrPict = [
        typePictOne,
        typePictTwo,
        typePictThree,
        typePictFour,
        typePictFive,
        typePictSix,
        typePictSeven,
        typePictEight,
        typePictNine,
        typePictTen,
        typePictEleven,
        typePictTwelve,
      ];
      let restartRaundOnePicture = localStorage.getItem("restartRaundOnePicture")
        ? JSON.parse(localStorage.getItem("restartRaundOnePicture"))
        : [];
      let restartRaundTwoPicture = localStorage.getItem("restartRaundTwoPicture")
        ? JSON.parse(localStorage.getItem("restartRaundTwoPicture"))
        : [];
      let restartRaundThreePicture = localStorage.getItem("restartRaundThreePicture")
        ? JSON.parse(localStorage.getItem("restartRaundThreePicture"))
        : [];
      let restartRaundFourPicture = localStorage.getItem("restartRaundFourPicture")
        ? JSON.parse(localStorage.getItem("restartRaundFourPicture"))
        : [];
      let restartRaundFivePicture = localStorage.getItem("restartRaundFivePicture")
        ? JSON.parse(localStorage.getItem("restartRaundFivePicture"))
        : [];
      let restartRaundSixPicture = localStorage.getItem("restartRaundSixPicture")
        ? JSON.parse(localStorage.getItem("restartRaundSixPicture"))
        : [];
      let restartRaundSevenPicture = localStorage.getItem("restartRaundSevenPicture")
        ? JSON.parse(localStorage.getItem("restartRaundSevenPicture"))
        : [];
      let restartRaundEightPicture = localStorage.getItem("restartRaundEightPicture")
        ? JSON.parse(localStorage.getItem("restartRaundEightPicture"))
        : [];
      let restartRaundNinePicture = localStorage.getItem("restartRaundNinePicture")
        ? JSON.parse(localStorage.getItem("restartRaundNinePicture"))
        : [];
      let restartRaundTenPicture = localStorage.getItem("restartRaundTenPicture")
        ? JSON.parse(localStorage.getItem("restartRaundTenPicture"))
        : [];
      let restartRaundElevenPicture = localStorage.getItem("restartRaundElevenPicture")
        ? JSON.parse(localStorage.getItem("restartRaundElevenPicture"))
        : [];
      let restartRaundTwelvePicture = localStorage.getItem("restartRaundTwelvePicture")
        ? JSON.parse(localStorage.getItem("restartRaundTwelvePicture"))
        : [];
      let updPage = localStorage.getItem("updatePagePicture")
        ? JSON.parse(localStorage.getItem("updatePagePicture"))
        : [];
      if (updPage === "on") {
        this.pictureBlock.style.display = "flex";
        const quizPicture = new QuizAuthor(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundOnePicture === "on") {
        document.querySelector(".picture-wrap__span--one").classList.remove("none");
        document.querySelector(".picture-wrap__one").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__one").style.border = "1px solid red";
        document.querySelector(".picture-wrap__one").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--one").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundTwoPicture === "on") {
        document.querySelector(".picture-wrap__span--two").classList.remove("none");
        document.querySelector(".picture-wrap__two").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__two").style.border = "1px solid red";
        document.querySelector(".picture-wrap__two").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--two").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundThreePicture === "on") {
        document.querySelector(".picture-wrap__span--three").classList.remove("none");
        document.querySelector(".picture-wrap__three").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__three").style.border = "1px solid red";
        document.querySelector(".picture-wrap__three").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--three").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundFourPicture === "on") {
        document.querySelector(".picture-wrap__span--four").classList.remove("none");
        document.querySelector(".picture-wrap__four").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__four").style.border = "1px solid red";
        document.querySelector(".picture-wrap__four").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--four").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundFivePicture === "on") {
        document.querySelector(".picture-wrap__span--five").classList.remove("none");
        document.querySelector(".picture-wrap__five").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__five").style.border = "1px solid red";
        document.querySelector(".picture-wrap__five").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--five").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundSixPicture === "on") {
        document.querySelector(".picture-wrap__span--six").classList.remove("none");
        document.querySelector(".picture-wrap__six").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__six").style.border = "1px solid red";
        document.querySelector(".picture-wrap__six").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--six").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundSevenPicture === "on") {
        document.querySelector(".picture-wrap__span--seven").classList.remove("none");
        document.querySelector(".picture-wrap__seven").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__seven").style.border = "1px solid red";
        document.querySelector(".picture-wrap__seven").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--seven").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundEightPicture === "on") {
        document.querySelector(".picture-wrap__span--eight").classList.remove("none");
        document.querySelector(".picture-wrap__eight").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__eight").style.border = "1px solid red";
        document.querySelector(".picture-wrap__eight").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--eight").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundNinePicture === "on") {
        document.querySelector(".picture-wrap__span--nine").classList.remove("none");
        document.querySelector(".picture-wrap__nine").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__nine").style.border = "1px solid red";
        document.querySelector(".picture-wrap__nine").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--nine").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundTenPicture === "on") {
        document.querySelector(".picture-wrap__span--ten").classList.remove("none");
        document.querySelector(".picture-wrap__ten").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__ten").style.border = "1px solid red";
        document.querySelector(".picture-wrap__ten").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--ten").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundElevenPicture === "on") {
        document.querySelector(".picture-wrap__span--eleven").classList.remove("none");
        document.querySelector(".picture-wrap__eleven").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__eleven").style.border = "1px solid red";
        document.querySelector(".picture-wrap__eleven").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--eleven").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
      if (restartRaundTwelvePicture === "on") {
        document.querySelector(".picture-wrap__span--twelve").classList.remove("none");
        document.querySelector(".picture-wrap__twelve").style.backgroundColor = "#C0C0C0";
        document.querySelector(".picture-wrap__twelve").style.border = "1px solid red";
        document.querySelector(".picture-wrap__twelve").style.color = "yellow";
        document.querySelector(".picture-wrap__btn--twelve").classList.remove("none");
        const quizPicture = new QuizPicture(data, arrPict);
        quizPicture.init();
      }
    }
    showTimerPicture() {
      let gameTimer = localStorage.getItem("gameTimer") ? JSON.parse(localStorage.getItem("gameTimer")) : [];
      if (gameTimer === "off") {
        document.querySelector(".game-picture__timer").classList.remove("none");
      } else if (gameTimer === "on") {
        document.querySelector(".game-picture__timer").classList.add("none");
      }
      // if (gameSelect === [] || gameSelect === "0") {
      //   document.querySelector(".game-picture__timer").classList.add("none");
      // } else if (gameSelect > 0) {
      //   document.querySelector(".game-picture__timer").classList.remove("none");
      //   document.querySelector(".game-picture__time").value = gameSelect;
      // }
    }
    showTimerPainter() {
      let gameTimer = localStorage.getItem("gameTimer") ? JSON.parse(localStorage.getItem("gameTimer")) : [];
      if (gameTimer === "off") {
        document.querySelector(".game-painter__timer").classList.remove("none");
      } else if (gameTimer === "on") {
        document.querySelector(".game-painter__timer").classList.add("none");
      }
      // if (gameSelect === [] || gameSelect === "0") {
      //   document.querySelector(".game-painter__timer").classList.add("none");
      // } else if (gameSelect > 0) {
      //   document.querySelector(".game-painter__timer").classList.remove("none");
      //   document.querySelector(".game-painter__time").value = gameSelect;
      // }
    }
  }
  const main = new Main();
  main.init();
};
export default mainPage;
