class QuizAuthor {
  constructor(arrAll, arrQuest) {
    this.arr = arrAll;
    this.types = arrQuest;
    this.trueArr = [];
  }
  init() {
    localStorage.removeItem("updatePagePainter");
    this.showContent();
    this.showResultAgain();
    this.updatePage();
    this.showTimer();
  }
  showTimer() {
    let gameSelect = localStorage.getItem("gameSelect") ? JSON.parse(localStorage.getItem("gameSelect")) : [];
    let gameTimer = localStorage.getItem("gameTimer") ? JSON.parse(localStorage.getItem("gameTimer")) : [];
    if (gameTimer === "off") {
      document.querySelector(".game-painter__timer").classList.remove("none");
    } else if (gameTimer === "on") {
      document.querySelector(".game-painter__timer").classList.add("none");
    }
    document.querySelector(".game-picture__time").value = gameSelect;
  }
  showContent() {
    document.addEventListener("click", (event) => {
      let target = event.target;
      if (target.classList.contains("painter-wrap__one")) {
        this.changeCount(this.types[0]);
        this.trueArr = [];
        this.renderResult(this.types[0], "One", "one");
      } else if (target.classList.contains("painter-wrap__two")) {
        this.changeCount(this.types[1]);
        this.trueArr = [];
        this.renderResult(this.types[1], "Two", "two");
      } else if (target.classList.contains("painter-wrap__three")) {
        this.changeCount(this.types[2]);
        this.trueArr = [];
        this.renderResult(this.types[2], "Three", "three");
      } else if (target.classList.contains("painter-wrap__four")) {
        this.changeCount(this.types[3]);
        this.trueArr = [];
        this.renderResult(this.types[3], "Four", "four");
      } else if (target.classList.contains("painter-wrap__five")) {
        this.changeCount(this.types[4]);
        this.trueArr = [];
        this.renderResult(this.types[4], "Five", "five");
      } else if (target.classList.contains("painter-wrap__six")) {
        this.changeCount(this.types[5]);
        this.trueArr = [];
        this.renderResult(this.types[5], "Six", "six");
      } else if (target.classList.contains("painter-wrap__seven")) {
        this.changeCount(this.types[6]);
        this.trueArr = [];
        this.renderResult(this.types[6], "Seven", "seven");
      } else if (target.classList.contains("painter-wrap__eight")) {
        this.changeCount(this.types[7]);
        this.trueArr = [];
        this.renderResult(this.types[7], "Eight", "eight");
      } else if (target.classList.contains("painter-wrap__nine")) {
        this.changeCount(this.types[8]);
        this.trueArr = [];
        this.renderResult(this.types[8], "Nine", "nine");
      } else if (target.classList.contains("painter-wrap__ten")) {
        this.changeCount(this.types[9]);
        this.trueArr = [];
        this.renderResult(this.types[9], "Ten", "ten");
      } else if (target.classList.contains("painter-wrap__eleven")) {
        this.changeCount(this.types[10]);
        this.trueArr = [];
        this.renderResult(this.types[10], "Eleven", "eleven");
      } else if (target.classList.contains("painter-wrap__twelve")) {
        this.changeCount(this.types[11]);
        this.trueArr = [];
        this.renderResult(this.types[11], "Twelve", "twelve");
      }
    });
  }
  async changeCount(data) {
    let count = 0;
    if (count === 0) {
      this.showOneQuestion(data);
    }
    localStorage.setItem("countAuthor", JSON.stringify(count));

    await document.querySelector(".painter-modal__button").addEventListener("click", () => {
      count++;
      if (count === 1) {
        document.querySelector(".painter-modal").classList.remove("painter-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showTwoQuestion(data);
      } else if (count === 2) {
        document.querySelector(".painter-modal").classList.remove("painter-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showThreeQuestion(data);
      } else if (count === 3) {
        document.querySelector(".painter-modal").classList.remove("painter-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showFourQuestion(data);
      } else if (count === 4) {
        document.querySelector(".painter-modal").classList.remove("painter-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showFiveQuestion(data);
      } else if (count === 5) {
        document.querySelector(".painter-modal").classList.remove("painter-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showSixQuestion(data);
      } else if (count === 6) {
        document.querySelector(".painter-modal").classList.remove("painter-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showSevenQuestion(data);
      } else if (count === 7) {
        document.querySelector(".painter-modal").classList.remove("painter-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showEightQuestion(data);
      } else if (count === 8) {
        document.querySelector(".painter-modal").classList.remove("painter-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showNineQuestion(data);
      } else if (count === 9) {
        document.querySelector(".painter-modal").classList.remove("painter-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showTenQuestion(data);
      }
      if (count === 10) {
        count = 0;
      }
      localStorage.setItem("countAuthor", JSON.stringify(count));
    });
  }

  showOneQuestion(data) {
    let trueAnswer;
    trueAnswer = data.oneQuestion.trueAnswer;
    this.showQuestion(trueAnswer, data.oneQuestion.number);
  }
  showTwoQuestion(data) {
    let trueAnswer;
    trueAnswer = data.twoQuestion.trueAnswer;
    this.showQuestion(trueAnswer, data.twoQuestion.number);
  }
  showThreeQuestion(data) {
    let trueAnswer;
    trueAnswer = data.threeQuestion.trueAnswer;
    this.showQuestion(trueAnswer, data.threeQuestion.number);
  }
  showFourQuestion(data) {
    let trueAnswer;
    trueAnswer = data.fourQuestion.trueAnswer;
    this.showQuestion(trueAnswer, data.fourQuestion.number);
  }
  showFiveQuestion(data) {
    let trueAnswer;
    trueAnswer = data.fiveQuestion.trueAnswer;
    this.showQuestion(trueAnswer, data.fiveQuestion.number);
  }
  showSixQuestion(data) {
    let trueAnswer;
    trueAnswer = data.sixQuestion.trueAnswer;
    this.showQuestion(trueAnswer, data.sixQuestion.number);
  }
  showSevenQuestion(data) {
    let trueAnswer;
    trueAnswer = data.sevenQuestion.trueAnswer;
    this.showQuestion(trueAnswer, data.sevenQuestion.number);
  }
  showEightQuestion(data) {
    let trueAnswer;
    trueAnswer = data.eightQuestion.trueAnswer;
    this.showQuestion(trueAnswer, data.eightQuestion.number);
  }
  showNineQuestion(data) {
    let trueAnswer;
    trueAnswer = data.nineQuestion.trueAnswer;
    this.showQuestion(trueAnswer, data.nineQuestion.number);
  }
  showTenQuestion(data) {
    document.querySelector(".animate-one").classList.remove("none");
    document.querySelector(".overlay-preloader").classList.remove("none");
    let trueAnswer;
    const getRandomInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    trueAnswer = data.tenQuestion.trueAnswer;
    document.querySelector(".game-painter__author").innerHTML = this.arr[data.tenQuestion.number].author;
    document.querySelectorAll(".game-painter__answer").forEach((item, i) => {
      if (i === trueAnswer) {
        item.setAttribute(
          "src",
          `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.tenQuestion.number}.jpg?raw=true`
        );
        item.addEventListener("click", () => {
          document.querySelector(".painter-modal__circle").setAttribute("src", "img/ok.svg");
          document
            .querySelector(".painter-modal__image")
            .setAttribute(
              "src",
              `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.tenQuestion.number}.jpg?raw=true`
            );
          document.querySelector(".painter-modal").classList.add("painter-modal__visible");
          document.querySelector(".overlay").classList.remove("none");
          document.querySelector(".painter-modal__name").innerHTML = this.arr[data.tenQuestion.number].name;
          document.querySelector(".painter-modal__author").innerHTML = this.arr[data.tenQuestion.number].author;
          document.querySelector(".painter-modal__year").innerHTML = this.arr[data.tenQuestion.number].year;
          document.querySelector(".painter-modal__button").style.display = "none";
          document.querySelector(".painter-modal__result").style.display = "initial";
          document.querySelector(".painter-modal__result").addEventListener("click", () => {
            document.querySelector(".painter-final").classList.add("painter-final__visible");
            document.querySelector(".painter-modal").classList.remove("painter-modal__visible");
            document.querySelector(".overlay").classList.remove("none");
            document.querySelector(".painter-result").style.display = "flex";
            document.querySelector(".painter-wrap__categories").style.display = "none";
            document.querySelector(".painter-type").style.display = "none";
          });
        });
      } else if (i !== trueAnswer) {
        item.setAttribute(
          "src",
          `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${getRandomInRange(0, 119)}.jpg?raw=true`
        );

        item.addEventListener("click", () => {
          document.querySelector(".painter-modal__circle").setAttribute("src", "img/error.svg");
          document
            .querySelector(".painter-modal__image")
            .setAttribute(
              "src",
              `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.tenQuestion.number}.jpg?raw=true`
            );
          document.querySelector(".painter-modal").classList.add("painter-modal__visible");
          document.querySelector(".overlay").classList.remove("none");
          document.querySelector(".painter-modal__name").innerHTML = this.arr[data.tenQuestion.number].name;
          document.querySelector(".painter-modal__author").innerHTML = this.arr[data.tenQuestion.number].author;
          document.querySelector(".painter-modal__year").innerHTML = this.arr[data.tenQuestion.number].year;
          document.querySelector(".painter-modal__button").style.display = "none";
          document.querySelector(".painter-modal__result").style.display = "initial";
          document.querySelector(".painter-modal__result").addEventListener("click", () => {
            document.querySelector(".painter-final").classList.add("painter-final__visible");
            document.querySelector(".painter-modal").classList.remove("painter-modal__visible");
            document.querySelector(".overlay").classList.remove("none");
            document.querySelector(".painter-result").style.display = "flex";
            document.querySelector(".painter-wrap__categories").style.display = "none";
            document.querySelector(".painter-type").style.display = "none";
          });
        });
      }
    });
    setInterval(() => {
      document.querySelector(".animate-one").classList.add("none");
      document.querySelector(".overlay-preloader").classList.add("none");
    }, 2000);
  }
  showQuestion(trueAnswer, type) {
    document.querySelector(".animate-one").classList.remove("none");
    document.querySelector(".overlay-preloader").classList.remove("none");
    const getRandomInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    document.querySelector(".game-painter__author").innerHTML = this.arr[type].author;

    document.querySelectorAll(".game-painter__answer").forEach((item, i) => {
      if (i === trueAnswer) {
        item.setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${type}.jpg?raw=true`);

        item.addEventListener("click", () => {
          document.querySelector(".painter-modal__circle").setAttribute("src", "img/ok.svg");
          document
            .querySelector(".painter-modal__image")
            .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${type}.jpg?raw=true`);
          document.querySelector(".painter-modal").classList.add("painter-modal__visible");
          document.querySelector(".overlay").classList.remove("none");
          document.querySelector(".painter-modal__name").innerHTML = this.arr[type].name;
          document.querySelector(".painter-modal__author").innerHTML = this.arr[type].author;
          document.querySelector(".painter-modal__year").innerHTML = this.arr[type].year;
          document.querySelector(".painter-modal__button").innerHTML = "Следующий вопрос";
          document.querySelector(".painter-modal__result").innerHTML = "Результат";
          document.querySelector(".painter-modal__result").style.display = "none";
          document.querySelector(".painter-modal__button").style.display = "flex";
        });
      } else if (i !== trueAnswer) {
        item.setAttribute(
          "src",
          `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${getRandomInRange(0, 119)}.jpg?raw=true`
        );
        item.addEventListener("click", () => {
          document.querySelector(".painter-modal__circle").setAttribute("src", "img/error.svg");
          document
            .querySelector(".painter-modal__image")
            .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${type}.jpg?raw=true`);
          document.querySelector(".painter-modal").classList.add("painter-modal__visible");
          document.querySelector(".overlay").classList.remove("none");
          document.querySelector(".painter-modal__name").innerHTML = this.arr[type].name;
          document.querySelector(".painter-modal__author").innerHTML = this.arr[type].author;
          document.querySelector(".painter-modal__year").innerHTML = this.arr[type].year;
          document.querySelector(".painter-modal__button").innerHTML = "Следующий вопрос";
          document.querySelector(".painter-modal__result").innerHTML = "Результат";
          document.querySelector(".painter-modal__result").style.display = "none";
          document.querySelector(".painter-modal__button").style.display = "flex";
        });
      }
    });
    setInterval(() => {
      document.querySelector(".animate-one").classList.add("none");
      document.querySelector(".overlay-preloader").classList.add("none");
    }, 2000);
  }
  renderResult(data, type) {
    let restartRaundPicture = "on";
    let count = 0;
    let plus = 0;
    document.querySelectorAll(".game-painter__dot").forEach((item, i) => {
      if (i === 0) {
        item.classList.add("background-play");
        item.classList.remove("background-true");
        item.classList.remove("background-false");
      } else if (i > 0) {
        item.classList.remove("background-true");
        item.classList.remove("background-false");
        item.classList.remove("background-play");
      }
    });

    document.querySelector(".game-painter__answers").addEventListener("click", (event) => {
      let target = event.target;
      if (count === 0 && target.classList.contains(`game-painter__answer--${data.oneQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[0].classList.add("background-true");
        document.querySelectorAll(".game-painter__dot")[1].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[0].classList.add("none");
        this.trueArr.push(true);
        plus++;
        target.classList.add("border-true");
        setInterval(() => {
          target.classList.remove("border-true");
        }, 1000);
      } else if (count === 0 && !target.classList.contains(`game-painter__answer--${data.oneQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[0].classList.add("background-false");
        document.querySelectorAll(".game-painter__dot")[1].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[0].classList.remove("none");
        target.classList.add("border-false");
        this.trueArr.push(false);
        setInterval(() => {
          target.classList.remove("border-false");
        }, 1000);
      } else if (count === 1 && target.classList.contains(`game-painter__answer--${data.twoQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[1].classList.add("background-true");
        document.querySelectorAll(".game-painter__dot")[2].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[1].classList.add("none");
        target.classList.add("border-true");
        this.trueArr.push(true);
        plus++;
        setInterval(() => {
          target.classList.remove("border-true");
        }, 1000);
      } else if (count === 1 && !target.classList.contains(`game-painter__answer--${data.twoQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[1].classList.add("background-false");
        document.querySelectorAll(".game-painter__dot")[2].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[1].classList.remove("none");
        target.classList.add("border-false");
        this.trueArr.push(false);
        setInterval(() => {
          target.classList.remove("border-false");
        }, 1000);
      } else if (count === 2 && target.classList.contains(`game-painter__answer--${data.threeQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[2].classList.add("background-true");
        document.querySelectorAll(".game-painter__dot")[3].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[2].classList.add("none");
        target.classList.add("border-true");
        this.trueArr.push(true);
        plus++;
        setInterval(() => {
          target.classList.remove("border-true");
        }, 1000);
      } else if (count === 2 && !target.classList.contains(`game-painter__answer--${data.threeQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[2].classList.add("background-false");
        document.querySelectorAll(".game-painter__dot")[3].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[2].classList.remove("none");
        target.classList.add("border-false");
        this.trueArr.push(false);
        setInterval(() => {
          target.classList.remove("border-false");
        }, 1000);
      } else if (count === 3 && target.classList.contains(`game-painter__answer--${data.fourQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[3].classList.add("background-true");
        document.querySelectorAll(".game-painter__dot")[4].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[3].classList.add("none");
        target.classList.add("border-true");
        this.trueArr.push(true);
        plus++;
        setInterval(() => {
          target.classList.remove("border-true");
        }, 1000);
      } else if (count === 3 && !target.classList.contains(`game-painter__answer--${data.fourQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[3].classList.add("background-false");
        document.querySelectorAll(".game-painter__dot")[4].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[3].classList.remove("none");
        target.classList.add("border-false");
        this.trueArr.push(false);
        setInterval(() => {
          target.classList.remove("border-false");
        }, 1000);
      } else if (count === 4 && target.classList.contains(`game-painter__answer--${data.fiveQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[4].classList.add("background-true");
        document.querySelectorAll(".game-painter__dot")[5].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[4].classList.add("none");
        target.classList.add("border-true");
        this.trueArr.push(true);
        plus++;
        setInterval(() => {
          target.classList.remove("border-true");
        }, 1000);
      } else if (count === 4 && !target.classList.contains(`game-painter__answer--${data.fiveQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[4].classList.add("background-false");
        document.querySelectorAll(".game-painter__dot")[5].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[4].classList.remove("none");
        target.classList.add("border-false");
        this.trueArr.push(false);
        setInterval(() => {
          target.classList.remove("border-false");
        }, 1000);
      } else if (count === 5 && target.classList.contains(`game-painter__answer--${data.sixQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[5].classList.add("background-true");
        document.querySelectorAll(".game-painter__dot")[6].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[5].classList.add("none");
        target.classList.add("border-true");
        this.trueArr.push(true);
        plus++;
        setInterval(() => {
          target.classList.remove("border-true");
        }, 1000);
      } else if (count === 5 && !target.classList.contains(`game-painter__answer--${data.sixQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[5].classList.add("background-false");
        document.querySelectorAll(".game-painter__dot")[6].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[5].classList.remove("none");
        target.classList.add("border-false");
        this.trueArr.push(false);
        setInterval(() => {
          target.classList.remove("border-false");
        }, 1000);
      } else if (count === 6 && target.classList.contains(`game-painter__answer--${data.sevenQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[6].classList.add("background-true");
        document.querySelectorAll(".game-painter__dot")[7].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[6].classList.add("none");
        target.classList.add("border-true");
        this.trueArr.push(true);
        plus++;
        setInterval(() => {
          target.classList.remove("border-true");
        }, 1000);
      } else if (count === 6 && !target.classList.contains(`game-painter__answer--${data.sevenQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[6].classList.add("background-false");
        document.querySelectorAll(".game-painter__dot")[7].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[6].classList.remove("none");
        target.classList.add("border-false");
        this.trueArr.push(false);
        setInterval(() => {
          target.classList.remove("border-false");
        }, 1000);
      } else if (count === 7 && target.classList.contains(`game-painter__answer--${data.eightQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[7].classList.add("background-true");
        document.querySelectorAll(".game-painter__dot")[8].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[7].classList.add("none");
        target.classList.add("border-true");
        this.trueArr.push(true);
        plus++;
        setInterval(() => {
          target.classList.remove("border-true");
        }, 1000);
      } else if (count === 7 && !target.classList.contains(`game-painter__answer--${data.eightQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[7].classList.add("background-false");
        document.querySelectorAll(".game-painter__dot")[8].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[7].classList.remove("none");
        target.classList.add("border-false");
        this.trueArr.push(false);
        setInterval(() => {
          target.classList.remove("border-false");
        }, 1000);
      } else if (count === 8 && target.classList.contains(`game-painter__answer--${data.nineQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[8].classList.add("background-true");
        document.querySelectorAll(".game-painter__dot")[9].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[8].classList.add("none");
        target.classList.add("border-true");
        this.trueArr.push(true);
        plus++;
        setInterval(() => {
          target.classList.remove("border-true");
        }, 1000);
      } else if (count === 8 && !target.classList.contains(`game-painter__answer--${data.nineQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[8].classList.add("background-false");
        document.querySelectorAll(".game-painter__dot")[9].classList.add("background-play");
        document.querySelectorAll(".painter-result__overlay")[8].classList.remove("none");
        target.classList.add("border-false");
        this.trueArr.push(false);
        setInterval(() => {
          target.classList.remove("border-false");
        }, 1000);
      } else if (count === 9 && target.classList.contains(`game-painter__answer--${data.tenQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[9].classList.add("background-true");
        document.querySelectorAll(".painter-result__overlay")[9].classList.add("none");
        target.classList.add("border-true");
        this.trueArr.push(true);
        localStorage.setItem(`restartRaund${type}Painter`, JSON.stringify(restartRaundPicture));
        plus++;
        document.querySelector(`.painter-info__counter`).innerHTML = `${plus}/10`;
        localStorage.setItem(`trueSpan${type}Author`, JSON.stringify(plus));
        localStorage.setItem(`trueAnswer${type}Author`, JSON.stringify(this.trueArr));
        this.showResultAgain();
        this.showInfoContent(data);
        setInterval(() => {
          target.classList.remove("border-true");
        }, 1000);
      } else if (count === 9 && !target.classList.contains(`game-painter__answer--${data.tenQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-painter__dot")[9].classList.add("background-false");
        document.querySelectorAll(".painter-result__overlay")[9].classList.remove("none");
        target.classList.add("border-false");
        this.trueArr.push(false);
        localStorage.setItem(`restartRaund${type}Painter`, JSON.stringify(restartRaundPicture));
        document.querySelector(`.painter-info__counter`).innerHTML = `${plus}/10`;
        localStorage.setItem(`trueSpan${type}Author`, JSON.stringify(plus));
        localStorage.setItem(`trueAnswer${type}Author`, JSON.stringify(this.trueArr));
        this.showResultAgain();
        this.showInfoContent(data);
        setInterval(() => {
          target.classList.remove("border-false");
        }, 1000);
      } else if (count === 10) {
        count === 0;
      }
      count++;
    });
    document
      .querySelectorAll(".painter-result__img")[0]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.oneQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[1]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.twoQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[2]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.threeQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[3]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.fourQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[4]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.fiveQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[5]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.sixQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[6]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.sevenQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[7]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.eightQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[8]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.nineQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[9]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.tenQuestion.number}.jpg?raw=true`
      );
  }
  showResultAgain() {
    let truePaintOne = localStorage.getItem("trueAnswerOneAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerOneAuthor"))
      : [];
    let typePaintOne = localStorage.getItem("typeOneAuthor") ? JSON.parse(localStorage.getItem("typeOneAuthor")) : [];
    let truePaintTwo = localStorage.getItem("trueAnswerTwoAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerTwoAuthor"))
      : [];
    let typePaintTwo = localStorage.getItem("typeTwoAuthor") ? JSON.parse(localStorage.getItem("typeTwoAuthor")) : [];
    let truePaintThree = localStorage.getItem("trueAnswerThreeAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerThreeAuthor"))
      : [];
    let typePaintThree = localStorage.getItem("typeThreeAuthor")
      ? JSON.parse(localStorage.getItem("typeThreeAuthor"))
      : [];
    let truePaintFour = localStorage.getItem("trueAnswerFourAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerFourAuthor"))
      : [];
    let typePaintFour = localStorage.getItem("typeFourAuthor")
      ? JSON.parse(localStorage.getItem("typeFourAuthor"))
      : [];
    let truePaintFive = localStorage.getItem("trueAnswerFiveAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerFiveAuthor"))
      : [];
    let typePaintFive = localStorage.getItem("typeFiveAuthor")
      ? JSON.parse(localStorage.getItem("typeFiveAuthor"))
      : [];
    let truePaintSix = localStorage.getItem("trueAnswerSixAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerSixAuthor"))
      : [];
    let typePaintSix = localStorage.getItem("typeSixAuthor") ? JSON.parse(localStorage.getItem("typeSixAuthor")) : [];
    let truePaintSeven = localStorage.getItem("trueAnswerSevenAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerSevenAuthor"))
      : [];
    let typePaintSeven = localStorage.getItem("typeSevenAuthor")
      ? JSON.parse(localStorage.getItem("typeSevenAuthor"))
      : [];
    let truePaintEight = localStorage.getItem("trueAnswerEightAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerEightAuthor"))
      : [];
    let typePaintEight = localStorage.getItem("typeEightAuthor")
      ? JSON.parse(localStorage.getItem("typeEightAuthor"))
      : [];
    let truePaintNine = localStorage.getItem("trueAnswerNineAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerNineAuthor"))
      : [];
    let typePaintNine = localStorage.getItem("typeNineAuthor")
      ? JSON.parse(localStorage.getItem("typeNineAuthor"))
      : [];
    let truePaintTen = localStorage.getItem("trueAnswerTenAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerTenAuthor"))
      : [];
    let typePaintTen = localStorage.getItem("typeTenAuthor") ? JSON.parse(localStorage.getItem("typeTenAuthor")) : [];
    let truePaintEleven = localStorage.getItem("trueAnswerElevenAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerElevenAuthor"))
      : [];
    let typePaintEleven = localStorage.getItem("typeElevenAuthor")
      ? JSON.parse(localStorage.getItem("typeElevenAuthor"))
      : [];
    let truePaintTwelve = localStorage.getItem("trueAnswerTwelveAuthor")
      ? JSON.parse(localStorage.getItem("trueAnswerTwelveAuthor"))
      : [];
    let typePaintTwelve = localStorage.getItem("typeTwelveAuthor")
      ? JSON.parse(localStorage.getItem("typeTwelveAuthor"))
      : [];
    document.addEventListener("click", (event) => {
      let target = event.target;
      if (target.classList.contains("painter-wrap__btn--one")) {
        this.showLocal(
          truePaintOne,
          typePaintOne.oneQuestion.number,
          typePaintOne.twoQuestion.number,
          typePaintOne.threeQuestion.number,
          typePaintOne.fourQuestion.number,
          typePaintOne.fiveQuestion.number,
          typePaintOne.sixQuestion.number,
          typePaintOne.sevenQuestion.number,
          typePaintOne.eightQuestion.number,
          typePaintOne.nineQuestion.number,
          typePaintOne.tenQuestion.number
        );
        this.showInfoContent(typePaintOne);

        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("painter-wrap__btn--two")) {
        this.showLocal(
          truePaintTwo,
          typePaintTwo.oneQuestion.number,
          typePaintTwo.twoQuestion.number,
          typePaintTwo.threeQuestion.number,
          typePaintTwo.fourQuestion.number,
          typePaintTwo.fiveQuestion.number,
          typePaintTwo.sixQuestion.number,
          typePaintTwo.sevenQuestion.number,
          typePaintTwo.eightQuestion.number,
          typePaintTwo.nineQuestion.number,
          typePaintTwo.tenQuestion.number
        );
        this.showInfoContent(typePaintTwo);
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("painter-wrap__btn--three")) {
        this.showLocal(
          truePaintThree,
          typePaintThree.oneQuestion.number,
          typePaintThree.twoQuestion.number,
          typePaintThree.threeQuestion.number,
          typePaintThree.fourQuestion.number,
          typePaintThree.fiveQuestion.number,
          typePaintThree.sixQuestion.number,
          typePaintThree.sevenQuestion.number,
          typePaintThree.eightQuestion.number,
          typePaintThree.nineQuestion.number,
          typePaintThree.tenQuestion.number
        );
        this.showInfoContent(typePaintThree);

        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("painter-wrap__btn--four")) {
        this.showInfoContent(typePaintFour);
        this.showLocal(
          truePaintFour,
          typePaintFour.oneQuestion.number,
          typePaintFour.twoQuestion.number,
          typePaintFour.threeQuestion.number,
          typePaintFour.fourQuestion.number,
          typePaintFour.fiveQuestion.number,
          typePaintFour.sixQuestion.number,
          typePaintFour.sevenQuestion.number,
          typePaintFour.eightQuestion.number,
          typePaintFour.nineQuestion.number,
          typePaintFour.tenQuestion.number
        );
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("painter-wrap__btn--five")) {
        this.showInfoContent(typePaintFive);
        this.showLocal(
          truePaintFive,
          typePaintFive.oneQuestion.number,
          typePaintFive.twoQuestion.number,
          typePaintFive.threeQuestion.number,
          typePaintFive.fourQuestion.number,
          typePaintFive.fiveQuestion.number,
          typePaintFive.sixQuestion.number,
          typePaintFive.sevenQuestion.number,
          typePaintFive.eightQuestion.number,
          typePaintFive.nineQuestion.number,
          typePaintFive.tenQuestion.number
        );
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("painter-wrap__btn--six")) {
        this.showInfoContent(typePaintSix);
        this.showLocal(
          truePaintSix,
          typePaintSix.oneQuestion.number,
          typePaintSix.twoQuestion.number,
          typePaintSix.threeQuestion.number,
          typePaintSix.fourQuestion.number,
          typePaintSix.fiveQuestion.number,
          typePaintSix.sixQuestion.number,
          typePaintSix.sevenQuestion.number,
          typePaintSix.eightQuestion.number,
          typePaintSix.nineQuestion.number,
          typePaintSix.tenQuestion.number
        );
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("painter-wrap__btn--seven")) {
        this.showInfoContent(typePaintSeven);
        this.showLocal(
          truePaintSeven,
          typePaintSeven.oneQuestion.number,
          typePaintSeven.twoQuestion.number,
          typePaintSeven.threeQuestion.number,
          typePaintSeven.fourQuestion.number,
          typePaintSeven.fiveQuestion.number,
          typePaintSeven.sixQuestion.number,
          typePaintSeven.sevenQuestion.number,
          typePaintSeven.eightQuestion.number,
          typePaintSeven.nineQuestion.number,
          typePaintSeven.tenQuestion.number
        );
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("painter-wrap__btn--eight")) {
        this.showInfoContent(typePaintEight);
        this.showLocal(
          truePaintEight,
          typePaintEight.oneQuestion.number,
          typePaintEight.twoQuestion.number,
          typePaintEight.threeQuestion.number,
          typePaintEight.fourQuestion.number,
          typePaintEight.fiveQuestion.number,
          typePaintEight.sixQuestion.number,
          typePaintEight.sevenQuestion.number,
          typePaintEight.eightQuestion.number,
          typePaintEight.nineQuestion.number,
          typePaintEight.tenQuestion.number
        );
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("painter-wrap__btn--nine")) {
        this.showInfoContent(typePaintNine);
        this.showLocal(
          truePaintNine,
          typePaintNine.oneQuestion.number,
          typePaintNine.twoQuestion.number,
          typePaintNine.threeQuestion.number,
          typePaintNine.fourQuestion.number,
          typePaintNine.fiveQuestion.number,
          typePaintNine.sixQuestion.number,
          typePaintNine.sevenQuestion.number,
          typePaintNine.eightQuestion.number,
          typePaintNine.nineQuestion.number,
          typePaintNine.tenQuestion.number
        );
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("painter-wrap__btn--ten")) {
        this.showInfoContent(typePaintTen);
        this.showLocal(
          truePaintTen,
          typePaintTen.oneQuestion.number,
          typePaintTen.twoQuestion.number,
          typePaintTen.threeQuestion.number,
          typePaintTen.fourQuestion.number,
          typePaintTen.fiveQuestion.number,
          typePaintTen.sixQuestion.number,
          typePaintTen.sevenQuestion.number,
          typePaintTen.eightQuestion.number,
          typePaintTen.nineQuestion.number,
          typePaintTen.tenQuestion.number
        );
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("painter-wrap__btn--eleven")) {
        this.showInfoContent(typePaintEleven);
        this.showLocal(
          truePaintEleven,
          typePaintEleven.oneQuestion.number,
          typePaintEleven.twoQuestion.number,
          typePaintEleven.threeQuestion.number,
          typePaintEleven.fourQuestion.number,
          typePaintEleven.fiveQuestion.number,
          typePaintEleven.sixQuestion.number,
          typePaintEleven.sevenQuestion.number,
          typePaintEleven.eightQuestion.number,
          typePaintEleven.nineQuestion.number,
          typePaintEleven.tenQuestion.number
        );
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("painter-wrap__btn--twelve")) {
        this.showInfoContent(typePaintTwelve);
        this.showLocal(
          truePaintTwelve,
          typePaintTwelve.oneQuestion.number,
          typePaintTwelve.twoQuestion.number,
          typePaintTwelve.threeQuestion.number,
          typePaintTwelve.fourQuestion.number,
          typePaintTwelve.fiveQuestion.number,
          typePaintTwelve.sixQuestion.number,
          typePaintTwelve.sevenQuestion.number,
          typePaintTwelve.eightQuestion.number,
          typePaintTwelve.nineQuestion.number,
          typePaintTwelve.tenQuestion.number
        );

        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      }
    });
  }
  showLocal(
    type,
    trueTypeOne,
    trueTypeTwo,
    trueTypeThree,
    trueTypeFour,
    trueTypeFive,
    trueTypeSix,
    trueTypeSeven,
    trueTypeEight,
    trueTypeNine,
    trueTypeTen
  ) {
    document.querySelector(".sk-rotating").classList.remove("none");
    document.querySelector(".overlay-preloader").classList.remove("none");
    document.querySelector(".painter-wrap__categories").style.display = "none";
    document.querySelector(".painter-result").style.display = "flex";
    if (type[0] === true) {
      document.querySelectorAll(".painter-result__overlay")[0].classList.add("none");
    } else if (type[0] === false) {
      document.querySelectorAll(".painter-result__overlay")[0].classList.remove("none");
    }
    if (type[1] === true) {
      document.querySelectorAll(".painter-result__overlay")[1].classList.add("none");
    } else if (type[1] === false) {
      document.querySelectorAll(".painter-result__overlay")[1].classList.remove("none");
    }
    if (type[2] === true) {
      document.querySelectorAll(".painter-result__overlay")[2].classList.add("none");
    } else if (type[2] === false) {
      document.querySelectorAll(".painter-result__overlay")[2].classList.remove("none");
    }
    if (type[3] === true) {
      document.querySelectorAll(".painter-result__overlay")[3].classList.add("none");
    } else if (type[3] === false) {
      document.querySelectorAll(".painter-result__overlay")[3].classList.remove("none");
    }
    if (type[4] === true) {
      document.querySelectorAll(".painter-result__overlay")[4].classList.add("none");
    } else if (type[4] === false) {
      document.querySelectorAll(".painter-result__overlay")[4].classList.remove("none");
    }
    if (type[5] === true) {
      document.querySelectorAll(".painter-result__overlay")[5].classList.add("none");
    } else if (type[5] === false) {
      document.querySelectorAll(".painter-result__overlay")[5].classList.remove("none");
    }
    if (type[6] === true) {
      document.querySelectorAll(".painter-result__overlay")[6].classList.add("none");
    } else if (type[6] === false) {
      document.querySelectorAll(".painter-result__overlay")[6].classList.remove("none");
    }
    if (type[7] === true) {
      document.querySelectorAll(".painter-result__overlay")[7].classList.add("none");
    } else if (type[7] === false) {
      document.querySelectorAll(".painter-result__overlay")[7].classList.remove("none");
    }
    if (type[8] === true) {
      document.querySelectorAll(".painter-result__overlay")[8].classList.add("none");
    } else if (type[8] === false) {
      document.querySelectorAll(".painter-result__overlay")[8].classList.remove("none");
    }
    if (type[9] === true) {
      document.querySelectorAll(".painter-result__overlay")[9].classList.add("none");
    } else if (type[9] === false) {
      document.querySelectorAll(".painter-result__overlay")[9].classList.remove("none");
    }
    document
      .querySelectorAll(".painter-result__img")[0]
      .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeOne}.jpg?raw=true`);
    document
      .querySelectorAll(".painter-result__img")[1]
      .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeTwo}.jpg?raw=true`);
    document
      .querySelectorAll(".painter-result__img")[2]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeThree}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[3]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeFour}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[4]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeFive}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[5]
      .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeSix}.jpg?raw=true`);
    document
      .querySelectorAll(".painter-result__img")[6]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeSeven}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[7]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeEight}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[8]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeNine}.jpg?raw=true`
      );
    document
      .querySelectorAll(".painter-result__img")[9]
      .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeTen}.jpg?raw=true`);
  }
  showInfoContent(data) {
    document.addEventListener("click", (event) => {
      let target = event.target;
      if (
        target.classList.contains("painter-result__overlay--one") ||
        target.classList.contains("painter-result__img--one")
      ) {
        this.showInfoPicture(data.oneQuestion.number);
      } else if (
        target.classList.contains("painter-result__overlay--two") ||
        target.classList.contains("painter-result__img--two")
      ) {
        this.showInfoPicture(data.twoQuestion.number);
      } else if (
        target.classList.contains("painter-result__overlay--three") ||
        target.classList.contains("painter-result__img--three")
      ) {
        this.showInfoPicture(data.threeQuestion.number);
      } else if (
        target.classList.contains("painter-result__overlay--four") ||
        target.classList.contains("painter-result__img--four")
      ) {
        this.showInfoPicture(data.fourQuestion.number);
      } else if (
        target.classList.contains("painter-result__overlay--five") ||
        target.classList.contains("painter-result__img--five")
      ) {
        this.showInfoPicture(data.fiveQuestion.number);
      } else if (
        target.classList.contains("painter-result__overlay--six") ||
        target.classList.contains("painter-result__img--six")
      ) {
        this.showInfoPicture(data.sixQuestion.number);
      } else if (
        target.classList.contains("painter-result__overlay--seven") ||
        target.classList.contains("painter-result__img--seven")
      ) {
        this.showInfoPicture(data.sevenQuestion.number);
      } else if (
        target.classList.contains("painter-result__overlay--eight") ||
        target.classList.contains("painter-result__img--eight")
      ) {
        this.showInfoPicture(data.eightQuestion.number);
      } else if (
        target.classList.contains("painter-result__overlay--nine") ||
        target.classList.contains("painter-result__img--nine")
      ) {
        this.showInfoPicture(data.nineQuestion.number);
      } else if (
        target.classList.contains("painter-result__overlay--ten") ||
        target.classList.contains("painter-result__img--ten")
      ) {
        this.showInfoPicture(data.tenQuestion.number);
      }
    });

    document.querySelector(".painter-info__button").addEventListener("click", () => {
      document.querySelector(".painter-info").classList.remove("painter-info__visible");
      document.querySelector(".overlay").classList.add("none");
    });
  }
  showInfoPicture(type) {
    document.querySelector(".painter-info").classList.add("painter-info__visible");
    document.querySelector(".overlay").classList.remove("none");
    document
      .querySelector(".painter-info__image")
      .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${type}.jpg?raw=true`);
    document.querySelector(".painter-info__name").innerHTML = this.arr[type].name;
    document.querySelector(".painter-info__author").innerHTML = this.arr[type].author;
    document.querySelector(".painter-info__year").innerHTML = this.arr[type].year;
  }
  updatePage() {
    document.querySelector(".painter-final__button").addEventListener("click", () => {
      document.querySelector(".painter-final").classList.remove("painter-final__visible");
      document.querySelector(".overlay").classList.add("none");
    });
    document.querySelectorAll(".painter-result__main").forEach((item) => {
      item.addEventListener("click", () => {
        window.location.reload();
        let updatePagePainter = "on";
        localStorage.setItem(`updatePagePainter`, JSON.stringify(updatePagePainter));
      });
    });
    document.querySelectorAll(".painter-type__main").forEach((item) => {
      item.addEventListener("click", () => {
        window.location.reload();
      });
    });
    document.querySelector(".painter-type__categ").addEventListener("click", () => {
      document.querySelector(".painter-type").style.display = "none";
      document.querySelector(".painter-wrap__categories").style.display = "flex";
    });
  }
}
export default QuizAuthor;
