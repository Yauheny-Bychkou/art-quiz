import Button from "./button";

class InfoPicture {
  constructor({wrapper, picture}) {
    const element = document.createElement("div");
    const overlay = document.createElement("div");
    const image = document.createElement("img");
    const titleNamePicture = document.createElement("h2");
    const titleAuthor = document.createElement("h3");
    const titleYear =  document.createElement("h3");
    image.setAttribute("alt", "Picture");
    image.setAttribute("src", `https://raw.githubusercontent.com/irinainina/image-data/master/img/${picture.imageNum}.jpg`);
    titleNamePicture.innerHTML = picture.name;
    titleAuthor.innerHTML = picture.author;
    titleYear.innerHTML = picture.year;
    image.classList.add("image-modal");
    this.buttonClose = new Button({
      className: "button-info",
      text: "Close",
    }); 
    element.classList.add("wrapper-answer");
    overlay.classList.add("overlay");
   
    element.append(image,titleNamePicture, titleAuthor, titleYear, this.buttonClose.element);
    wrapper.append(element, overlay);
  }
  addListenerToCloseButton(listener) {
    this.buttonClose.addListener(listener);
  }
}
export default InfoPicture;