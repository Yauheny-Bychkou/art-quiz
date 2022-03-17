import Button from "./button";

const COUNT_ALL_QUESTIONS_IN_TYPE = "/10";
const TEXT_TITLE_RESULT = "Congratulations!";

class ResultRaund {
  constructor({wrapperResultRaundWrapper, arrayTrueAnswers}) {
    const element = document.createElement("div");
    const overlay = document.createElement("div");
    this.wrapperButtons = document.createElement("div");
    const imageResult = document.createElement("img");
    const titleResultRaund = document.createElement("h2");
    const titleCountAnswers = document.createElement("h3");
    const spanCountTrueAnswer = document.createElement("span");
    const spanCountAllQuestions = document.createElement("span");
    let countTrueAnswer = 0;
    const buttonResult = new Button({
      className: "button-final",
      text: "Result",
    }); 

    const buttonCategory = new Button({
      className: "button-final",
      text: "Categoryes",
    }); 
    for (let i = 0; i < arrayTrueAnswers.length; i++) {
      if (arrayTrueAnswers[i] === true) countTrueAnswer++;
    }
    imageResult.setAttribute("alt", "Result");
    imageResult.setAttribute("src", "https://raw.githubusercontent.com/Yauheny-Bychkou/Images/ae008552b0d2c5dd7bdf8107230bc2531d7d253b/quiz/final.svg");
    titleResultRaund.innerHTML = TEXT_TITLE_RESULT;
    spanCountTrueAnswer.innerHTML = countTrueAnswer;
    spanCountAllQuestions.innerHTML = COUNT_ALL_QUESTIONS_IN_TYPE;
    this.wrapperButtons.append(buttonResult.element, buttonCategory.element);
    element.classList.add("wrapper-answer");
    overlay.classList.add("overlay");
    titleCountAnswers.append(spanCountTrueAnswer, spanCountAllQuestions);
    element.append(imageResult, titleResultRaund, titleCountAnswers, this.wrapperButtons);
    wrapperResultRaundWrapper.append(element, overlay);
  }
  addListenerToWrapperMenu(listener){
    this.wrapperButtons.addEventListener("click", listener);
  }
}
export default ResultRaund;