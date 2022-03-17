
const NUMBER_FIRST_ELEMENT = 0;

class Result {
  constructor({arrayQuestion, type, numberType}){
    this.element = document.createElement("div");
    this.element.classList.add("wrapper-result");
    const arrayAnswers = JSON.parse(localStorage.getItem(`${type}-${numberType}`));
    for (let i = 0; i < arrayQuestion.length; i++) {
      const wrapper = document.createElement("div");
      const image = document.createElement("img");
      image.setAttribute("alt", "Picture");
      image.setAttribute("data-number", arrayQuestion[i].truthyAnswer[NUMBER_FIRST_ELEMENT].imageNum);
      image.setAttribute("src", `https://raw.githubusercontent.com/irinainina/image-data/master/img/${arrayQuestion[i].truthyAnswer[NUMBER_FIRST_ELEMENT].imageNum}.jpg`);
      wrapper.classList.add("wrapper-image");
      image.classList.add("image-result");
      wrapper.append(image);
      if(arrayAnswers[i] === false) {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay-result")
        overlay.setAttribute("data-number", arrayQuestion[i].truthyAnswer[NUMBER_FIRST_ELEMENT].imageNum);
        wrapper.append(overlay);
      }
      this.element.append(wrapper);
    }
  }
  addListenerToWrapperImages(listener){
    this.element.addEventListener("click", listener);
  }
}
export default Result;