import Button from "./button";

const PICTURE_TYPE_GAME = "Picture";
const AUTHOR_TYPE_GAME = "Author";
const TITLE_QUESTION_PICTURE = "Who is the author of this picture?";
const COUNT_DOTS_QUESTIONS = 10;
const NUMBER_FIRST_ELEMENT = 0;

class Question {
  constructor({questionWrapper, type, arrayTrueAnswers, trueAnswer, arrayAnswers}) {
    questionWrapper.innerHTML = ""; 
    questionWrapper.classList.add("container");
    this.titleQuestion = document.createElement("h2");
    this.wrapperDots = document.createElement("div");
    this.wrapperAnswers = document.createElement("div");
    this.wrapperDots.classList.add("wrapper-dots");
    for (let i= 0; i < COUNT_DOTS_QUESTIONS; i++) {
      const dot = document.createElement("div");
      if (i === arrayTrueAnswers.length){
        dot.classList.add("dot-answer-blue");
      }
      dot.classList.add("dot-answer");
      if(arrayTrueAnswers[i] === true) {
        dot.classList.add("dot-answer-true");
      } else if (arrayTrueAnswers[i] === false){
        dot.classList.add("dot-answer-false");
      }
      this.wrapperDots.append(dot);
    }
    if (type === PICTURE_TYPE_GAME) {
      this.wrapperAnswers.classList.add("wrapper-buttons__name");
      this.wrapperImage = document.createElement("div");
      this.image = document.createElement("img");
      this.titleQuestion.innerHTML = TITLE_QUESTION_PICTURE;
      for (let i = 0; i < arrayAnswers.length; i++) {
        const button = new Button({
          className: "button-answer",
          text: `${arrayAnswers[i].author}`,
        });
        this.wrapperAnswers.append(button.element);

      }
      this.image.setAttribute("alt", "Picture");
      this.image.setAttribute("src", `https://raw.githubusercontent.com/irinainina/image-data/master/img/${trueAnswer[NUMBER_FIRST_ELEMENT].imageNum}.jpg`);
      this.image.classList.add("image-question");
      this.wrapperImage.append(this.image);
      questionWrapper.append(this.titleQuestion, this.wrapperImage, this.wrapperDots, this.wrapperAnswers);
    } else if (type === AUTHOR_TYPE_GAME) {
      this.titleQuestion.innerHTML = `What picture did you paint ${trueAnswer[NUMBER_FIRST_ELEMENT].author}?`;
      for (let i = 0; i < arrayAnswers.length; i++) {
        const button = new Button({
          className: "button-picture",
          text: "",
        });
        const image = document.createElement("img");
        const overlay = document.createElement("div");
        overlay.classList.add("button-overlay");
        overlay.setAttribute("id", arrayAnswers[i].name)
        image.setAttribute("alt", "Picture");
        image.setAttribute("src", `https://raw.githubusercontent.com/irinainina/image-data/master/img/${arrayAnswers[i].imageNum}.jpg`);
        image.classList.add("answer-image");
        button.element.append(image, overlay);
        this.wrapperAnswers.classList.add("wrapper-images");
        this.wrapperAnswers.append(button.element);
      }
      
      questionWrapper.append(this.titleQuestion, this.wrapperDots, this.wrapperAnswers);
    }
  }
  addListenerToWrapperAnswers(listener){
    this.wrapperAnswers.addEventListener("click", listener);
  }
  
}
export default Question;