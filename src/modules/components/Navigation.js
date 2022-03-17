import Button from "./button";

class Navigation {  
 constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("container")
    this.pictureButton = new Button({
      className: "button-main",
      text: "Picture",
    });
    this.authorButton = new Button({
      className: "button-main",
      text: "Author",
    });
    this.optionsButton = new Button({
      className: "button-main",
      text: "Options",
    });
    this.element.append(this.pictureButton.element, this.authorButton.element, this.optionsButton.element);
  }
  addListenerToPictureButton(listener) {
    this.pictureButton.addListener(listener);
  }

  addListenerToAuthorButton(listener) {
    this.authorButton.addListener(listener);
  }
  addListenerToOptionsButton(listener) {
    this.optionsButton.addListener(listener);
  }
}

export default Navigation;
