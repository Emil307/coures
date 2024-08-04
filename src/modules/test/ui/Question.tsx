import React from "react";
import { Variant } from "./Variant";
import { IQuestion } from "@/shared";

interface IQuestionProps {
  question: IQuestion;
}

export const Question: React.FC<IQuestionProps> = ({ question }) => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-bold text-2xl">{question.question}</h4>
      <div className="flex flex-col gap-4">
        {question.variants.map((variant) => (
          <Variant variant={variant} question={question} key={variant.id} />
        ))}
      </div>
    </div>
  );
};
