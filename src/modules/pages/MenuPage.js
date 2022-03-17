import Menu from "../components/Menu";
import MainPage from "./MainPage";
import PreparationGame from "../components/PreparationGame";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TYPE_PAGE_GAME = "game";
const TYPE_PAGE_RESULT = "result";

class MenuPage {
  constructor(type) {
    const header = new Header();
    const footer = new Footer();
    this.type = type;
    this.menu = new Menu(this.type);
    this.element = document.createElement("div");
    this.element.append(this.menu.element);
    document.body.innerHTML = "";
    document.body.append(header.element, this.element, footer.element);
    this.menu.addListenerToWrapperMenu((event) => {
      const target = event.target;
      const collectionMenuButtons = document.querySelectorAll(".button-overlay");
      const collectionResultButtons = document.querySelectorAll(".button-result");
      const isButtonMain = target.classList.contains("button-menu");
      const isButtonMenu = target.classList.contains("button-overlay");
      const isButtonResult = target.classList.contains("button-result");
      const type = this.type;
      if(isButtonMain){
        new MainPage();
      } else if (isButtonMenu) {
        collectionMenuButtons.forEach((item, i) => {
          if(event.target === item) {
            const typePage = TYPE_PAGE_GAME;
            const numberType = i;
            new PreparationGame({type, numberType, typePage});
          }
        })
      } else if (isButtonResult){
        collectionResultButtons.forEach((item, i) => {
          if(event.target === item){
            const typePage = TYPE_PAGE_RESULT;
            const numberType = i;
            new PreparationGame({type, numberType, typePage});
          }
        })
      }
    });
  
  }

}
export default MenuPage;