import Options from "../components/Options";
import MainPage from "./MainPage";
import Header from "../components/Header";
import Footer from "../components/Footer";


class OptionsPage {
  constructor(){
    const header = new Header();
    const footer = new Footer();
    document.body.innerHTML = "";
    this.options = new Options();
    this.element = document.createElement("div");
    this.element.append(this.options.element);
    document.body.append(header.element, this.element, footer.element);
    this.options.addListenerToMainButton(()=>{
      new MainPage();
    });
  }
}
export default OptionsPage;