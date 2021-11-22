"use strict";
import QuizPicture from "./quizPicture.js";
import QuizAuthor from "./quizAuthor.js";
const choise = () => {
  class Data {
    constructor() {
      this.buttonStart = document.querySelector(".main-wrap__picture");
      this.buttonStartAuthor = document.querySelector(".main-wrap__painter");
    }
    init() {
      this.startQuiz();
    }

    gamePicture() {
      const getRandomInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const typeOne = {
        questions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        oneQuestion: {
          number: 0,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 1,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 2,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 3,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 4,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 5,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 6,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 7,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 8,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 9,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeTwo = {
        questions: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        oneQuestion: {
          number: 10,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 11,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 12,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 13,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 14,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 15,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 16,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 17,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 18,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 19,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeThree = {
        questions: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        oneQuestion: {
          number: 20,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 21,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 22,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 23,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 24,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 25,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 26,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 27,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 28,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 29,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeFour = {
        questions: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
        oneQuestion: {
          number: 30,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 31,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 32,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 33,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 34,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 35,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 36,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 37,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 38,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 39,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeFive = {
        questions: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
        oneQuestion: {
          number: 40,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 41,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 42,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 43,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 44,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 45,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 46,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 47,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 48,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 49,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeSix = {
        questions: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
        oneQuestion: {
          number: 50,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 51,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 52,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 53,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 54,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 55,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 56,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 57,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 58,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 59,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeSeven = {
        questions: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
        oneQuestion: {
          number: 60,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 61,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 62,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 63,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 64,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 65,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 66,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 67,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 68,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 69,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeEight = {
        questions: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
        oneQuestion: {
          number: 70,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 71,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 72,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 73,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 74,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 75,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 76,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 77,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 78,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 79,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeNine = {
        questions: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
        oneQuestion: {
          number: 80,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 81,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 82,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 83,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 84,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 85,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 86,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 87,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 88,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 89,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeTen = {
        questions: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
        oneQuestion: {
          number: 90,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 91,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 92,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 93,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 94,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 95,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 96,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 97,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 98,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 99,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeEleven = {
        questions: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
        oneQuestion: {
          number: 100,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 101,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 102,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 103,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 104,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 105,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 106,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 107,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 108,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 109,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeTwelve = {
        questions: [110, 111, 112, 113, 114, 115, 116, 117, 118, 119],
        oneQuestion: {
          number: 110,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 111,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 112,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 113,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 114,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 115,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 116,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 117,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 118,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 119,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      localStorage.setItem("typeOnePicture", JSON.stringify(typeOne));
      localStorage.setItem("typeTwoPicture", JSON.stringify(typeTwo));
      localStorage.setItem("typeThreePicture", JSON.stringify(typeThree));
      localStorage.setItem("typeFourPicture", JSON.stringify(typeFour));
      localStorage.setItem("typeFivePicture", JSON.stringify(typeFive));
      localStorage.setItem("typeSixPicture", JSON.stringify(typeSix));
      localStorage.setItem("typeSevenPicture", JSON.stringify(typeSeven));
      localStorage.setItem("typeEightPicture", JSON.stringify(typeEight));
      localStorage.setItem("typeNinePicture", JSON.stringify(typeNine));
      localStorage.setItem("typeTenPicture", JSON.stringify(typeTen));
      localStorage.setItem("typeElevenPicture", JSON.stringify(typeEleven));
      localStorage.setItem("typeTwelvePicture", JSON.stringify(typeTwelve));
    }
    gameAuthor() {
      const getRandomInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const typeOne = {
        questions: [120, 121, 122, 123, 124, 125, 126, 127, 128, 129],
        oneQuestion: {
          number: 120,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 121,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 122,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 123,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 124,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 125,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 126,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 127,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 128,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 129,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeTwo = {
        questions: [130, 131, 132, 133, 134, 135, 136, 137, 138, 139],
        oneQuestion: {
          number: 130,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 131,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 132,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 133,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 134,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 135,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 136,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 137,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 138,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 139,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeThree = {
        questions: [140, 141, 142, 143, 144, 145, 146, 147, 148, 149],
        oneQuestion: {
          number: 140,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 141,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 142,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 143,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 144,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 145,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 146,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 147,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 148,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 149,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeFour = {
        questions: [150, 151, 152, 153, 154, 155, 156, 157, 158, 159],
        oneQuestion: {
          number: 150,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 151,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 152,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 153,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 154,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 155,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 156,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 157,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 158,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 159,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeFive = {
        questions: [160, 161, 162, 163, 164, 165, 166, 167, 168, 169],
        oneQuestion: {
          number: 160,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 161,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 162,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 163,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 164,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 165,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 166,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 167,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 168,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 169,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeSix = {
        questions: [170, 171, 172, 173, 174, 175, 176, 177, 178, 179],
        oneQuestion: {
          number: 170,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 171,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 172,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 173,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 174,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 175,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 176,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 177,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 178,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 179,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeSeven = {
        questions: [180, 181, 182, 183, 184, 185, 186, 187, 188, 189],
        oneQuestion: {
          number: 180,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 181,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 182,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 183,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 184,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 185,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 186,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 187,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 188,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 189,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeEight = {
        questions: [190, 191, 192, 193, 194, 195, 196, 197, 198, 199],
        oneQuestion: {
          number: 190,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 191,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 192,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 193,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 194,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 195,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 196,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 197,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 198,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 199,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeNine = {
        questions: [200, 201, 202, 203, 204, 205, 206, 207, 208, 209],
        oneQuestion: {
          number: 200,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 201,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 202,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 203,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 204,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 205,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 206,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 207,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 208,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 209,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeTen = {
        questions: [210, 211, 212, 213, 214, 215, 216, 217, 218, 219],
        oneQuestion: {
          number: 210,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 211,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 212,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 213,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 214,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 215,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 216,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 217,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 218,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 219,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeEleven = {
        questions: [220, 221, 222, 223, 224, 225, 226, 227, 228, 229],
        oneQuestion: {
          number: 220,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 221,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 222,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 223,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 224,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 225,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 226,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 227,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 228,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 229,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      const typeTwelve = {
        questions: [230, 231, 232, 233, 234, 235, 236, 237, 238, 239],
        oneQuestion: {
          number: 230,
          trueAnswer: getRandomInRange(1, 3),
        },
        twoQuestion: {
          number: 231,
          trueAnswer: getRandomInRange(1, 3),
        },
        threeQuestion: {
          number: 232,
          trueAnswer: getRandomInRange(1, 3),
        },
        fourQuestion: {
          number: 233,
          trueAnswer: getRandomInRange(1, 3),
        },
        fiveQuestion: {
          number: 234,
          trueAnswer: getRandomInRange(1, 3),
        },
        sixQuestion: {
          number: 235,
          trueAnswer: getRandomInRange(1, 3),
        },
        sevenQuestion: {
          number: 236,
          trueAnswer: getRandomInRange(1, 3),
        },
        eightQuestion: {
          number: 237,
          trueAnswer: getRandomInRange(1, 3),
        },
        nineQuestion: {
          number: 238,
          trueAnswer: getRandomInRange(1, 3),
        },
        tenQuestion: {
          number: 239,
          trueAnswer: getRandomInRange(1, 3),
        },
      };
      localStorage.setItem("typeOneAuthor", JSON.stringify(typeOne));
      localStorage.setItem("typeTwoAuthor", JSON.stringify(typeTwo));
      localStorage.setItem("typeThreeAuthor", JSON.stringify(typeThree));
      localStorage.setItem("typeFourAuthor", JSON.stringify(typeFour));
      localStorage.setItem("typeFiveAuthor", JSON.stringify(typeFive));
      localStorage.setItem("typeSixAuthor", JSON.stringify(typeSix));
      localStorage.setItem("typeSevenAuthor", JSON.stringify(typeSeven));
      localStorage.setItem("typeEightAuthor", JSON.stringify(typeEight));
      localStorage.setItem("typeNineAuthor", JSON.stringify(typeNine));
      localStorage.setItem("typeTenAuthor", JSON.stringify(typeTen));
      localStorage.setItem("typeElevenAuthor", JSON.stringify(typeEleven));
      localStorage.setItem("typeTwelveAuthor", JSON.stringify(typeTwelve));
    }
    async startQuiz() {
      try {
        const url = "./picture.json";
        let data = await this.fetchData(url);
        this.buttonStartAuthor.addEventListener("click", () => {
          this.gameAuthor();
          // let startQuizPainter = "on";
          // localStorage.setItem("startQuizPainter", JSON.stringify(startQuizPainter));
          let typePaintOne = localStorage.getItem("typeOneAuthor")
            ? JSON.parse(localStorage.getItem("typeOneAuthor"))
            : [];

          let typePaintTwo = localStorage.getItem("typeTwoAuthor")
            ? JSON.parse(localStorage.getItem("typeTwoAuthor"))
            : [];
          let typePaintThree = localStorage.getItem("typeThreeAuthor")
            ? JSON.parse(localStorage.getItem("typeThreeAuthor"))
            : [];
          let typePaintFour = localStorage.getItem("typeFourAuthor")
            ? JSON.parse(localStorage.getItem("typeFourAuthor"))
            : [];
          let typePaintFive = localStorage.getItem("typeFiveAuthor")
            ? JSON.parse(localStorage.getItem("typeFiveAuthor"))
            : [];
          let typePaintSix = localStorage.getItem("typeSixAuthor")
            ? JSON.parse(localStorage.getItem("typeSixAuthor"))
            : [];
          let typePaintSeven = localStorage.getItem("typeSevenAuthor")
            ? JSON.parse(localStorage.getItem("typeSevenAuthor"))
            : [];
          let typePaintEight = localStorage.getItem("typeEightAuthor")
            ? JSON.parse(localStorage.getItem("typeEightAuthor"))
            : [];
          let typePaintNine = localStorage.getItem("typeNineAuthor")
            ? JSON.parse(localStorage.getItem("typeNineAuthor"))
            : [];
          let typePaintTen = localStorage.getItem("typeTenAuthor")
            ? JSON.parse(localStorage.getItem("typeTenAuthor"))
            : [];
          let typePaintEleven = localStorage.getItem("typeElevenAuthor")
            ? JSON.parse(localStorage.getItem("typeElevenAuthor"))
            : [];
          let typePaintTwelve = localStorage.getItem("typeTwelveAuthor")
            ? JSON.parse(localStorage.getItem("typeTwelveAuthor"))
            : [];

          let arr = [
            typePaintOne,
            typePaintTwo,
            typePaintThree,
            typePaintFour,
            typePaintFive,
            typePaintSix,
            typePaintSeven,
            typePaintEight,
            typePaintNine,
            typePaintTen,
            typePaintEleven,
            typePaintTwelve,
          ];
          const quizAuthor = new QuizAuthor(data, arr);
          quizAuthor.init();
        });
        this.buttonStart.addEventListener("click", () => {
          // let startQuizPicture = "on";
          // localStorage.setItem("startQuizPicture", JSON.stringify(startQuizPicture));
          this.gamePicture();
          let typePictOne = localStorage.getItem("typeOnePicture")
            ? JSON.parse(localStorage.getItem("typeOnePicture"))
            : [];

          let typePictTwo = localStorage.getItem("typeTwoPicture")
            ? JSON.parse(localStorage.getItem("typeTwoPicture"))
            : [];
          let typePictThree = localStorage.getItem("typeThreePicture")
            ? JSON.parse(localStorage.getItem("typeThreePicture"))
            : [];
          let typePictFour = localStorage.getItem("typeFourPicture")
            ? JSON.parse(localStorage.getItem("typeFourPicture"))
            : [];
          let typePictFive = localStorage.getItem("typeFivePicture")
            ? JSON.parse(localStorage.getItem("typeFivePicture"))
            : [];
          let typePictSix = localStorage.getItem("typeSixPicture")
            ? JSON.parse(localStorage.getItem("typeSixPicture"))
            : [];
          let typePictSeven = localStorage.getItem("typeSevenPicture")
            ? JSON.parse(localStorage.getItem("typeSevenPicture"))
            : [];
          let typePictEight = localStorage.getItem("typeEightPicture")
            ? JSON.parse(localStorage.getItem("typeEightPicture"))
            : [];
          let typePictNine = localStorage.getItem("typeNinePicture")
            ? JSON.parse(localStorage.getItem("typeNinePicture"))
            : [];
          let typePictTen = localStorage.getItem("typeTenPicture")
            ? JSON.parse(localStorage.getItem("typeTenPicture"))
            : [];
          let typePictEleven = localStorage.getItem("typeElevenPicture")
            ? JSON.parse(localStorage.getItem("typeElevenPicture"))
            : [];
          let typePictTwelve = localStorage.getItem("typeTwelvePicture")
            ? JSON.parse(localStorage.getItem("typeTwelvePicture"))
            : [];

          let arrPict = [
            typePictOne,
            typePictTwo,
            typePictThree,
            typePictFour,
            typePictFive,
            typePictSix,
            typePictSeven,
            typePictEight,
            typePictNine,
            typePictTen,
            typePictEleven,
            typePictTwelve,
          ];
          const quizPicture = new QuizPicture(data, arrPict);
          quizPicture.init();
        });
      } catch (error) {
        alert(error);
      }
    }
    async fetchData(url) {
      const response = await fetch(url);
      const result = await response.json();

      return result;
    }
  }
  const data = new Data();
  data.init();
};
export default choise;
