class QuizPicture {
  constructor(arrAll, arrQuest) {
    this.arr = arrAll;
    this.types = arrQuest;
    this.trueArr = [];
  }

  init() {
    localStorage.removeItem("updatePagePicture");
    this.showContent();
    this.showResultAgain();
    this.updatePage();
    this.showTimer();
  }
  showTimer() {
    let gameSelect = localStorage.getItem("gameSelect") ? JSON.parse(localStorage.getItem("gameSelect")) : [];
    let gameTimer = localStorage.getItem("gameTimer") ? JSON.parse(localStorage.getItem("gameTimer")) : [];

    if (gameTimer === "off") {
      document.querySelector(".game-picture__timer").classList.remove("none");
    } else if (gameTimer === "on") {
      document.querySelector(".game-picture__timer").classList.add("none");
    }
    document.querySelector(".game-picture__time").value = gameSelect;
  }
  showContent() {
    document.addEventListener("click", (event) => {
      let target = event.target;
      if (target.classList.contains("picture-wrap__one")) {
        this.changeCount(this.types[0]);
        this.renderResult(this.types[0], "One", "one");
      } else if (target.classList.contains("picture-wrap__two")) {
        this.changeCount(this.types[1]);
        this.renderResult(this.types[1], "Two", "two");
      } else if (target.classList.contains("picture-wrap__three")) {
        this.changeCount(this.types[2]);
        this.renderResult(this.types[2], "Three", "three");
      } else if (target.classList.contains("picture-wrap__four")) {
        this.changeCount(this.types[3]);
        this.renderResult(this.types[3], "Four", "four");
      } else if (target.classList.contains("picture-wrap__five")) {
        this.changeCount(this.types[4]);
        this.renderResult(this.types[4], "Five", "five");
      } else if (target.classList.contains("picture-wrap__six")) {
        this.changeCount(this.types[5]);
        this.renderResult(this.types[5], "Six", "six");
      } else if (target.classList.contains("picture-wrap__seven")) {
        this.changeCount(this.types[6]);
        this.renderResult(this.types[6], "Seven", "seven");
      } else if (target.classList.contains("picture-wrap__eight")) {
        this.changeCount(this.types[7]);
        this.renderResult(this.types[7], "Eight", "eight");
      } else if (target.classList.contains("picture-wrap__nine")) {
        this.changeCount(this.types[8]);
        this.renderResult(this.types[8], "Nine", "nine");
      } else if (target.classList.contains("picture-wrap__ten")) {
        this.changeCount(this.types[9]);
        this.renderResult(this.types[9], "Ten", "ten");
      } else if (target.classList.contains("picture-wrap__eleven")) {
        this.changeCount(this.types[10]);
        this.renderResult(this.types[10], "Eleven", "eleven");
      } else if (target.classList.contains("picture-wrap__twelve")) {
        this.changeCount(this.types[11]);
        this.renderResult(this.types[11], "Twelve", "twelve");
      }
    });
  }
  changeCount(data) {
    let count = 0;
    if (count === 0) {
      this.showOneQuestion(data);
    }
    localStorage.setItem("countPicture", JSON.stringify(count));
    document.querySelector(".picture-modal__button").addEventListener("click", () => {
      count++;
      if (count === 1) {
        document.querySelector(".picture-modal").classList.remove("picture-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showTwoQuestion(data);
      } else if (count === 2) {
        document.querySelector(".picture-modal").classList.remove("picture-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showThreeQuestion(data);
      } else if (count === 3) {
        document.querySelector(".picture-modal").classList.remove("picture-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showFourQuestion(data);
      } else if (count === 4) {
        document.querySelector(".picture-modal").classList.remove("picture-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showFiveQuestion(data);
      } else if (count === 5) {
        document.querySelector(".picture-modal").classList.remove("picture-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showSixQuestion(data);
      } else if (count === 6) {
        document.querySelector(".picture-modal").classList.remove("picture-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showSevenQuestion(data);
      } else if (count === 7) {
        document.querySelector(".picture-modal").classList.remove("picture-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showEightQuestion(data);
      } else if (count === 8) {
        document.querySelector(".picture-modal").classList.remove("picture-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showNineQuestion(data);
      } else if (count === 9) {
        document.querySelector(".picture-modal").classList.remove("picture-modal__visible");
        document.querySelector(".overlay").classList.add("none");
        this.showTenQuestion(data);
      }
      if (count === 10) {
        count = 0;
      }
      localStorage.setItem("countPicture", JSON.stringify(count));
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
    document.querySelector(".animate-two").classList.remove("none");
    document.querySelector(".overlay-preloader").classList.remove("none");
    let trueAnswer;
    const getRandomInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    trueAnswer = data.tenQuestion.trueAnswer;
    document
      .querySelector(".game-picture__img")
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.tenQuestion.number}.jpg?raw=true`
      );

    document.querySelectorAll(".game-picture__answer").forEach((item, i) => {
      if (i === trueAnswer) {
        item.innerHTML = this.arr[data.tenQuestion.number].author;
        item.addEventListener("click", () => {
          document.querySelector(".picture-modal__circle").setAttribute("src", "img/ok.svg");
          document
            .querySelector(".picture-modal__image")
            .setAttribute(
              "src",
              `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.tenQuestion.number}.jpg?raw=true`
            );
          document.querySelector(".picture-modal__name").innerHTML = this.arr[data.tenQuestion.number].name;
          document.querySelector(".picture-modal__author").innerHTML = this.arr[data.tenQuestion.number].author;
          document.querySelector(".picture-modal__year").innerHTML = this.arr[data.tenQuestion.number].year;
          document.querySelector(".picture-modal__button").style.display = "none";
          document.querySelector(".picture-modal__result").innerHTML = "Результат";
          document.querySelector(".picture-modal__result").style.display = "initial";
          document.querySelector(".picture-modal").classList.add("picture-modal__visible");
          document.querySelector(".overlay").classList.remove("none");
          document.querySelector(".picture-modal__result").addEventListener("click", () => {
            document.querySelector(".picture-final").classList.add("picture-final__visible");
            document.querySelector(".picture-modal").classList.remove("picture-modal__visible");
            document.querySelector(".overlay").classList.remove("none");
            document.querySelector(".picture-result").style.display = "flex";
            document.querySelector(".picture-type").style.display = "none";
            document.querySelector(".picture-modal__result").style.display = "none";
            document.querySelector(".picture-modal__button").style.display = "initial";
            document.querySelector(".picture-result").style.display = "flex";
            document.querySelector(".picture-wrap__categories").style.display = "none";
          });
        });
      } else if (i !== trueAnswer) {
        item.innerHTML = this.arr[getRandomInRange(120, 239)].author;
        item.addEventListener("click", () => {
          document.querySelector(".picture-modal__circle").setAttribute("src", "img/error.svg");
          document
            .querySelector(".picture-modal__image")
            .setAttribute(
              "src",
              `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.tenQuestion.number}.jpg?raw=true`
            );
          document.querySelector(".picture-modal__name").innerHTML = this.arr[data.tenQuestion.number].name;
          document.querySelector(".picture-modal__author").innerHTML = this.arr[data.tenQuestion.number].author;
          document.querySelector(".picture-modal__year").innerHTML = this.arr[data.tenQuestion.number].year;
          document.querySelector(".picture-modal__button").style.display = "none";
          document.querySelector(".picture-modal__result").innerHTML = "Результат";
          document.querySelector(".picture-modal__result").style.display = "initial";
          document.querySelector(".picture-modal").classList.add("picture-modal__visible");
          document.querySelector(".overlay").classList.remove("none");
          document.querySelector(".picture-modal__result").addEventListener("click", () => {
            document.querySelector(".picture-final").classList.add("picture-final__visible");
            document.querySelector(".picture-modal").classList.remove("picture-modal__visible");
            document.querySelector(".overlay").classList.remove("none");
            document.querySelector(".picture-modal__result").style.display = "none";
            document.querySelector(".picture-modal__button").style.display = "initial";
            document.querySelector(".picture-result").style.display = "flex";
            document.querySelector(".picture-type").style.display = "none";
            document.querySelector(".picture-result").style.display = "flex";
            document.querySelector(".picture-wrap__categories").style.display = "none";
          });
        });
      }
    });
    setInterval(() => {
      document.querySelector(".animate-two").classList.add("none");
      document.querySelector(".overlay-preloader").classList.add("none");
    }, 2000);
  }
  showQuestion(trueAnswer, type) {
    document.querySelector(".animate-two").classList.remove("none");
    document.querySelector(".overlay-preloader").classList.remove("none");
    const getRandomInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    document
      .querySelector(".game-picture__img")
      .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${type}.jpg?raw=true`);

    document.querySelectorAll(".game-picture__answer").forEach((item, i) => {
      if (i === trueAnswer) {
        item.innerHTML = this.arr[type].author;
        item.addEventListener("click", () => {
          document.querySelector(".picture-modal__circle").setAttribute("src", "img/ok.svg");
          document
            .querySelector(".picture-modal__image")
            .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${type}.jpg?raw=true`);
          document.querySelector(".picture-modal").classList.add("picture-modal__visible");
          document.querySelector(".overlay").classList.remove("none");
          document.querySelector(".picture-modal__name").innerHTML = this.arr[type].name;
          document.querySelector(".picture-modal__author").innerHTML = this.arr[type].author;
          document.querySelector(".picture-modal__year").innerHTML = this.arr[type].year;
          document.querySelector(".picture-modal__button").innerHTML = "Следующий вопрос";
          document.querySelector(".picture-modal__button").style.display = "flex";
          document.querySelector(".picture-modal__result").style.display = "none";
        });
      } else if (i !== trueAnswer) {
        item.innerHTML = this.arr[getRandomInRange(120, 239)].author;
        item.addEventListener("click", () => {
          document.querySelector(".picture-modal__circle").setAttribute("src", "img/error.svg");
          document
            .querySelector(".picture-modal__image")
            .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${type}.jpg?raw=true`);
          document.querySelector(".picture-modal").classList.add("picture-modal__visible");
          document.querySelector(".overlay").classList.remove("none");
          document.querySelector(".picture-modal__name").innerHTML = this.arr[type].name;
          document.querySelector(".picture-modal__author").innerHTML = this.arr[type].author;
          document.querySelector(".picture-modal__year").innerHTML = this.arr[type].year;
          document.querySelector(".picture-modal__button").innerHTML = "Следующий вопрос";
          document.querySelector(".picture-modal__button").style.display = "flex";
          document.querySelector(".picture-modal__result").style.display = "none";
        });
      }
    });
    setInterval(() => {
      document.querySelector(".animate-two").classList.add("none");
      document.querySelector(".overlay-preloader").classList.add("none");
    }, 2000);
  }
  renderResult(data, type) {
    let restartRaundPicture = "on";
    let count = 0;
    let plus = 0;
    document.querySelectorAll(".game-picture__dot").forEach((item, i) => {
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
    document.querySelector(".game-picture__answers").addEventListener("click", (event) => {
      let target = event.target;
      if (count === 0 && target.classList.contains(`game-picture__answer--${data.oneQuestion.trueAnswer}`)) {
        document.querySelectorAll(".game-picture__dot")[0].classList.add("background-true");
        document.querySelectorAll(".game-picture__dot")[1].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[0].classList.add("none");
        this.trueArr.push(true);
        count++;
        plus++;
        target.classList.add("background-true");
        setInterval(() => {
          target.classList.remove("background-true");
        }, 1000);
      } else if (count === 0 && !target.classList.contains(`game-picture__answer--${data.oneQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[0].classList.add("background-false");
        document.querySelectorAll(".game-picture__dot")[1].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[0].classList.remove("none");
        target.classList.add("background-false");
        this.trueArr.push(false);
        setInterval(() => {
          target.classList.remove("background-false");
        }, 1000);
      } else if (count === 1 && target.classList.contains(`game-picture__answer--${data.twoQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[1].classList.add("background-true");
        document.querySelectorAll(".game-picture__dot")[2].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[1].classList.add("none");
        target.classList.add("background-true");
        this.trueArr.push(true);
        plus++;
        setInterval(() => {
          target.classList.remove("background-true");
        }, 1000);
      } else if (count === 1 && !target.classList.contains(`game-picture__answer--${data.twoQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[1].classList.add("background-false");
        document.querySelectorAll(".game-picture__dot")[2].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[1].classList.remove("none");
        this.trueArr.push(false);
        target.classList.add("background-false");
        setInterval(() => {
          target.classList.remove("background-false");
        }, 1000);
      } else if (count === 2 && target.classList.contains(`game-picture__answer--${data.threeQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[2].classList.add("background-true");
        document.querySelectorAll(".game-picture__dot")[3].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[2].classList.add("none");
        this.trueArr.push(true);
        plus++;
        target.classList.add("background-true");
        setInterval(() => {
          target.classList.remove("background-true");
        }, 1000);
      } else if (count === 2 && !target.classList.contains(`game-picture__answer--${data.threeQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[2].classList.add("background-false");
        document.querySelectorAll(".game-picture__dot")[3].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[2].classList.remove("none");
        this.trueArr.push(false);
        target.classList.add("background-false");
        setInterval(() => {
          target.classList.remove("background-false");
        }, 1000);
      } else if (count === 3 && target.classList.contains(`game-picture__answer--${data.fourQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[3].classList.add("background-true");
        document.querySelectorAll(".game-picture__dot")[4].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[3].classList.add("none");
        this.trueArr.push(true);
        plus++;
        target.classList.add("background-true");
        setInterval(() => {
          target.classList.remove("background-true");
        }, 1000);
      } else if (count === 3 && !target.classList.contains(`game-picture__answer--${data.fourQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[3].classList.add("background-false");
        document.querySelectorAll(".game-picture__dot")[4].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[3].classList.remove("none");
        this.trueArr.push(false);
        target.classList.add("background-false");
        setInterval(() => {
          target.classList.remove("background-false");
        }, 1000);
      } else if (count === 4 && target.classList.contains(`game-picture__answer--${data.fiveQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[4].classList.add("background-true");
        document.querySelectorAll(".game-picture__dot")[5].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[4].classList.add("none");
        this.trueArr.push(true);
        plus++;
        target.classList.add("background-true");
        setInterval(() => {
          target.classList.remove("background-true");
        }, 1000);
      } else if (count === 4 && !target.classList.contains(`game-picture__answer--${data.fiveQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[4].classList.add("background-false");
        document.querySelectorAll(".game-picture__dot")[5].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[4].classList.remove("none");
        this.trueArr.push(false);
        target.classList.add("background-false");
        setInterval(() => {
          target.classList.remove("background-false");
        }, 1000);
      } else if (count === 5 && target.classList.contains(`game-picture__answer--${data.sixQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[5].classList.add("background-true");
        document.querySelectorAll(".game-picture__dot")[6].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[5].classList.add("none");
        this.trueArr.push(true);
        plus++;
        target.classList.add("background-true");
        setInterval(() => {
          target.classList.remove("background-true");
        }, 1000);
      } else if (count === 5 && !target.classList.contains(`game-picture__answer--${data.sixQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[5].classList.add("background-false");
        document.querySelectorAll(".game-picture__dot")[6].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[5].classList.remove("none");
        this.trueArr.push(false);
        target.classList.add("background-false");
        setInterval(() => {
          target.classList.remove("background-false");
        }, 1000);
      } else if (count === 6 && target.classList.contains(`game-picture__answer--${data.sevenQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[6].classList.add("background-true");
        document.querySelectorAll(".game-picture__dot")[7].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[6].classList.add("none");
        this.trueArr.push(true);
        plus++;
        target.classList.add("background-true");
        setInterval(() => {
          target.classList.remove("background-true");
        }, 1000);
      } else if (count === 6 && !target.classList.contains(`game-picture__answer--${data.sevenQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[6].classList.add("background-false");
        document.querySelectorAll(".game-picture__dot")[7].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[6].classList.remove("none");
        this.trueArr.push(false);
        target.classList.add("background-false");
        setInterval(() => {
          target.classList.remove("background-false");
        }, 1000);
      } else if (count === 7 && target.classList.contains(`game-picture__answer--${data.eightQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[7].classList.add("background-true");
        document.querySelectorAll(".game-picture__dot")[8].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[7].classList.add("none");
        this.trueArr.push(true);
        plus++;
        target.classList.add("background-true");
        setInterval(() => {
          target.classList.remove("background-true");
        }, 1000);
      } else if (count === 7 && !target.classList.contains(`game-picture__answer--${data.eightQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[7].classList.add("background-false");
        document.querySelectorAll(".game-picture__dot")[8].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[7].classList.remove("none");
        this.trueArr.push(false);
        target.classList.add("background-false");
        setInterval(() => {
          target.classList.remove("background-false");
        }, 1000);
      } else if (count === 8 && target.classList.contains(`game-picture__answer--${data.nineQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[8].classList.add("background-true");
        document.querySelectorAll(".game-picture__dot")[9].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[8].classList.add("none");
        this.trueArr.push(true);
        plus++;
        target.classList.add("background-true");
        setInterval(() => {
          target.classList.remove("background-true");
        }, 1000);
      } else if (count === 8 && !target.classList.contains(`game-picture__answer--${data.nineQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[8].classList.add("background-false");
        document.querySelectorAll(".game-picture__dot")[9].classList.add("background-play");
        document.querySelectorAll(".picture-result__overlay")[8].classList.remove("none");
        this.trueArr.push(false);
        target.classList.add("background-false");
        setInterval(() => {
          target.classList.remove("background-false");
        }, 1000);
      } else if (count === 9 && target.classList.contains(`game-picture__answer--${data.tenQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[9].classList.add("background-true");
        document.querySelectorAll(".picture-result__overlay")[9].classList.add("none");
        this.trueArr.push(true);
        plus++;
        document.querySelector(`.picture-final__counter`).innerHTML = `${plus}/10`;
        localStorage.setItem(`restartRaund${type}Picture`, JSON.stringify(restartRaundPicture));
        localStorage.setItem(`trueAnswer${type}Picture`, JSON.stringify(this.trueArr));
        target.classList.add("background-true");
        setInterval(() => {
          target.classList.remove("background-true");
        }, 1000);
        this.showInfoContent(data);
      } else if (count === 9 && !target.classList.contains(`game-picture__answer--${data.tenQuestion.trueAnswer}`)) {
        count++;
        document.querySelectorAll(".game-picture__dot")[9].classList.add("background-false");
        document.querySelectorAll(".picture-result__overlay")[9].classList.remove("none");
        this.trueArr.push(false);
        localStorage.setItem(`restartRaund${type}Picture`, JSON.stringify(restartRaundPicture));
        localStorage.setItem(`trueAnswer${type}Picture`, JSON.stringify(this.trueArr));
        document.querySelector(`.picture-final__counter`).innerHTML = `${plus}/10`;
        target.classList.add("background-false");
        setInterval(() => {
          target.classList.remove("background-false");
        }, 1000);
        this.showInfoContent(data);
      } else if (count === 10) {
        count = 0;
      }
    });
    document
      .querySelectorAll(".picture-result__img")[0]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.oneQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[1]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.twoQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[2]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.threeQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[3]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.fourQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[4]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.fiveQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[5]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.sixQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[6]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.sevenQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[7]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.eightQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[8]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.nineQuestion.number}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[9]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${data.tenQuestion.number}.jpg?raw=true`
      );
  }
  showResultAgain() {
    let truePaintOne = localStorage.getItem("trueAnswerOnePicture")
      ? JSON.parse(localStorage.getItem("trueAnswerOnePicture"))
      : [];
    let typePaintOne = localStorage.getItem("typeOnePicture") ? JSON.parse(localStorage.getItem("typeOnePicture")) : [];
    let truePaintTwo = localStorage.getItem("trueAnswerTwoPicture")
      ? JSON.parse(localStorage.getItem("trueAnswerTwoPicture"))
      : [];
    let typePaintTwo = localStorage.getItem("typeTwoPicture") ? JSON.parse(localStorage.getItem("typeTwoPicture")) : [];
    let truePaintThree = localStorage.getItem("trueAnswerThreePicture")
      ? JSON.parse(localStorage.getItem("trueAnswerThreePicture"))
      : [];
    let typePaintThree = localStorage.getItem("typeThreePicture")
      ? JSON.parse(localStorage.getItem("typeThreePicture"))
      : [];
    let truePaintFour = localStorage.getItem("trueAnswerFourPicture")
      ? JSON.parse(localStorage.getItem("trueAnswerFourPicture"))
      : [];
    let typePaintFour = localStorage.getItem("typeFourPicture")
      ? JSON.parse(localStorage.getItem("typeFourPicture"))
      : [];
    let truePaintFive = localStorage.getItem("trueAnswerFivePicture")
      ? JSON.parse(localStorage.getItem("trueAnswerFivePicture"))
      : [];
    let typePaintFive = localStorage.getItem("typeFivePicture")
      ? JSON.parse(localStorage.getItem("typeFivePicture"))
      : [];
    let truePaintSix = localStorage.getItem("trueAnswerSixPicture")
      ? JSON.parse(localStorage.getItem("trueAnswerSixPicture"))
      : [];
    let typePaintSix = localStorage.getItem("typeSixPicture") ? JSON.parse(localStorage.getItem("typeSixPicture")) : [];
    let truePaintSeven = localStorage.getItem("trueAnswerSevenPicture")
      ? JSON.parse(localStorage.getItem("trueAnswerSevenPicture"))
      : [];
    let typePaintSeven = localStorage.getItem("typeSevenPicture")
      ? JSON.parse(localStorage.getItem("typeSevenPicture"))
      : [];
    let truePaintEight = localStorage.getItem("trueAnswerEightPicture")
      ? JSON.parse(localStorage.getItem("trueAnswerEightPicture"))
      : [];
    let typePaintEight = localStorage.getItem("typeEightPicture")
      ? JSON.parse(localStorage.getItem("typeEightPicture"))
      : [];
    let truePaintNine = localStorage.getItem("trueAnswerNinePicture")
      ? JSON.parse(localStorage.getItem("trueAnswerNinePicture"))
      : [];
    let typePaintNine = localStorage.getItem("typeNinePicture")
      ? JSON.parse(localStorage.getItem("typeNinePicture"))
      : [];
    let truePaintTen = localStorage.getItem("trueAnswerTenPicture")
      ? JSON.parse(localStorage.getItem("trueAnswerTenPicture"))
      : [];
    let typePaintTen = localStorage.getItem("typeTenPicture") ? JSON.parse(localStorage.getItem("typeTenPicture")) : [];
    let truePaintEleven = localStorage.getItem("trueAnswerElevenPicture")
      ? JSON.parse(localStorage.getItem("trueAnswerElevenPicture"))
      : [];
    let typePaintEleven = localStorage.getItem("typeElevenPicture")
      ? JSON.parse(localStorage.getItem("typeElevenPicture"))
      : [];
    let truePaintTwelve = localStorage.getItem("trueAnswerTwelvePicture")
      ? JSON.parse(localStorage.getItem("trueAnswerTwelvePicture"))
      : [];
    let typePaintTwelve = localStorage.getItem("typeTwelvePicture")
      ? JSON.parse(localStorage.getItem("typeTwelvePicture"))
      : [];
    document.addEventListener("click", (event) => {
      let target = event.target;
      if (target.classList.contains("picture-wrap__btn--one")) {
        this.showInfoContent(typePaintOne);
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
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("picture-wrap__btn--two")) {
        this.showInfoContent(typePaintTwo);
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
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("picture-wrap__btn--three")) {
        this.showInfoContent(typePaintThree);
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
        setInterval(() => {
          document.querySelector(".sk-rotating").classList.add("none");
          document.querySelector(".overlay-preloader").classList.add("none");
        }, 2000);
      } else if (target.classList.contains("picture-wrap__btn--four")) {
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
      } else if (target.classList.contains("picture-wrap__btn--five")) {
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
      } else if (target.classList.contains("picture-wrap__btn--six")) {
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
      } else if (target.classList.contains("picture-wrap__btn--seven")) {
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
      } else if (target.classList.contains("picture-wrap__btn--eight")) {
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
      } else if (target.classList.contains("picture-wrap__btn--nine")) {
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
      } else if (target.classList.contains("picture-wrap__btn--ten")) {
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
      } else if (target.classList.contains("picture-wrap__btn--eleven")) {
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
      } else if (target.classList.contains("picture-wrap__btn--twelve")) {
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
    document.querySelector(".picture-wrap__categories").style.display = "none";
    document.querySelector(".picture-result").style.display = "flex";
    if (type[0] === true) {
      document.querySelectorAll(".picture-result__overlay")[0].classList.add("none");
    } else if (type[0] === false) {
      document.querySelectorAll(".picture-result__overlay")[0].classList.remove("none");
    }
    if (type[1] === true) {
      document.querySelectorAll(".picture-result__overlay")[1].classList.add("none");
    } else if (type[1] === false) {
      document.querySelectorAll(".picture-result__overlay")[1].classList.remove("none");
    }
    if (type[2] === true) {
      document.querySelectorAll(".picture-result__overlay")[2].classList.add("none");
    } else if (type[2] === false) {
      document.querySelectorAll(".picture-result__overlay")[2].classList.remove("none");
    }
    if (type[3] === true) {
      document.querySelectorAll(".picture-result__overlay")[3].classList.add("none");
    } else if (type[3] === false) {
      document.querySelectorAll(".picture-result__overlay")[3].classList.remove("none");
    }
    if (type[4] === true) {
      document.querySelectorAll(".picture-result__overlay")[4].classList.add("none");
    } else if (type[4] === false) {
      document.querySelectorAll(".picture-result__overlay")[4].classList.remove("none");
    }
    if (type[5] === true) {
      document.querySelectorAll(".picture-result__overlay")[5].classList.add("none");
    } else if (type[5] === false) {
      document.querySelectorAll(".picture-result__overlay")[5].classList.remove("none");
    }
    if (type[6] === true) {
      document.querySelectorAll(".picture-result__overlay")[6].classList.add("none");
    } else if (type[6] === false) {
      document.querySelectorAll(".picture-result__overlay")[6].classList.remove("none");
    }
    if (type[7] === true) {
      document.querySelectorAll(".picture-result__overlay")[7].classList.add("none");
    } else if (type[7] === false) {
      document.querySelectorAll(".picture-result__overlay")[7].classList.remove("none");
    }
    if (type[8] === true) {
      document.querySelectorAll(".picture-result__overlay")[8].classList.add("none");
    } else if (type[8] === false) {
      document.querySelectorAll(".picture-result__overlay")[8].classList.remove("none");
    }
    if (type[9] === true) {
      document.querySelectorAll(".picture-result__overlay")[9].classList.add("none");
    } else if (type[9] === false) {
      document.querySelectorAll(".picture-result__overlay")[9].classList.remove("none");
    }
    document
      .querySelectorAll(".picture-result__img")[0]
      .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeOne}.jpg?raw=true`);
    document
      .querySelectorAll(".picture-result__img")[1]
      .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeTwo}.jpg?raw=true`);
    document
      .querySelectorAll(".picture-result__img")[2]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeThree}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[3]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeFour}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[4]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeFive}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[5]
      .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeSix}.jpg?raw=true`);
    document
      .querySelectorAll(".picture-result__img")[6]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeSeven}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[7]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeEight}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[8]
      .setAttribute(
        "src",
        `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeNine}.jpg?raw=true`
      );
    document
      .querySelectorAll(".picture-result__img")[9]
      .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${trueTypeTen}.jpg?raw=true`);
  }
  showInfoContent(data) {
    document.addEventListener("click", (event) => {
      let target = event.target;
      if (
        target.classList.contains("picture-result__overlay--one") ||
        target.classList.contains("picture-result__img--one")
      ) {
        this.showInfoPicture(data.oneQuestion.number);
      } else if (
        target.classList.contains("picture-result__overlay--two") ||
        target.classList.contains("picture-result__img--two")
      ) {
        this.showInfoPicture(data.twoQuestion.number);
      } else if (
        target.classList.contains("picture-result__overlay--three") ||
        target.classList.contains("picture-result__img--three")
      ) {
        this.showInfoPicture(data.threeQuestion.number);
      } else if (
        target.classList.contains("picture-result__overlay--four") ||
        target.classList.contains("picture-result__img--four")
      ) {
        this.showInfoPicture(data.fourQuestion.number);
      } else if (
        target.classList.contains("picture-result__overlay--five") ||
        target.classList.contains("picture-result__img--five")
      ) {
        this.showInfoPicture(data.fiveQuestion.number);
      } else if (
        target.classList.contains("picture-result__overlay--six") ||
        target.classList.contains("picture-result__img--six")
      ) {
        this.showInfoPicture(data.sixQuestion.number);
      } else if (
        target.classList.contains("picture-result__overlay--seven") ||
        target.classList.contains("picture-result__img--seven")
      ) {
        this.showInfoPicture(data.sevenQuestion.number);
      } else if (
        target.classList.contains("picture-result__overlay--eight") ||
        target.classList.contains("picture-result__img--eight")
      ) {
        this.showInfoPicture(data.eightQuestion.number);
      } else if (
        target.classList.contains("picture-result__overlay--nine") ||
        target.classList.contains("picture-result__img--nine")
      ) {
        this.showInfoPicture(data.nineQuestion.number);
      } else if (
        target.classList.contains("picture-result__overlay--ten") ||
        target.classList.contains("picture-result__img--ten")
      ) {
        this.showInfoPicture(data.tenQuestion.number);
      }
    });
    document.querySelector(".picture-info__button").addEventListener("click", () => {
      document.querySelector(".picture-info").classList.remove("picture-info__visible");
      document.querySelector(".overlay").classList.add("none");
    });
  }
  showInfoPicture(type) {
    document.querySelector(".picture-info").classList.add("picture-info__visible");
    document.querySelector(".overlay").classList.remove("none");
    document
      .querySelector(".picture-info__image")
      .setAttribute("src", `https://github.com/Yauheny-Bychkou/image-data/blob/master/img/${type}.jpg?raw=true`);
    document.querySelector(".picture-info__name").innerHTML = this.arr[type].name;
    document.querySelector(".picture-info__author").innerHTML = this.arr[type].author;
    document.querySelector(".picture-info__year").innerHTML = this.arr[type].year;
  }
  updatePage() {
    document.querySelector(".picture-final__button").addEventListener("click", () => {
      document.querySelector(".picture-final").classList.remove("picture-final__visible");
      document.querySelector(".overlay").classList.add("none");
    });
    document.querySelectorAll(".picture-result__main").forEach((item) => {
      item.addEventListener("click", () => {
        window.location.reload();
        let updatePagePicture = "on";
        localStorage.setItem(`updatePagePicture`, JSON.stringify(updatePagePicture));
      });
    });
    document.querySelectorAll(".picture-type__main").forEach((item) => {
      item.addEventListener("click", () => {
        window.location.reload();
      });
    });
    document.querySelector(".picture-result__update").addEventListener("click", () => {
      window.location.reload();
    });
    document.querySelector(".picture-type__categ").addEventListener("click", () => {
      document.querySelector(".picture-type").style.display = "none";
      document.querySelector(".picture-wrap__categories").style.display = "flex";
    });
  }
}
export default QuizPicture;
