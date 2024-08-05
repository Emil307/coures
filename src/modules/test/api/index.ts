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
        type: "single",
        isCustomAvailible: false,
        variants: [
          {
            id: 1,
            value: "Оптимизация магазина приложений",
          },
        ],
      },
    ],
  };

  return res;
};
