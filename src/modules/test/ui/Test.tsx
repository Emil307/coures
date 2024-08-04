import React, { useState, useEffect } from "react";
import { getTestById } from "../api";
import { ITest } from "@/shared";
import toast from "react-hot-toast";
import { Question } from "./Question";
import { Button } from "@chakra-ui/react";

export const Test: React.FC = () => {
  const [test, setTest] = useState<ITest | null>(null);
  const [isTestLoading, setIsTestLoading] = useState<boolean>(false);
  const [isAnswersCorrect, setIsAnswersCorrect] = useState<boolean>(false);
  const [isSendingAnswers, setIsSendingAnswers] = useState<boolean>(false);

  useEffect(() => {
    handleGetTest();
  }, []);

  function handleGetTest() {
    setIsTestLoading(true);
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
        setIsTestLoading(false);
      });
  }

  function handleSendAnswers() {
    setIsSendingAnswers(true);
    setTimeout(() => {
      setIsAnswersCorrect(true);
      setIsSendingAnswers(false);
    }, 500);
  }

  return (
    <>
      {isTestLoading && <>Loading...</>}
      {test && (
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl">
              Пришло время закрепить изученный материал!
            </h3>
            <h3 className="text-xl font-normal">
              Пройдите тест, чтобы перейти к следующему уроку
            </h3>
          </div>
          <div>
            {test.questions.map((question) => (
              <Question question={question} key={question.id} />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <Button
              onClick={handleSendAnswers}
              isDisabled={isAnswersCorrect}
              isLoading={isSendingAnswers}
              size={"lg"}
            >
              Проверить ответы
            </Button>
            <Button isDisabled={!isAnswersCorrect} size={"lg"}>
              К следующему уроку!
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
