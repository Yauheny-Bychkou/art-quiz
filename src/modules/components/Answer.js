import Button from "./button";

const NUMBER_FIRST_ELEMENT = 0;

class Answer {
  constructor({answerWrapper, answerVariant, trueAnswer}) {
    const element = document.createElement("div");
    const overlay = document.createElement("div");
    const answersWrapper = document.createElement("div");
    const imageResult = document.createElement("img");
    const imageAnswer = document.createElement("img");
    const titleNamePicture = document.createElement("h2");
    const titleNameAuthor = document.createElement("h3");
    const titleYear = document.createElement("h3");
    this.button = new Button({
      className: "button-modal",
      text: "Next question",
    }); 
    imageResult.setAttribute("alt", "Result");
    imageAnswer.setAttribute("alt", "Picture");
    imageResult.setAttribute("src", answerVariant === true? "img/ok.svg":"img/error.svg");
    imageAnswer.setAttribute("src", `https://raw.githubusercontent.com/irinainina/image-data/master/img/${trueAnswer[NUMBER_FIRST_ELEMENT].imageNum}.jpg`);
    titleNamePicture.innerHTML = trueAnswer[NUMBER_FIRST_ELEMENT].name;
    titleNameAuthor.innerHTML = trueAnswer[NUMBER_FIRST_ELEMENT].author;
    titleYear.innerHTML = trueAnswer[NUMBER_FIRST_ELEMENT].year;
    imageAnswer.classList.add("image-modal");
    overlay.classList.add("overlay");
    answersWrapper.classList.add("wrapper-answer");
    answersWrapper.append(imageResult, imageAnswer, titleNamePicture, titleNameAuthor, titleYear, this.button.element);
    element.append(overlay, answersWrapper);
    answerWrapper.append(element);
  }

  addListenerToButton(listener) {
    this.button.addListener(listener);
  }
}
export default Answer;