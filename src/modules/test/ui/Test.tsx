import React, { useState, useEffect } from "react";
import { getTestById } from "../api";
import { ITest } from "@/shared";
import toast from "react-hot-toast";
import { Question } from "./Question";

export const Test: React.FC = () => {
  const [test, setTest] = useState<ITest | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    handleGetTest();
  }, []);

  function handleGetTest() {
    setIsLoading(true);
    getTestById(1)
      .then((res: any) => {
        setTest(res);
      })
      .catch((e) => {
        toast.error(
          e.response.data.detail.msg ||
            "Упс... кажется, что-то сломалось :( Мы уже работаем над этим"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      {isLoading && <>Loading...</>}
      {test && (
        <div>
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl">
              Пришло время закрепить изученный материал!
            </h3>
            <h3 className="text-2xl font-normal">
              Пройдите тест, чтобы перейти к следующему уроку
            </h3>
          </div>
          {test.questions.map((question) => (
            <Question question={question} key={question.id} />
          ))}
        </div>
      )}
    </>
  );
};
