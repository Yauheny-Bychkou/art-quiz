import GamePage from "../pages/GamePage";
import ResultPage from "../pages/ResultPage";

const PICTURE_TYPE_GAME = "Picture";
const AUTHOR_TYPE_GAME = "Author";
const COUNT_TWO_PARTS = 2;
const NUMBER_ARRAY_FOR_PICTURE = 0;
const NUMBER_ARRAY_FOR_AUTHOR = 1;
const COUNT_TYPE_QUESTIONS = 12;
const ARRAY_COUNT_ANSWERS = [1, 2, 3, 4];
const COUNT_FALSE_ANSWERS_PER_PAGE = 3;
const TYPE_PAGE_GAME = "game";
const TYPE_PAGE_RESULT = "result";
const URL = "./picture.json";

class PreparationGame{
  constructor({type, numberType, typePage}) {
    this.typePage = typePage;
    this.type = type;
    this.numberType = numberType;
    this.getAllPictures();
  }
  async getAllPictures() {
      const requestArrayPicture = await fetch(URL);
      const arrayPicture = await requestArrayPicture.json();
      this.createQuestionsForGame(arrayPicture);
  }
  createQuestionsForGame(arrayPicture) {
    const mainArrayPicture = this.splitArray(arrayPicture, COUNT_TWO_PARTS);
    mainArrayPicture[NUMBER_ARRAY_FOR_PICTURE].splice(length-1, 1);
    const arrayTrueAnswerPicture = this.splitArray(mainArrayPicture[NUMBER_ARRAY_FOR_PICTURE], COUNT_TYPE_QUESTIONS);
    const arrayTrueAnswerAuthor = this.splitArray(mainArrayPicture[NUMBER_ARRAY_FOR_AUTHOR], COUNT_TYPE_QUESTIONS);
    const arrayFalseAnswerPicture = mainArrayPicture[NUMBER_ARRAY_FOR_AUTHOR].concat(mainArrayPicture[NUMBER_ARRAY_FOR_AUTHOR].concat(mainArrayPicture[NUMBER_ARRAY_FOR_AUTHOR]));
    const arrayFalseAnswerAuthor = mainArrayPicture[NUMBER_ARRAY_FOR_PICTURE].concat(mainArrayPicture[NUMBER_ARRAY_FOR_PICTURE].concat(mainArrayPicture[NUMBER_ARRAY_FOR_PICTURE]));
    if (this.type === PICTURE_TYPE_GAME) {
      const arrayAllQuestions = this.splitArray(arrayFalseAnswerPicture, arrayTrueAnswerPicture.length).map((elem, i, arr) => {
        return { truthyAnswer: arrayTrueAnswerPicture[i], falsyAnswers: arr[i] }
      })
      this.getQuestionForGame(arrayAllQuestions);
    } else if (this.type === AUTHOR_TYPE_GAME) {
      const arrayAllQuestions = this.splitArray(arrayFalseAnswerAuthor, arrayTrueAnswerAuthor.length).map((elem, i, arr) => {
        return { truthyAnswer: arrayTrueAnswerAuthor[i], falsyAnswers: arr[i] }
      })
      this.getQuestionForGame(arrayAllQuestions)
    }
  }
  getQuestionForGame(arrayAllQuestions) {  
    const type = this.type;
    const numberType = this.numberType;
    const arrayInitialQuestions = arrayAllQuestions;
    const trueAnswers = arrayInitialQuestions[this.numberType].truthyAnswer.map((item) => [item]);
    const falseAnswers = arrayInitialQuestions[this.numberType].falsyAnswers;
    let splitArrayFalseAnswers = [];
     for (let i = 0; i < falseAnswers.length; i += COUNT_FALSE_ANSWERS_PER_PAGE) {
        splitArrayFalseAnswers.push(falseAnswers.slice(i, i + COUNT_FALSE_ANSWERS_PER_PAGE));
      }   
    const arrayQuestion = splitArrayFalseAnswers.map((elem, i , arr)=>{
      return { truthyAnswer: trueAnswers[i], falsyAnswers: arr[i] }
    })
    const arrayQuestionForGame = arrayQuestion.map((elem) => {
      return this.shuffleArray(ARRAY_COUNT_ANSWERS.map((item, i) => elem.truthyAnswer.concat(elem.falsyAnswers)[i]));
    });
    if(this.typePage === TYPE_PAGE_GAME) {
      new GamePage({arrayQuestion, arrayQuestionForGame, type, numberType});
    } else if(this.typePage === TYPE_PAGE_RESULT) {
      new ResultPage({arrayQuestion, type, numberType});
    }
  }
  splitArray(arrayPicture, parts) {
    const result = new Array(parts)
    for (let i = 0; i < parts; ++i) {
      result[i] = []
    }
    for (let i = 0; i < arrayPicture.length; ++i) {
      result[i % parts].push(arrayPicture[i])
    }
    return result  
  }
  shuffleArray(arr) {
    let currentIndex = arr.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
  return arr;
  }
}
export default PreparationGame;