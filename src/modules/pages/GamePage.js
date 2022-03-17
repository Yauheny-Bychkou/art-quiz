import GameNavigation from "../components/GameNavigation";
import MainPage from "./MainPage";
import MenuPage from "./MenuPage";
import Question from "../components/Question";
import Answer from "../components/Answer";
import ResultRaund from "../components/ResultRaund";
import ResultPage from "./ResultPage";
import Header from "../components/Header";
import Footer from "../components/Footer";


const NUMBER_FIRST_ELEMENT = 0;
const COUNT_QUESTIONS = 9;
const PICTURE_TYPE_GAME = "Picture";
const AUTHOR_TYPE_GAME = "Author";
const TEXT_BUTTON_RESULT = "Result";
const TEXT_BUTTON_CATEGORYES = "Categoryes";

class GamePage {
  constructor({arrayQuestion, arrayQuestionForGame, type, numberType}) {
    const header = new Header();
    const footer = new Footer();
    this.numberType = numberType;
    this.arrayQuestion = arrayQuestion;
    this.arrayQuestionForGame = arrayQuestionForGame;
    this.type = type;
    this.countQuestion = 0;
    this.arrayTrueAnswers = [];    
    this.navigationWrapper = document.createElement("div");
    this.questionWrapper = document.createElement("div");
    this.gameNavigation = new GameNavigation();
    document.body.innerHTML = "";
    this.navigationWrapper.append(this.gameNavigation.element);
    document.body.append(header.element, this.navigationWrapper, this.questionWrapper, footer.element);
    this.gameNavigation.addListenerToMainButton(() => {
      new MainPage(this.type);
    });
    this.gameNavigation.addListenerToMenuButton(() => {
      new MenuPage(this.type);
    });
    this.startGame(this.arrayQuestion[this.countQuestion].truthyAnswer, this.arrayQuestionForGame[this.countQuestion]);
  }
  startGame(trueAnswer, arrayAnswers) {
    const type = this.type;
    const questionWrapper = this.questionWrapper;
    const arrayTrueAnswers = this.arrayTrueAnswers;
    const objQuestion = {questionWrapper, type, arrayTrueAnswers, trueAnswer, arrayAnswers};
    const qustion = new Question(objQuestion);
  
      qustion.addListenerToWrapperAnswers((event) => {

        if (this.type === PICTURE_TYPE_GAME) {
          if (event.target.innerHTML === this.arrayQuestion[this.countQuestion].truthyAnswer[NUMBER_FIRST_ELEMENT].author) {
            this.showAnswer(true);
          } else {
            this.showAnswer(false);
          }
        } else if (this.type === AUTHOR_TYPE_GAME) {
          if (event.target.id === this.arrayQuestion[this.countQuestion].truthyAnswer[NUMBER_FIRST_ELEMENT].name) {
            this.showAnswer(true);
          } else if (event.target.id !== this.arrayQuestion[this.countQuestion].truthyAnswer[NUMBER_FIRST_ELEMENT].name) {
            this.showAnswer(false);
            
          }
        }
      })
  }
  showAnswer(answerVariant) {
    const wrapper = document.createElement("div");
    this.questionWrapper.append(wrapper);
    wrapper.classList.add("wrapper-absolute");
    this.arrayTrueAnswers.push(answerVariant);
    const trueAnswer = this.arrayQuestion[this.countQuestion].truthyAnswer;
    const answerWrapper = wrapper;
    const objAnswer = {answerWrapper, answerVariant, trueAnswer};
    const answer = new Answer(objAnswer);
    answer.addListenerToButton(() => {
      wrapper.remove();
      if (this.countQuestion < COUNT_QUESTIONS) {
        this.countQuestion++;
        this.startGame(this.arrayQuestion[this.countQuestion].truthyAnswer, this.arrayQuestionForGame[this.countQuestion]);
      } else if(this.countQuestion === COUNT_QUESTIONS) {
        localStorage.setItem(`${this.type}-${this.numberType}`, JSON.stringify(this.arrayTrueAnswers));
        this.showResultRaund(); 
      }
    });
  }
  showResultRaund() {
    this.createWrapperForModalWindow();
    const wrapperResultRaundWrapper = this.createWrapperForModalWindow();
    const arrayTrueAnswers = this.arrayTrueAnswers;
    const objResult = {wrapperResultRaundWrapper, arrayTrueAnswers};
    const resultRaund = new ResultRaund(objResult);
    resultRaund.addListenerToWrapperMenu((event)=>{
      if (event.target.innerHTML === TEXT_BUTTON_RESULT) {
        const arrayQuestion = this.arrayQuestion;
        const type = this.type;
        const numberType = this.numberType;
        new ResultPage({arrayQuestion, type, numberType});
      } else if (event.target.innerHTML === TEXT_BUTTON_CATEGORYES) {
        new MenuPage(this.type);
      }
    })
  }
  createWrapperForModalWindow(){
    const wrapper = document.createElement("div");
    this.questionWrapper.append(wrapper);
    wrapper.classList.add("wrapper-absolute");
    return wrapper;
  }
  
}
export default GamePage;