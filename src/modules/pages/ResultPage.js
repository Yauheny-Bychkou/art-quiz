import GameNavigation from "../components/GameNavigation";
import MainPage from "./MainPage";
import MenuPage from "./MenuPage";
import Result from "../components/Result";
import InfoPicture from "../components/InfoPicture";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NUMBER_FIRST_ELEMENT = 0;

class ResultPage {
  constructor({arrayQuestion, type, numberType}) {
    const header = new Header();
    const footer = new Footer();
    this.navigationWrapper = document.createElement("div");
    this.resultWrapper = document.createElement("div");
    this.resultWrapper.classList.add("container", "container-result");
    this.result = new Result({arrayQuestion, type, numberType});
    this.gameNavigation = new GameNavigation();
    document.body.innerHTML = "";
    this.navigationWrapper.append(this.gameNavigation.element);
    this.resultWrapper.append(this.result.element)
    document.body.append(header.element, this.navigationWrapper, this.resultWrapper, footer.element);
    this.gameNavigation.addListenerToMainButton(() => {
      new MainPage(type);
    });
    this.gameNavigation.addListenerToMenuButton(() => {
      new MenuPage(type);
    });
    this.result.addListenerToWrapperImages((event)=> {
      arrayQuestion.forEach((item)=>{
        if(event.target.dataset.number === item.truthyAnswer[NUMBER_FIRST_ELEMENT].imageNum) {
          this.showInfoPicture(item.truthyAnswer[NUMBER_FIRST_ELEMENT]);
        }
      })
    })
  }
  showInfoPicture(picture) {
    const wrapper = document.createElement("div");
    this.resultWrapper.append(wrapper);
    wrapper.classList.add("wrapper-absolute");
    const objInfo = {wrapper, picture};
    const infoPicture = new InfoPicture(objInfo);
    infoPicture.addListenerToCloseButton(()=>{
      wrapper.remove();
    });
  }

}
export default ResultPage;