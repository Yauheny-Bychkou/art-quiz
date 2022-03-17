import Button from "./button";

class GameNavigation {
  constructor(){
    this.element = document.createElement("div");
    const wrapper = document.createElement("div");
    this.element.classList.add("container");
    this.mainButton = new Button({
      className: "button-question",
      text: "Main",
    });
    this.menuButton = new Button({
      className: "button-question",
      text: "Categoryes",
    });
    wrapper.append(this.mainButton.element, this.menuButton.element);
    this.element.append(wrapper);
  }
  addListenerToMainButton(listener) {
    this.mainButton.addListener(listener);
  }
  addListenerToMenuButton(listener) {
    this.menuButton.addListener(listener);
  }
}
export default GameNavigation;