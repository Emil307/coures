import React from "react";
import { Variant } from "./Variant";
import { IQuestion } from "@/shared";

interface IQuestionProps {
  question: IQuestion;
}

export const Question: React.FC<IQuestionProps> = ({ question }) => {
  return (
    <div>
      {question.question}
      <div>
        {question.variants.map((variant) => (
          <Variant variant={variant} question={question} key={variant.id} />
        ))}
      </div>
    </div>
  );
};
