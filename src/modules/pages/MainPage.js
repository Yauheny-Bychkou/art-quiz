import Navigation from "../components/Navigation";
import MenuPage from "./MenuPage";
import OptionsPage from "./OptionsPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

class MainPage {
  constructor() {
    document.body.innerHTML = "";
    const pageWrapper = document.createElement("div");
    pageWrapper.classList.add("container");
    const navigation = new Navigation();
    const header = new Header();
    const footer = new Footer();
    navigation.addListenerToPictureButton(() => {
      new MenuPage("Picture");
    });
    navigation.addListenerToAuthorButton(() => {
      new MenuPage("Author");
    });
    navigation.addListenerToOptionsButton(() => {
      new OptionsPage();
    });
    pageWrapper.append(navigation.element);
    document.body.append(header.element, pageWrapper, footer.element);
  }
}
export default MainPage;