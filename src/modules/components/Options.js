import Button from "./button";

class Options {
  constructor(){
    this.element = document.createElement("div");
    this.element.classList.add("container");
    this.mainButton = new Button({
      className: "button-menu",
      text: "Main",
    });
    this.element.append(this.mainButton.element)
  }
   addListenerToMainButton(listener) {
    this.mainButton.addListener(listener);
  }
}
export default Options;