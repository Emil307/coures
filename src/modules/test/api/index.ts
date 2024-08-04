import axios from "axios";

const API = "https://aso-course.big-nose.ru";

export const getTestById = async (testId: number) => {
  const res = {
    id: 1,
    title: "Тест по первому уроку",
    questions: [
      {
        id: 1,
        question: "Что такое ASO?",
        type: "multi",
        isCustomAvailible: false,
        variants: [
          {
            id: 1,
            value: "Оптимизация магазина приложений",
          },
          {
            id: 2,
            value: "Оптимизация сайта под поисковые системы",
          },
          {
            id: 3,
            value: "Техника пикапа",
          },
          {
            id: 4,
            value: "ммм... похоже придется пройти урок",
          },
        ],
      },
    ],
  };

  return res;
};
