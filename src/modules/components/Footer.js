const YEAR = "2022";

class Footer {
  constructor() {
    this.element = document.createElement("div");
    const leftWrapper = document.createElement("div");
    const rightWrapper = document.createElement("div");
    const linkCource = document.createElement("a");
    const imageLogo = document.createElement("img");
    const linkGit  = document.createElement("a");
    const spanYear = document.createElement("span");
    spanYear.classList.add("span-year");
    spanYear.innerHTML = YEAR;
    imageLogo.setAttribute("alt", "logo");
    imageLogo.setAttribute("src", "img/rs.svg");
    linkCource.setAttribute("href", "https://rs.school/js/");
    linkCource.setAttribute("target", "blank");
    linkGit.innerHTML = "App developer: Yauheny Bychkou";
    linkGit.setAttribute("href", "https://github.com/Yauheny-Bychkou");
    linkGit.setAttribute("target", "blank");
    linkGit.classList.add("footer-link");
    linkCource.append(imageLogo);
    leftWrapper.append(linkCource);
    rightWrapper.append(linkGit, spanYear);
    this.element.classList.add("footer")
    this.element.append(leftWrapper, rightWrapper);
  }
}
export default Footer;