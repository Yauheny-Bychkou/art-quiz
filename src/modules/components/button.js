class Button {
  element = document.createElement("button");

  constructor({ text, className }) {
    this.addClassName(className).addText(text);
  }
  addText(text) {
    this.element.textContent = text;
    return this;
  }
  addClassName(className) {
    this.element.classList.add(className);
    return this;
  }

  addListener(listener) {
    this.element.addEventListener("click", listener);
    return this;
  }
}

export default Button;