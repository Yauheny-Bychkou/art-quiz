import Button from "./button";

const COUNT_QUESTIONS = 13;
const PICTURE_TYPE_GAME = "Picture";
const AUTHOR_TYPE_GAME = "Author";
const COUNT_ALL_QUESTIONS_IN_TYPE = "/10";

class Menu {
  constructor(type) {
  this.element = document.createElement("div");
  this.element.classList.add("container");
  this.wrapperButtons = document.createElement("div");
  this.mainButton = new Button({
      className: "button-menu",
      text: "Main",
    });
  this.element.append(this.mainButton.element, this.wrapperButtons);
  this.wrapperButtons.classList.add("wrapper-menu");
  let typeGame = "";
  if(type === PICTURE_TYPE_GAME) {
    typeGame = PICTURE_TYPE_GAME;
  } else if(type === AUTHOR_TYPE_GAME) {
    typeGame = AUTHOR_TYPE_GAME;
  }
    for (let i = 1; i < COUNT_QUESTIONS; i++) {
      const buttonOverlay = document.createElement("div");
      const spanNumberCategoryQuestions = document.createElement("span");
      const wrapperForCountAnswers = document.createElement("div");
      const spanCountTrueAnswers = document.createElement("span");
      const spanCountQuestions = document.createElement("span");
      const buttonAgain = document.createElement("button");
      const button = this.pictureButton = new Button({
        className: `button-type`,
        text: "",
      }).element;
      buttonAgain.innerHTML = "Result";
      spanNumberCategoryQuestions.innerHTML = i;
      spanCountQuestions.innerHTML = COUNT_ALL_QUESTIONS_IN_TYPE;
      buttonAgain.classList.add("button-result", "none");
      spanNumberCategoryQuestions.classList.add("number-category");
      wrapperForCountAnswers.classList.add("wrapper-count", "none");
      buttonOverlay.classList.add("button-overlay", `button-overlay-${i}`);
      if(localStorage.getItem(`${typeGame}-${i-1}`)){
        let countTrueAnswers = 0;
        const arrayAnswers = JSON.parse(localStorage.getItem(`${typeGame}-${i-1}`));
        buttonAgain.classList.remove("none");
        wrapperForCountAnswers.classList.remove("none");
        for (let i = 0; i < arrayAnswers.length; i++) {
          if(arrayAnswers[i]===true){
            countTrueAnswers++
          }
        }
        spanCountTrueAnswers.innerHTML = countTrueAnswers;
      }
      wrapperForCountAnswers.append(spanCountTrueAnswers, spanCountQuestions);
      button.append(spanNumberCategoryQuestions, wrapperForCountAnswers, buttonAgain, buttonOverlay);
      this.wrapperButtons.append(button)
    }
  }

  addListenerToWrapperMenu(listener){
    this.element.addEventListener("click", listener);
  }
}
export default Menu;